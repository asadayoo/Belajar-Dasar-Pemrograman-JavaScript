// First Class Citizen - Function bisa disimpan dalam variabel
// Membuat fungsi multiply yang menerima 2 parameter dan mengembalikan hasil perkaliannya
function multiply (a, b) {
    return a * b;
}

// First Class Citizen - Function bisa dikirim sebagai parameter ke function lain
// Membuat fungsi calculate yang menerima 3 parameter:
// - operation: fungsi operasi yang akan dijalankan
// - numberA: angka pertama
// - numberB: angka kedua
const calculate = function (operation, numberA, numberB) {
    return operation(numberA, numberB);
}

// First Class Citizen - Function multiply dikirim sebagai parameter ke function calculate
// Memanggil fungsi calculate dengan parameter:
// - multiply: fungsi perkalian
// - 2: angka pertama
// - 4: angka kedua
const result = calculate(multiply, 2, 4);
// Menampilkan hasil perkalian ke console
console.log('Hasil perkalian 2 x 4 = ', result);