//esto se puede en archivo distinto, la definciion de clase

//this version will be improved, creating just objects when new user is


class Usuario{
    constructor(p_nombre,p_vecesLista)
    {
        this.nombre=p_nombre;
        this.vecesLista=p_vecesLista;
    }

    //method

    sumarVez(){
        this.vecesLista++;
        console.log("user importado");

    }

}

let usersArray=[];

let nombreUsuario=prompt("enter new user name");

let proceed=confirm("do you want to add another user? Please accept to do it or cancel if you have finished.");



//add object to array, 1 is because it appears at least 1 time
usuario=new Usuario(nombreUsuario,1);
usersArray.push(usuario);

while(proceed==true){


    

    let nombreUsuario=prompt("enter new user name");

    compareUser(nombreUsuario,usersArray);
    //compareUser2(nombreUsuario);

    /*
    
        we compare with the names on the objects of the array, 
        
        if it exists, we add 1 to the vecesLista property of the object; 
        if doesnt exist, we create a new object with that name and set times 
        it appears on the list to 1 (and push it to the array objects of course)
    */



    /*usuario=new Usuario(nombreUsuario,1);
    usersArray.push(usuario);*/


    proceed=confirm("do you want to add another user? Please accept to do it or cancel if you have finished.");
}


/*
    to compare new entered name with already existing names
    objects and arrays are passed by reference on JS, so good I can
    pass second parameter because it is an array. The first one 
    we only need its value so is Ok, is an string

*/
function compareUser(p_nameToBeCompared,p_usersArrayToCompare){

    let isUserOnArray=false;//default, it doesnt exists
    for(let i=0;i<p_usersArrayToCompare.length;++i){

        if(p_nameToBeCompared===p_usersArrayToCompare[i].nombre){

            p_usersArrayToCompare[i].sumarVez();
            isUserOnArray=true;

        }
    }

    /*
        if user is not on array, we create the objet and push to the array
    */
    if(isUserOnArray==false){

        usuario=new Usuario(p_nameToBeCompared,1);
        p_usersArrayToCompare.push(usuario);
    }

}




function showUsers(){

    let divUsers=document.getElementById("users");

    let list=document.createElement("LI");

    divUsers.appendChild(list);


    //show users array on console
    for(let i=0;i<usersArray.length;++i){

        let ulElement=document.createElement("UL");

        list.appendChild(ulElement);

        let textElement=document.createTextNode(`nombre del usuario ${usersArray[i].nombre}, veces que aparece el usuario ${usersArray[i].vecesLista}`);

        console.log(textElement);
        ulElement.appendChild(textElement);
        console.log(usersArray[i]);
    }


}



showUsers();