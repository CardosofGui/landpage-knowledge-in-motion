let exibido = false;
let exibidoSubMenu1 = false;
let exibidoSubMenu2 = false;

function exibirMenu(){

    if(exibido == false){
        document.getElementById("submenu1").style.display = "block";
        exibido = true;
    }else{
        document.getElementById("submenu1").style.display = "none";
        exibido = false;
    }
    
}

function exibirSubMenu1(){
    if(exibido == true){
        if(exibidoSubMenu2 == true){
            document.getElementById("submenu3").style.display = "none";
            exibidoSubMenu2 = false;
        }

        if(exibidoSubMenu1 == false){
            document.getElementById("submenu2").style.display = "block";
            exibidoSubMenu1 = true;
        }else{
            document.getElementById("submenu2").style.display = "none";
            exibidoSubMenu1 = false;
        }
    }    
}

function exibirSubMenu2(){
    if(exibido == true){
        if(exibidoSubMenu1 == true){
            document.getElementById("submenu2").style.display = "none";
            exibidoSubMenu1 = false;
        }

        if(exibidoSubMenu1 == false){
            document.getElementById("submenu3").style.display = "block";
            exibidoSubMenu2 = true;
        }else{
            document.getElementById("submenu3").style.display = "none";
            exibidoSubMenu2 = false;
        }
    } 
}