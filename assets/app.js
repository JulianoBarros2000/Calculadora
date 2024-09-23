// Código para uma pequena calculadora
// Feito por dev. Juliano Barros

// Pegar os elementos do index.html

const result = document.querySelector("#result")

const select = document.querySelector("#opper")

const cal = document.querySelector("#cal")


// Criar funções para calcular os valores
//Função da soma
function somar(valor1, valor2) {

    return valor1 + valor2
}
//Função da subtração
function subtrair(valor1, valor2) {
    return valor1 - valor2
}

//Função da multiplicação
function multiplicar(valor1, valor2) {
    return valor1 * valor2
}

//Função da divisão
function dividir(valor1, valor2) {
    return valor1 / valor2
}

function selectOption() {
    values = select.options[select.selectedIndex].value
}

// Evento para calcular os valores
cal.addEventListener("click", (e) => {

    /* Pegando os valores dos campos e convertendo em flutuante */
    let valor1 = document.querySelector("#valor1").value
    let valor2 = document.querySelector("#valor2").value

    if (valor1.length == 0 || valor2.length == 0) {
        result.classList.remove('text-muted')
        result.classList.add('text-danger')
        result.innerHTML = 'Prencher todos campos!'
       
    } else {

        /* Pegando os valores dos campos e convertendo em flutuante */
        valor1 = parseFloat(document.querySelector("#valor1").value)
        valor2 = parseFloat(document.querySelector("#valor2").value)

        result.classList.remove('text-danger')
        result.classList.add('text-muted')
       
        // Condional para saber qual operação realizar
        switch (values) {
            case 'soma':
                result.innerHTML = somar(valor1, valor2)
                break;
            case 'mult':
                result.innerHTML = multiplicar(valor1, valor2)
                break;

            case 'subt':
                result.innerHTML = subtrair(valor1, valor2)
                break;

            case 'div':
                result.innerHTML = dividir(valor1, valor2)
                break;

            default:
                result.innerHTML = 'Selecione uma operação!'
                break;
        }


    }
    e.preventDefault()
}
)


