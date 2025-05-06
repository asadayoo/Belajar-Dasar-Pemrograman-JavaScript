import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */

// Fungsi async untuk memproses data dari API
async function processData(data) {
    try {
        // Menggunakan Promise.all untuk menjalankan semua API.fetch secara paralel
        // data.map mengekstrak delay dan simulateError dari setiap objek dalam array
        const results = await Promise.all(
            data.map(({ delay, simulateError }) => API.fetch(delay, simulateError))
        );
        // Mengembalikan hasil array dari semua promise yang berhasil
        return results;
    } catch (error) {
        // Membangkitkan error jika ada promise yang reject
        throw new Error(`${error.message}`);
    }
}


// Test case untuk error handling
processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
// Test case untuk successful response
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']
