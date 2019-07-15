//objeto de funciones para manipular data
window.handleData = {
  filterData: (str) => {
    //creamos un array donde cada plabra es un elemento
    //const words = str.split(" ");
    //programamos un bucle para evaluar cada elemento(e) del array 'words'
    // return words.forEach(e => {
    //programamos un filtro para cada valor(v) dentro de las  propiedades de 'newsitems'
    return STEAM.appnews.newsitems.filter(v => {
      //se evalua la existecia de cada elemento(e) del array 'words' en la data de las propiedades de 'title', 'author' y 'feedlabel'
      return ((v.title.toLowerCase().indexOf(str.toLowerCase()) > -1) ||
        (v.author.toLowerCase().indexOf(str.toLowerCase()) > -1) ||
        (v.contents.toLowerCase().indexOf(str.toLowerCase()) > -1) ||
        (v.feedlabel.toLowerCase().indexOf(str.toLowerCase()) > -1));
    });
  },
  // );
  //},

  sortData: (data, sortBy) => {
    let sortedData;
    switch (sortBy) {
      case 'most-recent':
        sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'least-recent':
        sortedData = (data.sort((a, b) => new Date(b.date) - new Date(a.date))).reverse();
        break;
      case 'a-z':
        sortedData = data.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
        break;
      case 'z-a':
        sortedData = (data.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        })).reverse();
        break;
      default:
        alert('Hubo una falla. Por favor, intenta de nuevo.');
    }
    return sortedData;
  },

  computeStats: (data) => {
    const steamNews = STEAM.appnews.newsitems;
    // obtenemos el porcentaje de numero de resultados de busqueda obtenidos
    const percentStat = data.length * 100 / steamNews.length;
    return percentStat;
  }
};