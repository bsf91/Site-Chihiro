const fs = require("fs");
const path = require("path");

// Lista de pastas que você quer garantir que existam
const folders = [
    path.join(__dirname, "dist"),
    path.join(__dirname, "dist/css"),
    path.join(__dirname, "dist/script"),
    path.join(__dirname, "dist/images"),
];

folders.forEach((folder) => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
        console.log(`Criada pasta: ${folder}`);
    }
});
