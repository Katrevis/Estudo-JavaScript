function checarTamanhoTexto(texto) {
    if(texto.length > 10) {
        console.log("texto muito longo");
    }else {
        console.log("Texto dentro do limite");
    }
}

checarTamanhoTexto("Voce é esperta");
checarTamanhoTexto("Verde");