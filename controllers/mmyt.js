const login = (req, res) => {
  return res.status(200).json({
    status: "success",
    data: {
      id: 1,
      email: "jaja@jaja.com",
      name: "Andres",
      first_lastname: "Ramírez",
      second_lastname: "Avilés",
      auth_token:
        "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1MTdiMDczYy0yM2E5LTRhMjgtYTllMy01YjY5MTM5YTA3MDQiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzAzMDIyMzYwLCJleHAiOjE3MDMxMDg3NjB9.KoyUDeLAxHBUJQWzryJHjkyV4b9RkgCjGs4RUoaNc08",
    },
  });
  // return res.status(401).json({
  //   status: 401,
  //   message: "Unauthorized",
  //   errors: [
  //     {
  //       parameter: "credentials",
  //       detail: "Email o contraseña inválidos.",
  //     },
  //   ],
  // });
};

const register = (req, res) => {
  return res.status(200).json({
    id: 7,
    email: "alex6@mail.com",
    name: "Alex",
    first_lastname: "Garcia",
    second_lastname: "Escalante",
    phone: "1234567890",
    school: "Mi escuela",
    date_of_birth: "2017-05-25",
    subject: "Historia",
    created_at: "2023-12-19T22:13:25.432Z",
    updated_at: "2023-12-19T22:13:25.432Z",
    jti: "2c5f522b-8ac4-4903-b114-a05d392421a4",
    school_grade_id: 2,
    profile_id: 1,
    school_type_id: 1,
  });
  // return res.status(400).json({
  //   status: 400,
  //   message: "Bad Request",
  //   errors: [
  //     {
  //       parameter: "email",
  //       detail: "ya está en uso",
  //     },
  //   ],
  // });
};

const getUser = (req, res) => {
  return res.status(200).json({
    data: {
      id: "7",
      type: "users",
      attributes: {
        name: "Alex",
        first_lastname: "Garcia",
        second_lastname: "Escalante",
        email: "alex6@mail.com",
        created_at: "2023-12-19T22:13:25.432Z",
        updated_at: "2023-12-19T22:13:25.432Z",
        phone: "1234567890",
        date_of_birth: "2017-05-25",
        school_grade_id: 2,
        profile_id: 1,
        school_type_id: 1,
      },
      relationships: {
        profile: {
          data: {
            type: "profiles",
            id: "1",
          },
        },
        school_grade: {
          data: {
            type: "school_grades",
            id: "2",
          },
        },
        school_type: {
          data: {
            type: "school_type",
            id: "1",
          },
        },
        themes: {
          data: [
            {
              type: "themes",
              id: "1",
            },
            {
              type: "themes",
              id: "2",
            },
            {
              type: "themes",
              id: "3",
            },
          ],
        },
      },
    },
    included: [
      {
        id: "1",
        type: "profiles",
        attributes: {
          name: "Profesor",
          description: null,
        },
      },
      {
        id: "2",
        type: "school_grades",
        attributes: {
          name: "Secundaria",
        },
      },
      {
        id: "1",
        type: "school_type",
        attributes: {
          name: "Oficial",
        },
      },
      {
        id: "1",
        type: "themes",
        attributes: {
          name: "Tema 1",
        },
      },
      {
        id: "2",
        type: "themes",
        attributes: {
          name: "Tema 2",
        },
      },
      {
        id: "3",
        type: "themes",
        attributes: {
          name: "Tema 3",
        },
      },
    ],
    jsonapi: {
      version: "1.0",
    },
  });
};

