/*funciones para manipular data*/
const filterData = (wholeData,str) => {
    //creamos un array donde cada plabra es un elemento
    const words = str.split(" ");
    //declaramos arreglo para almacenar todos los elementos que coicidan con las palabras de busqueda
    let foundData = [];
    //declaramos un arreglo para almacenar todos los resultados finales de busqueda
    let finalData =[];
    
    //programamos un bucle para evaluar cada elemento(e) del array 'words'
    words.forEach(e => {
  //programamos un filtro para cada valor(v) dentro de las  propiedades de 'newsitems' y que meta estas coicidencias en foundData
    foundData.push(wholeData.filter(v => {
      //se evalua la existecia de cada elemento(e) del array 'words' en la data de las propiedades de 'title', 'author' y 'feedlabel'
      return ((v.title.toLowerCase().indexOf(e.toLowerCase()) > -1) ||
        (v.author.toLowerCase().indexOf(e.toLowerCase()) > -1) ||
        (v.contents.toLowerCase().indexOf(e.toLowerCase()) > -1) ||
        (v.feedlabel.toLowerCase().indexOf(e.toLowerCase()) > -1) ||
        (v.feedname.toLowerCase().indexOf(e.toLowerCase()) > -1));
    }));
  });

  //bucle para evaluar cada item del arreglo foundData y meter cada elemento de estos items en finalData
for(let item=0; item<foundData.length;item++) {
foundData[item].forEach(element => {
  if (finalData.indexOf(element) < 0) {
    finalData.push(element);
  }});
}
    return finalData;
  };


  const sortData = (data, sortBy) => {
    let sortedData;
    switch (sortBy) {
      case 'most-recent':
        sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'least-recent':
        sortedData = (data.sort((a, b) => new Date(b.date) - new Date(a.date))).reverse();
        break;
      case 'a-z':
        sortedData = data.sort((a,b) => a.title > b.title ? 1 : -1);
        break;
      case 'z-a':
        sortedData = data.sort((a,b) => a.title < b.title ? 1 : -1);
        break;
      default:
        sortedData = 'Hubo una falla. Por favor, intenta de nuevo.';
    }
    return sortedData;
  };

  const computeStats = (wholeData,data) => {
    // obtenemos el porcentaje de numero de resultados de busqueda obtenidos
    const percentStat = data.length * 100 / wholeData.length;
    return percentStat;
  };

//Agregamos funciones al objeto global
window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;