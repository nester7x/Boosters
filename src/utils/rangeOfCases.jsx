export const countRange = (startDate, finalDate) => {
  const array = [];
  const startYear = Number(startDate.slice(0, 4));
  const startMonth = Number(startDate.slice(5, 7));
  const finalYear = Number(finalDate.slice(0, 4));
  const finalMonth = Number(finalDate.slice(5, 7));

  for (let year = startYear; year <= finalYear; year++) {
    const start = year === startYear ? startMonth : 1;
    const end = year === finalYear ? finalMonth : 12;
    for (let month = start; month <= end; month++) {
      const monthString = month.toString().padStart(2, "0");
      array.push(`${year}-${monthString}`);
    }
  }

  return array;
};
