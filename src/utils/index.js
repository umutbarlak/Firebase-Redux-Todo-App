export const formatDate = (date) => {
  const lastDate = new Date(date);
  const formattedDate = `${lastDate.getDate().toString().padStart(2, "0")}.${(
    lastDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${lastDate.getFullYear()}`;
  return formattedDate;
};

export const parseFormattedDate = (formattedDate) => {
  const [day, month, year] = formattedDate.split(".");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
