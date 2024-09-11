
  
  
  // API'den veri çekmek için bir fonksiyon tanımlıyoruz
  async function fetchData() {
    try {
      // Burada API'den veri çekiyoruz (örneğin, fetch ile)
      const response = await fetch('https://raw.githubusercontent.com/Am1nn/Blog-Api/main/api.json');
      const data = await response.json();
  
      // Veri başarılı bir şekilde alındıktan sonra, bunu HTML içine ekleyeceğiz
      const contentContainer = document.getElementById('content-container');
      contentContainer.innerHTML = ''; // Önceki içeriği temizliyoruz
  
      data.forEach(post => {
        // Her post için bir HTML yapısı oluşturuyoruz
        const postHTML = `
          <div class="item mb-5">
            <div class="row g-3 g-xl-0">
              <div class="col-2 col-xl-3">
                <img class="img-fluid post-thumb" src="${post.Image}" alt="image">
              </div>
              <div class="col">
                <h3 class="title mb-1"><a class="text-link" href="/blog-post.html?id=${post.Id}"">${post.Title}</a></h3>
                <div class="meta mb-1">
                  <span class="date">Published ${post.PublisDate}</span>
                </div>
                <div class="intro">${post.Description}</div>
                <a class="text-link" href="/blog-post.html?id=${post.Id}"">Read more &rarr;</a>
              </div>
            </div>
          </div>
        `;
  
        // Oluşturduğumuz HTML yapısını 'content-container' içine ekliyoruz
        contentContainer.innerHTML += postHTML;
      });
    } catch (error) {
      console.error('Veri çekilirken hata oluştu:', error);
    }
  }
  
  // Sayfa yüklendiğinde API'den veri çekmeyi başlatıyoruz
  fetchData();
  
