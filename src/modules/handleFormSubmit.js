import displayStoredData from './display.js';

const handleSubmitForm = (className, dialog) => {
  const taskInput = document.getElementById('task').value;
  const dateInput = document.getElementById('date').value;
  const fromTimeInput = document.getElementById('from-time').value;
  const toTimeInput = document.getElementById('to-time').value;
  const divElement = document.querySelector(`div.${className}`);

  const storedDataString = localStorage.getItem('userData');
  const storedData = storedDataString ? JSON.parse(storedDataString) : {};
  const date = new Date();

  const key = `${className}-${Date.now()}`;
  storedData[key] = {
    task: taskInput,
    date: dateInput,
    fromTime: fromTimeInput,
    toTime: toTimeInput,
    createdTime: date.toLocaleTimeString(),
    dayCreated: className,
  };
  localStorage.setItem('userData', JSON.stringify(storedData));
  displayStoredData(divElement, storedData);
  dialog.close();
};

export default handleSubmitForm;
