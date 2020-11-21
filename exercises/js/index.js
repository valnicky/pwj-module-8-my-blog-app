const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPosts();
};

const getPosts = () => {
  fetch(API_URL, {
    method: "GET",
  }).then((response) => {
      return response.json();
    }).then((data) => {
      buildPosts(data);
    });
};

const buildPosts = (blogPosts) => {
  let blogPostsContent = "";
  for(blogPost of blogPosts){
    const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
    blogPostsContent += `<div class="post">
                <div class="post-image"><img src="" alt=""></div>
                <div class="post-content">
                    <p class="post-date">${postDate}</p>
                    <h4 class="post-title">${blogPost.title}</h4>
                    <p class="post-text">${blogPost.content}
                    </p>
                </div>
            </div>`
  }
  
  document.querySelector('.blog-post').innerHTML = blogPostContent;
};
