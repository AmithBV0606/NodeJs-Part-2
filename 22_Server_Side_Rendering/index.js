const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const staticRoute = require("./routes/staticRouter");

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", staticRoute);

// Normal way of SSR

// app.get("/", (req, res) => {
//     res.send(`
//         <html>
//             <head></head>
//             <body>
//                 <ol>
//                     <li>Amith</li>
//                     <li>Varun</li>
//                     <li>Sidvin</li>
//                     <li>Abhishek</li>
//                 </ol>
//             </body>
//         </html>
//         `);
// });

// EJS way of SSR : 

// const names = ["Amith", "Akram", "Varun", "Nitish", "Sidvin"];

// app.get("/", (req, res) => {
//     return res.render("home", {
//         allNames: names,
//     })
// });

app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));