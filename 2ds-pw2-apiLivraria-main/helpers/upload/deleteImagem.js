const fs = require('fs');

const deleteImagem = (imagem) => {

    fs.unlink(imagem, (error)=>{
        if(error){
            console.log("ERRO DE EXCLUSÃO DE IMAGEM: " + error);
        } else {
            console.log("IMAGEM EXCLUÍDA COM SUCESSO!");
        }
    });

}

module.exports = deleteImagem;