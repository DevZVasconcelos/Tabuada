function clicar(){
    const number = document.getElementById('num')
    const sel = document.getElementById('select')

    if (!number.value == 0){
        const n = Number(number.value)
        let c = 1
        sel.innerHTML = ''
        while (c <= 10){
            const item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            sel.appendChild(item)
            c ++
        }
    } else{
        window.alert('Por favor, digite um número')
    }
}