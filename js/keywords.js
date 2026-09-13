/**
 * ============================================================================
 * MULTI-DOMAIN SKILLS TAXONOMY & KEYWORDS (keywords.js) v2.2.0
 * ============================================================================
 * MEJORAS:
 * - Taxonomías separadas por dominio (tech, salud, legal, etc.)
 * - Función de filtrado por dominio detectado
 * - Sinónimos y variantes regionales
 * - Stopwords ampliadas
 */

// ============================================================================
// 1. TAXONOMÍA POR DOMINIO
// ============================================================================

const DOMAIN_TAXONOMIES = {
    // =========================================================================
    // TECNOLOGÍA, SOFTWARE & SISTEMAS
    // =========================================================================
    tecnologia: {
        hard: [
            // Lenguajes
            'javascript', 'typescript', 'python', 'java', 'c++', 'cpp', 'c#', 'csharp', 'go', 'golang', 
            'rust', 'php', 'ruby', 'kotlin', 'swift', 'dart', 'scala', 'rlang', 'matlab', 'bash', 
            'powershell', 'shell', 'perl', 'lua', 'groovy', 'objective-c', 'vb.net', 'f#', 'haskell',
            'clojure', 'erlang', 'elixir', 'julia', 'cobol', 'fortran', 'assembly',
            
            // Frontend
            'react', 'vue', 'angular', 'svelte', 'nextjs', 'nuxtjs', 'jquery', 'ember', 'backbone',
            'html', 'html5', 'css', 'css3', 'sass', 'less', 'tailwind', 'bootstrap', 'materialui',
            'styledcomponents', 'chakra', 'antdesign', 'semanticui', 'foundation',
            'redux', 'zustand', 'mobx', 'recoil', 'contextapi', 'flux',
            'webpack', 'vite', 'rollup', 'parcel', 'esbuild', 'gulp', 'grunt',
            'pwa', 'spa', 'ssr', 'csr', 'hydration', 'webcomponents', 'shadowdom',
            
            // Backend
            'node', 'express', 'nestjs', 'fastify', 'koa', 'hapi',
            'django', 'flask', 'fastapi', 'tornado', 'pyramid',
            'spring', 'springboot', 'struts', 'hibernate', 'jakartaee',
            'rails', 'sinatra', 'aspnet', 'dotnetcore', 'blazor', 'webapi',
            'laravel', 'symfony', 'codeigniter', 'cakephp', 'zend',
            'graphql', 'restapi', 'grpc', 'soap', 'websocket', 'socketio',
            'microservices', 'monolith', 'serverless', 'cleanarchitecture', 'solid',
            'ddd', 'eventdriven', 'cqrs', 'event sourcing', 'saga pattern',
            
            // Bases de Datos
            'postgresql', 'mysql', 'mssql', 'oracle', 'sqlite', 'mariadb',
            'mongodb', 'dynamodb', 'cassandra', 'couchdb', 'neo4j', 'arangodb',
            'redis', 'memcached', 'elasticsearch', 'solr', 'sphinx',
            'firebase', 'firestore', 'supabase', 'prisma', 'sequelize', 'typeorm',
            'mongoose', 'sqlalchemy', 'hibernate', 'jpa', 'jdbc', 'odbc',
            
            // Cloud & DevOps
            'aws', 'googlecloud', 'azure', 'ibmcloud', 'oraclecloud', 'digitalocean', 'linode',
            'docker', 'kubernetes', 'openshift', 'rancher', 'nomad',
            'terraform', 'pulumi', 'cloudformation', 'ansible', 'chef', 'puppet', 'saltstack',
            'jenkins', 'githubactions', 'gitlabci', 'circleci', 'travisci', 'bamboo', 'teamcity',
            'prometheus', 'grafana', 'elk', 'efk', 'datadog', 'newrelic', 'splunk',
            'nginx', 'apache', 'iis', 'caddy', 'traefik', 'haproxy',
            'linux', 'ubuntu', 'centos', 'debian', 'redhat', 'fedora', 'arch', 'alpine',
            'windows server', 'active directory', 'powershell', 'bash', 'zsh',
            // Control de versiones y herramientas de colaboración
            'git', 'github', 'gitlab', 'bitbucket', 'svn', 'mercurial',
            'jira', 'confluence', 'notion', 'trello', 'asana', 'linear', 'monday',
            'slack', 'teams', 'discord',

            // Testing & QA (ampliado)
            'testing', 'jest', 'cypress', 'selenium', 'playwright', 'mocha', 'chai', 'jasmine',
            'junit', 'testng', 'pytest', 'unittest', 'nose', 'robot framework',
            'cucumber', 'gherkin', 'bdd', 'tdd', 'atdd', 'pruebas unitarias', 'pruebas de integracion',
            'pruebas de rendimiento', 'pruebas e2e', 'pruebas de regresion',
            'sonarqube', 'codecov', 'istanbul', 'nyc',
            'jmeter', 'k6', 'gatling', 'locust', 'artillery',
            'postman', 'thunder client', 'insomnia', 'swagger', 'openapi',

            // Seguridad / Auth
            'jwt', 'oauth', 'oauth2', 'openid', 'saml', 'ldap', 'kerberos',
            'bcrypt', 'argon2', 'hashlib', 'pbkdf2',
            'rbac', 'control de acceso', 'control de acceso por roles', 'permisos', 'roles',
            'cors', 'csp', 'csrf', 'xss', 'owasp',
            'vault', 'certmanager', 'letsencrypt', 'ssl', 'tls',
            'autenticacion', 'autorizacion', 'sesiones', 'control de sesiones',
            'waf', 'bot detection', 'fraud detection',
            
            // Data & Analytics
            'sql', 'excel', 'dashboard', 'dashboards', 'inteligencia artificial', 'ia', 'power bi', 'powerbi',
            'analisis de datos', 'business intelligence', 'bi', 'etl', 'limpieza de datos', 'depuracion de datos',
            'machinelearning', 'deeplearning', 'neuralnetworks', 'nlp', 'computervision',
            'tensorflow', 'pytorch', 'keras', 'scikitlearn', 'xgboost', 'lightgbm', 'catboost',
            'pandas', 'numpy', 'scipy', 'matplotlib', 'seaborn', 'plotly', 'bokeh',
            'jupyter', 'zeppelin', 'databricks', 'snowflake', 'bigquery', 'redshift',
            'kafka', 'rabbitmq', 'activemq', 'zeromq', 'sqs', 'sns', 'eventbridge',
            'airflow', 'prefect', 'dagster', 'luigi', 'nifi', 'streamsets',
            'spark', 'hadoop', 'hive', 'pig', 'flink', 'storm', 'samza',
            'tableau', 'looker', 'qlik', 'microstrategy', 'sisense',
            
            // Mobile
            'ios', 'android', 'reactnative', 'flutter', 'xamarin', 'ionic', 'cordova', 'phonegap',
            'swift', 'objectivec', 'kotlin', 'java mobile',
            'appstore', 'googleplay', 'testflight', 'firebase app distribution',
            
            // Game Dev
            'unity', 'unreal', 'godot', 'cryengine', 'gamemaker',
            'csharp gamedev', 'c++ gamedev', 'lua gamedev',
            'blender', 'maya', '3dsmax', 'zbrush', 'substance',
            
            // Blockchain / Web3
            'blockchain', 'ethereum', 'solidity', 'rust blockchain', 'hyperledger',
            'smart contracts', 'defi', 'nft', 'web3', 'ipfs',
            'hardhat', 'truffle', 'foundry', 'remix', 'ethers.js', 'web3.js'
        ],
        soft: [
            // Liderazgo y equipo
            'liderazgo', 'leadership', 'trabajo en equipo', 'teamwork', 'colaboracion', 'collaboration',
            'comunicacion', 'comunicación', 'communication', 'comunicacion asertiva', 'escucha activa',
            'mentoria', 'mentorship', 'coaching', 'feedback', 'onboarding',
            // Pensamiento y razonamiento
            'resolucion de problemas', 'resolución de problemas', 'problem solving',
            'pensamiento critico', 'pensamiento crítico', 'critical thinking',
            'pensamiento analitico', 'pensamiento analítico', 'analytical thinking',
            'capacidad de analisis', 'capacidad de análisis', 'analysis skills',
            'razonamiento logico', 'logical reasoning', 'pensamiento sistemico',
            // Trabajo y productividad
            'proactividad', 'proactivity', 'iniciativa', 'initiative', 'autonomia', 'autonomy',
            'adaptabilidad', 'adaptability', 'flexibilidad', 'flexibility',
            'gestion del tiempo', 'gestión del tiempo', 'time management', 'organizacion', 'organization',
            'atencion al detalle', 'atención al detalle', 'attention to detail', 'meticulosidad',
            'orientacion a resultados', 'orientación a resultados', 'results oriented',
            'impacto en el negocio', 'impacto real', 'business impact',
            // Gestión de proyectos
            'gestion de proyectos', 'project management', 'planificacion', 'planning',
            'metodologias agiles', 'agile', 'scrum', 'kanban', 'sprint',
            'gestion de conflictos', 'conflict resolution', 'manejo de presion', 'trabajo bajo presion',
            // Crecimiento
            'autodidacta', 'autoaprendizaje', 'self-taught', 'aprendizaje continuo', 'continuous learning',
            'inteligencia emocional', 'emotional intelligence', 'empatia', 'empathy',
            'creatividad', 'creativity', 'innovacion', 'innovation',
            'negociacion', 'negotiation'
        ],
        roleLevels: ['practicante', 'pasante', 'intern', 'trainee', 'junior', 'jr', 'semi-senior', 'ssr', 'mid', 'senior', 'sr', 'lead', 'principal', 'staff', 'manager', 'director', 'vp', 'cto', 'cio', 'ceo']
    },

    // =========================================================================
    // SALUD & CIENCIAS
    // =========================================================================
    salud: {
        hard: [
            'enfermeria', 'medicina', 'cirugia', 'pediatria', 'cardiologia', 'neurologia', 'oncologia',
            'urgencias', 'uci', 'uci neonatal', 'quirofano', 'anestesiologia', 'radiologia',
            'fisioterapia', 'terapia ocupacional', 'fonoaudiologia', 'nutricion', 'psicologia clinica',
            'farmacia', 'farmacologia', 'bioquimica', 'microbiologia', 'inmunologia', 'genetica',
            'historia clinica electronica', 'epic', 'cerner', 'allscripts', 'meditech',
            'dicom', 'pacs', 'his', 'ris', 'lims',
            'triaje', 'soporte vital basico', 'soporte vital avanzado', 'bls', 'acls', 'pals', 'tncc',
            'vacunacion', 'inmunizacion', 'control de infecciones', 'esterilizacion',
            'gestion de calidad en salud', 'acreditacion joint commission', 'iso 15189',
            'investigacion clinica', 'ensayos clinicos', 'gcp', 'ich guidelines',
            'telemedicina', 'telesalud', 'salud digital', 'mhealth', 'wearables'
        ],
        soft: [
            'empatia', 'paciencia', 'comunicacion con pacientes', 'trabajo bajo presion',
            'etica profesional', 'confidencialidad', 'trabajo multidisciplinario', 'liderazgo en crisis'
        ],
        roleLevels: ['interno', 'residente', 'fellow', 'especialista', 'medico general', 'jefe de servicio', 'director medico', 'subdirector medico']
    },

    // =========================================================================
    // DERECHO & LEGAL
    // =========================================================================
    legal: {
        hard: [
            'derecho corporativo', 'derecho laboral', 'derecho tributario', 'derecho penal',
            'derecho civil', 'derecho mercantil', 'derecho internacional', 'derecho ambiental',
            'derecho de propiedad intelectual', 'derecho de competencia', 'derecho de consumo',
            'contratos', 'negociacion de contratos', 'due diligence', 'compliance', 'regulatory',
            'litigio', 'arbitraje', 'mediacion', 'procesal', 'recursos',
            'registro de marcas', 'patentes', 'derechos de autor', 'licencias',
            'normativa sox', 'gdpr', 'lgpd', 'ley de proteccion de datos', 'privacidad',
            'fusiones y adquisiciones', 'm&a', 'reestructuracion', 'quiebras', 'insolvencia',
            'notariado', 'escrituras publicas', 'poderes', 'testamentos',
            'lexnet', 'poder judicial', 'ministerio publico', 'defensoria'
        ],
        soft: [
            'argumentacion', 'redaccion legal', 'negociacion', 'analisis juridico',
            'atencion al detalle', 'confidencialidad', 'etica profesional', 'pensamiento critico'
        ],
        roleLevels: ['pasante legal', 'abogado junior', 'abogado', 'abogado senior', 'socio', 'of counsel', 'consejero legal', 'compliance officer', 'general counsel']
    },

    // =========================================================================
    // EDUCACIÓN
    // =========================================================================
    educacion: {
        hard: [
            'pedagogia', 'didactica', 'curriculum design', 'diseno curricular', 'syllabus',
            'evaluacion educativa', 'rubricas', 'estandares de aprendizaje', 'competencias',
            'tecnologia educativa', 'edtech', 'e-learning', 'blended learning', 'flipped classroom',
            'moodle', 'blackboard', 'canvas', 'google classroom', 'microsoft teams educacion',
            'zoom educacion', 'kahoot', 'genially', 'nearpod', 'padlet',
            'educacion inclusiva', 'necesidades educativas especiales', 'nees',
            'psicologia educativa', 'orientacion educativa', 'tutoria', 'mentoria academica',
            'gestion educativa', 'direccion de colegio', 'rectoria', 'coordinacion academica',
            'acreditacion', 'sineace', 'licenciamiento', 'rankings universitarios',
            'investigacion educativa', 'publicacion academica', 'scopus', 'web of science', 'orcid'
        ],
        soft: [
            'paciencia', 'empatia', 'comunicacion clara', 'motivacion', 'liderazgo pedagogico',
            'adaptabilidad', 'creatividad', 'trabajo en equipo docente', 'gestion de aula'
        ],
        roleLevels: ['ayudante de catedra', 'profesor adjunto', 'profesor asociado', 'profesor titular', 'coordinador academico', 'director de programa', 'decano', 'vicerrector', 'rector']
    },

    // =========================================================================
    // DISEÑO, UX/UI, MULTIMEDIA
    // =========================================================================
    diseno: {
        hard: [
            'figma', 'sketch', 'adobe xd', 'invision', 'framer', 'proto.io', 'marvel',
            'photoshop', 'illustrator', 'indesign', 'lightroom', 'after effects', 'premiere pro',
            'blender', 'cinema 4d', 'maya', '3ds max', 'zbrush', 'substance painter',
            'ux research', 'user research', 'design thinking', 'service design', 'design sprint',
            'arquitectura de informacion', 'information architecture', 'card sorting', 'tree testing',
            'prototipado', 'wireframing', 'mockups', 'storyboarding', 'journey mapping',
            'design systems', 'atomic design', 'material design', 'human interface guidelines',
            'accessibility', 'wcag', 'section 508', 'inclusive design', 'responsive design',
            'motion design', 'animation', 'microinteractions', 'lottie',
            'branding', 'identidad corporativa', 'naming', 'packaging', 'editorial'
        ],
        soft: [
            'creatividad', 'empatia con usuario', 'comunicacion visual', 'pensamiento critico',
            'recepcion de feedback', 'colaboracion multidisciplinaria', 'gestion de stakeholders'
        ],
        roleLevels: ['pasante de diseno', 'junior designer', 'designer', 'mid designer', 'senior designer', 'lead designer', 'design director', 'head of design', 'vp of design']
    },

    // =========================================================================
    // MARKETING, VENTAS & CRECIMIENTO
    // =========================================================================
    marketing: {
        hard: [
            'seo', 'sem', 'google ads', 'google analytics 4', 'google tag manager', 'google search console',
            'meta ads', 'facebook ads', 'instagram ads', 'tiktok ads', 'linkedin ads', 'twitter ads',
            'programmatic advertising', 'rtb', 'dsp', 'ssp', 'adserver', 'google ad manager',
            'marketing automation', 'hubspot', 'marketo', 'pardot', 'mailchimp', 'klaviyo', 'activecampaign',
            'email marketing', 'sms marketing', 'push notifications', 'whatsapp business api',
            'content marketing', 'copywriting', 'storytelling', 'brand journalism', 'native advertising',
            'influencer marketing', 'affiliate marketing', 'referral marketing', 'loyalty programs',
            'crm marketing', 'segmentation', 'personalization', 'dynamic content',
            'growth hacking', 'a/b testing', 'conversion rate optimization', 'cro', 'funnel optimization',
            'social media management', 'community management', 'social listening', 'reputation management',
            'e-commerce', 'shopify', 'woocommerce', 'magento', 'prestashop', 'bigcommerce',
            'marketplace management', 'amazon seller', 'mercadolibre', 'linio', 'falabella',
            'analytics', 'data studio', 'looker studio', 'supermetrics', 'powerbi marketing'
        ],
        soft: [
            'creatividad', 'pensamiento estrategico', 'analisis de datos', 'comunicacion persuasiva',
            'gestion de presupuesto', 'negociacion con proveedores', 'trabajo con agencias'
        ],
        roleLevels: ['pasante de marketing', 'assistant brand manager', 'brand manager', 'senior brand manager', 'marketing manager', 'head of marketing', 'cmo', 'vp of marketing']
    },

    // =========================================================================
    // ADMINISTRACIÓN, FINANZAS & CONTABILIDAD
    // =========================================================================
    finanzas: {
        hard: [
            'contabilidad general', 'contabilidad de costos', 'contabilidad financiera', 'contabilidad tributaria',
            'estados financieros', 'balance general', 'estado de resultados', 'flujo de efectivo',
            'auditoria interna', 'auditoria externa', 'auditoria forense', 'auditoria operativa',
            'niif', 'ifrs', 'us gaap', 'pcga', 'sunat', 'sat', 'afip', 'sii',
            'impuestos', 'renta', 'iva', 'igv', 'isr', 'predial', 'municipal',
            'tesoreria', 'caja y bancos', 'conciliaciones bancarias', 'gestion de credito y cobranza',
            'presupuestos', 'forecast', 'budget', 'variance analysis', 'rolling forecast',
            'costos', 'abc costing', 'standard costing', 'job costing', 'process costing',
            'kpi financieros', 'roi', 'roa', 'roe', 'ebitda', 'ebit', 'wacc', 'npv', 'irr',
            'excel avanzado', 'excel', 'powerbi', 'tableau', 'qlik', 'sap fico', 'oracle financials',
            'quickbooks', 'xero', 'freshbooks', 'wave', 'contpaq', 'tally',
            'planilla', 'nomina', 'compensacion y beneficios', 'seguridad social',
            'fusiones y adquisiciones', 'valuation', 'due diligence financiera', 'modelos financieros',
            'financiamiento', 'leasing', 'factoring', 'securitization', 'project finance',
            'riesgo financiero', 'market risk', 'credit risk', 'operational risk', 'basel'
        ],
        soft: [
            'etica profesional', 'confidencialidad', 'atencion al detalle', 'analisis numerico',
            'comunicacion de resultados', 'negociacion', 'gestion de stakeholders'
        ],
        roleLevels: ['auxiliar contable', 'analista contable', 'contador', 'senior accountant', 'accounting manager', 'controller', 'cfo', 'vp of finance', 'treasurer']
    },

    // =========================================================================
    // RECURSOS HUMANOS
    // =========================================================================
    rrhh: {
        hard: [
            'reclutamiento', 'seleccion de personal', 'headhunting', 'executive search',
            'sourcing', 'screening', 'entrevista por competencias', 'assessment center',
            'psychometric testing', 'pruebas psicometricas', 'disc', 'mbti', 'hogan', '16pf',
            'onboarding', 'induccion', 'plan de bienvenida', 'buddy system',
            'desarrollo organizacional', 'od', 'cambio organizacional', 'change management',
            'clima organizacional', 'engagement', 'encuesta de clima', 'pulse survey',
            'evaluacion de desempeno', 'performance review', 'okrs', 'kpis de rrhh',
            'plan de carrera', 'succession planning', 'talent review', 'nine box grid',
            'compensacion y beneficios', 'salary benchmarking', 'payroll', 'planilla',
            'ley laboral', 'contratos laborales', 'finiquito', 'liquidacion', 'despido',
            'seguridad social', 'eps', 'arl', 'caja de compensacion', 'fondo de pensiones',
            'capacitacion', 'training needs analysis', 'lms', 'cornerstone', 'sumtotal',
            'hr analytics', 'people analytics', 'workforce planning', 'turnover analysis',
            'sap successfactors', 'workday', 'oracle hcm', 'adp', 'bamboohr', 'greenhouse', 'lever'
        ],
        soft: [
            'empatia', 'confidencialidad', 'comunicacion interpersonal', 'negociacion',
            'resolucion de conflictos', 'tacto', 'discrecion', 'orientacion a personas'
        ],
        roleLevels: ['asistente de rrhh', 'analista de rrhh', 'generalista de rrhh', 'hr business partner', 'hr manager', 'hr director', 'chro', 'vp of people']
    },

    // =========================================================================
    // INGENIERÍA (No-TI)
    // =========================================================================
    ingenieria: {
        hard: [
            'autocad', 'revit', 'revit bim', 's10', 's10 costos y presupuestos', 'ms project', 'microsoft project', 'excel',
            'metrados', 'valorizaciones', 'metrados y valorizaciones', 'control de calidad de concreto', 'ensayos de suelos',
            'normativa tecnica de edificacion', 'normativas tecnicas', 'hseq', 'seguridad hseq',
            'solidworks', 'catia', 'inventor', 'fusion 360',
            'ansys', 'abaqus', 'comsol', 'matlab simulink', 'labview',
            'primavera p6', 'projectlibre', 'astapowerproject',
            'lean manufacturing', 'six sigma', 'green belt', 'black belt', 'master black belt',
            'iso 9001', 'iso 14001', 'iso 45001', 'iso 50001', 'iso 27001',
            'seguridad industrial', 'ergonomia', 'higiene ocupacional',
            'mantenimiento predictivo', 'mantenimiento preventivo', 'rcm', 'fmea', 'rcfa',
            'scada', 'plc', 'dcs', 'hmi', 'industrial iot', 'industry 4.0',
            'cadena de suministro', 'supply chain', 'logistica', 'transporte', 'almacen',
            'control de calidad', 'inspeccion', 'metrologia', 'ensayos destructivos', 'ndt',
            'proyectos de ingenieria', 'ingenieria de valor', 'value engineering', 've',
            'bim', 'building information modeling', 'clash detection', '4d simulation',
            'geotecnia', 'mecanica de suelos', 'estructuras', 'concreto', 'acero', 'mamposteria',
            'hidraulica', 'hidrologia', 'drenaje', 'saneamiento', 'tratamiento de aguas',
            'electrica', 'potencia', 'subestaciones', 'lineas de transmision', 'distribucion',
            'mecanica', 'termica', 'refrigeracion', 'hvac', 'neumatica', 'hidraulica industrial'
        ],
        soft: [
            'pensamiento sistemico', 'gestion de proyectos tecnicos', 'trabajo de campo',
            'comunicacion tecnica', 'gestion de contratistas', 'cumplimiento normativo',
            'liderazgo', 'trabajo en equipo', 'resolucion de problemas', 'gestion de proyectos',
            'proactividad', 'atencion al detalle', 'orientacion a resultados', 'planificacion'
        ],
        roleLevels: ['ingeniero junior', 'ingeniero', 'ingeniero senior', 'jefe de proyecto', 'jefe de area', 'gerente de ingenieria', 'director tecnico', 'vp of engineering']
    },

    // =========================================================================
    // OPERACIONES & LOGÍSTICA
    // =========================================================================
    operaciones: {
        hard: [
            'gestion de operaciones', 'operations management', 'lean', 'kaizen', '5s', 'tpn',
            'planificacion de la demanda', 'demand planning', 's&op', 'ibp',
            'gestion de inventarios', 'wms', 'sap wm', 'manhattan', 'blue yonder',
            'transporte', 'rutas', 'optimizacion de rutas', 'last mile delivery',
            'almacen', 'picking', 'packing', 'crossdocking', 'fulfillment',
            'importacion', 'exportacion', 'aduana', 'comercio exterior', 'incoterms',
            'flota vehicular', 'mantenimiento de flota', 'gestion de combustible',
            'call center', 'contact center', 'wfm', 'workforce management',
            'calidad de servicio', 'slas', 'kpis de operaciones', 'oee', 'teep',
            'business process management', 'bpm', 'process mining', 'celonis',
            'rpa', 'automation anywhere', 'uipath', 'blue prism', 'power automate'
        ],
        soft: [
            'gestion bajo presion', 'toma de decisiones rapidas', 'mejora continua',
            'liderazgo operativo', 'comunicacion con proveedores', 'resolucion de incidencias'
        ],
        roleLevels: ['analista de operaciones', 'supervisor', 'coordinador', 'jefe de operaciones', 'gerente de operaciones', 'director de operaciones', 'coo', 'vp of operations']
    },

    // =========================================================================
    // VENTAS & NEGOCIOS
    // =========================================================================
    ventas: {
        hard: [
            'prospeccion', 'cold calling', 'warm calling', 'social selling', 'linkedin sales navigator',
            'crm', 'salesforce', 'hubspot crm', 'pipedrive', 'zoho crm', 'freshsales',
            'pipeline management', 'forecast de ventas', 'quota management', 'territory management',
            'negociacion', 'cierre de ventas', 'objection handling', 'spin selling', 'challenger sale',
            'account management', 'key account management', 'kam', 'strategic account management',
            'customer success', 'csm', 'nrr', 'mrr', 'arr', 'churn rate', 'ltv', 'cac',
            'presentaciones comerciales', 'demos de producto', 'proof of concept', 'poc',
            'rfp', 'rfi', 'licitaciones', 'contratos marco', 'acuerdos de nivel de servicio',
            'ventas b2b', 'ventas b2c', 'ventas b2b2c', 'channel sales', 'partner sales',
            'retail', 'trade marketing', 'merchandising', 'planogramas', 'categoria',
            'ecommerce', 'marketplace', 'dropshipping', 'affiliate', 'ventas digitales'
        ],
        soft: [
            'resiliencia', 'persistencia', 'comunicacion persuasiva', 'empatia con cliente',
            'orientacion a metas', 'trabajo bajo presion de resultados', 'autonomia'
        ],
        roleLevels: ['pasante de ventas', 'representante de ventas', 'ejecutivo de cuentas', 'account executive', 'senior account executive', 'sales manager', 'regional sales manager', 'director comercial', 'vp of sales', 'cro']
    },

    // =========================================================================
    // PRODUCCIÓN AUDIOVISUAL & MEDIOS
    // =========================================================================
    audiovisual: {
        hard: [
            'premiere pro', 'after effects', 'davinci resolve', 'final cut pro', 'avid',
            'photoshop', 'illustrator', 'lightroom', 'c4d', 'cinema 4d',
            'maya', '3ds max', 'blender', 'houdini', 'nuke', 'fusion',
            'pro tools', 'logic pro', 'ableton live', 'fl studio', 'cubase',
            'produccion musical', 'mezcla', 'mastering', 'foley', 'sound design',
            'direccion de fotografia', 'dp', 'cinematografia', 'color grading', 'lut',
            'produccion ejecutiva', 'line producer', 'production manager', 'ad',
            'guion', 'screenwriting', 'storytelling visual', 'storyboard', 'animatic',
            'motion graphics', 'vfx', 'compositing', 'tracking', 'rotoscopia',
            'streaming', 'live production', 'switcher', 'tricaster', 'vmix', 'obs',
            'youtube', 'tiktok creator', 'instagram reels', 'podcast production'
        ],
        soft: [
            'creatividad visual', 'narrativa', 'trabajo bajo presion de deadlines', 'colaboracion en set',
            'gestion de talento', 'negociacion de derechos', 'adaptabilidad a cambios de ultimo momento'
        ],
        roleLevels: ['asistente de produccion', 'editor junior', 'editor', 'senior editor', 'director de postproduccion', 'productor', 'productor ejecutivo', 'director creativo']
    },

    // =========================================================================
    // TURISMO & HOTELERÍA
    // =========================================================================
    turismo: {
        hard: [
            'reservas', 'sabre', 'amadeus', 'galileo', 'worldspan',
            'revenue management', 'yield management', 'pricing dinamico', 'overbooking',
            'check-in', 'check-out', 'concierge', 'guest relations', 'butler service',
            'housekeeping', 'limpieza', 'mantenimiento de habitaciones', 'room service',
            'eventos', 'banquetes', 'catering', 'wedding planner', 'mice',
            'agencias de viaje', 'tour operador', 'guiado turistico', 'interpretacion',
            'restauracion', 'sommelier', 'cocteleria', 'chef', 'cocina internacional',
            'tripadvisor', 'booking', 'expedia', 'airbnb', 'trivago', 'metasearch',
            'sostenibilidad turistica', 'turismo responsable', 'ecoturismo', 'turismo de aventura'
        ],
        soft: [
            'atencion al cliente', 'multiculturalidad', 'idiomas', 'paciencia', 'resolucion de quejas',
            'trabajo por turnos', 'disponibilidad', 'presentacion personal'
        ],
        roleLevels: ['pasante', 'recepcionista', 'supervisor', 'jefe de area', 'gerente de hotel', 'director de operaciones', 'regional manager', 'vp of hospitality']
    },

    // =========================================================================
    // AGRICULTURA & MEDIO AMBIENTE
    // =========================================================================
    agro: {
        hard: [
            'agronomia', 'fitotecnia', 'zootecnia', 'ingenieria agricola', 'forestal',
            'manejo de cultivos', 'riego tecnificado', 'goteo', 'aspersion', 'pivot',
            'fertilizantes', 'nutricion vegetal', 'fertirrigacion', 'suelos', 'analisis de suelos',
            'plagas', 'manejo integrado de plagas', 'mip', 'agroquimicos', 'bioinsumos',
            'produccion organica', 'certificacion organica', 'globalgap', 'fairtrade', 'rainforest',
            'cadena de frio', 'postcosecha', 'agroindustria', 'transformacion primaria',
            'ganaderia', 'bovinos', 'ovinos', 'porcinos', 'avicola', 'acuicultura',
            'maquinaria agricola', 'tractores', 'cosechadoras', 'drones agricolas', 'precision agriculture',
            'gis', 'teledeteccion', 'sig', 'sistemas de informacion geografica',
            'cambio climatico', 'huella de carbono', 'creditos de carbono', 'sostenibilidad',
            'biodiversidad', 'ecosistemas', 'restauracion ecologica', 'reforestacion'
        ],
        soft: [
            'trabajo de campo', 'resiliencia', 'adaptabilidad climatica', 'gestion de riesgos',
            'trabajo con comunidades rurales', 'sostenibilidad'
        ],
        roleLevels: ['tecnico agricola', 'ingeniero agronomo', 'jefe de campo', 'gerente agricola', 'director de operaciones agricolas', 'vp of agriculture']
    }
};

