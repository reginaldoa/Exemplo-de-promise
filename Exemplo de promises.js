//Exemplo básico de promise.

function Dezenas(dezenas){
    if(typeof dezenas !== 'number') console.log('Fim do algoritmo') // Aqui poderia ser utilizado algum tipo de erro.
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(dezenas)
        },1000)
})}

Dezenas(10)
.then(resposta=>{
    console.log(resposta);
    return Dezenas(20);
}).then(resposta=>{
    console.log(resposta);
    return Dezenas(30);
}).then(resposta=>{
    console.log(resposta);
    return Dezenas()
})
.catch()