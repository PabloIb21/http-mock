const { Router } = require("express");

const {
  login,
  verifyToken,
  enviarCorreo,
  register,
  getTopics,
  actualizarDatos,
  getUser,
  solicitarVisita,
  getSchoolGrades,
  getProfiles,
  getSchoolTypes,
  solicitarPatrocinio,
  recuperarContraseñaPOST,
  getSuggestions,
  getFAQ,
  getVentajas,
  newPassword,
  getContactPreferences,
  getSchedules,
  getServices,
  getRequirements,
  getSpRequirements,
  downloadSpRequirement,
  getJustifications,
  downloadJustificationPDF,
  downloadJustificationWord,
} = require("../controllers/mmyt");

const router = Router();

router.post("/users/sign_in", login);
router.post("/users", register);
router.get("/users/:id", getUser);
router.patch("/users/:id", actualizarDatos);
router.post("/auth/verify-token", verifyToken);
router.post("/contacts", enviarCorreo);
router.get("/themes", getTopics);
router.get("/school_grades", getSchoolGrades);
router.get("/profiles", getProfiles);
router.get("/school_types", getSchoolTypes);
router.post("/appointments", solicitarVisita);
router.post("/sponsorship_requests", solicitarPatrocinio);
router.post("/users/password", recuperarContraseñaPOST);
router.put("/users/password", newPassword);
router.get("/content_groups/sugerencias", getSuggestions);
router.get("/content_groups/faq", getFAQ);
router.get("/content_groups/ventajas", getVentajas);
router.get("/contact_preferences", getContactPreferences);
router.get("/schedules", getSchedules);
router.get("/services", getServices);
router.get("/requirements", getRequirements);
router.get("/sponsorship_requirements", getSpRequirements);
router.get("/sponsorship_requirements/:id/download", downloadSpRequirement);
router.get("/justifications", getJustifications);
router.get("/justifications/:id/download_pdf", downloadJustificationPDF);
router.get("/justifications/:id/download_word", downloadJustificationWord);

module.exports = router;
