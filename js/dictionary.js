/**
 * ============================================================================
 * ALIAS & TITLE EQUIVALENCES DICTIONARY (dictionary.js) v2.2.0
 * ============================================================================
 * MEJORAS:
 * - Inferencia de familia tecnológica (TECH_FAMILY)
 * - Alias ordenados por longitud descendente (previene conflictos)
 * - LANGUAGE_LEVELS completo con certificaciones profesionales
 * - Nuevos alias para sectores no-tech
 */

// ============================================================================
// 1. EQUIVALENCIAS DE TÍTULOS PROFESIONALES (Multi-sector)
// ============================================================================

const TITLE_EQUIVALENCE = {
    // TECNOLOGÍA
    'software engineer': ['software developer', 'desarrollador de software', 'ingeniero de software', 'programador', 'full stack', 'fullstack', 'desarrollador full stack', 'ingeniero de sistemas'],
    'software developer': ['software engineer', 'desarrollador de software', 'ingeniero de software', 'programador', 'full stack', 'fullstack'],
    'frontend engineer': ['frontend developer', 'desarrollador frontend', 'maquetador web', 'web developer', 'desarrollador web', 'ingeniero frontend'],
    'frontend developer': ['frontend engineer', 'desarrollador frontend', 'maquetador web', 'web developer', 'desarrollador web'],
    'backend engineer': ['backend developer', 'desarrollador backend', 'server side developer', 'desarrollador servidor', 'ingeniero backend'],
    'backend developer': ['backend engineer', 'desarrollador backend', 'server side developer', 'desarrollador servidor'],
    'fullstack engineer': ['fullstack developer', 'desarrollador fullstack', 'full stack developer', 'desarrollador full stack'],
    'fullstack developer': ['fullstack engineer', 'desarrollador fullstack', 'full stack developer', 'desarrollador full stack'],
    'devops engineer': ['devops specialist', 'especialista devops', 'ingeniero devops', 'sre', 'site reliability engineer'],
    'data scientist': ['cientifico de datos', 'científico de datos', 'analista de datos senior', 'data analyst senior', 'ingeniero de ml', 'machine learning engineer'],
    'data analyst': ['analista de datos', 'analista bi', 'business intelligence analyst', 'analista de negocio'],
    
    // DISEÑO
    'ux designer': ['diseñador ux', 'diseñador de experiencia de usuario', 'ux researcher', 'ux/ui designer'],
    'ui designer': ['diseñador ui', 'diseñador de interfaces', 'visual designer', 'graphic designer'],
    'product designer': ['diseñador de producto', 'diseñador ux/ui senior'],
    
    // MARKETING
    'digital marketing specialist': ['especialista en marketing digital', 'marketing digital', 'growth hacker', 'especialista en growth'],
    'seo specialist': ['especialista seo', 'consultor seo', 'seo manager'],
    'content manager': ['gestor de contenidos', 'content strategist', 'estratega de contenidos'],
    
    // ADMINISTRACIÓN / FINANZAS
    'financial analyst': ['analista financiero', 'analista de finanzas', 'financial controller', 'controller financiero'],
    'accountant': ['contador', 'contadora', 'contador publico', 'cpa', 'contable'],
    'project manager': ['gestor de proyectos', 'gerente de proyecto', 'jefe de proyecto', 'coordinador de proyectos', 'scrum master'],
    'product manager': ['product strategist', 'gestor de productos', 'gerente de producto', 'product owner', 'owner de producto'],
    
    // RECURSOS HUMANOS
    'hr manager': ['gerente de rrhh', 'gerente de recursos humanos', 'director de talento', 'talent acquisition manager'],
    'recruiter': ['reclutador', 'reclutadora', 'talent acquisition specialist', 'especialista en seleccion'],
    
    // SALUD
    'registered nurse': ['enfermera registrada', 'enfermero registrado', 'enfermera profesional', 'enfermero profesional'],
    'physician': ['medico', 'médico', 'doctor', 'doctora', 'cirujano', 'cirujana'],
    'pharmacist': ['farmacéutico', 'farmacéutica', 'quimico farmaceutico'],
    
    // EDUCACIÓN
    'teacher': ['profesor', 'profesora', 'docente', 'educador', 'maestro'],
    'principal': ['director de colegio', 'directora de colegio', 'rector', 'rectores'],
    
    // LEGAL
    'lawyer': ['abogado', 'abogada', 'asesor legal', 'consultor legal', 'jurista'],
    'paralegal': ['asistente legal', 'auxiliar legal', 'secretario juridico'],
    
    // INGENIERÍA (No-TI)
    'civil engineer': ['ingeniero civil', 'ingeniera civil', 'estructurista', 'residente de obra', 'ingeniero residente', 'ingeniero de campo'],
    'residente de obra': ['ingeniero residente', 'residente de obra', 'asistente de residente', 'ingeniero de campo', 'supervisor de obra', 'ingeniero civil'],
    'mechanical engineer': ['ingeniero mecanico', 'ingeniera mecanica', 'ingeniero de mantenimiento'],
    'electrical engineer': ['ingeniero electrico', 'ingeniera electrica', 'ingeniero de potencia'],
    
    // VENTAS
    'sales representative': ['representante de ventas', 'ejecutivo de ventas', 'asesor comercial', 'vendedor', 'vendedora'],
    'sales manager': ['gerente de ventas', 'jefe de ventas', 'director comercial'],
    
    // OPERACIONES / LOGÍSTICA
    'operations manager': ['gerente de operaciones', 'jefe de operaciones', 'director de operaciones'],
    'supply chain manager': ['gerente de cadena de suministro', 'jefe de logistica', 'director de supply chain'],
    
    // GENERAL
    'general manager': ['gerente general', 'director general', 'ceo', 'director ejecutivo', 'presidente'],
    'assistant': ['asistente', 'auxiliar', 'secretario', 'secretaria', 'apoyo administrativo']
};

