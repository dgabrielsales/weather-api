document.getElementById("buscar").addEventListener("click", async ()=> {
    const cidade = document.getElementById("cidade").value.trim();
    const resultado = document.getElementById("resultado");

    console.log(cidade);
    
    if(!cidade){
        resultado.innerHTML = `<p class="text-red-500">Digite uma cidade!</p>`;
        return;
    };
     
    try{
        const url =  await fetch(`http://localhost:3000/api/clima/${cidade}`);
        if(!url) throw new Error("erro ao buscar");
        const dados = await url.json();    
        const {name, sys, main} = dados;
        console.log(main.temp)
        resultado.innerHTML = `
          <div class="bg-blue-400  rounded-lg p-4 mt-3">
            <h2 class="text-lg  font-bold ">${name}, ${sys.country}</h2>
            <p class="text-4xl font-bold text-blue-600">${main.temp}ºC</p>
          </div>
        `     
    }   
    catch(erro){
        resultado.innerHTML = `<p class="text-red-500">Cidade não encontrada!</p>`;

    }
});
