const displayStoredData = (tdElement, data, key) => {
  if (data) {
    tdElement.innerHTML = `
      <div data-key="${key}">
        <p>Task: ${data.task}</p>
        <p>Date: ${data.date}</p>
        <p>From: ${data.fromTime}</p>
        <p>To: ${data.toTime}</p>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
  }
};
export default displayStoredData;