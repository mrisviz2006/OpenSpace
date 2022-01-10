
window.addEventListener("load", function (event){
    let controlPanelInner = document.getElementsByClassName('control-panel__inner')[0];
    let allInputs = Array.from(controlPanelInner.getElementsByTagName('input'));

    for (const input of allInputs) {
        if(input.type.toLowerCase() !== "password" && input.className.toLowerCase() !== "auth"){
            input.setAttribute("disabled", "");
        }
    }
})

document.querySelector(".auth").addEventListener("click", function () {
    let password = document.querySelector('.password');
    if(password.value === "TrustNo1") {
        let inputs = document.querySelectorAll("input");
        console.log(inputs);
        for (let i = 0; i < inputs.length; i++) {
            let classElement = inputs[i].getAttribute("class");
            if(classElement === "launch") {
                inputs[i].disabled = true;
            } else if (classElement !== "password" && classElement !== "auth") {
                inputs[i].disabled = !inputs[i].disabled;
            } else {
                inputs[i].disabled = !inputs[i].disabled;
            }

        }
    } else {
        alert("Wrong password");
    }
})

document.querySelector(".control-panel__inner").onchange = function () {
    let allInputs = Array.from(this.getElementsByTagName('input'));
    let checkBoxes = allInputs.filter(el => el.type.toLowerCase() === "checkbox");
    let levers = allInputs.filter(el => el.type.toLowerCase() === "range");
    let launch = document.querySelector(".launch");
    launch.disabled = !(checkSelectAllCheckboxes(checkBoxes) && checkMaxAllRange(levers));
}

function checkSelectAllCheckboxes(checkBoxes) {
    for (let checkBox of checkBoxes) {
        if (checkBox.checked === false) {
            return false;
        }
    }
    return true;
}

function checkMaxAllRange(levers) {
    for (let lever of levers) {
        if (lever.value !== '100') {
            return false;
        }
    }
    return true;
}

document.querySelector(".launch").addEventListener("click", function (){
    document.querySelector(".rocket").animate([
        // keyframes
        { transform: 'translate3D(500px, -500px, 0) rotate(35deg)' }
    ], {
        // timing options
        duration: 1000,
        iterations: 1
    }
    );
})