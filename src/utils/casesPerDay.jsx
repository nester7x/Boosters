export const countCasesDay = (data, currentDay, selectedCase) => {
  let counter = 0;
  data.map((day) =>
    day?.Date.split("T")[0].slice(0, 7) === currentDay
      ? (counter += day?.[selectedCase])
      : ""
  );
  return counter;
};
