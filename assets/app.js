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
  for (i = 0; arrValues.length > i; i++) {
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
