// Array untuk menyimpan data karyawan
const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com', 
      joinYear: 2020,
    },
  ];

// Fungsi untuk menambahkan karyawan baru
function addEmployee(name, email, joinYear) {

  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
  
     // Membuat objek karyawan baru
     const newEmployee = {
        name: name,
        email: email,
        joinYear: joinYear,
     };
  
     // Menambahkan karyawan baru ke array employees
     employees.push(newEmployee);
  }

// Menambahkan karyawan baru dengan nama Budi
addEmployee('Budi', 'budi@dicoding.com', '2022');
// Menampilkan seluruh data karyawan
console.log(employees);
