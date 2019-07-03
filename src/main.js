const arrNews = STEAM.appnews.newsitems;
const newsSection = document.getElementById('news-section');
const search = document.getElementById('search');

const displayNews = (data) => {
data.forEach(e => { newsSection.insertAdjacentHTML("beforeEnd",
`<div class="media news-box">
  <div class="media-body">
  <div class="card-header text-white">
  <h5 class="card-title" text>${e.title}</h5>
</div>
    <p class="card-text">${e.contents}</p>
    <p class="card-text"><small class="text-muted">${new Date(e.date)}</small></p>
  </div>
  <img class="img-news align-self-center ml-3" width="30%" src="${e.img}" alt="news-img">
</div>`
)
});
}

displayNews(arrNews);

const cleanNews = () => newsSection.clear() ;


//chismosa para input
search.addEventListener('keyup', () => {
  newsSection.innerHTML = "";
  const arr = window.handleData.filterData(search.value);
  displayNews(arr);
} );



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