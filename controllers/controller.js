const os = require("os");

const whoAmI = (req, res) => {
  try {
    const info = {
      ipaddress: os.networkInterfaces()["Wi-Fi"][1]["address"],
      language: req.headers["accept-language"],
      software: req.headers["user-agent"],
    };
    let a = os.networkInterfaces();
    console.log(a);
    res.status(201).json({ ...info, a });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { whoAmI };
