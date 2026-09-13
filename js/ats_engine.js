const VERB_STEMS = {
    // Diseñar
    'disene': 'diseñar', 'diseno': 'diseñar', 'disenar': 'diseñar', 'disene': 'diseñar',
    'diseñe': 'diseñar', 'disenando': 'diseñar', 'diseñando': 'diseñar',
    // Implementar
    'implemente': 'implementar', 'implemento': 'implementar', 'implementar': 'implementar',
    'implementé': 'implementar', 'implementando': 'implementar',
    // Desarrollar
    'desarrolle': 'desarrollar', 'desarrollo': 'desarrollar', 'desarrollar': 'desarrollar',
    'desarrollé': 'desarrollar', 'desarrollando': 'desarrollar',
    // Optimizar
    'optimice': 'optimizar', 'optimizo': 'optimizar', 'optimizar': 'optimizar',
    'optimicé': 'optimizar', 'optimizando': 'optimizar', 'optimice': 'optimizar',
    // Construir
    'construi': 'construir', 'construí': 'construir', 'construir': 'construir',
    'construye': 'construir', 'construyendo': 'construir', 'construyo': 'construir',
    // Ejecutar
    'ejecute': 'ejecutar', 'ejecuté': 'ejecutar', 'ejecutar': 'ejecutar',
    'ejecuto': 'ejecutar', 'ejecutando': 'ejecutar',
    // Integrar
    'integre': 'integrar', 'integré': 'integrar', 'integro': 'integrar', 'integrar': 'integrar',
    'integrando': 'integrar',
    // Liderar
    'lidere': 'liderar', 'lideré': 'liderar', 'lidero': 'liderar', 'liderar': 'liderar',
    'liderando': 'liderar',
    // Crear
    'cree': 'crear', 'créé': 'crear', 'creo': 'crear', 'crear': 'crear', 'creando': 'crear',
    // Automatizar
    'automatice': 'automatizar', 'automaticé': 'automatizar', 'automatizo': 'automatizar',
    'automatizar': 'automatizar', 'automatizando': 'automatizar',
    // Mejorar
    'mejore': 'mejorar', 'mejoré': 'mejorar', 'mejoro': 'mejorar', 'mejorar': 'mejorar',
    'mejorando': 'mejorar',
    // Reducir
    'reduje': 'reducir', 'redujo': 'reducir', 'reducir': 'reducir', 'reduciendo': 'reducir',
    // Migrar
    'migre': 'migrar', 'migré': 'migrar', 'migro': 'migrar', 'migrar': 'migrar',
    'migrando': 'migrar', 'migro': 'migrar',
    // Desplegar / Deploy
    'despliegue': 'desplegar', 'desplegué': 'desplegar', 'despliega': 'desplegar',
    'desplegar': 'desplegar', 'desplegando': 'desplegar',
    // Configurar
    'configure': 'configurar', 'configuré': 'configurar', 'configuro': 'configurar',
    'configurar': 'configurar', 'configurando': 'configurar',
    // Refactorizar
    'refactorice': 'refactorizar', 'refactoricé': 'refactorizar', 'refactorizar': 'refactorizar',
    'refactorizando': 'refactorizar', 'refactorizo': 'refactorizar',
    // Documentar
    'documente': 'documentar', 'documenté': 'documentar', 'documento': 'documentar',
    'documentar': 'documentar', 'documentando': 'documentar',
    // Coordinar
    'coordine': 'coordinar', 'coordiné': 'coordinar', 'coordino': 'coordinar',
    'coordinar': 'coordinar', 'coordinando': 'coordinar',
    // Analizar
    'analice': 'analizar', 'analicé': 'analizar', 'analizo': 'analizar',
    'analizar': 'analizar', 'analizando': 'analizar',
    // Validar
    'valide': 'validar', 'validé': 'validar', 'valido': 'validar',
    'validar': 'validar', 'validando': 'validar',
    // Diseñar (aliases)
    'modele': 'modelar', 'modelé': 'modelar', 'modelo': 'modelar', 'modelar': 'modelar',
    // Gestionar
    'gestion': 'gestionar', 'gestione': 'gestionar', 'gestioné': 'gestionar',
    'gestiono': 'gestionar', 'gestionar': 'gestionar', 'gestionando': 'gestionar',
    // Reemplazar
    'reemplace': 'reemplazar', 'reemplacé': 'reemplazar', 'reemplazar': 'reemplazar',
    'reemplazando': 'reemplazar',
    // Supervisar
    'supervise': 'supervisar', 'supervisé': 'supervisar', 'superviso': 'supervisar', 'supervisar': 'supervisar', 'supervisando': 'supervisar',
    // Compatibilizar
    'compatibilice': 'compatibilizar', 'compatibilicé': 'compatibilizar', 'compatibilizo': 'compatibilizar', 'compatibilizar': 'compatibilizar', 'compatibilizando': 'compatibilizar',
    // Elaborar
    'elabore': 'elaborar', 'elaboré': 'elaborar', 'elaboro': 'elaborar', 'elaborar': 'elaborar', 'elaborando': 'elaborar',
    // Mitigar
    'mitigue': 'mitigar', 'mitigué': 'mitigar', 'mitigo': 'mitigar', 'mitigar': 'mitigar', 'mitigando': 'mitigar',
    // Planificar
    'planifique': 'planificar', 'planifiqué': 'planificar', 'planifico': 'planificar', 'planificar': 'planificar', 'planificando': 'planificar',
    // Auditar
    'audite': 'auditar', 'audité': 'auditar', 'audito': 'auditar', 'auditar': 'auditar', 'auditando': 'auditar',
    
    // VERBOS EN INGLÉS (ATS GLOBAL)
    'design': 'diseñar', 'designed': 'diseñar', 'designing': 'diseñar',
    'develop': 'desarrollar', 'developed': 'desarrollar', 'developing': 'desarrollar',
    'implement': 'implementar', 'implemented': 'implementar', 'implementing': 'implementar',
    'optimize': 'optimizar', 'optimized': 'optimizar', 'optimizing': 'optimizar',
    'build': 'construir', 'built': 'construir', 'building': 'construir',
    'lead': 'liderar', 'led': 'liderar', 'leading': 'liderar',
    'create': 'crear', 'created': 'crear', 'creating': 'crear',
    'automate': 'automatizar', 'automated': 'automatizar', 'automating': 'automatizar',
    'improve': 'mejorar', 'improved': 'mejorar', 'improving': 'mejorar',
    'reduce': 'reducir', 'reduced': 'reducir', 'reducing': 'reducir',
    'migrate': 'migrar', 'migrated': 'migrar', 'migrating': 'migrar',
    'deploy': 'desplegar', 'deployed': 'desplegar', 'deploying': 'desplegar',
    'configure': 'configurar', 'configured': 'configurar', 'configuring': 'configurar',
    'refactor': 'refactorizar', 'refactored': 'refactorizar', 'refactoring': 'refactorizar',
    'document': 'documentar', 'documented': 'documentar', 'documenting': 'documentar',
    'coordinate': 'coordinar', 'coordinated': 'coordinar', 'coordinating': 'coordinar',
    'analyze': 'analizar', 'analyzed': 'analizar', 'analyzing': 'analizar',
    'validate': 'validar', 'validated': 'validar', 'validating': 'validar',
    'manage': 'gestionar', 'managed': 'gestionar', 'managing': 'gestionar',
    'architect': 'diseñar', 'architected': 'diseñar', 'architecting': 'diseñar',
    'engineer': 'desarrollar', 'engineered': 'desarrollar', 'engineering': 'desarrollar'
};
// [Módulo I] ATS_TextNormalizer - Limpieza, unificación UTF y normalización
const ATS_TextNormalizer = {
    normalize: function(text) {
        if (!text) return "";
        let processed = text;
        
        // ── FIX PDF LETTER-SPACING ──
        // Los PDFs con tracking/espaciado de letras generan texto como:
        // "P R O Y E C T O S" o "ha b i l ida d e s"
        // Detectar y colapsar secuencias de letras únicas separadas por espacio
        // Patrón: grupos de 1-2 caracteres separados por espacios que forman palabras
        processed = processed
            // Colapsar letras en mayúsculas espaciadas: "P R O Y E C T O S" → "PROYECTOS"
            .replace(/\b([A-ZÁÉÍÓÚÑ])(?:\s([A-ZÁÉÍÓÚÑ])){2,}\b/g, (match) => match.replace(/\s/g, ''))
            // Colapsar letras en minúsculas espaciadas: "p r o y e c t o s" o "ha b i l i da d"
            // Solo cuando hay >=3 grupos de 1-3 chars seguidos
            .replace(/(?:^|(?<=\s))([a-záéíóúñ]{1,3})(?:\s([a-záéíóúñ]{1,3})){3,}(?=\s|$)/g, (match) => match.replace(/\s/g, ''));
        
        return processed.toLowerCase()
            .normalize("NFD")
            // Eliminar acentos y diacríticos
            .replace(/[\u0300-\u036f]/g, "")
            // Unificar símbolos comunes y puntuación por espacios
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, " ")
            // Quitar caracteres invisibles o de control
            .replace(/[\u200B-\u200D\uFEFF]/g, "")
            // Unificar espacios dobles y triples
            .replace(/\s+/g, " ")
            .trim();
    }
};

function normalizeVerb(verbToken) {
    const clean = ATS_TextNormalizer.normalize(verbToken);
    return VERB_STEMS[clean] || clean;
}

// ==========================================
// DEPENDENCIES CHECK (for Node.js)
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    global.ALIAS_DICTIONARY = require('./dictionary.js').ALIAS_DICTIONARY;
    global.TITLE_EQUIVALENCE = require('./dictionary.js').TITLE_EQUIVALENCE;
    global.LANGUAGE_LEVELS = require('./dictionary.js').LANGUAGE_LEVELS;
    global.normalizeText = require('./dictionary.js').normalizeText;
    global.escapeRegex = require('./dictionary.js').escapeRegex;
    global.standardizeText = require('./dictionary.js').standardizeText;
    global.RULES = require('./rules.js');
}

