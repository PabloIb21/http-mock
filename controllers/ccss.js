const login = (req, res) => {
  return res.status(200).json({
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY3NjQ5Nzg0NCwiZXhwIjoxNjc2NTQxMDQ0fQ.u5PvTP3rPPNXzt2NyQtfz4SSARDc7GJ4enzvIU6BqNy2bajzu4YL4Km9ZBvVyhwicGjyE8da1D3AUlCeWmdW7w",
    bearer: "Bearer",
    nombreUsuario: "pablo",
    authorities: [
      {
        authority: "ROLE_ADMIN",
      },
    ],
  });
};

const historialMedico = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "historial medico guardado exitosamente",
    id: 1,
    omtId: "OMT-1",
    resumen: {
      id: 1,
      personaQueLlama: "DAVID TORIS",
      noDevolucion: "5524003902",
      nombrePaciente: "ADRIAN SANHEZ",
      correoElectronico: null,
      peso: 80.0,
      entidadFederativa: "MEX",
      fechaNacimiento: "1992-12-19",
      edad: "30 años",
      genero: "Hombre",
      talla: null,
      imc: 5.4,
      clasificacionImc: "PESO ADECUADO (18.5-24.9)",
      tipoPaciente: "ASEGURADO",
      noEmpleado: 100,
      tipoEmpresa: "Médica",
      aseguradoId: "12345",
      contratante: "asdfg",
      nobmreColaborador: null,
      especifique: null,
    },
    motivoConsulta: "Le duele la cabeza",
  });
  // return res.status(409).json({
  //   "success": false,
  //   "message": "no se encontró la ficha de indentificación 5",
  //   "id": null,
  //   "omtId": null,
  //   "resumen": null,
  //   "motivoConsulta": null
  // });
};

const protocols = (req, res) => {
  return res.status(200).json([
    {
      titulo: "Alteración del sentido del olfato",
      sexGroup: "BOTH",
      id: 1,
      ageGroup: "All",
      published: true,
      categoria: "Nose and Sinuses",
      categoryId: 1,
    },
    {
      titulo: "Prueba",
      sexGroup: "BOTH",
      id: 194,
      ageGroup: "Toddler",
      published: false,
      categoria: "Gastrointestinal",
      categoryId: 2,
    },
  ]);
};

const getQuestion1 = (req, res) => {
  return res.status(200).json({
    type: "V",
    shortDescription: "Síntomas de choque",
    description:
      "¿Presenta el paciente alguno de los síntomas o circunstancias siguientes?",
    number: 1,
    yes: "2",
    no: "2",
    unsure: "2",
    options: [
      {
        succession: 1,
        description:
          "Piel fría y húmeda (el tacto de la piel es frío y sudoroso)",
      },
      {
        succession: 2,
        description:
          "Piel moteada (zonas con cambio de color) o excesivamente pálida",
      },
      {
        succession: 3,
        description: "Desmayo o sensación de que se va a desmayar",
      },
    ],
    additionalInformation:
      "Si el paciente padece aturdimiento de pie o sentado, o piel pálida o pegajosa, estos síntomas pueden sugerir insuficiencia circulatoria (choque). En este caso, deberá recibir atención médica inmediata.  El desmayo o la pérdida del conocimiento deben considerarse una urgencia médica hasta que se demuestre lo contrario.\n\nINFORMACIÓN ADICIONAL\n\nEl choque es una patología potencialmente letal que se produce por insuficiencia circulatoria que deriva en una falta de suministro de oxígeno y nutrientes en los tejidos y los órganos. Esto, por su parte y en caso de no tratarse con rapidez, puede provocar que estos tejidos y órganos dejen de funcionar correctamente.. \n\nLos síntomas del choque incluyen:\nPérdida de conocimiento\nAturdimiento persistente de pie o sentado\nPiel pálida, fría y pegajosa (la piel se siente fría y sudorosa)\nDesorientación\nLetargo (adormecimiento grave)\nRespiración rápida o sentir que nos falta el aire sin practicar ninguna actividad.",
  });
};
const getQuestionO = (req, res) => {
  return res.status(200).json({
    type: "O",
    description:
      "Un cambio en el comportamiento requiere la evaluación por parte de una enfermera.  Voy a pasarle ahora con una enfermera.",
    number: 1,
    jump: 2,
    jumpDescription: "pregunta 2",
    keywords: null,
  });
};

const getQuestionB = (req, res) => {
  return res.status(200).json({
    type: "B",
    description:
      "Puede decirme exactamente qué se ha ingerido, cuánta cantidad y cuando se ingirió.",
    number: 1,
    jump: 2,
    jumpDescription: 'Pregunta 2',
    keywords: null,
  });
};

const getQuestion2 = (req, res) => {
  return res.status(200).json({
    type: "Y",
    shortDescription: "Embarazo de menos de 14 semanas",
    description:
      "¿Está embarazada la paciente de menos de 14 semanas/3 meses y medio?",
    number: 2,
    yes: "3",
    no: "25",
    unsure: "25",
    options: [],
    additionalInformation:
      "INFORMACION ADICIONAL\n\nAborto: Expulsión del producto de la concepción de menos de 500 gramos de peso o hasta 20 semanas de gestación.\nParto pretérmino: Expulsión del producto de la concepción, del organismo materno entre 28 semanas de gestación hasta 37 semanas de gestación.\nParto con producto inmaduro: Expulsión del producto del organismo materno de 21 semanas de gestación a menos de 27 semanas de gestación.\nParto con producto prematuro: Expulsión del producto del organismo materno de 28 semanas de gestación a menos de 37 semanas de gestación.\nParto con producto a término: Expulsión del producto del oganismo materno de 37 semanas de gestacion a 41 semanas de gestación.\nParto con producto postérmino: Expulsión de producto de 42 o mas semanas de gestatción.\nRecién nacido inmaduro: Producto de la concepción de 21 a 27 semanas de gestación o de 500 gramos a menos de 1000 gramos. \nRecién nacido prematuro: Producto de la concepción de 28 a 37 semanas de gestación, que equivale a un producto de 1000 gramos a menos de 2500 gramos.\nRecién nacido a termino: producto de la concepción de 37 semanasa 41 semanas de gestación, equivale a un producto de 2500 gramos  a 3500 gramos.\nRecién nacido postermino: Producto de la concepcion con 42 semanas o más de gestación.\nRecién nacido con bajo peso: Producto de la concepción con peso corporal al nacimiento de 2500 gramos o menos independientemente a su edad gestacional.\n\n\n",
  });
};

const getQuestion3 = (req, res) => {
  return res.status(200).json({
    type: "Y",
    shortDescription: "Dolor en la zona inferior del abdomen",
    description:
      "¿Siente dolor en la zona inferior del abdomen (retortijones), en las lumbares o en la pelvis?",
    number: 1,
    yes: "4",
    no: "4",
    unsure: "5",
    options: [],
    additionalInformation:
      "El dolor abdominal inferior es frecuente  y puede resolverse espontáneamente (sigue su curso y se resuelve sin problemas) o puede necesitar tratamiento de emergencia, dependiendo de la causa. El dolor en el abdomen inferior suele tener su origen la mayoría de las veces en el aparato urinario, el aparato genital o el tracto gastrointestinal, \n\nINFORMACIÓN ADICIONAL\n\nEl dolor abdominal bajo, el dolor pélvico o los dolores de espalda en las mujeres pueden estar asociados con cambios en el ciclo menstrual (dismenorrea), miomas uterinos, endometriosis, quistes ováricos, ovario poliquístico, inflamación de otras estructuras pélvicas (por ejemplo,salpinge, apendicitis, litiasis uretral) o complicaciones del embarazo si la persona está embarazada.\n\nAl principio del embarazo el desarrollo de dolor abdominal bajo o pélvico con o sin sangrado vaginal puede indicar la presencia de un embarazo ectópico con posible rotura o una amenaza de aborto (aborto espontáneo).  La combinación de dolor abdominal bajo y sangrado vaginal debe evaluarse en relación con estas posibilidades.\nDurante el postparto inmediato y mediato el dolor en la zona inferior del abdomen , nos puede orientar hacia alguna complicación como trombosis venosa profunda o hematoma perineal. \n\nEl dolor abdominal bajo intenso o los calambres durante el tercer trimestre del embarazo pueden indicar el comienzo del parto, reflejar una complicación del embarazo o puede deberse a otras patologías, desde la apendicitis aguda hasta la pielonefritis.  Son necesarias más pruebas.\n\n",
  });
};

const getQuestion4 = (req, res) => {
  return res.status(200).json({
    type: "Y",
    shortDescription: "Hemorragia vaginal",
    description: "¿Se observa alguna hemorragia procedente de la vagina?",
    number: 4,
    yes: "53",
    no: "54",
    unsure: "54",
    options: [],
    additionalInformation:
      "Si se produce una hemorragia anómala siempre es necesario realizar un examen médico.\n\nEl uso de compresas o tampones para cuantificar la pérdida de sangre aporta una medición general del flujo sanguíneo, pero no son fiables porque el nivel de absorbencia de cada producto puede variar.  La presencia de coágulos  o el grado de incomodidad que provoca el sangrado menstrual pueden indicar de forma más fiable el grado de hemorragia.\n\nINFORMACIÓN ADICIONAL\n\nLa hemorragia vaginal antes o después del periodo menstrual habitual puede deberse a distintas causas. La pérdida de sangre puede ser ligera o grave, y puede confundirse con la presencia de sangre en la orina (hematuria). \n\nEntre dichas causas, se incluyen: anomalías en el útero, el cérvix, los ovarios, las trompas de Falopio o la vagina. Se pueden producir hemorragias en las primeras etapas de un embarazo, incluso antes de que la mujer sepa que está embarazada, cuando se trata de un aborto temprano. También pueden ser consecuencia de un traumatismo (incluidas las agresiones sexuales) a cualquier edad. Si existe la posibilidad de que la hemorragia se deba a una agresión, siga los procedimientos locales para la protección de adultos o niños vulnerables.\n\nEl flujo menstrual habitual suele durar entre 3 y 7 días.  La hemorragia excesiva (a menudo con coágulos) en intervalos menstruales regulares se denomina menorragia, mientras que la que se produce a intervalos irregulares recibe el nombre de metrorragia. \n\nEl manchado ovulatorio se define como un episodio puntual de pérdida de sangre entre periodos menstruales regulares y se considera algo normal.",
  });
};

const getFinCuestionario = (req, res) => {
  return res.status(200).json({
    type: "E",
    description: "Prep. de KMS",
    number: 53,
    jump: null,
    keywords: "SPC:AccidentandEmergency",
    disposition: {
      description: "Urgencias Hospitalarias",
      dispositionId: 2,
      instructions: [
        {
          instructionId: 14,
          title: "Recomendaciones- Urgencias Hospitalarias SVB",
          instructionDescriptionList: [
            {
              succession: 1,
              description:
                "Acercarle inmediatamente al servicio de urgencias. El paciente no debe conducir.",
            },
            {
              succession: 2,
              description:
                "Si tiene teléfono móvil, deberá llevarlo con usted por si necesita más ayuda.",
            },
            {
              succession: 3,
              description:
                "En el coche, respete las normas de seguridad y utilice el cinturón de seguridad.",
            },
            {
              succession: 4,
              description:
                "Si no se puede realizar el traslado por sus propios medios, deberá llamar a algún servicio de ambulancias o urgencias local.",
            },
            {
              succession: 5,
              description:
                "Si se aconseja al paciente que acuda al hospital, indíquele que lleve consigo los medicamentos que utilice habitualmente.",
            },
            {
              succession: 6,
              description:
                "Si el estado del paciente empeora o desarrolla dificultades para respirar, llame  servicio de ambulancias o urgencias local.  En los casos que de verdad haya que llamar al  servicio de ambulancias o urgencias local nunca se le dirá al paciente que llame él.",
            },
          ],
        },
        {
          instructionId: 15,
          title: "Disuria, mujeres",
          instructionDescriptionList: [
            {
              succession: 1,
              description:
                "Vacíe la vejiga cuando sea necesario, no evite la micción",
            },
            {
              succession: 2,
              description: "Aumente la ingesta de líquidos ",
            },
            {
              succession: 3,
              description:
                "Mantenga la zona limpia lavándola suavemente con agua y jabón suave.",
            },
            {
              succession: 4,
              description: "Límpiese el ano de delante hacia atrás al defecar",
            },
            {
              succession: 5,
              description:
                "Lleve ropa interior de algodón y mantenga buena higiene.",
            },
            {
              succession: 6,
              description: "No lleve pantalones o leotardos ajustados",
            },
            {
              succession: 7,
              description:
                "Después de las relaciones sexuales, vaya al baño para vaciar la vejiga.",
            },
            {
              succession: 8,
              description:
                "Si tiene la vagina seca, use un gel lubricante durante el sexo, pero no emplee espermicidas o diafragmas anticonceptivos. ",
            },
            {
              succession: 9,
              description:
                "Existen indicios de que los productos de arándano ayudan a prevenir los síntomas de la cistitis",
            },
            {
              succession: 10,
              description:
                "El arándano reacciona con ciertos medicamentos. En particular, no lo tome si está tomando un medicamento denominado warfarina",
            },
            {
              succession: 11,
              description:
                "Si padece dolor genital, debe consultar con el médico.",
            },
            {
              succession: 12,
              description:
                "Si existe posibilidad de infección genital, la persona debe informar a su pareja sexual para que reciba tratamiento en caso necesario. ",
            },
            {
              succession: 13,
              description:
                "EMPEORAMIENTO: Si aumenta el dolor al orinar, no puede orinar, observa sangre en la orina, aparece fiebre, o la orina huele mal, llámenos de nuevo o contacte al médico de medicina general para recibir asesoramiento.",
            },
          ],
        },
        {
          instructionId: 1,
          title: "Embarazo, polaquiuria",
          instructionDescriptionList: [
            {
              succession: 1,
              description:
                "Los ejercicios musculares del suelo pélvico (de Kegel) aumentan el control sobre los músculos voluntarios de la micción.",
            },
            {
              succession: 2,
              description:
                "Mantenga una buena hidratación, pero reduzca la ingesta excesiva de líquidos, especialmente por la noche.",
            },
            {
              succession: 3,
              description: "Evite la cafeína durante el embarazo.",
            },
            {
              succession: 4,
              description: "Evite el alcohol durante el embarazo.",
            },
            {
              succession: 5,
              description: "Use protegeslips.",
            },
          ],
        },
        {
          instructionId: 18,
          title: "Embarazo, dolor de espalda",
          instructionDescriptionList: [
            {
              succession: 1,
              description:
                "Aplique una compresa fresca en la zona dolorida durante 20 minutos cada dos horas. Se puede alternar el calor con compresas frías (una compresa de calor moderado), lo que le venga mejor.",
            },
            {
              succession: 2,
              description:
                "Lleve un sujetador anatómico y zapatos bajos y cómodos.",
            },
            {
              succession: 3,
              description:
                "Evite levantar peso y doblar las rodillas, mantenga la espalda recta cuando levante o recoja algo del suelo. ",
            },
            {
              succession: 4,
              description:
                "Mueva los pies al girarse para evitar dañarse la espalda.",
            },
            {
              succession: 5,
              description:
                "Equilibre el peso en dos bolsas cuando lleve la compra.",
            },
            {
              succession: 6,
              description: "Siéntese con la espalda recta y bien apoyada. ",
            },
            {
              succession: 7,
              description:
                "Asegúrese de descansar lo suficiente, especialmente en las etapas más avanzadas del embarazo.  ",
            },
            {
              succession: 8,
              description:
                "Un colchón firme también puede ayudar a prevenir y aliviar el dolor de espalda.  Si su colchón es demasiado blando, ponga una tabla dura debajo para que sea más firme.  ",
            },
            {
              succession: 9,
              description: "Un masaje también puede ayudar. ",
            },
          ],
        },
        {
          instructionId: 4,
          title: "EMPEORAMIENTO GENERAL",
          instructionDescriptionList: [
            {
              succession: 1,
              description:
                "Si los síntomas persisten, empeoran o aparecen otros nuevos, llámenos de nuevo para recibir asesoramiento. ",
            },
          ],
        },
      ],
    },
  });
};

