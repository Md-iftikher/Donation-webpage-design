

// common shared function 
function getInputFieldById(id){
    inputValue=document.getElementById(id).value;
    return inputValue;
}
function getTextFieldById(id){
    inputValue=document.getElementById(id).innerText;
    return inputValue;
}
function showSectionByid(id){
    document.getElementById("Add-money-form").classList.add("hidden");
    
    document.getElementById(id).classList.remove("hidden");
}
