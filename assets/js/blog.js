
/* ======= Highlight.js Plugin ======= */ 
/* Ref: https://highlightjs.org/usage/ */ 
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});


async function fetchData() {
  try {

    const response = await fetch('https://raw.githubusercontent.com/Am1nn/Blog-Api/main/api.json');
    const data = await response.json();


    const postId = window.location.href.toString();
    const lastChar = postId.charAt(postId.length - 1);


    data.forEach(post => {
      if(  post.Id==lastChar)
      {

        //Title
        document.getElementById('title').innerHTML=post.Title;

        //Publish Date
        document.getElementById('publish-time').innerHTML=post.PublisDate;

        //Category
        document.getElementById('category').innerHTML=post.Category;

        //Title 2
        document.getElementById('title-2').innerHTML=post.Title;

        document.getElementById('description').innerText=post.Description;

        document.getElementById('code').innerText=post.Code;
        if(post.Code=="")
          {
            document.getElementById('code-text').style.visibility='hidden'
            document.getElementById('code').style.visibility='hidden'

          }

        document.getElementById('code-description').innerHTML=post.CodeDescription
        if(post.CodeDescription=="")
        {
          document.getElementById('code-description-text').style.visibility='hidden'
        }





      }
    }
    )
  
  } catch (error) {
    console.error('Veri çekilirken hata oluştu:', error);
  }
}

fetchData();

