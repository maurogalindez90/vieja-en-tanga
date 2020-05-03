const fs = require('fs');
const colors = require('colors');

let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if( !Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let resultado = '';
    for(let i = 1; i <= limite; i++) {
        resultado += `${base} por ${i} es igual a =  ${base * i} \n`;
    }

    resolve(resultado);
    
    })
}

let crearArchivo = (base, limite) => {

    return new Promise ((resolve, reject) => {

        if( !Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let resultado = '';
    for(let i = 1; i <= limite; i++) {
        resultado += `${base} por ${i} es igual a =  ${base * i} \n`;
    }
    
    fs.writeFile(`./tablas/tabla-${base}.txt`, resultado, (err) => {
        if (err) throw err;
        else 
            resolve(`tabla-${base}.txt`)
    }
    )

    });
    
}

module.exports = {
    crearArchivo,
    listar
}