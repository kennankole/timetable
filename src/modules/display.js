import getRandomColor from './color.js';
import handleTaskNotification from './notification.js';

const renderData = (tdElement, data) => {
  let content = '';
  Object.keys(data).forEach((key) => {
    if (tdElement.className.startsWith(key.substring(0, 3))) {
      const taskData = data[key];
      const currentTime = new Date();

      const taskTime = new Date(`${taskData.date}T${taskData.fromTime}`);
      if (currentTime > taskTime) {
        content += `
        <div data-key="${key}" id="${key}" class="task-elements" style="background-color: ${getRandomColor()};">
          <p>Task: ${taskData.task}</p>
          <p>Date: ${taskData.date}</p>
          <p>Time: ${taskData.fromTime} - ${taskData.toTime} </p>
          <p>Time Created: ${taskData.createdTime} </p>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;
        return;
      }

      const timeRemaining = taskTime - currentTime;
      handleTaskNotification(timeRemaining, taskData.task);

      content += `
        <div data-key="${key}" id="${key}" class="task-elements" style="background-color: ${getRandomColor()};">
          <p>Task: ${taskData.task}</p>
          <p>Date: ${taskData.date}</p>
          <p>Time: ${taskData.fromTime} - ${taskData.toTime} </p>
          <p>Time Created: ${taskData.createdTime} </p>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;
    }
  });
  tdElement.innerHTML = content;
};

const displayStoredData = (tdElements, data) => {
  if (data) {
    if (tdElements instanceof NodeList) {
      tdElements.forEach((tdElement) => {
        renderData(tdElement, data);
      });
    } else {
      renderData(tdElements, data);
    }
  }
};
export default displayStoredData;
