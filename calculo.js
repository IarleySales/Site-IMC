document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const infosDiv = document.getElementById("informacoes");
    const valorIMC = document.getElementById("valor");
    const descricao = document.getElementById("descricao");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert("Por favor, insira um peso e altura válidos.");
            return;
        }

        const imc = calcularIMC(peso, altura);
        const categoriaIMC = categorizarIMC(imc);

        valorIMC.textContent = imc.toFixed(2);
        descricao.textContent = categoriaIMC;

        infosDiv.classList.remove("escondido");
    });

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function categorizarIMC(imc) {
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc < 25) {
            return "Peso normal";
        } else if (imc < 30) {
            return "Sobrepeso";
        } else {
            return "Obesidade";
        }
    }
});
