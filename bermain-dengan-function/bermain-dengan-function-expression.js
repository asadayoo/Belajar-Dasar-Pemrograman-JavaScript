// Fungsi untuk mengkonversi suhu dari Celcius ke Fahrenheit
// Parameter temperature memiliki nilai default 50
const convertCelciusToFahrenheit = function (temperature = 50) {
    // Rumus konversi: (9/5) * C + 32
    const result = (9/5) * temperature + 32;
    return result;
}

// Memanggil fungsi dengan parameter 90 derajat Celcius
const temperaturInFahrenheit = convertCelciusToFahrenheit(90);
// Menampilkan hasil konversi ke console
console.log('Hasil konverensi : ', temperaturInFahrenheit);
