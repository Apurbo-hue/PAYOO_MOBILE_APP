// document.getElementById('cash-in-div').style.display = 'none'//by default cash in form hidden
// document.getElementById('cash-out-div').style.display = 'none'//by default cash out form hidden
// document.getElementById('transfer-money-div').style.display = 'none'//by default transfer money form hidden



// by default all forms hidden using the loop
const functionBtn = document.getElementsByClassName('all-forms')
for (const loop of functionBtn) {
  loop.style.display = 'none'
}


const transactionData = []

//function to toggle the functions
function togglefunc(id) {
  const functionBtn = document.getElementsByClassName('all-forms')
  for (const loop of functionBtn) {
    loop.style.display = 'none'
  }
  document.getElementById(id).style.display = 'block'
}

//function to get the integer value
function getIntValue(id) {
  return parseInt(document.getElementById(id).value);
}

//function to get other values
function getOtherValue(id) {
  return document.getElementById(id).value
}


//cash in logic
document.getElementById('add-money-btn').addEventListener("click",
  function (e) {
    e.preventDefault()
    const bank = getOtherValue('bank')
    const accountNumber = getIntValue('bank-account-number')
    const amount = getIntValue('amount-to-add')
    const pin = getIntValue('pin-number')
    const validPin = 1234;//pin set

    if (accountNumber.length < 11) {
      alert('Please provide a valid account number')
      return;
    }

    if (pin != validPin) {
      alert('invalid pin number')
      return;
    }

    const currentBalance = parseInt(document.getElementById('current-balance').innerText)

    const newBalance = currentBalance + amount

    document.getElementById('current-balance').innerText = newBalance

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
  }
)

// cash out logic
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
  e.preventDefault()
  const agentNumber = getIntValue('agent-number')
  const amount = getIntValue('out-amount')
  const pin = getIntValue('cash-out-pin')
  const validPin = 1234


  if (agentNumber.toString().length < 11) {
    alert('Please provide a valid account number')
    return;
  }

  if (pin != validPin) {
    alert('invalid pin number')
    return;
  }

  const currentBalance = parseInt(document.getElementById('current-balance').innerText)

  const newBalance = currentBalance - amount

  document.getElementById('current-balance').innerText = newBalance

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString()
  }
  transactionData.push(data)
}
)


// transfer money logic

document.getElementById('transfer-btn').addEventListener('click', function (e) {
  e.preventDefault()
  const transferAccountNumber = getIntValue('acnt-number')
  const transferAmount = getIntValue('transfer-amount')
  const transferPin = getIntValue('transfer-pin')
  const validPin = 1234

  if (transferAccountNumber.length < 11) {
    alert('Please provide a valid account number')
    return;
  }

  if (transferPin != validPin) {
    alert('invalid pin number')
    return;
  }

  const currentBalance = parseInt(document.getElementById('current-balance').innerText)

  const newBalance = currentBalance - transferAmount

  document.getElementById('current-balance').innerText = newBalance

   const data = {
    name: "Money transfered",
    date: new Date().toLocaleTimeString()
  }
  transactionData.push(data)
})

// get bonus logic

document.getElementById('bonus-btn').addEventListener('click',
  function (e) {
    e.preventDefault()
    const bonusAccountNumber = getIntValue('bns-coupon')


    if (bonusAccountNumber.toString().length > 11) {
      alert('you got 60% bonus')
      return;
    }
  }
)

// pay now logic
document.getElementById('pay-now-btn').addEventListener('click',
  function (e) {
    e.preventDefault()
    const pay = getOtherValue('utility')
    const payAccountNumber = getIntValue('biller-account-number')
    const amountToPay = getIntValue('amount-to-pay')
    const pin = getIntValue('pay-pin-number')

    const validPin = 1234


    if (payAccountNumber.toString().length < 11) {
      alert('Please provide a valid account number')
      return;
    }

    if (pin != validPin) {
      alert('invalid pin number')
      return;
    }
    const currentBalance = parseInt(document.getElementById('current-balance').innerText)

    const newBalance = currentBalance - amountToPay

    document.getElementById('current-balance').innerText = newBalance

    const data = {
    name: "Paid",
    date: new Date().toLocaleTimeString()
  }
  transactionData.push(data)
  }
)


//transactions logic
document.getElementById('transaction-function').addEventListener('click',
  function (e) {
    e.preventDefault()

    const transactionContainer = document.getElementById('transaction-list')
    transactionContainer.innerHTML = "";
    for (const data of transactionData) {
      const div = document.createElement('div')
      div.innerHTML =/*html*/`
        <div class="flex justify-between items-center mt-4">
            <div class="flex">
                <div class="rounded-full p-3 mr-2 bg-gray-200">
                    <img src="./resources/wallet1.png" alt="">
                </div>
                <div class="flex flex-col">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
      `;
      transactionContainer.appendChild(div)
    }
  }
)


// toggle functions
document.getElementById('add-money-function').addEventListener('click',
  function () {
    togglefunc('cash-in-div')
  }
)

document.getElementById('cashout-function').addEventListener('click', function () {
  togglefunc('cash-out-div')
}
)

document.getElementById('transfer-money-function').addEventListener('click',
  function () {
    togglefunc('transfer-money-div')
  }
)

document.getElementById('coupon-function').addEventListener('click', function () {
  togglefunc('bonus-coupon-div')
})


document.getElementById('pay-bill-function').addEventListener('click', function () {
  togglefunc('pay-bill-div')
})

document.getElementById('transaction-function').addEventListener('click', function () {
  togglefunc('transaction-div')
})


//cash in form display function
// document.getElementById('add-money-function').addEventListener('click',
//   function () {
//     document.getElementById('cash-out-div').style.display = 'none'
//     document.getElementById('cash-in-div').style.display = 'block'
//     document.getElementById('transfer-money-div').style.display = 'none'
//   }
// )

// //cash out form display function
// document.getElementById('cashout-function').addEventListener('click',
//   function () {
//     document.getElementById('cash-out-div').style.display = 'block'
//     document.getElementById('cash-in-div').style.display = 'none'
//     document.getElementById('transfer-money-div').style.display = 'none'
//   }
// )
// // transfer money form display function
// document.getElementById('transfer-money-function').addEventListener('click',
//   function () {
//     document.getElementById('transfer-money-div').style.display = 'block'
//     document.getElementById('cash-out-div').style.display = 'none'
//     document.getElementById('cash-in-div').style.display = 'none'
//   }
// )
