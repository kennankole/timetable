const displayStoredData = (tdElement, data) => {
  if (data) {
    tdElement.forEach((cells) => {
      const content = '';
      Object.keys(data).forEach((key) => {
        if (cells.className.startsWith(key.substring(0, 3))) {
          cells.innerHTML += `
          <div data-key="${key}">
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
      tdElement.innerHTML = content;
    });
  }
};
export default displayStoredData;