const disposition = (req, res) => {
  return res.status(200).json([
    {
      dispositionId: 25,
      description: "Ambulancia",
    },
    {
      dispositionId: 15,
      description: "Concertar cita con MG / Especialista",
    },
    {
      dispositionId: 41,
      description: "Concertar cita con Obstetra",
    },
    {
      dispositionId: 2,
      description: "Urgencias Hospitalarias",
    },
    {
      dispositionId: 86,
      description: "Valoración Médica presencial menos de 12 hr",
    },
    {
      dispositionId: 67,
      description: "Valoración Médica presencial menos de 2 hr",
    },
    {
      dispositionId: 78,
      description: "Valoración Médica presencial menos de 6 hr",
    },
  ]);
};

const getQuestionS = (req, res) => {
  return res.status(200).json({
    type: "S",
    shortDescription: "Ineficacia del tratamiento realizado en casa",
    description:
      "¿Qué resultado han dado las medidas de autotratamiento realizadas? (Seleccione una opción):",
    number: 1,
    yes: "null",
    no: "null",
    unsure: "null",
    options: [
      {
        succession: 1,
        description:
          "Los síntomas se han intensificado tras tomar dosis correctas de medicamentos o tomar otras medidas durante las últimas 24 horas",
        goTo: "2",
      },
      {
        succession: 2,
        description:
          "Los síntomas siguen siendo los mismos incluso después de tomar medicamentos o realizar otros tratamientos",
        goTo: " 2",
      },
      {
        succession: 3,
        description:
          "No se han tomado medicamentos ni otro tipo de tratamientos o medidas",
        goTo: " 2",
      },
      {
        succession: 4,
        description:
          "Los síntomas se han aliviado mediante medidas de autotratamiento",
        goTo: " 2",
      },
    ],
    additionalInformation:
      "Muchas personas que buscan consejo médico ya han probado tratamientos o remedios para sus síntomas o enfermedades. \n\nSi no han obtenido una mejoría con los cuidados, las personas querrán más información o conocimientos sobre otros tratamientos que deben ser evaluados por su médico o farmacéutico.",
  });
};

const getQuestionLP = (req, res) => {
  return res.status(200).json({
    type: "LP",
    shortDescription: "cargar protocolo",
    description: "Continuar flujo en protocolId: 14 en question: 1",
    yes: "null",
    no: "null",
    unsure: "null",
    protocolId: 14,
    question: 1,
  });
};

const setHipothesis = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "hipótesis diagnostica guardada exitosamente",
    id: 1,
  });
};

const setAnswers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "respuestas guardadas exitosamente",
    id: 1,
  });
};

const validateToken = (req, res) => {
  return res.status(200).json({
    valid: true,
  });
};

const getPatients = (req, res) => {
  return res.status(200).json([
    {
      nombre: "ADRIAN SANCHEZ ALVAREZ",
      id: 18,
    },
    {
      nombre: "ALICIA ALVAREZ",
      id: 22,
    },
    {
      nombre: "ALICIA ALVAREZ",
      id: 10,
    },
    {
      nombre: "ANGELICA RUIZ",
      id: 7,
    },
    {
      nombre: "ANGELUZ PEREZ CANO",
      id: 8,
    },
    {
      nombre: "ANGELUZ PEREZ CANO",
      id: 29,
    },
    {
      nombre: "CARINA MIRANDA GARCIA",
      id: 32,
    },
    {
      nombre: "CARINA MIRANDA GARCIA",
      id: 14,
    },
    {
      nombre: "DAVID TORIS",
      id: 12,
    },
    {
      nombre: "DIANA HERNANDEZ RODRIGUEZ",
      id: 26,
    },
    {
      nombre: "ELIZABETH NANCY VAZQUEZ GUZMAN",
      id: 23,
    },
    {
      nombre: "FRANCISCO PEREZ",
      id: 13,
    },
    {
      nombre: "FRANCISCO SANCHEZ",
      id: 19,
    },
    {
      nombre: "JUAN PEREZ PEREZ",
      id: 25,
    },
    {
      nombre: "LEON VILLAVICENCIO",
      id: 17,
    },
    {
      nombre: "PABLO IBARRA",
      id: 16,
    },
    {
      nombre: "PACIENTE 2",
      id: 6,
    },
    {
      nombre: "paciente 3",
      id: 9,
    },
    {
      nombre: "paciente 3",
      id: 27,
    },
    {
      nombre: "PACIENTE NUEVO",
      id: 28,
    },
    {
      nombre: "PACIENTE NUEVO",
      id: 31,
    },
    {
      nombre: "PACIENTE NUEVO",
      id: 11,
    },
    {
      nombre: "PACIENTE NUEVO",
      id: 15,
    },
    {
      nombre: "paciente nuevo 2",
      id: 20,
    },
    {
      nombre: "Sofia",
      id: 24,
    },
    {
      nombre: "Sofia",
      id: 30,
    },
    {
      nombre: "Testing",
      id: 21,
    },
  ]);
};

const getOMTsPatient = (req, res) => {
  return res.status(200).json([
    {
      personaQueLlama: "ADRIAN SANCHEZ ALVAREZ",
      paciente: "ALICIA ALVAREZ",
      motivoConsulta: "testing",
      medico: "Mariana Rodriguez Garduño",
      emergencia: false,
      creadoEl: "2023-03-14 15:53:16",
      fechaFin: "2023-03-15 13:57:54",
      activo: false,
      omtId: "OMT-2",
    },
    {
      personaQueLlama: "ADRIAN SANCHEZ ALVAREZ",
      paciente: "DAVID TORIS",
      motivoConsulta: "test",
      medico: "Mariana Rodriguez Garduño",
      emergencia: false,
      creadoEl: "2023-03-14 15:53:16",
      fechaFin: "2023-03-15 13:57:54",
      activo: false,
      omtId: "OMT-3",
    },
    {
      personaQueLlama: "ADRIAN SANCHEZ ALVAREZ",
      paciente: "DAVID TORIS",
      motivoConsulta: "prueba",
      medico: "Mariana Rodriguez Garduño",
      emergencia: true,
      creadoEl: "2023-03-14 15:53:16",
      fechaFin: "2023-03-15 13:57:54",
      activo: false,
      omtId: "OMT-4",
    },
  ]);
  // return res.status(401).json({});
};

