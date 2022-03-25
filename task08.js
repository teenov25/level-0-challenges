function convertToTime(number) {
  const hours = Math.floor(number / 60);
  const minutes = number % 60;

  if (hours === 1 && minutes === 1) {
    return hours + " " + "hour," + " " + minutes + " " + "minute";
  } else if ((hours > 1 && minutes === 1) || (hours == 0 && minutes == 1)) {
    return hours + " " + "hours," + " " + minutes + " " + "minute";
  } else if ((hours == 1 && minutes > 1) || (hours == 1 && minutes == 0)) {
    return hours + " " + "hour," + " " + minutes + " " + "minutes";
  } else {
    return hours + " " + "hours," + " " + minutes + " " + "minutes";
  }
}
console.log(convertToTime(10));
