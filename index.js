
const btn = document.querySelector('#surpresa')

btn.addEventListener('click', ()=>{
    alert('Parabéns você acaba de ganhar 10 conto!')
})
function mudar(){
    let titulo = document.getElementById('titulo')
    titulo.innerHTML = 'Titulo mudado!'
}

