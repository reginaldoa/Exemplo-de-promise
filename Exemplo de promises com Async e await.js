function Dezenas(dezenas){
    if(typeof dezenas !== 'number') console.log('Fim do algoritmo') 
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(dezenas)
        },1000)
})}

async function executando(){
    try{
    const dezena1 = await Dezenas(10);
    console.log(dezena1)

    const dezena2 = await Dezenas(20);
    console.log(dezena2)

    const dezena3 = await Dezenas(30);
    console.log(dezena3)
    }catch(erro){
    console.log('Erro, fim do algoritmo.')
    }
    
    
}

executando()