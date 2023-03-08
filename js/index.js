let turno=true;
let contador=0;
let ganador=false;
const boton1= document.getElementById(1);
const boton2= document.getElementById(2);
const boton3= document.getElementById(3);
const boton4= document.getElementById(4);
const boton5= document.getElementById(5);
const boton6= document.getElementById(6);
const boton7= document.getElementById(7);
const boton8= document.getElementById(8);
const boton9= document.getElementById(9);

const click_user = (id) => {
    const botonPulsado=document.getElementById(id);
    if(botonPulsado.innerText !== "X" && botonPulsado.innerText!=="O"){
        turno ? (botonPulsado.innerText="X"): (botonPulsado.innerText="O");
        verificar_ganador();
        contador++;
        if (!ganador) {
            verificar_empate();
        }
        turno = !turno;
        
    }
};


const verificar_ganador = () =>{
    const fila1 = 
    boton1.innerText === boton2.innerText && 
    boton2.innerText===boton3.innerText && 
    boton1.innerText!== "";     

    const fila2 = boton4.innerText === boton5.innerText && 
    boton5.innerText===boton6.innerText  && 
    boton4.innerText!== ""; 

    const fila3 = boton7.innerText === boton8.innerText && 
    boton8.innerText===boton9.innerText  && 
    boton7.innerText!== ""; 

    const columna1 = boton1.innerText === boton4.innerText && 
    boton4.innerText===boton7.innerText  && 
    boton1.innerText!== ""; 

    const columna2 = boton2.innerText === boton5.innerText && 
    boton5.innerText===boton8.innerText  && 
    boton2.innerText!== ""; 

    const columna3 = boton3.innerText === boton6.innerText && 
    boton6.innerText===boton9.innerText  && 
    boton3.innerText!== ""; 

    const diagonal1 = boton1.innerText === boton5.innerText && 
    boton5.innerText===boton9.innerText  && 
    boton1.innerText!== ""; 
    
    const diagonal2 = boton3.innerText === boton5.innerText && 
    boton5.innerText===boton7.innerText  && 
    boton3.innerText!== ""; 
    
    if (fila1 || 
        fila2 || 
        fila3 || 
        columna1 || 
        columna2 || 
        columna3 || 
        diagonal1 || 
        diagonal2
        ) {
            ganador=true;
        alert(`el ganador es ${turno ? "X" : "O"}`);
    }
};

const verificar_empate=()=>{
    //  console.log(contador);
    if (contador==9) {
        alert("Empate")
    }
};