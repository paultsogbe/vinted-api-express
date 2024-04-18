const express = require("express");
// const formidable = require('formidable');
const formidable = require("express-formidable");
const mongoose = require("mongoose"); //instalé
const cloudinary = require("cloudinary").v2; //instalé
require("dotenv").config(); //instalé
const cors = require("cors"); //instalé

const app = express();
// Utilisez express.json() pour parser le corps des requêtes
app.use(express.json());

app.use(formidable());
app.use(cors());

//  mongoose connect
// mongodb://127.0.0.1:27017/paul-vinted-api

mongoose.connect(process.env.MONGODB_URI, {
  //ils n 'existe plus dans nouvelle version de mongoose
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useCreateIndex: true,
});

//  configuration de cloudirary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//  import des routes
const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer");
const paymentRoutes = require("./routes/payment");

app.use(userRoutes);
app.use(offerRoutes);
app.use(paymentRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Paul-Vinted-API!!" });
});

// app.call("*", (req , res) =>{
//     res.status(404).json({message: "Cette route n'existe pas"})
// })

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});

// const express = require('express');
// const formidable = require('formidable');
// const mongoose = require("mongoose");
// const cloudinary = require("cloudinary").v2;
// require("dotenv").config();
// const cors = require("cors");

// const app = express();

// // Middleware pour parser le corps des requêtes en JSON
// app.use(express.json());

// // Middleware pour gérer les requêtes multipart/form-data (pour les fichiers)
// app.use(formidable());

// // Middleware pour gérer les CORS
// app.use(cors());

// // Connexion à MongoDB via Mongoose
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// });

// // Configuration de Cloudinary
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Import des routes
// const userRoutes = require("./routes/user");
// const offerRoutes = require("./routes/offer");
// const paymentRoutes = require('./routes/payment');

// app.use(userRoutes);
// app.use(offerRoutes);
// app.use(paymentRoutes);

// // Route d'accueil
// app.get("/", (req, res) => {
//     res.status(200).json({ message: "Welcome to Paul-Vinted-API!!" });
// });

// // Middleware pour gérer les routes non trouvées (404)
// app.use((req, res, next) => {
//     res.status(404).json({ message: "Cette route n'existe pas" });
// });

// // Démarrage du serveur
// app.listen(process.env.PORT, () => {
//     console.log("Server has started");
// });
