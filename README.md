# Program untuk Mencari Bialngan Ganjil Genap
**Latihan 1 - Program untuk Mencari Bilangan Ganjil Genap.**

Terdapat sebuang function ganjilGenap(angka) yang diberikan sebuah parameter berupa angka. 
Function akan me-return nilai angka apakah bilangan Genap atau Ganjil.  
```
function ganjilGenap(angka){
  if(angka % 2 === 0){
    return 'Angka '+angka+' Merupakan Bilangan Genap';
  }else{
    return 'Angka '+angka+' Merupakan Bilangan Ganjil';
  }
  
}

console.log(ganjilGenap(2)); // Angka 2 Merupakan Bilangan Genap
console.log(ganjilGenap(3)); // Angka 3 Merupakan Bilangan Ganjil
console.log(ganjilGenap(6)); // Angka 6 Merupakan Bilangan Genap
console.log(ganjilGenap(9)); // Angka 9 Merupakan Bilangan Ganjil
console.log(ganjilGenap(55)); // Angka 5 Merupakan Bilangan Ganjil
```
