const i18n = require("i18n");
const path = require("path");

i18n.configure({
  locales: ["es", "en", "fr"], // nos crea carpeta locales con un fichero por idioma
  directory: path.join(__dirname, "..", "locales"),
  defaultLocale: "es",
  autoReload: true, // recarga cambios automaticos en JSOn files y los recarga en locales
  syncFiles: true, // actualiza cambios en todos los archivos
});

//para utilizar i18n en scripts
i18n.setLocale("es");

module.exports = i18n;
