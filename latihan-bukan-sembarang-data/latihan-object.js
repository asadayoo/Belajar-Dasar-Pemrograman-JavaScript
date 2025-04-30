let members = {
    names : 'Anaxa',
    email : 'anaxa@email.com',
    age : 25,
    address : 'Jakarta',
    nohandphone : 012625373829,
    gender : 'Male'
  };
  
  //mengakses denngan dot (.)
  console.log(members.names);
  
  //mengakses dengan square bracket
  console.log(members['email']);
  
  //mengakses dengan destruction
  const {age, address} = members;
  console.log(age, address);
  
  //mengubah nilai di properti Object
  members.nohandphone = 093344534;
  console.log(members.nohandphone);
  
  //menghapus properti di object
  delete members.gender;
  console.log(members);
    