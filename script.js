const creatButton = document.createElement("button");
creatButton.id = "getNumber";
creatButton.innerHTML = "Get my Numbers";
const getNumbers = document.getElementById("getNumber");
const divForNumbers = document.createElement("div");
const pForNumbers = document.createElement("p")
const container = document.createElement("div");
container.id = "container";
divForNumbers.id = "divForNumbers";
pForNumbers.id = "pForNumbers";



function createTwoOptions(){
    const divForForm = document.createElement("div");
    divForForm.id = "divForForm";
    const myForm = document.createElement("form");
    myForm.id = "myForm";
    const mySelect = document.createElement("select");
    mySelect.id = "mySelect";
    const firstOption = document.createElement("option");
    mySelect.multiple = true;
    firstOption.id = "five";
    firstOption.value = 5;
    firstOption.innerHTML = "Five Numbers"
    const secondOption = document.createElement("option");
    secondOption.id = "ten";
    secondOption.value = 10;
    secondOption.innerHTML = "Ten Numbers";
    divForForm.append(myForm);
    myForm.append(mySelect);
    mySelect.append(firstOption,secondOption);
    container.append(divForForm);
    firstOption.addEventListener("click", function(){

        showTable();
    })
    
    secondOption.addEventListener("click", function(){
        showTable();
    })
    
}





function showTable(){
        divForNumbers.innerHTML ="";
    for(i=1; i<=70 ; i++){
        const lableFornumbers = document.createElement("label");
        const inputForNumbers = document.createElement("input");
        inputForNumbers.type = "checkbox";
        inputForNumbers.id = "inputForNumbers";
        const spanForNumbers = document.createElement("span");
        spanForNumbers.id = "spanForNumbers";
        inputForNumbers.value = i;
        inputForNumbers.innerHTML = i;
        spanForNumbers.innerHTML = i;
        lableFornumbers.append(inputForNumbers);
        lableFornumbers.append(spanForNumbers);
        divForNumbers.append(lableFornumbers);
        

        }
   
        container.append(divForNumbers,creatButton);
        creatButton.addEventListener("click", function(){
            const inputValue = document.getElementById("divForNumbers").querySelectorAll("#inputForNumbers");
            const spanValue = document.getElementById("divForNumbers").querySelectorAll("#spanForNumbers");
            for(j = 0; j<70; j++){
                    inputValue[j].checked = false;
                    spanValue[j].checked = false;
              }
            
            showNumbers();
        })
        
}

function showNumbers(){
    const inputValue = document.getElementById("divForNumbers").querySelectorAll("#inputForNumbers");
    const spanValue = document.getElementById("divForNumbers").querySelectorAll("#spanForNumbers");
    pForNumbers.innerHTML= "";
    const myArray = [];
    var x = document.getElementById("mySelect").value;
    if(x== 5){
        while(myArray.length < 5){
            var r = Math.floor(Math.random() * 70) + 1;
            if(myArray.indexOf(r) === -1){
                myArray.push(r);
            }
        }
        for(j = 0; j<70; j++){
            for(const m of myArray){
                if( m == inputValue[j].value ){
                    inputValue[j].checked = true;
                    spanValue[j].checked = true;
                   console.log(m);
                }
            }
        } 
              
          }
    else if(x==10){
        while(myArray.length < 10){
            var r = Math.floor(Math.random() * 70) + 1;
            if(myArray.indexOf(r) === -1){
                myArray.push(r);
            }
        }
        for(j = 0; j<70; j++){
            for(const m of myArray){
                if( m == inputValue[j].value ){
                    inputValue[j].checked = true;
                    spanValue[j].checked = true;
                   console.log(m);
                }
            }
        } 
              
          }
    myArray.sort(function(a, b){return a - b});
    pForNumbers.innerHTML = "You Got: "+ myArray;
    container.append(pForNumbers,divForNumbers,creatButton);
    document.body.appendChild(container);
};

/*
function createNumbersToShow(){
for(i=1; i<=70 ; i++){
const lableFornumbers = document.createElement("label");
const inputForNumbers = document.createElement("input");
inputForNumbers.type = "checkbox";
inputForNumbers.id = "inputForNumbers";
const spanForNumbers = document.createElement("span");
inputForNumbers.value = i;
inputForNumbers.innerHTML = i;
spanForNumbers.innerHTML = i;
lableFornumbers.append(inputForNumbers);
lableFornumbers.append(spanForNumbers);
divForNumbers.append(lableFornumbers);
document.body.appendChild(divForNumbers);
}
}
*/
document.body.appendChild(container);
   
createTwoOptions();