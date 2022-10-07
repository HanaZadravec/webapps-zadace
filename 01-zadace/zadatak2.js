/*Napiši funkciju koja pretvara HRK u EUR*/

const pretvorba = (kune) => {
  return kune * 0.13; // 1 kn jest 0.13 eura
};

console.log("Euri:", pretvorba(500)); // 500 kn je 65 eura