// ============================================================================
// 2. DICCIONARIO DE ALIAS TECNOLÓGICOS (Ordenados por longitud descendente)
// ============================================================================

const ALIAS_DICTIONARY = {
    // Frameworks y Librerías (más específicos primero)
    'react.js': 'react',
    'reactjs': 'react',
    'react js': 'react',
    'react native': 'reactnative',
    'next.js': 'nextjs',
    'next js': 'nextjs',
    'nuxt.js': 'nuxtjs',
    'nuxt js': 'nuxtjs',
    'vue.js': 'vue',
    'vuejs': 'vue',
    'vue js': 'vue',
    'angular.js': 'angular',
    'angularjs': 'angular',
    'express.js': 'express',
    'expressjs': 'express',
    'nest.js': 'nestjs',
    'nestjs': 'nestjs',
    'three.js': 'threejs',
    'threejs': 'threejs',
    'jquery': 'jquery',
    
    // Backend y Runtime
    'node.js': 'node',
    'nodejs': 'node',
    'node js': 'node',
    'spring boot': 'springboot',
    'springboot': 'springboot',
    'ruby on rails': 'rails',
    'rails': 'rails',
    'asp.net': 'aspnet',
    '.net core': 'dotnetcore',
    'dotnet core': 'dotnetcore',
    
    // Bases de Datos
    'sql server': 'mssql',
    'microsoft sql server': 'mssql',
    'postgres': 'postgresql',
    'mongo db': 'mongodb',
    'mongo': 'mongodb',
    'dynamodb': 'dynamodb',
    'firebase': 'firebase',
    'firestore': 'firestore',
    
    // Cloud y DevOps
    'amazon web services': 'aws',
    'amazon web service': 'aws',
    'aws cloud': 'aws',
    'google cloud platform': 'googlecloud',
    'google cloud': 'googlecloud',
    'azure': 'azure',
    'microsoft azure': 'azure',
    'docker': 'docker',
    'kubernetes': 'kubernetes',
    'k8s': 'kubernetes',
    'terraform': 'terraform',
    'ansible': 'ansible',
    'jenkins': 'jenkins',
    'github actions': 'githubactions',
    'gitlab ci': 'gitlabci',
    'circle ci': 'circleci',
    'travis ci': 'travisci',
    'serverless': 'serverless',
    'lambda': 'lambda',
    'cloudformation': 'cloudformation',
    
    // Testing
    'unit testing': 'testing',
    'pruebas unitarias': 'testing',
    'pruebas de integracion': 'testing',
    'integration testing': 'testing',
    'qa testing': 'testing',
    'end to end testing': 'e2etesting',
    'e2e testing': 'e2etesting',
    'jest': 'jest',
    'cypress': 'cypress',
    'selenium': 'selenium',
    'playwright': 'playwright',
    'mocha': 'mocha',
    'chai': 'chai',
    'jasmine': 'jasmine',
    'postman': 'postman',
    'jmeter': 'jmeter',
    
    // Lenguajes de Programación
    'javascript': 'javascript',
    'js': 'javascript',
    'typescript': 'typescript',
    'ts': 'typescript',
    'python': 'python',
    'py': 'python',
    'java': 'java',
    'c++': 'cpp',
    'cpp': 'cpp',
    'c#': 'csharp',
    'csharp': 'csharp',
    'go': 'go',
    'golang': 'go',
    'rust': 'rust',
    'php': 'php',
    'ruby': 'ruby',
    'kotlin': 'kotlin',
    'swift': 'swift',
    'dart': 'dart',
    'scala': 'scala',
    'r': 'rlang',
    'rlang': 'rlang',
    'matlab': 'matlab',
    'bash': 'bash',
    'powershell': 'powershell',
    'shell': 'shell',
    
    // Frontend CSS/HTML
    'html5': 'html',
    'html': 'html',
    'css3': 'css',
    'css': 'css',
    'sass': 'sass',
    'scss': 'sass',
    'less': 'less',
    'tailwind css': 'tailwind',
    'tailwind': 'tailwind',
    'bootstrap': 'bootstrap',
    'material ui': 'materialui',
    'styled components': 'styledcomponents',
    
    // State Management
    'redux': 'redux',
    'zustand': 'zustand',
    'mobx': 'mobx',
    'recoil': 'recoil',
    
    // APIs
    'rest api': 'restapi',
    'restful api': 'restapi',
    'graphql': 'graphql',
    'grpc': 'grpc',
    'soap': 'soap',
    'openapi': 'openapi',
    'swagger': 'swagger',
    
    // Arquitectura
    'microservices': 'microservices',
    'microservicios': 'microservices',
    'monolith': 'monolith',
    'serverless architecture': 'serverless',
    'clean architecture': 'cleanarchitecture',
    'arquitectura limpia': 'cleanarchitecture',
    'solid': 'solid',
    'design patterns': 'designpatterns',
    'patrones de diseno': 'designpatterns',
    
    // Seguridad
    'jwt': 'jwt',
    'oauth': 'oauth',
    'oauth2': 'oauth',
    'cors': 'cors',
    'https': 'https',
    'ssl': 'ssl',
    'tls': 'tls',
    'penetration testing': 'pentesting',
    'owasp': 'owasp',
    
    // Data Science / ML
    'machine learning': 'machinelearning',
    'deep learning': 'deeplearning',
    'neural networks': 'neuralnetworks',
    'tensorflow': 'tensorflow',
    'pytorch': 'pytorch',
    'scikit-learn': 'scikitlearn',
    'pandas': 'pandas',
    'numpy': 'numpy',
    'jupyter': 'jupyter',
    'tableau': 'tableau',
    'powerbi': 'powerbi',
    'power bi': 'powerbi',
    'excel avanzado': 'excel',
    'excel': 'excel',
    
    // ERP / CRM / Business
    'sap': 'sap',
    'salesforce': 'salesforce',
    'dynamics': 'dynamics',
    'oracle erp': 'oracleerp',
    'hubspot': 'hubspot',
    
    // Roles técnicos
    'backend developer': 'backend',
    'backend engineer': 'backend',
    'server side developer': 'backend',
    'frontend developer': 'frontend',
    'frontend engineer': 'frontend',
    'web developer': 'frontend',
    'full stack developer': 'fullstack',
    'fullstack developer': 'fullstack',
    'devops engineer': 'devops',
    'sre': 'sre',
    'data engineer': 'dataengineer',
    'data scientist': 'datascientist',
    'data analyst': 'dataanalyst',
    'ml engineer': 'mlengineer',
    'qa engineer': 'qaengineer',
    'security engineer': 'securityengineer',
    'cloud architect': 'cloudarchitect',
    
    // Roles no-tech
    'product owner': 'productowner',
    'scrum master': 'scrummaster',
    'agile coach': 'agilecoach',
    'project manager': 'projectmanager',
    'product manager': 'productmanager',
    'business analyst': 'businessanalyst',
    'ux researcher': 'uxresearcher',
    'ui designer': 'uidesigner',
    'graphic designer': 'graphicdesigner',
    'content strategist': 'contentstrategist',
    'digital marketer': 'digitalmarketer',
    'seo specialist': 'seospecialist',
    'social media manager': 'socialmediamanager',
    'community manager': 'communitymanager',
    'sales representative': 'salesrepresentative',
    'account executive': 'accountexecutive',
    'customer success': 'customersuccess',
    'hr generalist': 'hrgeneralist',
    'talent acquisition': 'talentacquisition',
    'recruiter': 'recruiter',
    'financial analyst': 'financialanalyst',
    'accountant': 'accountant',
    'controller': 'controller',
    'auditor': 'auditor',
    'legal counsel': 'legalcounsel',
    'paralegal': 'paralegal',
    'teacher': 'teacher',
    'professor': 'professor',
    'nurse': 'nurse',
    'physician': 'physician',
    'pharmacist': 'pharmacist',
    'civil engineer': 'civilengineer',
    'mechanical engineer': 'mechanicalengineer',
    'electrical engineer': 'electricalengineer',
    'operations manager': 'operationsmanager',
    'supply chain manager': 'supplychainmanager',
    'logistics coordinator': 'logisticscoordinator',
    'general manager': 'generalmanager',
    'executive assistant': 'executiveassistant',
    'administrative assistant': 'administrativeassistant'
};