const getOMT = (req, res) => {
  return res.status(200).json({
    omtId: "OMT-5",
    medico: "Mariana Rodriguez Garduño",
    historialMedico: {
      id: 5,
      enfermedadEnCurso: "emergencia",
      medicacionHabitual: "emergencia",
      traumaticos: "emergencia",
      hospitalizaciones: "emergencia",
      inmunizaciones: "emergencia",
      etilismo: "emergencia",
      alergicos: "emergencia",
      quirurgicos: "emergencia",
      transfucionales: "emergencia",
      tabaquismo: "emergencia",
      consumoDrogas: "emergencia",
      antecedentesGineco: false,
      motivoConsulta: "emergencia ...",
      historiaDelPadecimiento: "emergencia",
      fechaInicioPadecimientoActual: "2023-03-24 12:05:07",
      diasDelPadecimiento: "0",
      fichaIdentificacion: {
        id: 10,
        emergenciaEspecifique: "emergencia ...",
        emergencia: true,
        personaQueLlama: "ADRIAN SANCHEZ ALVAREZ",
        noDevolucion: "5524003902",
        nombrePaciente: "ALICIA ALVAREZ",
        noDevolucionPaciente: "5557302082",
        correoElectronico: "adrian2115@gmail.com",
        peso: 70.0,
        entidadFederativa: "CIUDAD DE MEXICO",
        municipio: "CDMX",
        fechaNacimiento: "1975-10-09",
        edad: "47 años",
        genero: "Mujer",
        talla: 1.5,
        imc: 31.11,
        clasificacionImc: "OBESIDAD GRADO I (30-34.9)",
        tipoPaciente: "COLABORADOR",
        noEmpleado: "007",
        tipoEmpresa: "GENERAL DE SEGUROS",
        aseguradoId: null,
        contratante: null,
        nombreColaborador: null,
        especifique: null,
        fechaInicio: "2023-03-24 12:03:44",
      },
      hipotesisDiagnostica: null,
      createdDate: "2023-03-24 12:05:07",
      modifiedDate: "2023-03-24 12:05:07",
    },
    respuestas: [
      {
        protocolId: 170,
        protcolName: "Sangrado vaginal",
        answers: [
          {
            shortDescription: "Embarazo o posible embarazo",
            description:
              "¿Está esta persona embarazada o existe la posibilidad de que esté embarazada?",
            number: 1,
            answer: "unsure",
          },
        ],
      },
      {
        protocolId: 169,
        protcolName: "Sangrado vaginal en el embarazo",
        answers: [
          {
            shortDescription: "Síntomas de choque",
            description:
              "¿Presenta el paciente alguno de los síntomas o circunstancias siguientes?",
            number: 1,
            answer: "no",
          },
          {
            shortDescription: "Embarazo de menos de 14 semanas",
            description:
              "¿Está embarazada la paciente de menos de 14 semanas/3 meses y medio?",
            number: 2,
            answer: "no",
          },
          {
            shortDescription: "Pérdida de líquido amniótico",
            description:
              "¿Ha notado la paciente un goteo o la expulsión de un líquido transparente procedente de la vagina (ha roto aguas)?",
            number: 8,
            answer: "no",
          },
          {
            shortDescription: "Trabajo de parto",
            description:
              "¿Siente unas intensas y regulares contracciones (endurecimiento y posterior relajación del abdomen) o unos retortijones que no desaparecen andando un poco?",
            number: 9,
            answer: "no",
          },
          {
            shortDescription: "Traumatismo abdominal",
            description:
              "¿Se ha hecho daño o ha recibido un golpe en el abdomen en los últimos 3 días (72 horas)?",
            number: 10,
            answer: "yes",
          },
        ],
      },
    ],
    diagnostico: {
      type: "E",
      description: "Prep. de KMS",
      number: 26,
      jump: null,
      keywords: "SPC:AccidentandEmergency|SPC:maternity",
      disposition: {
        description: "Urgencias Hospitalarias",
        dispositionId: 10,
        instructions: [
          {
            instructionId: 2,
            title: "Recomendaciones- Urgencias Hospitalarias SVB",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Acercarle inmediatamente al servicio de urgencias. El paciente no debe conducir.",
              },
              {
                succession: 2,
                description:
                  "Si tiene teléfono móvil, deberá llevarlo con usted por si necesita más ayuda.",
              },
              {
                succession: 3,
                description:
                  "En el coche, respete las normas de seguridad y utilice el cinturón de seguridad.",
              },
              {
                succession: 4,
                description:
                  "Si no se puede realizar el traslado por sus propios medios, deberá llamar a algún servicio de ambulancias o urgencias local.",
              },
              {
                succession: 5,
                description:
                  "Si se aconseja al paciente que acuda al hospital, indíquele que lleve consigo los medicamentos que utilice habitualmente.",
              },
              {
                succession: 6,
                description:
                  "Si el estado del paciente empeora o desarrolla dificultades para respirar, llame  servicio de ambulancias o urgencias local.  En los casos que de verdad haya que llamar al  servicio de ambulancias o urgencias local nunca se le dirá al paciente que llame él.",
              },
              {
                succession: 119,
                description:
                  "Medicine|Dambro MR.|Williams and Wilkins, Baltimore, 1996.|Griffith's 5 Minute Clinical Consult 35 ed.>",
              },
              {
                succession: 120,
                description:
                  "General|DeCherney AH, Pernoll ML.|Appleton and Lange, Norwalk, 1994.|Current Obstetric and Gynecologic Diagnosis and Treatment.>",
              },
              {
                succession: 121,
                description:
                  "Differential Diagnosis|Tierney LM, McPhee SJ and Papadakis MA.|Appleton and Lange, Stamford, 1996.|Current Medical Diagnosis and Treatment 35 ed.>",
              },
              {
                succession: 122,
                description:
                  "General|Benson, RB.|Lange. Canada. 1994.|Handbook of Obstetrics and Gynecology.>",
              },
              {
                succession: 123,
                description:
                  "|East practice management guidelines work group|J trauma. 53(3): 602-615, september 2002|Practice management guidelines for the evaluation of blunt abdominal trauma>",
              },
              {
                succession: 124,
                description:
                  "|Nelson marlborough district health board|Nelson marlborough district health board 2010|Major trauma guidelines>",
              },
              {
                succession: 125,
                description:
                  "Medicine|Hurst JW.|Appleton and Lange, Stamford, 1996.|Medicine for the Practicing Physician 4 ed.>",
              },
              {
                succession: 126,
                description:
                  "Pregnancy|Holzmann G, Renehart R.|American College of Obstetricians and Gynecologists, Chicago, 1995.|Planning for Pregnancy, Birth and Beyond.>",
              },
              {
                succession: 127,
                description:
                  "Medicine|Isselbacher KJ, et. al.|McGraw-Hill Inc, New York, 1995.|Harrison's Principles of Internal Medicine Companion Handbook.>",
              },
              {
                succession: 128,
                description:
                  "General|Stein W, et al.|University of California, Berkeley, 1990.|Ambulatory Obstetrics: Protocols for Nurse Practitioners/Nurse Midwives.>",
              },
              {
                succession: 129,
                description:
                  "Vaginal Bleeding|Newkirk GR.|Modern Medicine 67:60-67 1999.|Abnormal Vaginal Bleeding.>",
              },
              {
                succession: 130,
                description:
                  "|Karmy-Jones, Riyad; Nathens, Avery; |Stern, Eric (Eds.). 2002, 592 p. 103 illus.|Thoracic Trauma and Critical Care>",
              },
              {
                succession: 131,
                description:
                  "|CENETEC-IMSS-272-10ER|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultado el 30 de enro del 2015|Diagnóstico y tratamiento de la sepsis puerperal>",
              },
              {
                succession: 132,
                description:
                  "|CENETEC-IMSS-074-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/074_GPC_Fascitisnecrosante/Fascitis_necrosante_EVR_CENETEC.pdf Consultado el 01/04/2015|Diagnóstico y tratamiento de Fascitis Necrosante>",
              },
              {
                succession: 133,
                description:
                  "|CENETEC-IMSS-049-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/049_GPC_ApendicitisAgTratamiento/IMSS_049_08_EyR.pdf Consultado el 30/03/2015|Tratamiento de  apendicitis aguda>",
              },
              {
                succession: 134,
                description:
                  "|CENETEC-ISSSTE-527-11/ER-RR|Disponible en :http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html consultado el 25/03/2015|Prevención, diagnóstico y tratamiento de la herida quirúrgica post cesárea, en los tres niveles de atención>",
              },
              {
                succession: 135,
                description:
                  "|CENETEC-IMSS-608-13/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultado el 25/03/2015|Prevención, diagnóstico y tratamiento de la episiotomía complicada>",
              },
              {
                succession: 136,
                description:
                  "|CENETEC-IMSS-077-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultado el 25/03/2015|Diagnóstico y tratamiento de la infección aguda no complicada del tracto urinario en la mujer>",
              },
              {
                succession: 137,
                description:
                  "|CENETEC-SSA-106-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/106_GPC_Diarreaagudaadultos/SSA_106_08_GRR.pdf Consultado el 23/03/2015                   |Atención, diagnóstico y tratamiento de diarrea aguda en adultos en el primer nivel de atención>",
              },
              {
                succession: 138,
                description:
                  "|CENETEC-SSA-151-08/ER-RR|Disponible en:http://www.youblisher.com/p/165379-GUIA-DE-PRACTICA-CLINICA-SSA-151-08-GRR-MANEJO-DEL-DENGUE-GRAVE-Y-NO-GRAVE/ Consultado el 1/04/15|Manejo del Dengue grave y no grave>",
              },
              {
                succession: 139,
                description:
                  "|CENETEC-IMSS-084-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 25 de abril del 2015|Diagnóstico y tratamiento de sepsis grave y choque séptico en el adulto>",
              },
              {
                succession: 140,
                description:
                  "|CENETEC-IMSS-495-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/495_GPC_Alergia_alimentaria_en_nixos/IMSS-495-11-GRR_AlergiaAlimentos.pdf Consultado el 02/04/2015|Diagnóstico y tratamiento de alergia allimentaria en niños>",
              },
              {
                succession: 141,
                description:
                  "|CENETEC-SS-283-12/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 25 de abril del 2015|Diagnóstico y tratamiento de sepsis y choque séptico del recién nacido en el segundo y tercer nivel de atención>",
              },
              {
                succession: 142,
                description:
                  "|CENETEC-ISSSTE-133-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html consultado el 25/05/2015|Prevención diagnóstico y tratamiento de la hemorragia aguda del tubo digestivo alto no variceal en los tres niveles de atención>",
              },
              {
                succession: 143,
                description:
                  "|CENETEC-IMSS-374-10/ER-RR|http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado el 25/05/2015|Diagnóstico y tratamiento del equilibrio acido-base>",
              },
              {
                succession: 144,
                description:
                  "|Ta y manejo de los estados de choquemar´z-Cruz O,Moyao-García O, Carrillo- Esper R, et al.Fuerza de trabajo intercolegiada para la elaboración de los parámetros mexicanos para el diagnóstico|Revista Mexicana de Anestesiología Vol. 27; Suplemento 2; 2004, pág 204-228|Parámetros de práctica mexicanos para el diagnóstico y manejo de los estados de choque>",
              },
              {
                succession: 145,
                description:
                  "|CENETEC-IMSS-074-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/074_GPC_Fascitisnecrosante/Fascitis_necrosante_EVR_CENETEC.pdf Consultado el 01/04/2015|Diagnóstico y tratamiento de Fascitis Necrosante>",
              },
              {
                succession: 146,
                description:
                  "|CENETEC-IMSS-049-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/049_GPC_ApendicitisAgTratamiento/IMSS_049_08_EyR.pdf Consultado el 30/03/2015|Tratamiento de  apendicitis aguda>",
              },
              {
                succession: 147,
                description:
                  "|CENETEC-ISSSTE-527-11/ER-RR|Disponible en :http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html consultado el 25/03/2015|Prevención, diagnóstico y tratamiento de la herida quirúrgica post cesárea, en los tres niveles de atención>",
              },
              {
                succession: 148,
                description:
                  "|CENETEC-IMSS-608-13/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultado el 25/03/2015|Prevención, diagnóstico y tratamiento de la episiotomía complicada>",
              },
              {
                succession: 149,
                description:
                  "|CENETEC-IMSS-077-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultado el 25/03/2015|Diagnóstico y tratamiento de la infección aguda no complicada del tracto urinario en la mujer>",
              },
              {
                succession: 150,
                description:
                  "|CENETEC-SSA-106-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/106_GPC_Diarreaagudaadultos/SSA_106_08_GRR.pdf Consultado el 23/03/2015                   |Atención, diagnóstico y tratamiento de diarrea aguda en adultos en el primer nivel de atención>",
              },
              {
                succession: 151,
                description:
                  "|CENETEC-SSA-151-08/ER-RR|Disponible en:http://www.youblisher.com/p/165379-GUIA-DE-PRACTICA-CLINICA-SSA-151-08-GRR-MANEJO-DEL-DENGUE-GRAVE-Y-NO-GRAVE/ Consultado el 1/04/15|Manejo del Dengue grave y no grave>",
              },
              {
                succession: 152,
                description:
                  "|CENETEC-IMSS-084-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 25 de abril del 2015|Diagnóstico y tratamiento de sepsis grave y choque séptico en el adulto>",
              },
              {
                succession: 153,
                description:
                  "|CENETEC-IMSS-374-10/ER-RR|http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado el 25/05/2015|Diagnóstico y tratamiento del equilibrio acido-base>",
              },
              {
                succession: 154,
                description:
                  "|CENETEC-IMSS-084-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 25 de abril del 2015|Diagnóstico y tratamiento de sepsis grave y choque séptico en el adulto>",
              },
              {
                succession: 155,
                description:
                  "|CENETEC-IMSS-495-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/495_GPC_Alergia_alimentaria_en_nixos/IMSS-495-11-GRR_AlergiaAlimentos.pdf Consultado el 02/04/2015|Diagnóstico y tratamiento de alergia allimentaria en niños>",
              },
              {
                succession: 156,
                description:
                  "|CENETEC-ISSSTE-133-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html consultado el 25/05/2015|Prevención diagnóstico y tratamiento de la hemorragia aguda del tubo digestivo alto no variceal en los tres niveles de atención>",
              },
              {
                succession: 157,
                description:
                  "|CENETEC-IMSS-374-10/ER-RR|http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado el 25/05/2015|Diagnóstico y tratamiento del equilibrio acido-base>",
              },
              {
                succession: 158,
                description:
                  "|CENETEC-SSA-106-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/106_GPC_Diarreaagudaadultos/SSA_106_08_GRR.pdf Consultado el 23/03/2015                   |Atención, diagnóstico y tratamiento de diarrea aguda en adultos en el primer nivel de atención>",
              },
              {
                succession: 159,
                description:
                  "|CENETEC-IMSS-495-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/495_GPC_Alergia_alimentaria_en_nixos/IMSS-495-11-GRR_AlergiaAlimentos.pdf Consultado el 02/04/2015|Diagnóstico y tratamiento de alergia allimentaria en niños>",
              },
              {
                succession: 160,
                description:
                  "|CENETEC-ISSSTE-133-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html consultado el 25/05/2015|Prevención diagnóstico y tratamiento de la hemorragia aguda del tubo digestivo alto no variceal en los tres niveles de atención>",
              },
              {
                succession: 161,
                description:
                  "|Ta y manejo de los estados de choquemar´z-Cruz O,Moyao-García O, Carrillo- Esper R, et al.Fuerza de trabajo intercolegiada para la elaboración de los parámetros mexicanos para el diagnóstico|Revista Mexicana de Anestesiología Vol. 27; Suplemento 2; 2004, pág 204-228|Parámetros de práctica mexicanos para el diagnóstico y manejo de los estados de choque>",
              },
              {
                succession: 162,
                description:
                  "|CENETEC-IMSS-074-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/074_GPC_Fascitisnecrosante/Fascitis_necrosante_EVR_CENETEC.pdf Consultado el 01/04/2015|Diagnóstico y tratamiento de Fascitis Necrosante>",
              },
              {
                succession: 163,
                description:
                  "|CENETEC-IMSS-084-10/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 23 de abril del 2015|Diagnóstico y tratamiento de sepsis grave y choque séptico en el adulto>",
              },
              {
                succession: 164,
                description:
                  "|CENETEC-SEDENA-445-09/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html    Consultado el 30/04/2015|Indicadores para Institución de cirugía de control de daños en adultos con trauma abdominal por proyectil de arma de fuego en el tercer nivel de atención>",
              },
              {
                succession: 165,
                description:
                  "|CENETEC-SS-346-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 27/07/2015|Prevención, diagnóstico y tratamiento de la infección del sitio quirúrgico incisional superficial en cirugía abdominal>",
              },
              {
                succession: 166,
                description:
                  "|CENETEC-SS-027-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultado el 30 de enero del 2015|Prevención diagnóstico y tratamiento de la infección de vías urinrias no complicada en menores de 18 años en el primer y segundo niveles de atención>",
              },
              {
                succession: 167,
                description:
                  "|NOM-046-SSA-2005|Disponible en:http://www.salud.gob.mx/unidades/cdi/nomssa.html consultada el 30 de enero2015|Norma Oficial Mexicana Violencia familiar,sexual y contra las mujeres,criterios para prevención y atención>",
              },
              {
                succession: 168,
                description:
                  "|CENETEC-IMSS-081-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado el 30 de Enero2015|Diagnóstico y tratamiento de la vaginitis infecciosa en mujeres en edad reproductiva,en el primer nivel de atención>",
              },
              {
                succession: 169,
                description:
                  "|CENETEC-IMSS-028-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html   Consultado el 30 de Enero2015|Control prenatal con enfoque de riesgo>",
              },
              {
                succession: 170,
                description:
                  "|CENETEC-IMSS-052-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultada el 25 /03/15|Vigilancia y Manejo del trabajo de parto en embarazo de bajo riesgo>",
              },
              {
                succession: 171,
                description:
                  "|CENETEC-IMSS-063-08/ER-RR|Consultado el:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html    Consultado el 06/05/2015|Detección y manejo del parto pre término>",
              },
              {
                succession: 172,
                description:
                  "|CENETEC-IMSS-088-08/ER-RR  |Disponible en; http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html consultado 29 de enero 2015|Diagnóstico y tratamiento de aboarto espontáneo y manejo inicial del aborto recurrente>",
              },
              {
                succession: 173,
                description:
                  "|CENETEC-IMSS-162-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado el 29 de Enero 2015|Diagnóstico y tratamiento de la hemorragia obstétrica en la segunda mitad del embarazo y puerperio>",
              },
              {
                succession: 174,
                description:
                  "|NOM-007-SSA2-2010|Disponible en: http://www.salud.gob.mx/unidades/cdi/nomssa.html, consultado el 23/07/2015|Norma Oficial Mexicana para la atención de embarazo, parto y puerperio>",
              },
              {
                succession: 175,
                description:
                  "|CENETEC-SS-118-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html   Consultado el 04/05/2015     |Prevención primaria del parto pretermino en el primer nivel de atención>",
              },
              {
                succession: 176,
                description:
                  "|CENETEC-SS-103-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultado el 23/03/2015|prevención y manejo de hemorragia post parto en el primer y segundo niveles de atención>",
              },
              {
                succession: 177,
                description:
                  "|CENETEC-SS-026-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado en Enereo2015|Prevención, diagnóstico y reeferencia de la amenaza de aborto en el primer nivel de atención>",
              },
              {
                succession: 178,
                description:
                  "|CENETEC-ISSSTE-124-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado el 30 de Enero2015|Diagóstico y tratamiento de placenta previa en el segundo y tercer trimestre del embarazo>",
              },
              {
                succession: 179,
                description:
                  "|CENETEC-IMSS-608-13/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado el 30 de Enero 2015|Prevención, Diagnóstico y tratamiento de episiotomía complicada>",
              },
              {
                succession: 180,
                description:
                  "|CENETEC-IMSS-530-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado el 30 de Enero de 2015|Prevención,diagnóstico y criterios quirúrgicos de fístula vésico-vaginal de orígen adquirido, iatrogénico y no iatrogénico>",
              },
              {
                succession: 181,
                description:
                  "|CENETEC-IMSS-058-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consultado el 02/04/2015|Detección y Diagnóstico de Enfermedades Hipertensivas del Embarazo>",
              },
              {
                succession: 182,
                description:
                  "|CENETEC-IMSS-320-10/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 23/07/2015 |Diagnóstico y manejo de la Diabetes en el embarazo>",
              },
              {
                succession: 183,
                description:
                  "|CENETEC-IMSS-436-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultado el 30 de Enero2015|Detección y tratamiento inicial de emergencias obstétricas>",
              },
              {
                succession: 184,
                description:
                  "|CENETEC-SS-020-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consultado el 02/04/2015|Atención integral de preeclampsia>",
              },
              {
                succession: 185,
                description:
                  "|CENETEC-SS-026-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html consultado el 18/03/15|Prevención Diagnóstico y Refencia de la amenaza de aborto en el primer nivel de atención>",
              },
              {
                succession: 186,
                description:
                  "|CENETEC-SEDENA-446-09 ER/RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html   Consultado el 31/08/2015|Diagnóstico tratamiento y prevención de la ruptura prematura de membranas en pre-término>",
              },
              {
                succession: 187,
                description:
                  "|CENETEC-IMSS-586-012/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consultado el 02/04/2015|Intervenciones de enfermería en la paciente con preeclampsia /eclampsia>",
              },
              {
                succession: 189,
                description: '"986deef5-0764-42b6-bd56-f2394fb3a719" Title',
              },
            ],
          },
          {
            instructionId: 3,
            title:
              "Embarazo, preeclampsia (hipertensión provocada por el embarazo)",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Acuda a las revisiones preparto ordinarias con la comadrona o el médico.",
              },
              {
                succession: 2,
                description:
                  "No tome medicamentos durante el embarazo sin consultar con la comadrona o el médico.",
              },
              {
                succession: 3,
                description:
                  "EMPEORAMIENTO: Si le duele la cabeza, padece trastornos visuales o se le hinchan mucho los tobillos, contacte con el médico o la comadrona.",
              },
            ],
          },
          {
            instructionId: 6,
            title: "Embarazo, dolor de espalda",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Aplique una compresa fresca en la zona dolorida durante 20 minutos cada dos horas. Se puede alternar el calor con compresas frías (una compresa de calor moderado), lo que le venga mejor.",
              },
              {
                succession: 2,
                description:
                  "Lleve un sujetador anatómico y zapatos bajos y cómodos.",
              },
              {
                succession: 3,
                description:
                  "Evite levantar peso y doblar las rodillas, mantenga la espalda recta cuando levante o recoja algo del suelo. ",
              },
              {
                succession: 4,
                description:
                  "Mueva los pies al girarse para evitar dañarse la espalda.",
              },
              {
                succession: 5,
                description:
                  "Equilibre el peso en dos bolsas cuando lleve la compra.",
              },
              {
                succession: 6,
                description: "Siéntese con la espalda recta y bien apoyada. ",
              },
              {
                succession: 7,
                description:
                  "Asegúrese de descansar lo suficiente, especialmente en las etapas más avanzadas del embarazo.  ",
              },
              {
                succession: 8,
                description:
                  "Un colchón firme también puede ayudar a prevenir y aliviar el dolor de espalda.  Si su colchón es demasiado blando, ponga una tabla dura debajo para que sea más firme.  ",
              },
              {
                succession: 9,
                description: "Un masaje también puede ayudar. ",
              },
            ],
          },
          {
            instructionId: 5,
            title: "Hemorragia vaginal abundante",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Utilice compresas. Nunca tampones y consulte al médico si el sangrado es excesivo\t",
              },
              {
                succession: 2,
                description: "Permanezca en reposo relativo.",
              },
              {
                succession: 3,
                description:
                  "Si usa tampones asegúrese de cambiarlos a intervalos regulares, el marco temporal recomendado es cada 4-8 horas.  ",
              },
              {
                succession: 4,
                description: "Beba mucho líquido durante el ciclo menstrual.",
              },
              {
                succession: 5,
                description:
                  "Los anticonceptivos orales o el DIU pueden provocar cambios en el flujo menstrual.",
              },
              {
                succession: 6,
                description:
                  "Después de la cirugía o del parto, use compresas sanitarias para absorber la sangre; tampones, no.",
              },
              {
                succession: 7,
                description: "No realice lavados vaginales.",
              },
            ],
          },
          {
            instructionId: 11,
            title: "EMPEORAMIENTO GENERAL",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Si los síntomas persisten, empeoran o aparecen otros nuevos, llámenos de nuevo para recibir asesoramiento. ",
              },
            ],
          },
        ],
      },
    },
  });
};

