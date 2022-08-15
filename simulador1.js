
//creo una funcion para convertir la moneda
function convertir(){
    //llamo a los id del html y declaro variables para las monedas
    let valor = parseFloat(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 246;
    let euro = 138;
    let real = 26;
    //utilizo else e if para la conversion de las monedas
    if( document.getElementById("uno").checked){
        resultado = valor / dolar;
        //utilizo toFixed para que el valor se muestre en 2 decimales
        alert("El cambio de Peso Argentino a Dolar Estadounidense es de: $" + resultado.toFixed(2));
    }
    else if( document.getElementById("dos").checked){
        resultado = valor / euro;
        alert("El cambio de Peso Argentino a Euro es de: €" + resultado.toFixed(2));
    }
    else if( document.getElementById("tres").checked){
        resultado = valor / real;
        alert("El cambio de Peso Argentino a Real es de: R$" + resultado.toFixed(2));
    }
}

//llamo a la funcion 'convertir' en el archivo .html


