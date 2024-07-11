const getChains = (req, res) => {
  return res.status(200).json([
    {
      startDate: "24/06/2020",
      name: "CHOICE",
      hasProgram: true,
      hasCorporate: true,
      partnerCode: "CHI",
    },
    {
      startDate: "24/06/2020",
      name: "HYATT HOTELS & RESORTS",
      hasProgram: true,
      hasCorporate: true,
      partnerCode: "HY",
    },
    {
      startDate: "24/06/2020",
      name: "CITY EXPRESS",
      hasProgram: false,
      hasCorporate: true,
      partnerCode: "HJ",
    },
  ]);
};

const getBrands = (req, res) => {
  return res.status(200).json([
    {
      name: "CITY EXPRESS",
      chain: "CITY EXPRESS",
      typeOfPartner: "ACCEPT_ACCREDITATION",
    },
    {
      name: "CITY SUITES",
      chain: "CITY EXPRESS",
      typeOfPartner: "ACCEPT_ACCREDITATION",
    },
    {
      name: "CITY EXPRESS PLUS",
      chain: "CITY EXPRESS",
      typeOfPartner: "ACCEPT_ACCREDITATION",
    },
    {
      name: "EL SAUCE",
      chain: "CITY EXPRESS",
      typeOfPartner: "ACCEPTS_ACCREDITATION",
    },
    {
      name: "QUALITY",
      chain: "CITY EXPRESS",
      typeOfPartner: "ACCEPTS_ACCREDITATION",
    },
  ]);
};

const getRequiredFields = (req, res) => {
  return res.status(200).json({
    success: true,
    requiredFieldAirline: [
      { codeField: "account", required: true, show: true },
      { codeField: "flightNumber", required: true, show: true },
      { codeField: "flightDate", required: true, show: true },
      { codeField: "reservation", required: false, show: false },
      { codeField: "ticketNumber", required: true, show: true },
      { codeField: "seatNumber", required: false, show: false },
      { codeField: "class", required: false, show: false },
      { codeField: "payRate", required: false, show: false },
      { codeField: "totalRate", required: false, show: false },
    ],
  });
};

module.exports = { getChains, getBrands, getRequiredFields };
