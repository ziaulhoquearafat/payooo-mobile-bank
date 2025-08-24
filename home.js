const validPin = 1234;

document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const bank = document.getElementById('bank').value;
        const accountNumber = document.getElementById('account-number').value;
        const amount = parseInt(document.getElementById('add-amount').value);
        const pin = parseInt(document.getElementById('add-pin').value);

        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        if(accountNumber.length < 11){
            alert('please provide valid account number');
            return;
        }

        if(pin !== validPin){
            alert('please provide valid pin number');
            return;
        }

        const totalNewAvailableBalance = amount + availableBalance;

        document.getElementById('available-balance').innerText = totalNewAvailableBalance;      

    });



    // cash out money feature

    document.getElementById('withdraw-btn').addEventListener('click', function(event){
        event.preventDefault();

        const amount = parseInt(document.getElementById('withdraw-amount').value);
        const withdrawNumber = document.getElementById('withdraw-number').value;
        const withdrawPin = parseInt(document.getElementById('withdraw-pin').value);

        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(withdrawNumber.length < 11){
        alert('please provide valid agent number');
        return;
    }

    if(withdrawPin !== validPin){
        alert('please provide valid pin number');
        return;
    }

        const totalNewAvailableBalance = availableBalance - amount;

        document.getElementById('available-balance').innerText = totalNewAvailableBalance;

        

    });




// toggling feature

    document.getElementById('add-money-button').addEventListener('click', function(){
        document.getElementById('cash-out-parent').style.display = 'none';
        document.getElementById('add-money-parent').style.display = 'block';
    });

    document.getElementById('cash-out-button').addEventListener('click', function(){
        document.getElementById('add-money-parent').style.display = 'none';
        document.getElementById('cash-out-parent').style.display = 'block';
    });