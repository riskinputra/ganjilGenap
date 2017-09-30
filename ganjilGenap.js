function ganjilGenap(angka){
  if(angka % 2 === 0){
    return 'Angka '+angka+' Merupakan Bilangan Genap';
  }else{
    return 'Angka '+angka+' Merupakan Bilangan Ganjil';
  }
  
}

console.log(ganjilGenap(2));
console.log(ganjilGenap(3));
console.log(ganjilGenap(6));
console.log(ganjilGenap(9));
console.log(ganjilGenap(55));
