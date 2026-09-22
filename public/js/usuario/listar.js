document.addEventListener("DOMContentLoaded",function(){

    let btn = document.querySelectorAll("#btnExclusao");
    for(let i=0; i< btn.length;i++){
        btn[i].addEventListener("click", excluir);
    }
    function excluir(){
        //recupera o data-attribute
        console.log(this.dataset.idexclusao);
        let idExclusao = this.dataset.idexclusao;
        if(confirm("Deseja realmente excluir esse usuario?")){
            let obj ={
                id: idExclusao
            }

            fetch("/usuario/excluir",{
                method: "POST",
                headers: {
                    "content-Type" : "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then(function(resposta){
                return resposta.json();
            })
            .then(function(corpo){
                if(corpo.ok){
                    console.log("Usuario Excluido com sucesso!");
                    window.location.reload();
                }else{
                    console.log("Erro ao excluir usuario!");
                }
            })
        }

    }
})