const getCategories = (req, res) => {
  return res.status(200).json([
    {
      id: 1,
      title: "Nose and Sinuses",
    },
    {
      id: 2,
      title: "Salud de la mujer",
    },
    {
      id: 3,
      title: "Skin",
    },
    {
      id: 4,
      title: "Behavioral Health",
    },
    {
      id: 5,
      title: "Gastrointestinal",
    },
    {
      id: 6,
      title: "General",
    },
    {
      id: 7,
      title: "Trauma",
    },
    {
      id: 8,
      title: "Geriatrics",
    },
    {
      id: 9,
      title: "Neurologic",
    },
    {
      id: 10,
      title: "Pulmonary",
    },
    {
      id: 11,
      title: "Dental",
    },
    {
      id: 12,
      title: "Cardiovascular",
    },
    {
      id: 13,
      title: "Male Genital",
    },
    {
      id: 14,
      title: "Renal",
    },
    {
      id: 15,
      title: "Musculoskeletal",
    },
    {
      id: 16,
      title: "Oropharyngeal",
    },
    {
      id: 17,
      title: "Infectious Disease",
    },
    {
      id: 18,
      title: "Anorectal",
    },
    {
      id: 19,
      title: "Neurological",
    },
    {
      id: 20,
      title: "Infection",
    },
    {
      id: 21,
      title: "Ear",
    },
    {
      id: 22,
      title: "Sin categoria",
    },
    {
      id: 23,
      title: "Eye",
    },
    {
      id: 24,
      title: "Men's Health",
    },
    {
      id: 25,
      title: "Hematological",
    },
    {
      id: 26,
      title: "Immunology",
    },
  ]);
};

const getReferences = (req, res) => {
  return res.status(200).json([
    {
      id: 13515,
      number: 2,
      description:
        "Differential Diagnosis|Kraytman M.|McGraw-Hill, New York, 1991.|The Complete Patient History 2 ed.",
    },
    {
      id: 13516,
      number: 3,
      description:
        "Differential Diagnosis|Tierney LM, McPhee SJ and Papadakis MA.|Appleton and Lange, Stamford, 1996.|Current Medical Diagnosis and Treatment 35 ed.",
    },
    {
      id: 13517,
      number: 9,
      description:
        "General|Behrman and Kliegman.|Saunders, New York, 1994.|Nelson's Essentials of Pediatrics.",
    },
    {
      id: 13518,
      number: 10,
      description:
        "Self Care|Pantell RH, Fries JF, Vickery DM.|Addison Wesley, Palo Alto, 1993.|Taking Care of Your Child 4 ed.",
    },
    {
      id: 13519,
      number: 11,
      description:
        "Self Care|Schmitt BD.|Saunders, Denver, 1992.|Instructions for Pediatric Patients.",
    },
    {
      id: 13520,
      number: 74,
      description:
        "Dyspnea|Duffell GM.|Appleton and Lange, Stamford, 1996.|Dyspnea in Hurst JW. Medicine for the Practicing Physician 4 ed.",
    },
    {
      id: 13521,
      number: 75,
      description:
        "|Roussos C, Koutsoukou A|Eur Respir J Suppl. 2003 Nov;47:3s-14s|Respiratory failure",
    },
    {
      id: 13522,
      number: 76,
      description: "|Kaynar AM et al|Medscape, Sep 2010|Respiratory Failure",
    },
    {
      id: 13523,
      number: 77,
      description:
        "|Nava S, Hill N|Lancet. 2009 Jul 18;374(9685):250-9|Non-invasive ventilation in acute respiratory failure",
    },
    {
      id: 13524,
      number: 78,
      description:
        "|Warren L. Lee, Arthur S. Slutsky|Murray and Nadel's Textbook of Respiratory Medicine, 5th ed, 2010|Chapter 90 – Acute Respiratory Distress Syndrome",
    },
    {
      id: 13525,
      number: 79,
      description:
        "Medicine|Hurst JW.|Appleton and Lange, Stamford, 1996.|Medicine for the Practicing Physician 4 ed.",
    },
    {
      id: 13526,
      number: 80,
      description:
        "|Warrell DA, Farrar JJ, Crook DWM|Oxford Textbook of Medicine Volume 3 (Fourth ed.).. Oxford University Press. pp. 1115–29|Bacterial meningitis",
    },
    {
      id: 13527,
      number: 81,
      description:
        "|Nice|NICE guideline 2010|Bacterial meningitis and meningococcal septicaemia",
    },
    {
      id: 13528,
      number: 82,
      description:
        "|NICE |NICE clinical guideline 102, 2010 |Bacterial meningitis and meningococcal septicaemia",
    },
    {
      id: 13529,
      number: 83,
      description:
        "|CENETEC-DIF-386-12/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 17/03/2015|Diagnóstico y tratamiento oportuno de la meningitis tuberculosa de los 0 a los 5 años de edad en el primer, segundo y tercer nivel de atención",
    },
    {
      id: 13530,
      number: 84,
      description:
        "|CENETEC-SSA-310-10/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnostico, Tratamiento y Prevención de la Meningitis Aguda Bacteriana adquirida en la comunidad en paceintes adultos inmunocompetentes",
    },
    {
      id: 13531,
      number: 85,
      description:
        "|CENETEC-ISSSTE-526-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html    onsultado el 19/05/2'15|Extracción de cuerpo extraño de la via aerea en niños",
    },
    {
      id: 13532,
      number: 86,
      description:
        "|CENETEC-S-009-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. consultado 17/03/2015|Diagnóstico y manejo del asma en menores de 18 años de edad en el primer y segundo nivel de atención",
    },
    {
      id: 13533,
      number: 87,
      description:
        "|CENETEC-SS-009-08/ER-RR|Disponible en:http://cvsp.cucs.udg.mx/guias/TODAS/SS_009_08_ASMA_MENORES_DE_18ANOS/SS_009_08_GRR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de ASMA en menores de 18 años en el 1er y 2o. niveles de atención",
    },
    {
      id: 13534,
      number: 88,
      description:
        "|CENETEC-SS-489-11/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 24/04/2015|Diagnóstico y tratamiento de picaduras y mordeduras por himenóptero: abeja, avispa y hormiga fórmica",
    },
    {
      id: 13535,
      number: 89,
      description:
        "|CENETEC-SEMAR-571-12/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el: 27/04/2015|Prevención y diagnóstico del golpe de calor en pacientes de 19-59 años en el primer nivel de atención",
    },
    {
      id: 13536,
      number: 90,
      description:
        "|CENETEC-SS-523-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 27/04/2015 |Diagnóstico y tratamiento de la mordedura por arañas venenosas",
    },
    {
      id: 13537,
      number: 91,
      description:
        "|CENETEC-SS-384-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consuiltado el 27/04/2015|Prevención, diagnóstico y tratamiento de la influenza estacional",
    },
    {
      id: 13538,
      number: 92,
      description:
        "|CENETEC-DIF-386-12/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 17/03/2015|Diagnóstico y tratamiento oportuno de la meningitis tuberculosa de los 0 a los 5 años de edad en el primer, segundo y tercer nivel de atención",
    },
    {
      id: 13539,
      number: 93,
      description:
        "|CENETEC-IMSS-410-10/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html.  Consultado el 29 de Enero del 2015|Diagnóstico y tratamiento del vértigo postural paroxístico benigno en el adulto",
    },
    {
      id: 13540,
      number: 94,
      description:
        "|CENETEC-IMSS-600-13/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 26/05/2015|Abordaje diagnóstico de la ataxia cerebelosa adquirida aguda del adulto",
    },
    {
      id: 13541,
      number: 95,
      description:
        "|CENETEC-SS-008-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 26/05/2015|Atención del paciente con esguince cervical en el primer nivel de atención",
    },
    {
      id: 13542,
      number: 96,
      description:
        "|CENETEC-SS-348-09/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 26/05/2015|Diagnóstico y tratamiento de pacientes con primer brote y sospecha de esclerosis multiple",
    },
    {
      id: 13543,
      number: 97,
      description:
        "|CENETEC-SSA-310-10/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 26/03/2015|Diagnóstico, tratamiento y prevención de la Meningitis Aguda Bacteriana adquirida en la comunidad en pacientes adultos inmunocompetentes",
    },
    {
      id: 13544,
      number: 98,
      description:
        "|CENETEC-SS-384-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consuiltado el 27/04/2015|Prevención, diagnóstico y tratamiento de la influenza estacional",
    },
    {
      id: 13545,
      number: 99,
      description:
        "|CENETEC-IMSS-037-08/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 02/04/2015|Diagnóstico y Tratamiento de la enfermedad pulmonar obstructiva crónica",
    },
    {
      id: 13546,
      number: 100,
      description:
        "|CENETEC-SSA-310-10/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnostico, Tratamiento y Prevención de la Meningitis Aguda Bacteriana adquirida en la comunidad en paceintes adultos inmunocompetentes",
    },
    {
      id: 13547,
      number: 101,
      description:
        "|CENETEC-SSA-291-2010/ER-RR|Disponbible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html    Actualizada en 2017|Diagnóstico y tratamiento de sépsis y choque séptico en pacientes de 1 mes a 18 años de edad",
    },
    {
      id: 13548,
      number: 102,
      description:
        "|CENETEC-IMSS-084-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 25 de abril del 2015|Diagnóstico y tratamiento de sepsis grave y choque séptico en el adulto",
    },
    {
      id: 13549,
      number: 103,
      description:
        "|CENETEC-IMSS-272-10/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultado el 29 de Enero 2015|Diagnóstico y Tratamiento de la Sépsis Puerperal",
    },
    {
      id: 13550,
      number: 104,
      description:
        "|CENETEC-IMSS-510-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 23/07/2015|Abordaje diagnóstico y seguimiento del paciente pediátrico con talla baja",
    },
    {
      id: 13551,
      number: 105,
      description:
        "|CENETEC-SS-002-08-ER/RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 17/03/2015|Atención inicial del traumatismo craneoencefálico en pacientes menores de 18 años",
    },
    {
      id: 13552,
      number: 106,
      description:
        "|CENETEC-SS-067-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html    onsultado el 13/05/2015|Diagnóstico y referencia oportuna del paciente con VIH en el primer nivel de atención",
    },
    {
      id: 13553,
      number: 107,
      description:
        "|CENETEC-IMSS-069-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html onsultado el 07/072105|Diagnóstico y tratamiento del Síndrome de falla medular en edad pediátrica en tercer nivel de atención",
    },
    {
      id: 13554,
      number: 108,
      description:
        "|CENETEC-SS-310-10/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnóstico, tratamiento y prevención de la Meningitis Aguda Bacteriana adquirida en la comunidad en pacientes adultos inmunocompetentes",
    },
    {
      id: 13555,
      number: 109,
      description:
        "|CENETEC-DIF-386-12/ER-RR|Disponible http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnóstico y tratamiento oportuno de la meningitis tuberculosa de los 0 a 5 años de edad en el primer, segundo y tercer nivel de atención",
    },
    {
      id: 13556,
      number: 110,
      description:
        "|CENETEC-IMSS-062-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/, Consultado el 30 de Enero del 2015|Diagnóstico y manejo de la infección aguda de vías aéreas superiores en pacientes mayores de 3 meses hasta los 18 años de edad.",
    },
    {
      id: 13557,
      number: 111,
      description:
        "|CENETEC-IMSS-326-010/ER-RR|Dianóstico y tratamiento del absceso profundo de cuello. Referencia http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 17/03/2015|Diagnóstico y tratamiento del absceso profundo de cuello",
    },
    {
      id: 13558,
      number: 112,
      description:
        "|CENETEC-IMSS-496-11/ER/RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consultado el 07/04/2015|Prevención, diagnóstico y tratamiento de la otitis media aguda en la edad pediátrica",
    },
    {
      id: 13559,
      number: 113,
      description:
        "|CENETEC-SSA-291-2010/ER-RR|Disponbible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html    Actualizada en 2017|Diagnóstico y tratamiento de sépsis y choque séptico en pacientes de 1 mes a 18 años de edad",
    },
    {
      id: 13560,
      number: 114,
      description:
        "|CENETEC-IMSS-084-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 25 de abril del 2015|Diagnóstico y tratamiento de sepsis grave y choque séptico en el adulto",
    },
    {
      id: 13561,
      number: 115,
      description:
        "|CENETEC-IMSS-069-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html onsultado el 07/072105|Diagnóstico y tratamiento del Síndrome de falla medular en edad pediátrica en tercer nivel de atención",
    },
    {
      id: 13562,
      number: 116,
      description:
        "|CENETEC-IMSS-062-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/, Consultado el 30 de Enero del 2015|Diagnóstico y manejo de la infección aguda de vías aéreas superiores en pacientes mayores de 3 meses hasta los 18 años de edad.",
    },
    {
      id: 13563,
      number: 117,
      description:
        "|CENETEC-IMSS-326-010/ER-RR|Dianóstico y tratamiento del absceso profundo de cuello. Referencia http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 17/03/2015|Diagnóstico y tratamiento del absceso profundo de cuello",
    },
    {
      id: 13564,
      number: 118,
      description:
        "|CENETEC-SSA-291-2010/ER-RR|Disponbible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html    Actualizada en 2017|Diagnóstico y tratamiento de sépsis y choque séptico en pacientes de 1 mes a 18 años de edad",
    },
    {
      id: 13565,
      number: 119,
      description:
        "|CENETEC-IMSS-041-08|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/041_GPC_RinitisAlergica/IMSS_041_08_EyR.pdf Consultado el 26/03/2015|Diagnóstico y tratamiento de Rinitis Alérgica",
    },
    {
      id: 13566,
      number: 120,
      description:
        "|CENTEC-IMSS-350-13/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnóstico y tratamiento de la fiebre sin signos de focalización en los niños de 3 meses hasta  hasta los 5 años",
    },
    {
      id: 13567,
      number: 121,
      description:
        "|CENETEC-ISSSTE-526-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html    onsultado el 19/05/2'15|Extracción de cuerpo extraño de la via aerea en niños",
    },
    {
      id: 13568,
      number: 122,
      description:
        "|CENETEC-SS-009-08/ER-RR|Disponible en:http://cvsp.cucs.udg.mx/guias/TODAS/SS_009_08_ASMA_MENORES_DE_18ANOS/SS_009_08_GRR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de ASMA en menores de 18 años en el 1er y 2o. niveles de atención",
    },
    {
      id: 13569,
      number: 123,
      description:
        "|CENETEC-SEMAR-571-12/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el: 27/04/2015|Prevención y diagnóstico del golpe de calor en pacientes de 19-59 años en el primer nivel de atención",
    },
    {
      id: 13570,
      number: 124,
      description:
        "|CENETEC-DIF-386-12/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 17/03/2015|Diagnóstico y tratamiento oportuno de la meningitis tuberculosa de los 0 a los 5 años de edad en el primer, segundo y tercer nivel de atención",
    },
    {
      id: 13571,
      number: 125,
      description:
        "|CENETEC-SSA-310-10/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnostico, Tratamiento y Prevención de la Meningitis Aguda Bacteriana adquirida en la comunidad en paceintes adultos inmunocompetentes",
    },
    {
      id: 13572,
      number: 126,
      description:
        "|CENETEC-SSA-310-10/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 26/03/2015|Diagnóstico, tratamiento y prevención de la Meningitis Aguda Bacteriana adquirida en la comunidad en pacientes adultos inmunocompetentes",
    },
    {
      id: 13573,
      number: 127,
      description:
        "|CENETEC-IMSS-272-10/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html Consultado el 29 de Enero 2015|Diagnóstico y Tratamiento de la Sépsis Puerperal",
    },
    {
      id: 13574,
      number: 128,
      description:
        "|CENETEC-DIF-386-12/ER-RR|Disponible http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnóstico y tratamiento oportuno de la meningitis tuberculosa de los 0 a 5 años de edad en el primer, segundo y tercer nivel de atención",
    },
    {
      id: 13575,
      number: 129,
      description:
        "|CENETEC-IMSS-326-010/ER-RR|Dianóstico y tratamiento del absceso profundo de cuello. Referencia http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 17/03/2015|Diagnóstico y tratamiento del absceso profundo de cuello",
    },
    {
      id: 13576,
      number: 130,
      description:
        "|CENETEC-SS-203-09/ER-RR|Disponoble: CENETEC.SALUD.GOB.MX Consultado: 5/08/2015|Uso de la vacuna antiinfluenza en la prevención de la neumonía en el adulto mayo",
    },
    {
      id: 13577,
      number: 131,
      description:
        "|CENETEC-SS-384-09/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el: 01/06/2015|Prevención, diagnóstico y tratamiento de Influenza Estacional",
    },
  ]);
};

