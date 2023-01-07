//###START### File - FILE.js //###->###
/**
*#############################################################################*
*##                                                                         ##*
*##     ~   {                    FILE.JS                          }   ~     ##*
*##                                                                         ##*
*#############################################################################*
**/
/**
 * Version : 3
 * Revision : 07/01/2022
 * Auteur : Mathaus Leth
 */
//#!Debut!#
//
//--!--
//  ##  LES CONSTANTES  ##  //
//--!--
//  ##  LA DEFINITION  ##   //
(function () {
//--!--
// -> Les Namespaces (MAJUSCULES et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions (UpperCamelCase et FRANCAIS):
//#region
SOBRE.FILE.LireFichier = function (source, dimensions = N) {
    if (SOBRE.exists(SOBRE.FILE.driver)) {
        try {
            const fichierBinaire = SOBRE.FILE.driver.readFileSync(source);
            if (SOBRE.exists(fichierBinaire)) SOBRE.FILE.files[source] = new SOBRE.FILE.FICHIER(fichierBinaire, dimensions);
        } catch (error) { console.error(error); }
    }
};
SOBRE.FILE.LireFichierAsync = function (source, dimensions = N) {
    if (SOBRE.exists(SOBRE.FILE.driver)) {
        SOBRE.FILE.driver.readFile(source, (error, fileBuffer) => {
            if (error) {
                console.error(error);
                return;
            }
            if (SOBRE.exists(fileBuffer)) SOBRE.FILE.files[source] = new SOBRE.FILE.FICHIER(fileBuffer, dimensions);
        });
    }
};
//#endregion
//--!--
// -> Les Fonctions 'booléennes' (lowerCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions 'this' (UpperCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Objets (MAJUSCULES et FRANCAIS):
//#region
SOBRE.FILE.FICHIER = class {
    constructor (fileBuffer, dimensions = N) {
        this.binaire = fileBuffer;
        if (dimensions instanceof SOBRE.CLASS.DIMENSION2D) { this.dimensions = dimensions; }
    };
    static isFile (object) { return (object instanceof SOBRE.FILE.FICHIER); };
};
//#endregion
//--!--
// -> Les Variables (minuscules et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables 'require' (minuscules et ANGLAIS):
//#region
SOBRE.FILE.driver = N;
SOBRE.FILE.files = {};
//#endregion
//--!--
}());
//--!--
//#!Fin!#
//###<-### File - FILE.js //###END###