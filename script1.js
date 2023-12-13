let addBtn = document.querySelector(".btn");
let numberOfTasks = 0;

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const myCard = document.createElement('div');
  myCard.className = 'card';
  
  const myNewTask = document.createElement('textarea');
  myNewTask.className = 'text-input';

  let myInput = document.querySelector('.task-input').value;

  if (myInput.trim() === '') {
    alert('Please enter a task before adding!');
    return;
  }

  myNewTask.textContent = myInput;

  const myDate = document.createElement('span');
  myDate.className = 'date';
  myDate.textContent = new Date().toLocaleString();

  myCard.appendChild(myNewTask);
  myCard.appendChild(myDate);

  let container = document.querySelector('.container');
  container.append(myCard);

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', function () {
    if (window.confirm("Are you sure you want to remove this card?")) {
      myCard.remove();
      
      updateTaskCount();
    }
  });

  myCard.appendChild(removeBtn);
  document.querySelector('.task-input').value = '';


  updateTaskCount();
});

function updateTaskCount() {
  let container = document.querySelector('.container');
  let cards = container.querySelectorAll('.card');
  numberOfTasks = cards.length;

  myDivCount = document.querySelector('.count');
  if (numberOfTasks === 0) {
    myDivCount.textContent = 'You have no current tasks.';
  } else {
    myDivCount.textContent = `Welcome, You have ${numberOfTasks} current Tasks`;
  }

  localStorage.setItem('taskCount', numberOfTasks);
}
updateTaskCount();
