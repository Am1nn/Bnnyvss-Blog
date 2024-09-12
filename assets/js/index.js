
async function fetchData() {
  try {

    const response = await fetch('https://raw.githubusercontent.com/Am1nn/Blog-Api/main/api.json');
    const data = await response.json();

    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '';

    data.forEach(post => {

      const postHTML = `
          <div class="item mb-5">
            <div class="row g-3 g-xl-0">
              <div class="col-2 col-xl-3">
                <img class="img-fluid post-thumb"  src="${post.Image}" alt="image">
              </div>
              <div class="col">
                <h3 class="title mb-1"><a class="text-link" href="/blog-post.html?id=${post.Id}"">${post.Title}</a></h3>
                <div class="meta mb-1">
                  <span class="date">Published ${post.PublisDate}</span>
                </div>
                <div class="intro" style="
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                max-height: 4.5em;
                line-height: 1.5em;
            ">
                ${post.Description}
            </div>
                <a class="text-link" href="/blog-post.html?id=${post.Id}"">Read more &rarr;</a>
              </div>
            </div>
          </div>
        `;
      contentContainer.innerHTML += postHTML;
    });
  } catch (error) {
    console.error('Veri çekilirken hata oluştu:', error);
  }
}

fetchData();





document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const query = document.getElementById("search-query").value.toLowerCase();
  const apiUrl = 'https://raw.githubusercontent.com/Am1nn/Blog-Api/main/api.json';
  const contentContainer = document.getElementById('content-container');
  contentContainer.innerHTML = '';


  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(article => {
        if (article.Title.toLowerCase().includes(query)) {
          const postHTML = `
          <div class="item mb-5">
            <div class="row g-3 g-xl-0">
              <div class="col-2 col-xl-3">
                <img class="img-fluid post-thumb"  src="${article.Image}" alt="image">
              </div>
              <div class="col">
                <h3 class="title mb-1"><a class="text-link" href="/blog-post.html?id=${article.Id}"">${article.Title}</a></h3>
                <div class="meta mb-1">
                  <span class="date">Published ${article.PublisDate}</span>
                </div>
                <div class="intro" style="
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                max-height: 4.5em;
                line-height: 1.5em;
            ">
                ${article.Description}
            </div>
                <a class="text-link" href="/blog-post.html?id=${article.Id}"">Read more &rarr;</a>
              </div>
            </div>
          </div>
        `;

          // Oluşturduğumuz HTML yapısını 'content-container' içine ekliyoruz
          contentContainer.innerHTML += postHTML;




        }
      });


    })
    .catch(error => {
      console.error("API hatası:", error); // Hata durumu
      alert("Arama sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    });
});
