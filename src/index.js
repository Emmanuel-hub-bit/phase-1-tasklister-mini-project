document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('create-task-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    listItems(e.target.children[1].value)
  })
})

function listItems(items){
  let li = document.createElement('li');
  li.textContent = `${items}`
  document.getElementById('tasks').appendChild(li)
}