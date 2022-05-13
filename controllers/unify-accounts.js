const getAccountNumber = (req, res) => {
  res.status(200).json({ account: '817418775' });
}

const sendData = (req, res) => {
  const { status } = req.headers;

  switch (status) {
    case '200':
      return res.status(200).json({ ok: true });

    case '400':
      return res.status(400).json({ ok: false, message: 'Bad request' });

    default:
      return res.status(500).json({ ok: false, message: 'Internal server error' });
  }
}

module.exports = {
  getAccountNumber,
  sendData
}
