export const formatDate = (date, config) => {
  const defaultOptions = { day: 'numeric', month: 'short', year: 'numeric' };
  const options = config ? config : defaultOptions;

  return new Date(date).toLocaleDateString('en-US', options);
};

export const formatDateTime = (date, config) => {
  const defaultOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const options = config ? config : defaultOptions;

  return new Date(date).toLocaleDateString('en-US', options);
};

export const formatTime = (time) => {
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  // Format time in 12-hour format with AM/PM
  const formattedTime = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return formattedTime;
};

export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Add leading zero if month or day is less than 10
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  return `${year}-${month}-${day}`;
};

export const getCurrentTime = () => {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zero if minutes are less than 10
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return `${hours}:${minutes} ${amOrPm}`;
};
