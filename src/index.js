const dialog = document.getElementById('favDialog');

const displayStoredData = (tdElement, data) => {
  if (data) {
    tdElement.innerHTML += `
      <div>
        <p>Task: ${data.task}</p>
        <p>Date: ${data.date}</p>
        <p>From: ${data.fromTime}</p>
        <p>To: ${data.toTime}</p>
      </div>
    `;
  }
};

const openCheck = (dialog, className) => {
  if (dialog.open) {
    document.getElementById('form-container').innerHTML = `
      <div>
        <h1>Plan your ${className}</h1>
        <form method="" id="form-data">
          <label name="task">Task</label>
          <input type="text" placeholder="Enter task..." id="task">
          <label name="date">Date:</label>
          <input type="date" placeholder="Enter date" id="date">
          <label name="day">Day:</label>
          <input type="text" placeholder="day" value="${className}">
          <label name="time">From:</label>
          <input type="time" id="from-time">
          <label name="time">To:</label>
          <input type="time" id="to-time">
          <button type="submit" id="confirm">Confirm</button>
          <button id="cancel" type="reset">Cancel</button>
        </form>
      </div>
    `;
    const cancelButton = document.getElementById('cancel');
    cancelButton.addEventListener('click', () => {
      dialog.close('animalNotChosen');
      openCheck(dialog, className);
    });

    const handleSubmit = document.getElementById('form-data');
    handleSubmit.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskInput = document.getElementById('task').value;
      const dateInput = document.getElementById('date').value;
      const fromTimeInput = document.getElementById('from-time').value;
      const toTimeInput = document.getElementById('to-time').value;
      const tdElement = document.querySelector(`td.${className}`);

      const storedDataString = localStorage.getItem('userData');
      const storedData = storedDataString ? JSON.parse(storedDataString) : {};
      const key = `${className}-${Date.now()}`;

      storedData[key] = {
        task: taskInput,
        date: dateInput,
        fromTime: fromTimeInput,
        toTime: toTimeInput,
      };

      localStorage.setItem('userData', JSON.stringify(storedData));

      displayStoredData(tdElement, storedData[key]);

      dialog.close();
    });
  }
};

const storedDataString = localStorage.getItem('userData');
const storedData = storedDataString ? JSON.parse(storedDataString) : {};

const tableCells = document.querySelectorAll('td');
tableCells.forEach((cells) => {
  const tdElement = document.querySelector(`td.${cells.className}`);
  Object.keys(storedData).forEach((key) => {
    if (cells.className.startsWith(key.substring(0, 3))) {
      displayStoredData(tdElement, storedData[key]);
    }
  });
});

const addElements = document.querySelectorAll('.plus');
addElements.forEach((elem) => {
  elem.addEventListener('click', () => {
    dialog.showModal();
    openCheck(dialog, elem.parentElement.className);
  });
});