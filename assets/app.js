// 1.- addArrayProperty

//({},'myProperty',[1, 3]) --> [1,3] (agrega propiedad)

const addArrayProperty = (obj, key, arr) => {
  return Object.defineProperty(obj, key, {
    value: arr,
  });
}
console.log('addArrayProperty', addArrayProperty({}, 'myProperty', [1, 3]));


// 2.- objectPropertiesCounter

// ({ 'name': 'John', 'lastname': 'Doe' }) --> 2 (cuenta las propiedades)

const objectPropertiesCounter = (obj) => {
  return Object.keys(obj).length;
};
console.log('objectPropertiesCounter', objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' }));

// 3.- removeStringValuesLongerThan

// (6,{ 'name': 'Montana','age': 20, 'location': 'Texas'}) 
// (elimina cualquier propiedad cuyos valores son cadenas más largas que el número dado)

const removeStringValuesLongerThan = (num, obj) => {
  const arrValues = Object.values(obj);
  const arrKey = Object.keys(obj);
  for (let i = 0; arrValues.length > i; i++) {
    let stringValues = arrValues[i];
    let stringKey = arrKey[i];
    if (stringValues.length > num) {
      delete obj[stringKey];
    };
  }
  return obj;
};
console.log('removeStringValuesLongerThan', removeStringValuesLongerThan(6, { 'name': 'Montana', 'age': 20, 'location': 'Texas' }));

// 4.- getElementOfArrayProperty

// ({ 'key': ['Jamil', 'Albrey'] }, 'key', 0 ) --> 'Jamil' (obtener objeto desde propiedad en un indice)

const getElementOfArrayProperty = (obj, key, index) => {
  if (Array.isArray(obj.key) == true) {
    arr = obj[key];
    val = arr[index];
    return val;
  }
}
console.log('getElementOfArrayProperty', getElementOfArrayProperty({ 'key': ['Jamil', 'Albrey'] }, 'key', 0));

// 5.- greetCustomer

// cliente desconocido 'Terrance' --> 'Welcome! Is this your first time?'
// 1 visita 'Joe' --> 'Welcome back, Joe! We're glad you liked us the first time!'
// mas de 1 visita 'Carol'--> 'Welcome back, Carol! So glad to see you again!'

const customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

const greetCustomer = (firstName) => {
  const arrKey = Object.keys(customerData);
  for (let i = 0; arrKey.length > i; i++) {
    let nameKey = arrKey[i];
    if (nameKey != firstName) {
      message = ('Welcome! Is this your first time?');
    };
  };

  for (let i = 0; arrKey.length > i; i++) {
    let nameKey = arrKey[i];
    if (nameKey === firstName) {
      const visitKey = (customerData[nameKey].visits);
      if (visitKey === 1) {
        message = ("Welcome back, " + nameKey + "! We're glad you liked us the first time!");
      }
      if (visitKey > 1) {
        message = ('Welcome back, ' + nameKey + '! So glad to see you again!');
      };
    };

  };
  return message;
};
console.log('greetCustomer', greetCustomer('Joe'));


// 6.- transformFirstAndLast
// 1er objeto del array sera la key y el ultimi el value
// ['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey'] --> Kevin: "Spacey"

const transformFirstAndLast = (array) => {
  firstValue = array[0];
  lastValue = array[array.length - 1];
  const obj = {};
  obj[firstValue] = lastValue;
  return obj;

};
console.log('transformFirstAndLast', transformFirstAndLast(['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey']));


// 7.- getAllKeys
// devuelve arreglo con keys
// {
//   a: 'a',
//   number: 11,
//   hungry: true,
//   grammyWins: 1
// }  --> ['a', 'number', 'hungry', 'grammyWins']

const getAllKeys = (obj) => {
  const arrKeys = Object.keys(obj);
  return arrKeys;
};
console.log('getAllKeys', getAllKeys({
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}));

// 8.- fromListToObject
// de un arreglo de matrices vuelve un objeto key:value
// [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]] --> 
// {
//   make: 'Ford'
//   model: 'Mustang',
//   year: 1964
// }

const fromListToObject = (arrMatriz) => {
  const obj = {};
  for (let i = 0; arrMatriz.length > i; i++) {
    obj[arrMatriz[i][0]] = arrMatriz[i][1];
  };
  return obj;
};
console.log('fromListToObject', fromListToObject([['MAKE', 'FORD'], ['MODEL', 'MUSTANG'], ['YEAR', 1964], ['QUALITY', 'EEEHHH']]));


// 9.- listAllValues
// entrega arreglo con los values
// {
//   a: 'a',
//   number: 11,
//   hungry: true,
//   grammyWins: 1
// } --> ['a', 11, true, 1]

const listAllValues = (obj) => {
  const objValue = Object.values(obj);
  return objValue;
};
console.log('listAllValues', listAllValues({
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}));


// 10.- transformEmployeeData
// ingresa arreglo de arreglo con matrices y regresa arreglo de objetos 
// [
//   [
//     ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//   ],
//   [
//     ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//   ]
// ] -->
// [
//   {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//   {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]

const transformEmployeeData = (arrOfArr) => {
  const obj = {};
  let arrObj = [];
  let otro = [];
  for (i = 0; arrOfArr.length > 0; i++) {
    let array = arrOfArr[i]
    array.forEach(element => {
      obj[element[0]] = element[1];
      otro = obj;
      return otro
    });



  };

  console.log(arrObj);

};
console.log('transformEmployeeData', transformEmployeeData([
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]));

// const obj = {};
//   let arrObj = [];
//   let otro = [];
//   for (let j = 0; arrOfArr.length > j; j++) {
//     for (let i = 0; arrOfArr[j].length > i; i++) {
//       obj[arrOfArr[j][i][0]] = arrOfArr[j][i][1];
//       otro[j] = obj;

//     };
//     console.log(otro[j]);


//   };

//   arrObj = [otro[j]]




// return arrObj;
// };