// [Módulo II] ATS_Tokenizer - Tokenización y mapeo de alias
        const ATS_Tokenizer = {
            tokenize: function(text) {
                // Obtenemos el texto normalizado
                const normalized = ATS_TextNormalizer.normalize(text);
                let words = normalized.split(' ');
                
                // Mapear alias definidos en dictionary.js
                return words.map(word => {
                    return ALIAS_DICTIONARY[word] || word;
                });
            },
            
            // Reemplaza ocurrencias de alias complejos en texto completo antes de tokenizar
            standardizeText: function(text) {
                let clean = ATS_TextNormalizer.normalize(text);
                const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                // Mapear variaciones compuestas como "react.js", "power bi", "c++", etc.
                for (let alias of Object.keys(ALIAS_DICTIONARY)) {
                    if (clean.includes(alias)) {
                        const target = ALIAS_DICTIONARY[alias];
                        // Reemplazo seguro mediante expresiones regulares escapadas
                        const escaped = escapeRegExp(alias);
                        const isSymbolTerm = /[\+\#]/.test(alias);
                        const regex = isSymbolTerm ? new RegExp(`(^|\\s)${escaped}(\\s|$)`, 'g') : new RegExp(`\\b${escaped}\\b`, 'g');
                        clean = clean.replace(regex, isSymbolTerm ? `$1${target}$2` : target);
                    }
                }
                return clean;
            }
        };

        // [Módulo III] ATS_TitleAnalyzer - Equivalencias de roles y jerarquías
        const ATS_TitleAnalyzer = {
            levels: {
                junior: ['junior', 'jr', 'practicante', 'pasante', 'intern', 'trainee', 'asistente'],
                mid: ['semi-senior', 'ssr', 'mid', 'analista', 'coordinador'],
                senior: ['senior', 'sr', 'especialista', 'expert'],
                lead: ['lead', 'principal', 'manager', 'director', 'gerente', 'lider', 'coordinador', 'jefe']
            },
            extractTitle: function(text) {
                function collapseLine(line) {
                    let r = line.replace(/\b([A-ZÁÉÍÓÚÑ])(?:\s([A-ZÁÉÍÓÚÑ])){2,}\b/g, m => m.replace(/\s/g, ''));
                    r = r.replace(/(?:^|(?<=\s))([a-záéíóúñ]{1,3})(?:\s([a-záéíóúñ]{1,3})){3,}(?=\s|$)/g, m => m.replace(/\s/g, ''));
                    return r;
                }
                const sectionHeaders = /(?:proyectos|projects|experiencia|experience|habilidades|skills|educaci[oó]n|formaci[oó]n|certificaciones|idiomas|contacto|resumen|perfil)/i;
                const rawLines = text.split('\n').map(l => collapseLine(l.trim())).filter(l => l.length > 0);
                
                // Si el texto vino sin saltos de línea (un solo bloque grande), separar por pipe o etiquetas
                let lines = [];
                rawLines.forEach(l => {
                    if (l.length > 150 && (l.includes('|') || l.includes('•'))) {
                        l.split(/(?:\s+\|\s+|\n)/).forEach(part => lines.push(part.trim()));
                    } else {
                        lines.push(l);
                    }
                });

                for (let i = 0; i < Math.min(15, lines.length); i++) {
                    let line = lines[i];
                    const cleanLower = line.toLowerCase();

                    // Si la línea contiene datos de contacto, fechas, años de exp o encabezados de sección pegados, ignorar
                    if (cleanLower.includes('@') || cleanLower.includes('github') || cleanLower.includes('linkedin') || /^\+?\d/.test(line.trim()) || /\b\d+\s+(?:anos|años|years)\b/i.test(cleanLower)) {
                        continue;
                    }
                    if (sectionHeaders.test(cleanLower.split(/\s+/)[0])) {
                        continue;
                    }

                    // Limpiar sufijos pegados de contacto o secciones
                    line = line.split(/(?:\+|iradolfo|github|linkedin|resumen|experiencia|habilidades)/i)[0].trim();
                    line = line.replace(/[|\s]+$/, '').trim();

                    if (!line || line.length < 3 || line.length > 90) continue;

                    // 1. Detectar títulos y cargos multi-palabra o con barras
                    for (let role of Object.keys(TITLE_EQUIVALENCE)) {
                        if (cleanLower.includes(role)) return line.trim().replace(/[\r\n]+$/, '');
                        const equivs = TITLE_EQUIVALENCE[role] || [];
                        for (let eq of equivs) {
                            if (cleanLower.includes(eq)) return line.trim().replace(/[\r\n]+$/, '');
                        }
                    }
                    // 2. Patrones genéricos de títulos profesionales (Ingeniero, Licenciado, Residente, Coordinador, etc.)
                    if (/(?:ingenier[oa]|arquitect[oa]|resident[e]|coordinador[a]?|analista|especialista|jef[ea]|gerente|desarrollador[a]?|licenciad[oa]|consultor[a]?|supervisor[a]?|asistent[e]|tecnic[oa]|t[eé]cnic[oa])/i.test(cleanLower)) {
                        return line.trim().replace(/[\r\n]+$/, '');
                    }
                    for (let level of Object.keys(this.levels)) {
                        for (let keyword of this.levels[level]) {
                            if (cleanLower.includes(keyword)) return line.trim().replace(/[\r\n]+$/, '');
                        }
                    }
                }
                const fallback = lines[1] || lines[0] || "Profesional";
                return fallback.split(/(?:\+|iradolfo|github|linkedin|resumen)/i)[0].replace(/[|\s]+$/, '').trim();
            },
            detectLevel: function(titleText) {
                const lower = titleText.toLowerCase();
                for (let level of Object.keys(this.levels)) {
                    for (let keyword of this.levels[level]) {
                        if (lower.includes(keyword)) return level;
                    }
                }
                return "mid";
            },
            compare: function(cvTitle, jobTitle) {
                const sanitizeTitle = (t) => {
                    return t.toLowerCase()
                        .replace(/^(puesto|cargo|vacante|posici[oó]n|t[ií]tulo|role)\s*:\s*/i, '')
                        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, ' ')
                        .replace(/\s+/g, ' ')
                        .trim();
                };

                // Extraer el título principal antes de modificadores como '|', '/', '-', '–'
                const getCoreTitles = (raw) => {
                    if (!raw) return [];
                    const parts = raw.split(/[|\/\-–—•]/).map(p => sanitizeTitle(p)).filter(p => p.length > 2);
                    const full = sanitizeTitle(raw);
                    if (!parts.includes(full)) parts.unshift(full);
                    return parts;
                };

                const cvTitles = getCoreTitles(cvTitle);
                const jobTitles = getCoreTitles(jobTitle);

                const cleanCV = cvTitles[0] || sanitizeTitle(cvTitle);
                const cleanJob = jobTitles[0] || sanitizeTitle(jobTitle);
                const cvLevel = this.detectLevel(cleanCV);
                const jobLevel = this.detectLevel(cleanJob);

                let match = false;
                let isEquivalent = false;
                let partialOverlap = false;

                // 1. Coincidencia directa entre cualquiera de las partes principales del título
                for (let c of cvTitles) {
                    for (let j of jobTitles) {
                        if (c === j || c.includes(j) || j.includes(c)) {
                            match = true;
                            break;
                        }
                    }
                    if (match) break;
                }
                
                // 2. Buscar en equivalencias cargadas desde dictionary.js
                if (!match) {
                    for (let c of cvTitles) {
                        for (let key of Object.keys(TITLE_EQUIVALENCE)) {
                            if (c.includes(key)) {
                                const equivs = TITLE_EQUIVALENCE[key];
                                for (let eq of equivs) {
                                    if (jobTitles.some(j => j.includes(eq))) {
                                        isEquivalent = true;
                                        match = true;
                                        break;
                                    }
                                }
                            }
                            if (match) break;
                        }
                        if (match) break;
                    }
                }

                // 3. Detectar superposición parcial de palabras clave del cargo únicamente si no hubo match
                if (!match) {
                    const cvWords = cleanCV.split(/\s+/);
                    const jobWords = cleanJob.split(/\s+/);
                    const sharedWords = cvWords.filter(w => w.length > 3 && jobWords.includes(w));
                    if (sharedWords.length > 0) {
                        partialOverlap = true;
                    }
                }

                let score = 20;
                let advice = "";
                let alerts = [];

                if (match) {
                    score = 100;
                    if (cvLevel !== jobLevel) {
                        score = 70;
                        alerts.push(`Diferencia de jerarquía profesional: Tu CV indica <strong>${cvLevel.toUpperCase()}</strong>, pero la vacante requiere un nivel <strong>${jobLevel.toUpperCase()}</strong>.`);
                        advice = `Ajusta el cargo principal en tu CV a <strong>${jobLevel.toUpperCase()}</strong> para alinearlo con las expectativas jerárquicas de la oferta.`;
                    } else if (isEquivalent) {
                        advice = `Tu título es equivalente. Para mejorar el match inicial de bases de datos de reclutamiento, utiliza la denominación exacta: <strong>"${jobTitle}"</strong>.`;
                    }
                } else if (partialOverlap) {
                    // Desalineación parcial: mismo nivel, diferente especialización
                    score = cvLevel === jobLevel ? 65 : 40;
                    advice = `Tu cargo (<strong>"${cvTitle}"</strong>) comparte keywords con la vacante (<strong>"${jobTitle}"</strong>) pero difiere en especialización. Considera adaptar el título de tu CV para esta postulación específica.`;
                    // No se añade como alerta de prioridad alta, es informativa
                } else {
                    alerts.push(`Cargo no alineado: Te presentas como <strong>"${cvTitle}"</strong> pero la oferta busca <strong>"${jobTitle}"</strong>.`);
                    advice = `Se recomienda modificar el cargo del CV para que coincida exactamente con la posición solicitada (<strong>"${jobTitle}"</strong>).`;
                }

                return { score, cvTitle, jobTitle, cvLevel, jobLevel, match, isEquivalent, partialOverlap, alerts, advice };
            }
        };

        // [Módulo IV] ATS_SummaryAnalyzer - Calidad del extracto
        const ATS_SummaryAnalyzer = {
            extractSummary: function(text) {
                const cleanText = text.replace(/\r/g, '');
                
                // 1. Extracción precisa por regex de encabezado de sección ATS
                const summarySectionMatch = cleanText.match(/(?:perfil\s+profesional|resumen\s+profesional|professional\s+summary|summary|extracto)\s*[:\-]?\s*\n?([\s\S]+?)(?=\n\s*(?:experiencia|experience|educacion|education|formacion|habilidades|skills|proyectos|projects|certificaciones|certifications|idiomas|languages)\b|\n[A-ZÁÉÍÓÚÑ\s]{5,}\n|\n\n\n|$)/i);
                if (summarySectionMatch && summarySectionMatch[1].trim().length > 20) {
                    return summarySectionMatch[1].trim();
                }

                const paragraphs = cleanText.split('\n\n').map(p => p.trim()).filter(p => p.length > 25);
                const summaryKeywords = ['perfil', 'resumen', 'sobre mi', 'summary', 'about me', 'extracto', 'profesional', 'apasionado', 'estudiante', 'ingeniero', 'experiencia', 'trayectoria'];
                
                for (let p of paragraphs) {
                    const lower = p.toLowerCase();
                    const firstLine = lower.split('\n')[0];
                    if (summaryKeywords.some(k => firstLine.includes(k))) return p;
                }
                for (let p of paragraphs) {
                    const lines = p.split('\n');
                    const hasContact = lines.some(l => l.includes('@') || l.includes('teléfono') || l.includes('telefono'));
                    if (!hasContact && p.split(' ').length > 20) return p;
                }
                return text.substring(0, 450);
            },
            analyze: function(summaryText, cleanTextJob, hardSkillsTaxonomy) {
                const words = summaryText.trim().split(/\s+/).filter(w => w.length > 0);
                const wordCount = words.length;

                const minWords = 25;
                const maxWords = 150;
                let lengthScore = 100;
                let advice = "";

                if (wordCount >= minWords && wordCount <= maxWords) {
                    lengthScore = 100;
                } else if (wordCount < minWords) {
                    lengthScore = Math.max(60, Math.round((wordCount / minWords) * 100));
                    advice = `El resumen profesional es breve (${wordCount} palabras). Te sugerimos extenderlo agregando tus logros principales.`;
                } else {
                    lengthScore = 90;
                    advice = `El resumen es un poco extenso (${wordCount} palabras). Condénsalo para mantenerlo conciso.`;
                }

                const cvStandardized = ATS_Tokenizer.standardizeText(summaryText);
                const detectedTechs = [];
                if (Array.isArray(hardSkillsTaxonomy)) {
                    hardSkillsTaxonomy.forEach(tech => {
                        if (ATS_MatchingEngine.comparePhrase(cvStandardized, tech).match) detectedTechs.push(tech);
                    });
                }

                const ACTION_VERBS = [
                    'implementar', 'desarrollar', 'diseñar', 'optimizar', 'crear', 'integrar',
                    'automatizar', 'liderar', 'mejorar', 'reducir', 'construir', 'ejecutar',
                    'migrar', 'desplegar', 'configurar', 'refactorizar', 'documentar',
                    'coordinar', 'analizar', 'validar', 'modelar', 'gestionar', 'reemplazar',
                    'supervisar', 'compatibilizar', 'elaborar', 'mitigar', 'planificar', 'auditar', 'controlar'
                ];
                const detectedVerbs = [];
                const wordsInCV = cvStandardized.split(/\s+/);
                wordsInCV.forEach(w => {
                    const norm = normalizeVerb(w);
                    if (ACTION_VERBS.includes(norm) && !detectedVerbs.includes(norm)) {
                        detectedVerbs.push(norm);
                    }
                });

                // Detectar métricas XYZ en el resumen — verbos de impacto + cantidad + área
                const actionRegex = /implemente|implementé|desarrolle|desarrollé|disene|diseñe|optimice|optimicé|cree|créé|integre|integré|automatice|automaticé|lidere|lideré|mejore|mejoré|reduje|reducir|reduciendo|aumentando|construi|construí|ejecute|ejecuté|migre|migré|reemplace|reemplacé|coordine|coordiné|analice|analicé|supervise|supervisé|compatibilice|compatibilicé|elabore|elaboré|mitigue|mitigué|planifique|planifiqué|architected|engineered|developed|implemented|optimized|automated|reduced|reducing|scaled|scaling|improved|delivered|orchestrated|migrated|deployed|configured|refactored|led|leading|created|designed/i;
                const quantityRegex = /(?:\$|\b)\d+(?:[.,]\d+)?\s*(?:%|m3|m2|segundos?|minutos?|horas?|dias?|semanas?|usuarios?|clientes?|registros?|errores?|consultas?|solicitudes?|transacciones?|interferencias?|sobrecostos?|desperdicio|tb|gb|mb|m|k|requests\/sec|req\/s|reqs|vulnerabilities|services|records)?\b/i;
                const impactRegex = /tiempo|tiempos|cobertura|latencia|usuarios|clientes|ventas|costos|ahorro|procesos|eficiencia|rendimiento|fraude|minutos|segundos|horas|dias|semanas|solicitudes|peticiones|transacciones|registros|errores|despliegues|consultas|disponibilidad|interferencias|sobrecostos|desperdicio|vaciado|avance|presupuesto|desviacion|seguridad|calidad|merma|fallas|ensayos|probetas|metrados|valorizaciones|rendimientos|concreto|entrega|paradas?|consumo|energia|energetico|latency|throughput|budget|cost|costs|consumption|vulnerabilities|uptime|cycles|records|requests|traffic|downtime|performance|reliability|availability|loss/i;
                
                // Dividir por líneas o puntos ANTES de estandarizar globalmente
                const rawSentences = summaryText.replace(/\r/g, '').split(/[.\n|]/);
                const foundXYZ = [];
                rawSentences.forEach(sentence => {
                    if (sentence.trim().length > 0) {
                        const stdSentence = typeof ATS_Tokenizer !== 'undefined' ? ATS_Tokenizer.standardizeText(sentence) : sentence.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        if (actionRegex.test(stdSentence) && quantityRegex.test(stdSentence) && impactRegex.test(stdSentence)) {
                            foundXYZ.push(stdSentence.trim());
                        }
                    }
                });

                const yearsRegex = /(\d+)\s*(?:\+)?\s*(?:años|anos|years)\b/i;
                const yearsMatch = cvStandardized.match(yearsRegex);
                const isJuniorOrStudent = /estudiante|egresado|junior|practicante/i.test(cvStandardized);
                const yearsExp = yearsMatch ? parseInt(yearsMatch[1], 10) : (isJuniorOrStudent ? 1 : null);

                let scoreBreakdown = {
                    length: lengthScore,
                    tech: detectedTechs.length >= 2 ? 100 : Math.min(100, detectedTechs.length * 50),
                    verbs: detectedVerbs.length >= 2 ? 100 : Math.min(100, detectedVerbs.length * 50),
                    metrics: foundXYZ.length > 0 ? 100 : 40,
                    experience: (yearsExp || /anos|años|years/i.test(cvStandardized)) ? 100 : 70
                };

                const score = Math.round(
                    (scoreBreakdown.length * 0.20) +
                    (scoreBreakdown.tech * 0.25) +
                    (scoreBreakdown.verbs * 0.20) +
                    (scoreBreakdown.metrics * 0.20) +
                    (scoreBreakdown.experience * 0.15)
                );

                return { score, wordCount, detectedTechs, detectedVerbs, metrics: foundXYZ, yearsExp, advice, scoreBreakdown };
            }
        };

        const ATS_SkillsAnalyzer = {
            analyze: function(cvText, jobText, hardSkillsTaxonomy, softSkillsTaxonomy) {
                const cvStandardized = ATS_Tokenizer.standardizeText(cvText);
                const jobStandardized = ATS_Tokenizer.standardizeText(jobText);

                const requiredHard = [];
                const requiredSoft = [];

                hardSkillsTaxonomy.forEach(skill => {
                    // Ignorar skills que normalicen a 1 solo caracter (ej: c# -> c)
                    // para evitar falsos positivos con letras sueltas del CV
                    const normSkill = ATS_TextNormalizer.normalize(skill);
                    if (normSkill.length <= 1) return;
                    if (ATS_MatchingEngine.comparePhrase(jobStandardized, skill).match) requiredHard.push(skill);
                });
                softSkillsTaxonomy.forEach(skill => {
                    if (ATS_MatchingEngine.comparePhrase(jobStandardized, skill).match) requiredSoft.push(skill);
                });

                const matchedHard = [];
                const matchedSoft = [];

                requiredHard.forEach(skill => {
                    if (ATS_MatchingEngine.comparePhrase(cvStandardized, skill).match) matchedHard.push(skill);
                });
                requiredSoft.forEach(skill => {
                    if (ATS_MatchingEngine.comparePhrase(cvStandardized, skill).match) matchedSoft.push(skill);
                });

                function deduplicateSkills(list) {
                    const seen = new Set();
                    const result = [];
                    list.forEach(item => {
                        let norm = ATS_TextNormalizer.normalize(item);
                        if (typeof ALIAS_DICTIONARY !== 'undefined' && ALIAS_DICTIONARY[norm]) {
                            norm = ALIAS_DICTIONARY[norm];
                        }
                        const root = norm.replace(/(?:es|s)$/i, '');
                        if (!seen.has(root) && !seen.has(norm)) {
                            seen.add(root);
                            seen.add(norm);
                            result.push(item);
                        }
                    });
                    return result;
                }

                const uniqueRequiredHard = deduplicateSkills(requiredHard);
                const uniqueMatchedHard = deduplicateSkills(matchedHard);
                const missingHard = deduplicateSkills(uniqueRequiredHard.filter(s => {
                    const normS = ATS_TextNormalizer.normalize(s);
                    return !uniqueMatchedHard.some(m => ATS_TextNormalizer.normalize(m) === normS || ATS_TextNormalizer.normalize(m).replace(/(?:es|s)$/i,'') === normS.replace(/(?:es|s)$/i,''));
                }));

                const uniqueRequiredSoft = deduplicateSkills(requiredSoft);
                const uniqueMatchedSoft = deduplicateSkills(matchedSoft);
                const missingSoft = deduplicateSkills(uniqueRequiredSoft.filter(s => {
                    const normS = ATS_TextNormalizer.normalize(s);
                    return !uniqueMatchedSoft.some(m => ATS_TextNormalizer.normalize(m) === normS);
                }));

                // Soft skills adicionales: escanear el texto del perfil/resumen directamente
                // para detectar soft skills contextuales aunque no estén en la sección de skills
                const softSkillsFromProfile = [];
                const profileText = typeof cvText === 'string' ? cvText : '';
                const profileStd = ATS_Tokenizer.standardizeText(profileText);
                softSkillsTaxonomy.forEach(skill => {
                    if (!matchedSoft.includes(skill) && !requiredSoft.includes(skill)) {
                        if (ATS_MatchingEngine.comparePhrase(profileStd, skill).match) {
                            softSkillsFromProfile.push(skill);
                        }
                    }
                });
                // ── NUEVAS MEJORAS DE SKILLS (MEJORA 2: Sugerir sinónimos/alias válidos) ──
                const synonymSuggestions = [];
                const additionalHard = [];
                const additionalSoft = [];
                missingHard.forEach(missingSkill => {
                    const normMissing = ATS_TextNormalizer.normalize(missingSkill);
                    
                    // Buscar alias definidos en dictionary.js
                    let foundSynonym = null;
                    if (typeof ALIAS_DICTIONARY !== 'undefined') {
                        const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                        for (const [aliasKey, standardVal] of Object.entries(ALIAS_DICTIONARY)) {
                            if (standardVal === normMissing && aliasKey !== normMissing) {
                                // Comprobar si el alias está presente en el CV original
                                const aliasRegex = new RegExp(`(^|\\s)${escapeRegExp(aliasKey)}(\\s|$)`, 'i');
                                if (aliasRegex.test(cvText.toLowerCase())) {
                                    foundSynonym = aliasKey;
                                    break;
                                }
                            }
                        }
                    }
                    if (foundSynonym) {
                        synonymSuggestions.push({
                            original: foundSynonym,
                            suggested: missingSkill,
                            reason: `Detectamos la variante "${foundSynonym.toUpperCase()}". Reemplázalo por "${missingSkill.toUpperCase()}" para asegurar indexación por ATS estándar.`
                        });
                    }
                });

                hardSkillsTaxonomy.forEach(skill => {
                    if (ATS_MatchingEngine.comparePhrase(cvStandardized, skill).match && !requiredHard.includes(skill)) {
                        additionalHard.push(skill);
                    }
                });
                softSkillsTaxonomy.forEach(skill => {
                    if (ATS_MatchingEngine.comparePhrase(cvStandardized, skill).match && !requiredSoft.includes(skill)) {
                        additionalSoft.push(skill);
                    }
                });

                const totalCVHardCount = hardSkillsTaxonomy.filter(skill => ATS_MatchingEngine.comparePhrase(cvStandardized, skill).match).length;
                const totalCVSoftCount = softSkillsTaxonomy.filter(skill => ATS_MatchingEngine.comparePhrase(cvStandardized, skill).match).length;

                const hardRequiredCount = requiredHard.length || 1;
                const hardMatchedCount = matchedHard.length;
                const hardScore = Math.round((hardMatchedCount / hardRequiredCount) * 100);

                const totalRequired = (requiredHard.length + requiredSoft.length) || 1;
                const totalMatched = matchedHard.length + matchedSoft.length;
                
                // Si la oferta exige Hard Skills y el candidato coincide en todas o casi todas las Hard Skills,
                // la puntuación del módulo de habilidades debe reflejar primeramente la cobertura técnica (Hard).
                const score = requiredHard.length > 0 ? Math.max(hardScore, Math.round((totalMatched / totalRequired) * 100)) : Math.round((totalMatched / totalRequired) * 100);

                // ── NUEVAS MEJORAS DE SOFT SKILLS (MEJORA 4: Evitar cliché bento box) ──
                let softClichéAlert = null;
                if (totalCVSoftCount > 6) {
                    softClichéAlert = "⚠️ Tu CV tiene demasiadas habilidades blandas declarativas listadas (más de 6). El software ATS y los reclutadores prefieren que limites las habilidades blandas a un máximo de 3-4 e ilustres cómo las aplicas en tus viñetas de logros.";
                }

                return { 
                    score, 
                    totalCVHardCount, 
                    totalCVSoftCount, 
                    requiredHard,
                    requiredSoft,
                    matchedHard, 
                    matchedSoft: [...matchedSoft, ...softSkillsFromProfile.slice(0, 4)], 
                    missingHard, 
                    missingSoft, 
                    additionalHard, 
                    additionalSoft,
                    synonymSuggestions,
                    softClichéAlert
                };
            }
        };
        // [Módulo VI] ATS_ExperienceAnalyzer - Auditoría de descripciones laborales
        const ATS_ExperienceAnalyzer = {
            getExperienceBlocks: function(text) {
                const cleanText = text.replace(/\r/g, '');
                const expHeadersRegex = /(?:experiencia\s+laboral|experiencia|historial\s+profesional|trayectoria\s+laboral|experience|work\s+experience|proyectos|projects)/i;
                const index = cleanText.search(expHeadersRegex);
                
                let expText = cleanText;
                if (index !== -1) {
                    expText = cleanText.substring(index);
                    const nextHeadersRegex = /\n(?:educacion|educación|formacion|formación|idiomas|certificaciones)/i;
                    const nextIndex = expText.substring(50).search(nextHeadersRegex);
                    if (nextIndex !== -1) {
                        expText = expText.substring(0, nextIndex + 50);
                    }
                }
                const paragraphs = expText.split('\n\n').map(p => p.trim()).filter(p => p.length > 35);
                const dateBlockRegex = /(?:\b\d{4}\b|\bpresente\b)/i;
                const blocks = [];
                paragraphs.forEach(p => {
                    if (dateBlockRegex.test(p) || p.includes('•') || p.includes('-') || p.includes('*')) {
                        blocks.push(p);
                    }
                });

                if (blocks.length === 0) {
                    return paragraphs.slice(0, 3);
                }
                return blocks;
            },
            analyzeBlock: function(blockText) {
                const hasBullets = blockText.includes('•') || blockText.includes('-') || blockText.includes('*') || blockText.includes('✓') || blockText.split('\n').length > 2;

                const cvStandardized = ATS_Tokenizer.standardizeText(blockText);
                
                const ACTION_VERBS = [
                    'implementar', 'desarrollar', 'diseñar', 'optimizar', 'crear', 'integrar',
                    'automatizar', 'liderar', 'mejorar', 'reducir', 'construir', 'ejecutar',
                    'migrar', 'desplegar', 'configurar', 'refactorizar', 'documentar',
                    'coordinar', 'analizar', 'validar', 'modelar', 'gestionar', 'reemplazar',
                    'supervisar', 'compatibilizar', 'elaborar', 'mitigar', 'planificar', 'auditar'
                ];
                const detectedStrong = [];
                const wordsInBlock = cvStandardized.split(/\s+/);
                wordsInBlock.forEach(w => {
                    const norm = normalizeVerb(w);
                    if (ACTION_VERBS.includes(norm) && !detectedStrong.includes(norm)) {
                        detectedStrong.push(norm);
                    }
                });

                const weakVerbs = ['ayudé', 'ayude', 'participé', 'participe', 'colaboré', 'colabore', 'apoyé', 'apoye', 'contribuí', 'contribui', 'asistí', 'asisti'];
                const detectedWeak = [];
                weakVerbs.forEach(v => {
                    const regex = new RegExp(`\\b${v}\\b`, 'i');
                    if (regex.test(cvStandardized)) detectedWeak.push(v);
                });

                // Detectar métricas XYZ — verbos de impacto con \b + cantidad + área de resultado (ES / EN)
                const actionRegex = /\b(implemente|implementé|implementar|desarrolle|desarrollé|desarrollar|disene|diseñe|diseñar|optimice|optimicé|optimizar|cree|créé|crear|integre|integré|integrar|automatice|automaticé|automatizar|lidere|lideré|liderar|mejore|mejoré|mejorar|reduje|reducir|reduciendo|aumentando|construi|construí|construir|ejecute|ejecuté|ejecutar|migre|migré|migrar|despliegue|desplegué|desplegar|configure|configuré|configurar|reemplace|reemplacé|reemplazar|coordine|coordiné|coordinar|analice|analicé|analizar|valide|validé|validar|modele|modelé|gestionar|gestione|gestioné|supervise|supervisé|supervisar|compatibilice|compatibilicé|compatibilizar|elabore|elaboré|elaborar|mitigue|mitigué|mitigar|planifique|planifiqué|architected|engineered|developed|implemented|optimized|automated|reduced|reducing|scaled|scaling|improved|delivered|orchestrated|migrated|deployed|configured|refactored|led|leading|created|designed)\b/i;
                const quantityRegex = /(?:\$|\b)\d+(?:[.,]\d+)?\s*(?:%|m3|m2|segundos?|minutos?|horas?|dias?|semanas?|usuarios?|clientes?|registros?|errores?|consultas?|solicitudes?|transacciones?|interferencias?|sobrecostos?|desperdicio|tb|gb|mb|m|k|requests\/sec|req\/s|reqs|vulnerabilities|services|records)?\b/i;
                const impactRegex = /\b(tiempo|tiempos|cobertura|latencia|usuarios|clientes|ventas|costos|ahorro|procesos|eficiencia|rendimiento|fraude|minutos|segundos|horas|dias|semanas|solicitudes|peticiones|transacciones|registros|errores|bugs|despliegues|releases|consultas|carga|disponibilidad|uptime|interferencias|sobrecostos|desperdicio|vaciado|avance|presupuesto|desviacion|seguridad|calidad|merma|fallas|ensayos|probetas|metrados|valorizaciones|rendimientos|latency|throughput|budget|cost|costs|consumption|vulnerabilities|uptime|cycles|records|requests|traffic|downtime|performance|reliability|availability|loss)\b/i;
                
                // Dividir por líneas, puntos, viñetas, comas o saltos de línea ANTES de estandarizar globalmente
                const rawSentences = blockText.replace(/\r/g, '').split(/[.\n|•,;]+/);
                const foundXYZ = [];
                rawSentences.forEach(sentence => {
                    if (sentence.trim().length > 0) {
                        const stdSentence = typeof ATS_Tokenizer !== 'undefined' ? ATS_Tokenizer.standardizeText(sentence) : sentence.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        const isDateOnly = /^\s*(19|20)\d{2}(\s*[-/]\s*(19|20)?\d{2})?\s*$/.test(stdSentence) || /\b(19\d{2}|20\d{2})\b/.test(stdSentence);
                        const isDurationOnly = /\b\d+\s+(?:años?|meses?|semanas?)\b/i.test(stdSentence);

                        if (actionRegex.test(stdSentence) && quantityRegex.test(stdSentence) && impactRegex.test(stdSentence) && !isDateOnly && !isDurationOnly) {
                            foundXYZ.push(stdSentence.trim());
                        }
                    }
                });

                const dateRegex = /\b(19\d{2}|20\d{2})\b/g;
                const detectedDates = blockText.match(dateRegex) || [];
                const hasPresent = /presente|actualidad/i.test(blockText);
                const hasDates = detectedDates.length >= 1 || hasPresent;

                // Impact Statement Validation: Verbo (Acción) + Tecnología/Herramienta (Hard) + Métrica/Impacto (Resultado)
                const hasVerb = detectedStrong.length > 0;
                const hasMetrics = foundXYZ.length > 0;
                
                // Reconocer cualquier herramienta o tecnología técnica de cualquier sector
                const allToolKeywords = [
                    'sql', 'react', 'node', 'express', 'python', 'angular', 'docker', 'aws',
                    'kubernetes', 'net', 'oracle', 'bi', 'crm', 'chatbot', 'api', 'cloud', 'mysql',
                    'mongodb', 'postgres', 'redis', 'jwt', 'rest', 'graphql', 'firebase', 'spring',
                    'laravel', 'django', 'flask', 'vue', 'typescript', 'java', 'php', 'git',
                    'autocad', 'revit', 'bim', 's10', 'project', 'excel', 'civil', 'sap', 'figma', 'hseq',
                    'solidworks', 'powerbi', 'tableau', 'photoshop', 'illustrator'
                ];
                const hasTech = allToolKeywords.some(t => cvStandardized.includes(t)) || /(?:software|sistema|herramienta|metodologia|normativa|plano|modelo)\b/i.test(cvStandardized);
                
                const isImpactStatement = hasVerb && hasTech && hasMetrics;

                // PRIORIDAD 6: Detección explícita de palabras de resultado y logro
                const RESULT_WORDS = [
                    'reduje', 'mejore', 'mejoré', 'aumente', 'aumenté', 'optimice', 'optimicé',
                    'disminui', 'disminuí', 'incrementé', 'incrementarse', 'reduccion', 'reducción',
                    'logro', 'resultado', 'impacto', 'mejora', 'optimizacion', 'optimización'
                ];
                const hasExplicitResultWord = RESULT_WORDS.some(rw => new RegExp(`\\b${rw}\\b`, 'i').test(cvStandardized));

                // Evaluación Estructurada de Experiencia (30% Acciones, 30% Métricas, 15% Logros, 10% Fechas, 10% Tecnología, 5% Estructura)
                const scoreActions = detectedStrong.length >= 2 ? 30 : (detectedStrong.length === 1 ? 20 : 0);
                const scoreMetrics = foundXYZ.length >= 2 ? 30 : (foundXYZ.length === 1 ? 25 : 0);
                const scoreAchievements = (isImpactStatement || hasExplicitResultWord) ? 15 : (hasMetrics ? 15 : 5);
                const scoreDates = hasDates ? 10 : 10;
                const scoreTech = hasTech ? 10 : 5;
                const scoreStructure = hasBullets ? 5 : 5;

                let score = Math.min(100, scoreActions + scoreMetrics + scoreAchievements + scoreDates + scoreTech + scoreStructure);

                if (detectedWeak.length > 0 && detectedStrong.length === 0) {
                    score = Math.max(15, score - 15);
                }

                return { 
                    text: blockText, 
                    hasBullets, 
                    detectedStrong, 
                    detectedWeak, 
                    detectedMetrics: foundXYZ, 
                    detectedDates, 
                    hasDates, 
                    isImpactStatement, 
                    score 
                };
            },


            analyze: function(cvText) {
                if (!cvText || cvText.trim().length === 0) {
                    return { score: 0, blocksAnalyzed: [] };
                }
                const blocks = this.getExperienceBlocks(cvText);
                const results = blocks.map(block => this.analyzeBlock(block));
                const totalScore = results.length > 0
                    ? Math.round(results.reduce((acc, curr) => acc + curr.score, 0) / results.length)
                    : 0;

                return { score: totalScore, blocksAnalyzed: results };
            },
            analyzeExperienceDual: function(experienceText, projectsText, options = {}) {
                const expResult = this.analyze(experienceText || "");
                const projResult = this.analyze(projectsText || "");
                
                const progression = this.detectProgression(experienceText || "");
                
                const expEmpty = !experienceText || experienceText.trim().length === 0;
                const projEmpty = !projectsText || projectsText.trim().length === 0;
                
                let score = 0;
                if (expEmpty && projEmpty) {
                    score = 0;
                } else if (expEmpty && !projEmpty) {
                    score = projResult.score;
                } else if (!expEmpty && projEmpty) {
                    score = expResult.score;
                } else {
                    score = Math.round((expResult.score * 0.7) + (projResult.score * 0.3));
                }
                
                return {
                    score: score,
                    blocksAnalyzed: [...(expResult.blocksAnalyzed || []), ...(projResult.blocksAnalyzed || [])],
                    experienceDetails: expResult,
                    projectDetails: projResult,
                    careerProgression: progression
                };
            },
            detectProgression: function(text) {
                const levels = [];
                const patterns = [
                    { regex: /(junior|jr\.?|entry[- ]?level)/i, level: 1 },
                    { regex: /(mid[- ]?level|intermedio|ssr\.?)/i, level: 2 },
                    { regex: /(senior|sr\.?|advanced)/i, level: 3 },
                    { regex: /(lead|líder|principal|staff|architect)/i, level: 4 }
                ];
                
                const matches = [];
                patterns.forEach(p => {
                    let match;
                    p.regex.lastIndex = 0;
                    const globalRegex = new RegExp(p.regex.source, 'gi');
                    while ((match = globalRegex.exec(text)) !== null) {
                        matches.push({ index: match.index, level: p.level });
                    }
                });
                
                matches.sort((a, b) => a.index - b.index);
                const trajectory = matches.map(m => m.level);
                
                let hasProgression = false;
                let careerChangeDetected = false;
                if (trajectory.length >= 2) {
                    for (let i = 0; i < trajectory.length - 1; i++) {
                        if (trajectory[i+1] > trajectory[i]) {
                            hasProgression = true;
                        }
                        if (trajectory[i+1] < trajectory[i]) {
                            careerChangeDetected = true;
                        }
                    }
                }
                
                return {
                    hasProgression: hasProgression,
                    careerChangeDetected: careerChangeDetected,
                    trajectory: trajectory
                };
            }
        };

        // [Módulo VII] ATS_MetricsDetector - Rastreo de métricas clave de impacto
        const ATS_MetricsDetector = {
            analyze: function(text) {
                const actionRegex = /\b(implemente|implementé|desarrolle|desarrollé|disene|diseñe|optimice|optimicé|cree|créé|integre|integré|automatice|automaticé|lidere|lideré|mejore|mejoré|reduje|reducir|reduciendo|aumentando|construi|construí|ejecute|ejecuté|migre|migré|despliegue|desplegué|configure|configuré|reemplace|reemplacé|coordine|coordiné|analice|analicé|valide|validé|supervise|supervisé|compatibilice|compatibilicé|elabore|elaboré|mitigue|mitigué|planifique|planifiqué|architected|engineered|developed|implemented|optimized|automated|reduced|reducing|scaled|scaling|improved|delivered|orchestrated|migrated|deployed|configured|refactored|led|leading|created|designed)\b/i;
                const quantityRegex = /(?:\$|\b)\d+(?:[.,]\d+)?\s*(?:%|m3|m2|segundos?|minutos?|horas?|dias?|semanas?|usuarios?|clientes?|registros?|errores?|consultas?|solicitudes?|transacciones?|interferencias?|sobrecostos?|desperdicio|tb|gb|mb|m|k|requests\/sec|req\/s|reqs|vulnerabilities|services|records)?\b/i;
                const impactRegex = /\b(tiempo|tiempos|cobertura|latencia|usuarios|clientes|ventas|costos|ahorro|procesos|eficiencia|rendimiento|minutos|segundos|horas|dias|semanas|solicitudes|transacciones|registros|errores|consultas|carga|disponibilidad|uptime|interferencias|sobrecostos|desperdicio|vaciado|avance|presupuesto|desviacion|seguridad|calidad|merma|fallas|ensayos|probetas|metrados|valorizaciones|rendimientos|latency|throughput|budget|cost|costs|consumption|vulnerabilities|uptime|cycles|records|requests|traffic|downtime|performance|reliability|availability|loss)\b/i;

                // Dividir el texto sin normalizar por saltos de línea, puntos, viñetas y punto y coma
                const rawSentences = (text || "").replace(/\r/g, '').split(/[.\n|•\-\*;]+/);
                const foundXYZ = [];

                rawSentences.forEach(sentence => {
                    const rawTrimmed = sentence.trim();
                    if (!rawTrimmed) return;

                    const stdSentence = ATS_TextNormalizer.normalize(rawTrimmed);
                    const hasAction = actionRegex.test(stdSentence);
                    const hasQuantity = quantityRegex.test(stdSentence);
                    const hasImpact = impactRegex.test(stdSentence);

                    // Evitar que años aislados sean contados como métricas
                    const isDateOnly = /^\s*(19|20)\d{2}(\s*[-/]\s*\d{1,2})?\s*$/.test(stdSentence);

                    if (hasAction && hasQuantity && hasImpact && !isDateOnly) {
                        foundXYZ.push(rawTrimmed);
                    }
                });

                const uniqueXYZ = Array.from(new Set(foundXYZ));
                const score = uniqueXYZ.length >= 2 ? 100 : (uniqueXYZ.length === 1 ? 50 : 0);
                const missingCount = Math.max(0, 2 - uniqueXYZ.length);

                return { 
                    score, 
                    count: uniqueXYZ.length,
                    required: 2,
                    found: uniqueXYZ.slice(0, 10), 
                    missing: missingCount > 0 ? [`${missingCount} métrica(s) XYZ faltante(s) (mínimo recomendado: 2)`] : [] 
                };
            }
        };

        const ATS_StructureAnalyzer = {
            analyze: function(cvInput, rawText) {
                let cv = cvInput;
                let fullTextForLength = "";
                if (typeof cvInput === 'string') {
                    fullTextForLength = cvInput;
                    cv = {
                        profile: /resumen|perfil|extracto|summary|about me|sobre mi/i.test(cvInput) ? "detectado" : "",
                        experience: /experiencia|historial|trayectoria|experience|empleos|laboral/i.test(cvInput) ? "detectado" : "",
                        education: /educacion|educación|formacion|formación|estudios|academic|university|universidad/i.test(cvInput) ? "detectado" : "",
                        skills: /habilidades|skills|aptitudes|competencias|tecnologias|conocimientos/i.test(cvInput) ? "detectado" : "",
                        projects: /proyectos|projects|desarrollos/i.test(cvInput) ? "detectado" : "",
                        certifications: /certificaciones|cursos|certificates|certifications|certificados/i.test(cvInput) ? "detectado" : "",
                        languages: /idiomas|languages|lenguajes/i.test(cvInput) ? "detectado" : "",
                        contact: /contacto|contact|telefono|email|correo/i.test(cvInput) ? "detectado" : "",
                        role: /desarrollador|ingeniero|strategist|manager|engineer|developer/i.test(cvInput) ? "detectado" : ""
                    };
                } else {
                    // Si se proporciona rawText (modo PDF), usarlo directamente para wordCount preciso.
                    // En modo PDF, cvData tiene todos los campos con el texto completo del PDF,
                    // lo que inflaría el conteo si se unieran todos los campos.
                    if (rawText) {
                        fullTextForLength = rawText;
                    } else {
                        fullTextForLength = [cv.profile, cv.experience, cv.skills, cv.projects, cv.education, cv.certifications, cv.languages].join(" ");
                    }
                }
                
                const searchSource = rawText || (typeof cvInput === 'string' ? cvInput : Object.values(cv).join(" "));
                
                const results = [
                    { name: 'Resumen', key: 'profile', detected: !!(cv.profile && cv.profile.trim().length > 0) || /resumen|perfil|extracto|summary|about me|sobre mi/i.test(searchSource) },
                    { name: 'Experiencia', key: 'experience', detected: !!(cv.experience && cv.experience.trim().length > 0) || /experiencia|historial|trayectoria|experience|empleos|laboral/i.test(searchSource) },
                    { name: 'Educación', key: 'education', detected: !!(cv.education && cv.education.trim().length > 0) || /educacion|educación|formacion|formación|estudios|academic|university|universidad/i.test(searchSource) },
                    { name: 'Habilidades', key: 'skills', detected: !!(cv.skills && cv.skills.trim().length > 0) || /habilidades|skills|aptitudes|competencias|tecnologias|conocimientos/i.test(searchSource) },
                    { name: 'Proyectos', key: 'projects', detected: !!(cv.projects && cv.projects.trim().length > 0) || /proyectos|projects|desarrollos/i.test(searchSource) },
                    { name: 'Certificaciones', key: 'certifications', detected: !!(cv.certifications && cv.certifications.trim().length > 0) || /certificaciones|cursos|certificates|certifications|certificados/i.test(searchSource) },
                    { name: 'Idiomas', key: 'languages', detected: !!(cv.languages && cv.languages.trim().length > 0) || /idiomas|languages|lenguajes/i.test(searchSource) },
                    { name: 'Contacto', key: 'contact', detected: !!(cv.contact && cv.contact.trim().length > 0) || /contacto|contact|telefono|email|correo|@/i.test(searchSource) }
                ];
                
                const weights = RULES.structureWeights || {
                    skills: 20, experience: 20, profile: 15, role: 15, education: 15, contact: 10, languages: 5
                };
                
                let score = 0;
                results.forEach(r => {
                    if (r.detected) {
                        if (r.key === 'skills') score += 20;
                        else if (r.key === 'experience') score += 20;
                        else if (r.key === 'profile') score += 15;
                        else if (r.key === 'education') score += 15;
                        else if (r.key === 'contact') score += 15;
                        else if (r.key === 'languages') score += 5;
                        else if (r.key === 'certifications') score += 5;
                        else if (r.key === 'projects' && !results.find(x => x.key === 'experience' && x.detected)) score += 20; // Fallback para juniors sin exp
                    }
                });

                // Si tiene cargo profesional reconocido
                if (cv.role || /desarrollador|ingeniero|analista|especialista|coordinador|director|manager|doctor|abogado/i.test(searchSource)) {
                    score += 5;
                }

                // ── NUEVAS MEJORAS DE LEGIBILIDAD (MEJORA 1) ──
                const wordCount = fullTextForLength.split(/\s+/).filter(w => w.length > 0).length;
                let lengthAlert = null;
                if (wordCount < 150) {
                    lengthAlert = "⚠️ Tu CV es muy corto (menos de 150 palabras). Añade más contexto técnico y descripción de logros.";
                } else if (wordCount > 1200) {
                    lengthAlert = "⚠️ Tu CV es demasiado extenso (más de 1200 palabras). Intenta condensarlo eliminando adjetivos repetitivos y enfocándolo en logros concisos.";
                }

                // Validación avanzada de Contacto
                let contactAlert = null;
                const contactStr = String(cv.contact || "");
                const contactSearchArea = (contactStr + " " + searchSource).toLowerCase();
                const hasEmail = /@[a-z0-9.-]+\.[a-z]{2,}/i.test(contactSearchArea) || /email|correo/i.test(contactSearchArea);
                const hasPhone = /\+?\d{1,4}[\s-]?\d{3,4}[\s-]?\d{3,4}/.test(contactSearchArea) || /tel|celular|telefono|\+51/i.test(contactSearchArea);
                const hasLinkedIn = /linkedin/i.test(contactSearchArea);
                const hasGithub = /github/i.test(contactSearchArea);

                if (!hasEmail || !hasPhone) {
                    contactAlert = "⚠️ Falta información de contacto básica. Asegúrate de incluir explícitamente un Correo electrónico y un Teléfono válido.";
                } else if (!hasLinkedIn) {
                    contactAlert = "ℹ️ No se encontró un perfil de LinkedIn. Se recomienda añadirlo para facilitar la validación del perfil profesional por parte de los reclutadores.";
                }

                return { 
                    score: Math.min(100, Math.round(score)), 
                    sections: results,
                    wordCount: wordCount,
                    lengthAlert: lengthAlert,
                    contactAlert: contactAlert
                };
            }
        };

        // [Módulo XIII] ATS_LanguageAnalyzer - Verificación de requisitos de idiomas
        const ATS_LanguageAnalyzer = {
            extractLanguages: function(cv) {
                const cvData = typeof cv === 'string' ? { profile: cv, skills: cv, languages: cv } : cv;
                const text = [cvData.languages, cvData.profile, cvData.skills].join(" ").toLowerCase();
                const found = [];
                
                const patterns = [
                    /(ingl[eé]s|english|español|spanish|franc[eé]s|french|alem[aá]n|german|portugu[eé]s|portuguese)(?:[\s:]*([a-z0-9\s\u00C0-\u00FF]*))?/gi,
                    /(toefl|ielts|cambridge|dele)[\s:]*(\d+|[a-z0-9]+)/gi,
                    /(bilingual|multilingual|polyglot)/gi
                ];
                
                const langMap = {
                    'ingles': 'english', 'english': 'english',
                    'espanol': 'spanish', 'spanish': 'spanish',
                    'frances': 'french', 'french': 'french',
                    'aleman': 'german', 'german': 'german',
                    'portugues': 'portuguese', 'portuguese': 'portuguese'
                };
                
                let match;
                patterns.forEach((pattern, patternIdx) => {
                    pattern.lastIndex = 0;
                    while ((match = pattern.exec(text)) !== null) {
                        if (patternIdx === 0) {
                            const rawLang = ATS_TextNormalizer.normalize(match[1]);
                            const lang = langMap[rawLang];
                            const fullLevelStr = (match[2] || "").trim().toLowerCase();
                            let levelScore = 0;
                            let detectedLevel = "no especificado";
                            
                            // Buscar niveles conocidos en la descripción del idioma (ej. "bilingual / c2 native")
                            for (const [lvlKey, score] of Object.entries(LANGUAGE_LEVELS)) {
                                if (lvlKey && lvlKey.length >= 2 && fullLevelStr.includes(lvlKey)) {
                                    if (score > levelScore) {
                                        levelScore = score;
                                        detectedLevel = lvlKey;
                                    }
                                }
                            }
                            if (levelScore === 0) {
                                const normLevel = ATS_TextNormalizer.normalize(fullLevelStr.split(/\s+/)[0] || "");
                                levelScore = LANGUAGE_LEVELS[normLevel] || 0;
                                detectedLevel = normLevel || "no especificado";
                            }
                            if (lang) {
                                const existing = found.find(f => f.language === lang);
                                if (!existing) {
                                    found.push({ language: lang, level: levelScore, raw: fullLevelStr || detectedLevel });
                                } else if (levelScore > existing.level) {
                                    existing.level = levelScore;
                                    existing.raw = fullLevelStr || detectedLevel;
                                }
                            }
                        } else if (patternIdx === 1) {
                            const cert = match[1].toLowerCase();
                            const scoreVal = match[2].toLowerCase();
                            const key = `${cert} ${scoreVal}`;
                            const levelScore = LANGUAGE_LEVELS[key] || LANGUAGE_LEVELS[scoreVal] || 3.5;
                            const lang = (cert === 'dele') ? 'spanish' : 'english';
                            if (!found.some(f => f.language === lang)) {
                                found.push({ language: lang, level: levelScore, raw: key });
                            }
                        } else if (patternIdx === 2) {
                            const term = match[1].toLowerCase();
                            const levelScore = LANGUAGE_LEVELS[term] || 4;
                            if (!found.some(f => f.language === 'english')) {
                                found.push({ language: 'english', level: levelScore, raw: term });
                            }
                        }
                    }
                });
                
                return found;
            },
            
            analyze: function(cv, jobText) {
                const cvLanguages = this.extractLanguages(cv);
                const knockouts = [];
                
                const required = [];
                const cleanJob = jobText.toLowerCase();
                
                const englishKeywords = /ingles|english/i;
                if (englishKeywords.test(cleanJob)) {
                    if (/avanzado|advanced|c1|b2|fluido|fluent|ingles b2|ingles c1/i.test(cleanJob)) {
                        required.push({ language: 'english', level: 'advanced' });
                    } else if (/intermedio|intermediate|b1/i.test(cleanJob)) {
                        required.push({ language: 'english', level: 'intermediate' });
                    }
                }
                
                required.forEach(req => {
                    const cvLang = cvLanguages.find(l => l.language === req.language);
                    const cvLevel = cvLang ? cvLang.level : 0;
                    const reqLevel = LANGUAGE_LEVELS[req.level.toLowerCase()] || 0;
                    
                    if (cvLevel < reqLevel) {
                        knockouts.push({
                            type: "KNOCKOUT",
                            severity: "HIGH",
                            section: "languages",
                            message: `La oferta requiere ${req.language.toUpperCase()} ${req.level.toUpperCase()}. Tu CV indica: ${cvLang ? cvLang.raw.toUpperCase() : 'NO ESPECIFICADO'}.`,
                            required: reqLevel,
                            actual: cvLevel
                        });
                    }
                });
                
                return { cvLanguages, required, knockouts };
            }
        };

        // [Módulo IX] ATS_RepetitionAnalyzer - Análisis de densidad de palabras por oración/sección
        const ATS_RepetitionAnalyzer = {
            analyze: function(text, stopwords) {
                const sentences = (text || "").split(/[.\n;]/);
                const overused = [];
                const freq = {};

                // Regla por sección/oración: Penaliza repeticiones excesivas EN LA MISMA ORACIÓN (p.ej. "Node.js Node.js Node.js")
                sentences.forEach(sentence => {
                    const words = sentence.toLowerCase()
                        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, ' ')
                        .replace(/\s+/g, ' ')
                        .split(' ')
                        .filter(w => w.length > 3 && !stopwords.has(w) && w !== 'demo');

                    const sentenceFreq = {};
                    words.forEach(w => {
                        freq[w] = (freq[w] || 0) + 1;
                        sentenceFreq[w] = (sentenceFreq[w] || 0) + 1;
                        if (sentenceFreq[w] >= 3 && !overused.some(o => o.word === w)) {
                            overused.push({ word: w, count: sentenceFreq[w], reason: "Repetición consecutiva o excesiva dentro de una misma oración/sección." });
                        }
                    });
                });

                const sorted = Object.keys(freq).map(w => ({ word: w, count: freq[w] }))
                    .sort((a, b) => b.count - a.count);

                return { wordFrequencies: sorted.slice(0, 10), overused };
            }
        };

        const JOB_STOP_WORDS = new Set([
            "busca", "empresa", "candidato", "trabajara", "participar", "descripcion", 
            "requisitos", "responsabilidades", "experiencia", "conocimiento", "perfil", 
            "oferta", "puesto", "funciones", "sobre", "nosotros", "equipo", "trabajo", 
            "para", "como", "con", "del", "las", "los", "sus", "una", "uno", "este"
        ]);

        const ATS_JobKeywordExtractor = {
            extractKeywords: function(jobText, hardSkillsTaxonomy, softSkillsTaxonomy, stopwords) {
                const cleanJob = ATS_TextNormalizer.normalize(jobText);
                const rawWords = cleanJob.split(' ').filter(w => {
                    return w.length > 2 && !stopwords.has(w) && !JOB_STOP_WORDS.has(w) && !/^\d+$/.test(w);
                });

                const matchedSet = new Set();
                const canonicalSet = new Set();

                rawWords.forEach(word => {
                    const canonical = (typeof ALIAS_DICTIONARY !== 'undefined' && ALIAS_DICTIONARY[word]) ? ALIAS_DICTIONARY[word] : word;
                    if (canonicalSet.has(canonical)) return;

                    const isHard = hardSkillsTaxonomy.some(skill => {
                        const norm = ATS_TextNormalizer.normalize(skill);
                        return norm === word || norm === canonical;
                    });
                    const isSoft = softSkillsTaxonomy.some(skill => {
                        const norm = ATS_TextNormalizer.normalize(skill);
                        return norm === word || norm === canonical;
                    });
                    const isRole = typeof TITLE_EQUIVALENCE !== 'undefined' && Object.keys(TITLE_EQUIVALENCE).some(role => role.includes(word));

                    if (isHard || isSoft || isRole) {
                        canonicalSet.add(canonical);
                        matchedSet.add(word);
                    }
                });

                if (matchedSet.size === 0) {
                    const fallback = [];
                    const fallbackCanonical = new Set();
                    rawWords.forEach(w => {
                        const can = (typeof ALIAS_DICTIONARY !== 'undefined' && ALIAS_DICTIONARY[w]) ? ALIAS_DICTIONARY[w] : w;
                        if (!fallbackCanonical.has(can) && w.length > 3) {
                            fallbackCanonical.add(can);
                            fallback.push(w);
                        }
                    });
                    return fallback.slice(0, 10);
                }

                return Array.from(matchedSet);
            }
        };

        // [Módulo X] ATS_KeywordGapAnalyzer - Cobertura de palabras clave
        const ATS_KeywordGapAnalyzer = {
            analyze: function(cvText, jobText, hardSkillsTaxonomy, softSkillsTaxonomy, stopwords) {
                const cleanCV = ATS_TextNormalizer.normalize(cvText);
                const technicalKeywords = ATS_JobKeywordExtractor.extractKeywords(jobText, hardSkillsTaxonomy, softSkillsTaxonomy, stopwords);
                
                const missing = [];
                technicalKeywords.forEach(word => {
                    const result = ATS_MatchingEngine.comparePhrase(cleanCV, word);
                    if (!result.match) missing.push(word);
                });
                return { missingKeywords: missing.slice(0, 15) };
            }
        };

        // [Módulo X.B] ATS_ComplianceBiasAuditor - Auditoría de Sesgos y Cumplimiento Internacional (GDPR / EEOC)
        const ATS_ComplianceBiasAuditor = {
            analyze: function(rawCV) {
                const warnings = [];
                if (!rawCV) return { compliant: true, warnings: [] };

                // 1. Detección de Edad / Fecha de nacimiento
                if (/(?:edad|age)\s*[:\-]?\s*\d{1,2}\s*(?:a[nñ]os|years)?/i.test(rawCV) || /(?:nacido\s*el|fecha\s*de\s*nacimiento|date\s*of\s*birth|birthdate)\s*[:\-]?\s*[\d\/\.\-]+/i.test(rawCV)) {
                    warnings.push({
                        type: 'age',
                        field: 'Edad / Fecha de Nacimiento',
                        risk: 'Alto (Violación de estándares EEOC/GDPR)',
                        advice: 'Elimina tu edad o fecha de nacimiento. En ATS globales (EE.UU., Europa) puede provocar el rechazo automático para prevenir sesgos de discriminación etaria.'
                    });
                }

                // 2. Detección de Estado Civil
                if (/(?:estado\s*civil|marital\s*status)\s*[:\-]?\s*(?:soltero|casado|divorciado|viudo|single|married)/i.test(rawCV) || /\b(soltero|soltera|casado|casada|divorciado|divorciada)\b/i.test(rawCV)) {
                    warnings.push({
                        type: 'marital_status',
                        field: 'Estado Civil',
                        risk: 'Medio',
                        advice: 'El estado civil no es relevante para el desempeño técnico y debe omitirse en currículums internacionales.'
                    });
                }

                // 3. Documentos de Identidad Nacional (DNI, RUT, CURP, SSN, Cédula)
                if (/\b(dni|rut|curp|ssn|cedula|c[eé]dula|pasaporte|passport)\s*[:#\-]?\s*[a-zA-Z0-9\.\-]{5,}/i.test(rawCV)) {
                    warnings.push({
                        type: 'national_id',
                        field: 'Documento Nacional de Identidad',
                        risk: 'Medio-Alto (Privacidad de datos)',
                        advice: 'Evita incluir números de documentos de identidad por seguridad y protección de datos personales (GDPR).'
                    });
                }

                // 4. Mención explícita de Género
                if (/(?:g[eé]nero|sexo|gender)\s*[:\-]?\s*(?:masculino|femenino|hombre|mujer|male|female)/i.test(rawCV)) {
                    warnings.push({
                        type: 'gender',
                        field: 'Indicador de Género',
                        risk: 'Alto (EEOC Compliance)',
                        advice: 'No incluyas etiquetas de género en tu perfil para asegurar una evaluación anónima y libre de sesgos.'
                    });
                }

                return {
                    compliant: warnings.length === 0,
                    warnings: warnings
                };
            }
        };

        // [Módulo XI] ATS_MatchingEngine - Centraliza la lógica de comparación y coincidencia
        const ATS_MatchingEngine = {
            comparePhrase: function(text, term) {
                if (!text || !term) return { match: false, type: 'none' };
                const normText = typeof standardizeText === 'function' ? standardizeText(text) : ATS_TextNormalizer.normalize(text);
                const normTerm = typeof standardizeText === 'function' ? standardizeText(term) : ATS_TextNormalizer.normalize(term);
                
                const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                
                // 1. Coincidencia exacta
                const exactRegex = new RegExp(`(^|\\s)${escapeRegExp(normTerm)}(\\s|$)`, 'i');
                if (exactRegex.test(normText)) {
                    return { match: true, type: 'exact' };
                }
                
                // 2. Coincidencia por alias del diccionario
                const termAlias = typeof ALIAS_DICTIONARY !== 'undefined' ? ALIAS_DICTIONARY[normTerm] : null;
                if (termAlias) {
                    const aliasRegex = new RegExp(`(^|\\s)${escapeRegExp(termAlias)}(\\s|$)`, 'i');
                    if (aliasRegex.test(normText)) {
                        return { match: true, type: 'alias' };
                    }
                }

                // 3. Coincidencia por Ontología Global ESCO / O*NET
                const escoTax = typeof ESCO_ONET_TAXONOMY !== 'undefined' 
                    ? ESCO_ONET_TAXONOMY 
                    : (typeof require === 'function' ? (() => { try { return require('./dictionary.js').ESCO_ONET_TAXONOMY; } catch(e){ return null; } })() : null);
                
                if (escoTax) {
                    for (let key in escoTax) {
                        const item = escoTax[key];
                        const normPref = typeof standardizeText === 'function' ? standardizeText(item.preferredLabel) : ATS_TextNormalizer.normalize(item.preferredLabel);
                        const isTargetTerm = normTerm === normPref || item.aliases.some(a => (typeof standardizeText === 'function' ? standardizeText(a) : ATS_TextNormalizer.normalize(a)) === normTerm);
                        if (isTargetTerm) {
                            const matched = exactRegex.test(normText) || item.aliases.some(a => {
                                const cleanAlias = typeof standardizeText === 'function' ? standardizeText(a) : ATS_TextNormalizer.normalize(a);
                                return new RegExp(`(^|\\s)${escapeRegExp(cleanAlias)}(\\s|$)`, 'i').test(normText);
                            });
                            if (matched) {
                                return { match: true, type: 'esco_ontology', code: item.code };
                            }
                        }
                    }
                }
                
                // 4. Coincidencia parcial (por palabras individuales)
                const termWords = normTerm.split(' ');
                if (termWords.length >= 3) {
                    const matchedWordsCount = termWords.filter(w => {
                        return new RegExp(`(^|\\s)${escapeRegExp(w)}(\\s|$)`, 'i').test(normText);
                    }).length;
                    
                    if (matchedWordsCount / termWords.length >= 0.75) {
                        return { match: true, type: 'partial' };
                    }
                }
                
                return { match: false, type: 'none' };
            },
            
            calculateCoverage: function(requiredList, foundList) {
                if (requiredList.length === 0) return 100;
                return Math.round((foundList.length / requiredList.length) * 100);
            }
        };

        // [Módulo XII] ATS_Engine - Orquestador central de reglas y puntaje
        const ATS_Engine = {
            run: function(cvText, jobText, hardSkillsTaxonomy, softSkillsTaxonomy, stopwords) {
                if (!cvText || typeof cvText !== 'string' || cvText.trim().length === 0) {
                    throw new Error("El texto del CV está vacío o no es válido para su análisis.");
                }
                if (!jobText || typeof jobText !== 'string' || jobText.trim().length === 0) {
                    throw new Error("La descripción de la vacante está vacía o no es válida.");
                }

                // Flujo completo: Normalización -> Tokenización -> Análisis -> Scoring -> Recomendaciones
                const cvData = typeof extractStructuredCVData === 'function' ? extractStructuredCVData() : {};

                // 1. Normalización y Extracción preliminar
                const cvTitle = cvData.role || ATS_TitleAnalyzer.extractTitle(cvText);
                // Extraer el título limpio de la vacante
                let rawJobTitle = "Puesto vacante";
                const jobLines = jobText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
                for (let line of jobLines) {
                    if (/^(puesto|cargo|vacante|posici[oó]n|t[ií]tulo|role)\s*:/i.test(line)) {
                        rawJobTitle = line.replace(/^(puesto|cargo|vacante|posici[oó]n|t[ií]tulo|role)\s*:\s*/i, '').trim();
                        break;
                    }
                }
                if (rawJobTitle === "Puesto vacante" && jobLines.length > 0) {
                    rawJobTitle = jobLines[0].replace(/^(puesto|cargo|vacante|posici[oó]n|t[ií]tulo|role)\s*:\s*/i, '').trim();
                }
                const jobTitle = rawJobTitle;

                // 2. Ejecutar análisis modular
                const titleResult = ATS_TitleAnalyzer.compare(cvTitle, jobTitle);
                const summaryText = cvData.profile || ATS_SummaryAnalyzer.extractSummary(cvText);
                const summaryResult = ATS_SummaryAnalyzer.analyze(summaryText, jobText, hardSkillsTaxonomy);
                
                const skillsText = [cvData.skills || '', cvData.profile || '', cvData.experience || '', cvText].join(' ');
                const skillsResult = ATS_SkillsAnalyzer.analyze(skillsText, jobText, hardSkillsTaxonomy, softSkillsTaxonomy);
                
                let experienceResult;
                const hasDual = (cvData.experience && cvData.experience.trim().length > 0) || (cvData.projects && cvData.projects.trim().length > 0);
                if (hasDual) {
                    experienceResult = ATS_ExperienceAnalyzer.analyzeExperienceDual(cvData.experience, cvData.projects);
                } else {
                    experienceResult = ATS_ExperienceAnalyzer.analyze(cvText);
                }
                const projectText = ((cvData.experience && cvData.experience.trim().length > 0) || (cvData.projects && cvData.projects.trim().length > 0)) 
                    ? ((cvData.experience || "") + "\n" + (cvData.projects || "")) 
                    : cvText;
                const metricsResult = ATS_MetricsDetector.analyze(projectText);
                // Pasar cvText directamente al analizador de estructura para un wordCount preciso.
                // Cuando el CV viene de PDF, cvData tiene campos con texto completo que inflarían el conteo.
                const structureResult = ATS_StructureAnalyzer.analyze(cvData, cvText);
                const repetitionResult = ATS_RepetitionAnalyzer.analyze(cvText, stopwords);
                const keywordGapResult = ATS_KeywordGapAnalyzer.analyze(cvText, jobText, hardSkillsTaxonomy, softSkillsTaxonomy, stopwords);

                // 3. Score Engine (Cálculo de puntajes por categoría utilizando reglas cargadas en rules.js)
                const hasCerts = !!(cvData.certifications && cvData.certifications.trim().length > 0) || /certificacion|certificación|certificate|credential|diploma/i.test(cvText);
                const scores = {
                    skills: typeof skillsResult.score === 'number' && !isNaN(skillsResult.score) ? skillsResult.score : 40,
                    experience: typeof experienceResult.score === 'number' && !isNaN(experienceResult.score) ? experienceResult.score : 40,
                    summary: typeof summaryResult.score === 'number' && !isNaN(summaryResult.score) ? summaryResult.score : 40,
                    structure: typeof structureResult.score === 'number' && !isNaN(structureResult.score) ? structureResult.score : 40,
                    title: (titleResult && typeof titleResult.confidenceScore === 'number') ? titleResult.confidenceScore : 70,
                    certifications: hasCerts ? 100 : 80
                };

                // Ponderación basada en reglas adaptativas por dominio
                let detectedDomainName = 'tecnologia';
                try {
                    if (typeof detectDomainFromText === 'function') {
                        detectedDomainName = detectDomainFromText(ATS_TextNormalizer.normalize(jobText)).domain;
                    } else if (typeof DOMAIN_TAXONOMIES !== 'undefined' && typeof detectDomainFromText !== 'undefined') {
                        detectedDomainName = detectDomainFromText(ATS_TextNormalizer.normalize(jobText)).domain;
                    }
                } catch (e) {
                    detectedDomainName = 'tecnologia';
                }

                const w = (typeof RULES !== 'undefined' && RULES.domainWeights && RULES.domainWeights[detectedDomainName]) 
                    ? RULES.domainWeights[detectedDomainName] 
                    : (typeof RULES !== 'undefined' && RULES.weights ? RULES.weights : { skills: 40, experience: 30, summary: 15, structure: 15, certifications: 0 });

                const totalWeight = (w.skills || 0) + (w.experience || 0) + (w.summary || 0) + (w.structure || 0) + (w.certifications || 0);

                let rawGeneralScore = Math.round(
                    ((scores.skills * (w.skills || 0)) +
                     (scores.experience * (w.experience || 0)) +
                     (scores.summary * (w.summary || 0)) +
                     (scores.structure * (w.structure || 0)) +
                     (scores.certifications * (w.certifications || 0))) / (totalWeight || 100)
                );

                // Normalización de límites
                let generalScore = Math.min(100, Math.max(0, rawGeneralScore));

                // 4. Generación de Diagnósticos y Recomendaciones (Priorizadas en 3 niveles: Alta, Media, Baja)
                const categorizedRecommendations = {
                    high: [],
                    medium: [],
                    low: []
                };

                // PRIORIDAD ALTA: Desalineación de jerarquía, falta de experiencia o tecnologías indispensables
                const blocksAnalyzed = experienceResult.blocksAnalyzed || 
                    (experienceResult.experienceDetails && experienceResult.experienceDetails.blocksAnalyzed) || 
                    (experienceResult.projectDetails && experienceResult.projectDetails.blocksAnalyzed) || [];
                
                if (blocksAnalyzed.length === 0) {
                    categorizedRecommendations.high.push({
                        title: "Falta de experiencia laboral:",
                        desc: "No se identificaron bloques de experiencia laboral o proyectos estructurados en tu CV."
                    });
                }
                titleResult.alerts.forEach(a => {
                    categorizedRecommendations.high.push({
                        title: "Desalineación de cargo:",
                        desc: a
                    });
                });
                if (skillsResult.missingHard.length > 2) {
                    categorizedRecommendations.high.push({
                        title: "Habilidades duras críticas ausentes:",
                        desc: `La vacante exige herramientas indispensables que no posees: <strong>${skillsResult.missingHard.slice(0, 3).join(', ').toUpperCase()}</strong>.`
                    });
                }

                // PRIORIDAD MEDIA: Estructura, Resumen corto, Falta de verbos activos o métricas
                if (summaryResult.wordCount < RULES.thresholds.summary.minWords) {
                    categorizedRecommendations.medium.push({
                        title: "Resumen profesional muy breve:",
                        desc: summaryResult.advice || "Expande tu extracto profesional explicando tu propuesta de valor."
                    });
                }
                if (summaryResult.detectedVerbs.length === 0) {
                    categorizedRecommendations.medium.push({
                        title: "Falta de verbos de acción:",
                        desc: "Incorpora verbos de liderazgo y proactividad en primera persona en tu resumen profesional."
                    });
                }
                const poorlyBulletBlocks = blocksAnalyzed.filter(b => !b.hasBullets);
                if (poorlyBulletBlocks.length > 0) {
                    categorizedRecommendations.medium.push({
                        title: "Formato de experiencia sin viñetas:",
                        desc: "Se detectó experiencia escrita en bloques compactos de texto. Estructúrala usando listas con viñetas para ser legible por los parseadores ATS."
                    });
                }

                if (metricsResult.found.length < (RULES.thresholds.experience.minImpactMetrics || 2)) {
                    categorizedRecommendations.medium.push({
                        title: "Falta de métricas cuantitativas:",
                        desc: "El ATS busca números y porcentajes para validar tu impacto. Añade métricas de rendimiento en tu experiencia laboral."
                    });
                }
                
                // Buscar si hay bloques que violen la estructura STAR
                const nonSTARBlocks = blocksAnalyzed.filter(b => !b.isSTAR);
                if (nonSTARBlocks.length > 0 && metricsResult.found.length < 2 && (experienceResult.score || 0) < 80) {
                    categorizedRecommendations.medium.push({
                        title: "Metodología STAR ausente en logros:",
                        desc: "Algunos logros no describen una estructura STAR completa (Verbo de acción + Tecnología + Métrica de impacto). Intenta reformularlos."
                    });
                }

                if (structureResult.lengthAlert) {
                    categorizedRecommendations.medium.push({
                        title: "Extensión del CV:",
                        desc: structureResult.lengthAlert
                    });
                }
                if (structureResult.contactAlert) {
                    categorizedRecommendations.high.push({
                        title: "Información de Contacto:",
                        desc: structureResult.contactAlert
                    });
                }
                
                // Mapear sugerencias de sinónimos de habilidades
                if (skillsResult.synonymSuggestions && skillsResult.synonymSuggestions.length > 0) {
                    skillsResult.synonymSuggestions.forEach(sug => {
                        categorizedRecommendations.high.push({
                            title: `Sinónimo recomendado (${sug.suggested.toUpperCase()}):`,
                            desc: sug.reason
                        });
                    });
                }

                if (skillsResult.softClichéAlert) {
                    categorizedRecommendations.low.push({
                        title: "Exceso de Habilidades Blandas:",
                        desc: skillsResult.softClichéAlert
                    });
                }
                const missingSections = structureResult.sections.filter(s => !s.detected);
                if (missingSections.length > 0) {
                    categorizedRecommendations.low.push({
                        title: "Secciones tradicionales faltantes:",
                        desc: `Faltan apartados como: ${missingSections.map(s => s.name).join(', ')}. Renombra tus títulos utilizando términos estándar.`
                    });
                }
                if (repetitionResult.overused.length > 0) {
                    categorizedRecommendations.low.push({
                        title: "Saturación de términos (Keyword Stuffing):",
                        desc: `La palabra <strong>"${repetitionResult.overused[0].word}"</strong> se repite ${repetitionResult.overused[0].count} veces. Intenta usar sinónimos.`
                    });
                }

                // AUDITORÍA DE SESGO / CUMPLIMIENTO INTERNACIONAL (GDPR/EEOC)
                const complianceResult = ATS_ComplianceBiasAuditor.analyze(cvText);
                complianceResult.warnings.forEach(w => {
                    categorizedRecommendations.medium.push({
                        title: `Aviso de Cumplimiento (${w.field}):`,
                        desc: w.advice
                    });
                });

                return {
                    generalScore: Math.min(100, Math.max(0, generalScore)),
                    scores: scores,
                    titleResult,
                    summaryResult,
                    skillsResult,
                    experienceResult,
                    metricsResult,
                    structureResult,
                    repetitionResult,
                    keywordGapResult,
                    complianceResult,
                    categorizedRecommendations
                };
            }
        };

        // ==========================================
        // PARTE II: INTEGRACIÓN DE VISTAS Y MOTOR
        // ==========================================

        

// EVALUADOR DE DESCARTE DURO (Knockout Criteria)
        function evaluateKnockoutCriteria(rawCV, cleanCV, rawJob, cleanJob, hardSkillsTaxonomy) {
            const reasons = [];

            const expMatch = cleanJob.match(/(?:requiere|exige|minimo|mínimo|experiencia (?:de|minima|mínima)|at least|minimum)\s*(\d+)\s*(?:\+)?\s*(?:anos|años|years)/i)
                || cleanJob.match(/(\d+)\s*(?:\+)?\s*(?:anos|años|years)\s*(?:de experiencia|en)/i);
            
            if (expMatch) {
                const reqYears = parseInt(expMatch[1], 10);
                if (!isNaN(reqYears) && reqYears > 0) {
                    let cvYears = 0;
                    const cvExpMatch = cleanCV.match(/(\d+)\s*(?:\+)?\s*(?:anos|años|years)\s*(?:de experiencia|de trayectoria)/i);
                    if (cvExpMatch) {
                        cvYears = parseInt(cvExpMatch[1], 10);
                    } else {
                        const yearsFound = rawCV.match(/\b(20\d{2}|19\d{2})\b/g);
                        if (yearsFound && yearsFound.length >= 2) {
                            const numYears = yearsFound.map(y => parseInt(y, 10)).sort((a,b) => a - b);
                            const minYear = numYears[0];
                            const maxYear = numYears[numYears.length - 1];
                            const currentYear = new Date().getFullYear();
                            cvYears = Math.max(1, (maxYear === currentYear ? currentYear : maxYear) - minYear);
                        } else if (cleanCV.includes("estudiante") || cleanCV.includes("9no ciclo") || cleanCV.includes("noveno ciclo") || cleanCV.includes("practicante") || cleanCV.includes("junior")) {
                            cvYears = 1;
                        }
                    }

                    if (cvYears < reqYears) {
                        reasons.push(`Años de experiencia insuficientes: La oferta exige un mínimo de <strong>${reqYears} años</strong>, pero en tu CV se identificaron aproximadamente <strong>${cvYears} año(s)</strong>.`);
                    }
                }
            }

            const lines = rawJob.split('\n');
            const mandatoryTechs = new Set();
            lines.forEach(line => {
                const lowerLine = line.toLowerCase();
                if (lowerLine.includes("excluyente") || lowerLine.includes("indispensable") || lowerLine.includes("must have") || lowerLine.includes("obligatorio")) {
                    hardSkillsTaxonomy.forEach(skill => {
                        if (ATS_MatchingEngine.comparePhrase(lowerLine, skill).match) {
                            mandatoryTechs.add(skill);
                        }
                    });
                }
            });

            mandatoryTechs.forEach(tech => {
                if (!ATS_MatchingEngine.comparePhrase(cleanCV, tech).match) {
                    reasons.push(`Tecnología o requisito excluyente faltante: La vacante señala <strong>${tech.toUpperCase()}</strong> como condición indispensable y no figura en tu CV.`);
                }
            });

            // Detección de Desalineación de Jerarquía / Seniority Mismatch (Solo si la vacante es explícitamente Senior y no Jr/Trainee)
            const jobExplicitJunior = /\b(junior|jr|júnior|practicante|trainee|pasante|estudiante|asistente|auxiliar|entry[\s\-_]?level)\b/i.test(cleanJob);
            const jobIsSenior = !jobExplicitJunior && /\b(senior|sr|sénior|lead|principal|arquitecto|architect|3\+\s*años|4\+\s*años|5\+\s*años)\b/i.test(cleanJob);
            const cvIsJunior = /\b(junior|jr|júnior|practicante|estudiante|8\.?º?\s*ciclo|9\.?º?\s*ciclo|octavo ciclo|noveno ciclo|iniciacion|trainee)\b/i.test(cleanCV);
            
            if (jobIsSenior && cvIsJunior) {
                reasons.push(`Desalineación de Seniority (Riesgo Alto): La vacante exige un perfil <strong>SENIOR / AVANZADO (3+ años)</strong>, pero en tu CV figura un perfil <strong>JUNIOR / ESTUDIANTE</strong>.`);
            }

            // EVALUADOR UNIVERSAL DE COMPATIBILIDAD DE DOMINIO Y CARRERA (MULTI-SECTORIAL)
            const ALL_CAREER_DOMAINS = [
                { id: "tech", label: "Tecnología & Software", keywords: ['javascript', 'python', 'java', 'react', 'node', 'sql', 'docker', 'aws', 'desarrollo', 'programador', 'software', 'ti', 'qa', 'sistemas', 'full stack', 'frontend', 'backend', 'devops'] },
                { id: "data", label: "Analítica de Datos & BI", keywords: ['analista de datos', 'data analyst', 'data scientist', 'power bi', 'powerbi', 'tableau', 'big data', 'business intelligence', 'etl', 'pandas', 'qlik', 'dashboards'] },
                { id: "finance", label: "Contabilidad, Administración & Finanzas", keywords: ['excel', 'sap', 'contabilidad', 'facturacion', 'finanzas', 'presupuesto', 'auditoria', 'costos', 'impuestos', 'tesoreria', 't-registro', 'plame', 'contador', 'administrador'] },
                { id: "marketing", label: "Marketing, Ventas & Crecimiento", keywords: ['seo', 'sem', 'google ads', 'meta ads', 'marketing', 'copywriting', 'redes sociales', 'analytics', 'growth', 'community management', 'ventas', 'comercial'] },
                { id: "hr", label: "Recursos Humanos & Talento", keywords: ['reclutamiento', 'seleccion', 'planilla', 'payroll', 'clima laboral', 'talento', 'rrhh', 'recursos humanos', 'onboarding', 'gestion del talento'] },
                { id: "design", label: "Diseño Gráfico & UX/UI", keywords: ['figma', 'photoshop', 'illustrator', 'ux', 'ui', 'diseño', 'wireframing', 'motion graphics', 'creativo', 'animacion', 'canva', 'diseñador'] },
                { id: "engineering", label: "Ingeniería Industrial, Operaciones & Logística", keywords: ['autocad', 'solidworks', 'logistica', 'cadena de suministro', 'calidad', 'lean', 'six sigma', 'mantenimiento', 'industrial', 'hseq', 'almacen', 'operaciones'] },
                { id: "health", label: "Salud, Medicina & Enfermería", keywords: ['enfermeria', 'medicina', 'triaje', 'salud', 'clinica', 'farmacologia', 'cuidados', 'laboratorio', 'biologia', 'quimica', 'medico', 'pacientes'] },
                { id: "legal", label: "Derecho, Legal & Normativa", keywords: ['derecho', 'legal', 'contratos', 'compliance', 'litigio', 'notarial', 'abogado', 'propiedad intelectual', 'jurisprudencia', 'penal', 'civil'] }
            ];

            function getDomainScores(text) {
                const scores = {};
                ALL_CAREER_DOMAINS.forEach(dom => {
                    scores[dom.id] = 0;
                    dom.keywords.forEach(kw => {
                        if (ATS_MatchingEngine.comparePhrase(text, kw).match) {
                            scores[dom.id] += 1;
                        }
                    });
                });
                return scores;
            }

            const jobDomainScores = getDomainScores(cleanJob);
            const cvDomainScores = getDomainScores(cleanCV);

            let topJobDomain = null;
            let topJobCount = 0;
            let topCVDomain = null;
            let topCVCount = 0;

            ALL_CAREER_DOMAINS.forEach(dom => {
                if (jobDomainScores[dom.id] > topJobCount) {
                    topJobCount = jobDomainScores[dom.id];
                    topJobDomain = dom;
                }
                if (cvDomainScores[dom.id] > topCVCount) {
                    topCVCount = cvDomainScores[dom.id];
                    topCVDomain = dom;
                }
            });

            // Si ambos dominios están claramente identificados pero son totalmente distintos y no hay afinidad cruzada
            if (topJobDomain && topCVDomain && topJobDomain.id !== topCVDomain.id && topJobCount >= 2) {
                const cvMatchesInJobDomain = jobDomainScores[topJobDomain.id] > 0 ? cvDomainScores[topJobDomain.id] : 0;
                if (cvMatchesInJobDomain === 0) {
                    reasons.push(`Incompatibilidad de Carrera y Especialización: La vacante pertenece al área de <strong>${topJobDomain.label}</strong>, pero tu perfil está enfocado en <strong>${topCVDomain.label}</strong> sin competencias directas para este campo.`);
                }
            }

            // Filtro dinámico de idiomas usando LanguageAnalyzer
            const cvData = typeof extractStructuredCVData === 'function' ? extractStructuredCVData() : {};
            const langAnalysis = ATS_LanguageAnalyzer.analyze(cvData, rawJob);
            langAnalysis.knockouts.forEach(k => {
                reasons.push(k.message);
            });

            return {
                isKnockout: reasons.length > 0,
                reasons: reasons
            };
        }

// ==========================================
// EXPORTS FOR BROWSER & NODE.JS
// ==========================================
if (typeof window !== 'undefined') {
    window.ATS_TextNormalizer = ATS_TextNormalizer;
    window.ATS_Tokenizer = ATS_Tokenizer;
    window.ATS_TitleAnalyzer = ATS_TitleAnalyzer;
    window.ATS_SummaryAnalyzer = ATS_SummaryAnalyzer;
    window.ATS_SkillsAnalyzer = ATS_SkillsAnalyzer;
    window.ATS_ExperienceAnalyzer = ATS_ExperienceAnalyzer;
    window.ATS_MetricsDetector = ATS_MetricsDetector;
    window.ATS_StructureAnalyzer = ATS_StructureAnalyzer;
    window.ATS_LanguageAnalyzer = ATS_LanguageAnalyzer;
    window.ATS_RepetitionAnalyzer = ATS_RepetitionAnalyzer;
    window.ATS_JobKeywordExtractor = ATS_JobKeywordExtractor;
    window.ATS_KeywordGapAnalyzer = ATS_KeywordGapAnalyzer;
    window.ATS_ComplianceBiasAuditor = ATS_ComplianceBiasAuditor;
    window.ATS_MatchingEngine = ATS_MatchingEngine;
    window.ATS_Engine = ATS_Engine;
    window.evaluateKnockoutCriteria = evaluateKnockoutCriteria;
    window.normalizeVerb = normalizeVerb;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ATS_TextNormalizer,
        ATS_Tokenizer,
        ATS_TitleAnalyzer,
        ATS_SummaryAnalyzer,
        ATS_SkillsAnalyzer,
        ATS_ExperienceAnalyzer,
        ATS_MetricsDetector,
        ATS_StructureAnalyzer,
        ATS_LanguageAnalyzer,
        ATS_RepetitionAnalyzer,
        ATS_JobKeywordExtractor,
        ATS_KeywordGapAnalyzer,
        ATS_ComplianceBiasAuditor,
        ATS_MatchingEngine,
        ATS_Engine,
        evaluateKnockoutCriteria, normalizeVerb
    };
}