// Orden determinista: alias más largos primero
const SORTED_ALIAS_KEYS = Object.keys(ALIAS_DICTIONARY).sort((a, b) => b.length - a.length);

// ============================================================================
// 3. INFERENCIA DE FAMILIA TECNOLÓGICA (NUEVO v2.2.0)
// ============================================================================
// Si el CV tiene "Node.js", implícitamente tiene "JavaScript"
// Si la oferta pide "Next.js", implícitamente requiere "React" y "JavaScript"

const TECH_FAMILY = {
    // Frameworks implican su ecosistema
    'react': ['javascript', 'html', 'css'],
    'reactnative': ['javascript', 'react', 'mobile'],
    'nextjs': ['react', 'javascript', 'frontend', 'ssr'],
    'nuxtjs': ['vue', 'javascript', 'frontend', 'ssr'],
    'angular': ['typescript', 'javascript', 'frontend'],
    'vue': ['javascript', 'html', 'css', 'frontend'],
    'svelte': ['javascript', 'frontend'],
    
    // Backend implica lenguaje
    'node': ['javascript', 'backend'],
    'express': ['node', 'javascript', 'backend'],
    'nestjs': ['node', 'typescript', 'javascript', 'backend'],
    'django': ['python', 'backend'],
    'flask': ['python', 'backend'],
    'fastapi': ['python', 'backend'],
    'spring': ['java', 'backend'],
    'springboot': ['java', 'spring', 'backend'],
    'rails': ['ruby', 'backend'],
    'laravel': ['php', 'backend'],
    'aspnet': ['csharp', 'dotnet', 'backend'],
    'dotnetcore': ['csharp', 'dotnet', 'backend'],
    
    // Bases de datos implican SQL/NoSQL
    'postgresql': ['sql', 'database'],
    'mysql': ['sql', 'database'],
    'mssql': ['sql', 'database'],
    'oracle': ['sql', 'database'],
    'mongodb': ['nosql', 'database'],
    'dynamodb': ['nosql', 'aws', 'database'],
    'redis': ['nosql', 'cache', 'database'],
    'cassandra': ['nosql', 'database'],
    'firebase': ['nosql', 'googlecloud', 'database'],
    
    // Cloud implica conceptos
    'aws': ['cloud', 'devops'],
    'googlecloud': ['cloud', 'devops'],
    'azure': ['cloud', 'devops', 'microsoft'],
    'docker': ['container', 'devops'],
    'kubernetes': ['container', 'orchestration', 'devops'],
    'terraform': ['iac', 'devops', 'infrastructure'],
    'ansible': ['iac', 'devops', 'automation'],
    'jenkins': ['cicd', 'devops', 'automation'],
    'githubactions': ['cicd', 'devops', 'automation'],
    
    // Testing implica QA
    'jest': ['testing', 'javascript'],
    'cypress': ['testing', 'e2e', 'javascript'],
    'selenium': ['testing', 'e2e', 'automation'],
    'playwright': ['testing', 'e2e', 'automation'],
    
    // Data Science implica estadística
    'tensorflow': ['machinelearning', 'python', 'deeplearning'],
    'pytorch': ['machinelearning', 'python', 'deeplearning'],
    'pandas': ['datascience', 'python', 'analytics'],
    'numpy': ['datascience', 'python', 'analytics'],
    'tableau': ['analytics', 'visualization', 'businessintelligence'],
    'powerbi': ['analytics', 'visualization', 'businessintelligence', 'microsoft'],
    
    // Mobile
    'swift': ['ios', 'mobile', 'apple'],
    'kotlin': ['android', 'mobile', 'java'],
    'reactnative': ['mobile', 'crossplatform'],
    'flutter': ['dart', 'mobile', 'crossplatform', 'google'],
    
    // Security
    'jwt': ['security', 'authentication', 'web'],
    'oauth': ['security', 'authentication', 'authorization'],
    'pentesting': ['security', 'cybersecurity', 'testing'],
    'owasp': ['security', 'cybersecurity', 'web'],
    
    // ERP/CRM
    'sap': ['erp', 'enterprise', 'business'],
    'salesforce': ['crm', 'cloud', 'enterprise'],
    'dynamics': ['crm', 'erp', 'microsoft', 'enterprise']
};

