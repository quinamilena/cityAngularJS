cid.directive('menuNabar', function(){
    return{
        restrict: "EA",
        template:   `<nav class="navbar fixed-top navegacao">
                        <a class="navbar-brand cima" ui-sref="menu">Home</a>
                        <a class="navbar-brand cima" ui-sref="atenas">Atenas</a>
                        <a class="navbar-brand cima" ui-sref="dublin">Dublin</a>
                        <a class='navbar-brand cima' ui-sref="novaIorque">Nova Iorque</a>
                        <a class="navbar-brand cima" ui-sref="roma">Roma</a>
                        <a class="navbar-brand cima" ui-sref="saoPaulo">São Paulo</a>
                        <a class="navbar-brand cima" ui-sref="buscaCidade">Cidades do Brasil</a>
                    </nav>`
    }
})