const actualizarDatos = (req, res) => {
  return res.status(200).json({
    data: {
      id: "7",
      type: "users",
      attributes: {
        name: "Alex",
        first_lastname: "Garcia",
        second_lastname: "Escalante",
        email: "alex6@mail.com",
        created_at: "2023-12-19T22:13:25.432Z",
        updated_at: "2023-12-19T22:13:25.432Z",
        phone: "1234567890",
        date_of_birth: "2017-05-25",
        school_grade_id: 2,
        profile_id: 1,
        school_type_id: 1,
      },
      relationships: {
        profile: {
          data: {
            type: "profiles",
            id: "1",
          },
        },
        school_grade: {
          data: {
            type: "school_grades",
            id: "2",
          },
        },
        school_type: {
          data: {
            type: "school_type",
            id: "1",
          },
        },
        themes: {
          data: [
            {
              type: "themes",
              id: "1",
            },
            {
              type: "themes",
              id: "2",
            },
            {
              type: "themes",
              id: "3",
            },
          ],
        },
      },
    },
    included: [
      {
        id: "1",
        type: "profiles",
        attributes: {
          name: "Profesor",
          description: null,
        },
      },
      {
        id: "2",
        type: "school_grades",
        attributes: {
          name: "Secundaria",
        },
      },
      {
        id: "1",
        type: "school_type",
        attributes: {
          name: "Oficial",
        },
      },
      {
        id: "1",
        type: "themes",
        attributes: {
          name: "Tema 1",
        },
      },
      {
        id: "2",
        type: "themes",
        attributes: {
          name: "Tema 2",
        },
      },
      {
        id: "3",
        type: "themes",
        attributes: {
          name: "Tema 3",
        },
      },
    ],
    jsonapi: {
      version: "1.0",
    },
  });
  // return res.status(400).json({
  //   status: 400,
  //   error: "Bad request",
  // });
};

const verifyToken = (req, res) => {
  return res.status(200).json({
    success: true,
  });

  // return res.status(401).json({
  //   success: false,
  // });
};

const enviarCorreo = (req, res) => {
  return res.status(200).json({
    data: {
      id: "3",
      type: "contacts",
      attributes: {
        subject: "Asunto del contacto",
        email: "correo@contacto.com",
        message: "Mensaje del contacto",
      },
    },
    jsonapi: {
      version: "1.0",
    },
  });

  // return res.status(400).json({
  //   status: 400,
  //   error: "No se pudo enviar el correo de contacto.",
  // });
};

const getTopics = (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: "1",
        type: "themes",
        attributes: {
          name: "Tema 1",
        },
      },
      {
        id: "2",
        type: "themes",
        attributes: {
          name: "Tema 2",
        },
      },
      {
        id: "3",
        type: "themes",
        attributes: {
          name: "Tema 3",
        },
      },
      {
        id: "4",
        type: "themes",
        attributes: {
          name: "Tema 4",
        },
      },
      {
        id: "5",
        type: "themes",
        attributes: {
          name: "Tema 5",
        },
      },
      {
        id: "6",
        type: "themes",
        attributes: {
          name: "Tema 6",
        },
      },
      {
        id: "7",
        type: "themes",
        attributes: {
          name: "Tema 7",
        },
      },
      {
        id: "8",
        type: "themes",
        attributes: {
          name: "Tema 8",
        },
      },
      {
        id: "9",
        type: "themes",
        attributes: {
          name: "Tema 9",
        },
      },
    ],
    links: {
      current: 1,
      previous: null,
      next: null,
      per_page: 25,
      pages: 1,
      count: 2,
    },
    jsonapi: {
      version: "1.0",
    },
  });
};

const getSchoolGrades = (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: "1",
        type: "school_grades",
        attributes: {
          name: "Primaria",
        },
      },
      {
        id: "2",
        type: "school_grades",
        attributes: {
          name: "Secundaria",
        },
      },
      {
        id: "3",
        type: "school_grades",
        attributes: {
          name: "Preparatoria/Bachilleres",
        },
      },
      {
        id: "4",
        type: "school_grades",
        attributes: {
          name: "Licenciatura",
        },
      },
      {
        id: "5",
        type: "school_grades",
        attributes: {
          name: "Otro",
        },
      },
    ],
    links: {
      current: 1,
      previous: null,
      next: null,
      per_page: 25,
      pages: 1,
      count: 4,
    },
    jsonapi: {
      version: "1.0",
    },
  });
};

