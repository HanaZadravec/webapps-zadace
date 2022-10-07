/*Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000]*/

const trazenje = (x) => {
  if (x >= 100 && x <= 150000) {
    return x + " je unutar [100,150000]";
  } else {
    return x + " nije unutar [100,150000]";
  }
};

console.log(trazenje(53));
