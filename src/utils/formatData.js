export const formatDate = (date, config) => {
  const defaultOptions = { day: 'numeric', month: 'short', year: 'numeric' };
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
