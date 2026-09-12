/**
 * ============================================================================
 * RULES ENGINE CONFIGURATION (rules.js) v2.2.0
 * ============================================================================
 * MEJORAS:
 * - Pesos adaptativos por dominio (tech, salud, legal, etc.)
 * - Umbrales configurables por sector
 * - Nuevos thresholds para skills con nivel
 * - Validación de formato ATS-friendly
 * - Scoring semántico y por contexto
 */

const RULES = {
    // =========================================================================
    // PESOS POR DEFECTO (Fallback)
    // =========================================================================
    weights: {
        skills: 35,      // Hard Skills y competencias directas
        experience: 30,  // Experiencia laboral e impacto cuantificable
        summary: 15,     // Alineación del resumen profesional y rol
        structure: 15,   // Formato de apartados y contacto
        certifications: 5 // Certificaciones y formación continua
    },

    // =========================================================================
    // PESOS DE ESTRUCTURA (Faltantes en la versión previa, requeridos por index.html)
    // =========================================================================
    structureWeights: {
        skills: 20,
        experience: 18,
        profile: 15,
        role: 12,
        education: 10,
        projects: 10,
        contact: 8,
        languages: 4,
        certifications: 3
    },

    // =========================================================================
    // PESOS ADAPTATIVOS POR DOMINIO (NUEVO v2.2.0)
    // =========================================================================
    domainWeights: {
        tecnologia: {
            skills: 40,
            experience: 30,
            summary: 15,
            structure: 10,
            certifications: 5
        },
        salud: {
            skills: 25,        // Menos peso a skills técnicas, más a certificaciones
            experience: 35,    // La experiencia clínica pesa más
            summary: 15,
            structure: 10,
            certifications: 15 // Certificaciones médicas son críticas
        },
        legal: {
            skills: 30,
            experience: 35,    // Trayectoria y casos ganados pesan más
            summary: 20,       // Argumentación escrita es clave
            structure: 10,
            certifications: 5
        },
        educacion: {
            skills: 25,
            experience: 30,
            summary: 25,       // La comunicación escrita es fundamental
            structure: 10,
            certifications: 10 // Certificaciones docentes
        },
        diseno: {
            skills: 35,        // Herramientas específicas
            experience: 25,    // Portafolio pesa más que años
            summary: 20,       // Narrativa del perfil
            structure: 10,
            certifications: 10 // Certificaciones de software
        },
        marketing: {
            skills: 35,
            experience: 30,
            summary: 20,       // Copywriting en el perfil
            structure: 10,
            certifications: 5
        },
        finanzas: {
            skills: 30,
            experience: 35,    // Años de trayectoria y volumen gestionado
            summary: 15,
            structure: 10,
            certifications: 10 // CPA, CFA, etc.
        },
        rrhh: {
            skills: 30,
            experience: 35,    // La experiencia con personas pesa más
            summary: 20,
            structure: 10,
            certifications: 5
        },
        ingenieria: {
            skills: 35,
            experience: 35,    // Proyectos ejecutados
            summary: 15,
            structure: 10,
            certifications: 5
        },
        operaciones: {
            skills: 30,
            experience: 40,    // La operativa es lo más importante
            summary: 15,
            structure: 10,
            certifications: 5
        },
        ventas: {
            skills: 30,
            experience: 40,    // Track record de ventas
            summary: 20,       // Comunicación persuasiva
            structure: 5,
            certifications: 5
        },
        audiovisual: {
            skills: 40,        // Herramientas específicas
            experience: 25,    // Reel/portafolio
            summary: 20,
            structure: 10,
            certifications: 5
        },
        turismo: {
            skills: 30,
            experience: 40,    // Experiencia en servicio
            summary: 20,
            structure: 5,
            certifications: 5
        },
        consultoria: {
            skills: 35,
            experience: 35,    // Proyectos entregados y clientes
            summary: 20,       // Narrativa de impacto
            structure: 5,
            certifications: 5
        },
        ciencia_datos: {
            skills: 40,        // Stack técnico es crítico
            experience: 30,    // Proyectos con datos
            summary: 15,
            structure: 10,
            certifications: 5
        },
        logistica: {
            skills: 30,
            experience: 40,    // Operativa y cadena de suministro
            summary: 15,
            structure: 10,
            certifications: 5
        },
        construccion: {
            skills: 35,        // Normativas y herramientas
            experience: 35,    // Proyectos ejecutados
            summary: 15,
            structure: 10,
            certifications: 5
        },
        gastronomia: {
            skills: 35,        // Técnicas culinarias
            experience: 35,    // Trayectoria en cocina
            summary: 20,       // Creatividad y pasión
            structure: 5,
            certifications: 5
        },
        deporte: {
            skills: 30,
            experience: 35,    // Trayectoria y logros
            summary: 25,       // Mentalidad de competición
            structure: 5,
            certifications: 5
        }
    },

    // =========================================================================
    // UMBRALES DE PUNTUACIÓN POR DOMINIO
    // =========================================================================
    thresholds: {
        default: {
            pass: 70,          // Mínimo para pasar a revisión humana
            strong: 85,        // Candidato destacado
            excellent: 95      // Candidato top
        },
        tecnologia: {
            pass: 75,
            strong: 88,
            excellent: 96
        },
        salud: {
            pass: 72,
            strong: 85,
            excellent: 94
        },
        legal: {
            pass: 75,
            strong: 87,
            excellent: 95
        },
        finanzas: {
            pass: 73,
            strong: 86,
            excellent: 95
        },
        ciencia_datos: {
            pass: 76,
            strong: 89,
            excellent: 97
        },
        ventas: {
            pass: 68,
            strong: 82,
            excellent: 92
        },
        repetition: {
            maxCountRegular: 5,
            maxCountTech: 8
        },
        summary: {
            minWords: 40
        },
        experience: {
            minImpactMetrics: 2
        }
    },

    // =========================================================================
    // REGLAS DE SKILLS CON NIVELES (NUEVO v2.2.0)
    // =========================================================================
    skillLevels: {
        scoring: {
            beginner: 0.3,
            intermediate: 0.6,
            advanced: 0.85,
            expert: 1.0
        },
        keywords: {
            beginner: ['básico', 'basico', 'beginner', 'novice', 'iniciación', 'iniciacion', 'introductorio'],
            intermediate: ['intermedio', 'intermediate', 'medio', 'competente', 'proficient'],
            advanced: ['avanzado', 'advanced', 'experto', 'senior', 'sénior', 'experienced'],
            expert: ['experto', 'expert', 'maestro', 'master', 'guru', 'ninja', 'principal', 'lead', 'architect']
        }
    },

    // =========================================================================
    // VALIDACIÓN DE FORMATO ATS-FRIENDLY
    // =========================================================================
    atsFormatRules: {
        requiredSections: [
            'experience',
            'education',
            'skills'
        ],
        recommendedSections: [
            'summary',
            'certifications',
            'contact'
        ],
        forbiddenElements: [
            'tables',
            'text_boxes',
            'headers_footers_for_contact',
            'graphics_as_text',
            'multi_column_layout',
            'images_as_content'
        ],
        fontRequirements: {
            allowedFonts: [
                'Arial', 'Calibri', 'Cambria', 'Times New Roman', 
                'Georgia', 'Helvetica', 'Tahoma', 'Verdana', 'Garamond'
            ],
            minSize: 10,
            maxSize: 12,
            headingMinSize: 14,
            headingMaxSize: 16
        },
        layout: {
            singleColumn: true,
            marginsMin: 1, // pulgadas
            lineSpacing: '7-8pt'
        },
        dateFormat: {
            preferred: 'Month YYYY',
            alternatives: ['MM/YYYY', 'YYYY'],
            consistencyRequired: true
        }
    },

    // =========================================================================
    // REGLAS DE KEYWORD MATCHING
    // =========================================================================
    keywordRules: {
        exactMatchWeight: 1.0,
        synonymMatchWeight: 0.7,
        semanticMatchWeight: 0.5,
        contextBonus: 0.2,      // Bonus si la keyword aparece en contexto cuantificado
        locationWeights: {
            summary: 1.3,
            firstBullet: 1.2,
            skillsSection: 1.0,
            experienceBody: 0.9,
            certifications: 1.1
        },
        maxKeywordDensity: 0.15, // Máximo 15% del texto para evitar keyword stuffing
        minKeywordDensity: 0.03  // Mínimo 3% para considerar alineación
    },

    // =========================================================================
    // REGLAS DE EXPERIENCIA LABORAL
    // =========================================================================
    experienceRules: {
        minYearsForSenior: 5,
        minYearsForMid: 2,
        gapThresholdMonths: 6,
        gapPenalty: 5,          // Puntos menos por gap no explicado
        quantifiedBonus: 10,     // Puntos extra por bullets con métricas
        actionVerbBonus: 3,      // Puntos por usar verbos de acción
        maxBulletPoints: 5,      // Máximo por rol para ATS óptimo
        reverseChronological: true,
        // ── Reglas para CVs de estudiantes y desarrolladores junior ──
        // Un proyecto propio bien documentado (con tech stack, verbos de acción y métricas)
        // debe evaluarse igual que experiencia laboral formal en niveles junior.
        studentAndJuniorRules: {
            projectsCountAsExperience: true,
            independentDevCountsAsExperience: true,
            freelanceCountsAsExperience: true,
            minBulletsForFullScore: 3,       // Al menos 3 bullets con contenido para score máximo
            minMetricsForBonus: 1,           // Al menos 1 métrica XYZ para bonus
            techStackBonus: 8,               // Bonus si el bloque menciona tech stack del puesto
            portfolioBonus: 5                // Bonus si hay enlace a GitHub o portafolio
        },
        trajectoryScoring: {
            upward: 1.2,         // Bonus por progresión ascendente
            lateral: 1.0,
            downward: 0.8        // Penalización por regresión
        }
    },

    // =========================================================================
    // REGLAS DE CERTIFICACIONES
    // =========================================================================
    certificationRules: {
        exactNameRequired: true,
        includeIssuer: true,
        includeYear: true,
        expiryCheck: true,
        priorityCertifications: {
            tecnologia: [
                // Cloud
                'AWS Certified', 'Azure Fundamentals', 'GCP Associate', 'Google Cloud',
                'AWS Solutions Architect', 'AWS Developer', 'Azure Developer',
                // DevOps & Infra
                'Kubernetes CKA', 'CKD', 'Docker Certified', 'Terraform Associate',
                'Linux LFCS', 'LFCE', 'CompTIA Linux',
                // Desarrollo web / LatAm comunes
                'Oracle Certified', 'Java SE', 'MongoDB Certified',
                'Meta Front-End', 'Meta Back-End', 'IBM Full Stack',
                'Coursera Full Stack', 'Platzi', 'Udemy', 'freeCodeCamp',
                'Scrum Master', 'PSM', 'CSM', 'PMI-ACP',
                // Ciberseguridad
                'CompTIA Security+', 'CEH', 'OSCP', 'CISSP'
            ],
            salud: ['RN', 'MD', 'CPR', 'ACLS', 'HIPAA'],
            legal: ['Bar Admission', 'LLM', 'JD'],
            finanzas: ['CPA', 'CFA', 'CFP', 'FRM', 'ACCA'],
            ciencia_datos: ['Google Data Engineer', 'AWS ML', 'TensorFlow', 'DeepLearning.AI', 'Databricks']
        }
    },

    // =========================================================================
    // REGLAS DE ESTRUCTURA / FORMATO
    // =========================================================================
    structureRules: {
        contactRequired: ['name', 'phone', 'email'],
        contactOptional: ['linkedin', 'location', 'portfolio'],
        sectionHeadings: {
            experience: ['Work Experience', 'Experiencia Laboral', 'Professional Experience', 'Employment History'],
            education: ['Education', 'Educación', 'Academic Background', 'Formación'],
            skills: ['Skills', 'Habilidades', 'Technical Skills', 'Competencias'],
            summary: ['Summary', 'Resumen', 'Professional Summary', 'Perfil'],
            certifications: ['Certifications', 'Certificaciones', 'Credentials']
        },
        fileFormat: {
            preferred: ['.docx', '.pdf'],
            avoid: ['.jpg', '.png', '.rtf']
        }
    },

    // =========================================================================
    // DETECCIÓN DE DOMINIO (Keyword mapping para auto-clasificación)
    // =========================================================================
    domainDetection: {
        tecnologia: [
            // Roles
            'software', 'developer', 'desarrollador', 'programador', 'engineer', 'ingeniero',
            'frontend', 'backend', 'fullstack', 'full stack', 'devops', 'cloud',
            'sistemas', 'ingenieria de sistemas', 'sistemas computacionales',
            // Tecnologías detectoras de dominio
            'api', 'api rest', 'apis rest', 'rest api', 'javascript', 'python', 'react',
            'node', 'nodejs', 'express', 'angular', 'vue', 'typescript',
            'mysql', 'postgresql', 'mongodb', 'sql server', 'mssql', 'sql',
            'docker', 'kubernetes', 'aws', 'azure', 'gcp',
            'git', 'github', 'gitlab',
            // Contexto técnico general
            'aplicaciones web', 'desarrollo web', 'arquitectura', 'microservicios',
            'base de datos', 'bases de datos', 'seguridad', 'autenticacion', 'jwt',
            'scrum', 'agile', 'ci/cd', 'pipeline'
        ],
        salud: ['enfermería', 'enfermeria', 'médico', 'medico', 'clínico', 'clinico', 'paciente', 'hospital', 'enfermera', 'doctor', 'salud', 'healthcare'],
        legal: ['abogado', 'lawyer', 'attorney', 'legal', 'litigio', 'derecho', 'ley', 'jurisprudencia', 'contract', 'compliance'],
        finanzas: ['finanzas', 'finance', 'contable', 'accounting', 'banca', 'banking', 'inversión', 'inversion', 'cpa', 'cfa', 'audit'],
        marketing: ['marketing', 'seo', 'sem', 'growth', 'brand', 'social media', 'content', 'copywriting', 'cmo'],
        rrhh: ['recursos humanos', 'hr', 'talent', 'people', 'reclutamiento', 'recruiting', 'payroll', 'nómina', 'nomina'],
        ventas: ['ventas', 'sales', 'comercial', 'business development', 'account executive', 'sdr', 'bdr', 'quota'],
        diseno: ['diseño', 'diseno', 'design', 'ux', 'ui', 'graphic', 'illustrator', 'photoshop', 'figma', 'creative'],
        educacion: ['educación', 'educacion', 'teacher', 'profesor', 'docente', 'pedagogía', 'pedagogia', 'academic'],
        ingenieria: ['ingeniero', 'engineer', 'civil', 'mecánico', 'mecanico', 'electrical', 'industrial', 'project engineer'],
        operaciones: ['operaciones', 'operations', 'supply chain', 'logística', 'logistica', 'warehouse', 'procurement'],
        ciencia_datos: ['data science', 'data scientist', 'machine learning', 'ml', 'ai', 'deep learning', 'analytics', 'estadística', 'estadistica'],
        audiovisual: ['video', 'film', 'cine', 'edición', 'edicion', 'premiere', 'after effects', 'cinematografía', 'cinematografia'],
        turismo: ['turismo', 'tourism', 'hotel', 'hospitality', 'recepción', 'recepcion', 'travel', 'guía', 'guia'],
        consultoria: ['consultoría', 'consultoria', 'consultant', 'advisory', 'strategy', 'management consulting', 'big four'],
        logistica: ['logística', 'logistica', 'supply chain', 'transporte', 'warehouse', 'inventory', 'distribution'],
        construccion: ['construcción', 'construccion', 'arquitecto', 'obra', 'project manager construction', 'bim'],
        gastronomia: ['chef', 'cocina', 'restaurant', 'gastronomía', 'gastronomia', 'culinario', 'pastry', 'sous chef'],
        deporte: ['deporte', 'sport', 'entrenador', 'coach', 'fitness', 'atleta', 'performance', 'físico', 'fisico']
    },

    // =========================================================================
    // REGLAS DE SCORING CONTEXTUAL (NUEVO v2.2.0 - ML-based)
    // =========================================================================
    contextualScoring: {
        // Los bullets con métricas numéricas reciben bonus
        quantifiedPatterns: [
            /\d+%/,           // Porcentajes
            /\d+\s*(k|K|mil|million|millones?)/,  // Monetarios
            /\d+\s*(años?|years?|meses?|months?)/, // Tiempo
            /\d+\s*(personas?|people|team|equipo)/, // Equipo
            /\d+\s*(usd|\$|€)/i  // Dinero
        ],
        // Verbos de acción que indican impacto
        actionVerbs: [
            'led', 'managed', 'built', 'designed', 'developed', 'implemented',
            'increased', 'reduced', 'improved', 'created', 'launched', 'optimized',
            'dirigí', 'gestioné', 'construí', 'diseñé', 'desarrollé', 'implementé',
            'aumenté', 'reduje', 'mejoré', 'creé', 'lanzé', 'optimicé'
        ],
        // Patrones que indican responsabilidad senior
        seniorityIndicators: [
            'led a team', 'managed', 'directed', 'oversaw', 'strategic', 'executive',
            'dirigí un equipo', 'gestioné', 'supervisé', 'estratégico', 'ejecutivo'
        ]
    },

    // =========================================================================
    // PENALIZACIONES Y FLAGS DE RIESGO
    // =========================================================================
    penalties: {
        keywordStuffing: -15,       // Texto blanco, densidad excesiva
        inconsistentDates: -10,     // Formatos de fecha inconsistentes
        missingContactInfo: -20,    // Sin info de contacto parseable
        imageBasedPDF: -50,         // PDF basado en imágenes (no texto)
        hiddenText: -30,            // Texto oculto detectado
        falseSkills: -25,           // Skills declaradas sin respaldo en experiencia
        linkedinMismatch: -10,      // Discrepancia con LinkedIn (si se verifica)
        unexplainedGap: -5,         // Gap no explicado (por cada uno)
        overlength: -5,             // Más de 2 páginas sin justificación
        poorFormatting: -15         // Elementos que rompen parsing
    },

    // =========================================================================
    // MÉTODOS AUXILIARES
    // =========================================================================
    
    /**
     * Obtiene los pesos para un dominio específico
     * @param {string} domain - Nombre del dominio
     * @returns {Object} Pesos configurados
     */
    getWeights(domain) {
        return this.domainWeights[domain] || this.weights;
    },

    /**
     * Obtiene los umbrales para un dominio específico
     * @param {string} domain - Nombre del dominio
     * @returns {Object} Umbrales configurados
     */
    getThresholds(domain) {
        return this.thresholds[domain] || this.thresholds.default;
    },

    /**
     * Detecta el dominio basado en keywords del texto
     * @param {string} text - Texto del CV o descripción del puesto
     * @returns {string} Dominio detectado
     */
    detectDomain(text) {
        const lowerText = text.toLowerCase();
        let bestDomain = 'default';
        let maxMatches = 0;

        for (const [domain, keywords] of Object.entries(this.domainDetection)) {
            const matches = keywords.filter(kw => lowerText.includes(kw.toLowerCase())).length;
            if (matches > maxMatches) {
                maxMatches = matches;
                bestDomain = domain;
            }
        }

        return bestDomain;
    },

    /**
     * Calcula el nivel de una skill basado en keywords de nivel
     * @param {string} skillText - Texto donde aparece la skill
     * @returns {number} Multiplicador de puntuación (0.3 - 1.0)
     */
    getSkillLevelMultiplier(skillText) {
        const lowerText = skillText.toLowerCase();
        
        for (const [level, keywords] of Object.entries(this.skillLevels.keywords)) {
            if (keywords.some(kw => lowerText.includes(kw))) {
                return this.skillLevels.scoring[level];
            }
        }
        
        return this.skillLevels.scoring.intermediate; // Default
    },

    /**
     * Verifica si un texto contiene métricas cuantificables
     * @param {string} text - Texto a evaluar
     * @returns {boolean} True si contiene métricas
     */
    hasQuantifiedMetrics(text) {
        return this.contextualScoring.quantifiedPatterns.some(pattern => pattern.test(text));
    },

    /**
     * Obtiene el peso de ubicación de una keyword
     * @param {string} section - Sección donde aparece
     * @returns {number} Multiplicador de peso
     */
    getLocationWeight(section) {
        return this.keywordRules.locationWeights[section] || 1.0;
    },

    /**
     * Evalúa si un formato es ATS-friendly
     * @param {Object} formatInfo - Info del formato detectado
     * @returns {Object} Resultado de validación
     */
    validateATSFormat(formatInfo) {
        const issues = [];
        let score = 100;

        // Verificar secciones requeridas
        const missingSections = this.atsFormatRules.requiredSections.filter(
            section => !formatInfo.sections?.includes(section)
        );
        if (missingSections.length > 0) {
            issues.push(`Missing required sections: ${missingSections.join(', ')}`);
            score -= missingSections.length * 10;
        }

        // Verificar elementos prohibidos
        const forbiddenFound = this.atsFormatRules.forbiddenElements.filter(
            element => formatInfo.elements?.includes(element)
        );
        if (forbiddenFound.length > 0) {
            issues.push(`Forbidden elements detected: ${forbiddenFound.join(', ')}`);
            score -= forbiddenFound.length * 15;
        }

        // Verificar fuente
        if (formatInfo.font && !this.atsFormatRules.fontRequirements.allowedFonts.includes(formatInfo.font)) {
            issues.push(`Non-ATS font detected: ${formatInfo.font}`);
            score -= 5;
        }

        return {
            isValid: score >= 70,
            score: Math.max(0, score),
            issues
        };
    },

    /**
     * Calcula la puntuación final basada en todos los criterios
     * @param {Object} scores - Puntuaciones por categoría
     * @param {string} domain - Dominio del puesto
     * @returns {Object} Resultado completo del scoring
     */
    calculateFinalScore(scores, domain = 'default') {
        const weights = this.getWeights(domain);
        const thresholds = this.getThresholds(domain);

        let totalScore = 0;
        let maxPossible = 0;

        for (const [category, weight] of Object.entries(weights)) {
            const categoryScore = scores[category] || 0;
            totalScore += (categoryScore * weight) / 100;
            maxPossible += weight;
        }

        // Normalizar a 100
        const normalizedScore = (totalScore / maxPossible) * 100;

        // Determinar nivel
        let level = 'rejected';
        if (normalizedScore >= thresholds.excellent) level = 'excellent';
        else if (normalizedScore >= thresholds.strong) level = 'strong';
        else if (normalizedScore >= thresholds.pass) level = 'pass';

        return {
            score: Math.round(normalizedScore * 100) / 100,
            level,
            thresholds,
            weights,
            domain,
            recommendation: this.getRecommendation(level, normalizedScore)
        };
    },

    /**
     * Genera una recomendación basada en el nivel
     * @param {string} level - Nivel alcanzado
     * @param {number} score - Puntuación numérica
     * @returns {string} Recomendación
     */
    getRecommendation(level, score) {
        const recommendations = {
            rejected: 'El candidato no cumple con los requisitos mínimos. Revisar skills faltantes, formato ATS o experiencia insuficiente.',
            pass: 'Candidato viable para entrevista inicial. Considerar revisión humana.',
            strong: 'Candidato destacado. Priorizar en el pipeline de reclutamiento.',
            excellent: 'Candidato top. Recomendado para entrevista técnica/senior inmediata.'
        };
        return recommendations[level] || recommendations.rejected;
    }
};

// Exportar para uso en Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RULES;
}