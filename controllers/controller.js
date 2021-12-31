const os = require("os");

const whoAmI = (req, res) => {
  try {
    const info = {
      // ipaddress: os.networkInterfaces()["Wi-Fi"][1]["address"],
      ipaddress: req.ip,
      language: req.headers["accept-language"],
      software: req.headers["user-agent"],
    };
    res.status(201).json({ ...info });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { whoAmI };
