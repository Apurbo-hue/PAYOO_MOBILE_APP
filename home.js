document.getElementById('add-money-btn').addEventListener("click",
    function(e)
    {
      e.preventDefault()
      const bank = document.getElementById('bank').value
      const accountNumber = document.getElementById('bank-account-number').value
      const amount = parseInt(document.getElementById('amount-to-add').value)
      const pin = document.getElementById('pin-number').value
      

      const currentBalance = parseInt(document.getElementById('current-balance').innerText)
      const newBalance = currentBalance + amount

      document.getElementById('current-balance').innerText = newBalance
    }
)