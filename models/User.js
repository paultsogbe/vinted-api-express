const mongoose = require("mongoose")
const User = mongoose.model("User", {
    email: {
        unique: true,
       type: String ,
    },
    account: {
        username: {
            required: true,
         type: String,   
        },
        phone: String,
        avatar: Object,
    },
    token: String,
    hash: String,
    salt: String
})

module.exports = User;


// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         unique: true,
//         required: true,
//         // Ajoutez ici d'autres validations pour l'email si nécessaire
//     },
//     account: {
//         username: {
//             type: String,
//             required: true,
//         },
//         phone: String,
//         avatar: Object,
//     },
//     token: String,
//     hash: String,
//     salt: String
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;
