// javascript for create.html
const form = document.querySelector('form');

const createpost = async (e) => {
    e.preventDefault();
    const newPost = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    await fetch('http://localhost:3300/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: { 'content-type': 'application/json' } // this is to say we're sending a json file
    })

    window.location.replace('./index.html'); // relocating user back to the home page
};

form.addEventListener('submit', createpost);