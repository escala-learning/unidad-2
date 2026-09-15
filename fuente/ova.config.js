/* =========================================================
   CURSO · De la respuesta a la recomendación: audita antes de confiar (Unidad 2)
   ---------------------------------------------------------
   Cliente:   Scala Learning
   Insumo:    ../insumos/DI_Unidad2_De_la_respuesta_a_la_recomendacion.docx
              ../insumos/Glosario_Unidad2_Scala.docx
              ../insumos/Banco_preguntas_Unidad 2.docx
   Audiencia: El mismo público de la Unidad 1: profesionales de
              cualquier disciplina que toman decisiones apoyadas
              en datos e IA generativa
   Duración:  [PENDIENTE · el DI no la declara]
   Preset visual: scala  (ver instituciones/scala-learning/INSTITUCION.md)
   Versión template: hibrida
   ========================================================= */

module.exports = {

  brand: {
    // Logo negativo (blanco + arco amarillo): el que va sobre el sidebar navy.
    name: '',
    sub:  '',
    logo:       'assets/img/logos/scala-logo.svg',
    logoMobile: 'assets/img/logos/scala-sello.svg',
  },

  course: {
    code:             'UNIDAD 2',
    name:             'De la respuesta a la recomendación: audita antes de confiar',
    subtitle:         'Toma de decisiones con datos + IA',
    duration:         '',
    iso:              '',
    licencia:         '',
    preset:           'scala',
    pdf:              '',            // la U2 no trae cuaderno de aprendizaje en insumos/
    portadaFullBleed: true,
  },

  /* MENÚ · dos naturalezas de pantalla:
       - `tipo: 'especial'`  → secciones estructurales que tiene toda unidad
                               (inicio, contenido, introducción, conclusión,
                               evaluación, glosario, referencias). Icono, no número.
       - `tipo: 'tema'`      → contenido temático, numerado.
     Solo el contenido temático lleva número: el resto se reconoce por su icono.

     NUMERACIÓN · el DI rotula los temas "Tema 3" y "Tema 4": el curso continúa
     la numeración de la U1 (temas 1 y 2). `numero: 3` en el primer tema fija el
     arranque y el siguiente sigue correlativo (4). Decisión 2026-09-15.

     Las `secciones` con `ancla` aparecen en el menú como sub-ítems y bajan a la
     `.sl-seccion` con ese `id`. Títulos de sección: literales del DI (H1/H2)
     salvo los marcados como editoriales. */
  menu: [
    { id: 'portada',         titulo: 'Inicio',                                    tipo: 'especial', icon: 'mdi:home-outline' },
    { id: 'temario',         titulo: 'Contenido de la unidad',                    tipo: 'especial', icon: 'mdi:map-outline' },

    { id: 'introduccion',    titulo: 'Introducción',                              tipo: 'especial', icon: 'mdi:information-variant',
      secciones: [ { titulo: 'La otra mitad del trabajo de decidir' },                                   // EDITORIAL · apertura; sale de "La otra mitad —la que desarrolla esta unidad—"
                   { titulo: 'Qué vas a lograr en esta unidad', ancla: 'que-vas-a-lograr' },              // EDITORIAL · agrupa Objetivo + Público objetivo + ¿Qué vas a aprender?, como en U1
                   { titulo: 'El ciclo de la decisión: el hilo conductor', ancla: 'ciclo-decision' },     // DI · H1
                   { titulo: 'Los pasos 3 y 4 en acción', ancla: 'pasos-3-y-4' } ] },                    // DI · H1 (acordeón Paso 3 / Paso 4)

    { id: 'tema3',           titulo: 'Auditar críticamente los resultados obtenidos', tipo: 'tema', numero: 3,
      secciones: [ { titulo: 'Dos fenómenos que conviene nombrar', ancla: 'dos-fenomenos' },             // DI · H2 (stepper Alucinación / Sesgo de automatización)
                   { titulo: 'La técnica de las tres fuentes', ancla: 'tres-fuentes', nota: 'incluye el video de apoyo' } ] },  // DI · H2; el video va al final del tema, como en U1

    { id: 'tema4',           titulo: 'Construir y comunicar la recomendación',   tipo: 'tema',
      secciones: [ { titulo: 'Tres elementos que hacen que una recomendación se sostenga', ancla: 'tres-elementos' } ] },  // DI · H2 (acordeón de 3)

    { id: 'conclusion',      titulo: 'Conclusión',                                tipo: 'especial', icon: 'mdi:flag-outline', nota: 'incluye el pódcast de la unidad' },
    { id: 'evaluacion',      titulo: 'Evaluación de la unidad',                   tipo: 'especial', icon: 'mdi:clipboard-check-outline', nota: '11 preguntas' },
    { id: 'glosario',        titulo: 'Glosario',                                  tipo: 'especial', icon: 'mdi:book-open-variant-outline', nota: '15 términos' },
    { id: 'referencias',     titulo: 'Referencias',                               tipo: 'especial', icon: 'mdi:bookmark-outline' },
  ],

  /* REFERENCIAS · APA literal del DI §Referencias (se usan al maquetar la pantalla) */
  referencias: [
    'Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., y Fung, P. (2023). Survey of hallucination in natural language generation. ACM Computing Surveys, 55(12), 1-38.',
    'Kahneman, D. (2011). Thinking, fast and slow. Farrar, Straus and Giroux.',
    'Kerr, J., van der Bles, A.-M., Dryhurst, S., Schneider, C. R., Chopurian, V., Freeman, A. L. J. y van der Linden, S. (2023). The effects of communicating uncertainty around statistics, on public trust. Royal Society Open Science, 10(11), 230604. https://doi.org/10.1098/rsos.230604',
    'Lyell, D., Magrabi, F., Raban, M. Z., Pont, L. G., Baysari, M. T., Day, R. O. y Coiera, E. (2017). Automation bias in electronic prescribing. BMC Medical Informatics and Decision Making, 17, 28. https://doi.org/10.1186/s12911-017-0425-5',
    'Nickerson, R. S. (1998). Confirmation bias: A ubiquitous phenomenon in many guises. Review of General Psychology, 2(2), 175-220.',
    'Parasuraman, R., y Riley, V. (1997). Humans and automation: Use, misuse, disuse, abuse. Human Factors, 39(2), 230-253.',
    'Perkins, D. N., y Salomon, G. (1992). Transfer of learning. En T. Husén y T. N. Postlethwaite (Eds.), International encyclopedia of education (2.ª ed.). Pergamon Press.',
    'Skitka, L. J., Mosier, K. L., y Burdick, M. (1999). Does automation bias decision-making? International Journal of Human-Computer Studies, 51(5), 991-1006.',
    'Spiegelhalter, D. (2017). Risk and uncertainty communication. Annual Review of Statistics and Its Application, 4, 31-60.',
    'van der Bles, A. M., van der Linden, S., Freeman, A. L. J., Mitchell, J., Galvão, A. B., Zaval, L., y Spiegelhalter, D. J. (2019). Communicating uncertainty about facts, numbers and science. Royal Society Open Science, 6(5), 181870.',
  ],

  creditos: {
    institucion: 'Scala Learning',
  },
};
