cid.directive('menuNabar', function(){
    return{
        restrict: "EA",
        template:   `<nav class="navbar navbar-dark bg-dark fixed-top">
                        <a class="navbar-brand cima" ui-sref="menu">
                            <img ng-src="./App/Images/simbolo.png" width="40" height="40" alt="Símbolo do Site">
                        </a>
                        <a class="navbar-brand cima" ui-sref="atenas"><div class='text'>Atenas</div></a>
                        <a class="navbar-brand cima" ui-sref="dublin"><div class='text'>Dublin</div></a>
                        <a class='navbar-brand cima' ui-sref="novaIorque"><div class='text'>Nova Iorque</div></a>
                        <a class="navbar-brand cima" ui-sref="roma"><divp class='text'>Roma</div></a>
                        <a class="navbar-brand cima" ui-sref="saoPaulo"><div class='text'>São Paulo</div></a>
                        <a class="navbar-brand cima" ui-sref="buscaCidade"><div class='text'>Cidades do Brasil</div></a>
                    </nav>`
    }
})