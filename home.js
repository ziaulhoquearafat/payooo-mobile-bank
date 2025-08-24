const validPin = 1234;

// function to get input values

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  return inputValue;
}

// function to get innerText

function getInnerText(id){
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;

}

// function to set innerText

function setInnerText(value){
  const availableBalanceElement = document.getElementById('available-balance');
  availableBalanceElement.innerText = value;
}

// function to toggle

function handleToggle(id){
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
      form.style.display = 'none';
    }
    document.getElementById(id).style.display = "block";
}

// function to toggle buttons

function handleButtonToggle(id){
      const formBtns = document.getElementsByClassName('form-btn');
    
    for(const btn of formBtns){
      btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
      btn.classList.add('border-[#0808081a]');
    }

    document.getElementById(id).classList.remove('border-[#0808081a]');
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}



document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");

    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText('available-balance');

    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }

    if (pin !== validPin) {
      alert("please provide valid pin number");
      return;
    }
   
    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);

  });

// cash out money feature

document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const withdrawNumber = getInputValue("withdraw-number");

    const amount = getInputValueNumber("withdraw-amount");
    const withdrawPin = getInputValueNumber("withdraw-pin");

    const availableBalance = getInnerText('available-balance');

    if (withdrawNumber.length < 11) {
      alert("please provide valid agent number");
      return;
    }

    if (withdrawPin !== validPin) {
      alert("please provide valid pin number");
      return;
    }

    const totalNewAvailableBalance = availableBalance - amount;

      setInnerText(totalNewAvailableBalance);

  });

// toggling feature

document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
  handleToggle('add-money-parent');
  handleButtonToggle('add-money-button');

    

  });

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
  handleToggle('cash-out-parent');
  handleButtonToggle('cash-out-button');
    
  });
document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    handleToggle('transfer-money-parent');
    handleButtonToggle('transfer-money-button');


  });

document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
  handleToggle('get-bonus-parent');
  handleButtonToggle('get-bonus-button');


  });
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    handleToggle('pay-bill-parent');
    handleButtonToggle('pay-bill-button');


  });

document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    handleToggle('transaction-parent');
    handleButtonToggle('transaction-button');

  });
