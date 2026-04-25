const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

/* ---------------- MIDDLEWARE ---------------- */

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

/* ---------------- SAMPLE DATA ---------------- */

const faqData = [
  {
    id: 1,
    question: "Is this app free?",
    answer: "Yes, Smart Crop Guide is completely free for all farmers."
  },
  {
    id: 2,
    question: "Does it work without internet?",
    answer: "Yes, some features work offline after loading the app once."
  },
  {
    id: 3,
    question: "Can I use voice instead of typing?",
    answer: "Yes, voice assistance is available in multiple regional languages."
  }
];

const helpInfo = {
  helpline: "1800-180-1551",
  appName: "Smart Crop Guide",
  support: "24/7 Farmer Support"
};

/* ---------------- ROUTES ---------------- */

/* Home Route */

app.get("/", (req, res) => {
  res.send("Smart Crop Guide Backend Running...");
});

/* Help Info API */

app.get("/api/help", (req, res) => {

  res.json({
    success: true,
    data: helpInfo
  });

});

/* FAQ API */

app.get("/api/faqs", (req, res) => {

  res.json({
    success: true,
    total: faqData.length,
    faqs: faqData
  });

});

/* Language Change API */

app.post("/api/language", (req, res) => {

  const { language } = req.body;

  res.json({
    success: true,
    message: `Language changed to ${language}`
  });

});

/* Voice Assistance API */

app.post("/api/voice-help", (req, res) => {

  const { message } = req.body;

  res.json({
    success: true,
    farmerMessage: message,
    reply:
      "Voice assistance activated. Please follow the crop guidance carefully."
  });

});

/* ---------------- START SERVER ---------------- */

app.listen(PORT, () => {

  console.log(`Server running on http://localhost:${PORT}`);

});