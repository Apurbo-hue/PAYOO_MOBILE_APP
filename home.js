// document.getElementById('cash-in-div').style.display = 'none'//by default cash in form hidden
// document.getElementById('cash-out-div').style.display = 'none'//by default cash out form hidden
// document.getElementById('transfer-money-div').style.display = 'none'//by default transfer money form hidden



//by default all forms hidden using the loop
const functionBtn = document.getElementsByClassName('all-forms')
for (const loop of functionBtn) {
  loop.style.display = 'none'
}


//function to toggle the functions
function togglefunc(id) {
  const functionBtn = document.getElementsByClassName('all-forms')
  for (const loop of functionBtn) {
    loop.style.display = 'none'
  }
  document.getElementById(id).style.display = 'block'
}


function getIntValue(id)//function to get the integer value
{
  return parseInt(document.getElementById(id).value);
}

function getOtherValue(id)//function to get other values
{
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
  }
)

// cash out logic
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
  e.preventDefault()
  const agentNumber = getIntValue('agent-number')
  const amount = getIntValue('out-amount')
  const pin = getIntValue('cash-out-pin')
  const validPin = 1234



  if (agentNumber.length < 11) {
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


})

// get bonus logic

document.getElementById('bonus-btn').addEventListener('click',
  function(e)
  {
    e.preventDefault()
    const bonusAccountNumber = getIntValue('bns-coupon')


    if(bonusAccountNumber.toString().length > 11)
    {
      alert('you got 60% bonus')
      return;
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
