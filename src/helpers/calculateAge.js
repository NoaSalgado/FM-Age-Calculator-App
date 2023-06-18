// Calculates age in days, months and years from the difference between two dates
export default function calculateAge(day, month, year) {
  const date = new Date(year, month, day).getTime();
  const currentDate = new Date(Date.now()).getTime();
  const difference = new Date(currentDate - date);

  const days = difference.getDate();
  let months = difference.getMonth() + 1;
  let years = difference.getFullYear() - 1970;

  if (months === 12) {
    months = 0;
    years += 1;
  }

  return {
    days,
    months,
    years,
  };
}
