function attachEvents() {

    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');

    const postsSelect = document.getElementById('posts');

    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const commentsList = document.getElementById('post-comments');

    let posts = {};

    loadBtn.addEventListener('click', loadPosts);
    viewBtn.addEventListener('click', viewPost);


    async function loadPosts() {

        const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const data = await response.json();

        posts = data;

        postsSelect.innerHTML = '';

        Object.values(data).forEach(post => {

            const option = document.createElement('option');

            option.value = post.id;
            option.textContent = post.title;

            postsSelect.appendChild(option);

        });

    }


    async function viewPost() {

        const selectedId = postsSelect.value;

        const post = Object.values(posts).find(p => p.id === selectedId);

        postTitle.textContent = post.title;
        postBody.textContent = post.body;

        const response = await fetch('http://localhost:3030/jsonstore/blog/comments');
        const comments = await response.json();

        commentsList.innerHTML = '';

        Object.values(comments)
            .filter(c => c.postId === selectedId)
            .forEach(comment => {

                const li = document.createElement('li');

                li.textContent = comment.text;

                commentsList.appendChild(li);

            });

    }

}

attachEvents();
