function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // bom dia 
        img.src = `imagens/imagem dia.png`
        document.body.style.background = '#FAF164'
    }

    else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'imagem da tarde.png'
        document.body.style.background = '#98DE59'
    }

    else {
        //boa noite 
        img.src = 'imagem noite.png'
        document.body.style.background = '#000000'
    }
}
