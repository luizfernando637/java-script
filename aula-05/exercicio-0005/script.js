function contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passos = document.getElementById('txtp') 
    let ress = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {

        window.alert('[Erro] Faltam dados!')
    }
    else {
        ress.inert = 'Contando'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

       if (i < f) {
        // contagem crescente 
        for(let c = i; c <= f; c += p) {

            ress.innerHTML += `${c} \u{1F449}` 
        }
        
       }
       else {
        // contagem regressiva 

            for(let c = i; c <= f; c += p) {

                ress.innerHTML += `${c} \u{1F449}` 
            }
    }
        ress.innerHTML += `\u{1F3C1}`
    }
}