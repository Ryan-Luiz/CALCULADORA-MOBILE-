// This is a JavaScript file
$(document).on("click","#Somar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) + parseFloat(valor2);
  $("#resultado").val(result);

});

$(document).on("click","#Somar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) - parseFloat(valor2);
  $("#subtracao").val(result);

});

$(document).on("click","#Somar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) * parseFloat(valor2);
  $("#multiplicacao").val(result);

});

$(document).on("click","#Somar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) / parseFloat(valor2);
  $("#divisao").val(result);

});

