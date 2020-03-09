//requireds
const fs = require('fs');

// const fs = required('express');
// const fs = required('./archivo');

let listarTabla = (base, limite) => {
    if (!Number(base) || !Number(limite)) {
        reject(`El valor introducido ${base} o ${limite} no es un número`);
        return;
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i * base}\n`);
    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base} o ${limite} no es un número`);
            return;
        }
        let textoData = '';
        for (let i = 1; i <= limite; i++) {
            textoData += (`${base} * ${i} = ${i * base}\n`);
        }
        fs.writeFile(`tablas-multiplicar/tabla-del-${base}.txt`, textoData, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-del-${base}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}