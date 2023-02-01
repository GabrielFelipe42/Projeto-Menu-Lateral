function clickmenu() {
    const itens = document.querySelectorAll('.itens')
    const navegation = document.getElementById('inavegation')

    
    itens.forEach(item => {
        if (item.style.display == 'block') {
            item.style.display = 'none'
            navegation.style.width = '40px'
            //navegation.style.height = '40px'
            
        } else {
            item.style.display = 'block'
            navegation.style.width = '300px'
            //navegation.style.height = '500px'   
        }
    })
}



