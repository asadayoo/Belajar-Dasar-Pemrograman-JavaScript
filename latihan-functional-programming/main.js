// Array berisi data produk dengan properti id, name, category, dan price
const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
  ];
  
  // Fungsi untuk memfilter produk berdasarkan kategori
  function getProductsByCategory(products, category) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
     */
    // Menggunakan filter() untuk mendapatkan array baru yang berisi produk dengan kategori yang sesuai
    return products.filter(product => product.category === category);
  }
  
  // Fungsi untuk mencari produk berdasarkan ID
  function findProductById(products, id) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
     */
    // Menggunakan find() untuk mendapatkan satu produk yang memiliki id yang sesuai
    return products.find(products => products.id === id);
  }
  
  // Fungsi untuk menghitung total harga semua produk
  function calculateTotalPrice(products) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk menghitung total harga semua produk.
     */
    // Menggunakan reduce() untuk menjumlahkan harga dari semua produk, dimulai dari nilai awal 0
    return products.reduce((total, sampleProducts) =>  total + sampleProducts.price, 0);
  }
  
  // Fungsi untuk menerapkan diskon pada harga semua produk
  function applyDiscount(products, discount) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array baru,
     * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
     */
    // Menggunakan map() untuk membuat array baru dengan harga yang sudah didiskon
    // Menggunakan spread operator (...) untuk menyalin semua properti produk
    // Menghitung harga baru dengan mengurangi persentase diskon
    return products.map(products => ({...products, price: products.price - (products.price * discount / 100)}))
    
  }
  
  // Contoh penggunaan fungsi-fungsi di atas
  console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
  console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
  console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
  console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3
  