const getAgeCategories = (req, res) => {
  return res.status(200).json([
    {
      title: "Adulto",
      value: "Adult",
    },
    {
      title: "Todos",
      value: "All",
    },
    {
      title: "Niño (de 5 a 16 años)",
      value: "Child",
    },
    {
      title: "Geriátrico",
      value: "Geriatric",
    },
    {
      title: "Infante (de 0 a 1 años)",
      value: "Infant",
    },
    {
      title: "Recién nacido",
      value: "Newborn",
    },
    {
      title: "Niño pequeño (de 1 a 4 años)",
      value: "Toddler",
    },
  ]);
};

const getGenderCategories = (req, res) => {
  return res.status(200).json([
    {
      title: "Ambos",
      value: "BOTH",
    },
    {
      title: "Hombre",
      value: "MALE",
    },
    {
      title: "Mujer",
      value: "FEMALE",
    },
  ]);
};

const createCategory = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "categoría guardada exitosamente",
    id: 27,
  });
};

const createAlgorithm = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "protocolo guardado exitosamente",
    id: 194,
  });
};

const createReference = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Referencia creada exitosamente",
    id: 28432,
  });
};

const createQuestion = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Pregunta creada exitosamente",
    id: 28432,
  });
};

const createDiagnostic = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Diagnostico guardado con éxito",
    id: 7239
  });
};

const getIdForm = (req, res) => {
  return res.status(200).json({
    id: 10,
    emergenciaEspecifique: "emergencia ...",
    emergencia: true,
    personaQueLlama: "ADRIAN SANCHEZ ALVAREZ",
    noDevolucion: "5524003902",
    nombrePaciente: "ALICIA ALVAREZ",
    noDevolucionPaciente: "5557302082",
    correoElectronico: "adrian2115@gmail.com",
    peso: 70.0,
    entidadFederativa: "CIUDAD DE MEXICO",
    municipio: "CDMX",
    fechaNacimiento: "1975-10-09",
    edad: "47 años",
    genero: "Mujer",
    talla: 1.5,
    imc: 31.11,
    clasificacionImc: "OBESIDAD GRADO I (30-34.9)",
    tipoPaciente: "COLABORADOR",
    noEmpleado: "007",
    tipoEmpresa: "GENERAL DE SEGUROS",
    aseguradoId: null,
    contratante: null,
    nombreColaborador: null,
    especifique: null,
    fechaInicio: "2023-03-24 12:03:44",
  });
};

