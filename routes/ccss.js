const { Router } = require("express");
const {
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
  getQuestionB,
  getDiagnostic,
  createDiagnostic,
  getDiagnostics,
} = require("../controllers/ccss");

const router = Router();

router.post("/auth/login", login);
router.post("/omt/ficha_identificacion/guardar", (req, res = response) => {
  res.status(200).json({
    success: true,
    message: "ficha de identificiacion guardada exitosamente",
    id: 3,
  });
});
router.post("/omt/emergencia/guardar", (req, res = response) => {
  res.status(200).json({
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
});

router.post("/omt/contacto/guardar", (req, res = response) => {
  res.status(200).json({
    success: true,
    message: "contacto guardado exitosamente",
    id: 3,
  });
});

router.get("/catalogos/imc", (req, res = response) => {
  res.status(200).json([
    {
      id: 1,
      title: "BAJO PESO (≤18.5)",
    },
    {
      id: 2,
      title: "PESO ADECUADO (18.5-24.9)",
    },
    {
      id: 3,
      title: "SOBREPESO (25-29.9)",
    },
    {
      id: 4,
      title: "OBESIDAD GRADO I (30-34.9)",
    },
    {
      id: 5,
      title: "OBESIDAD GRADO II (35-39.9)",
    },
    {
      id: 6,
      title: "OBESIDAD GRADO III (≥40)",
    },
  ]);
});

router.get("/catalogos/estado", (req, res = response) => {
  res.status(200).json([
    {
      id: 1,
      title: "AGUASCALIENTES",
    },
    {
      id: 2,
      title: "BAJA CALIFORNIA",
    },
    {
      id: 3,
      title: "BAJA CALIFORNIA SUR",
    },
    {
      id: 4,
      title: "CAMPECHE",
    },
    {
      id: 5,
      title: "COAHUILA",
    },
    {
      id: 6,
      title: "COLIMA",
    },
    {
      id: 7,
      title: "CHIAPAS",
    },
    {
      id: 8,
      title: "CHIHUAHUA",
    },
    {
      id: 9,
      title: "CIUDAD DE MEXICO",
    },
    {
      id: 10,
      title: "DURANGO",
    },
    {
      id: 11,
      title: "GUANAJUATO",
    },
    {
      id: 12,
      title: "GUERRERO",
    },
    {
      id: 13,
      title: "HIDALGO",
    },
    {
      id: 14,
      title: "JALISCO",
    },
    {
      id: 15,
      title: "MEXICO",
    },
    {
      id: 16,
      title: "MICHOACAN",
    },
    {
      id: 17,
      title: "MORELOS",
    },
    {
      id: 18,
      title: "NAYARIT",
    },
    {
      id: 19,
      title: "NUEVO LEON",
    },
    {
      id: 20,
      title: "OAXACA",
    },
    {
      id: 21,
      title: "PUEBLA",
    },
    {
      id: 22,
      title: "QUERETARO",
    },
    {
      id: 23,
      title: "QUINTANA ROO",
    },
    {
      id: 24,
      title: "SAN LUIS POTOSI",
    },
    {
      id: 25,
      title: "SINALOA",
    },
    {
      id: 26,
      title: "SONORA",
    },
    {
      id: 27,
      title: "TABASCO",
    },
    {
      id: 28,
      title: "TAMAULIPAS",
    },
    {
      id: 29,
      title: "TLAXCALA",
    },
    {
      id: 30,
      title: "VERACRUZ",
    },
    {
      id: 31,
      title: "YUCATAN",
    },
    {
      id: 32,
      title: "ZACATECAS",
    },
  ]);
});

router.get("/omt/contacto/listar-nombres", (req, res = response) => {
  res.status(200).json([
    {
      empresa: "GENERAL DE SALUD",
      nombre: "ADRIAN PEREZ PEREZ",
      fechaNacimiento: "1992-12-19",
    },
    {
      empresa: "GENERAL DE SALUD",
      nombre: "MANUEL PEREZ GONZALEZ",
      fechaNacimiento: "1985-10-23",
    },
  ]);
});

router.post("/omt/contacto/buscar", (req, res = response) => {
  res.status(200).json([
    {
      id: 1,
      nombre: "ADRIAN SANCHEZ ALVAREZ",
      fechaNacimiento: "1992-12-19",
      edad: "30",
      peso: 80.0,
      talla: 1.8,
      genero: "Hombre",
      estado: "CIUDAD DE MEXICO",
      municipio: "NEZAHUALCOYOTL",
      correoElectronico: "algo@vinco.com",
      numeroDevolucion: "5524003902",
      imc: 24.69,
      clasificacionImc: "PESO ADECUADO (18.5-24.9)",
      tipoPaciente: "ASEGURADO",
      noEmpleado: "",
      tipoEmpresa: null,
      aseguradoId: "12345",
      contratante: "lo quesea",
      nobmreColaborador: null,
      especifique: null,
    },
  ]);
});

router.get("/catalogos/tipo_empresa", (req, res = response) => {
  res.status(200).json([
    {
      id: 1,
      title: "GENERAL DE SALUD",
    },
    {
      id: 2,
      title: "GENERAL DE SEGUROS",
    },
    {
      id: 3,
      title: "GPV",
    },
    {
      id: 4,
      title: "REPATRIA",
    },
    {
      id: 5,
      title: "CCSS",
    },
    {
      id: 6,
      title: "EDEGA",
    },
  ]);
});

router.get("/catalogos/tipo_paciente", (req, res = response) => {
  res.status(200).json([
    {
      id: 1,
      title: "ASEGURADO",
    },
    {
      id: 2,
      title: "COLABORADOR",
    },
    {
      id: 3,
      title: "FAMILIAR DEL COLABORADOR",
    },
    {
      id: 4,
      title: "OTRO",
    },
  ]);
});
router.post("/omt/historial_medico/guardar", historialMedico);
router.get("/protocol/protocol/listAll", protocols);
router.get("/protocol/question/1/1", getQuestionB);
router.get("/protocol/question/1/2", getQuestionLP);
router.get("/protocol/question/14/1", getQuestion3);
router.get("/protocol/question/14/4", getQuestion4);
router.get("/protocol/question/14/53", getFinCuestionario);
router.get("/omt/disposicion/buscar/1", disposition);
router.post("/omt/hipotesis_diagnostica/guardar", setHipothesis);
router.post("/omt/guardar-respuestas-protocolo", setAnswers);
router.post("/auth/tokenValidate", validateToken);
router.get("/omt/paciente/list", getPatients);
router.post("/omt/paciente/omts", getOMTsPatient);
router.get("/omt/historial_medico/buscar/OMT-2", getOMT);
router.get("/protocol/category/list", getCategories);
router.post("/protocol/category/create", createCategory);
router.get("/omt/paciente/fichaIdentificacion/18", getIdForm);
router.get("/protocol/get-questions/194", getQuestionByAlgorithm);
router.get("/protocol/question/items/1", getQuestionItems);
router.get("/catalogos/age_group", getAgeCategories);
router.get("/catalogos/sex_group", getGenderCategories);
router.post("/protocol/create", createAlgorithm);
router.get("/protocol/references/list/1", getReferences);
router.post("/protocol/references/create", createReference);
router.post("/protocol/question/create", createQuestion);
router.get("/omt/diagnostico/1/1", getDiagnostic);
router.post("/omt/diagnostico/guardar", createDiagnostic);
router.get("/omt/diagnostico/list/1", getDiagnostics);

module.exports = router;
