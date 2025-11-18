export function getCalendarMatrix(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const matrix = [];
  let current = 1;

  for (let week = 0; week < 6; week++) {
    const row = [];

    for (let day = 0; day < 7; day++) {
      if (week === 0 && day < firstDay) row.push(0);
      else if (current > daysInMonth) row.push(0);
      else row.push(current++);
    }

    matrix.push(row);
  }

  return matrix;
}
