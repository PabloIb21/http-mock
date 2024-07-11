const success = (req, res) => {
  return res.status(200).json({
    data: {
      error: false,
      message: "OK",
      type: "NoError"
    }
  });
}
const invalidAccount = (req, res) => {
  return res.status(409).json({
    error: true,
    message: "El número de cuenta proporcionado es distinto a la cuenta del ganador",
    type: "InvalidAccount"
  });
}
const alreadyRegistered = (req, res) => {
  return res.status(409).json({
    error: true,
    message: "Ya se ha registrado la información",
    type: "AlreadyRegistered"
  });
}

module.exports = { success, invalidAccount, alreadyRegistered };