// ============================================================================
// 4. NIVELES DE IDIOMA (Completo con certificaciones profesionales)
// ============================================================================

const LANGUAGE_LEVELS = {
    // Español
    "nativo": 5, "nativa": 5,
    "lengua materna": 5, "materna": 5,
    "avanzado": 4, "avanzada": 4,
    "fluido": 4, "fluida": 4,
    "profesional": 3.8, "working proficiency": 3.8,
    "tecnico": 3.5, "tecnica": 3.5, "técnico": 3.5, "técnica": 3.5,
    "intermedio": 3, "intermedia": 3,
    "basico": 2, "basica": 2, "básico": 2, "básica": 2,
    "principiante": 1.5, "inicial": 1.5, "beginner": 1.5,
    "ninguno": 0, "no": 0, "none": 0,
    
    // Inglés
    "native": 5, "native speaker": 5,
    "fluent": 4, "full professional": 4,
    "advanced": 4,
    "technical": 3.5, "business": 3.5,
    "intermediate": 3, "conversational": 3,
    "basic": 2, "elementary": 2,
    "beginner": 1.5,
    
    // Marco Común Europeo (MCER)
    "c2": 5, "c1": 4, "b2": 3, "b1": 2.5, "a2": 2, "a1": 1.5,
    
    // TOEFL iBT
    "toefl 100": 4, "toefl 110": 4.5, "toefl 120": 5,
    "toefl 90": 3.5, "toefl 80": 3, "toefl 70": 2.5, "toefl 60": 2,
    
    // IELTS
    "ielts 7": 4, "ielts 8": 4.5, "ielts 9": 5,
    "ielts 6.5": 3.5, "ielts 6": 3, "ielts 5.5": 2.5, "ielts 5": 2,
    
    // Cambridge
    "cae": 4, "cpe": 5, "fce": 3, "pet": 2, "ket": 1.5,
    
    // DELE (Español)
    "dele c2": 5, "dele c1": 4, "dele b2": 3, "dele b1": 2.5, "dele a2": 2, "dele a1": 1.5,
    
    // DELF/DALF (Francés)
    "dalf c2": 5, "dalf c1": 4, "delf b2": 3, "delf b1": 2.5, "delf a2": 2, "delf a1": 1.5,
    
    // Goethe (Alemán)
    "goethe c2": 5, "goethe c1": 4, "goethe b2": 3, "goethe b1": 2.5, "goethe a2": 2, "goethe a1": 1.5,
    
    // Multilingüe
    "bilingual": 4.5, "trilingual": 4.5, "multilingual": 4, "polyglot": 4.5,
    
    // Fallback
    "null": 0, "undefined": 0, "": 0, "no especificado": 0
};

