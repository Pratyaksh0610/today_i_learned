const Person = {
    name:"Pratyaksh",
    Country: {
        country: "India",
        state : {
            state: "Haryana"
        }
    },
    Class:{
        age: 23,
        section: 'A',
        rollNum: 26
    }
}

const output = flattenObject(Person);
console.log(output)

export function flattenObject(obj,parentPath = '',result = {}){
    Object.keys(obj).forEach((key)=>{
        const newPath = parentPath ? parentPath + `.${key}` : key;
        if(typeof obj[key] === 'object' && obj[key]!==null){
            flattenObject(obj[key],newPath,result);
        }
        else{
            result[newPath] = obj[key];
        }
    });
    return result;
}