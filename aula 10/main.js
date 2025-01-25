//no click do botao add crie uma função 
//pegar o calor do input, criar um li, e jogar na minha ul 


$("#adicionar").on('click', () => {
    let oi = $("#pegar").val()
    $("ul").append("<li class='text-white'>" + oi + "</li>")
});




$("#remover").on('click', () => {
   $("ul").empty()
});
