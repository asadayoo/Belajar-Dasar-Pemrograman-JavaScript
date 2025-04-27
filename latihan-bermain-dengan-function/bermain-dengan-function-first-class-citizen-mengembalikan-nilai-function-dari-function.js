// Ini adalah contoh closure di JavaScript
// Fungsi multipier adalah higher-order function yang mengembalikan fungsi lain
function multipier (x) {
    // Fungsi inner ini memiliki akses ke parameter x dari fungsi outer (multipier)
    return function (num){
        // Mengalikan parameter x dengan num yang diberikan
        return x * num;
    };
    
}

// Membuat fungsi double dengan nilai x = 2
const double = multipier(2);
// Membuat fungsi triple dengan nilai x = 3 
const triple = multipier(3);

// Memanggil fungsi double dengan parameter 10
// Akan menghasilkan 2 * 10 = 20
console.log('Hasil dari 2 x 10 = ',double(10));
// Memanggil fungsi triple dengan parameter 11
// Akan menghasilkan 3 * 11 = 33
console.log('Hasil dari 3 x 11 = ',triple(11));

