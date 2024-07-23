const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) =>{
    const veiculo = frm.inVeiculos.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50          //calcula o valor da entrada
    const parcelas = (preco * 0.50) / 12 //... e das parcelas

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada: ${entrada.toFixed(2)}` //fixa as casas decimais a ser mostrada 
    resp3.innerText = `+ 12x de ${parcelas.toFixed(2)}`

    e.preventDefault() //evita o envio do form
})