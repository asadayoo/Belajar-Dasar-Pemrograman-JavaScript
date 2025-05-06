// API object yang berisi method fetch untuk simulasi request API dengan delay
const API = {
  // Method fetch menerima parameter delay dan simulateError
  // delay: waktu tunggu sebelum promise resolve/reject (dalam millisecond)
  // simulateError: boolean untuk simulasi error (default: false)
  fetch(delay, simulateError = false) {
    return new Promise((resolve, reject) => {
      // Menggunakan setTimeout untuk mensimulasikan delay
      setTimeout(() => {
        // Jika simulateError true, promise akan di-reject dengan error message
        if (simulateError) {
          return reject(new Error(`Error from delay ${delay}`));
        }
        
        // Jika simulateError false, promise akan di-resolve dengan data
        return resolve(`Data from delay ${delay}`);
      }, delay);
    });
  }
};

// Data sample untuk testing error case
// Array berisi object dengan property delay dan simulateError
const sampleErrorData = [
  {
    delay: 100,
    simulateError: false,
  },
  {
    delay: 50, 
    simulateError: true, // akan menghasilkan error
  },
];

// Data sample untuk testing success case
// Array berisi object dengan property delay dan simulateError
const sampleSuccessData = [
  {
    delay: 100,
    simulateError: false,
  },
  {
    delay: 50,
    simulateError: false,
  },
];

// Export semua variable agar bisa digunakan di file lain
export { API, sampleErrorData, sampleSuccessData };
