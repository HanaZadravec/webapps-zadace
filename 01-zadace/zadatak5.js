/*Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve
djeljive s 3 */

const neparni = (polje) => {
  let rez_polje = [];
  for (let i of polje) {
    if (i % 3 === 0) {
      rez_polje.push(i);
    }
  }
  console.log("Brojevi djeljivi s 3: ", ...rez_polje); // ... nam omogućuje da se uzmu svi podaci iz polja
};

neparni([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