const getQuestionByAlgorithm = (req, res) => {
  return res.status(200).json([
    {
      type: "Y",
      shortDescription: "Olores extraños",
      description:
        "¿Percibe el paciente olores extraños que nadie más percibe?",
      number: 1,
      yes: "2",
      no: "3",
      unsure: "3",
      options: [],
      additionalInformation:
        "La epilepsia del lóbulo temporal puede presentar un aura en la que el paciente perciba olores extraños que nadie más puede oler.  Se cree que el aura procede del sistema límbico donde se producen las proyecciones del nervio olfatorio.\n\nLas personas con infecciones crónicas sinusales o por estafilococos de los conductos nasales también pueden percibir un olor desagradable o mal olor.  El tabaco y el alcohol también pueden provocar pérdida del olfato.",
    },
    {
      type: "Y",
      shortDescription: "Medicamentos, anosmia",
      description:
        "¿Toma el individuo algún tipo de medicación de forma regular, ya sea por prescripción médica como adquirida directamente?",
      number: 2,
      yes: "-1",
      no: "-2",
      unsure: "-1",
      options: [],
      additionalInformation:
        "Varios medicamentos pueden producir la alteración o la pérdida del olfato.  El captopril y la penicilamina provocan este síntoma, al igual que otros fármacos antirreumáticos y quimioterapéuticos.",
    },
    {
      type: "Y",
      shortDescription: "Anosmia por traumatismo craneal",
      description:
        "¿Se ha producido alguna lesión en la cabeza o en la cara en los últimos 6 meses?",
      number: 3,
      yes: "-3",
      no: "4",
      unsure: "4",
      options: [],
      additionalInformation:
        "Los traumatismos craneales o faciales pueden tener como consecuencia una fractura o daños a una zona del hueso cercano al caballete de la nariz (la lámina cribosa) a través del cuál pasa el sentido del olfato.  El cinco por ciento de los casos de pérdida de olfato se deben a un traumatismo nasal o facial con fractura de esta lámina.\n\nINFORMACIÓN ADICIONAL\n\nEl olor normal es el resultado de las moléculas olorosas disueltas en la mucosa nasal que cubre los procesos dendríticos de las neuronas del receptor olfativo.  Los impulsos neuronales que viajan hasta y desde el bulbo olfatorio se transmiten al sistema límbico en las capas durales profundas de los lóbulos temporales y, con el tiempo, se proyectan hasta el córtex cerebral en la región frontal donde se interpreta el olor.  La ausencia anatómica de acceso a las células receptoras del nervio olfatorio es la causa más habitual de falta de olfato y puede deberse a pólipos nasales (la mucosa edematosa aparece con rinitis alérgica, provocando obstrucción nasal y disminución del olfato), desviación septal, tumores nasales e infección vírica de las vías respiratorias superiores.  La pérdida de olfato a causa de una infección vírica de las vías respiratorias superiores puede durar varias semanas o meses.\n\nEl veinte por ciento de la anosmia es idiopática.",
    },
    {
      type: "Y",
      shortDescription: "Medicamentos, anosmia",
      description:
        "¿Toma el individuo algún tipo de medicación de forma regular, ya sea por prescripción médica como adquirida directamente?",
      number: 4,
      yes: "10",
      no: "5",
      unsure: "10",
      options: [],
      additionalInformation:
        "Varios medicamentos pueden producir la alteración o la pérdida del olfato.  El captopril y la penicilamina provocan este síntoma, al igual que otros fármacos antirreumáticos y quimioterapéuticos.",
    },
    {
      type: "Y",
      shortDescription: "Afecciones concomitantes, anosmia",
      description:
        "¿Presenta el individuo algún problema o patología médica subyacente?",
      number: 5,
      yes: "11",
      no: "6",
      unsure: "11",
      options: [],
      additionalInformation:
        "La pérdida de olfato puede desarrollarse con la insuficiencia renal y la uremia, el hipotiroidismo, la diabetes mellitus, la insuficiencia hepática y la anemia perniciosa.  Los medicamentos utilizados para tratar los trastornos reumáticos (artritis reumatoide, artritis psoriásica) pueden producir anosmia (penicilamina).  La quimioterapia también puede provocar anosmia.\n\nUn meningioma del lóbulo olfativo puede provocar una anosmia unilateral.  La anosmia bilateral puede acompañar a las encefalopatías, a las infecciones de las vías respiratorias superiores, a la rinitis alérgica y a las obstrucciones nasales.  La epilepsia psicomotora puede presentarse con un aura de anosmia o con una alteración del olfato.",
    },
    {
      type: "V",
      shortDescription: "Síntomas de rinofaringitis",
      description:
        "¿Presenta el paciente alguno de los síntomas o circunstancias siguientes?",
      number: 6,
      yes: "-6",
      no: "7",
      unsure: "7",
      options: [
        {
          succession: 1,
          description: "Garganta irritada o dolor de garganta",
          goTo: null,
        },
        {
          succession: 2,
          description: "Dolor muscular o en las articulaciones",
          goTo: null,
        },
        {
          succession: 3,
          description: "Leve dolor de cabeza",
          goTo: null,
        },
        {
          succession: 4,
          description: "Nariz taponada o goteo nasal",
          goTo: null,
        },
        {
          succession: 5,
          description: "Tos",
          goTo: null,
        },
      ],
      additionalInformation:
        "Las infecciones de las vías respiratorias altas son infecciones en la garganta (laringe), la vía respiratoria principal (tráquea) o las vías respiratorias que llevan a los pulmones (bronquios).  La mayoría de infecciones de las vías respiratorias altas se deben a infecciones víricas (catarro) y provocan congestión nasal y mucosidad.  Las reacciones alérgicas a antígenos inhalados también pueden provocar congestión nasal y mucosidad.  \n\nINFORMACIÓN ADICIONAL\n\nEl resfriado común es un complejo sintomático caracterizado por rinorrea acuosa, congestión de la mucosa nasal, dolor de garganta, dolores musculares y articulares, fiebre baja, tos, dolor de cabeza y estornudos.  La congestión alrededor de los adenoides en la nasofaringe puede dar lugar a una obstrucción de la trompa de Eustaquio que provoca un desequilibrio de la presión entre el oído medio y el exterior que retrae el tímpano.  Esto provoca una disminución de la capacidad auditiva y puede desencadenar una otitis media.  Un dolor de garganta o la hinchazón de las amígdalas pueden ir a acompañados también de dolor en el oído y parecerse al dolor de oídos.\n\nLa gripe o el resfriado suele ir acompañada de dolor de cabeza leve y puede centrarse en los senos frontales, debido a congestión nasal subyacente.  Las secreciones posnasales pueden provocar tos.  \nEl curso normal de la rinitis dura 7-10 días. En casos de pacientes inmunodeprimidos (por ejemplo, por SIDA, leucemia o neutrocitopenia), se debe acudir al consultorio médico.",
    },
    {
      type: "V",
      shortDescription: "Rinitis alérgica",
      description:
        "¿Presenta el paciente alguno de los síntomas o circunstancias siguientes?",
      number: 7,
      yes: "-7",
      no: "-8",
      unsure: "-8",
      options: [
        {
          succession: 1,
          description: "Estornudos",
          goTo: null,
        },
        {
          succession: 2,
          description: "Ojos llorosos e irritados",
          goTo: null,
        },
        {
          succession: 3,
          description: "Garganta seca e irritada",
          goTo: null,
        },
        {
          succession: 4,
          description: "Antecedentes de alergia",
          goTo: null,
        },
        {
          succession: 5,
          description: "Antecedentes de alergia al polen",
          goTo: null,
        },
      ],
      additionalInformation:
        "Las alergias que provocan mucosidad y estornudos son una de las principales causas de congestión nasal (nariz taponada). Otra posible causa puede ser la inhalación de gases irritantes.\n\nINFORMACIÓN ADICIONAL\n\nLa rinitis alérgica y vasomotora junto con rinitis vírica representan la gran mayoría de causas de congestión y secreción nasal (rinorrea). Los síntomas asociados como estornudos, picor en los ojos y antecedentes alérgicos,, indican una rinitis alérgica o vasomotora en lugar de una vírica. La congestión nasal que se produce por inhalar alérgenos (como el polen, los ácaros, etc.) es el resultado de una respuesta inmune que genera hiperemia de la mucosa nasal, incremento en la producción de mucosidad e inflamación.  La inhalación de gases nocivos u otro tipo de sustancias también puede producir una respuesta similar.",
    },
    {
      type: "E",
      description: "Prep. de KMS",
      number: 10,
      jump: null,
      keywords: "SPC:TCAA",
      disposition: {
        description: "Teléfono Médico",
        dispositionId: 4,
        instructions: [
          {
            instructionId: 12,
            title: "Disposiciones: Teléfono médico",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Comunicarse por teléfono con su médico o médico general para una evaluación complementaria de sus síntomas.",
              },
            ],
          },
          {
            instructionId: 10,
            title: "Problema olfativos CH",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Si experimenta un cambio en su capacidad olfativa y no ha tenido recientemente un resfriado/gripe, revise los síntomas con su médico de cabecera.",
              },
              {
                succession: 2,
                description:
                  "Evite el uso excesivo de espray nasal, tabaco y alérgenos conocidos que le provoquen rinitis alérgica para ayudarle a evitar la anosmia (pérdida de olfato).  ",
              },
            ],
          },
          {
            instructionId: 3,
            title: "EMPEORAMIENTO GENERAL",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Si los síntomas persisten, empeoran o aparecen otros nuevos, llámenos de nuevo para recibir asesoramiento. ",
              },
              {
                succession: 42,
                description:
                  "Differential Diagnosis|Collins RD.|Igaku-Shoin, New York, 1995.|Algorithmic Diagnosis of Symptoms and Signs: Cost-Effective Approach.>",
              },
              {
                succession: 43,
                description:
                  "Rinitis|Weissman SD.|Mosby, St Louis, 1996.|Rhinitis in Greene HL. Clinical Medicine 2 ed.>",
              },
              {
                succession: 44,
                description:
                  "General|Smith M.|BMA, Dorling Kindersley, 1990.|Complete Family Health Guide.>",
              },
              {
                succession: 45,
                description:
                  "General|Alexander, Fawcett, and Runicman.|Churchill Livingstone, 2000.|Nursing Practice the Adult.>",
              },
              {
                succession: 46,
                description:
                  "General||New York, 2000.|Merck Manual Pocket Books.>",
              },
              {
                succession: 47,
                description:
                  "General|Wyatt, Illingworth, Clancy, Munro, and Robertson.|Oxford University Press, 2001, New York.|Oxford Handbook of Accident and Emergency Medicine.>",
              },
              {
                succession: 48,
                description:
                  "Immunisation|Jenner.|HMSO, London, 1996.|Immunisation Against Infectious Disease.>",
              },
              {
                succession: 49,
                description:
                  "Allergic Rhinitis|Badhwar AK, Druce HM.|Med Clin North Amer 76:789 (1992).|Allergic Rhinitis.>",
              },
              {
                succession: 50,
                description:
                  "Nasal Obstruction|McConnel FM.|Appleton and Lange, Stamford, 1996.|Nasal Obstruction and Rhinorrhea in Hurst JW. Medicine for the Practicing Physician 4 ed.>",
              },
              {
                succession: 51,
                description:
                  "Self Care|Hagan PT.|Mayo Foundation for Medical Education and Research. Rochester, 1999.|Mayo Clinic Guide to Self-Care.>",
              },
              {
                succession: 52,
                description:
                  "Tetanus Prophylaxis|CDC.|MMWR 40:70 (1991).|Guide to Tetanus Prophylaxis in Wound Management.>",
              },
              {
                succession: 53,
                description:
                  "Medicine|Rakel R.|WB Saunders Co, Philadephia, 1995.|Textbook of Family Practice.>",
              },
              {
                succession: 54,
                description:
                  "Self Care|Moore SW.|WB Saunders, Philadelphia, 1999.|Griffith's Instructions for Patients 6 ed.>",
              },
              {
                succession: 55,
                description:
                  "Self Care|Schmitt BD.|WB Saunders, Philadelphia, 1999.|Instructions for Pediatric Patients 2 ed.>",
              },
              {
                succession: 56,
                description:
                  "Nursing|Chitwood L.|Western School Press, 1995.|Basic Trauma Nursing Skills 2 ed.>",
              },
              {
                succession: 57,
                description:
                  "Soft Tissue Pain|Cailliet R.|FA Davis, Philadelphia, 1978.|Soft Tissue Pain and Disability.>",
              },
              {
                succession: 58,
                description:
                  "Self Care|Goldman DR.|DK Publishing Inc, New York, 1999.|American College of Physicians Complete Home Medical Guide.>",
              },
              {
                succession: 59,
                description:
                  "General|Alexander, Fawcett, Runicman.|Churchill Livingstone, Spain, 2000.|Nursing Practice-Hospital and Home 2 ed.>",
              },
              {
                succession: 60,
                description:
                  "General|DOH.|Stationary Office, 2001.|Health Information for Overseas Travel.>",
              },
              {
                succession: 61,
                description:
                  "General|Gina Johnson, Ian Hill-Smith, Chris Ellis, 2 ed.|Radcliffe Medical Press.|The Minor Illness Manual, 2 ed.>",
              },
              {
                succession: 62,
                description:
                  "Drugs|BNF.|BMJ, 2001.|British National Formulary.>",
              },
              {
                succession: 63,
                description:
                  "General||BMJ 2001, 322: p. 1591-2|Aspirin Use in Children>",
              },
              {
                succession: 64,
                description:
                  "General||NEJM 2001; 341: p. 845-7|Aspirin Use in Children>",
              },
              {
                succession: 65,
                description:
                  "General|Ledingham and Warrell.|Oxford University Press 2000.|Concise Oxford Textbook of Medicine.>",
              },
              {
                succession: 66,
                description:
                  "Surgical|SIGN Guidelines.|SIGN, Edinburgh. 1999.|Management of sore throat and indications for tonsilectomy.>",
              },
              {
                succession: 67,
                description:
                  "Upper Respiratory Illness|Lauber B.|J Gen inter med; 11:229-236 1996.|The Common Cold.>",
              },
              {
                succession: 68,
                description:
                  "Upper Respiratory Illness|Glasziou P, Delmar C.|Clinical Evidence Issue 5 1068-1074|Upper Respiratory Tract Infection.>",
              },
              {
                succession: 69,
                description:
                  "General|Weatherall, DJ. et al.|Oxford Medical Publications.|Oxford Textbook of Medicine.>",
              },
              {
                succession: 70,
                description:
                  "General|Whaley and Wong.||Nursing Care of Infants-Children.>",
              },
              {
                succession: 71,
                description:
                  "General|Rudolf & Levene.|Blackwell Science, Ltd.|Paediatrics and Child Health.>",
              },
              {
                succession: 72,
                description:
                  "Differential Diagnosis|Tierney LM, McPhee SJ and Papadakis MA.|Appleton and Lange, Stamford, 1996.|Current Medical Diagnosis and Treatment 35 ed.>",
              },
              {
                succession: 73,
                description:
                  "Diabetes|www.diabetes.org.uk|London.|The Diabetes Foundation.>",
              },
              {
                succession: 74,
                description:
                  "General|Wong DL.|Mosby, St Louis, 1999.|Whaley and Wong's Nursing Care of Infants and Children 6th ed.>",
              },
              {
                succession: 75,
                description:
                  "|NICE Clinical Guideline |NICE Clinical Guideline (July 2008)|Respiratory tract infections,>",
              },
              {
                succession: 76,
                description:
                  "|Angier E, Willington J, Scadding G, et al;|Respir J. 2010 Sep;19(3):217-22.|Management of allergic and non-allergic rhinitis: a primary care summary of the Prim Care>",
              },
              {
                succession: 77,
                description:
                  "|British Society for Allergy and Clinical Immunology |British Society for Allergy and Clinical Immunology (January 2008) |Guidelines for the management of allergic and non-allergic rhinitis,>",
              },
              {
                succession: 78,
                description:
                  "|CENETEC-IMSS-041-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/041_GPC_RinitisAlergica/IMSS_041_08_EyR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de Rinitis Alérgica>",
              },
              {
                succession: 79,
                description:
                  "|CENETEC-IMSS-062-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/, Consultado el 30 de Enero del 2015|Diagnóstico y manejo de la infección aguda de vías aéreas superiores en pacientes mayores de 3 meses hasta los 18 años de edad.>",
              },
              {
                succession: 80,
                description:
                  "|CENETEC-IMSS-066-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el: 24/04/2015|Diagnóstico y manejo de la parálisis de Bell (Parálisis facial idiopática>",
              },
              {
                succession: 81,
                description:
                  "|CENETEC-IMSS-073-08, ER|Disponible en: http://www.cenetec.salud.gob.mx/, Consultado el 30 de Enero del 2015|Diagnóstico y tratamiento de la faringoamigdalitis aguda>",
              },
              {
                succession: 82,
                description:
                  "|CENETEC-IMSS-080-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado 02/04/2015|Diagnóstico y tratamiento de la sinusitis aguda>",
              },
              {
                succession: 83,
                description:
                  "|CENETEC-IMSS-180-09/ER-RR|Disponible en:http://www.cenetec.gob.mx/spry/v2/GPCbusqueda2.html consultado el 23/03/2015|Diagnóstico y tratamiento de epistaxis>",
              },
              {
                succession: 84,
                description:
                  "|CENETEC-IMSS-258-010/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 18/05/2015 |Diagnóstico y manejo de la laringotraqueitis aguda en pacientes mayores de 3 meses hasta 15 años de edad>",
              },
              {
                succession: 85,
                description:
                  "|CENETEC-IMSS-261-010/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 02/04/2015|Diagnóstico y tratamiento de la rinosinusitis aguda en edad pediátrica>",
              },
              {
                succession: 86,
                description:
                  "|CENETEC-IMSS-334-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/334_IMSS_09_Epiglotitis_Aguda_Preescolar/EyR_IMSS_334_09.pdf Consultado 26/03/2015|Diagnóstico, tratamiento y Prevención de la Epiglotitis Aguda en edad preescolar y escola>",
              },
              {
                succession: 87,
                description:
                  "|CENETEC-IMSS-438-11/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. consultado el 07/04/2015|Diagnóstico y tratamiento de otitis externa aguda en adultos>",
              },
              {
                succession: 88,
                description:
                  "|CENETEC-IMSS-496-11/ER/RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consultado el 07/04/2015|Prevención, diagnóstico y tratamiento de la otitis media aguda en la edad pediátrica>",
              },
              {
                succession: 89,
                description:
                  "|CENETEC-IMSS-521-11/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnóstico y tratamiento de mastoiditis aguda>",
              },
              {
                succession: 90,
                description:
                  "|CENETEC-IMSS-587-12/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 01/06/2015|Rinitis No alergica: Diagnóstico y tratamiento>",
              },
              {
                succession: 91,
                description:
                  "|CENETEC-IMSS-613-13/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 01/06/2015 |Diagnóstico y tratamiento de cerúmen impactado>",
              },
              {
                succession: 92,
                description:
                  "|CENETEC-IMSS-697-013/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consultado el 19/03/2015|Diagnóstico y tratamiento de barotrauma de oido medio en el primer nivel de atención>",
              },
              {
                succession: 93,
                description:
                  "|CENETEC-ISSSTE-638-013/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consultado el 07/04/2015|Diagnóstico y tratamiento de las complicaciones intratemporales de la otitis media supurativa en niños y adultos en el segundo y tercer nivel de atención.>",
              },
              {
                succession: 94,
                description:
                  "|CENETEC-IMSS-032-08/ER-RR|Disponible en:http://www.cenetec.gob.mx/spry/v2/catalogoGPC_v2.2.html Consultado el 01/04/2015|Diagnóstico y manejo en niños con bronquiolitis en fase aguda>",
              },
              {
                succession: 95,
                description:
                  "|CENETEC-SS-009-08/ER-RR|Disponible en:http://cvsp.cucs.udg.mx/guias/TODAS/SS_009_08_ASMA_MENORES_DE_18ANOS/SS_009_08_GRR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de ASMA en menores de 18 años en el 1er y 2o. niveles de atención>",
              },
              {
                succession: 96,
                description:
                  "|CENETEC-SS-384-09/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el: 01/06/2015|Prevención, diagnóstico y tratamiento de Influenza Estacional>",
              },
              {
                succession: 97,
                description:
                  "|CENETEC-IMSS-062-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/062_GPC__InfAgVASde3mesesa18a/INFECCION_VIAS_AEREAS_EVR_CENETEC.pdf  Consultado 24/03/2015|Diagnóstico y tratamiento de la Infección Aguda de Vías Aéreas Superiores en Pacientes Mayores de 3 meses hasta 18 añosf>",
              },
              {
                succession: 98,
                description:
                  "|CENETEC-IMSS-062-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consutlado el 02/04/2015|Diagnóstico y manejo de la infección aguda de vias aéreas superiores en mayores de 3 meses hasta los 18 años de edad>",
              },
              {
                succession: 99,
                description:
                  "|CENETEC-IMSS-334-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/334_IMSS_09_Epiglotitis_Aguda_Preescolar/EyR_IMSS_334_09.pdf   Consultado el 19/05/2015|Diagnóstico, tratamiento y prevención  de la epiglotitis aguda en edad prescolar y escolar>",
              },
              {
                succession: 100,
                description:
                  "|CENETEC-IMSS-438-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consjultado el 18/03/2015|Diagnostico y tratamiento de otitis aguda en adultos>",
              },
              {
                succession: 101,
                description:
                  "|CENETEC-S-009-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. consultado 17/03/2015|Diagnóstico y manejo del asma en menores de 18 años de edad en el primer y segundo nivel de atención>",
              },
              {
                succession: 102,
                description:
                  "|CENETEC-SS-384-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consuiltado el 27/04/2015|Prevención, diagnóstico y tratamiento de la influenza estacional>",
              },
              {
                succession: 103,
                description:
                  "|CENETEC-IMSS-041-08|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/041_GPC_RinitisAlergica/IMSS_041_08_EyR.pdf Consultado el 26/03/2015|Diagnóstico y tratamiento de Rinitis Alérgica>",
              },
              {
                succession: 104,
                description:
                  "|CENETEC-IMSS-261-010/ER-RR|Disponible en:http://cvsp.cucs.udg.mx/guias/TODAS/IMSS_261_10_RINOSINUSITIS/IMSS_261_10_EyR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de la Rinosinusitis Aguda en la edad Pediátrica>",
              },
              {
                succession: 105,
                description:
                  "Allergic Rhinitis|Patient.co.uk|Accessed 06/06/2012 Available at http://www.patient.co.uk/health/Rhinitis-(Persistent).htm|Rhinitis - Persistent>",
              },
              {
                succession: 106,
                description:
                  "Allergic Rhinitis|Sheikh A, Hurwitz B, Nurmatov U, van Schayck CP|Cochrane Database of Systematic Reviews 2010, Issue 7. Art. No.: CD001563. DOI: 10.1002/14651858.CD001563.pub3. |House dust mite avoidance measures for perennial allergic rhinitis.>",
              },
              {
                succession: 107,
                description:
                  "Rhinitis|Clinical Knowledge Summaries|Accessed 07/06/2012 Available at http://www.cks.nhs.uk/allergic_rhinitis/management/scenario_starting_treatment/first_line_treatment_for_allergic_rhinitis|rhinitis/management/scenario>",
              },
              {
                succession: 108,
                description:
                  "|CENETEC-IMSS-062-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/, Consultado el 30 de Enero del 2015|Diagnóstico y manejo de la infección aguda de vías aéreas superiores en pacientes mayores de 3 meses hasta los 18 años de edad.>",
              },
              {
                succession: 109,
                description:
                  "|CENETEC-SS-210-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado el 28/05/2015|Diagnóstico y tratamiento de la epilepsia en el adulto>",
              },
              {
                succession: 110,
                description:
                  "|CENETEC-IMSS-047-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html.Consultado el06/04/2015|Manejo de cefalea tensional y migraña en el adult>",
              },
              {
                succession: 111,
                description:
                  "|CENETEC-IMSS-080-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado 02/04/2015|Diagnóstico y tratamiento de la sinusitis aguda>",
              },
              {
                succession: 112,
                description:
                  "|CENETEC-IMSS-244-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html    Consultado el 28/05/2015|Diagnóstico y tratamiento de la primera crisis convulsiva en niños>",
              },
              {
                succession: 113,
                description:
                  "|CENETEC-IMSS-328/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 29/07/2015|Diagnóstico y tratamiento de la desviación septal nasal>",
              },
              {
                succession: 114,
                description:
                  "|CENETEC-IMSS-458-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 29/07/2015|Diagnóstico y tratamiento de los pólipos nasales en el adulto>",
              },
              {
                succession: 115,
                description:
                  "|CENETEC-SS-305-010/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 15/05/2015|Tratamiento de la enfermedad de Parkinson en el 3er nivel de atención>",
              },
              {
                succession: 116,
                description:
                  "|CENETEC-IMSS-041-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/041_GPC_RinitisAlergica/IMSS_041_08_EyR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de Rinitis Alérgica>",
              },
              {
                succession: 117,
                description:
                  "|CENETEC-IMSS-258-010/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 18/05/2015 |Diagnóstico y manejo de la laringotraqueitis aguda en pacientes mayores de 3 meses hasta 15 años de edad>",
              },
              {
                succession: 118,
                description:
                  "|CENETEC-IMSS-334-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/334_IMSS_09_Epiglotitis_Aguda_Preescolar/EyR_IMSS_334_09.pdf   Consultado el 19/05/2015|Diagnóstico, tratamiento y prevención  de la epiglotitis aguda en edad prescolar y escolar>",
              },
              {
                succession: 119,
                description:
                  "|CENETEC-IMSS-521-11/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnóstico y tratamiento de mastoiditis aguda>",
              },
              {
                succession: 120,
                description:
                  "|CENETEC-SS-009-08/ER-RR|Disponible en:http://cvsp.cucs.udg.mx/guias/TODAS/SS_009_08_ASMA_MENORES_DE_18ANOS/SS_009_08_GRR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de ASMA en menores de 18 años en el 1er y 2o. niveles de atención>",
              },
              {
                succession: 121,
                description:
                  "|CENETEC-IMSS-578-012/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 02 de junio del 2015|Diagnóstico y tratamiento de fractura cerrada de meseta tibial en el adulto>",
              },
              {
                succession: 123,
                description: '"b531c7ce-b3bd-479b-8513-eca3b5356d7b" Title',
              },
            ],
          },
        ],
      },
    },
    {
      type: "E",
      description: "Prep. de KMS",
      number: 11,
      jump: null,
      keywords: "SPC:TCAA",
      disposition: {
        description: "Teléfono Médico",
        dispositionId: 5,
        instructions: [
          {
            instructionId: 12,
            title: "Disposiciones: Teléfono médico",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Comunicarse por teléfono con su médico o médico general para una evaluación complementaria de sus síntomas.",
              },
            ],
          },
          {
            instructionId: 10,
            title: "Problema olfativos CH",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Si experimenta un cambio en su capacidad olfativa y no ha tenido recientemente un resfriado/gripe, revise los síntomas con su médico de cabecera.",
              },
              {
                succession: 2,
                description:
                  "Evite el uso excesivo de espray nasal, tabaco y alérgenos conocidos que le provoquen rinitis alérgica para ayudarle a evitar la anosmia (pérdida de olfato).  ",
              },
            ],
          },
          {
            instructionId: 3,
            title: "EMPEORAMIENTO GENERAL",
            instructionDescriptionList: [
              {
                succession: 1,
                description:
                  "Si los síntomas persisten, empeoran o aparecen otros nuevos, llámenos de nuevo para recibir asesoramiento. ",
              },
              {
                succession: 42,
                description:
                  "Differential Diagnosis|Collins RD.|Igaku-Shoin, New York, 1995.|Algorithmic Diagnosis of Symptoms and Signs: Cost-Effective Approach.>",
              },
              {
                succession: 43,
                description:
                  "Rinitis|Weissman SD.|Mosby, St Louis, 1996.|Rhinitis in Greene HL. Clinical Medicine 2 ed.>",
              },
              {
                succession: 44,
                description:
                  "General|Smith M.|BMA, Dorling Kindersley, 1990.|Complete Family Health Guide.>",
              },
              {
                succession: 45,
                description:
                  "General|Alexander, Fawcett, and Runicman.|Churchill Livingstone, 2000.|Nursing Practice the Adult.>",
              },
              {
                succession: 46,
                description:
                  "General||New York, 2000.|Merck Manual Pocket Books.>",
              },
              {
                succession: 47,
                description:
                  "General|Wyatt, Illingworth, Clancy, Munro, and Robertson.|Oxford University Press, 2001, New York.|Oxford Handbook of Accident and Emergency Medicine.>",
              },
              {
                succession: 48,
                description:
                  "Immunisation|Jenner.|HMSO, London, 1996.|Immunisation Against Infectious Disease.>",
              },
              {
                succession: 49,
                description:
                  "Allergic Rhinitis|Badhwar AK, Druce HM.|Med Clin North Amer 76:789 (1992).|Allergic Rhinitis.>",
              },
              {
                succession: 50,
                description:
                  "Nasal Obstruction|McConnel FM.|Appleton and Lange, Stamford, 1996.|Nasal Obstruction and Rhinorrhea in Hurst JW. Medicine for the Practicing Physician 4 ed.>",
              },
              {
                succession: 51,
                description:
                  "Self Care|Hagan PT.|Mayo Foundation for Medical Education and Research. Rochester, 1999.|Mayo Clinic Guide to Self-Care.>",
              },
              {
                succession: 52,
                description:
                  "Tetanus Prophylaxis|CDC.|MMWR 40:70 (1991).|Guide to Tetanus Prophylaxis in Wound Management.>",
              },
              {
                succession: 53,
                description:
                  "Medicine|Rakel R.|WB Saunders Co, Philadephia, 1995.|Textbook of Family Practice.>",
              },
              {
                succession: 54,
                description:
                  "Self Care|Moore SW.|WB Saunders, Philadelphia, 1999.|Griffith's Instructions for Patients 6 ed.>",
              },
              {
                succession: 55,
                description:
                  "Self Care|Schmitt BD.|WB Saunders, Philadelphia, 1999.|Instructions for Pediatric Patients 2 ed.>",
              },
              {
                succession: 56,
                description:
                  "Nursing|Chitwood L.|Western School Press, 1995.|Basic Trauma Nursing Skills 2 ed.>",
              },
              {
                succession: 57,
                description:
                  "Soft Tissue Pain|Cailliet R.|FA Davis, Philadelphia, 1978.|Soft Tissue Pain and Disability.>",
              },
              {
                succession: 58,
                description:
                  "Self Care|Goldman DR.|DK Publishing Inc, New York, 1999.|American College of Physicians Complete Home Medical Guide.>",
              },
              {
                succession: 59,
                description:
                  "General|Alexander, Fawcett, Runicman.|Churchill Livingstone, Spain, 2000.|Nursing Practice-Hospital and Home 2 ed.>",
              },
              {
                succession: 60,
                description:
                  "General|DOH.|Stationary Office, 2001.|Health Information for Overseas Travel.>",
              },
              {
                succession: 61,
                description:
                  "General|Gina Johnson, Ian Hill-Smith, Chris Ellis, 2 ed.|Radcliffe Medical Press.|The Minor Illness Manual, 2 ed.>",
              },
              {
                succession: 62,
                description:
                  "Drugs|BNF.|BMJ, 2001.|British National Formulary.>",
              },
              {
                succession: 63,
                description:
                  "General||BMJ 2001, 322: p. 1591-2|Aspirin Use in Children>",
              },
              {
                succession: 64,
                description:
                  "General||NEJM 2001; 341: p. 845-7|Aspirin Use in Children>",
              },
              {
                succession: 65,
                description:
                  "General|Ledingham and Warrell.|Oxford University Press 2000.|Concise Oxford Textbook of Medicine.>",
              },
              {
                succession: 66,
                description:
                  "Surgical|SIGN Guidelines.|SIGN, Edinburgh. 1999.|Management of sore throat and indications for tonsilectomy.>",
              },
              {
                succession: 67,
                description:
                  "Upper Respiratory Illness|Lauber B.|J Gen inter med; 11:229-236 1996.|The Common Cold.>",
              },
              {
                succession: 68,
                description:
                  "Upper Respiratory Illness|Glasziou P, Delmar C.|Clinical Evidence Issue 5 1068-1074|Upper Respiratory Tract Infection.>",
              },
              {
                succession: 69,
                description:
                  "General|Weatherall, DJ. et al.|Oxford Medical Publications.|Oxford Textbook of Medicine.>",
              },
              {
                succession: 70,
                description:
                  "General|Whaley and Wong.||Nursing Care of Infants-Children.>",
              },
              {
                succession: 71,
                description:
                  "General|Rudolf & Levene.|Blackwell Science, Ltd.|Paediatrics and Child Health.>",
              },
              {
                succession: 72,
                description:
                  "Differential Diagnosis|Tierney LM, McPhee SJ and Papadakis MA.|Appleton and Lange, Stamford, 1996.|Current Medical Diagnosis and Treatment 35 ed.>",
              },
              {
                succession: 73,
                description:
                  "Diabetes|www.diabetes.org.uk|London.|The Diabetes Foundation.>",
              },
              {
                succession: 74,
                description:
                  "General|Wong DL.|Mosby, St Louis, 1999.|Whaley and Wong's Nursing Care of Infants and Children 6th ed.>",
              },
              {
                succession: 75,
                description:
                  "|NICE Clinical Guideline |NICE Clinical Guideline (July 2008)|Respiratory tract infections,>",
              },
              {
                succession: 76,
                description:
                  "|Angier E, Willington J, Scadding G, et al;|Respir J. 2010 Sep;19(3):217-22.|Management of allergic and non-allergic rhinitis: a primary care summary of the Prim Care>",
              },
              {
                succession: 77,
                description:
                  "|British Society for Allergy and Clinical Immunology |British Society for Allergy and Clinical Immunology (January 2008) |Guidelines for the management of allergic and non-allergic rhinitis,>",
              },
              {
                succession: 78,
                description:
                  "|CENETEC-IMSS-041-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/041_GPC_RinitisAlergica/IMSS_041_08_EyR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de Rinitis Alérgica>",
              },
              {
                succession: 79,
                description:
                  "|CENETEC-IMSS-062-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/, Consultado el 30 de Enero del 2015|Diagnóstico y manejo de la infección aguda de vías aéreas superiores en pacientes mayores de 3 meses hasta los 18 años de edad.>",
              },
              {
                succession: 80,
                description:
                  "|CENETEC-IMSS-066-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el: 24/04/2015|Diagnóstico y manejo de la parálisis de Bell (Parálisis facial idiopática>",
              },
              {
                succession: 81,
                description:
                  "|CENETEC-IMSS-073-08, ER|Disponible en: http://www.cenetec.salud.gob.mx/, Consultado el 30 de Enero del 2015|Diagnóstico y tratamiento de la faringoamigdalitis aguda>",
              },
              {
                succession: 82,
                description:
                  "|CENETEC-IMSS-080-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado 02/04/2015|Diagnóstico y tratamiento de la sinusitis aguda>",
              },
              {
                succession: 83,
                description:
                  "|CENETEC-IMSS-180-09/ER-RR|Disponible en:http://www.cenetec.gob.mx/spry/v2/GPCbusqueda2.html consultado el 23/03/2015|Diagnóstico y tratamiento de epistaxis>",
              },
              {
                succession: 84,
                description:
                  "|CENETEC-IMSS-258-010/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 18/05/2015 |Diagnóstico y manejo de la laringotraqueitis aguda en pacientes mayores de 3 meses hasta 15 años de edad>",
              },
              {
                succession: 85,
                description:
                  "|CENETEC-IMSS-261-010/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 02/04/2015|Diagnóstico y tratamiento de la rinosinusitis aguda en edad pediátrica>",
              },
              {
                succession: 86,
                description:
                  "|CENETEC-IMSS-334-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/334_IMSS_09_Epiglotitis_Aguda_Preescolar/EyR_IMSS_334_09.pdf Consultado 26/03/2015|Diagnóstico, tratamiento y Prevención de la Epiglotitis Aguda en edad preescolar y escola>",
              },
              {
                succession: 87,
                description:
                  "|CENETEC-IMSS-438-11/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. consultado el 07/04/2015|Diagnóstico y tratamiento de otitis externa aguda en adultos>",
              },
              {
                succession: 88,
                description:
                  "|CENETEC-IMSS-496-11/ER/RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consultado el 07/04/2015|Prevención, diagnóstico y tratamiento de la otitis media aguda en la edad pediátrica>",
              },
              {
                succession: 89,
                description:
                  "|CENETEC-IMSS-521-11/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnóstico y tratamiento de mastoiditis aguda>",
              },
              {
                succession: 90,
                description:
                  "|CENETEC-IMSS-587-12/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 01/06/2015|Rinitis No alergica: Diagnóstico y tratamiento>",
              },
              {
                succession: 91,
                description:
                  "|CENETEC-IMSS-613-13/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 01/06/2015 |Diagnóstico y tratamiento de cerúmen impactado>",
              },
              {
                succession: 92,
                description:
                  "|CENETEC-IMSS-697-013/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consultado el 19/03/2015|Diagnóstico y tratamiento de barotrauma de oido medio en el primer nivel de atención>",
              },
              {
                succession: 93,
                description:
                  "|CENETEC-ISSSTE-638-013/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consultado el 07/04/2015|Diagnóstico y tratamiento de las complicaciones intratemporales de la otitis media supurativa en niños y adultos en el segundo y tercer nivel de atención.>",
              },
              {
                succession: 94,
                description:
                  "|CENETEC-IMSS-032-08/ER-RR|Disponible en:http://www.cenetec.gob.mx/spry/v2/catalogoGPC_v2.2.html Consultado el 01/04/2015|Diagnóstico y manejo en niños con bronquiolitis en fase aguda>",
              },
              {
                succession: 95,
                description:
                  "|CENETEC-SS-009-08/ER-RR|Disponible en:http://cvsp.cucs.udg.mx/guias/TODAS/SS_009_08_ASMA_MENORES_DE_18ANOS/SS_009_08_GRR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de ASMA en menores de 18 años en el 1er y 2o. niveles de atención>",
              },
              {
                succession: 96,
                description:
                  "|CENETEC-SS-384-09/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el: 01/06/2015|Prevención, diagnóstico y tratamiento de Influenza Estacional>",
              },
              {
                succession: 97,
                description:
                  "|CENETEC-IMSS-062-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/062_GPC__InfAgVASde3mesesa18a/INFECCION_VIAS_AEREAS_EVR_CENETEC.pdf  Consultado 24/03/2015|Diagnóstico y tratamiento de la Infección Aguda de Vías Aéreas Superiores en Pacientes Mayores de 3 meses hasta 18 añosf>",
              },
              {
                succession: 98,
                description:
                  "|CENETEC-IMSS-062-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consutlado el 02/04/2015|Diagnóstico y manejo de la infección aguda de vias aéreas superiores en mayores de 3 meses hasta los 18 años de edad>",
              },
              {
                succession: 99,
                description:
                  "|CENETEC-IMSS-334-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/334_IMSS_09_Epiglotitis_Aguda_Preescolar/EyR_IMSS_334_09.pdf   Consultado el 19/05/2015|Diagnóstico, tratamiento y prevención  de la epiglotitis aguda en edad prescolar y escolar>",
              },
              {
                succession: 100,
                description:
                  "|CENETEC-IMSS-438-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. Consjultado el 18/03/2015|Diagnostico y tratamiento de otitis aguda en adultos>",
              },
              {
                succession: 101,
                description:
                  "|CENETEC-S-009-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html. consultado 17/03/2015|Diagnóstico y manejo del asma en menores de 18 años de edad en el primer y segundo nivel de atención>",
              },
              {
                succession: 102,
                description:
                  "|CENETEC-SS-384-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consuiltado el 27/04/2015|Prevención, diagnóstico y tratamiento de la influenza estacional>",
              },
              {
                succession: 103,
                description:
                  "|CENETEC-IMSS-041-08|Disponible en: http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/041_GPC_RinitisAlergica/IMSS_041_08_EyR.pdf Consultado el 26/03/2015|Diagnóstico y tratamiento de Rinitis Alérgica>",
              },
              {
                succession: 104,
                description:
                  "|CENETEC-IMSS-261-010/ER-RR|Disponible en:http://cvsp.cucs.udg.mx/guias/TODAS/IMSS_261_10_RINOSINUSITIS/IMSS_261_10_EyR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de la Rinosinusitis Aguda en la edad Pediátrica>",
              },
              {
                succession: 105,
                description:
                  "Allergic Rhinitis|Patient.co.uk|Accessed 06/06/2012 Available at http://www.patient.co.uk/health/Rhinitis-(Persistent).htm|Rhinitis - Persistent>",
              },
              {
                succession: 106,
                description:
                  "Allergic Rhinitis|Sheikh A, Hurwitz B, Nurmatov U, van Schayck CP|Cochrane Database of Systematic Reviews 2010, Issue 7. Art. No.: CD001563. DOI: 10.1002/14651858.CD001563.pub3. |House dust mite avoidance measures for perennial allergic rhinitis.>",
              },
              {
                succession: 107,
                description:
                  "Rhinitis|Clinical Knowledge Summaries|Accessed 07/06/2012 Available at http://www.cks.nhs.uk/allergic_rhinitis/management/scenario_starting_treatment/first_line_treatment_for_allergic_rhinitis|rhinitis/management/scenario>",
              },
              {
                succession: 108,
                description:
                  "|CENETEC-IMSS-062-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/, Consultado el 30 de Enero del 2015|Diagnóstico y manejo de la infección aguda de vías aéreas superiores en pacientes mayores de 3 meses hasta los 18 años de edad.>",
              },
              {
                succession: 109,
                description:
                  "|CENETEC-SS-210-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html  Consultado el 28/05/2015|Diagnóstico y tratamiento de la epilepsia en el adulto>",
              },
              {
                succession: 110,
                description:
                  "|CENETEC-IMSS-047-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html.Consultado el06/04/2015|Manejo de cefalea tensional y migraña en el adult>",
              },
              {
                succession: 111,
                description:
                  "|CENETEC-IMSS-080-08/ER-RR|Disponible en: http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado 02/04/2015|Diagnóstico y tratamiento de la sinusitis aguda>",
              },
              {
                succession: 112,
                description:
                  "|CENETEC-IMSS-244-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html    Consultado el 28/05/2015|Diagnóstico y tratamiento de la primera crisis convulsiva en niños>",
              },
              {
                succession: 113,
                description:
                  "|CENETEC-IMSS-328/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 29/07/2015|Diagnóstico y tratamiento de la desviación septal nasal>",
              },
              {
                succession: 114,
                description:
                  "|CENETEC-IMSS-458-11/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 29/07/2015|Diagnóstico y tratamiento de los pólipos nasales en el adulto>",
              },
              {
                succession: 115,
                description:
                  "|CENETEC-SS-305-010/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 15/05/2015|Tratamiento de la enfermedad de Parkinson en el 3er nivel de atención>",
              },
              {
                succession: 116,
                description:
                  "|CENETEC-IMSS-041-08/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/041_GPC_RinitisAlergica/IMSS_041_08_EyR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de Rinitis Alérgica>",
              },
              {
                succession: 117,
                description:
                  "|CENETEC-IMSS-258-010/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, consultado el 18/05/2015 |Diagnóstico y manejo de la laringotraqueitis aguda en pacientes mayores de 3 meses hasta 15 años de edad>",
              },
              {
                succession: 118,
                description:
                  "|CENETEC-IMSS-334-09/ER-RR|Disponible en:http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/334_IMSS_09_Epiglotitis_Aguda_Preescolar/EyR_IMSS_334_09.pdf   Consultado el 19/05/2015|Diagnóstico, tratamiento y prevención  de la epiglotitis aguda en edad prescolar y escolar>",
              },
              {
                succession: 119,
                description:
                  "|CENETEC-IMSS-521-11/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 17/03/2015|Diagnóstico y tratamiento de mastoiditis aguda>",
              },
              {
                succession: 120,
                description:
                  "|CENETEC-SS-009-08/ER-RR|Disponible en:http://cvsp.cucs.udg.mx/guias/TODAS/SS_009_08_ASMA_MENORES_DE_18ANOS/SS_009_08_GRR.pdf Consultado el 27/03/2015|Diagnóstico y tratamiento de ASMA en menores de 18 años en el 1er y 2o. niveles de atención>",
              },
              {
                succession: 121,
                description:
                  "|CENETEC-IMSS-578-012/ER-RR|Disponible en http://www.cenetec.salud.gob.mx/contenidos/gpc/catalogoMaestroGPC.html, Consultado el 02 de junio del 2015|Diagnóstico y tratamiento de fractura cerrada de meseta tibial en el adulto>",
              },
              {
                succession: 123,
                description: '"b531c7ce-b3bd-479b-8513-eca3b5356d7b" Title',
              },
            ],
          },
        ],
      },
    },
  ]);
};