const getProfiles = (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: "1",
        type: "profiles",
        attributes: {
          name: "Profesor",
          description: null,
        },
      },
      {
        id: "2",
        type: "profiles",
        attributes: {
          name: "Padre de Familia",
          description: null,
        },
      },
      {
        id: "3",
        type: "profiles",
        attributes: {
          name: "Otro",
          description: null,
        },
      },
    ],
    links: {
      current: 1,
      previous: null,
      next: null,
      per_page: 25,
      pages: 1,
      count: 1,
    },
    jsonapi: {
      version: "1.0",
    },
  });
};

const getSchoolTypes = (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: "1",
        type: "school_type",
        attributes: {
          name: "Oficial",
        },
      },
      {
        id: "2",
        type: "school_type",
        attributes: {
          name: "Particular",
        },
      },
    ],
    links: {
      current: 1,
      previous: null,
      next: null,
      per_page: 25,
      pages: 1,
      count: 2,
    },
    jsonapi: {
      version: "1.0",
    },
  });
};

const solicitarVisita = (req, res) => {
  return res.status(200).json({
    data: {
      id: "5",
      type: "appointments",
      attributes: {
        date: "2024-01-01T00:00:00.000Z",
        teacher_name: "Jhon Doe",
        students: 10,
        teachers: 1,
        parents: 5,
        user_id: 1,
        schedule_id: 1,
        contact_preference_id: 1,
        school_grade_id: 1,
      },
      relationships: {
        user: {
          meta: {
            included: false,
          },
        },
        schedule: {
          meta: {
            included: false,
          },
        },
        contact_preference: {
          meta: {
            included: false,
          },
        },
        school_grade: {
          meta: {
            included: false,
          },
        },
        services: {
          meta: {
            included: false,
          },
        },
      },
    },
    jsonapi: {
      version: "1.0",
    },
  });

  // return res.status(500).json({
  //   status: 500,
  //   error: "exception message",
  // });
};

const solicitarPatrocinio = (req, res) => {
  return res.status(200).json({
    data: {
      id: "1",
      type: "sponsorship_requests",
      attributes: {
        teacher_name: "Samanta",
        first_lastname: "Garcia",
        second_lastname: "Ramos",
        email: "sam@correo.com",
        school_address: "Av. Siempre Viva",
        reason: null,
        school_type_id: 1,
      },
      relationships: {
        school_type: {
          meta: {
            included: false,
          },
        },
      },
    },
    jsonapi: {
      version: "1.0",
    },
  });

  // return res.status(500).json({
  //   status: 500,
  //   error: "exception message",
  // });
};

const getJustifications = (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: "2",
        type: "justifications",
        attributes: {
          name: "Propuesta general de visita",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          school_grade_id: 2,
          has_file: true,
        },
        relationships: {
          school_grade: {
            data: {
              type: "school_grades",
              id: "2",
            },
          },
        },
      },
      {
        id: "3",
        type: "justifications",
        attributes: {
          name: "Propuesta general de visita",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          school_grade_id: 3,
          has_file: false,
        },
        relationships: {
          school_grade: {
            data: {
              type: "school_grades",
              id: "3",
            },
          },
        },
      },
      {
        id: "4",
        type: "justifications",
        attributes: {
          name: "Materia de historia",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          school_grade_id: 2,
          has_file: false,
        },
        relationships: {
          school_grade: {
            data: {
              type: "school_grades",
              id: "2",
            },
          },
        },
      },
      {
        id: "5",
        type: "justifications",
        attributes: {
          name: "Materia de historia",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          school_grade_id: 3,
          has_file: true,
        },
        relationships: {
          school_grade: {
            data: {
              type: "school_grades",
              id: "3",
            },
          },
        },
      },
      {
        id: "6",
        type: "justifications",
        attributes: {
          name: "Materia de cívica y ética",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          school_grade_id: 2,
          has_file: false,
        },
        relationships: {
          school_grade: {
            data: {
              type: "school_grades",
              id: "2",
            },
          },
        },
      },
      {
        id: "7",
        type: "justifications",
        attributes: {
          name: "Materia de cívica y ética",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          school_grade_id: 3,
          has_file: false,
        },
        relationships: {
          school_grade: {
            data: {
              type: "school_grades",
              id: "3",
            },
          },
        },
      },
    ],
    included: [
      {
        id: "2",
        type: "school_grades",
        attributes: {
          name: "Secundaria",
        },
      },
      {
        id: "3",
        type: "school_grades",
        attributes: {
          name: "Preparatoria/Bachilleres",
        },
      },
    ],
    links: {
      current: 1,
      previous: null,
      next: null,
      per_page: 25,
      pages: 1,
      count: 6,
    },
    jsonapi: {
      version: "1.0",
    },
  });

  // return res.status(500).json({
  //   status: 500,
  //   error: "exception message",
  // });
};

