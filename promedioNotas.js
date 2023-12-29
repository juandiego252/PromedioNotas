calcularPromedioNotas = function(){
    let valorNota1 = recuperarFlotante("txtNota1");
    let valorNota2 = recuperarFlotante("txtNota2");
    let valorNota3 = recuperarFlotante("txtNota3");
    let promedio;
    promedio = calcularPromedio(valorNota1,valorNota2,valorNota3).toFixed(2);
    cambiarTexto("lblPromedio", promedio);
    if(promedio < 5 && promedio > 0){
        cambiarImagen("imgNotas","./images/bad.gif");
        cambiarTexto("lblMensaje", "REPROBADO");
    } else if(promedio >= 5 && promedio <=8){
        cambiarImagen("imgNotas", "./images/bien2.gif");
        cambiarTexto("lblMensaje", "BUEN TRABAJO");
    } else if(promedio > 8 && promedio <= 10){
        cambiarImagen("imgNotas", "./images/bien.gif")
        cambiarTexto("lblMensaje", "EXCELENTE");
    } else {
        cambiarImagen("imgNotas", "./images/error.gif");
        cambiarTexto("lblMensaje", "DATOS INCORRECTOS");
    }
};