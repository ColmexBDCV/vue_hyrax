# vue_hyrax

_Proyecto creado en VueJS, Vuex, Vue Router y Vue-i18n consumiendo un servico de blacklight a traves de axios con respuestas en formato json._

## Comenzando 🚀

_Para copiar o clonar el proyecto, puedes hacerlo con alguna de las sguientes formas: 
 * Utilizar el comando ´git clone´ en la carpeta de tu eleccion.
 * Descargar el proyecto en .zip y descomprimir_

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Tener montado un repositorio con el framework [Samvera](http://samvera.org)_


* Por ejemplo: [COLMEX REPOSITORY](http://biblio-rep.colmex.mx/catalog)

### Instalación 🔧

_Una vez descargado el proyecto tenemos que  configurar nuestra URL de donde vamos a obtener las peticiones json_

```
Ir al archivo de configuracion ubicado en carpeta_proyecto/src/utils/config.js.

Cambiar la URL de la linea por la de nuestro repositorio:
-const base_url = "http://biblio-rep.colmex.mx/";

Montar un servidor de aplicaciones, en nuestro caso montamos un servidor apache con docker-compose y referenciamos el proyecto en el contenedor.
```


## Construido con 🛠️

* [VueJs](https://vuejs.org/v2/guide/) - Framework base
* [Vuex](https://vuex.vuejs.org/guide/) - Modularizar el proyecto
* [VueRouter](https://router.vuejs.org/guide/#javascript) - Utilizar rutas y enviar parametros.
* [Vue-i18n](https://kazupon.github.io/vue-i18n/started.html) - Traducir el proyecto.
* [Axios](https://github.com/axios/axios) - Envio y recepcion de peticiones

## Versionado 📌

Usamos [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/ColmexBDCV/vue_hyrax/master).

## Autores ✒️


* **Rodrigo Cuellar Hidalgo** - *Idea y Trabajo Inicial* - [rodyoukai](https://github.com/rodyoukai)
* **Eime Javier Cisneros Brito** - *Continuación y Documentación* - [zizneroz](https://github.com/zizneroz)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/ColmexBDCV/vue_hyrax/contributors) quíenes han participado en este proyecto.