const getQuestionItems = (req, res) => {
  return res
    .status(200)
    .json([
      "Pregunta 1",
      "Pregunta 2",
      "Pregunta 3",
      "Pregunta 4",
      "Pregunta 6",
      "Pregunta 7",
      "Pregunta 8",
      "Pregunta 9",
      "Pregunta 10",
      "Pregunta 11",
      "Pregunta 12",
      "Pregunta 13",
      "Pregunta 14",
      "Pregunta 15",
      "Pregunta 16",
      "Pregunta 17",
      "Pregunta 18",
      "Pregunta 19",
      "Pregunta 20",
      "Pregunta 21",
      "Pregunta 22",
      "Pregunta 23",
      "Pregunta 24",
      "Pregunta 25",
      "Pregunta 26",
      "Pregunta 27",
      "Pregunta 28",
      "Pregunta 29",
      "Pregunta 30",
      "Pregunta 31",
      "Pregunta 32",
      "Pregunta 33",
      "Pregunta 34",
      "Pregunta 35",
      "Pregunta 36",
      "Pregunta 37",
      "Pregunta 38",
      "Pregunta 39",
      "Pregunta 40",
      "Pregunta 41",
      "Pregunta 42",
      "Pregunta 43",
      "Pregunta 44",
      "Pregunta 45",
      "Pregunta 48",
      "Pregunta 49",
      "Pregunta 52",
      "Pregunta 53",
      "Pregunta 54",
      "Pregunta 55",
      "Pregunta 56",
      "Pregunta 57",
      "Pregunta 58",
      "Pregunta 59",
      "Pregunta 60",
      "Pregunta 61",
      "Pregunta 62",
      "Pregunta 63",
      "Pregunta 64",
      "Pregunta 65",
      "Pregunta 66",
      "Pregunta 67",
      "Pregunta 68",
      "Pregunta 69",
      "Pregunta 70",
      "Pregunta 71",
      "Pregunta 72",
      "Pregunta 73",
      "Pregunta 74",
      "Pregunta 75",
      "Pregunta 76",
      "Pregunta 77",
      "Diagnostico 2",
      "Diagnostico 7",
      "Diagnostico 9",
      "Diagnostico 11",
      "Diagnostico 12",
      "Diagnostico 13",
      "Diagnostico 14",
      "Diagnostico 15",
      "Diagnostico 16",
      "Diagnostico 17",
      "Diagnostico 18",
      "Diagnostico 19",
      "Diagnostico 20",
      "Diagnostico 22",
      "Diagnostico 24",
      "Diagnostico 25",
      "Diagnostico 26",
      "Diagnostico 27",
      "Diagnostico 28",
      "Diagnostico 29",
      "Diagnostico 30",
      "Diagnostico 31",
      "Diagnostico 32",
      "Diagnostico 33",
      "Diagnostico 34",
      "Diagnostico 35",
      "Diagnostico 38",
      "Diagnostico 43",
      "Diagnostico 44",
      "Diagnostico 45",
      "Diagnostico 46",
      "Diagnostico 47",
      "Diagnostico 48",
      "Diagnostico 50",
      "Diagnostico 52",
      "Diagnostico 56",
      "Diagnostico 57",
      "Diagnostico 58",
      "Diagnostico 59",
      "Diagnostico 60",
      "Diagnostico 61",
      "Diagnostico 62",
      "Cambiar a algoritmo: 159 - Quemaduras",
    ]);
};

