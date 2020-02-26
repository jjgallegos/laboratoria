const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

const modifyText=()=> {
    const nombre= document.getElementById('nombre').value;
    const numero= document.getElementById('numero').value;
    encriptar(nombre,numero);

  }
  const modifyText1=()=> {
    const nombre= document.getElementById('nombre').value;
    const numero= document.getElementById('numero').value;
    desencriptar(nombre,numero);

  }

btn.addEventListener('click',modifyText);
btn2.addEventListener('click',modifyText1);
  
const encriptar=(nombre,numero)=> {
    let caracteres = [];
    
    for (let i = 0; i < nombre.length; i++){
        caracteres[i] = nombre.charAt(i).charCodeAt(0);
        caracteres[i]=Number(caracteres[i])+Number(numero);
    }
    alert(caracteres[0]);
    for (let i = 0; i < caracteres.length; i++){
        caracteres[i] = String.fromCharCode(caracteres[i]);
    }
    document.getElementById('poner').innerHTML=caracteres.toString();

}
const desencriptar=(nombre,numero)=> {
    let caracteres = [];
    valor = nombre.value;
    for (let i = 0; i < nombre.length; i++){
        caracteres[i] = nombre.charAt(i).charCodeAt(0);
        caracteres[i]=Number(caracteres[i])-Number(numero);;
    }
    alert(caracteres[1]+"tomas");
    for (let i = 0; i < caracteres.length; i++){
        caracteres[i] = String.fromCharCode(caracteres[i]);
    }
    document.getElementById('poner').innerHTML=caracteres.toString();

}