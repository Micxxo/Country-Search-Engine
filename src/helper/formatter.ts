export const ArrayToString = (datas: Array<number>) => {
  const formattedArray = datas.map((num) => num.toFixed(2));
  const datasString = formattedArray.join(", ");
  return datasString;
};
