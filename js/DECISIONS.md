# 📝 DECISIONES DE DISEÑO - MOTOR ATS CV-GEN-SCAN (v2.1.0)

Este documento registra de manera formal e independiente las decisiones de diseño adoptadas para la resolución de edge cases del análisis semántico y cálculo de score en el motor ATS.

---

## 1. Idioma sin nivel especificado
*   **Contexto**: El candidato menciona un idioma (ej. `"Inglés"`) en sus campos de texto pero no describe adjetivo de nivel de competencia (`"avanzado"`, `"B2"`, `"nativo"`).
*   **Decisión**: **Opción A (Default a 0 / "no especificado")**.
*   **Justificación**: En un sistema de reclutamiento profesional y riguroso, no se deben asumir competencias no descritas. Si una oferta laboral exige un nivel mínimo de idioma y el candidato no lo especifica, el sistema genera una alerta de Knockout (`HIGH`) para asegurar que el perfil no sea admitido con suposiciones falsas.

---

## 2. Progresión de carrera no lineal (Reconversión Profesional)
*   **Contexto**: El historial laboral contiene transiciones donde el nivel de jerarquía desciende (ej. `"Senior Manager en Finanzas"` ➔ `"Junior Developer en Tech"`).
*   **Decisión**: **Opción B (Marcar como "reconversión" con flag `careerChangeDetected`)**.
*   **Justificación**: En lugar de penalizar al candidato catalogándolo como "trayectoria inestable", el motor detecta la reconversión profesional. El flag `careerChangeDetected: true` permite a la interfaz o filtros especializados tratar este perfil de manera diferenciada, valorando la transición de carrera y evitando un falso descarte automático.

---

## 3. Certificación de familia pero no exacta
*   **Contexto**: El puesto requiere una certificación específica (ej. `"AWS Solutions Architect"`) y el candidato posee otra certificación de la misma familia o proveedor pero de nivel diferente (ej. `"AWS Cloud Practitioner"`).
*   **Decisión**: **Opción B (Bonus reducido a 1.5% en vez de 3%)**.
*   **Justificación**: Se reconoce el esfuerzo del candidato y la familiaridad con el ecosistema tecnológico exigido asignándole la mitad del peso asignado a las certificaciones, sin conceder el crédito completo reservado a la certificación requerida por la vacante.

---

## 4. Historial vacío pero proyectos completos (Perfiles Junior/Autodidactas)
*   **Contexto**: El CV de un candidato junior carece de trayectoria en el campo `"experience"` pero cuenta con proyectos estructurados en el campo `"projects"`.
*   **Decisión**: **Opción B (Fallback de pesos dinámicos)**.
*   **Justificación**: Si el candidato carece de experiencia laboral formal, la ponderación del *Dual Experience Analyzer* descarta la división por defecto ($70\%$ Experiencia / $30\%$ Proyectos) y escala dinámicamente la sección de Proyectos al $100\%$ de la puntuación de trayectoria laboral. Esto evita penalizar injustamente a perfiles de entrada que demuestran capacidades sólidas mediante su portafolio.
