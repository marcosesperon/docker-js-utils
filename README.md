# DOCKER-JS-UTILS

Utilidades JS: Minificar y Ofuscar

## Descripción

Aplicación NodeJS dockerizada con utilidades para Javascript. Incluye:
* Minificar: Genera una versión reducida del JS, eliminando saltos de línea, espacios en blanco y sustituyendo nombres de variables.
* Ofuscar: Genera una versión protegida del JS dificil de leer, comprender y modificar sin autorización.

## Puesta en Marcha

### Instalación

Podemos crear el contenedor e iniciarlo con:

```
./1.-build.sh
./1.-run.sh
```

### Acceder

Por defecto, la aplicación se expone en el puerto 3000. Podemos acceder por navegador a:
```
http://localhost:3000
```

También podemos ejecutar las funcionalidades por petición POST, enviando en el BODY el contenido del JS:

```
http://localhost:3000/minificar
http://localhost:3000/ofuscar
```

## Configuración

Tanto en `files/routes/minificar.js` como en `files/routes/ofuscar.js` podremos modificar la variable `options` para establecer una configuración de las herramientas.

## Autor

Marcos Esperón
[@marcosesperon](https://twitter.com/marcosesperon)

## Historial de Versiones

* 0.1
    * Versión inicial

## Licencia

Ver LICENSE.md para más información

## Librerías utilizadas

* [NodeJS](https://nodejs.org/)
* [ExpressJS](http://expressjs.com/)
* [Handlebars](https://handlebarsjs.com/)
* [Bootstrap](https://github.com/twbs/bootstrap)
* [Terser](https://github.com/terser/terser)
* [Javascript-Obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)