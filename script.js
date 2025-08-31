document.getElementById('log-btn').addEventListener('click',
    function()
    {  
        const mobile = document.getElementById('Mobile').value
        const pin = document.getElementById('Pin').value
        const intMobile = parseInt(mobile)
        const intPin = parseInt(pin)
        if(intMobile === 1570266586 && intPin === 1234)
        {
            window.location.href="./home.html"
        }
        else {
            console.log('wrong keyword')
        }
    }
)