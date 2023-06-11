const createNotification = (task) => {
  const notification = new Notification('Task Reminder', {
    body: `It is time for ${task}`,
  });
  notification.onclick = () => {
    console.log('Notification clicked');
  };
};

const showEnableNotificationPrompt = () => {
  alert('Please enable notification to receive task reminder');
};

const askForNotificationPermission = () => {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        createNotification();
      } else if (permission === 'denied') {
        showEnableNotificationPrompt();
      } else if (permission === 'default') {
        console.log('Notification permission dismissed by the user');
      }
    })
    .catch((error) => {
      console.error('Error requestion notification permission', error);
    });
};

const handleTaskNotification = (timeRemaining, task) => {
  setTimeout(() => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        createNotification(task);
      } else if (Notification.permission === 'denied') {
        showEnableNotificationPrompt();
      } else {
        askForNotificationPermission();
      }
    }
  }, timeRemaining);
};

export default handleTaskNotification;