// ============================================================================
// 2. FUNCIÓN DE FILTRADO POR DOMINIO (NUEVO v2.2.0)
// ============================================================================

function getTaxonomyForDomain(domainKey) {
    const domain = DOMAIN_TAXONOMIES[domainKey.toLowerCase()] || DOMAIN_TAXONOMIES['tecnologia'];
    
    // Extracción y fusión con LocalStorage (sin duplicados)
    let customHard = [];
    let customSoft = [];
    try {
        if (typeof localStorage !== 'undefined') {
            customHard = JSON.parse(localStorage.getItem('custom_keywords_hard_' + domainKey.toLowerCase()) || '[]');
            customSoft = JSON.parse(localStorage.getItem('custom_keywords_soft_' + domainKey.toLowerCase()) || '[]');
        }
    } catch (e) {}

    // Deduplicación limpia mediante Set y canónicos de ALIAS_DICTIONARY
    const deduplicateSkills = (baseList, customList) => {
        const uniqueSet = new Set();
        const result = [];
        [...baseList, ...customList].forEach(skill => {
            if (!skill || typeof skill !== 'string') return;
            const norm = typeof ATS_TextNormalizer !== 'undefined' ? ATS_TextNormalizer.normalize(skill) : skill.toLowerCase().trim();
            const canonical = (typeof ALIAS_DICTIONARY !== 'undefined' && ALIAS_DICTIONARY[norm]) ? ALIAS_DICTIONARY[norm] : norm;
            
            if (!uniqueSet.has(canonical) && canonical.length > 1) {
                uniqueSet.add(canonical);
                result.push(skill);
            }
        });
        return result;
    };

    return {
        hard: deduplicateSkills(domain.hard || [], customHard),
        soft: deduplicateSkills(domain.soft || [], customSoft),
        roleLevels: domain.roleLevels || []
    };
}

