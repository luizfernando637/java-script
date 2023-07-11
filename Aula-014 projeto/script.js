function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked) {
            gênero = 'homem'

        if(idade >=0 && idade < 10) {
            //criança 
            img.setAttribute('src', 'imagens/bebe masculino 2.png')
        }   
        else if(idade < 21) {
            // jovem 
            img.setAttribute('src', 'imagens/criança masculino 2.png')
        }

        else if(idade < 50) {
            // adulto
            img.setAttribute('src', 'imagens/adulto masculino2.png')
        } 
        
        else {
            // idoso
            img.setAttribute('src', 'imagens/idoso masculino 2.png')
        }
        }

        else if(fsex[1].checked) {
            gênero = 'Mulher'

        if(idade >=0 && idade < 10) {
                //criança 
                img.setAttribute('src', 'imangens/bebe feminino 2.png')
            }   
        else if(idade < 21) {
                // jovem 
                img.setAttribute('src', 'imagens/criança feminino 2.png')
            }
    
        else if(idade < 50) {
                // adulto 
                img.setAttribute('src', 'imagens/adulto feminino 2.png')
            }
        else {
           //idoso 
           img.setAttribute('src', 'imangens/idoso feminino 2.png')
        }         
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`
        res.appendChild(img)
        
    }
}
