import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res)=> {
    res.send("server rodando")
})

app.get("/api/clima/:cidade", async (req, res) => {
    const cidade = req.params.cidade;
    const apiKey = process.env.API_KEY;
    
    try{

        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`);
        const dados = await resposta.json();
        res.json(dados);
    }
    catch(erro){
        console.error("Erro ao buscar os dados", erro);
        console.log("erro");
        res.status(500).json({erro : "Erro ao Buscar"});
    };
});

const PORTA = 3550;
app.listen(PORTA, ()=> console.log(`server rodando na porta http://localhost:${PORTA}`));