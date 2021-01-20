


$(document).ready(function () {

    $(function(){
        $("#nombre").validate(abcdefghijklmnñopqrstuvwxyz);
    });

    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
      }, "Ingrese solo letras");

    $("#formulario").validate({
  
        rules: {
            "nombre": {
                required: true,
                maxlength: 10,
                minlength: 3,
                lettersonly: true,
            },
            "edad": {
                required: true,
                number: true,
                maxlength: 2,
            },
        },
        messages: {
            "nombre": {
                required: "Introduzca sus nombres",
                maxlength: "Maximo 10 caracteres",
                minlength: "Minimo 3 caracteres",
            },
            "edad": {
                required: "Por favor, introduzca su edad",
                number:"Ingrese solo numeros",
                maxlength: "Maximo de 2 cifras",
            },
        },
        submitHandler: function(form) {
            alert(`Bienvenido ${$("#nombre").val()}, ¿tienes${$("#edad").val()}, años de edad?`);
            form.submit();
        }
    });
});

  

  
  
  
  
      
     
  
  