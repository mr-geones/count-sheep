function countSheep(num) {
  let sheeps = "1 sheep...";
  if(num > 1) {
    for(let i = 2; i <= num; i++) {
      sheeps = sheeps.concat(`${i} sheep...`);
    } 
  }
  else if(num === 1) {
    sheeps = "1 sheep...";
  }
  else {
    sheeps = "";
  }
  return sheeps;
}
