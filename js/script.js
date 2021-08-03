function calculate() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.alert = 'Impossible to count' 
               
    } else {
        res.innerHTML = 'Counting:<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Invalid Step! Considering step = 1')
            p = 1
        }

        if (i <f) {
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        for(var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
     }
     res.innerHTML += `\u{1F3C1}`
}
}