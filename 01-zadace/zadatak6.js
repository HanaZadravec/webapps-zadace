/*Napiši funkciju kojoj se predaje string, te ona ispisuje bez razmaka svaku
rijec velikim slovom (cammelCase)*/

const velikoslovo = (str) => {
  var spojeno = str.split(" ");
  for (let i = 0; i < spojeno.length; i++) {
    if (i != 0) {
      spojeno[i] = spojeno[i].charAt(0).toUpperCase() + spojeno[i].substring(1);
    } else continue;
  }
  return spojeno.join("");
};

console.log(velikoslovo("web apps vjezbe"));
