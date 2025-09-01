document.getElementById('log-btn').addEventListener('click',
    function()
    {  
        const mobile = parseInt(document.getElementById('Mobile').value)
        const pin = parseInt(document.getElementById('Pin').value)
        
        if(mobile === 1570266586 && pin === 1234)
        {
            window.location.href="./home.html"
        }
        else {
            alert('Invalid Credentail')
        }
    }
)