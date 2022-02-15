const inputTodo = document.querySelector('.input-todo');
const list = document.querySelector('.todos');
const loading = document.querySelector('.loading');

let todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false },
];

setTimeout(function () {
  loading.style.display = 'none';
  todos.map((todo) => {
    const li = document.createElement('li');
    li.id = `${todo.id}`;
    const label = document.createElement('label');
    const checkInput = document.createElement('input');
    const span = document.createElement('span');

    let text = `${todo.content}`;
    checkInput.setAttribute('type', 'checkbox');
    if (todo.completed) checkInput.setAttribute('checked', true);
    checkInput.addEventListener('click', chageState);

    label.innerText = text;
    label.prepend(checkInput);

    span.innerText = ' X';
    span.addEventListener('click', deleteTodo);

    li.appendChild(label);
    li.appendChild(span);

    list.appendChild(li);
  });
}, 1000);

inputTodo.addEventListener('keypress', addTodo);
function addTodo(e) {
  if (e.key === 'Enter') {
    const li = document.createElement('li');
    li.id = todos.length + 1;
    const label = document.createElement('label');
    const checkInput = document.createElement('input');
    const span = document.createElement('span');

    let text = `${inputTodo.value}`;
    checkInput.setAttribute('type', 'checkbox');
    checkInput.addEventListener('click', chageState);

    label.innerText = text;
    label.prepend(checkInput);

    span.innerText = ' X';
    span.addEventListener('click', deleteTodo);

    li.appendChild(label);
    li.appendChild(span);

    list.appendChild(li);

    todos = [
      ...todos,
      { id: todos.length + 1, content: `${inputTodo.value}`, completed: false },
    ];

    inputTodo.value = '';
    console.log(todos);
  }
}

function deleteTodo(e) {
  const btn = e.target;
  const li = btn.parentNode;

  let li_next = li.nextSibling;
  // console.log(li_next);
  let index = parseInt(li.id);
  // console.log(index);

  list.removeChild(li);
  const changeTodos = todos.filter((todo) => todo.id !== parseInt(li.id));
  for (let i = index - 1; i < changeTodos.length; i++) {
    changeTodos[i].id = i + 1;
  }

  for (let i = index; i <= changeTodos.length; i++) {
    li_next.id = i;
    let a = li_next.nextSibling;
    li_next = a;
  }

  // console.log(changeTodos);
  todos = changeTodos;
  console.log(todos);
}

function chageState(e) {
  if (e.target.checked) {
    let index = e.target.parentNode.parentNode.id;
    todos[index - 1].completed = true;
    console.log(todos[index - 1]);
  } else {
    let index = e.target.parentNode.parentNode.id;
    todos[index - 1].completed = false;
    console.log(todos[index - 1]);
  }
}

console.log(todos);
