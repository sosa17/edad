function recuperarEdad ()
 {var mensaje = ""; 
    console.log ("edad"); 
    var edad = document.getElementById ("edad"). value; 
    if (edad <18) {mensaje = "Menor de edad"; }
     else {mensaje = "Mayor de edad"; } 
     var contenedor = document.createElement ("p"); 
     contenedor.innerText = mensaje;
      document.body.appendChild (contenedor); }