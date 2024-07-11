const validCard = (req, res) => {
  return res.status(200).json({
    isCCValid: true
  });
};

const buyWithMoney = (req, res) => {
  return res.status(200).json({
    message: "message",
    success: true,
    JobId: "12345"
  });
};

const status = (req, res) => {
  return res.status(200).json({
    success: true,
    complete: true,
    message: 'OK',
    id: 12344
  });
};

module.exports = { validCard, buyWithMoney, status };