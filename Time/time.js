function CrinadoRelogio(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    function criaHoraDosSegundos(seg){
        const data = new Date(seg * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false, 
            timeZone: 'UTC' 
        });
    }

    let seg = 0;
    let timer;

    function iniciaRelogio(){
        timer = setInterval(function(){
            seg++;
            relogio.innerHTML = criaHoraDosSegundos(seg);
        }, 1000);
    }

    document.addEventListener('click', function(e){
        const elemento = e.target;

        if(elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if(elemento.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seg = 0;
        }
        if(elemento.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });
}
CrinadoRelogio();