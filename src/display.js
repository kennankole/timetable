const storedDataString = localStorage.getItem('userData');
const data = storedDataString ? JSON.parse(storedDataString) : {};

const renderData = (tdElement) => {
  Object.keys(data).forEach((key) => {
    if (tdElement.className.startsWith(key.substring(0, 3))) {
      tdElement.innerHTML += `
        <div data-key="${key}" class="task-elements">
          <p>Task: ${data[key].task}</p>
          <p>Date: ${data[key].date}</p>
          <p>From: ${data[key].fromTime}</p>
          <p>To: ${data[key].toTime}</p>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;
    }
  });
};

const displayStoredData = (tdElements) => {
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

export const showData = (data) => {
  const divContainers = document.querySelectorAll('.day-of-the-week');
  Object.keys(data).forEach((key) => {
    divContainers.forEach((divContainer) => {
      if (divContainer.className.startsWith(key.substring(0, 3))) {
        divContainer.innerHTML += `
        <div data-key="" class="task-elements">
          <p>Task: ${data.task}</p>
          <p>Date: ${data.date}</p>
          <p>From: ${data.fromTime}</p>
          <p>To: ${data.toTime}</p>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
        `;
      }
    });
  });
};
