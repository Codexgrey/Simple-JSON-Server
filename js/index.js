// javascript for index.html

const renderPosts = async () => {
    let url =  'http://localhost:3000/posts';

    const res = await fetch(url);
    const posts = await res.json();
    
    let template = '';
    posts.map(post => {
       template += `
       <div class="post">
        <h2>${post.title}</h2>
        <p><small> ${post.likes} likes <small></P>
        <p>${post.body.slice(0, 200)}</p>
        <a href="/details.html">read more...</a>
       </div>
       ` ;
    })
}

window.addEventListener('DOMContentLoaded', () => renderPosts());