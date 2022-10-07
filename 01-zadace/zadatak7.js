/*Napiši funkciju koja za dani broj X provjeri nalazi li se unutar 
[0, 1000], te množi sve višekratnike broja 7 do X te ispisuje rezultat.*/

const mnozenje = (x) => {
  var rezultat = 1;
  if (x >= 0 && x <= 1000) {
    for (let i = 1; i <= x; i++) {
      if (i % 7 === 0) {
        rezultat *= i;
      }
    }
    return rezultat;
  } else return "Broj se ne nalazi u ovom rasponu -> [0, 1000]";
};

console.log(mnozenje(23));
