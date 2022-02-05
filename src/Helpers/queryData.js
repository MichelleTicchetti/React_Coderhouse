import { stock } from "../Data/Stock.js";

export const queryData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 100);
  });
};
