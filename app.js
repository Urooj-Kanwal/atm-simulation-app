let balance = 50000;
let transaction = "";

function showPin(){
  document.getElementById("pinInputBox").style.display = "block";
  document.getElementById("pinInput").focus();
}

function pinEnter(event){
  if(event.key == "Enter"){
    enterPin();
  }
}

function amountEnter(event){
  if(event.key == "Enter"){
    confirmAmount();
  }
}

function enterPin(){
  let pin = document.getElementById("pinInput").value;
  let pinResult = document.getElementById("pinResult");

  if(pin == "1234"){
    document.getElementById("pinBox").style.display = "none";
    document.getElementById("mainBox").style.display = "block";
    document.getElementById("welcomeMsg").innerText = "Welcome! Ready for Service";
  } else {
    pinResult.style.color = "red";
    pinResult.innerText = "Incorrect Pin! Try Again";
    document.getElementById("pinInput").value = "";
  }
}

function checkBalance(){
  document.getElementById("amountBox").style.display = "none";
  document.getElementById("result").innerText = "Balance: " + balance + " Rs";
  document.getElementById("result").style.color = "#1e293b";
}

function showAmount(type){
  transaction = type;
  document.getElementById("amountBox").style.display = "block";
  document.getElementById("amountInput").value = "";
  document.getElementById("amountInput").focus();

  document.getElementById("result").innerText = "Select Your Option";
  document.getElementById("result").style.color = "#1e293b";

  if(type == "deposit"){
    document.getElementById("amountLabel").innerText = "How much amount do you want to deposit?";
  } else {
    document.getElementById("amountLabel").innerText = "How much amount do you want to withdraw?";
  }
}

function confirmAmount(){
  let amount = Number(document.getElementById("amountInput").value);
  let result = document.getElementById("result");

  if(amount <= 0){
    result.style.color = "red";
    result.innerText = "Incorrect Amount!";
    return;
  }

  if(transaction == "deposit"){
    balance = balance + amount;
    result.style.color = "#1e293b";
    result.innerText = "Done! New Balance: " + balance + " Rs";
  }

  if(transaction == "withdraw"){
    if(amount > balance){
      result.style.color = "red";
      result.innerText = "Insufficient Balance!";
    } else {
      balance = balance - amount;
      result.style.color = "#1e293b";
      result.innerText = "Done! New Balance: " + balance + " Rs";
    }
  }

  document.getElementById("amountBox").style.display = "none";
  document.getElementById("amountInput").value = "";
}

function exitATM(){
  document.getElementById("mainBox").style.display = "none";
  document.getElementById("pinBox").style.display = "block";
  document.getElementById("pinInputBox").style.display = "none";
  document.getElementById("amountBox").style.display = "none";

  document.getElementById("pinInput").value = "";
  document.getElementById("pinResult").innerText = "";
  document.getElementById("amountInput").value = "";

  document.getElementById("result").innerText = "Select Your Option";
  document.getElementById("result").style.color = "#1e293b";

  document.getElementById("welcomeMsg").innerText = "Thank You! Visit Again";

  transaction = "";
}