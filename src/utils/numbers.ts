const truncateDecimals = (value: number, decimals = 2) => {
  return value.toFixed(decimals);
};

const stringToNbr = (initialValue: string) => {
  return Number(initialValue.replace(/[^\d.-]/g, ""));
};

export { truncateDecimals, stringToNbr };
