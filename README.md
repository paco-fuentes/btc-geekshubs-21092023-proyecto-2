# GAME BOY Classic (1989)

![image](./img/index.png)

Dibujo interactivo con un diseño 100% escrito en CSS y Flexbox partiendo de las medidas orignales de la base de la consola, convertidas de mm a rem. La consola se puede encencer pulsando el led, mostrando el logo de Nintendo con el mítico sonido de encendido (...y de apagado) los botones muestran imágenes del cartucho Zelda: Link's Awakening (Nintendo, 1993) en pantalla.

### Despliegue en Github Pages

https://paco-fuentes.github.io/btc-geekshubs-21092023-proyecto-2/




## Tabla de contenidos
* [💻 Tecnologías utilizadas](#tecnologías-utilizadas)
* [:pick: Desarrollo](#desarrollo)
* [🕹️ Manual](#manual)
* [💡 Observaciones](#observaciones)
* [📃 Licencia](#licencia)

### Tecnologías utilizadas:

<img src="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" alt="HTML5" data-canonical-src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" style="max-width: 100%;"><img src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="CSS3" data-canonical-src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white" style="max-width: 100%;"><img src="https://camo.githubusercontent.com/ecd0d6fc3da2be7f3a92b0a5bb2d8a5ed5a97fba21dc59ae638caa548d79d88d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a61766173636970742d4546443831443f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" style="max-width: 100%;"><img src="https://user-images.githubusercontent.com/121863208/227808620-cd6e5d5c-dd63-4a9d-b19d-0983807cae95.svg" style="max-width: 100%;">

## Desarrollo:

Para este proyecto me he propuesto profundizar en el aprendizaje de CSS investigando flexbox principalmente y su estructura de contenedores así como las relaciones entre estos.

Tambien he experimentado con texturas, blendmodes, sombreados, gradientes y sistemas de medida.

![image](./img/gb-footprint.png)

El dibujo parte de las medidas 148x90mm que pasadas a rem (1rem == 16px) son 37x22.5rem, a partir de aquí el dibujo se basó en la observación de un modelo.  

![image](./img/gb-draw.png)

Finalmente para la parte de interactividad he decidido mantener el código propuesto para el ejercicio, sin ir mucho más a allá en la investigación del DOM, y sí en CSS para dejarlo más asentado como conocimiento. 

Para solucionar la interactividad con el on / off y el cambio de imagen he recurrido a un truco que aprendí cuando usaba Arduino con el cual convierto un pulsador en un interruptor guardando el estado anterior y comprandolo con el actual.

He decidio no usar vídeos o .gif de momento para mejorar la experiencia de usuario, la interacción fluida con la interfaz, y en su lugar he dejado imagenes estaticas con la resolución real de la pantalla de la GAMEBOY (160x144px) pero con los fondos transparentes para que se vea todo el rato el mismo color de fondo y parezca más ese tipo de pantalla.

El cuerpo de la consola tiene una capa de textura "rough plastic surface", aunque no ha quedado todo lo realista que esperaba. : (

![image](./img/gb-draw-2.png)

## Manual:

![image](./img/manual.png)

## Observaciones:


### Bugs Conocidos a la entrega del proyecto

1. Las imágenes se cargan apretar los botones lo que provoca que no se vea nada durante el lapso de tiempo que dura la carga. Una vez cargadas funcionan conrrectamente.

### Logros y soluciones:

- Solucionado error que se produce al querer mostrar en pantalla letras muy pequeñas, ya que algunos navegadores, por defecto, fuerzan un tamaño mayor que rompia el diseño.

### Mejoras

Quedan pendientes las siguientes propuestas para una V2:

- Jugar con las mácaras en CSS, ya que no he conseguido los resultados buscados.
- Añadir más intercatividad.
- Añadir GIF.
- Mejorar el diseño de la página.

### Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para obtener más detalles.

### Autor
Paco Fuentes