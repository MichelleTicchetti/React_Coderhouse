import { stock } from "../Data/Stock.js";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 100);
  });
};
