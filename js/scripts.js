

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


let usersArray=[];

let promptedUserName="";

let sanitizedUserName="";


let proceed=false;










/*

    we will trim the string and all to lowercase, 
    to check if it is valid later on another function(no blank spaces and so)

*/

function sanytizeString(p_userName){

    sanitizedUserName=p_userName.trim();

    sanitizedUserName=sanitizedUserName.toLowerCase();

   

   


}

/*
    function to check if sanitizxed user name is length 0 (whitespaces), null...

*/
function  checkIfSanitizedUserNameIsNotValid(){


    //let sanitizedUserName=sanytizeString(p_userName);

    //from now on we work with this string sanitized

    console.log (sanitizedUserName);
    console.log (sanitizedUserName.length);

    
    /*
        if it is not valid, we keep pon asking for valid name until 

    */
   while(sanitizedUserName === null || sanitizedUserName.length== 0){

       promptedUserName=prompt("invalid user name, please don´t use blank data; enter new user name");

       sanytizeString(promptedUserName);
      
    }
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

    let list="";

    let ulElement="";

    let textNode="";


    

    if(usersArray.length==0){

        ulElement=document.createElement("UL");
        divUsers.appendChild(ulElement);

        list=document.createElement("LI");
        ulElement.appendChild(list);

        textNode=document.createTextNode("no hay usuarios");
        list.appendChild(textNode);





    }


    //show users array on console
    for(let i=0;i<usersArray.length;++i){

        ulElement=document.createElement("UL");
        divUsers.appendChild(ulElement);

        list=document.createElement("LI");
        ulElement.appendChild(list);

        textNode=document.createTextNode(`nombre del usuario ${usersArray[i].nombre}, veces que aparece el usuario ${usersArray[i].vecesLista}`);

        list.appendChild(textNode);

        

        //list.appendChild(ulElement);


        console.log(textNode);
        //ulElement.appendChild(textElement);
        console.log(usersArray[i]);
    }


}


promptedUserName=prompt("enter new user name");

/* sainitized name will be stored on 
 'sanitizedUserName' variable

we keep the variable promptedUserName and use another one for sanitized name.
because that way be can show the original he types to the user

*/

if(promptedUserName !=null){

    sanytizeString(promptedUserName);

    checkIfSanitizedUserNameIsNotValid();

    //add object to array, 1 is because it appears at least 1 time
    usuario=new Usuario(sanitizedUserName,1);
    usersArray.push(usuario);

    proceed=confirm("do you want to add another user? Please accept to do it or cancel if you have finished.");

}









while(proceed==true && promptedUserName !=null){


    

    promptedUserName=prompt("enter new user name");

    if(promptedUserName !=null){

        sanytizeString(promptedUserName);

        checkIfSanitizedUserNameIsNotValid();

        compareUser(sanitizedUserName,usersArray);
        //compareUser2(userName);

        /*
        
            we compare with the names on the objects of the array, 
            
            if it exists, we add 1 to the vecesLista property of the object; 
            if doesnt exist, we create a new object with that name and set times 
            it appears on the list to 1 (and push it to the array objects of course)
        */



        /*usuario=new Usuario(userName,1);
        usersArray.push(usuario);*/


        proceed=confirm("do you want to add another user? Please accept to do it or cancel if you have finished.");

    }

    
}//while




showUsers();