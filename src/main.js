const dropdown = localStorage.getItem("dropdown");
const sortByBtn = localStorage.getItem("sortByBtn");

//secciones y búsqueda
const arrNews = STEAM.appnews.newsitems;
const home = document.getElementById('home');
const videoSection = document.getElementById('video-section');
const newsSection = document.getElementById('news-section');
const search = document.getElementById('search');


//barra lateral de nav

const update = document.getElementById('update');
const euro = document.getElementById('euro');
const tf2 = document.getElementById('tf2');

const navAtoZ = document.getElementById('nav-a-z');
const navZtoA = document.getElementById('nav-z-a');
const navMostRecent = document.getElementById('nav-most-recent');
const navLeastRecent = document.getElementById('nav-least-recent');


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
  <p id="value-search" class="card-text">Search: '${search.value}'</p>
  <div id="items-found">
  <p class="card-text"><small class="text-muted">${data.length} resultados</small></p>
  </div>

  <div id="sort-by" class="dropdown">
  <button id="sort-by-btn" type="button" class="btn btn-secondary">Ordenar por:</button>
  <div id="dropdown" class="dropdown-content">
    <a href="#">Most recent</a>
    <a href="#">Least recent</a>
    <a href="#">Title A - Z</a>
    <a href="#">Title Z - A</a>
  </div>
</div> 

  </div>
  <p class="no-show">.</p></div>`;

let sortByBtn = document.getElementById('sort-by-btn');
let dropdown = document.getElementById('dropdown')
  localStorage.setItem("sortByBtn",sortByBtn);
  localStorage.setItem("dropdown",dropdown);
}


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


navAtoZ.addEventListener('click', sortBy('navAtoZ'))

/*
const sortBy = (sortBy) => {
  newsSection.innerHTML = "";
  videoSection.classList.add("hide");
  if ()
  const arr = window.handleData.filterData('update');
  displayFound(arr);
  displayNews(arr);
});*/


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
sortByBtn.addEventListener('click', () => {
  dropdown.classList.toggle("show");
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  };
} 


