function isWeekend(date) {
  const day = new Date(2023, 11, date).getDay();

  return day === 0 || day === 6;
}

export default isWeekend;
