/**
 * TODO:
 * 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
 * 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
 *    "Halo! Nama saya (name). Saya tinggal di (origin)."
 *
 *    Contoh: Jika `name` bernilai 'Fulan' dan `origin` bernilai 'Jakarta', fungsi harus mengembalikan:
 *    "Halo! Nama saya Fulan. Saya tinggal di Jakarta.".
 *
 * 3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".
 * 4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
 * 5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.
 */


// Fungsi hello menerima 2 argumen:
// - name: nama orang (wajib diisi)
// - origin: kota asal (opsional, default="Bandung")
function hello(name, origin = 'Bandung') { 
   // Return string dengan template literal yang berisi name dan origin
   return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

// Memanggil fungsi hello dengan 2 argumen:
// - name = "Rahmat"
// - origin = "Semarang" 
const rahmat = hello('Rahmat', 'Semarang');

// Memanggil fungsi hello dengan 1 argumen:
// - name = "indra"
// - origin menggunakan nilai default "Bandung"
const indra = hello('indra');

// Menampilkan hasil pemanggilan fungsi ke console
console.log(rahmat);
console.log(indra);


