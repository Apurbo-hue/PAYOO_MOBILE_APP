//add money logic
document.getElementById('add-money-btn').addEventListener("click",
    function(e)
    {
      e.preventDefault()
      const bank = document.getElementById('bank').value
      const accountNumber = document.getElementById('bank-account-number').value
      const amount = parseInt(document.getElementById('amount-to-add').value)
      const pin = parseInt(document.getElementById('pin-number').value)
      const validPin = 1234;

      if(accountNumber.length<11)
      {
        alert('Please provide a valid account number')
        return;
      }

      if(pin != validPin)
      {
        alert('invalid pin number')
        return;
      }

      const currentBalance = parseInt(document.getElementById('current-balance').innerText)
      const newBalance = currentBalance + amount

      document.getElementById('current-balance').innerText = newBalance
    }
)

// cash out logic
document.getElementById('withdraw-btn').addEventListener('click',function(e)
{
  e.preventDefault()
    const agentNumber = document.getElementById('agent-number').value
    const amount = parseInt(document.getElementById('out-amount').value)
    const pin = parseInt(document.getElementById('cash-out-pin').value)

    const validPin = 1234;
    

      if(agentNumber.length<11)
      {
        alert('Please provide a valid account number')
        return;
      }

      if(pin != validPin)
      {
        alert('invalid pin number')
        return;
      }

    const currentBalance = parseInt(document.getElementById('current-balance').innerText)
      const newBalance = currentBalance - amount

      document.getElementById('current-balance').innerText = newBalance
}
)

//cash in function 
document.getElementById('add-money-function').addEventListener('click',
  function()
  {
    document.getElementById('cash-out-div').style.display='none'
    document.getElementById('cash-in-div').style.display='block'
  }
)

//cash out function
document.getElementById('cashout-function').addEventListener('click',
  function()
  {
    document.getElementById('cash-out-div').style.display='block'
    document.getElementById('cash-in-div').style.display='none'
  }
)