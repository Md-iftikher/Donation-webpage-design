

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

    document.getElementById("History-section").classList.add("hidden");
    document.getElementById("Donation-section").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
    // document.getElementById(id).classList.add("bg-[green]");
    // document.getElementById("show-history-btn").classList.add("bg-[red]");
    

}
