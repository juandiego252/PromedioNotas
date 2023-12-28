calcularPromedioNotas = function(){
    let valorNota1 = recuperarFlotante("txtNota1");
    let valorNota2 = recuperarFlotante("txtNota2");
    let valorNota3 = recuperarFlotante("txtNota3");
    let promedio;
    promedio = calcularPromedio(valorNota1,valorNota2,valorNota3).toFixed(2);
    cambiarTexto("lblPromedio", promedio);

};