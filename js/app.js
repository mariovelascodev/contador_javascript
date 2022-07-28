window.addEventListener('load', () =>{

    var count = 0;

    //Obtengo el valor del parrafo
    document.querySelector('#number').innerHTML = count;

    //Variables para los botones
    const decrease = document.querySelector('#decrease');
    const increase = document.querySelector('#increase');
    const reset = document.querySelector('#reset');

    //Evento que decrementa en 1
    decrease.addEventListener('click', ()=>{
        count --;

        if(count < 0){
            document.querySelector('#number').style.color="firebrick"; 
            document.querySelector('#number').innerHTML = count;
        }else if(count > 0){
            document.querySelector('#number').style.color="forestgreen";
            document.querySelector('#number').innerHTML = count; 
        }else{
            document.querySelector('#number').style.color="black"; 
            document.querySelector('#number').innerHTML = count;
        }
    });

    //Evento que increment en 1
    increase.addEventListener('click', ()=>{
        count ++;

        if(count < 0){
            document.querySelector('#number').style.color="firebrick"; 
            document.querySelector('#number').innerHTML = count;
        }else if(count > 0){
            document.querySelector('#number').style.color="forestgreen";
            document.querySelector('#number').innerHTML = count; 
        }else{
            document.querySelector('#number').style.color="black"; 
            document.querySelector('#number').innerHTML = count;
        }
    });

    //Evento que vuelve a poner el contador a 0
    reset.addEventListener('click', () =>{
        count = 0;
        document.querySelector('#number').style.color="black"; 
        document.querySelector('#number').innerHTML = count;
    });
});