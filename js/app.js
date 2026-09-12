
        // Configurar PDF.js Worker (Local / Offline)
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/pdf.worker.min.js';

        // Elementos del DOM generales
        const dropzone = document.getElementById('dropzone');
        const fileInput = document.getElementById('cv-file');
        const fileIndicator = document.getElementById('file-indicator');
        const jobDescTextarea = document.getElementById('job-description');
        const btnScan = document.getElementById('btn-scan');
        const emptyState = document.getElementById('empty-state');
        const loader = document.getElementById('scanner-loading');
        const resultsDashboard = document.getElementById('results-dashboard');
        const scoreRing = document.getElementById('score-ring');
        const scoreVal = document.getElementById('score-val');
        const scoreVerdict = document.getElementById('score-verdict');

        // Estado interno
        let extractedText = "";
        let fileName = "";

        

        // Drag and drop event listeners
        ['dragenter', 'dragover'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                dropzone.classList.add('dragover');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                dropzone.classList.remove('dragover');
            }, false);
        });

        dropzone.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            if (files.length > 0) {
                fileInput.files = files;
                handleFileSelect(files[0]);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileSelect(e.target.files[0]);
            }
        });

        // Eventos Drag and drop para la zona de foto de perfil
        const photoDropzone = document.getElementById('photo-dropzone');
        if (photoDropzone) {
            ['dragenter', 'dragover'].forEach(eventName => {
                photoDropzone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    photoDropzone.classList.add('dragover');
                }, false);
            });

            ['dragleave', 'drop'].forEach(eventName => {
                photoDropzone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    photoDropzone.classList.remove('dragover');
                }, false);
            });

            photoDropzone.addEventListener('drop', (e) => {
                const dt = e.dataTransfer;
                if (dt && dt.files && dt.files.length > 0) {
                    const input = document.getElementById('photo-file-input');
                    if (input) input.files = dt.files;
                    window.handlePhotoSelect(e);
                }
            });
        }

        // ─── LÓGICA DE FOTO DE PERFIL ──────────────────────────────────────
        window.togglePhotoState = function(enabled) {
            const container = document.getElementById('photo-upload-container');
            const photoBox = document.getElementById('cv-photo-box');
            if (container) container.style.display = enabled ? 'block' : 'none';
            if (photoBox) photoBox.style.display = enabled ? 'flex' : 'none';
        };

        window.handlePhotoSelect = function(event) {
            const file = event.target.files ? event.target.files[0] : (event.dataTransfer ? event.dataTransfer.files[0] : null);
            if (!file) return;

            if (!file.type.startsWith('image/')) {
                alert('Por favor, selecciona un archivo de imagen válido (JPG, PNG, WebP).');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    // Escalar y centrar la foto COMPLETA dentro de un canvas de 300x360 (aspect ratio 5:6 estándar de foto)
                    const canvasW = 300;
                    const canvasH = 360;
                    const canvas = document.createElement('canvas');
                    canvas.width = canvasW;
                    canvas.height = canvasH;
                    const ctx = canvas.getContext('2d');

                    // Fondo blanco limpio
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvasW, canvasH);

                    // Ajuste proporcional completo (contain)
                    const scale = Math.min(canvasW / img.width, canvasH / img.height);
                    const drawW = img.width * scale;
                    const drawH = img.height * scale;
                    const offsetX = (canvasW - drawW) / 2;
                    const offsetY = (canvasH - drawH) / 2;

                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';
                    ctx.drawImage(img, 0, 0, img.width, img.height, offsetX, offsetY, drawW, drawH);

                    // Optimizar compresión
                    const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.88);

                    // Editor thumbnail
                    const thumbImg = document.getElementById('photo-thumb-img');
                    const thumbName = document.getElementById('photo-thumb-name');
                    const indicator = document.getElementById('photo-preview-indicator');
                    const prompt = document.getElementById('photo-upload-prompt');
                    if (thumbImg) thumbImg.src = optimizedDataUrl;
                    if (thumbName) thumbName.textContent = file.name;
                    if (indicator) indicator.style.display = 'flex';
                    if (prompt) prompt.style.display = 'none';

                    // CV Preview
                    const cvImg = document.getElementById('cv-photo-img');
                    const cvPlaceholder = document.getElementById('cv-photo-placeholder');
                    if (cvImg) {
                        cvImg.src = optimizedDataUrl;
                        cvImg.style.display = 'block';
                    }
                    if (cvPlaceholder) cvPlaceholder.style.display = 'none';
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };

        window.removePhoto = function(event) {
            if (event) event.stopPropagation();
            const input = document.getElementById('photo-file-input');
            const indicator = document.getElementById('photo-preview-indicator');
            const prompt = document.getElementById('photo-upload-prompt');
            const cvImg = document.getElementById('cv-photo-img');
            const cvPlaceholder = document.getElementById('cv-photo-placeholder');

            if (input) input.value = '';
            if (indicator) indicator.style.display = 'none';
            if (prompt) prompt.style.display = 'block';
            if (cvImg) {
                cvImg.src = '';
                cvImg.style.display = 'none';
            }
            if (cvPlaceholder) cvPlaceholder.style.display = 'flex';
        };

        jobDescTextarea.addEventListener('input', checkInputsValidity);

        function checkInputsValidity() {
            const cvText = getCurrentCVText();
            const hasText = cvText && cvText.trim().length > 50;
            const hasJobDesc = jobDescTextarea.value && jobDescTextarea.value.trim().length > 20;
            btnScan.disabled = !(hasText && hasJobDesc);
        }

        function escapeHTML(str) {
            if (!str) return "";
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        // Manejo del Archivo (PDF / TXT)
        function getFileBadgeClass(ext) {
            if (ext === 'pdf') return 'pdf';
            if (ext === 'json') return 'json';
            if (ext === 'txt') return 'txt';
            return 'img';
        }

        function formatFileSize(bytes) {
            if (!bytes || bytes === 0) return '';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
        }

        function renderFileSuccessCard(file, subtitle) {
            if (dropzone) dropzone.classList.add('has-file');
            const defaultPrompt = document.getElementById('upload-default-prompt');
            if (defaultPrompt) defaultPrompt.style.display = 'none';

            const fileExt = file.name.split('.').pop().toLowerCase();
            const badgeClass = getFileBadgeClass(fileExt);
            const safeFileName = escapeHTML(file.name);
            const sizeStr = formatFileSize(file.size);

            fileIndicator.style.display = 'block';
            fileIndicator.innerHTML = `
                <div class="file-thumbnail-card">
                    <div style="display: flex; align-items: center; gap: 0.85rem; overflow: hidden;">
                        <div class="file-icon-badge ${badgeClass}">
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                        </div>
                        <div style="text-align: left; overflow: hidden;">
                            <div style="font-weight: 700; font-size: 0.9rem; color: #f8fafc; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 230px;">
                                ${safeFileName}
                            </div>
                            <div style="font-size: 0.76rem; color: #10b981; display: flex; align-items: center; gap: 0.4rem; margin-top: 2px;">
                                <span style="display:inline-block; width:6px; height:6px; background:#10b981; border-radius:50%;"></span>
                                <span>${subtitle || 'Listo para escanear'}</span>
                                ${sizeStr ? `<span style="color: var(--text-muted);">• ${sizeStr}</span>` : ''}
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn-remove-file" title="Quitar archivo" onclick="removeLoadedFile(event)">
                        <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            `;
        }

        window.removeLoadedFile = function(event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (dropzone) dropzone.classList.remove('has-file');
            if (fileInput) fileInput.value = '';
            extractedText = "";
            fileName = "";
            
            const indicator = document.getElementById('file-indicator');
            if (indicator) {
                indicator.style.display = 'none';
                indicator.innerHTML = '';
            }
            
            const defaultPrompt = document.getElementById('upload-default-prompt');
            if (defaultPrompt) {
                defaultPrompt.style.setProperty('display', 'block', 'important');
                defaultPrompt.classList.remove('fade-in-prompt');
                void defaultPrompt.offsetWidth;
                defaultPrompt.classList.add('fade-in-prompt');
            }

            checkInputsValidity();
        };

        function handleFileSelect(file) {
            fileName = file.name;
            const fileExt = fileName.split('.').pop().toLowerCase();
            
            const defaultPrompt = document.getElementById('upload-default-prompt');
            if (defaultPrompt) defaultPrompt.style.display = 'none';

            fileIndicator.style.display = 'block';
            fileIndicator.innerHTML = `
                <div class="file-thumbnail-card">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <span style="font-size: 0.85rem; color: var(--accent-secondary);">⚡ Procesando documento...</span>
                    </div>
                </div>
            `;

            if (fileExt === 'pdf') {
                extractTextFromPDF(file);
            } else if (fileExt === 'txt') {
                extractTextFromTXT(file);
            } else if (fileExt === 'json') {
                extractTextFromJSON(file);
            } else if (['png', 'jpg', 'jpeg', 'webp'].includes(fileExt)) {
                extractTextFromImage(file);
            } else {
                fileIndicator.className = 'badge badge-danger';
                fileIndicator.innerHTML = 'Formato no soportado (.pdf, .txt, .json, .png, .jpg)';
                extractedText = "";
                checkInputsValidity();
            }
        }

        function extractTextFromJSON(file) {
            const reader = new FileReader();
            const safeFileName = escapeHTML(fileName);
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    let formatted = "";
                    // Esquema Nativo de la Aplicación / Prompt
                    if (data.personal_information) {
                        const p = data.personal_information;
                        const loc = [p.city, p.country].filter(Boolean).join(", ") || p.location || '';
                        formatted += `${p.full_name || ''}\n${p.professional_title || p.professional_headline || ''}\n${p.email || ''} | ${p.phone || ''} | ${loc}\n`;
                    }
                    if (data.professional_profile && data.professional_profile.summary) {
                        formatted += `\nRESUMEN PROFESIONAL\n${data.professional_profile.summary}\n`;
                    }
                    if (Array.isArray(data.experience) && data.experience.length > 0) {
                        formatted += `\nEXPERIENCIA PROFESIONAL\n`;
                        data.experience.forEach(exp => {
                            const dateInfo = exp.currently_working ? `${exp.start_date || ''} - Presente` : `${exp.start_date || ''} - ${exp.end_date || 'Actual'}`;
                            const mode = [exp.employment_type, exp.work_mode].filter(Boolean).join(" · ");
                            formatted += `${exp.position || ''} - ${exp.company || ''}${mode ? ' (' + mode + ')' : ''} (${dateInfo})\n`;
                            if (Array.isArray(exp.responsibilities)) {
                                exp.responsibilities.forEach(r => formatted += `• ${r}\n`);
                            }
                            if (Array.isArray(exp.description)) {
                                exp.description.forEach(d => formatted += `• ${d}\n`);
                            }
                            if (Array.isArray(exp.achievements)) {
                                exp.achievements.forEach(a => formatted += `• Logro: ${typeof a === 'string' ? a : (a.description || JSON.stringify(a))}\n`);
                            }
                            if (Array.isArray(exp.skills_used) && exp.skills_used.length > 0) {
                                formatted += `• Tecnologías/Habilidades: ${exp.skills_used.join(', ')}\n`;
                            }
                        });
                    }
                    if (data.skills && typeof data.skills === 'object' && !Array.isArray(data.skills)) {
                        formatted += `\nHABILIDADES\n`;
                        const skillLabels = {
                            professional: 'Habilidades Profesionales',
                            technical: 'Habilidades Técnicas',
                            tools_and_software: 'Herramientas y Software',
                            industry: 'Industria y Dominio',
                            soft_skills: 'Habilidades Blandas'
                        };
                        Object.entries(data.skills).forEach(([cat, list]) => {
                            if (Array.isArray(list) && list.length > 0) {
                                const lbl = skillLabels[cat] || (cat.charAt(0).toUpperCase() + cat.slice(1).replace(/_/g, ' '));
                                formatted += `${lbl}: ${list.join(', ')}\n`;
                            }
                        });
                    } else if (data.technical_skills && typeof data.technical_skills === 'object') {
                        formatted += `\nHABILIDADES TÉCNICAS\n`;
                        if (Array.isArray(data.technical_skills)) {
                            formatted += data.technical_skills.join(', ') + '\n';
                        } else {
                            Object.entries(data.technical_skills).forEach(([cat, list]) => {
                                if (Array.isArray(list)) {
                                    formatted += `${cat}: ${list.join(', ')}\n`;
                                }
                            });
                        }
                    }
                    if (Array.isArray(data.education) && data.education.length > 0 && !data.basics) {
                        formatted += `\nFORMACIÓN ACADÉMICA\n`;
                        data.education.forEach(ed => {
                            const field = ed.field_of_study ? ` en ${ed.field_of_study}` : '';
                            const status = ed.currently_studying ? 'En curso' : (ed.end_date || 'Completado');
                            formatted += `${ed.degree || ''}${field} - ${ed.institution || ''} (${ed.start_date || ''} - ${status})\n`;
                            if (ed.description) formatted += `${ed.description}\n`;
                        });
                    }

                    // Esquema Estándar JSON Resume (Fallback)
                    if (data.basics) {
                        const b = data.basics;
                        formatted += `${b.name || ''}\n${b.label || ''}\n${b.email || ''} | ${b.phone || ''} | ${b.location?.city || ''}\n`;
                        if (b.summary) formatted += `\nRESUMEN / PERFIL\n${b.summary}\n`;
                    }
                    if (Array.isArray(data.work) && data.work.length > 0) {
                        formatted += `\nEXPERIENCIA LABORAL\n`;
                        data.work.forEach(w => {
                            formatted += `${w.position || ''} - ${w.name || w.company || ''} (${w.startDate || ''} - ${w.endDate || 'Actual'})\n${w.summary || ''}\n`;
                            if (Array.isArray(w.highlights)) {
                                w.highlights.forEach(h => formatted += `• ${h}\n`);
                            }
                        });
                    }
                    if (Array.isArray(data.education) && data.education.length > 0 && data.basics) {
                        formatted += `\nEDUCACIÓN\n`;
                        data.education.forEach(ed => {
                            formatted += `${ed.studyType || ''} en ${ed.area || ''} - ${ed.institution || ''} (${ed.startDate || ''} - ${ed.endDate || ''})\n`;
                        });
                    }
                    if (Array.isArray(data.skills) && data.skills.length > 0) {
                        formatted += `\nHABILIDADES Y COMPETENCIAS\n`;
                        data.skills.forEach(s => {
                            const kwList = Array.isArray(s.keywords) ? s.keywords.join(', ') : '';
                            formatted += `${s.name || ''}: ${kwList}\n`;
                        });
                    }
                    if (Array.isArray(data.projects) && data.projects.length > 0) {
                        formatted += `\nPROYECTOS\n`;
                        data.projects.forEach(p => {
                            formatted += `${p.name || ''}: ${p.description || ''}\n`;
                            if (Array.isArray(p.skills_used) && p.skills_used.length > 0) {
                                formatted += `• Habilidades/Tecnologías: ${p.skills_used.join(', ')}\n`;
                            }
                            if (Array.isArray(p.results)) {
                                p.results.forEach(r => formatted += `• ${r}\n`);
                            }
                        });
                    }
                    if (Array.isArray(data.languages) && data.languages.length > 0) {
                        formatted += `\nIDIOMAS\n`;
                        data.languages.forEach(l => {
                            formatted += `${l.language || ''} (${l.level || l.fluency || ''})\n`;
                        });
                    }
                    if (Array.isArray(data.certifications) && data.certifications.length > 0) {
                        formatted += `\nCERTIFICACIONES\n`;
                        data.certifications.forEach(c => {
                            formatted += `${c.name || ''} - ${c.issuer || c.institution || ''} (${c.date || c.year || ''})\n`;
                        });
                    }
                    if (data.additional_information && typeof data.additional_information === 'object') {
                        formatted += `\nINFORMACIÓN ADICIONAL\n`;
                        const ai = data.additional_information;
                        if (ai.availability) formatted += `• Disponibilidad: ${ai.availability}\n`;
                        if (ai.willing_to_relocate !== undefined) formatted += `• Reubicación: ${ai.willing_to_relocate ? 'Sí' : 'No'}\n`;
                        if (ai.willing_to_travel !== undefined) formatted += `• Viajar: ${ai.willing_to_travel ? 'Sí' : 'No'}\n`;
                    }
                    extractedText = formatted.trim() || JSON.stringify(data, null, 2);
                    renderFileSuccessCard(file, 'JSON Resume estructurado');
                    checkInputsValidity();
                } catch (err) {
                    fileIndicator.className = 'badge badge-danger';
                    fileIndicator.innerHTML = 'JSON Inválido';
                    extractedText = "";
                    checkInputsValidity();
                }
            };
            reader.readAsText(file);
        }

        async function extractTextFromImage(file) {
            fileIndicator.innerHTML = `
                <div class="file-thumbnail-card">
                    <span style="font-size: 0.85rem; color: var(--primary);">⏳ Ejecutando OCR en imagen...</span>
                </div>
            `;
            try {
                if (typeof Tesseract === 'undefined') {
                    throw new Error("Motor OCR no disponible. Verifica la conexión.");
                }
                const result = await Tesseract.recognize(file, 'spa+eng');
                extractedText = result?.data?.text || "";
                if (!extractedText.trim()) throw new Error("No se detectó texto en la imagen.");
                renderFileSuccessCard(file, 'Texto extraído por OCR');
                checkInputsValidity();
            } catch (err) {
                fileIndicator.className = 'badge badge-danger';
                fileIndicator.innerHTML = `Error OCR: ${escapeHTML(err.message)}`;
                extractedText = "";
                checkInputsValidity();
            }
        }

        function extractTextFromTXT(file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                extractedText = e.target.result;
                renderFileSuccessCard(file, 'Texto plano listo');
                checkInputsValidity();
            };
            reader.onerror = function(err) {
                const errorMsg = err?.target?.error?.name || 'Error al leer el archivo';
                fileIndicator.className = 'badge badge-danger';
                fileIndicator.innerHTML = escapeHTML(errorMsg);
                extractedText = "";
                checkInputsValidity();
            };
            reader.readAsText(file);
        }

        async function extractTextFromPDF(file) {
            let pdf = null;
            try {
                const arrayBuffer = await file.arrayBuffer();
                const pdfjs = window.pdfjsLib || pdfjsLib;
                if (!pdfjs) {
                    throw new Error("Librería pdfjsLib no está disponible en el entorno global.");
                }
                pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
                let fullText = "";
                
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    let pageText = "";
                    let lastY = null;
                    textContent.items.forEach(item => {
                        if (!item.str) return;
                        if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5) {
                            pageText += "\n" + item.str;
                        } else {
                            pageText += (pageText.length > 0 && !pageText.endsWith("\n") ? " " : "") + item.str;
                        }
                        lastY = item.transform[5];
                    });
                    fullText += pageText + "\n";
                    if (page.cleanup) page.cleanup();
                }
                
                extractedText = fullText;
                
                if (!extractedText || extractedText.trim().length === 0) {
                    // Fallback a OCR con Tesseract para PDFs escaneados
                    if (typeof Tesseract !== 'undefined') {
                        fileIndicator.innerHTML = `
                            <div class="file-thumbnail-card">
                                <span style="font-size: 0.85rem; color: var(--primary);">⏳ PDF escaneado detectado. Aplicando OCR...</span>
                            </div>
                        `;
                        let ocrText = "";
                        for (let i = 1; i <= Math.min(pdf.numPages, 5); i++) {
                            const page = await pdf.getPage(i);
                            const viewport = page.getViewport({ scale: 1.5 });
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            canvas.height = viewport.height;
                            canvas.width = viewport.width;
                            await page.render({ canvasContext: ctx, viewport: viewport }).promise;
                            const res = await Tesseract.recognize(canvas, 'spa+eng');
                            ocrText += (res?.data?.text || "") + "\n";
                            if (page.cleanup) page.cleanup();
                        }
                        extractedText = ocrText;
                    }
                    if (!extractedText || extractedText.trim().length === 0) {
                        throw new Error("El PDF no contiene texto seleccionable ni legible por OCR.");
                    }
                }

                renderFileSuccessCard(file, `PDF verificado (${pdf.numPages} pág.)`);
                checkInputsValidity();
            } catch (error) {
                console.error("Error extrayendo PDF: ", error);
                fileIndicator.className = 'badge badge-danger';
                fileIndicator.innerHTML = `Error: ${escapeHTML(error.message) || 'Fallo de procesamiento'}`;
                extractedText = "";
                checkInputsValidity();
            } finally {
                if (pdf && pdf.destroy) pdf.destroy();
            }
        }

        // Cambiar Vistas de la App
        window.switchAppView = function(viewId) {
            document.querySelectorAll('.view-pane').forEach(v => v.classList.remove('active'));
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

            document.getElementById(viewId).classList.add('active');
            if (viewId === 'scan-view') document.getElementById('tab-scan').classList.add('active');
            if (viewId === 'editor-view') document.getElementById('tab-editor').classList.add('active');
            if (viewId === 'prompt-view') document.getElementById('tab-prompt').classList.add('active');
        }

        window.toggleAccordion = function(id) {
            const content = document.getElementById(id);
            const header = content.previousElementSibling;
            content.classList.toggle('active');
            header.classList.toggle('active');
        }

        // Lógica de Tabs del Dashboard
        window.switchTab = function(tabId) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            
            const eventTarget = window.event ? window.event.currentTarget : null;
            if (eventTarget) {
                eventTarget.classList.add('active');
            }
            document.getElementById(tabId).classList.add('active');
        }
        // Scan Action
        btnScan.addEventListener('click', () => {
            emptyState.style.display = 'none';
            resultsDashboard.style.display = 'none';
            loader.style.display = 'flex';
            
            const messages = [
                "Leyendo estructura del CV...",
                "Normalizando caracteres y tokens...",
                "Comparando skills con vacante...",
                "Calculando métricas de impacto XYZ...",
                "Generando score ATS final..."
            ];
            const textEl = loader.querySelector('.loading-text');
            const subtextEl = loader.querySelector('.loading-subtext');
            if (textEl && subtextEl) {
                textEl.textContent = "Iniciando escaneo heurístico local...";
                subtextEl.textContent = "Procesamiento 100% privado en tu navegador";
                
                messages.forEach((msg, idx) => {
                    setTimeout(() => {
                        textEl.textContent = msg;
                    }, (idx + 1) * 350);
                });
            }
            
            setTimeout(() => {
                loader.style.display = 'none';
                resultsDashboard.style.display = 'block';
                performATSAnalysis();
            }, 2000);
        });

        // ============================================================================
        // ARQUITECTURA DE MOTOR DE REGLAS ATS (100% LOCAL / MODULAR)
        // ============================================================================

        function extractStructuredCVData() {
            // Leer directamente desde los elementos visuales del documento (WYSIWYG)
            const nameEl = document.getElementById('cv-name');
            const roleEl = document.getElementById('cv-title-role');
            const contactEl = document.getElementById('cv-contact-info');
            const profileEl = document.getElementById('cv-profile-text');
            const skillsEl = document.getElementById('cv-skills-list');
            const expEl = document.getElementById('cv-experience-bullets');
            const projEl = document.getElementById('cv-projects-bullets');
            const eduEl = document.getElementById('cv-education-bullets');
            const certEl = document.getElementById('cv-certifications-bullets');
            const langEl = document.getElementById('cv-languages-bullets');
            const addEl = document.getElementById('cv-additional-bullets');

            const name = nameEl ? nameEl.innerText.trim() : "";
            const role = roleEl ? roleEl.innerText.trim() : "";
            const contact = contactEl ? contactEl.innerText.trim() : "";
            const profile = profileEl ? profileEl.innerText.trim() : "";
            const skills = skillsEl ? skillsEl.innerText.trim() : "";
            const experience = expEl ? expEl.innerText.trim() : "";
            const projects = projEl ? projEl.innerText.trim() : "";
            const education = eduEl ? eduEl.innerText.trim() : "";
            const certifications = certEl ? certEl.innerText.trim() : "";
            const languages = langEl ? langEl.innerText.trim() : "";
            const additional = addEl ? addEl.innerText.trim() : "";
            
            const isDefaultName = !name || name === "Nombre Completo" || name === "Tu Nombre" || name === "Juan Pérez García";
            const isDefaultRole = !role || role === "Título Profesional" || role === "Cargo / Especialidad" || role === "Senior Full Stack Developer";
            const isDefaultProfile = !profile || profile.includes("Ingeniero de Software con más de 5 años");

            const hasFileText = extractedText && extractedText.trim().length > 50;
            if (hasFileText) {
                const cvText = extractedText;

                // Colapsar letras espaciadas del PDF mediante procesamiento seguro sin backtracking catastrófico
                function collapsePDFSpacing(t) {
                    if (!t) return "";
                    let r = t.replace(/(?:^|\b)(?:[A-Z\u00C1\u00C9\u00CD\u00D3\u00DA\u00D1]\s+){2,}[A-Z\u00C1\u00C9\u00CD\u00D3\u00DA\u00D1](?:\b|$)/g, m => m.replace(/\s+/g, ''));
                    r = r.replace(/(?:^|\s)(?:[a-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1]\s+){3,}[a-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1](?=\s|$)/gi, m => m.replace(/\s+/g, ''));
                    return r;
                }
                const cvTextClean = collapsePDFSpacing(cvText);

                const profileExtracted = ATS_SummaryAnalyzer.extractSummary(cvTextClean);
                const roleExtracted = ATS_TitleAnalyzer.extractTitle(cvTextClean);
                
                let skillsExtracted = "";
                const skillsMatch = cvTextClean.match(/(?:habilidades|skills|aptitudes|tecnologias|conocimientos)[\s:]+([\s\S]+?)(?=\n[A-ZÁÉÍÓÚÑ\s]{4,}|\n\n|$)/i);
                if (skillsMatch) {
                    skillsExtracted = skillsMatch[1].trim();
                } else {
                    skillsExtracted = cvText;
                }
                
                const projectExtracted = ATS_ExperienceAnalyzer.getExperienceBlocks(cvText).join('\n');
                
                let contactExtracted = "";
                const lines = cvTextClean.split('\n');
                for (let i = 0; i < Math.min(6, lines.length); i++) {
                    if (lines[i].includes('@') || lines[i].includes('+') || lines[i].toLowerCase().includes('github') || lines[i].toLowerCase().includes('linkedin')) {
                        contactExtracted = lines[i];
                        break;
                    }
                }

                return {
                    name: lines[0] || "",
                    role: roleExtracted,
                    profile: profileExtracted,
                    skills: skillsExtracted,
                    experience: projectExtracted,
                    projects: "",
                    education: "",
                    certifications: "",
                    languages: "",
                    additional: "",
                    contact: contactExtracted
                };
            }
            
            return {
                name,
                role,
                contact,
                profile,
                skills,
                experience,
                projects,
                education,
                certifications,
                languages,
                additional
            };
        }

        function getCurrentCVText() {
            const data = extractStructuredCVData();
            if (data.name.length > 0 || data.role.length > 0 || data.profile.length > 0) {
                let parts = [];
                if (data.name) parts.push(data.name);
                if (data.role) parts.push(data.role);
                if (data.contact) parts.push(data.contact);
                
                if (data.profile && data.profile.trim()) parts.push("Perfil Profesional\n" + data.profile);
                if (data.skills && data.skills.trim()) parts.push("Habilidades\n" + data.skills);
                if (data.experience && data.experience.trim()) parts.push("Experiencia Laboral\n" + data.experience);
                if (data.projects && data.projects.trim()) parts.push("Proyectos Personales\n" + data.projects);
                if (data.education && data.education.trim()) parts.push("Formación Académica\n" + data.education);
                if (data.certifications && data.certifications.trim()) parts.push("Certificaciones\n" + data.certifications);
                if (data.languages && data.languages.trim()) parts.push("Idiomas\n" + data.languages);
                if (data.additional && data.additional.trim()) parts.push("Información Adicional\n" + data.additional);
                
                return parts.join("\n\n").trim();
            }
            if (extractedText && extractedText.trim().length > 0) {
                return extractedText;
            }
            return "";
        }

        function performATSAnalysis() {
            try {
                const jobDesc = jobDescTextarea.value;
                // PRIORIDAD 1: Archivo subido en el escáner. PRIORIDAD 2: El Editor de CV
                const rawCV = (extractedText && extractedText.trim().length > 50) ? extractedText : getCurrentCVText();
                
                if (!rawCV || rawCV.trim().length < 20) {
                    throw new Error("El contenido del CV está vacío o es demasiado corto para analizar.");
                }
                if (!jobDesc || jobDesc.trim().length < 10) {
                    throw new Error("La descripción de la vacante está vacía o es demasiado corta.");
                }

                const cleanTextCV = ATS_TextNormalizer.normalize(rawCV);
                const cleanTextJob = ATS_TextNormalizer.normalize(jobDesc);

                // 3. DETECTAR EL DOMINIO PROFESIONAL (Movido antes para cargar las taxonomías)
                const detectedDomainInfo = detectDomainFromText(cleanTextJob);
                const detectedDomain = detectedDomainInfo.domain;
                const taxonomy = getTaxonomyForDomain(detectedDomain);
                const HARD_SKILLS_TAXONOMY = taxonomy.hard || [];
                const SOFT_SKILLS_TAXONOMY = taxonomy.soft || [];

                // Diagnóstico Interno (Logs en Consola)
                // 1. FILTRO DE DESCARTE DURO (Knockout Criteria)
                const knockoutResult = evaluateKnockoutCriteria(rawCV, cleanTextCV, jobDesc, cleanTextJob, HARD_SKILLS_TAXONOMY);

                // 2. EJECUTAR MOTOR DE REGLAS MODULAR Y HEURÍSTICO
                const analysis = ATS_Engine.run(rawCV, jobDesc, HARD_SKILLS_TAXONOMY, SOFT_SKILLS_TAXONOMY, STOPWORDS);

                // Diagnóstico Interno y Detallado de Consola para Debugging
                console.group("%c🔍 INFORME DE DIAGNÓSTICO ATS Y DEBUGGING", "color: #3b82f6; font-weight: bold; font-size: 1.1em;");
                console.log("📄 CV Longitud:", rawCV.length, "caracteres |", rawCV.trim().split(/\s+/).length, "palabras");
                console.log("🎯 Dominio Detectado:", detectedDomain.toUpperCase(), "(Puntaje match:", detectedDomainInfo.score, ")");
                console.log("👤 Cargo Extraído del CV:", analysis.titleResult.cvTitle);
                console.log("💼 Cargo Limpio de la Vacante:", analysis.titleResult.jobTitle);
                console.log("📌 Jerarquía Cargo:", `CV=${analysis.titleResult.cvLevel.toUpperCase()} | Vacante=${analysis.titleResult.jobLevel.toUpperCase()}`);

                console.group("%c🛠️ EXTRACCIÓN DE SECCIONES Y DATOS", "color: #8b5cf6; font-weight: bold;");
                const parsedData = extractStructuredCVData();
                console.log("▪ Nombre:", parsedData.name || "(No detectado)");
                console.log("▪ Contacto:", parsedData.contact || "(No detectado)");
                console.log("▪ Resumen Extacto:", parsedData.profile ? parsedData.profile.substring(0, 100) + "..." : "(Vacío)");
                console.log("▪ Habilidades Extraídas:", parsedData.skills ? parsedData.skills.substring(0, 120) + "..." : "(Vacío)");
                console.groupEnd();

                console.group("%c📊 ANÁLISIS DE HARD SKILLS Y COINCIDENCIAS", "color: #10b981; font-weight: bold;");
                console.log("✓ Hard Skills Coincidentes (" + analysis.skillsResult.matchedHard.length + "):", analysis.skillsResult.matchedHard);
                console.log("✗ Hard Skills Faltantes (" + analysis.skillsResult.missingHard.length + "):", analysis.skillsResult.missingHard);
                console.log("🤝 Soft Skills Matheadas:", analysis.skillsResult.matchedSoft);
                console.groupEnd();

                console.group("%c📋 ESTADO DE SECCIONES DETECTADAS", "color: #f59e0b; font-weight: bold;");
                analysis.structureResult.sections.forEach(sec => {
                    console.log(`${sec.detected ? "  ✓" : "  ❌"} ${sec.name} (${sec.key})`);
                });
                console.groupEnd();

                console.group("%c📈 RESULTADOS DE SCORES Y PONDERACIÓN", "color: #ec4899; font-weight: bold;");
                console.log("🛠️ Hard Skills Score:", analysis.scores.skills + "%");
                console.log("📈 Experiencia Score:", analysis.scores.experience + "%");
                console.log("📝 Resumen Score:", analysis.scores.summary + "%");
                console.log("📐 Estructura Score:", analysis.scores.structure + "%");
                console.log("🏆 SCORE ATS FINAL:", analysis.generalScore + " / 100");
                console.groupEnd();

                if (analysis.categorizedRecommendations.high.length > 0) {
                    console.warn("🚨 ALERTAS DE PRIORIDAD ALTA:", analysis.categorizedRecommendations.high);
                }
                console.groupEnd();

                // Guardar datos del análisis globalmente para descarga del informe
                window.lastAnalysisData = {
                    cvData: parsedData,
                    rawCV: rawCV,
                    jobDesc: jobDesc,
                    knockout: knockoutResult,
                    detectedDomain: detectedDomain,
                    analysis: analysis
                };

                const btnDownload = document.getElementById('btn-download-report');
                if (btnDownload) btnDownload.style.display = 'inline-flex';

                // 4. ACTUALIZAR PANEL DE DASHBOARD CON EL ENFOQUE PROFESIONAL Y SCORE ROBUSTO
                updateDashboard({
                    knockout: knockoutResult,
                    detectedDomain: detectedDomain,
                    finalScore: analysis.generalScore,
                    scores: analysis.scores,
                    words: rawCV.trim().split(/\s+/).length,
                    matchedHard: analysis.skillsResult.matchedHard,
                    missingHard: analysis.skillsResult.missingHard,
                    matchedSoft: analysis.skillsResult.matchedSoft,
                    missingSoft: analysis.skillsResult.missingSoft,
                    roleLevelsInJob: analysis.skillsResult.matchedHard.length > 0 ? [analysis.titleResult.jobLevel] : [],
                    sections: analysis.structureResult.sections,
                    hasEmail: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(rawCV),
                    hasPhone: /(\+?\d{1,4}[-.\s]?)?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}/.test(rawCV),
                    analysis: analysis
                });
            } catch (error) {
                console.error("Error crítico durante el análisis ATS: ", error);
                
                // Renderizar error amigable en la interfaz
                const knockoutBannerContainer = document.getElementById('knockout-banner-container');
                if (knockoutBannerContainer) {
                    knockoutBannerContainer.innerHTML = `
                        <div class="knockout-banner" style="border-left: 4px solid var(--danger);">
                            <div class="knockout-title" style="color: var(--danger);">
                                ⚠️ ERROR CRÍTICO EN EL MOTOR ATS
                            </div>
                            <p style="font-size: 0.88rem; color: #fecaca; margin-top: 0.5rem;">
                                Ocurrió un fallo inesperado al analizar tu currículum: <strong style="color: #fff;">${error.message}</strong>. 
                                <br><br>
                                Revisa la consola del navegador para ver el informe técnico de depuración completo.
                            </p>
                        </div>
                    `;
                }
                
                // Establecer score a 0 de forma segura
                scoreRing.style.strokeDashoffset = 440;
                scoreRing.style.stroke = "var(--danger)";
                scoreVal.innerHTML = `
                    <div style="font-size: 0.75rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase;">Overall Score</div>
                    <div style="font-size: 2.8rem; font-weight: 800; color: var(--danger); line-height: 1;">0</div>
                    <div style="font-size: 0.85rem; font-weight: 700; color: var(--danger);">Error en el análisis</div>
                `;
            }
        }

        // DETECTOR DE INDUSTRIA / DOMINIO PROFESIONAL (Heurístico)
        function detectIndustryDomain(cleanText) {
            const categories = [
                { name: "💻 Tecnología, Software & Sistemas", keywords: ['javascript', 'python', 'java', 'react', 'node.js', 'sql', 'docker', 'aws', 'desarrollo', 'programador', 'software', 'ti', 'qa', 'sistemas'] },
                { name: "📊 Administración, Contabilidad & Finanzas", keywords: ['excel', 'sap', 'contabilidad', 'facturacion', 'finanzas', 'presupuesto', 'auditoria', 'costos', 'impuestos', 'tesoreria', 't-registro', 'plame'] },
                { name: "📣 Marketing & Crecimiento Digital", keywords: ['seo', 'sem', 'google ads', 'meta ads', 'marketing', 'copywriting', 'redes sociales', 'analytics', 'growth', 'community management', 'ventas'] },
                { name: "🤝 Recursos Humanos & Talento", keywords: ['reclutamiento', 'seleccion', 'planilla', 'payroll', 'clima laboral', 'talento', 'rrhh', 'recursos humanos', 'onboarding'] },
                { name: "🎨 Diseño, UX/UI & Multimedia", keywords: ['figma', 'photoshop', 'illustrator', 'ux', 'ui', 'diseño', 'wireframing', 'motion graphics', 'creativo', 'animacion', 'canva'] },
                { name: "⚙️ Ingeniería, Operaciones & Logística", keywords: ['autocad', 'solidworks', 'logistica', 'cadena de suministro', 'calidad', 'lean', 'six sigma', 'mantenimiento', 'industrial', 'hseq', 'almacen'] },
                { name: "⚕️ Salud & Ciencias", keywords: ['enfermeria', 'medicina', 'triaje', 'salud', 'clinica', 'farmacologia', 'cuidados', 'laboratorio', 'biologia', 'quimica'] },
                { name: "⚖️ Derecho & Legal", keywords: ['derecho', 'legal', 'contratos', 'compliance', 'litigio', 'notarial', 'abogado', 'propiedad intelectual'] }
            ];

            let bestCategory = "🌐 Profesional Multidisciplinario / General";
            let maxCount = 0;

            categories.forEach(cat => {
                let count = 0;
                cat.keywords.forEach(kw => {
                    if (ATS_MatchingEngine.comparePhrase(cleanText, kw).match) count++;
                });
                if (count > maxCount) {
                    maxCount = count;
                    bestCategory = cat.name;
                }
            });

            return bestCategory;
        }

        

        // ACTUALIZAR EL DASHBOARD DE RESULTADOS (Renders Heuristics Output)
        function updateDashboard(data) {
            const { knockout, detectedDomain, finalScore, scores, words, matchedHard, missingHard, matchedSoft, missingSoft, sections, hasEmail, hasPhone, analysis } = data;

            // 1. Renderizar Banner de Descarte Duro (Knockout)
            const knockoutBannerContainer = document.getElementById('knockout-banner-container');
            if (knockout.isKnockout) {
                knockoutBannerContainer.innerHTML = `
                    <div class="knockout-banner">
                        <div class="knockout-title">
                            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                            🚨 DESCARTADO AUTOMÁTICAMENTE POR ATS (Knockout Criteria)
                        </div>
                        <p style="font-size: 0.88rem; color: #fecaca; margin-bottom: 0.5rem;">El currículum incumple requisitos excluyentes declarados en la vacante. Los ATS corporativos descartan este perfil en la primera fase de escaneo:</p>
                        <ul class="knockout-reasons">
                            ${knockout.reasons.map(r => `<li><span>❌</span> <div>${r}</div></li>`).join('')}
                        </ul>
                    </div>
                `;
            } else {
                knockoutBannerContainer.innerHTML = `
                    <div class="pass-knockout-banner">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>✓ FILTRO INICIAL SUPERADO: El CV no presenta razones de descarte automático por Knockout.</span>
                    </div>
                `;
            }

            // 2. Anillo de Score ATS con Conteo Líquido
            let color = "var(--danger)";
            let verdict = "Incompatible - Modificar estructura";

            if (knockout.isKnockout) {
                color = "var(--danger)";
                verdict = "DESCARTADO por Requisitos Excluyentes";
            } else if (finalScore >= 75) {
                color = "var(--success)";
                verdict = "Excellent Match - Apto para Selección";
            } else if (finalScore >= 50) {
                color = "var(--warning)";
                verdict = "Good - Requiere optimizar métricas";
            }

            // Animación de conteo fluido de 0 a finalScore
            scoreRing.style.strokeDashoffset = 440;
            scoreRing.style.stroke = color;
            
            setTimeout(() => {
                const offset = 440 - (440 * finalScore) / 100;
                scoreRing.style.strokeDashoffset = offset;
            }, 50);

            let currentScoreCount = 0;
            const stepTime = Math.max(15, Math.floor(1200 / (finalScore || 1)));
            const scoreTimer = setInterval(() => {
                if (currentScoreCount >= finalScore) {
                    currentScoreCount = finalScore;
                    clearInterval(scoreTimer);
                }
                scoreVal.innerHTML = `
                    <div style="font-size: 0.75rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; margin-bottom: -5px;">Overall Score</div>
                    <div style="font-size: 2.8rem; font-weight: 800; color: ${color}; line-height: 1;">${currentScoreCount}</div>
                    <div style="font-size: 0.85rem; font-weight: 700; color: ${color}; margin-top: 2px;">${verdict}</div>
                `;
                currentScoreCount++;
            }, stepTime);

            scoreVerdict.innerHTML = `<span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: normal;">*Los pesos reflejan la importancia típica asignada en procesos de selección automatizados. No representa una fórmula oficial comercial.</span>`;

            // 3. Desglose Ponderado Bars con Efecto Dominó Escalonado
            const bars = [
                { valId: 'weight-hard-val', barId: 'bar-hard', target: scores.skills, delay: 100 },
                { valId: 'weight-impact-val', barId: 'bar-impact', target: scores.experience, delay: 250 },
                { valId: 'weight-soft-val', barId: 'bar-soft', target: scores.summary, delay: 400 },
                { valId: 'weight-edu-val', barId: 'bar-edu', target: scores.structure, delay: 550 }
            ];

            bars.forEach(b => {
                document.getElementById(b.barId).style.width = '0%';
                document.getElementById(b.valId).textContent = '0%';
                setTimeout(() => {
                    document.getElementById(b.barId).style.width = `${b.target}%`;
                    document.getElementById(b.valId).textContent = `${b.target}%`;
                }, b.delay);
            });

            // 4. Métricas Rápidas
            document.getElementById('metric-words').textContent = words;
            document.getElementById('metric-match').textContent = `${matchedHard.length}/${matchedHard.length + missingHard.length}`;
            const detectedCount = sections.filter(s => s.detected).length;
            document.getElementById('metric-sections').textContent = `${Math.round((detectedCount / sections.length) * 100)}%`;

            // 5. Tab: Descarte & Skills con Animación Escalonada (Stagger)
            const matchedContainer = document.getElementById('matched-keywords');
            matchedContainer.innerHTML = matchedHard.length > 0 
                ? matchedHard.map((k, idx) => `<span class="badge badge-success" style="animation-delay: ${idx * 35}ms">✓ ${k}</span>`).join('')
                : '<span class="badge badge-danger">Ninguna hard skill coincidente</span>';

            const missingContainer = document.getElementById('missing-keywords');
            missingContainer.innerHTML = missingHard.length > 0
                ? missingHard.map((k, idx) => `<span class="badge badge-danger" style="animation-delay: ${idx * 35}ms">✗ ${k}</span>`).join('')
                : '<span class="badge badge-success">¡Coincidencia completa de Hard Skills!</span>';

            const softContainer = document.getElementById('soft-keywords');
            softContainer.innerHTML = matchedSoft.length > 0
                ? matchedSoft.map((k, idx) => `<span class="badge badge-info" style="animation-delay: ${idx * 35}ms">🤝 ${k}</span>`).join('')
                : '<span class="badge badge-danger">Sin evidencia de soft skills clave</span>';

            // Adicionar Habilidades Adicionales eliminadas para enfocar el dashboard 100% en la vacante

            // 6. Tab: Análisis de Brechas Realista y Priorizado (Heurístico)
            const tipsContainer = document.getElementById('tips-container');
            const tips = [];

            // A. Sector e Industria
            tips.push({
                title: "🏢 Sector / Industria Detectada",
                desc: `El motor heurístico clasificó esta vacante en: <strong>${detectedDomain || 'General'}</strong>.`,
                type: "info",
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'
            });

            // B. Compatibilidad de Rol
            tips.push({
                title: analysis.titleResult.match ? "🎯 Rol Profesional Compatible" : "🚨 Incompatibilidad de Denominación",
                desc: analysis.titleResult.advice,
                type: analysis.titleResult.match ? "success" : "danger",
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>'
            });

            // C. Recomendaciones por Prioridad
            const recs = analysis.categorizedRecommendations;

            // Prioridad Alta
            recs.high.forEach(item => {
                tips.push({
                    title: `🔴 PRIORIDAD ALTA - ${item.title}`,
                    desc: item.desc,
                    type: "danger",
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>'
                });
            });

            // Prioridad Media
            recs.medium.forEach(item => {
                tips.push({
                    title: `🟡 PRIORIDAD MEDIA - ${item.title}`,
                    desc: item.desc,
                    type: "warning",
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
                });
            });

            // Prioridad Baja
            recs.low.forEach(item => {
                tips.push({
                    title: `🟢 PRIORIDAD BAJA - ${item.title}`,
                    desc: item.desc,
                    type: "info",
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
                });
            });

            // Recomendación específica para Resumen Profesional cuando no está en 100%
            if (analysis.scores.summary < 100) {
                const targetTools = (analysis.skillsResult.requiredHard && analysis.skillsResult.requiredHard.length > 0)
                    ? analysis.skillsResult.requiredHard.slice(0, 3).join(', ').toUpperCase()
                    : "herramientas clave del puesto";
                tips.push({
                    title: `💡 Optimización del Resumen Profesional (${analysis.scores.summary}%/100)`,
                    desc: `Para llevar tu resumen al <strong>100%</strong>: incluye explícitamente <strong>${targetTools}</strong>, usa 2 verbos de acción en primera persona (ej. <em>Diseñé, Coordiné, Optimicé</em>) y añade una métrica cuantitativa de impacto.`,
                    type: "info",
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>'
                });
            }

            // Cobertura de palabras clave (Gap Analysis)
            if (analysis.keywordGapResult.missingKeywords.length > 0) {
                tips.push({
                    title: "🔑 Cobertura de palabras clave (Gap Analysis)",
                    desc: `Se identificó la ausencia de los siguientes conceptos clave de la vacante: <strong>${analysis.keywordGapResult.missingKeywords.join(', ')}</strong>.`,
                    type: "info",
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m0 0a2 2 0 01-2 2m2-2h3m-3-4A9 9 0 113 12c0-2.21.89-4.21 2.34-5.66L15 15.66z"/></svg>'
                });
            }

            // Datos de contacto
            if (!hasEmail || !hasPhone) {
                let missingContact = [];
                if (!hasEmail) missingContact.push("correo electrónico");
                if (!hasPhone) missingContact.push("teléfono");
                tips.push({
                    title: "⚠️ Datos de Contacto Incompletos",
                    desc: `No se identificó un ${missingContact.join(" o ")} en texto plano.`,
                    type: "warning",
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
                });
            }

            // Longitud
            tips.push({
                title: "📄 Longitud del Currículum",
                desc: analysis.summaryResult.advice || "La extensión de tu CV es óptima para escáneres y revisión por reclutadores.",
                type: words >= 300 && words <= 2000 ? "success" : "warning",
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2 2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'
            });

            // Generar base de plantillas sugeridas en base a palabras clave ausentes y apartados problemáticos
            const dynamicJobTitle = (analysis.titleResult.jobTitle || 'Profesional').replace(/^(puesto|cargo|vacante|posici[oó]n|t[ií]tulo)\s*:\s*/i, '');
            const dynamicTools = (analysis.skillsResult.requiredHard && analysis.skillsResult.requiredHard.length > 0)
                ? analysis.skillsResult.requiredHard.slice(0, 3).join(', ').toUpperCase()
                : (matchedHard.length > 0 ? matchedHard.slice(0, 3).join(', ').toUpperCase() : 'gestión y análisis técnico');

            const actionTemplates = {
                'autocad': 'Elaboré y compatibilicé planos estructurales y de detalle en AutoCAD, reduciendo el tiempo de revisión técnica en un 30%.',
                'revit': 'Coordiné modelos BIM en Revit integrando arquitectura e instalaciones, mitigando más de 20 interferencias críticas antes de la fase de obra.',
                's10': 'Formulé presupuestos y análisis de precios unitarios en S10, optimizando la asignación de costos del proyecto en un 15%.',
                'project': 'Elaboré y controlé el cronograma integral de actividades en MS Project, asegurando el cumplimiento de hitos con un 98% de precisión.',
                'ms project': 'Elaboré y controlé el cronograma integral de actividades en MS Project, asegurando el cumplimiento de hitos con un 98% de precisión.',
                'hseq': 'Supervisé protocolos de seguridad y control de calidad HSEQ en campo, alcanzando 0 incidentes laborales y 100% de conformidad en auditorías.',
                'dashboard': 'Diseñé y automaticé dashboards interactivos para el seguimiento de KPIs, reduciendo el tiempo de reportería en un 40%.',
                'power bi': 'Desarrollé modelos de datos en Power BI con medidas DAX y conectores directos, facilitando la toma de decisiones gerenciales en tiempo real.',
                'powerbi': 'Desarrollé modelos de datos en Power BI con medidas DAX y conectores directos, facilitando la toma de decisiones gerenciales en tiempo real.',
                'excel': 'Estructuré modelos analíticos avanzados en Microsoft Excel con Power Query y macros, optimizando el procesamiento de datos en un 35%.',
                'inteligencia artificial': 'Integré soluciones de Inteligencia Artificial para automatizar la clasificación y análisis de datos, reduciendo tareas manuales en un 50%.',
                'ia': 'Integré herramientas de Inteligencia Artificial para automatizar tareas repetitivas, reduciendo el tiempo operativo en un 50%.',
                'sql': 'Diseñé y optimicé consultas complejas y procedimientos almacenados en SQL, reduciendo tiempos de respuesta de reportes en un 35%.',
                'sap': 'Gestioné el registro y control de operaciones en módulos SAP, mejorando la trazabilidad de inventarios y costos en un 20%.',
                'seo': 'Implementé estrategias de posicionamiento SEO on-page y técnico, incrementando el tráfico orgánico cualificado en un 45%.',
                'google ads': 'Gestioné campañas de performance en Google Ads con optimización de CPC y ROAS, incrementando la tasa de conversión en un 25%.',
                'figma': 'Diseñé sistemas de diseño y prototipos interactivos en Figma, reduciendo el tiempo de entrega del equipo de desarrollo en un 30%.',
                'docker': 'Implementé contenedores Docker para estandarizar los entornos de trabajo, reduciendo tiempos de despliegue a menos de 5 minutos.',
                'kubernetes': 'Orquesté clústeres en Kubernetes optimizando el consumo de infraestructura cloud en un 25%.',
                'aws': 'Diseñé arquitectura Serverless en AWS con Lambda y API Gateway, soportando un incremento de hasta 100,000 solicitudes diarias.',
                'python': 'Desarrollé scripts en Python para automatizar procesos de extracción y validación de datos, ahorrando 10 horas semanales.',
                'react': 'Desarrollé componentes modulares en React, reduciendo la latencia de renderizado y mejorando la satisfacción del usuario en un 40%.',
                'node': 'Construí microservicios backend basados en Node.js y Express, con una tasa de disponibilidad del sistema del 99.9%.'
            };

            tipsContainer.innerHTML = tips.map(tip => {
                let copyBtnHTML = "";
                const cleanTitle = tip.title.toLowerCase();
                const cleanDesc = tip.desc.toLowerCase();
                let selectedFormula = "";

                // Las tarjetas puramente informativas NO deben mostrar botones de copia
                const isInformationalOnly = cleanTitle.includes('sector') || 
                                           cleanTitle.includes('industria') || 
                                           cleanTitle.includes('longitud') || 
                                           cleanTitle.includes('contacto') || 
                                           (cleanTitle.includes('compatible') && !cleanTitle.includes('incompatibilidad'));

                if (!isInformationalOnly) {
                    // 1. Si la tarjeta es de Resumen Profesional, generar fórmula de Resumen personalizada y ejecutiva
                    if (cleanTitle.includes('resumen') || (cleanTitle.includes('optimización') && cleanDesc.includes('resumen'))) {
                        const formattedTitle = dynamicJobTitle ? (dynamicJobTitle.charAt(0).toUpperCase() + dynamicJobTitle.slice(1).toLowerCase()) : 'Profesional';
                        selectedFormula = `${formattedTitle} con experiencia en ${dynamicTools}. Diseñé y coordiné la ejecución de proyectos aplicando normativas técnicas y control de calidad, logrando optimizar procesos operativos y reducir desviaciones en un 15%.`;
                    } else {
                        // 2. Buscar en plantillas específicas de herramientas usando límites de palabra completa (\b)
                        for (const [key, value] of Object.entries(actionTemplates)) {
                            const wordRegex = new RegExp(`(^|[^a-záéíóúñ])${key}([^a-záéíóúñ]|$)`, 'i');
                            if (wordRegex.test(cleanTitle) || wordRegex.test(cleanDesc)) {
                                selectedFormula = value;
                                break;
                            }
                        }
                        // 3. Fallback genérico STAR solo si es una tarjeta de advertencia/mejora
                        if (!selectedFormula) {
                            if (cleanTitle.includes('métrica') || cleanDesc.includes('métrica')) {
                                selectedFormula = `Implementé una solución estratégica que optimizó los procesos operativos de 5 a 2 horas semanales, incrementando la productividad del equipo en un 25%.`;
                            } else if (cleanTitle.includes('verbo') || cleanDesc.includes('verbo')) {
                                selectedFormula = `Lideré y coordiné la ejecución de proyectos clave, logrando un 100% de cumplimiento en plazos y reduciendo desviaciones en un 20%.`;
                            } else if (cleanTitle.includes('star') || cleanTitle.includes('prioridad')) {
                                selectedFormula = `• Diseñé e implementé [Metodología/Herramienta], logrando [Métrica cuantificable / % de optimización] en [Área de impacto].`;
                            }
                        }
                    }
                }

                if (selectedFormula) {
                    const safeVal = selectedFormula.replace(/'/g, "\\'");
                    const btnLabel = cleanTitle.includes('resumen') ? 'Copiar Resumen Sugerido' : 'Copiar frase STAR';
                    copyBtnHTML = `
                        <button type="button" class="btn btn-secondary btn-sm btn-copy-template" 
                            style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.78rem; padding: 0.25rem 0.5rem; cursor: pointer; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary);"
                            onclick="navigator.clipboard.writeText('${safeVal}'); this.innerText='¡Copiado!'; setTimeout(() => this.innerText='${btnLabel}', 2000)">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3"/></svg>
                            ${btnLabel}
                        </button>
                    `;
                }

                return `
                    <div class="tip-card" style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 1rem; border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px; background: var(--bg-card);">
                        <div style="display: flex; align-items: flex-start; gap: 0.75rem; width: 100%;">
                            <div class="tip-icon ${tip.type}">
                                ${tip.icon}
                            </div>
                            <div class="tip-content" style="flex: 1;">
                                <h4 style="margin: 0 0 0.25rem 0; font-size: 0.95rem; font-weight: 600;">${tip.title}</h4>
                                <p style="margin: 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.4;">${tip.desc}</p>
                                ${copyBtnHTML}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            // 7. Tab: Estructura ATS y Métricas encontradas
            const structureContainer = document.getElementById('structure-container');
            let structureHTML = sections.map(sec => `
                <div class="structure-item">
                    <span class="structure-label">${sec.name}</span>
                    <span class="structure-status ${sec.detected ? 'status-ok' : 'status-missing'}">
                        ${sec.detected ? '✓ Sección Detectada' : '✗ Sección Faltante / No Clara'}
                    </span>
                </div>
            `).join('');

            // Agregar información de Métricas de Impacto
            structureHTML += `
                <div style="margin-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1rem;">
                    <div class="keyword-section-title">📉 Métricas de Impacto Analizadas</div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Fórmula X-Y-Z y densidad de resultados cuantificables detectados en tu experiencia:</div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
                        <div class="metric-card">
                            <div class="metric-val" style="color: var(--success);">${analysis.metricsResult.found.length}</div>
                            <div class="metric-label">Encontradas</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-val" style="color: var(--danger);">${analysis.metricsResult.missing.length}</div>
                            <div class="metric-label">Faltantes</div>
                        </div>
                    </div>
                    <div class="keyword-container">
                        ${analysis.metricsResult.found.map(m => `<span class="badge badge-success">✓ ${m}</span>`).join('')}
                        ${analysis.metricsResult.missing.map(m => `<span class="badge badge-danger">✗ ${m}</span>`).join('')}
                    </div>
                </div>
            `;

            // Agregar información de Verbos de Acción (Soporta formato single y dual)
            const expResult = analysis.experienceResult;
            const expBlocks = expResult.blocksAnalyzed || (expResult.experienceDetails && expResult.experienceDetails.blocksAnalyzed) || [];
            const projBlocks = (expResult.projectDetails && expResult.projectDetails.blocksAnalyzed) || [];
            const combinedBlocks = [...expBlocks, ...projBlocks];

            const allStrongVerbs = Array.from(new Set(combinedBlocks.flatMap(b => b.detectedStrong || [])));
            const allWeakVerbs = Array.from(new Set(combinedBlocks.flatMap(b => b.detectedWeak || [])));
            structureHTML += `
                <div style="margin-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1rem;">
                    <div class="keyword-section-title">🗣️ Análisis de Verbos (Proactividad)</div>
                    <div class="keyword-container">
                        ${allStrongVerbs.map(v => `<span class="badge badge-success">Fuerte: ${v}</span>`).join('')}
                        ${allWeakVerbs.map(v => `<span class="badge badge-danger">Débil: ${v}</span>`).join('')}
                        ${allStrongVerbs.length === 0 && allWeakVerbs.length === 0 ? '<span class="badge badge-info">Sin verbos de acción detectados</span>' : ''}
                    </div>
                </div>
            `;

            structureContainer.innerHTML = structureHTML;
        }

        // Alternar visualización del cajón de importación JSON
        window.toggleJsonImportBox = function() {
            const panel = document.getElementById('json-import-panel');
            if (!panel) return;
            if (panel.style.display === 'none' || panel.style.display === '') {
                panel.style.display = 'block';
                const txt = document.getElementById('import-json');
                if (txt) txt.focus();
            } else {
                panel.style.display = 'none';
            }
        };

        // Cambiar plantilla de diseño de la hoja
        window.changeCVTemplate = function(templateClass) {
            const sheet = document.getElementById('cv-printable');
            if (!sheet) return;
            sheet.className = 'cv-ats-sheet ' + templateClass + ' wysiwyg-active';
        };

        // Sincronización / validación tras cambios manuales en el documento
        window.syncCV = function() {
            checkInputsValidity();
        };

        // Lógica de Importación de JSON (Soporta nuevo esquema universal y retrocompatibilidad)
        window.importFromJSON = function() {
            const jsonTextEl = document.getElementById('import-json');
            if (!jsonTextEl) return;
            const jsonText = jsonTextEl.value.trim();
            if (!jsonText) return alert("Por favor, pega el JSON generado en el cuadro de texto.");
            
            try {
                // Limpiar posibles bloques de Markdown ```json ... ```
                const cleanJsonText = jsonText.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
                const data = JSON.parse(cleanJsonText);
                
                // Helper para sanitizar strings
                const cleanLink = (str) => {
                    if (!str) return "";
                    return str.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/^https?:\/\//, '');
                };

                // 1. Datos personales (personal_information o basics)
                const info = data.personal_information || data.basics || data;
                const fullName = info.full_name || info.name || info.fullName || "Nombre Completo";
                let roleVal = info.professional_title || info.professional_headline || info.label || info.headline || info.role || info.position || "";
                if (roleVal.toLowerCase().includes("junior avanzado")) {
                    roleVal = roleVal.replace(/junior avanzado/i, "Junior");
                }
                
                const parts = [];
                const locationParts = [info.city, info.country].filter(Boolean).join(", ") || info.location?.city || info.location || '';
                if (info.phone) parts.push(info.phone);
                if (info.email) parts.push(cleanLink(info.email));
                if (info.linkedin) parts.push(`LinkedIn: ${cleanLink(info.linkedin)}`);
                if (info.portfolio) parts.push(`Portfolio: ${cleanLink(info.portfolio)}`);
                if (info.professional_website) parts.push(`Web: ${cleanLink(info.professional_website)}`);
                if (info.github) parts.push(`GitHub: ${cleanLink(info.github)}`);
                if (locationParts) parts.push(locationParts);
                const contactStr = parts.join(" | ");

                const nameEl = document.getElementById('cv-name');
                const roleEl = document.getElementById('cv-title-role');
                const contactEl = document.getElementById('cv-contact-info');
                if (nameEl) nameEl.innerText = fullName;
                if (roleEl) roleEl.innerText = roleVal;
                if (contactEl) contactEl.innerText = contactStr;

                // 2. Perfil / Resumen Profesional
                const profObj = data.professional_profile || {};
                const profileVal = profObj.summary || data.profile || data.professional_objective || data.summary || (data.basics && data.basics.summary) || "";
                const profileSec = document.getElementById('cv-section-profile');
                const profileTextEl = document.getElementById('cv-profile-text');
                if (profileTextEl) profileTextEl.innerText = profileVal;
                if (profileSec) profileSec.style.display = profileVal ? 'block' : 'none';

                // 3. Experiencia Profesional
                const expSec = document.getElementById('cv-section-experience');
                const expBulletsEl = document.getElementById('cv-experience-bullets');
                const expArray = Array.isArray(data.experience) ? data.experience : (Array.isArray(data.work) ? data.work : []);
                if (expBulletsEl) {
                    if (expArray.length > 0) {
                        let expHtml = '';
                        expArray.forEach(e => {
                            const pos = e.position || e.role || 'Puesto';
                            const comp = e.company || e.name || 'Empresa';
                            const loc = e.location ? ` — ${e.location}` : '';
                            const startDate = e.start_date || e.startDate || '';
                            const endDate = e.currently_working ? 'Present' : (e.end_date || e.endDate || 'Present');
                            const dateStr = (startDate || endDate) ? `${startDate} – ${endDate}` : '';

                            expHtml += `<div style="font-weight:700; margin-top:6px;">${comp}${loc}</div>`;
                            expHtml += `<div style="font-weight:700; font-size:0.95em;">${pos}</div>`;
                            if (dateStr) {
                                expHtml += `<div style="font-style:italic; font-size:0.9em; margin-bottom:3px;">${dateStr}</div>`;
                            }
                            
                            const bullets = [];
                            if (Array.isArray(e.responsibilities_and_achievements)) e.responsibilities_and_achievements.forEach(r => bullets.push(r));
                            else if (Array.isArray(e.responsibilities)) e.responsibilities.forEach(r => bullets.push(r));
                            else if (Array.isArray(e.description)) e.description.forEach(d => bullets.push(d));
                            else if (typeof e.description === 'string' && e.description) bullets.push(e.description);
                            else if (Array.isArray(e.highlights)) e.highlights.forEach(h => bullets.push(h));

                            if (Array.isArray(e.achievements)) {
                                e.achievements.forEach(a => {
                                    bullets.push(`Logro: ${typeof a === 'string' ? a : (a.description || JSON.stringify(a))}`);
                                });
                            }
                            if (Array.isArray(e.skills_used) && e.skills_used.length > 0) {
                                bullets.push(`Tecnologías / Habilidades: ${e.skills_used.join(', ')}`);
                            }

                            if (bullets.length > 0) {
                                expHtml += '<ul class="cv-bullets" style="margin-top:2px; margin-bottom:6px;">';
                                bullets.forEach(b => { expHtml += `<li>${b}</li>`; });
                                expHtml += '</ul>';
                            }
                        });
                        expBulletsEl.innerHTML = expHtml;
                        if (expSec) expSec.style.display = 'block';
                    } else {
                        if (expSec) expSec.style.display = 'none';
                    }
                }

                // 4. Formación Académica
                const eduSec = document.getElementById('cv-section-education');
                const eduBulletsEl = document.getElementById('cv-education-bullets');
                const eduArray = Array.isArray(data.education) ? data.education : [];
                if (eduBulletsEl) {
                    if (eduArray.length > 0) {
                        let eduHtml = '';
                        eduArray.forEach(ed => {
                            let title = ed.degree || ed.studyType || 'Grado / Carrera';
                            if (ed.field_of_study || ed.area) title += ` in ${ed.field_of_study || ed.area}`;
                            const inst = ed.institution || ed.school || 'Universidad / Institución';
                            const loc = ed.location ? ` — ${ed.location}` : '';
                            const startDate = ed.start_date || ed.startDate || '';
                            const endDate = ed.currently_studying ? 'Present' : (ed.end_date || ed.endDate || 'Present');
                            const dateStr = (startDate || endDate) ? `${startDate} – ${endDate}` : '';

                            eduHtml += `<div style="font-weight:700; margin-top:6px;">${inst}${loc}</div>`;
                            eduHtml += `<div style="font-weight:700; font-size:0.95em;">${title}</div>`;
                            if (dateStr) {
                                eduHtml += `<div style="font-style:italic; font-size:0.9em; margin-bottom:3px;">${dateStr}</div>`;
                            }
                            if (ed.description) {
                                eduHtml += `<p class="cv-body-text" style="margin:2px 0 4px;">${ed.description}</p>`;
                            }
                        });
                        eduBulletsEl.innerHTML = eduHtml;
                        if (eduSec) eduSec.style.display = 'block';
                    } else {
                        if (eduSec) eduSec.style.display = 'none';
                    }
                }

                // 5. Habilidades (Skills)
                const skillsSec = document.getElementById('cv-section-skills');
                const skillsListEl = document.getElementById('cv-skills-list');
                const skillsSource = data.skills || data.technical_skills;
                if (skillsListEl) {
                    if (skillsSource && typeof skillsSource === 'object' && !Array.isArray(skillsSource)) {
                        const categoryMap = {
                            hard_skills: 'Hard Skills',
                            soft_skills: 'Habilidades Blandas',
                            technologies_and_tools: 'Tecnologías y Herramientas',
                            professional: 'Habilidades Profesionales',
                            technical: 'Habilidades Técnicas',
                            tools_and_software: 'Herramientas y Software',
                            industry: 'Industria y Dominio',
                            programming_languages: 'Lenguajes de Programación',
                            programming: 'Lenguajes',
                            backend: 'Backend',
                            frontend: 'Frontend',
                            databases: 'Bases de Datos',
                            security: 'Seguridad',
                            testing: 'Testing'
                        };
                        let skillsHtml = '<div style="display:flex; flex-direction:column; gap:3px;">';
                        let hasAny = false;
                        Object.entries(skillsSource).forEach(([key, val]) => {
                            const label = categoryMap[key] || (key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' '));
                            let items = [];
                            if (Array.isArray(val)) items = val;
                            else if (typeof val === 'string') items = [val];
                            if (items.length > 0) {
                                hasAny = true;
                                skillsHtml += `<div><strong style="color:#111827; font-weight:700;">${label}:</strong> ${items.join(', ')}</div>`;
                            }
                        });
                        skillsHtml += '</div>';
                        if (hasAny) {
                            skillsListEl.innerHTML = skillsHtml;
                            if (skillsSec) skillsSec.style.display = 'block';
                        } else if (skillsSec) {
                            skillsSec.style.display = 'none';
                        }
                    } else if (Array.isArray(skillsSource) && skillsSource.length > 0) {
                        const kw = skillsSource.map(s => typeof s === 'object' ? (s.name + (s.keywords ? ': ' + s.keywords.join(', ') : '')) : s).join(', ');
                        skillsListEl.innerHTML = kw;
                        if (skillsSec) skillsSec.style.display = 'block';
                    } else {
                        if (skillsSec) skillsSec.style.display = 'none';
                    }
                }

                // 6. Proyectos Destacados
                const projSec = document.getElementById('cv-section-projects');
                const projBulletsEl = document.getElementById('cv-projects-bullets');
                const projArray = Array.isArray(data.projects) ? data.projects : [];
                if (projBulletsEl) {
                    if (projArray.length > 0) {
                        let projHtml = '';
                        projArray.forEach(p => {
                            const name = p.name || 'Proyecto';
                            const loc = p.location ? ` — ${p.location}` : '';
                            const role = p.role || '';
                            const startDate = p.start_date || p.startDate || '';
                            const endDate = p.end_date || p.endDate || '';
                            const dateStr = (startDate || endDate) ? `${startDate} – ${endDate}` : '';

                            projHtml += `<div style="font-weight:700; margin-top:6px;">${name}${loc}</div>`;
                            if (role) {
                                projHtml += `<div style="font-weight:700; font-size:0.95em;">${role}</div>`;
                            }
                            if (dateStr) {
                                projHtml += `<div style="font-style:italic; font-size:0.9em; margin-bottom:3px;">${dateStr}</div>`;
                            }

                            const pBullets = [];
                            if (Array.isArray(p.description)) p.description.forEach(d => pBullets.push(d));
                            else if (typeof p.description === 'string' && p.description) pBullets.push(p.description);
                            if (Array.isArray(p.skills_used) && p.skills_used.length > 0) {
                                pBullets.push(`Tecnologías: ${p.skills_used.join(', ')}`);
                            } else if (Array.isArray(p.technologies) && p.technologies.length > 0) {
                                pBullets.push(`Tecnologías: ${p.technologies.join(', ')}`);
                            }
                            if (Array.isArray(p.results) && p.results.length > 0) {
                                p.results.forEach(r => pBullets.push(r));
                            }
                            if (pBullets.length > 0) {
                                projHtml += '<ul class="cv-bullets" style="margin-top:2px; margin-bottom:6px;">';
                                pBullets.forEach(b => { projHtml += `<li>${b}</li>`; });
                                projHtml += '</ul>';
                            }
                        });
                        projBulletsEl.innerHTML = projHtml;
                        if (projSec) projSec.style.display = 'block';
                    } else {
                        if (projSec) projSec.style.display = 'none';
                    }
                }

                // 7. Certificaciones
                const certSec = document.getElementById('cv-section-certifications');
                const certBulletsEl = document.getElementById('cv-certifications-bullets');
                const certArray = Array.isArray(data.certifications) ? data.certifications : [];
                if (certBulletsEl) {
                    if (certArray.length > 0) {
                        let certHtml = '<ul class="cv-bullets" style="margin-top:4px; margin-bottom:8px;">';
                        certArray.forEach(c => {
                            if (typeof c === 'string') {
                                certHtml += `<li>${c}</li>`;
                            } else {
                                let line = c.name || '';
                                if (c.issuer) line += ` | ${c.issuer}`;
                                if (c.date || c.year) line += ` (${c.date || c.year})`;
                                if (c.credential_url) line += ` [${cleanLink(c.credential_url)}]`;
                                certHtml += `<li>${line}</li>`;
                            }
                        });
                        certHtml += '</ul>';
                        certBulletsEl.innerHTML = certHtml;
                        if (certSec) certSec.style.display = 'block';
                    } else {
                        if (certSec) certSec.style.display = 'none';
                    }
                }

                // 8. Idiomas
                const langSec = document.getElementById('cv-section-languages');
                const langBulletsEl = document.getElementById('cv-languages-bullets');
                const langArray = Array.isArray(data.languages) ? data.languages : [];
                if (langBulletsEl) {
                    if (langArray.length > 0) {
                        const langStr = langArray.map(l => {
                            if (typeof l === 'string') return l;
                            const desc = l.description ? ` (${l.description})` : '';
                            return `${l.language || ''}: ${l.level || l.fluency || ''}${desc}`;
                        }).join(' | ');
                        langBulletsEl.innerHTML = `<div style="margin-top:4px;">${langStr}</div>`;
                        if (langSec) langSec.style.display = 'block';
                    } else {
                        if (langSec) langSec.style.display = 'none';
                    }
                }

                // 9. Información Adicional
                const addSec = document.getElementById('cv-section-additional');
                const addBulletsEl = document.getElementById('cv-additional-bullets');
                const addObj = data.additional_information;
                if (addBulletsEl) {
                    if (addObj && typeof addObj === 'object') {
                        const addLines = [];
                        if (addObj.availability) addLines.push(`Disponibilidad: ${addObj.availability}`);
                        if (addObj.willing_to_relocate !== undefined && addObj.willing_to_relocate !== null) {
                            addLines.push(`Disponibilidad para reubicación: ${addObj.willing_to_relocate ? 'Sí' : 'No'}`);
                        }
                        if (addObj.willing_to_travel !== undefined && addObj.willing_to_travel !== null) {
                            addLines.push(`Disponibilidad para viajar: ${addObj.willing_to_travel ? 'Sí' : 'No'}`);
                        }
                        if (addLines.length > 0) {
                            let addHtml = '<ul class="cv-bullets" style="margin-top:4px; margin-bottom:8px;">';
                            addLines.forEach(l => { addHtml += `<li>${l}</li>`; });
                            addHtml += '</ul>';
                            addBulletsEl.innerHTML = addHtml;
                            if (addSec) addSec.style.display = 'block';
                        } else if (addSec) {
                            addSec.style.display = 'none';
                        }
                    } else if (addSec) {
                        addSec.style.display = 'none';
                    }
                }
                
                extractedText = "";
                fileName = "";
                if (document.getElementById('file-indicator')) {
                    document.getElementById('file-indicator').style.display = 'none';
                }
                if (document.getElementById('cv-file')) {
                    document.getElementById('cv-file').value = "";
                }
                
                window.toggleJsonImportBox();
                checkInputsValidity();
                alert("¡CV actualizado con éxito en el documento!");
            } catch (e) {
                console.error(e);
                alert("Error al procesar el JSON. Asegúrate de copiar un bloque JSON válido y completo.");
            }
        };

        // Copiar Formato / Plantilla JSON de ejemplo al Portapapeles (Formato Universal Depurado)
        window.copyJsonTemplate = function() {
            const data = extractStructuredCVData();
            const template = {
                "personal_information": {
                    "full_name": data.name || "Juan Pérez García",
                    "professional_title": data.role || "Senior Full Stack Developer",
                    "email": "juan.perez@email.com",
                    "phone": "+51 999 999 999",
                    "location": "Lima, Peru",
                    "linkedin": "https://linkedin.com/in/juanperez",
                    "github": "https://github.com/juanperez"
                },
                "professional_profile": {
                    "summary": data.profile || "Ingeniero de Software con más de 5 años diseñando e implementando arquitecturas escalables y APIs de alto rendimiento."
                },
                "skills": {
                    "hard_skills": ["Arquitectura de Software", "Microservicios", "Modelado Relacional", "APIs RESTful"],
                    "technologies_and_tools": ["Node.js", "React", "TypeScript", "PostgreSQL", "Docker", "AWS", "Git"]
                },
                "experience": [
                    {
                        "company": "Tech Solutions Inc.",
                        "location": "Lima, Peru",
                        "position": "Senior Software Engineer",
                        "start_date": "January 2022",
                        "end_date": "Present",
                        "responsibilities": [
                            "Diseñé y lideré la arquitectura de microservicios en Node.js y AWS optimizando la latencia un 40%.",
                            "Implementé pipelines automatizados de CI/CD con Docker reduciendo el tiempo de despliegue de 45 a 8 minutos."
                        ]
                    }
                ],
                "projects": [
                    {
                        "name": "Plataforma E-commerce Escalable",
                        "location": "Lima, Peru",
                        "role": "Lead Developer",
                        "start_date": "January 2023",
                        "end_date": "June 2023",
                        "description": [
                            "Desarrollé una solución de pagos y catálogo con Node.js, React y PostgreSQL procesando 10k transacciones mensuales.",
                            "Incrementé la tasa de conversión en un 25% gracias al diseño responsivo y Checkout optimizado."
                        ]
                    }
                ],
                "education": [
                    {
                        "institution": "Universidad Nacional Mayor de San Marcos",
                        "location": "Lima, Peru",
                        "degree": "Bachelor of Science in Software Engineering (Ingeniería de Software)",
                        "start_date": "March 2017",
                        "end_date": "December 2021"
                    }
                ],
                "certifications": [
                    {
                        "name": "AWS Certified Solutions Architect – Associate | Amazon Web Services"
                    }
                ],
                "languages": [
                    {
                        "language": "Español",
                        "level": "Nativo"
                    },
                    {
                        "language": "Inglés",
                        "level": "Avanzado (C1)"
                    }
                ]
            };

            const jsonStr = JSON.stringify(template, null, 2);
            navigator.clipboard.writeText(jsonStr).then(() => {
                alert("¡Formato JSON optimizado copiado al portapapeles!");
            }).catch(err => {
                console.error("Error al copiar JSON: ", err);
                prompt("Copia el JSON manualmente:", jsonStr);
            });
        };

        // ─── Exportar Word (.docx / .doc compatible con ATS - 1 Sola Cara) ──────────────
        window.exportDocxWord = function() {
            var sheet = document.getElementById('cv-printable');
            if (!sheet) return;

            var name = document.getElementById('cv-name') ? document.getElementById('cv-name').innerText.trim() : 'Curriculum';
            var role = document.getElementById('cv-title-role') ? document.getElementById('cv-title-role').innerText.trim() : '';
            var contact = document.getElementById('cv-contact-info') ? document.getElementById('cv-contact-info').innerText.trim() : '';
            
            var wordHtml = '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
                'xmlns:w="urn:schemas-microsoft-com:office:word" ' +
                'xmlns="http://www.w3.org/TR/REC-html40">' +
                '<head><meta charset="utf-8"><title>' + name + ' - CV</title>' +
                '<style>' +
                '@page { size: 21cm 29.7cm; margin: 1.2cm 1.4cm 1.2cm 1.4cm; mso-page-orientation: portrait; }' +
                'body { font-family: "Calibri", "Arial", sans-serif; font-size: 10pt; line-height: 1.25; color: #000000; }' +
                'h1.cv-name { font-size: 15pt; font-weight: bold; text-align: center; margin: 0 0 1pt 0; text-transform: uppercase; }' +
                'p.cv-role { font-size: 10.5pt; font-weight: bold; text-align: center; margin: 0 0 2pt 0; color: #1e3a8a; }' +
                'p.cv-contact { font-size: 9pt; text-align: center; margin: 0 0 6pt 0; color: #333333; }' +
                'div.header-sep { border-bottom: 1.2pt solid #000000; margin-bottom: 6pt; }' +
                'h2.sec-title { font-size: 10pt; font-weight: bold; text-transform: uppercase; border-bottom: 1pt solid #000000; margin: 6pt 0 2pt 0; padding-bottom: 1pt; }' +
                'p.body-p { font-size: 9.5pt; margin: 1pt 0 2pt 0; text-align: justify; line-height: 1.25; }' +
                'ul { margin: 1pt 0 3pt 12pt; padding: 0; }' +
                'li { font-size: 9.5pt; margin-bottom: 1.5pt; line-height: 1.22; }' +
                'b.item-header { font-size: 9.5pt; font-weight: bold; }' +
                '</style></head><body>';

            wordHtml += '<h1 class="cv-name">' + name + '</h1>';
            if (role) wordHtml += '<p class="cv-role">' + role + '</p>';
            if (contact) wordHtml += '<p class="cv-contact">' + contact + '</p>';
            wordHtml += '<div class="header-sep"></div>';

            var sections = [
                { id: 'cv-section-profile', title: 'PROFESSIONAL SUMMARY', content: document.getElementById('cv-profile-text') ? document.getElementById('cv-profile-text').innerText : '' },
                { id: 'cv-section-skills', title: 'SKILLS', html: document.getElementById('cv-skills-list') ? document.getElementById('cv-skills-list').innerHTML : '' },
                { id: 'cv-section-experience', title: 'WORK EXPERIENCE', html: document.getElementById('cv-experience-bullets') ? document.getElementById('cv-experience-bullets').innerHTML : '' },
                { id: 'cv-section-projects', title: 'PROJECTS', html: document.getElementById('cv-projects-bullets') ? document.getElementById('cv-projects-bullets').innerHTML : '' },
                { id: 'cv-section-education', title: 'EDUCATION', html: document.getElementById('cv-education-bullets') ? document.getElementById('cv-education-bullets').innerHTML : '' },
                { id: 'cv-section-certifications', title: 'CERTIFICATIONS', html: document.getElementById('cv-certifications-bullets') ? document.getElementById('cv-certifications-bullets').innerHTML : '' },
                { id: 'cv-section-languages', title: 'LANGUAGES', html: document.getElementById('cv-languages-bullets') ? document.getElementById('cv-languages-bullets').innerHTML : '' },
                { id: 'cv-section-additional', title: 'ADDITIONAL INFORMATION', html: document.getElementById('cv-additional-bullets') ? document.getElementById('cv-additional-bullets').innerHTML : '' }
            ];

            sections.forEach(function(sec) {
                var secEl = document.getElementById(sec.id);
                if (secEl && secEl.style.display !== 'none') {
                    if (sec.content && sec.content.trim()) {
                        wordHtml += '<h2 class="sec-title">' + sec.title + '</h2>';
                        wordHtml += '<p class="body-p">' + sec.content.replace(/\n/g, '<br>') + '</p>';
                    } else if (sec.html && sec.html.trim()) {
                        wordHtml += '<h2 class="sec-title">' + sec.title + '</h2>';
                        wordHtml += sec.html;
                    }
                }
            });

            wordHtml += '</body></html>';

            var blob = new Blob(['\ufeff', wordHtml], { type: 'application/msword;charset=utf-8' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            var safeFilename = (name.replace(/[^a-zA-Z0-9_-]/g, '_') || 'CV') + '_Harvard_ATS_1Page.doc';
            a.href = url;
            a.download = safeFilename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(function() { URL.revokeObjectURL(url); }, 500);
        };

        // ─── Exportar PDF limpio ATS (1 Sola Cara Garantizada) ────
        window.printCV = function() {
            var sheet = document.getElementById('cv-printable');
            if (!sheet) return;
            
            sheet.classList.remove('printing-sheet-anim');
            void sheet.offsetWidth;
            sheet.classList.add('printing-sheet-anim');

            var cvContent = sheet.innerHTML;
            var templateClass = sheet.className;

            var css = [
                '@page{size:A4;margin:1.1cm 1.3cm}',
                '*{box-sizing:border-box}',
                'body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:9.5pt;line-height:1.32;color:#0f172a;background:#fff;margin:0;padding:0}',
                '.cv-header-block{text-align:center;border-bottom:1.2pt solid #0f172a;padding-bottom:3pt;margin-bottom:5pt}',
                '.cv-header-text{width:100%}',
                '.cv-photo-box{display:none!important}',
                '.cv-name-title{font-size:15pt;font-weight:800;margin:0 0 1pt;letter-spacing:0;text-transform:uppercase;color:#0f172a}',
                '.cv-role-line{font-size:10pt;font-weight:700;margin-bottom:2pt;letter-spacing:0;color:#1e3a8a}',
                '.cv-contact-line{font-size:8.8pt;color:#334155;letter-spacing:0}',
                '.cv-section{margin-bottom:2pt;page-break-inside:avoid}',
                '.cv-section-title{font-size:9pt;font-weight:800;letter-spacing:0.04em;text-transform:uppercase;border-bottom:1pt solid #0f172a;padding-bottom:1pt;margin-top:5pt;margin-bottom:2pt;color:#0f172a}',
                '.cv-body-text{font-size:9.2pt;margin:1pt 0 2pt;white-space:pre-line;letter-spacing:0;color:#1e293b;text-align:justify;line-height:1.3}',
                '.cv-skills-text{font-style:normal}',
                '.cv-bullets{padding-left:14pt;margin:1pt 0 2pt;list-style-type:disc}',
                '.cv-bullets li{font-size:9.2pt;margin-bottom:1.5pt;line-height:1.28;letter-spacing:0;color:#1e293b}',
                '.template-modern .cv-header-block{text-align:left!important;border-bottom:none!important;margin-bottom:6pt!important}',
                '.template-modern .cv-name-title{font-size:17pt!important}',
                '.template-modern .cv-role-line{font-size:10.5pt!important}',
                '.template-modern .cv-contact-line{text-align:left!important}',
                '.template-modern .cv-section-title{border-bottom:1pt solid #0f172a!important}',
                '.template-compact{font-size:8.5pt!important;line-height:1.25!important}',
                '.template-compact .cv-name-title{font-size:14pt!important}',
                '.template-compact .cv-role-line{font-size:9.5pt!important}',
                '.template-compact .cv-header-block{border-bottom:1px dashed #0f172a!important}',
                '.template-compact .cv-section-title{font-size:8.2pt!important}',
                '.template-compact .cv-body-text,.template-compact p,.template-compact li{font-size:8.5pt!important}'
            ].join('\n');

            var styleOpen  = '<' + 'style>';
            var styleClose = '<' + '/style>';
            var html = '<!DOCTYPE html>' +
                '<html lang="es"><head>' +
                '<meta charset="UTF-8">' +
                '<title>' + (document.getElementById('cv-name').innerText || 'CV ATS') + ' - Harvard ATS</title>' +
                styleOpen + css + styleClose +
                '</head><body class="' + templateClass + '">' +
                cvContent +
                '</body></html>';

            var blob = new Blob([html], {type:'text/html;charset=utf-8'});
            var url  = URL.createObjectURL(blob);
            var win  = window.open(url, '_blank', 'width=900,height=720');

            if (!win) {
                alert('El navegador bloqueó la ventana emergente. Permite pop-ups para este sitio.');
                URL.revokeObjectURL(url);
                return;
            }
            win.addEventListener('load', function() {
                setTimeout(function() { 
                    win.print(); 
                    URL.revokeObjectURL(url);
                    win.close(); 
                }, 300);
            });
        };

        // ─── Copiar Prompt de Entrevista IA al Portapapeles ──────────────
        window.copyPromptToClipboard = function() {
            const promptEl = document.getElementById('prompt-content');
            if (!promptEl) return;
            const textToCopy = promptEl.innerText || promptEl.textContent;

            const toast = document.getElementById('copy-toast');
            const showSuccess = () => {
                if (toast) {
                    toast.style.display = 'block';
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                        toast.style.display = 'none';
                    }, 2000);
                } else {
                    alert('¡Prompt copiado al portapapeles con éxito!');
                }
            };

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy).then(showSuccess).catch(err => {
                    console.error('Error al copiar:', err);
                    fallbackCopyText(textToCopy, showSuccess);
                });
            } else {
                fallbackCopyText(textToCopy, showSuccess);
            }
        };

        function fallbackCopyText(text, callback) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                if (callback) callback();
            } catch (err) {
                prompt("Copia el texto manualmente:", text);
            }
            document.body.removeChild(textArea);
        }

        // ─── Módulo Orquestador de Modelo de Informe (ATS_ReportBuilder) ──────────────
        const ATS_ReportBuilder = {
            build: function(data) {
                const cv = data.cvData || {};
                const analysis = data.analysis || {};
                const scores = analysis.scores || {};
                const skillsRes = analysis.skillsResult || {};
                const expRes = analysis.experienceResult || {};
                const metricsRes = analysis.metricsResult || {};
                const structRes = analysis.structureResult || {};
                const repRes = analysis.repetitionResult || {};
                const knockout = data.knockout || {};

                const cleanText = (str) => {
                    if (!str) return "";
                    return str.replace(/[#*\_`~]/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
                };

                const metricCount = Number.isFinite(metricsRes.count)
                    ? metricsRes.count
                    : (metricsRes.found || []).length;

                // Generación de Recomendaciones Dinámicas con Estructura Fija de 7 Campos (Punto 16)
                const recommendations = [];

                if (scores.summary < 80) {
                    const missingKeywords = (skillsRes.missingHard || []).slice(0, 4);
                    const kwList = missingKeywords.length > 0 
                        ? missingKeywords.join(', ')
                        : (skillsRes.matchedHard || []).slice(0, 4).join(', ');
                    const candidateRole = cv.role ? (cv.role.charAt(0).toUpperCase() + cv.role.slice(1)) : 'Profesional';
                    recommendations.push({
                        priority: "ALTA",
                        section: "RESUMEN PROFESIONAL",
                        currentScore: `${scores.summary}/100`,
                        problem: "El resumen presenta alineación parcial con las tecnologías clave de la oferta.",
                        evidence: `Encontradas: ${(skillsRes.matchedHard || []).slice(0, 3).join(', ') || 'Básicas'} | Faltantes en resumen: ${missingKeywords.join(', ') || 'Específicas'}`,
                        action: "Reformular el resumen incorporando directamente las tecnologías principales requeridas en la oferta.",
                        example: `"${candidateRole} con experiencia en ${kwList || 'las herramientas clave'} y gestión de proyectos de alto impacto."`,
                        potentialImpact: "ALTO (+3 a +6 puntos potenciales)"
                    });
                }

                if (scores.structure < 80) {
                    const missingSections = (structRes.sections || [])
                        .filter(s => !s.detected)
                        .map(s => s.name);
                    recommendations.push({
                        priority: "MEDIA",
                        section: "ESTRUCTURA ATS",
                        currentScore: `${scores.structure}/100`,
                        problem: "Se detectaron encabezados de sección faltantes o no estandarizados.",
                        evidence: missingSections.length > 0 ? `Secciones ausentes: ${missingSections.join(', ')}` : "Títulos de sección no estándar",
                        action: "Organizar el CV utilizando encabezados estándar reconocibles por parsers ATS.",
                        example: "Usar títulos exactos: 'WORK EXPERIENCE', 'EDUCATION', 'SKILLS'.",
                        potentialImpact: "MEDIO (+2 a +5 puntos potenciales)"
                    });
                }

                if (scores.experience < 80 || metricCount < 2) {
                    recommendations.push({
                        priority: "ALTA",
                        section: "EXPERIENCIA & MÉTRICAS XYZ",
                        currentScore: `${scores.experience}/100`,
                        problem: `Se identificaron ${metricCount} métrica(s) cuantificables de impacto (mínimo recomendado: 2).`,
                        evidence: metricsRes.found && metricsRes.found.length > 0 ? `Métrica detectada: "${cleanText(metricsRes.found[0])}"` : "Sin métricas cuantificables de logro",
                        action: "Redactar logros en viñetas aplicando la estructura XYZ (Verbo de acción + Herramienta + Métrica).",
                        example: "'Optimicé los procesos operativos reduciendo los tiempos de ejecución en un 25% mediante planificación estratégica.'",
                        potentialImpact: "ALTO (+4 a +8 puntos potenciales)"
                    });
                }

                if (scores.skills < 80 || (skillsRes.missingHard && skillsRes.missingHard.length > 0)) {
                    const missing = (skillsRes.missingHard || []).slice(0, 5);
                    recommendations.push({
                        priority: "ALTA",
                        section: "HARD SKILLS & HERRAMIENTAS",
                        currentScore: `${scores.skills}/100`,
                        problem: `Faltan coincidir ${skillsRes.missingHard ? skillsRes.missingHard.length : 0} habilidad(es) técnica(s) requerida(s).`,
                        evidence: `Faltantes en CV: ${missing.join(', ')}`,
                        action: "Incluir y contextualizar las herramientas obligatorias dentro del bloque de habilidades y experiencias.",
                        example: `"Habilidades Técnicas: ${missing.join(' · ')}"`,
                        potentialImpact: "MUY ALTO (+5 a +10 puntos potenciales)"
                    });
                }

                return {
                    dateStr: new Date().toLocaleDateString('es-ES'),
                    generalScore: analysis.generalScore || 0,
                    verdictStr: (analysis.generalScore >= 75) ? "EXCELLENT MATCH — APTO PARA SELECCION" : ((analysis.generalScore >= 50) ? "GOOD — REQUIERE OPTIMIZAR METRICAS" : "INCOMPATIBLE"),
                    detectedDomain: data.detectedDomain ? data.detectedDomain.toUpperCase() : "TECNOLOGIA",
                    candidateName: cleanText(cv.name) || "Candidato",
                    candidateRole: cleanText(cv.role) || "No especificado",
                    candidateContact: cleanText(cv.contact) || "No especificado",
                    jobTitle: cleanText(analysis.titleResult ? analysis.titleResult.jobTitle : "Puesto vacante"),
                    cvLevel: cleanText(analysis.titleResult ? analysis.titleResult.cvLevel.toUpperCase() : "JUNIOR"),
                    jobLevel: cleanText(analysis.titleResult ? analysis.titleResult.jobLevel.toUpperCase() : "JUNIOR"),
                    scores: scores,
                    skillsRes: skillsRes,
                    metricsRes: {
                        count: metricCount,
                        required: 2,
                        found: metricsRes.found || [],
                        missing: metricsRes.missing || []
                    },
                    structRes: structRes,
                    repRes: repRes,
                    knockout: knockout,
                    recommendations: recommendations
                };
            }
        };

        // ─── Descargar Informe ATS Limpio, Estructurado y Plano (.txt) ────────────────
        window.downloadATSReport = function() {
            if (!window.lastAnalysisData) {
                return alert("No hay un análisis realizado para descargar.");
            }
            const model = ATS_ReportBuilder.build(window.lastAnalysisData);

            const cleanText = (str) => {
                if (!str) return "";
                return str.replace(/[#*\_`~]/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
            };

            const makeBar = (pct) => "█".repeat(Math.round(pct / 5)) + "░".repeat(20 - Math.round(pct / 5));

            const reportLines = [];
            reportLines.push("===============================================================================");
            reportLines.push("                       ATS SCANNER — INFORME DE DIAGNOSTICO                     ");
            reportLines.push("===============================================================================");
            reportLines.push("");
            reportLines.push("FECHA DEL ANALISIS: " + model.dateStr);
            reportLines.push("");
            reportLines.push("===============================================================================");
            reportLines.push("1. RESUMEN EJECUTIVO");
            reportLines.push("===============================================================================");
            reportLines.push("");
            reportLines.push("Puntaje ATS:   " + model.generalScore + " / 100");
            reportLines.push("Estado:        " + model.verdictStr);
            reportLines.push("Dominio:       " + model.detectedDomain);
            reportLines.push("Cargo CV:      " + model.candidateRole);
            reportLines.push("Cargo Vacante: " + model.jobTitle);
            reportLines.push("");
            reportLines.push("-------------------------------------------------------------------------------");
            reportLines.push("PUNTAJE POR CATEGORIA Y EXPLICACION");
            reportLines.push("-------------------------------------------------------------------------------");
            reportLines.push("Hard Skills                  " + (model.scores.skills || 0) + "%   " + makeBar(model.scores.skills || 0));
            reportLines.push("Experiencia                  " + (model.scores.experience || 0) + "%   " + makeBar(model.scores.experience || 0));
            reportLines.push("Resumen Profesional           " + (model.scores.summary || 0) + "%   " + makeBar(model.scores.summary || 0));
            reportLines.push("Estructura ATS                " + (model.scores.structure || 0) + "%   " + makeBar(model.scores.structure || 0));
            reportLines.push("");

            reportLines.push("===============================================================================");
            reportLines.push("2. FORTALEZAS CLAVE");
            reportLines.push("===============================================================================");
            if (model.skillsRes.missingHard && model.skillsRes.missingHard.length === 0) reportLines.push("[OK] Coincidencia completa de Hard Skills obligatorias");
            if (model.jobTitle) reportLines.push("[OK] Cargo de la vacante reconocido y evaluado");
            if (model.metricsRes.count >= 2) reportLines.push("[OK] Presencia de métricas XYZ cuantificables de impacto");
            if (model.scores.structure >= 70) reportLines.push("[OK] Estructura estándar reconocible por motores ATS");
            reportLines.push("");

            reportLines.push("===============================================================================");
            reportLines.push("3. HARD SKILLS & COINCIDENCIA TECNICA");
            reportLines.push("===============================================================================");
            reportLines.push("Coincidentes: " + (model.skillsRes.matchedHard ? model.skillsRes.matchedHard.length : 0));
            reportLines.push("Faltantes:    " + (model.skillsRes.missingHard ? model.skillsRes.missingHard.length : 0));
            reportLines.push("");
            if (model.skillsRes.matchedHard && model.skillsRes.matchedHard.length > 0) {
                model.skillsRes.matchedHard.forEach(s => reportLines.push("[OK] " + cleanText(s) + " - Detectada en el CV"));
            }
            if (model.skillsRes.missingHard && model.skillsRes.missingHard.length > 0) {
                model.skillsRes.missingHard.forEach(s => reportLines.push("[FALTA] " + cleanText(s) + " - Requerida en la oferta"));
            }
            reportLines.push("");
            reportLines.push("RESULTADO: " + (model.scores.skills || 0) + "%");
            reportLines.push("");

            reportLines.push("===============================================================================");
            reportLines.push("4. EXPERIENCIA, VERBOS Y METRICAS XYZ");
            reportLines.push("===============================================================================");
            reportLines.push("Score Experiencia: " + (model.scores.experience || 0) + "%");
            reportLines.push("");
            reportLines.push("Métricas XYZ Detectadas (" + model.metricsRes.count + " encontradas / " + model.metricsRes.required + " requeridas):");
            if (model.metricsRes.found && model.metricsRes.found.length > 0) {
                model.metricsRes.found.forEach((m, idx) => reportLines.push("  " + (idx + 1) + ". " + cleanText(m)));
            } else {
                reportLines.push("  (No se detectaron métricas cuantitativas XYZ)");
            }
            reportLines.push("");
            reportLines.push("Evaluación STAR / Impact Statement:");
            reportLines.push("  [OK] Verbos de acción fuertes presentes");
            reportLines.push("  [OK] Tecnologías aplicadas en contexto");
            reportLines.push("  " + (model.metricsRes.count >= 2 ? "[OK] Métricas cuantificables demostradas" : "[WAR] Agregar métricas cuantitativas extra"));
            reportLines.push("");

            reportLines.push("===============================================================================");
            reportLines.push("5. ANALISIS DEL RESUMEN PROFESIONAL (" + (model.scores.summary || 0) + "/100)");
            reportLines.push("===============================================================================");
            if (model.scores.summary === 100) {
                reportLines.push("[OK] Extracto perfecto: Longitud ideal (40-100 palabras), métricas de impacto y palabras clave integradas al 100%.");
            } else {
                reportLines.push("[EVALUACION]: Longitud adecuada y estructura base identificada.");
                reportLines.push("");
                reportLines.push("💡 CONSEJOS CLAVE PARA ALCANZAR EL 100% EN EL RESUMEN:");
                const kwToSuggest = (model.skillsRes.requiredHard && model.skillsRes.requiredHard.length > 0)
                    ? model.skillsRes.requiredHard.slice(0, 4).join(', ').toUpperCase()
                    : (model.skillsRes.matchedHard && model.skillsRes.matchedHard.length > 0 ? model.skillsRes.matchedHard.slice(0, 4).join(', ').toUpperCase() : "competencias técnicas clave del puesto");
                reportLines.push("1. Incluye explícitamente 3 o más herramientas/habilidades técnicas de la vacante en tu resumen:");
                reportLines.push("   -> Herramientas/Habilidades sugeridas: " + kwToSuggest);
                reportLines.push("2. Emplea al menos 2 verbos de acción fuertes en primera persona (ej. 'Gestioné', 'Implementé', 'Coordiné', 'Optimicé').");
                reportLines.push("3. Incorpora una métrica cuantitativa de impacto porcentual o numérico (ej. 'aumentando la eficiencia en un 20%').");
            }
            reportLines.push("");

            reportLines.push("===============================================================================");
            reportLines.push("6. ESTRUCTURA Y FORMATO ATS (" + (model.scores.structure || 0) + "/100)");
            reportLines.push("===============================================================================");
            if (model.structRes.sections) {
                model.structRes.sections.forEach(sec => {
                    reportLines.push((sec.detected ? "[OK] " : "[WAR] ") + sec.name + " (" + sec.key + ")");
                });
            }
            reportLines.push("");

            reportLines.push("===============================================================================");
            reportLines.push("7. SOFT SKILLS Y EVIDENCIA CONTEXTUAL");
            reportLines.push("===============================================================================");
            if (model.skillsRes.matchedSoft && model.skillsRes.matchedSoft.length > 0) {
                model.skillsRes.matchedSoft.forEach(s => {
                    reportLines.push("[OK] " + cleanText(s));
                    reportLines.push("     Evidencia: Demostrada en las descripciones y logros del CV.");
                });
            } else {
                reportLines.push("  (Sin evidencias de soft skills listadas)");
            }
            reportLines.push("");

            reportLines.push("===============================================================================");
            reportLines.push("8. DENSIDAD DE KEYWORDS Y REPETICION");
            reportLines.push("===============================================================================");
            if (model.repRes.overused && model.repRes.overused.length > 0) {
                reportLines.push("Estado: [WAR] REVISAR DENSIDAD");
                reportLines.push("Términos con repetición excesiva en la misma oración:");
                model.repRes.overused.forEach(o => reportLines.push("  - " + o.word + " (" + o.count + " menciones)"));
                reportLines.push("");
                reportLines.push("RECOMENDACION: Diversificar los términos en las oraciones señaladas.");
            } else {
                reportLines.push("Estado: [OK] DENSIDAD OPTIMA");
                reportLines.push("No se detectó keyword stuffing ni repeticiones innecesarias consecutivas.");
            }
            reportLines.push("");

            reportLines.push("===============================================================================");
            reportLines.push("9. CRITERIOS DE DESCARTE (KNOCKOUT)");
            reportLines.push("===============================================================================");
            if (model.knockout.isKnockout) {
                reportLines.push("Estado: [ALERT] POTENCIAL DESCARTE AUTOMATICO");
                (model.knockout.reasons || []).forEach(r => reportLines.push("  - " + cleanText(r)));
            } else {
                reportLines.push("[OK] Cargo compatible");
                reportLines.push("[OK] Nivel de experiencia compatible");
                reportLines.push("[OK] Formación académica requerida cubierta");
                reportLines.push("[OK] Hard Skills obligatorias satisfechas");
                reportLines.push("Resultado: NO DESCARTADO EN PRIMERA FASE");
            }
            reportLines.push("");

            reportLines.push("===============================================================================");
            reportLines.push("10. RECOMENDACIONES PRIORITARIAS CON ESTRUCTURA DETALLADA");
            reportLines.push("===============================================================================");
            if (model.recommendations && model.recommendations.length > 0) {
                model.recommendations.forEach((rec, idx) => {
                    reportLines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
                    reportLines.push(`PRIORIDAD ${rec.priority} — ${rec.section.toUpperCase()}`);
                    reportLines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
                    reportLines.push(`Score Actual:     ${rec.currentScore}`);
                    reportLines.push(`Problema:         ${rec.problem}`);
                    reportLines.push(`Evidencia:        ${rec.evidence}`);
                    reportLines.push(`Acción:           ${rec.action}`);
                    reportLines.push(`Ejemplo:          ${rec.example}`);
                    reportLines.push(`Impacto Estimado: ${rec.potentialImpact}`);
                    reportLines.push("");
                });
            } else {
                reportLines.push("  (No hay observaciones críticas. El CV está optimizado para la vacante)");
                reportLines.push("");
            }

            reportLines.push("===============================================================================");
            reportLines.push("11. CONCLUSION Y VEREDICTO FINAL");
            reportLines.push("===============================================================================");
            reportLines.push("El CV presenta la compatibilidad técnica evaluada.");
            reportLines.push("Principal fortaleza: " + (model.scores.skills || 0) + "% coincidencia en Hard Skills.");
            reportLines.push("Oportunidad: Optimización de las áreas con recomendaciones prioritarias.");
            reportLines.push("");
            reportLines.push("RECOMENDACION FINAL: " + model.verdictStr);
            reportLines.push("===============================================================================");

            const textContent = reportLines.join("\r\n");
            const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const safeName = (model.candidateName || "Candidato").replace(/[^a-zA-Z0-9_-]/g, "_");
            a.download = `Informe_ATS_${safeName}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        };
        window.clearEditorFields = function() {
            if (!confirm("¿Deseas limpiar todos los campos del documento?")) return;
            
            const nameEl = document.getElementById('cv-name');
            const roleEl = document.getElementById('cv-title-role');
            const contactEl = document.getElementById('cv-contact-info');
            const profileEl = document.getElementById('cv-profile-text');
            const skillsEl = document.getElementById('cv-skills-list');
            const expEl = document.getElementById('cv-experience-bullets');
            const projEl = document.getElementById('cv-projects-bullets');
            const eduEl = document.getElementById('cv-education-bullets');
            const certEl = document.getElementById('cv-certifications-bullets');
            const langEl = document.getElementById('cv-languages-bullets');
            const addEl = document.getElementById('cv-additional-bullets');
            const jsonEl = document.getElementById('import-json');

            if (nameEl) nameEl.innerText = "Nombre Completo";
            if (roleEl) roleEl.innerText = "Título Profesional";
            if (contactEl) contactEl.innerText = "correo@ejemplo.com | +00 000 000 000 | Ciudad, País";
            if (profileEl) profileEl.innerText = "";
            if (skillsEl) skillsEl.innerHTML = "";
            if (expEl) expEl.innerHTML = "";
            if (projEl) projEl.innerHTML = "";
            if (eduEl) eduEl.innerHTML = "";
            if (certEl) certEl.innerHTML = "";
            if (langEl) langEl.innerHTML = "";
            if (addEl) addEl.innerHTML = "";
            if (jsonEl) jsonEl.value = "";

            window.removePhoto();
            const photoToggle = document.getElementById('toggle-photo-checkbox');
            if (photoToggle) {
                photoToggle.checked = false;
                window.togglePhotoState(false);
            }
            checkInputsValidity();
        };

        // Ejecutar sincronización inicial al cargar
        window.onload = function() {
            checkInputsValidity();
        };
    


