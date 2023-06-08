import getRandomColor from './color.js';

const renderData = (tdElement, data) => {
  let content = '';
  Object.keys(data).forEach((key) => {
    if (tdElement.className.startsWith(key.substring(0, 3))) {
      content += `
        <div data-key="${key}" class="task-elements" style="background-color: ${getRandomColor()};">
          <p>Task: ${data[key].task}</p>
          <p>Date: ${data[key].date}</p>
          <p>Time: ${data[key].fromTime} - ${data[key].toTime} </p>
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
