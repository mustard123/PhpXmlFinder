let tableBody:any;
let alertBox: any;
let inputField: any;

$(function(){
    tableBody = $("#tableBody");
    alertBox = $("#alertBox");
    let submittButton = $("#submitButton");
    inputField = $("#examInput");


    inputField.keyup(function(e:any){
        if(e.which === 13){
            submitRequest();
        } 
    })

    submittButton.click(function(){
        submitRequest();
    })

})

function submitRequest(){
    let inputValue = inputField.val();
    console.log(inputValue);
    tableBody.empty();
    $.get('/php/response.php?q='+inputValue, function(response: Array<JSON>){
        populateRows(response)
    });

}

function populateRows(tableData :Array<JSON>){
    if(tableData.length === 0){
        alertBox.removeClass('hidden')
        alertBox.addClass('visible')
    }
    else{
        alertBox.removeClass('visible')
        alertBox.addClass('hidden')    
        for(let i=0; i < tableData.length; i++){
            tableBody.append(createRowElement(tableData[i]))
        }
}
}

function createRowElement(rowData : any){
    let tr = document.createElement("tr");
    for(let prop in rowData){
        let td = document.createElement("td");
        td.innerHTML = rowData[prop];
        tr.appendChild(td);
    }
    return tr;


}

