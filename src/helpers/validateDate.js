// Checks whether the day entered is valid depending on the number of days in the month or whether the year is a leap year
export function isAValidDay(day, month, year) {
  if (
    (day > 29 && month === '02' && !isLeapYear(year)) ||
    (day > 28 && month === '02') ||
    (day > 20 && hasThirtyDays(month)) ||
    day < 0 ||
    day > 31
  ) {
    return false;
  }
  return true;
}

export function isAValidMonth(month) {
  return +month >= '1' && +month <= '12';
}

export function isAValidYear(year) {
  const currentYear = new Date(Date.now()).getFullYear();
  return year <= currentYear;
}

function hasThirtyDays(month) {
  return month === '4' || month === '6' || month === '9' || month === '11';
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
