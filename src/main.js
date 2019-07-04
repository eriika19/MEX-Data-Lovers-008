const arrNews = STEAM.appnews.newsitems;
const home = document.getElementById('home');
const videoSection = document.getElementById('video-section');
const newsSection = document.getElementById('news-section');
const search = document.getElementById('search');


//barra lateral

const update = document.getElementById('update');
const euro = document.getElementById('euro');
const tf2 = document.getElementById('tf2');

//funcion para ir a inicio
const goHome = () => {
  search.value = "";
  videoSection.classList.remove("hide");
  newsSection.innerHTML = "";
  displayNews(arrNews);
}


//funcion para pintar numero de noticias encontradas y opciones de ordenado
const displayFound = (data) => {
  newsSection.innerHTML =
  `<div class="box">
  <p id="value-search" class="card-text">Busqueda: '${search.value}'</p>
  <div id="items-found">
  <p class="card-text"><small class="text-muted">${data.length} resultados</small></p>
  </div>

  <div id="sort-by">
  <div class="dropdown">
 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Ordenar por:
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Fecha</a>
    <a class="dropdown-item" href="#">Autor</a>
  </div>
</div>
</div>

<p class="no-show">.</p></div>`;
}


//funcion para pintar noticias
const displayNews = (data) => {
  data.forEach(e => {
    newsSection.insertAdjacentHTML("beforeEnd",
  ` <div class="media news-box">
      <a href="${e.url}">
  <div class="media-body">
  <div class="card-header text-white">
  <h5 class="card-title" text>${e.title}</h5>
</div>
<div class="news">
    <p class="card-text">${e.contents}</p>
    <p class="card-text"><small class="text-muted">${new Date(e.date)}</small></p>
</div>
  <div class="img-box"><img class="img-news align-self-center ml-3" width="100%" src="${e.img}" alt="news-img"></div>
  </div></a>
</div>`
    )
  });
}

// despliega noticias de inicio
displayNews(arrNews);



//chismosa para ir a inicio
home.addEventListener ('click', () => goHome());


//chismosa para inpurt 'search' que llama funcion de busqueda y pintar resultados
search.addEventListener('keyup', () => {
  newsSection.innerHTML = "";
  videoSection.classList.add("hide");
  const arr = window.handleData.filterData(search.value);
  displayFound(arr);
  displayNews(arr);
});


//chismosas para navegacion en barra lateral
update.addEventListener('click', () => {
  newsSection.innerHTML = "";
  search.value = "Updates";
  videoSection.classList.add("hide");
  const arr = window.handleData.filterData('update');
  displayFound(arr);
  displayNews(arr);
});


euro.addEventListener('click', () => {
  newsSection.innerHTML = "";
  search.value = "Eurogame";
  videoSection.classList.add("hide");
  const arr = window.handleData.filterData('euro');
  displayFound(arr);
  displayNews(arr);
});


tf2.addEventListener('click', () => {
  newsSection.innerHTML = "";
  search.value = "TF2";
  videoSection.classList.add("hide");
  const arr = window.handleData.filterData('tf2');
  displayFound(arr);
  displayNews(arr);
});


//estilos de noticias

/*

   `<div class="card mb-3">
  <img class="card-img-top" src="${e.img}" alt="news-image-cap">
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p class="card-text">${e.contents}</p>
    <p class="card-text"><small class="text-muted">${new Date(e.date)}</small></p>
  </div>
</div>`

`<div class="media">
  <div class="media-body">
    <h5 class="mt-0 mb-1">${e.title}</h5>
    <p class="card-text">${e.author}</p>
    ${e.contents}
    <p class="card-text"><small class="text-muted">${new Date(e.date)}</small></p>
  </div>
  <img class="ml-3" src="${e.img}" alt="news-img">
</div>`



`<div class = "card bg-dark text-white">
   <img class = "card-img" src = "${e.img}" alt = "news-img">
   <div class="card-img-overlay">
   <h5 class="card-title">${e.title}</h5>
   <p class="card-text">${e.contents}</p>
   <p class="card-text">${new Date(e.date)}</p>
   </div>
  </div>`*/
