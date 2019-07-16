//Definimos la data completa que se va a manipular
const wholeData = window.STEAM.appnews.newsitems;

//secciones y búsqueda
const home = document.getElementById('home');
const videoSection = document.getElementById('video-section');
const newsSection = document.getElementById('news-section');
const search = document.getElementById('search');

//variables
let arrNews = wholeData;
let percent = 100;

//traer items por nombre de clase
const btnChannel = document.getElementsByClassName('channel');
const sortByOption = document.getElementsByClassName('sortby-option');
let sortByItem = [];


//funcion para filtrar que llama a la funcion de items encontrados y desplegar noticias
const filter = (wholeData, str) => {
  newsSection.innerHTML = "";
  videoSection.classList.add("hide");
  arrNews = window.filterData(wholeData,str);
  percent = window.computeStats(wholeData,arrNews);
  displayFound(arrNews);
  displayNews(arrNews);
};

//funcion para ordenar
const sort = (arrNews, sortBy) => {
  newsSection.innerHTML = "";
  videoSection.classList.add("hide");
  const sortedData = window.sortData(arrNews, sortBy);
  displayFound(sortedData);
  displayNews(sortedData);
};


//funcion para botones en barra lateral. Se extrae id del boton seleccionado
for (let i = 0; i < btnChannel.length; i++) {
  btnChannel[i].addEventListener('click', () => {
    const Channel = event.target.id;
    search.value = Channel;
    filter(wholeData,Channel);
  });
}

//funcion para opciones de menu despegable.Se extrae el valor de title de la opcion seleccionada
for (let i = 0; i < sortByOption.length; i++) {
  sortByOption[i].addEventListener('click', () => {
    const sortBy = event.target.title;
    sort(arrNews, sortBy);
  });
}

//funcion para pintar numero de noticias encontradas y opciones de ordenado
const displayFound = (data) => {
  newsSection.innerHTML =
    `<div class="box">
  <div class="row">
  <div class="col-md-12">
  <p id="value-search" class="card-text">Search: '${search.value}'</p>
  
  <div id="items-found">
  <p class="card-text"><small class="text-muted">${data.length} results</small></p>
  </div>
  </div> </div>
  <div class="row">
  <div class="col-md-12">
  <div id="sort-by" class="dropdown">
  <button id="sort-by-btn" class="btn btn-secondary">Sort by :</button>
  <div id="dropdown" class="dropdown-content">
    <a class="sort-by-item" title="most-recent" >Most recent</a>
    <a class="sort-by-item" title="least-recent" >Least recent</a>
    <a class="sort-by-item" title="a-z" >Title A - Z</a>
    <a class="sort-by-item" title="z-a" >Title Z - A</a>
  </div>
</div>
<div id="percent">
<p class="card-text"><small>${percent}% of Steam News</small></p>
</div>
</div> </div>
  </div>`;
  //dropdown = document.getElementById('dropdown');
  sortByItem = document.getElementsByClassName('sort-by-item');

  document.getElementById("sort-by-btn").addEventListener('click', () => {
    funcDrop();
  });
};

//funcion para pintar noticias
const displayNews = (data) => {
  data.forEach(e => {
    let d = new Date(e.date);
    let date = d.toDateString();
    newsSection.insertAdjacentHTML("beforeEnd",
      ` <div class="media news-box">
      <a href="${e.url}" target="_blank">
  <div class="media-body">
  <div class="card-header text-white">
  <h5 class="card-title" text>${e.title}</h5>
</div>
<div class="news">
<p class="card-text"><small><strong>${e.author}<strong></small></p>
    <p class="card-text">${e.contents}</p>
    <p class="card-text"><small class="text-muted">${date}</small></p>
</div>
  <div class="img-box"><img class="img-news align-self-center ml-3" width="100%" src="${e.img}" alt="${e.title}-img"></div>
  </div></a>
</div>`
    );
  });
};

// despliega noticias de inicio
displayNews(wholeData);

//funcion para ir a inicio
const goHome = () => {
  search.value = "";
  videoSection.classList.remove("hide");
  newsSection.innerHTML = "";
  displayNews(wholeData);
};

//chismosa para ir a inicio
home.addEventListener('click', () => goHome());

//chismosa para input 'search' que llama a la funcion de filtrar
search.addEventListener('keyup', () => {
  filter(wholeData,search.value);
});

//Funcion para ocultar/mostrar menu despegable sortBy y realizar ordenado
const funcDrop = () => {
  document.getElementById("dropdown").classList.toggle("show");

  //funcion para items de menu despegable. Se extrae el valor de title de la opcion seleccionada
  for (let i = 0; i < sortByItem.length; i++) {
    sortByItem[i].addEventListener('click', () => {
      const sortBy = event.target.title;
      sort(arrNews, sortBy);
    });
  }
};