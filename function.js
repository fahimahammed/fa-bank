//login section control 
const loginBtn=document.getElementById('login');
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";
})

// Deposit Event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){

    updateSpanText("currentDeposit", getInputNumner("depositAmount"));
    updateSpanText("currentBalance", getInputNumner("depositAmount"));

    document.getElementById("depositAmount").value="";
})

// Withdraw Event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){

    updateSpanText("currentWithdraw", getInputNumner("withdrawAmount"));
    updateSpanText("currentBalance", -1 * getInputNumner("withdrawAmount"));

    document.getElementById("withdrawAmount").value="";
})

// function for get input withdraw and deposit 
function getInputNumner(id){
    const current = document.getElementById(id).value;
    const currentNumber = parseFloat(current);
    return currentNumber;
}

// function for update Span text for withdraw, deposit and total balance 
function updateSpanText(id, amountNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = amountNumber + currentNumber;
    document.getElementById(id).innerText=total;
}