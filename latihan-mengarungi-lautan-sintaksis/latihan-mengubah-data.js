// TODO: buatlah variabel (konstan) bernama `price` dan isi dengan nilai "20000" (string).

// TODO: konversikan variabel `price` menjadi angka menggunakan `parseInt`.

// TODO: buatlah variabel bernama `discount` dan isi dengan nilai 5000.

// TODO: kurangi `price` dengan `discount` dan simpan hasilnya di variabel `finalPrice`.


// TODO: buatlah variabel bernama `finalPriceString`,
// isi dengan konversi variabel `finalPrice` menjadi string menggunakan `toString`.

// TODO: buatlah variabel (konstan) bernama `message`,
// isi dengan penambahan string dari "Harga setelah diskon adalah Rp. " + `finalPriceString`.


// TODO: buatlah variabel bernama `quantity` dan isi dengan nilai "3" (string).

// TODO: konversikan variabel `quantity` menjadi angka menggunakan `Number`,
// lalu kalikan dengan `finalPrice` untuk mendapatkan total harga, simpan di variabel `totalPrice`.


// TODO: buatlah variabel bernama `totalPriceString`,
// isi dengan konversi variabel `totalPrice` menjadi string menggunakan `String`.

// TODO: buatlah variabel (konstan) bernama `finalMessage`,
// isi dengan "Total harga untuk 3 barang adalah Rp. " + `totalPriceString`.


// Membuat variabel konstan price dengan nilai string "20000"
const price = '20000';
// Membuat variabel discount dengan nilai 5000
let discount = 5000;
// Membuat variabel quantity dengan nilai string "3"
let quantity = '3';
      
// Mengkonversi variabel price menjadi angka menggunakan parseInt
const intFromPrice = parseInt(price);
// Mengurangi price dengan discount dan menyimpan hasilnya di finalPrice
const finalPrice = intFromPrice - discount;
// Mengkonversi finalPrice menjadi string menggunakan toString
const finalPriceString = finalPrice.toString();

// Mengkonversi quantity menjadi angka dengan Number dan mengalikan dengan finalPrice
const totalPrice = finalPrice * Number(quantity);
// Mengkonversi totalPrice menjadi string menggunakan String
const totalPriceString = String(totalPrice);
// Membuat pesan dengan menggabungkan string dan finalPriceString
const message = " Harga setelah Diskon adalah Rp. " + finalPriceString;
// Membuat pesan akhir dengan menggabungkan quantity dan totalPriceString
const finalMessage = "Total harga untuk " + quantity + " barang adalah Rp. " + totalPriceString;


console.log(message);
console.log(finalMessage);
