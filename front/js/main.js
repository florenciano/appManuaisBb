/* ===============================================================
   GENERAL SCRIPTS
================================================================== */

//Emula o placeholder em browser antigo
$( "input" ).placeholder();

// focus no input de pesquisa
$( "#pesquisa" ).focus();


// fechando pop-up de alerta de pequena resolução
// este alerta aparece quando a resolução de tela
// é inferior a 768px [tablet]
$( "button.close" ).click(function(){
    $( "div.alert" ).hide(400);
});

 /* Criando a lista de sumário e suas respectivas âncoras
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function listSumary() {
    var divSumario = $( ".sumario" );
    var anchor = $( ".voltarSumario" );
    var todosTitulos = $( "h2" ); //incluso o saibaMais
    var tagUl = $( "<ul>" );
    var count = 1;


    // creating anchors...
    function createAnchor() {

        todosTitulos.each(function(){
            // creating tag <div>
            var tagDiv = $( "<div>" ).addClass("voltarSumario", "fix");
            // creating tag <a> and content
            var tagAnchor = $( "<a>" );
                tagAnchor.attr("href","#sumarioAncora");
            var txtA = "Sumário";
            // inserting in DOM
            tagAnchor.text(txtA);
            tagDiv.append(tagAnchor);
            // criando a <div> do sumário antes de cada <h2>
            $(this).prev().append(tagDiv);
        });


        // elimited index[0] of the anchor...
        var allAnchor = $( ".voltarSumario" );
        allAnchor[0].style.display="none";

        // modify style of the last anchor [equival "saiba mais"]...
        var lastAnchor = allAnchor.slice(-1)[0];
        lastAnchor.style.marginTop="40px";
    }

    // creating list...
    todosTitulos.each(function(){
        var ancora = this.firstChild;

        var tagA = $( "<a>" );
        tagA.attr("href","#" + ancora.name);

        var contentTagA = $(this).text();
        tagA.append(contentTagA);

        // creating tag <li> and inserting content
        var tagLi = $( "<li>" );
        tagLi.append(tagA);

        tagUl.append(tagLi);

    });

    // condictional for exibition content in the DOM..
    if(todosTitulos.length > 1) { //> 1 pq o titulo do saibaMais também é <h2>
        divSumario.append(tagUl);
        createAnchor();
    } else {
        divSumario.css("display","none");
        anchor.css("margin-top","40px");
    }
}

/* prints
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function printManual() {
    $('a#imprimir').click(function() {
        window.print();
        return false;
    });
}

$( document ).ready(function(){
    // cria o sumário e suas respectivas âncoras qdo houver títulos
    listSumary();

    // imprimir manual
    printManual();
});