const recuperarContraseñaPOST = (req, res) => {
  return res.status(200).json({
    status: "success",
    message:
      "Instrucciones para restablecer la contraseña enviadas exitosamente.",
  });

  // return res.status(400).json({
  //   status: 400,
  //   error: "No se pudo enviar el correo de restablecimiento de contraseña."
  // });
};

const newPassword = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Contraseña restablecida exitosamente.",
  });

  // return res.status(400).json({
  //   status: 400,
  //   error: "Error 1, Error 2, ..."
  // });
};

const getFAQ = (req, res) => {
  return res.status(200).json({
    data: {
      id: "3",
      type: "content_groups",
      attributes: {
        name: "Preguntas Frecuentes",
        description: null,
      },
      relationships: {
        contents: {
          data: [
            {
              type: "contents",
              id: "11",
            },
            {
              type: "contents",
              id: "12",
            },
            {
              type: "contents",
              id: "13",
            },
            {
              type: "contents",
              id: "14",
            },
            {
              type: "contents",
              id: "15",
            },
            {
              type: "contents",
              id: "16",
            },
            {
              type: "contents",
              id: "17",
            },
          ],
        },
      },
    },
    included: [
      {
        id: "11",
        type: "contents",
        attributes: {
          title: "¿A partir de qué edad son recomendables los contenidos?",
          content: "A partir de nivel secundaria en adelante.",
          content_group_id: 3,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "12",
        type: "contents",
        attributes: {
          title: "¿Hay alguna exposición recomendada para nivel primaria?",
          content: "Respuesta",
          content_group_id: 3,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "13",
        type: "contents",
        attributes: {
          title: "¿Cuentan con recorridos guiados?",
          content: "Respuesta",
          content_group_id: 3,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "14",
        type: "contents",
        attributes: {
          title: "¿Se pueden tomar fotografías?",
          content: "Respuesta",
          content_group_id: 3,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "15",
        type: "contents",
        attributes: {
          title: "¿Cuentan con estacionamiento?",
          content: "Respuesta",
          content_group_id: 3,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "16",
        type: "contents",
        attributes: {
          title: "¿Hay acceso para personas con silla de ruedas?",
          content: "Respuesta",
          content_group_id: 3,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "17",
        type: "contents",
        attributes: {
          title: "¿Cuentan con paquetería?",
          content: "Respuesta",
          content_group_id: 3,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
    ],
    jsonapi: {
      version: "1.0",
    },
  });
};

const getVentajas = (req, res) => {
  return res.status(200).json({
    data: {
      id: "2",
      type: "content_groups",
      attributes: {
        name: "Ventajas",
        description: null,
      },
      relationships: {
        contents: {
          data: [
            {
              type: "contents",
              id: "9",
            },
            {
              type: "contents",
              id: "10",
            },
          ],
        },
      },
    },
    included: [
      {
        id: "9",
        type: "contents",
        attributes: {
          title: "Presencial",
          content:
            "Sumérgete en una experiencia única al visitar nuestro museo en grupo de manera presencial.\n      Vive una experiencia educativa enriquecedora fuera de las aulas.",
          content_group_id: 2,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "10",
        type: "contents",
        attributes: {
          title: "Virtual",
          content:
            "Explora el museo de una manera innovadora y educativa sin salir de tu espacio.\n      Experimenta nuestro museo desde la comodidad de tu hogar o escuela, en cualquier lugar de México o el mundo.",
          content_group_id: 2,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
    ],
    jsonapi: {
      version: "1.0",
    },
  });
};

const getSuggestions = (req, res) => {
  return res.status(200).json({
    data: {
      id: "1",
      type: "content_groups",
      attributes: {
        name: "Sugerencias",
        description: null,
      },
      relationships: {
        contents: {
          data: [
            {
              type: "contents",
              id: "1",
            },
            {
              type: "contents",
              id: "2",
            },
            {
              type: "contents",
              id: "3",
            },
            {
              type: "contents",
              id: "4",
            },
            {
              type: "contents",
              id: "5",
            },
            {
              type: "contents",
              id: "6",
            },
            {
              type: "contents",
              id: "7",
            },
            {
              type: "contents",
              id: "8",
            },
          ],
        },
      },
    },
    included: [
      {
        id: "1",
        type: "contents",
        attributes: {
          title: "Sugerencia 1",
          content:
            "Presentarse 15 minutos antes de la hora en que inician sus recorridos.",
          content_group_id: 1,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "2",
        type: "contents",
        attributes: {
          title: "Sugerencia 2",
          content:
            "Los grupos deberán estar completos para poder iniciar con sus actividades.",
          content_group_id: 1,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "3",
        type: "contents",
        attributes: {
          title: "Sugerencia 3",
          content:
            "El responsable del grupo deberá estar en la puerta de entrada principal para realizar\n      el conteo de asistentes junto con el personal del Museo.",
          content_group_id: 1,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "4",
        type: "contents",
        attributes: {
          title: "Sugerencia 4",
          content: "Acudir sin mochilas, bolsas grandes o bultos.",
          content_group_id: 1,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "5",
        type: "contents",
        attributes: {
          title: "Sugerencia 5",
          content: "Se pueden tomar fotografías sin flash.",
          content_group_id: 1,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "6",
        type: "contents",
        attributes: {
          title: "Sugerencia 6",
          content:
            "Por derechos de autor no está permitido grabar audio ni video.",
          content_group_id: 1,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "7",
        type: "contents",
        attributes: {
          title: "Sugerencia 7",
          content:
            "Les pedimos no organizar sus grupos para las actividades ya que nuestro personal lo hará a su\n      llegada de acuerdo con la operación del día.",
          content_group_id: 1,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "8",
        type: "contents",
        attributes: {
          title: "Sugerencia 8",
          content: "No está permitido ingresar con alimentos ni bebidas.",
          content_group_id: 1,
        },
        relationships: {
          content_group: {
            meta: {
              included: false,
            },
          },
        },
      },
    ],
    jsonapi: {
      version: "1.0",
    },
  });

  // return res.status(409).json({
  //   status: 400,
  //   error: "Error 1, Error 2, ...",
  // });
};

const getContactPreferences = (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: "1",
        type: "contact_preferences",
        attributes: {
          name: "Correo",
        },
      },
      {
        id: "2",
        type: "contact_preferences",
        attributes: {
          name: "Teléfono",
        },
      },
      {
        id: "3",
        type: "contact_preferences",
        attributes: {
          name: "Whatsapp",
        },
      },
    ],
    links: {
      current: 1,
      previous: null,
      next: null,
      per_page: 25,
      pages: 1,
      count: 3,
    },
    jsonapi: {
      version: "1.0",
    },
  });
};

const getSchedules = (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: "1",
        type: "shcedules",
        attributes: {
          name: "Por la mañana",
        },
      },
      {
        id: "2",
        type: "shcedules",
        attributes: {
          name: "Por la tarde",
        },
      },
      {
        id: "3",
        type: "shcedules",
        attributes: {
          name: "Personalizado",
        },
      },
    ],
    links: {
      current: 1,
      previous: null,
      next: null,
      per_page: 25,
      pages: 1,
      count: 3,
    },
    jsonapi: {
      version: "1.0",
    },
  });
};

const getRequirements = (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: "1",
        type: "requirements",
        attributes: {
          title: "Lorem ipsum dolor 1",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
          requirement_type_id: 1,
        },
        relationships: {
          requirement_type: {
            data: {
              type: "requirement_types",
              id: "1",
            },
          },
        },
      },
      {
        id: "2",
        type: "requirements",
        attributes: {
          title: "Lorem ipsum dolor 2",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
          requirement_type_id: 1,
        },
        relationships: {
          requirement_type: {
            data: {
              type: "requirement_types",
              id: "1",
            },
          },
        },
      },
      {
        id: "3",
        type: "requirements",
        attributes: {
          title: "Lorem ipsum dolor 3",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
          requirement_type_id: 1,
        },
        relationships: {
          requirement_type: {
            data: {
              type: "requirement_types",
              id: "1",
            },
          },
        },
      },
      {
        id: "4",
        type: "requirements",
        attributes: {
          title: "Lorem ipsum 1",
          content: "Lorem ipsum dolor sit amet",
          requirement_type_id: 2,
        },
        relationships: {
          requirement_type: {
            data: {
              type: "requirement_types",
              id: "2",
            },
          },
        },
      },
      {
        id: "5",
        type: "requirements",
        attributes: {
          title: "Lorem ipsum 2",
          content: "Lorem ipsum dolor sit amet",
          requirement_type_id: 2,
        },
        relationships: {
          requirement_type: {
            data: {
              type: "requirement_types",
              id: "2",
            },
          },
        },
      },
      {
        id: "6",
        type: "requirements",
        attributes: {
          title: "Lorem ipsum 3",
          content: "Lorem ipsum dolor sit amet",
          requirement_type_id: 2,
        },
        relationships: {
          requirement_type: {
            data: {
              type: "requirement_types",
              id: "2",
            },
          },
        },
      },
      {
        id: "7",
        type: "requirements",
        attributes: {
          title: "Titulo muestra",
          content: "Descripción muestra",
          requirement_type_id: 1,
        },
        relationships: {
          requirement_type: {
            data: {
              type: "requirement_types",
              id: "1",
            },
          },
        },
      },
    ],
    included: [
      {
        id: "1",
        type: "requirement_types",
        attributes: {
          name: "SEP",
          description: null,
        },
        relationships: {
          requirements: {
            meta: {
              included: false,
            },
          },
        },
      },
      {
        id: "2",
        type: "requirement_types",
        attributes: {
          name: "Museo",
          description: null,
        },
        relationships: {
          requirements: {
            meta: {
              included: false,
            },
          },
        },
      },
    ],
    links: {
      current: 1,
      previous: null,
      next: null,
      per_page: 25,
      pages: 1,
      count: 7,
    },
    jsonapi: {
      version: "1.0",
    },
  });
};

const getServices = (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: "1",
        type: "services",
        attributes: {
          price: "95.00",
          name: "Recorrido por el Museo",
          description:
            "Recorrido por el museo acompañados por un guía especializado por las salas de Memoria (genocidios de Holocausto y Ruanda) y sala de Tolerancia. Duración de 1:30 min. aprox.",
        },
      },
      {
        id: "2",
        type: "services",
        attributes: {
          price: "161.00",
          name: "Museo y Conferencia",
          description:
            "Recorrido guiado por el museo con duración de 1:30 minutos aprox. y conferencia complementaria al recorrido. Duración de la conferencia 50 min. aprox.",
        },
      },
      {
        id: "3",
        type: "services",
        attributes: {
          price: "70.00",
          name: "Exposición Temporal",
          description:
            "Ana Frank Notas de Esperanza. Con el acompañamiento de un guía, estudiantes y profesores podrán profundizar sobre la situación de la familia Frank previa y durante el Nazismo. Exposición desarrollada en colaboración con Museo Memoria y Tolerancia y Anne Frank House of Amsterdam.",
        },
      },
      {
        id: "4",
        type: "services",
        attributes: {
          price: "135.00",
          name: "Exposición Temporal y Conferencia",
          description:
            "Ana Frank Notas de Esperanza. Con el acompañamiento de un guía, estudiantes y profesores podrán profundizar sobre la situación de la familia Frank previa y durante el Nazismo. Conferencia complementaria a la temporal con el tema: El poder de la escritura en la era digital.",
        },
      },
      // {
      //   id: "5",
      //   type: "services",
      //   attributes: {
      //     price: "135.00",
      //     name: "Exposición Temporal y Conferencia",
      //     description: "Ana Frank Notas de Esperanza. Con el acompañamiento de un guía, estudiantes y profesores podrán profundizar sobre la situación de la familia Frank previa y durante el Nazismo. Conferencia complementaria a la temporal con el tema: El poder de la escritura en la era digital.",
      //   },
      // },
      // {
      //   id: "6",
      //   type: "services",
      //   attributes: {
      //     price: "135.00",
      //     name: "Exposición Temporal y Conferencia",
      //     description: "Ana Frank Notas de Esperanza. Con el acompañamiento de un guía, estudiantes y profesores podrán profundizar sobre la situación de la familia Frank previa y durante el Nazismo. Conferencia complementaria a la temporal con el tema: El poder de la escritura en la era digital.",
      //   },
      // },
      // {
      //   id: "7",
      //   type: "services",
      //   attributes: {
      //     price: "135.00",
      //     name: "Exposición Temporal y Conferencia",
      //     description: "Ana Frank Notas de Esperanza. Con el acompañamiento de un guía, estudiantes y profesores podrán profundizar sobre la situación de la familia Frank previa y durante el Nazismo. Conferencia complementaria a la temporal con el tema: El poder de la escritura en la era digital.",
      //   },
      // },
    ],
    links: {
      current: 1,
      previous: null,
      next: null,
      per_page: 25,
      pages: 1,
      count: 1,
    },
    jsonapi: {
      version: "1.0",
    },
  });
};

const getSpRequirements = (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: "1",
        type: "sponsorship_requirements",
        attributes: {
          title: "Requisito 1: Lorem Ipsum is simply dummy",
          content:
            "Descripción: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          has_file: true,
        },
      },
      {
        id: "2",
        type: "sponsorship_requirements",
        attributes: {
          title: "Requisito 2: Lorem Ipsum is simply dummy",
          content:
            "Descripción: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          has_file: false,
        },
      },
      {
        id: "3",
        type: "sponsorship_requirements",
        attributes: {
          title: "Requisito 3: Lorem Ipsum is simply dummy ",
          content:
            "Descripción: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          has_file: true,
        },
      },
      {
        id: "4",
        type: "sponsorship_requirements",
        attributes: {
          title: "Requisito 4: Lorem Ipsum is simply dummy",
          content:
            "Descripción: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          has_file: true,
        },
      },
    ],
    links: {
      current: 1,
      previous: null,
      next: null,
      per_page: 25,
      pages: 1,
      count: 4,
    },
    jsonapi: {
      version: "1.0",
    },
  });
};

const downloadSpRequirement = (req, res) => {
  return res.status(200).json({ ok: true });
};

const downloadJustificationPDF = (req, res) => {
  return res.status(200).json({ ok: true });
};

const downloadJustificationWord = (req, res) => {
  return res.status(200).json({ ok: true });
};

module.exports = {
  login,
  register,
  verifyToken,
  enviarCorreo,
  getTopics,
  getSchoolGrades,
  getProfiles,
  getSchoolTypes,
  actualizarDatos,
  getUser,
  solicitarVisita,
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
};
