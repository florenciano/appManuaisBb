/* ===============================================================
   GENERAL SCRIPTS
================================================================== */

$( document ).ready( function() {

    /*
        - Fechar pop-up de alerta de pequena resolução. Este alerta
        aparece quando a resolução de tela é inferior a 768px [tablet]
        NOTA: Implantado a partir da versão 4
    */
    $( ".close" ).on( "click", function() {
        $( ".alert" ).fadeOut( 400 );
    });
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /*
        Montando o pop-up alerta de troca de url
    */
    function buildingAlert(url) {   
        var div, button, txt, a;
        
        div = $( "<div>" ).addClass( "alert-change alert-warning alert-dismissable" );
        button = $( "<button>" ).attr( "type","button" ).addClass( "close-change" ).text( "x" );
        a = $( "<a>" );
            a.attr( "href", url ).text( url );
        txt = "O novo link para o manual é: ";
        
        div.append( button, txt, a );
        $( ".contentMain" ).prepend( div );
    }
    function getURL() {
        var urlPage =  window.location.href;
        var newUrlPage = urlPage.replace("https://insper.blackboard.com/bbcswebdav/institution/TAI/", "https://insper.blackboard.com/bbcswebdav/institution/DEA/")
        buildingAlert( newUrlPage );
    }
    getURL();

    // fechar pop-up
    $( ".close-change" ).on( "click", function() {
        $( ".alert-change" ).fadeOut( 400 );
    });

    /*  
        Redirecionando a página com o uso da tag meta refresh [troca de url]
    */
    function contentMeta (url) {
        var metaTag = $( "<meta>" );
        metaTag.attr({
            "http-equiv":"refresh",
            "content": "0;URL=" + url
        });
        $( "head" ).prepend( metaTag );
    }
    function refreshPage () {
        var url =  window.location.href;
        var newUrl = url.replace("https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/", "https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/")
        contentMeta( newUrl );
    }
    refreshPage();

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /*
        PÁGINA : FAQ
        Expansão e contraçã das respostas do FAQ
    */
    var respFaq = $( ".answer" ),
        pergFaq = $( ".question" ),
        displayTxt = $( "<span>" ),
        expandirTudo = $( ".expandAll" ),
        recollherTudo = $( ".colapseAll" );
    
    // Escondendo as respostas... e montando o display
    // Optamos por fazer isto via script e não CSS devido a acessibilidade
    $( respFaq ).css( "display", "none" );
    $( displayTxt ).addClass( "display" ).text( "[+]" ).prependTo( ".question h4 a" );

    // alterando txt display
    function altDisplayTxt( element ) {
        if( element.text() == "[+]" ) {
            element.text( "[-]" );
        } else {
            element.text( "[+]" );
        }
    }

    // revelando e ocultando as respotas
    $( pergFaq ).click( function(e) {
        e.preventDefault;
        $( this ).next( ".answer" ).toggle( 400 );
        altDisplayTxt( $(this).find( ".display ") );
    });
    
    // btn Expandir tudo
    expandirTudo.click( function(e) {
        e.preventDefault;
        respFaq.show( 400 );
        $( ".display" ).text( "[-]" );
    });
    // btn Recolher tudo
    recollherTudo.click( function(e) {
        e.preventDefault;
        respFaq.hide( 400 );
        $( ".display" ).text( "[+]" );
    });
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


    /*
        Criando a lista de sumário e suas respectivas âncoras.
        A lista só aparece no DOM se houver algum subTítulo em marcação 'h2'
        no interior dos manuais.
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
            // $(this).prev().append( tagDiv );
            $( tagDiv ).insertBefore( $(this) );
        });

    }

    // criando as listas
    // aqui será realizado uma varredura para cada subTítulo existente na página
    // e seus respectivos conteúdos de textos serão inseridos na listagem do sumário
    todosTitulos.each( function() {
        var tagA = $( "<a>" );
            tagA.attr( "href","#" + this.id );

        var contentTagA = $(this).text();
        tagA.append( contentTagA );

        // criando os <li> e inserido seus respectivos conteúdos
        var tagLi = $( "<li>" );
        tagLi.append( tagA );
        tagUl.append( tagLi );
    });

    // Aqui fica as condições para que seja exibida no DOM
    // se houver mais de um subTítulo (lembre-se que sempre haverá pelo menos um: 'Saiba Mais')
    // caso não há nenhum subtítulo então não insira 'as divs' do sumário
    // porém a última âncora precisa do espaçamento entre conteúdo e box do Saiba Mais
    if( todosTitulos.length > 1 ) {
        divSumario.append( tagUl );
        createAnchor();
    } else {
        divSumario.css( "display", "none" );
        anchor.css( "margin-top", "40px" );
    }

    // Não queremos que aparece a âncora antes do 1º subTítulo do manual
    // quando este mesmo vier imediatamente após a lista de sumário.
    var allAnchor = $( ".voltarSumario" );
    allAnchor.each( function (index, posicao) {
        if($(this).prev().hasClass( "sumario row" )) {
            $(this).css( "display","none" );
        }
    });

    // O título 'Saiba mais' também é marcado com 'h2', portanto,
    // irá aparecer uma âncora indesejada dentro do box. Eliminamos.
    $( ".saibaMais" ).find( ".voltarSumario" ).remove();


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


    /*
        Pág: Blackboard/comunicacao-e-interacao/exemplos-dinamicas/
        Ajustar a largura do figcaption para a mesma da imagem
        ambos estão dentro do 'figure' e do container 'imageContainer'
        Obs: Este script irá rodar somente quando a página terminar de carregar seus elementos
    */
    $(window).load(function(){
        var imgs = $( ".contentArticleExDinamicas .imageContainer figure" );
        imgs.each( function() {
            var largImg = $(this).children( "img" ).width();
            $(this).children( "figcaption" ).css( "width", largImg );

            if( $(this).children( "img" ).hasClass( "" ) ) {
                $(this).children( "figcaption" ).css( "margin","5px auto 0" );
            }
        });
    });
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

});