function detectDomainFromText(text) {
    const cleanText = text.toLowerCase();
    const scores = {};
    
    Object.keys(DOMAIN_TAXONOMIES).forEach(domain => {
        const taxonomy = DOMAIN_TAXONOMIES[domain];
        const allTerms = [...taxonomy.hard, ...taxonomy.soft, ...taxonomy.roleLevels];
        let matchCount = 0;
        
        allTerms.forEach(term => {
            if (cleanText.includes(term.toLowerCase())) {
                matchCount++;
            }
        });
        
        scores[domain] = matchCount;
    });
    
    // Encontrar el dominio con más matches
    const detectedDomain = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    return { domain: detectedDomain, score: scores[detectedDomain], allScores: scores };
}

// ============================================================================
// 3. STOPWORDS AMPLIADAS
// ============================================================================

const STOPWORDS = new Set([
    // Español
    'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'de', 'del', 'al', 'y', 'o', 'en', 
    'para', 'por', 'con', 'sin', 'sobre', 'tras', 'durante', 'mediante', 'que', 'como', 'mas', 
    'pero', 'sus', 'su', 'este', 'esta', 'estos', 'estas', 'se', 'lo', 'le', 'les', 'me', 'te', 
    'nos', 'mi', 'tu', 'yo', 'nosotros', 'ellos', 'ella', 'ellas', 'es', 'son', 'fue', 'eran', 
    'ser', 'estar', 'tener', 'hacer', 'experiencia', 'requisitos', 'conocimiento', 'conocimientos', 
    'capacidad', 'habilidad', 'trabajo', 'equipo', 'desarrollo', 'diseño', 'crear', 'funciones', 
    'responsabilidades', 'años', 'nivel', 'perfil', 'vacante', 'puesto', 'empresa', 'cliente',
    'practicante', 'pasante', 'intern', 'trainee', 'junior', 'senior', 'semi-senior', 'modalidad',
    'presencial', 'remoto', 'hibrido', 'horario', 'planilla', 'sueldo', 'salario', 'remuneracion',
    'beneficios', 'eps', 'ley', 'postular', 'postulacion', 'enviar', 'correo', 'asunto', 'interesados',
    'disponibilidad', 'inmediata', 'lunes', 'viernes', 'ubicacion', 'distrito', 'lima', 'peru',
    
    // Inglés
    'the', 'a', 'an', 'and', 'or', 'but', 'if', 'then', 'else', 'of', 'at', 'by', 'for', 'with', 
    'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 
    'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 
    'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 
    'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 
    'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 
    'should', 'now', 'skills', 'experience', 'requirements', 'knowledge', 'ability', 'work', 
    'team', 'development', 'design', 'create', 'role', 'responsibilities', 'responsible',
    'looking', 'seeking', 'candidate', 'applicant', 'position', 'job', 'opportunity',
    'join', 'us', 'we', 'our', 'company', 'organization'
]);

// ============================================================================
// 4. EXPORTS
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        DOMAIN_TAXONOMIES, 
        getTaxonomyForDomain,
        detectDomainFromText,
        STOPWORDS 
    };
}