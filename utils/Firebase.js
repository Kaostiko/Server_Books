require("dotenv").config();
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

// Inicializo Firebase Admin
initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

module.exports = db;
