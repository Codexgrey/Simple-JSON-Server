// javascript for details.html
const container = document.querySelector('.details');
const id = new URLSearchParams(window.location.search).get('id');

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id) // '/' right after the http:"" is important 
    const post = await res.json()
    
    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `
    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderDetails());