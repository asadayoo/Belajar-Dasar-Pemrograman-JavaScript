// Fungsi untuk mengkonversi suhu dari Celcius ke Fahrenheit
// Parameter temperatur memiliki nilai default 50
function convertCelciusToFahrenheit(temperatur = 50){
	// Rumus konversi: (°C × 9/5) + 32 = °F
	const result = 9/5 * temperatur + 32;
  	return result;
}
// Memanggil fungsi dengan parameter 90°C
const temperaturInFahrenheit = convertCelciusToFahrenheit(90);
// Menampilkan hasil konversi ke console
console.log('Hasil konverensi : ',temperaturInFahrenheit);
