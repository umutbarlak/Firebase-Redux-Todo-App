export const formatDate = (date) => {
  const lastDate = new Date(date);
  const formattedDate = `${lastDate.getDate().toString().padStart(2, "0")}-${(
    lastDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${lastDate.getFullYear()}`;
  return formattedDate;
};
