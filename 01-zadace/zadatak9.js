/*Napiši funkciju koja prima dva objekta, te u slučaju da imaju iste kljućeve vraća true*/

let ob1 = {
  a: 1,
  b: 2,
  c: 3,
};

let ob2 = {
  a: 321,
  b: 3,
  c: 1,
};

const iste = (obj1, obj2) => {
  let same = true;
  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  } else {
    for (let i = 0; i < Object.keys(obj1).length; i++) {
      if (Object.keys(obj1)[i] !== Object.keys(obj2)[i]) {
        same = false;
      }
    }
  }
  return same;
};

console.log(iste(ob1, ob2));
