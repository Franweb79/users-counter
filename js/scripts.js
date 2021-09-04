//esto se puede en archivo distinto, la definciion de clase
class Usuario{
    constructor(p_nombre,p_vecesLista)
    {
        this.nombre=p_nombre;
        this.vecesLista=p_vecesLista;
    }

    //method

    sumarVez(){
        this.vecesLista++;
    }
}

let arrayUsuarios=[];

let nombreUsuario=prompt("enter new user name");

let proceed=confirm("do you want to add another user? Please accept to do it or cancel if you have finished.");

//add object to array, 1 is because it appears at least 1 time
usuario=new Usuario(nombreUsuario,1);
arrayUsuarios.push(usuario);

while(proceed==true){


    

    let nombreUsuario=prompt("enter new user name");

    usuario=new Usuario(nombreUsuario,1);
    arrayUsuarios.push(usuario);


    proceed=confirm("do you want to add another user? Please accept to do it or cancel if you have finished.");
}

console.log(proceed)

function showUsers(){

    let divUsers=document.getElementById("users");

    let list=document.createElement("LI");

    divUsers.appendChild(list);


    //show users array on console
    for(let i=0;i<arrayUsuarios.length;++i){

        let ulElement=document.createElement("UL");

        list.appendChild(ulElement);

        let textElement=document.createTextNode(`nombre del usuario ${arrayUsuarios[i].nombre}, veces que aparece el usuario ${arrayUsuarios[i].vecesLista}`);

        console.log(textElement);
        ulElement.appendChild(textElement);
        console.log(arrayUsuarios[i]);
    }


}

//compare names

let pos=0;


for(let i=0;i<arrayUsuarios.length;++i){

    for(let j=1;j<arrayUsuarios.length;++j){

        if(i<j){

            if(arrayUsuarios[i].nombre===arrayUsuarios[j].nombre){
                console.log ("user i"+arrayUsuarios[i].nombre);
                console.log ("user j"+arrayUsuarios[j].nombre);
                console.log("coincide");

                arrayUsuarios[i].sumarVez();
                arrayUsuarios[j].sumarVez();
            }

        }
        
    }
    
    
}






showUsers();