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
	
//inicio item
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
        "caption": ""
      }
    }, 

//fin item

//inicio item
	{

      "text": {
        "headline": "Demoliciones en el Parque de la Ciudad",
	  "text": "<p>Realizacion de las demoliciones necesarias de las construcciones existentes en el predio del Parque de la Ciudad de Buenos Aires con el objetivo de la construccion y emplazamiento de la Villa Olimpica en la Comuna 8.<br> Area Resposable: S.S. de Proyectos <br> Entorno: Villa Olimpica <br> Etapa: FINALIZADA <br> Detalle: Adjudicada<br> Tipo de Obra: Arquitectura<br> Comuna: 8 <br> Barrio: Villa Soldati <br> Direccion: Escalada Av. 4218</p>"
      },
      "location": {
        "name": "Demoliciones en el Parque de la Ciudad",
        "lat": -34.675031707499997,
        "lon": -58.455459544,
        "zoom": 10,
        "line": true
      },
      "media": {
        "url": "http://cdn2.buenosaires.gob.ar/desarrollourbano/sociopublico/moreno/moreno_despues.jpg",
        "caption": ""
      }
    }, 

//fin item

	]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic//
}