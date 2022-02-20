var display = document.getElementById('display-area');
var buttons = Array.from(document.getElementsByClassName('button'));
var inputEl = document.getElementById('input-el');
var output = document.getElementById('display-factor');

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.textContent){
            case 'C':
                display.textContent = '';
                break;
            case '%':
                display.textContent = (display.textContent)/100;
                break;
            case '=':
                try{
                    display.textContent = eval(display.textContent);
                } catch {
                    display.textContent = "Error"
                }
                break;
            case '←':
                if (display.textContent){
                   display.textContent = display.textContent.slice(0, -1);
                }
                break;
            default:
                display.textContent += e.target.textContent;
        }
    });
});

function factorial(num){
    var numInt = parseInt(num);
    
    if(numInt < 0 || numInt > 170 ){
        return alert("Please enter integer values between 0 and 171");
        inputEl.value ="";
        output.textContent ="";
        inputEl.focus();
    }
    else if(numInt == 0){
        return 1;
    }
    else if(numInt > 0){
        return numInt * factorial(numInt-1);
    }
    
}

function getFactorial(){
    if(!(inputEl.value).match(/^\s*$/) && (inputEl.value).match(/^[0-9]+$/) && inputEl.value <=170){
        output.textContent = inputEl.value +"! = " + factorial(inputEl.value);
    }
    else{
        alert("Please enter integer values between 0 and 171");
        inputEl.value ="";
        output.textContent ="";
        inputEl.focus();
    }
    

}

function clearAll(){
    output.textContent ="";
    inputEl.value ="";
}
    
