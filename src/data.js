//objeto de funciones para manipular data
window.handleData = {
  filterData: (str) => {
    //creamos un array donde cada plabra es un elemento
    let words = str.split(" ");
    //programamos un bucle para evaluar cada elemento(e) del array 'words'
    words.forEach(e => {
      //programamos un filtro para cada valor(v) dentro de las  propiedades de 'newsitems'
      return STEAM.appnews.newsitems.filter(v => {
        //se evalua la existecia de cada elemento(e) del array 'words' en la data de las propiedades de 'title', 'author' y 'feedlabel'
        return (v.title.toLowerCase().indexOf(e.toLowerCase()) > -1) +
          (v.author.toLowerCase().indexOf(e.toLowerCase()) > -1) +
          (v.feedlabel.toLowerCase().indexOf(e.toLowerCase()) > -1);
      });
    });
  },

  sortData: (data, sortBy, sortOrder) => {
    let data = STEAM.appnews.newsitems;
    let sortedData;
    if (sortBy === 'date') {
      sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    };
    if (sortBy === 'author') {
      sortedData = data.sort((a, b) => {
        if (a.author > b.author) return 1;
        if (a.author < b.author) return -1;
        return 0;
      });
    };
    if (sortOrder === 'downward') sortedData.reverse();
    return sortedData;
  },

  computeStats: (str) => {
    //creamos un array donde cada plabra es un elemento
    let words = str.split(" ");
    // declaramos 'newsItems' array
    let newsItems = STEAM.appnews.newsitems;
    //programamos un bucle para evaluar cada elemento(e) del array 'words'
    let searchItems = words.forEach(e => {
      //programamos un filtro para cada valor(v) dentro de las  propiedades de 'newsitems'
      return STEAM.appnews.newsitems.filter(v => {
        //se evalua la existecia de cada elemento(e) del array 'words' en la data de las propiedades de 'title', 'author' y 'feedlabel'
        return (v.title.toLowerCase().indexOf(e.toLowerCase()) > -1) +
          (v.author.toLowerCase().indexOf(e.toLowerCase()) > -1) +
          (v.feedlabel.toLowerCase().indexOf(e.toLowerCase()) > -1);
      });
    });
    // obtenemos el percentaje de numero de resultados de busqueda obtenidos
    return searchItems.length / newsItems.length * 100;
  },

}


/*
//esta es una función de ejemplo
//puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;*/
