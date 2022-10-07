/*Napiši funkciju koja pretvara broj X u sate i minute*/

const vrijeme = (x) => {
  var sat = Math.floor(x / 60);
  var minute = x % 60;
  return "Ovo je " + sat + " sata i " + minute + " minuta";
};

console.log(vrijeme(120));
