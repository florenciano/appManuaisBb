/* ===============================================================
   GENERAL SCRIPTS
================================================================== */

$( document ).ready( function() {
    
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /*
        Emula o placeholder em browser antigo [lê-se IE]
    */
    $( "input" ).placeholder();
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


    /*
        Focus no input de pesquisa.
        NOTA: Desativado a partir da versão 4
    */
    /* $( "#pesquisa" ).focus(); */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


    /*
        Fechar pop-up de alerta de pequena resolução este alerta
        aparece quando a resolução de tela é inferior a 768px [tablet]
        NOTA: Implantado a partir da versão 4
    */
    $( "button.close" ).click( function() {
        $( "div.alert" ).hide( 400 );
    });
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


    /*
        Chamando a janela de impressão
        OBS: No momento este script não tem valor devido
        a desistência de fornecer material impresso.
        NOTA: Disponível apenas na versão 1
    */
    /* 
        $( "a#imprimir" ).click(function() {
            window.print();
            return false;
        });
    */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


    /*
        Criando a lista de sumário e suas respectivas âncoras.
        A lista só aparece no DOM se houver algum título no interior dos manuais
    */
    var divSumario, anchor, todosTitulos, tagUl, count;

    divSumario = $( ".sumario" ), anchor = $( "#ancoraSaibaMais" ), todosTitulos = $( "h2" ), //incluindo o título do 'SaibaMais'
    tagUl = $( "<ul>" ), count = 1;


    // Função para criar as âncoras
    function createAnchor() {
        todosTitulos.each( function() {
            var tagDiv = $( "<div>" ).addClass( "voltarSumario", "fix" );
            var tagAnchor = $( "<a>" );
                tagAnchor.attr( "href", "#sumarioAncora" );
            // texto que ira aparecer no DOM HTML
            var txtA = "Sumário";

            tagAnchor.text( txtA );
            tagDiv.append( tagAnchor );

            // criando a <div> que será o container para o sumário antes de cada <h2>
            $(this).prev().append( tagDiv );
        });

        // Não queremos que aparece a âncora antes do 1º Título do manual
        var allAnchor = $( ".voltarSumario" );
        allAnchor[0].style.display = "none";

        // A última âncora que irá aparecer próximo do 'Saiba mais' terá
        // uma margem de estilo maior para separar do conteúdo da matéria
        var lastAnchor = allAnchor.slice( -1 )[0];
        lastAnchor.style.marginTop = "40px";
    }

    // criando as listas
    // aqui será realizado uma varredura para cada título existente da página
    // e seus respectivos conteúdos de textos serão inseridos na listagem do sumário
    todosTitulos.each(function(){
        var ancora = this.firstChild;
        var tagA = $( "<a>" );
            tagA.attr( "href","#" + ancora.name );

        var contentTagA = $(this).text();
        tagA.append( contentTagA );

        // criando os <li> e inserido seus respectivos conteúdos
        var tagLi = $( "<li>" );
        tagLi.append( tagA );
        tagUl.append( tagLi );
    });

    // Aqui fica as condições para que seja exibida no DOM
    // se houver mais de um título (lembre-se que sempre haverá 1: 'Saiba Mais')
    // caso não há nenhum subtítulo então não insira 'as divs' do sumário
    // porém a última âncora precisa do espaçamento entre conteúdo e box do Saiba Mais
    if( todosTitulos.length > 1 ) {
        divSumario.append( tagUl );
        createAnchor();
    } else {
        divSumario.css( "display", "none" );
        anchor.css( "margin-top", "40px" );
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    

    /*
        Esta função oculta o link da lista 'Saiba mais' do sumário
        Só é executada se não houver o box 'Saiba mais'
    */
    function hideSaibaMaisDoSumario () {
        // pegando todas os links do sumário
        var linkSumario = document.querySelectorAll( ".sumario a" );
        // identificando o conteúdo do link
        for( i = 0; i < linkSumario.length; i++ ) {
            if( linkSumario[i].textContent == "Saiba Mais" ) {
                linkSumario[i].style.display = "none";
            }
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


    /*
        Controlando as informações que serão exibidas no box 'Saiba mais'
        1:  Há manuais que NÃO terão os 'Manuais Relacionados';
        2:  Há manuais que NÃO terão os 'Manuais Complementares';
        3:  E também há manuais que NÃO terão o box 'Saiba mais'
            Neste caso, terá q ser tirado a âncora dele "voltar sumário"
            e o seu link da lista do sumário.
    */
    var saibaMais = $( ".saibaMais" ),  titleRel = $( "#relacionado" ),
        titleComp = $( "#complementar" ), liRel, liComp;
    
    // Criando a condição 1
    liRel = $( "#relacionado" ).next().children();
    if( !liRel.length > 0 ) { titleRel.css( "display", "none" ) }

    // Criando a condição 2
    liComp = $( "#complementar" ).next().children();
    if( !liComp.length > 0 ) { titleComp.css( "display", "none" ) }

    // Criando a condição 3
    if( !liRel.length > 0 && !liComp.length > 0 ) { 
        saibaMais.remove();
        // se não existir o box 'Saiba mais' a última âncora do sumário desaparece
        anchor.css( "display", "none" );
        // também precisa desaparecer o link do 'Saiba mais' do sumário
        hideSaibaMaisDoSumario();
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

});