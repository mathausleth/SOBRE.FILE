const { SOBRE } = require('../SOBRE.js.js');
SOBRE.FILE.driver = require('fs');
SOBRE.FILE.LireFichier('fichier.txt');
console.log(SOBRE.FILE.files['fichier.txt'].binaire.toString());