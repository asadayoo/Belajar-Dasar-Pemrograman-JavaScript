// Function untuk mengkonversi suhu dari Celcius ke Fahrenheit
// Menerima parameter temperatures dengan nilai default 50
function convertCelciusToFahrenheit(temperatures = 50) {
    // Rumus konversi Celcius ke Fahrenheit: (C * 9/5) + 32
    // Mengalikan suhu dengan 9/5 kemudian menambahkan 32
    const temperaturesInFahrenheit = 9/5 * temperatures + 32;

    // Menampilkan hasil konversi ke console
    console.log('Hasil Konverensi: ', temperaturesInFahrenheit);
}
// Menyimpan nilai suhu dalam Celcius (90 derajat) disebut 
const temperaturesInCelcius = 90;
// Memanggil fungsi konversi dengan parameter temperaturesInCelcius
convertCelciusToFahrenheit(temperaturesInCelcius);
