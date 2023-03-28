const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = '01 dec 2023'

function countdown(){
    const data_lancamento = new Date(lancamento)
    const hoje = new Date()
    
    const segundos_total = (data_lancamento - hoje)/1000

    const total_dias = Math.floor(segundos_total / 60 / 60 / 24)
    const total_horas = Math.floor(segundos_total / 60 / 60) % 24
    const total_minutos = Math.floor(segundos_total / 60) % 60
    const total_segundos = Math.floor(segundos_total) % 60
    
    dia.innerHTML = total_dias + 'D'
    hora.innerHTML = formatoTempo(total_horas) + 'H'
    minuto.innerHTML = formatoTempo(total_minutos) + 'M' 
    segundo.innerHTML = formatoTempo(total_segundos) + 'S'

}

function formatoTempo(tempo){
    return tempo  < 10? `0${tempo}` : tempo
}

countdown()
setInterval(countdown, 1000)

function entrou(){
    cor.style.color = 'yellow'
    
}

function saiu(){
    cor.style.color = 'white'
}