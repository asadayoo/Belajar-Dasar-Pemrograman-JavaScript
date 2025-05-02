// Fungsi ini diekspor menggunakan named export sehingga saat diimpor harus menggunakan nama yang sama
// dan menggunakan kurung kurawal, contoh: import { splitString } from './namafile'
export function splitString(string)  if (typeof string !== 'string') {
    return [];
  }

  return Array.from(string);
}

// Fungsi ini diekspor menggunakan default export sehingga saat diimpor bisa menggunakan nama apa saja
// dan tidak perlu menggunakan kurung kurawal, contoh: import uniqueFunction from './namafile'
export default function unique(array)  const set = new Set(array)
  return Array.from(set.values());
}

/**
 * TODO:
 * 1. Ekspor fungsi splitString secara named export
 * 2. Ekspor fungsi unique secara default export
 */
 
