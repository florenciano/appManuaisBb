"use strict";
// declare as variáveis
var trim, placeholder;

//trim
trim = function (str) {
    return str.replace(/^\s+|\s+$/g,"");
}

placeholder = {
    'confirm': function (a) {
        var v = $(a).attr("placeholder");

        if ( trim($(a).val()) == "" || trim($(a).val()) == undefined ) {
            $(a).val(v);
        } else if ( trim($(a).val()) == trim(v) ) {
            $(a).val("");
        }
    },
    'hold': function (a) {
        $(a).on({
            'focus': function (){
                placeholder.confirm($(this));
            },
            'blur': function (){
                placeholder.confirm($(this));
            }
        });
    }
}

// // Doc ready
$(function(){

    /* Nice scroll
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    // $("body").mCustomScrollbar();

    // Only IE
    if (navigator.userAgent.match("MSIE")) {
        // Placeholder
        placeholder.hold("input, textarea");

        // PIE (border-radius, gradient, box-shadow)
        if (window.PIE) {
            var elements = 'input, textarea, .round';

            $(elements).each(function() {
                PIE.attach(this);
            });
        }
    }

});

/* ===============================================================
   GENERAL SCRIPTS
================================================================== */

/* focus input
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
$( "#pesquisa" ).focus();


 /* show and Hide the subcategories
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// function expRec() {
//     var expandirRecolher = $( ".exp-rec" );
//     var expandirTudo = $( ".expandir" );
//     var recolherTudo = $( ".recolher" );
//     var todasListas = $( ".navigationMain li ul" );

//     var linkMais = "[+]";
//     var linkMenos = "[-]";

//     /* show/hide each categories */
//     expandirRecolher.each(function(){

//         $(this).click(function(event){
//             event.preventDefault();
//             var lista = $(event.target).parent().parent().next();
//             lista.toggle(400);

//             // call function replace text
//             var linkText = this; //[+]
//             if(linkText.innerText == linkMais) {
//                 linkText.innerText = linkMenos;
//             } else if(linkText.innerText == linkMenos) {
//                 linkText.innerText = linkMais;
//             }
//         });

//     });
//     /* show ALL the categories */
//     expandirTudo.click(function(event){
//         event.preventDefault();

//         todasListas.each(function(event){
//             $(this).show(400);
//         });

//         // display Text
//         expandirRecolher.each(function(){
//             var linkText = this; //[+]
//             linkText.innerText = linkMenos;
//         });

//     });
//     /* hide ALL the categories */
//     recolherTudo.click(function(event){
//         event.preventDefault();

//         todasListas.each(function(event){
//             $(this).hide(400);
//         });

//         expandirRecolher.each(function(){
//             var linkText = this; //[-]
//             linkText.innerText = linkMais;
//         });

//     });
// }


/* Deleting <li> empty in the navigation search
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// function clearList() {
//     // varre todos os listas
//     var list = document.querySelectorAll(".sublist");
//     for(var i = 0; i < list.length; i++) {
//         var contentLink = list[i].firstChild;
//         // verifica-se os links tem conteúdo de texto
//         if(contentLink.textContent == "" || contentLink.textContent == null || contentLink.textContent == undefined) {
//             list[i].style.display="none";
//         }
//     }
// }


/* Attr class "selectedCategory" in the <li> atual
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// function selectedCat() {
//     var catBreadcrumb = document.querySelector(".nameCategory").textContent;
//     var contentCategoria = document.querySelectorAll(".contRight p");

//     for(var i = 0; i < contentCategoria.length; i++) {
//         var txt = contentCategoria[i].textContent;
//         var li = contentCategoria[i].parentNode.parentNode.parentNode;

//         if (txt == catBreadcrumb) {
//             li.className="selectedCategory";
//         }

//     }
// }


 /* create list of the summary and their respective anchors
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
            // var divSum = $( ".imageContainer" );
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


/* ~~~~~~~~~~~~~~~~~~~~~~~ CALL FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~ */
// DOMSubtreeModified


$( document ).ready(function(){
    //     selecionada o item do menu de conforme indicado no breadcrumb
    //     selectedCat();

    // retira todas as <li> não usadas listada no menu
    // clearList();

    // cria o sumário e suas respectivas âncoras qdo houver títulos
    listSumary();

    // imprimir manual
    printManual();
});


