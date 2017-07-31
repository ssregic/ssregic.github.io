// storymap_data can be an URL or a Javascript object
var storymap_data = {
  "storymap": {
    "slides": [
	//SLIDE DE INICIO, NO MUESTRA PUNTO, SOLO UNA IMAGEN Y TEXTO A MODO DE PRESENTACION
	{
      "type": "overview",
      "text": {
        "headline": "Obras Cuenca Riachuelo",
        "text": "<p>Visualiza todas las obras que se están ejecutando próximas al Riachuelo en la Ciudad.</p>"
      },
      "media": {
        "url": "http://bucket.glanacion.com/anexos/fotos/13/2240813.jpg",
      }
    }, 
	
	{

      "text": {
        "headline": "Area Ambiental San Telmo - Calles Alsina y Moreno",
	  "text": "<p>Se intervienen los tramos comprendidos entre la Avenida Presidente Julio Argentino Roca y la calle Defensa, realizando obras de nivelacion, colocacion de darsenas de carga y descarga, nuevas luminarias y se reemplazara el pavimento por el granitullo.<br> Area Resposable: S.S. de Proyectos <br> Entorno: Area ambiental central <br> Etapa: EN LICITACION <br> Detalle: Estudio de Ofertas<br> Tipo de Obra: Espacio Publico<br> Comuna: 1 <br> Barrio: Montserrat <br> Direccion: Alsina y Moreno, entre Bernardo de Irigoyen y Av. Presidente Julio A. Roca</p>"
      },
      "location": {
        "name": "Area Ambiental San Telmo - Calles Alsina y Moreno",
        "lat": -34.610837882799999,
        "lon": -58.374682801900001,
        "zoom": 10,
        "line": true
      },
      "media": {
        "url": "http://cdn2.buenosaires.gob.ar/desarrollourbano/sociopublico/moreno/moreno_despues.jpg",
        "caption": "Image Example"
      }
    }, {

      "text": {
        "headline": "LIVERPOOL CENTRAL",
        "text": "<p>Lorem ipsum dolor sit amet, qui an mutat dicit numquam, duo ne adhuc reque delicatissimi. Ea pri quidam consequuntur, harum cetero philosophia eu quo. No mel nusquam forensibus. Fugit tantas ancillae id pri.</p>"
      },
      "location": {
        "name": "Lime street",
        "lat": 53.404667,
        "lon": -2.980034,
        "zoom": 10,
        "line": true
      },
      "media": {
        "url": "https://twitter.com/katewales_/status/781554178288214016",
        "caption": "Twitter example"
      }
    }, {

      "text": {
        "headline": "JAMES STREET",
        "text": "<p>Lorem ipsum dolor sit amet, qui an mutat dicit numquam, duo ne adhuc reque delicatissimi. Ea pri quidam consequuntur, harum cetero philosophia eu quo. No mel nusquam forensibus. Fugit tantas ancillae id pri.</p>"
      },
      "location": {
        "name": "Lime street",
        "lat": 53.404920,
        "lon": -2.991936,
        "zoom": 10,
        "line": true
      },
      "media": {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Liverpool_James_Street_railway_station.jpg/1280px-Liverpool_James_Street_railway_station.jpg",
        "caption": "Image example"
      }
    }, {

      "text": {
        "headline": "MOORFIELDS",
        "text": ""
      },
      "location": {
        "name": "Lime street",
        "lat": 53.408749,
        "lon": -2.989193,
        "zoom": 10,
        "line": true
      },
      "media": {
        "url": "https://en.wikipedia.org/wiki/Moorfields_railway_station",
        "caption": "Wiki link example"
      }
    }, ]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic//
}