const getDiagnostics = (req, res) => {
  return res.status(200).json([
    {
      "number": 1,
      "description": "Concertar cita con MG / Especialista"
    },
    {
      "number": 2,
      "description": "Concertar cita con MG / Especialista"
    },
    {
      "number": 3,
      "description": "Autocuidados"
    },
    {
      "number": 4,
      "description": "Concertar cita con MG / Especialista"
    },
    {
      "number": 5,
      "description": "Concertar cita con MG / Especialista"
    }
  ]);
}

const getDiagnostic = (req, res) => {
  return res.status(200).json({
    type: "E",
    shortDescription: "",
    number: 1,
    disposition: {
      description: "Atención MG/Especialista en menos de 12 horas",
      dispositionId: 1,
      instructions: [
        {
          instructionId: 8,
          title: "Medicación para el dolor o la fiebre en bebés y niños",
          instructionDescriptionList: [
            {
              id: 50371,
              succession: 1,
              description:
                "NO administre paracetamol a bebés de menos de 1 mes sin consultar previamente con un médico.",
            },
            {
              id: 50372,
              succession: 2,
              description:
                "NO administre ibuprofeno a bebés de menos de 6 meses sin consultar con un médico.",
            },
            {
              id: 50373,
              succession: 3,
              description:
                "Puede utilizar paracetamol o ibuprofeno para reducir la fiebre en los bebés, dependiendo de su edad, si no se encuentran bien.",
            },
            {
              id: 50374,
              succession: 4,
              description:
                "No alterne ni combine paracetamol con ibuprofeno por costumbre. Sin embargo, puede intercalarlo en situaciones puntuales si el niño no responde al primer medicamento.",
            },
            {
              id: 50375,
              succession: 5,
              description:
                "No administre ibuprofeno si tiene historial de úlceras de estómago, indigestión o asma.",
            },
            {
              id: 50376,
              succession: 6,
              description:
                "La aspirina NO debe ser administrada en niños menores de 16 años",
            },
            {
              id: 50377,
              succession: 7,
              description:
                "Puede tomar el paracetamol o ibuprofeno con zumo o leche.",
            },
            {
              id: 50378,
              succession: 8,
              description:
                "Preste especial atención si está tomando otros medicamentos, como remedios para el resfriado, ya que también pueden contener paracetamol. Consulte con el farmacéutico sobre los medicamentos y la posología adecuados para los niños.",
            },
          ],
        },
        {
          instructionId: 9,
          title: "Autocuidados",
          instructionDescriptionList: [
            {
              id: 50379,
              succession: 1,
              description: "Reposo absoluto durante 24 horas",
            },
            {
              id: 50380,
              succession: 2,
              description: "Beber liquidos",
            },
          ],
        },
      ],
    },
  });
};

module.exports = {
  login,
  historialMedico,
  protocols,
  getQuestion1,
  getQuestion2,
  getQuestion3,
  getQuestion4,
  getFinCuestionario,
  disposition,
  getQuestionS,
  getQuestionLP,
  setHipothesis,
  setAnswers,
  validateToken,
  getPatients,
  getOMTsPatient,
  getOMT,
  getQuestionO,
  getQuestionB,
  getCategories,
  createCategory,
  getReferences,
  getIdForm,
  getQuestionByAlgorithm,
  getAgeCategories,
  getGenderCategories,
  createAlgorithm,
  createReference,
  getQuestionItems,
  createQuestion,
  getDiagnostic,
  createDiagnostic,
  getDiagnostics,
};
