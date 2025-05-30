let passStep = false;
const var1 = document.getElementById("var1");
const var2 = document.getElementById("var2");
const var3 = document.getElementById("var3");
const var4 = document.getElementById("var4");
const var5 = document.getElementById("var5");
const var6 = document.getElementById("var6");
const var7 = document.getElementById("var7");
const var8 = document.getElementById("var8");
const var9 = document.getElementById("var9");
const var10 = document.getElementById("var10");
const var11 = document.getElementById("var11");
const var12 = document.getElementById("var12");

const varArray = [var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12];

const answerArray = [true, false, true, false, true, true, true, false, false, false, true, true];

varArray.forEach(function(checkbox) {
    checkbox.addEventListener("change", onChange);
});

function onChange() {
    let passStep = true;
    
    varArray.forEach(function(checkbox, index) {
        if (checkbox.checked != answerArray[index]) {
            passStep = false;
        }
    });
}

function checkAnswers() {
    event.preventDefault();
    let passStep = true;
    
    varArray.forEach(function(checkbox, index) {
        const label = checkbox.parentElement.children[1];
        
        if (checkbox.checked) {    
            if (checkbox.checked == answerArray[index]) {
                // correct answer    
                label.classList.add("text-success");
            }   
            else {
                // wrong answer
                label.classList.add("text-danger");
            }
        }
        else {
            label.classList.remove("text-success");
            label.classList.remove("text-danger");
        }
        
        if (checkbox.checked != answerArray[index]) {
            passStep = false;
        }
    });
}
