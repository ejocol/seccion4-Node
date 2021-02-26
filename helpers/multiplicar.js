const fs = require('fs');
const colors = require('colors');

const crearTabla = async( base=1, listar=false, hasta= 10 ) => {
    try {
        

        let salida = '';        

        for(let i=1; i<=hasta;i++){
            salida += `${base} X ${i} = ${base*i}\n`;
        }

        if (listar) {
            console.log('========================'.rainbow);
            console.log(`Tabla del: ${base}`.rainbow);
            console.log('========================'.rainbow)

            console.log(salida.america);            
        }

        

        fs.writeFileSync(`./datos/tablaDel${base}.txt`,salida);
        return `tablaDel${ base }.txt`;


        
    } catch (error) {
        throw error;
    }    
}
module.exports = {
    crearTabla
}