// ============================================================================
// 5. NIVELES DE SKILL (NUEVO v2.2.0)
// ============================================================================

const SKILL_LEVELS = {
    "experto": 5, "expert": 5, "maestro": 5, "master": 5,
    "avanzado": 4, "advanced": 4, "senior": 4, "sr": 4,
    "proficient": 3.5, "competente": 3.5, "competent": 3.5,
    "intermedio": 3, "intermediate": 3, "mid": 3, "ssr": 3, "semi-senior": 3,
    "basico": 2, "basica": 2, "básico": 2, "básica": 2, "basic": 2, "junior": 2, "jr": 2,
    "principiante": 1, "inicial": 1, "beginner": 1, "novice": 1, "trainee": 1, "aprendiz": 1,
    "ninguno": 0, "none": 0, "no": 0, "null": 0, "undefined": 0, "": 0
};

// ============================================================================
// 6. HELPERS
// ============================================================================

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeText(text) {
    if (!text) return "";
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, " ")
        .replace(/[\u200B-\u200D\uFEFF]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function standardizeText(text) {
    let clean = normalizeText(text);
    for (let alias of SORTED_ALIAS_KEYS) {
        if (clean.includes(alias)) {
            const target = ALIAS_DICTIONARY[alias];
            const regex = new RegExp(`\\b${escapeRegex(alias)}\\b`, 'g');
            clean = clean.replace(regex, target);
        }
    }
    return clean;
}

// ============================================================================
// 7. ONTOLOGÍA GLOBAL DE HABILIDADES Y OCUPACIONES (ESCO / O*NET CROSSWALK)
// ============================================================================

const ESCO_ONET_TAXONOMY = {
    'esco_2512': {
        code: 'ESCO:2512 / O*NET:15-1252.00',
        preferredLabel: 'Software Developer',
        aliases: ['desarrollador de software', 'software engineer', 'ingeniero de software', 'programador', 'software architect', 'full stack developer'],
        category: 'Information and Communications Technology',
        subSkills: ['javascript', 'python', 'java', 'c#', 'sql', 'git', 'docker', 'ci/cd', 'rest api', 'microservices']
    },
    'esco_2511': {
        code: 'ESCO:2511 / O*NET:15-1211.00',
        preferredLabel: 'Systems Analyst',
        aliases: ['analista de sistemas', 'analista funcional', 'systems engineer', 'it analyst'],
        category: 'Information and Communications Technology',
        subSkills: ['uml', 'requirements analysis', 'scrum', 'agile', 'database design', 'bpm']
    },
    'esco_2521': {
        code: 'ESCO:2521 / O*NET:15-1242.00',
        preferredLabel: 'Database Designer and Administrator',
        aliases: ['dba', 'administrador de base de datos', 'database administrator', 'ingeniero de datos', 'data engineer'],
        category: 'Data Management & Architecture',
        subSkills: ['postgresql', 'mysql', 'oracle', 'mongodb', 'etl', 'sql optimization', 'redis', 'data warehouse']
    },
    'esco_2513': {
        code: 'ESCO:2513 / O*NET:15-1254.00',
        preferredLabel: 'Web and Multimedia Developer',
        aliases: ['frontend developer', 'desarrollador frontend', 'web designer', 'ui/ux developer'],
        category: 'Design and Web Technologies',
        subSkills: ['html5', 'css3', 'react', 'angular', 'vue', 'typescript', 'responsive design', 'sass']
    },
    'esco_2529': {
        code: 'ESCO:2529 / O*NET:15-1244.00',
        preferredLabel: 'Network and Computer Systems Administrator',
        aliases: ['devops engineer', 'cloud engineer', 'sre', 'ingeniero de infraestructura', 'sysadmin'],
        category: 'Cloud Infrastructure & Security',
        subSkills: ['aws', 'azure', 'gcp', 'kubernetes', 'terraform', 'ansible', 'linux', 'bash']
    },
    'esco_2120': {
        code: 'ESCO:2120 / O*NET:15-2051.00',
        preferredLabel: 'Data Scientist and AI Specialist',
        aliases: ['cientifico de datos', 'machine learning engineer', 'ai engineer', 'investigador de ia'],
        category: 'Artificial Intelligence & Advanced Analytics',
        subSkills: ['machine learning', 'deep learning', 'pandas', 'tensorflow', 'pytorch', 'nlp', 'scikit-learn', 'r']
    }
};

const MULTILINGUAL_STOPWORDS = {
    es: new Set(['de', 'la', 'que', 'el', 'en', 'y', 'a', 'los', 'del', 'se', 'las', 'por', 'un', 'para', 'con', 'no', 'una', 'su', 'al', 'lo', 'como', 'mas', 'pero', 'sus', 'le', 'ya', 'o', 'este', 'ha', 'si', 'sobre', 'esta', 'son', 'entre', 'esta', 'cuando', 'muy', 'sin', 'sobre', 'tambien', 'me', 'hasta', 'hay', 'donde', 'quien', 'desde', 'todo', 'nos', 'durante', 'todos', 'uno', 'les', 'ni', 'contra', 'otros', 'ese', 'eso', 'ante', 'ellos', 'e', 'esto', 'mi', 'antes', 'algunos', 'que', 'unos', 'yo', 'otro', 'otras', 'otra', 'el', 'tanto', 'esa', 'estos', 'mucho', 'quienes', 'nada', 'muchos', 'cual', 'sea', 'poco', 'ella', 'estar', 'haber', 'estas', 'estaba', 'estamos', 'algunas', 'algo', 'nosotros']),
    en: new Set(['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now']),
    pt: new Set(['de', 'a', 'o', 'que', 'e', 'do', 'da', 'em', 'um', 'para', 'com', 'nao', 'uma', 'os', 'no', 'se', 'na', 'por', 'mais', 'as', 'dos', 'como', 'mas', 'ao', 'ele', 'das', 'sua', 'seu', 'suas', 'seus']),
    fr: new Set(['de', 'la', 'le', 'les', 'et', 'des', 'en', 'un', 'une', 'du', 'dans', 'pour', 'qui', 'est', 'que', 'avec', 'par', 'sur', 'ce', 'au', 'sont', 'pas', 'aux', 'ont'])
};

function detectLanguage(text) {
    if (!text) return 'es';
    const clean = normalizeText(text).toLowerCase();
    const words = clean.split(/\s+/).slice(0, 200);
    const scores = { es: 0, en: 0, pt: 0, fr: 0 };
    words.forEach(w => {
        if (MULTILINGUAL_STOPWORDS.es.has(w)) scores.es++;
        if (MULTILINGUAL_STOPWORDS.en.has(w)) scores.en++;
        if (MULTILINGUAL_STOPWORDS.pt.has(w)) scores.pt++;
        if (MULTILINGUAL_STOPWORDS.fr.has(w)) scores.fr++;
    });
    let maxLang = 'es';
    let maxCount = scores.es;
    for (let lang of ['en', 'pt', 'fr']) {
        if (scores[lang] > maxCount) {
            maxCount = scores[lang];
            maxLang = lang;
        }
    }
    return maxLang;
}

// ============================================================================
// 8. EXPORTS
// ============================================================================

if (typeof window !== 'undefined') {
    window.TITLE_EQUIVALENCE = TITLE_EQUIVALENCE;
    window.ALIAS_DICTIONARY = ALIAS_DICTIONARY;
    window.SORTED_ALIAS_KEYS = SORTED_ALIAS_KEYS;
    window.LANGUAGE_LEVELS = LANGUAGE_LEVELS;
    window.SKILL_LEVELS = SKILL_LEVELS;
    window.TECH_FAMILY = TECH_FAMILY;
    window.ESCO_ONET_TAXONOMY = ESCO_ONET_TAXONOMY;
    window.MULTILINGUAL_STOPWORDS = MULTILINGUAL_STOPWORDS;
    window.detectLanguage = detectLanguage;
    window.escapeRegex = escapeRegex;
    window.normalizeText = normalizeText;
    window.standardizeText = standardizeText;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        TITLE_EQUIVALENCE, 
        ALIAS_DICTIONARY, 
        SORTED_ALIAS_KEYS,
        LANGUAGE_LEVELS,
        SKILL_LEVELS,
        TECH_FAMILY,
        ESCO_ONET_TAXONOMY,
        MULTILINGUAL_STOPWORDS,
        detectLanguage,
        escapeRegex,
        normalizeText,
        standardizeText
    };
}