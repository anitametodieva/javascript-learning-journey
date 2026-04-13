function solve() {
  document.querySelector('form').addEventListener('submit', onSubmit);

  const taskRef = document.getElementById('task');
  const descriptionRef = document.getElementById('description');
  const dateRef = document.getElementById('date');

  const [_, openSection, inProgressSection, completeSection] =
    document.querySelectorAll('section');

  const open = openSection.children[1];
  const inProgress = inProgressSection.children[1];
  const complete = completeSection.children[1];

  function onSubmit(e) {
    e.preventDefault();

    const task = taskRef.value;
    const description = descriptionRef.value;
    const date = dateRef.value;

    if (!task || !description || !date) {
      return;
    }

    const article = createArticle(task, description, date);
    open.appendChild(article);

    taskRef.value = '';
    descriptionRef.value = '';
    dateRef.value = '';
  }

  function createArticle(task, description, date) {
    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = task;

    const pDesc = document.createElement('p');
    pDesc.textContent = `Description: ${description}`;

    const pDate = document.createElement('p');
    pDate.textContent = `Due Date: ${date}`;

    const div = document.createElement('div');
    div.className = 'flex';

    const startBtn = createBtn('green', 'Start', onStart);
    const deleteBtn = createBtn('red', 'Delete', onDelete);

    div.appendChild(startBtn);
    div.appendChild(deleteBtn);

    article.appendChild(h3);
    article.appendChild(pDesc);
    article.appendChild(pDate);
    article.appendChild(div);

    return article;
  }

  function createBtn(className, text, handler) {
    const btn = document.createElement('button');
    btn.className = className;
    btn.textContent = text;
    btn.addEventListener('click', handler);
    return btn;
  }

  function onStart(e) {
    const article = e.target.parentElement.parentElement;
    const div = article.querySelector('.flex');

    div.innerHTML = '';

    const deleteBtn = createBtn('red', 'Delete', onDelete);
    const finishBtn = createBtn('orange', 'Finish', onFinish);

    div.appendChild(deleteBtn);
    div.appendChild(finishBtn);

    inProgress.appendChild(article);
  }

  function onDelete(e) {
    e.target.parentElement.parentElement.remove();
  }

  function onFinish(e) {
    const article = e.target.parentElement.parentElement;
    article.querySelector('.flex').remove();
    complete.appendChild(article);
  }
}