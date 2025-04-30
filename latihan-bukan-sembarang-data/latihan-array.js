//membuat array Construction
const user = new Array();
const user1 = new Array(7);

//menggunakan sintaks Array.from
const foo = Array.from('foo');
console.log(foo);

//array literal - > sering digunakan let member = [];
let members = [
'Anaxa',
'anaxa@email.com',
 25,
'Jakarta',
 012625373829,
'male',
];

//mengakses element array
console.log(members[0]);

//manipulasi/mengubah/menambahkan nilai array

/*menggunakan indexing*/
members[4] = 093344534;

/*menambahkan nilai menggunakan push*/
members.push('Islam');

//menghapus element dan data array

/*menghapus datanya saja*/
delete members[5];

/*menghapus data dan elemennya*/
members.splice(5, 5);

/*menghapus data nilai awal menggunakan shift

members.shift();

Output : Anaxa -> dihapus

*/

/*menghapus data nilai akhir menggunakan pop

members.pop();

Output: 093344534 -> dihapus

*/

//array destructing
const [name, email] = members;
console.log(email);
