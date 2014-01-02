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

// Doc ready
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

(function($){
    /* ===============================================================
       Page: local
    ================================================================== */

     /* show and Hide the subcategories
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function expRec() {
        var expandirRecolher = $( ".exp-rec" );
        var expandirTudo = $( ".expandir" );
        var recolherTudo = $( ".recolher" );
        var todasListas = $( ".navigationMain li ul" );
            
        var linkMais = "[+]";
        var linkMenos = "[-]";

        /* show/hide each categories */
        expandirRecolher.each(function(){
           
            $(this).click(function(event){
                event.preventDefault();
                var lista = $(event.target).parent().parent().next();
                lista.toggle(400);
                
                // call function replace text
                var linkText = this; //[+]
                if(linkText.innerText == linkMais) {
                    linkText.innerText = linkMenos;
                } else if(linkText.innerText == linkMenos) {
                    linkText.innerText = linkMais;
                }
            });

        });
        /* show ALL the categories */
        expandirTudo.click(function(event){
            event.preventDefault();
            
            todasListas.each(function(event){
                $(this).show(400);
            });

            // display Text
            expandirRecolher.each(function(){
                var linkText = this; //[+]
                linkText.innerText = linkMenos;
            });

        });
        /* hide ALL the categories */
        recolherTudo.click(function(event){
            event.preventDefault();
            
            todasListas.each(function(event){
                $(this).hide(400);
            });

            expandirRecolher.each(function(){
                var linkText = this; //[-]
                linkText.innerText = linkMais;
            });

        });
    }


    /* Deleting <li> empty in the navigation search
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function clearList() {
        // varre todos os listas
        var list = document.querySelectorAll(".sublist");
        for(var i = 0; i < list.length; i++) {
            var contentLink = list[i].firstChild;
            // verifica-se os links tem conteúdo de texto
            if(contentLink.textContent == "" || contentLink.textContent == null || contentLink.textContent == undefined) {
                list[i].style.display="none";
            }
        }
    }


    /* Attr class "selectedCategory" in the <li> atual
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function selectedCat() {
        var catBreadcrumb = document.querySelector(".nameCategory").textContent;
        var contentCategoria = document.querySelectorAll(".contRight p");
        
        for(var i = 0; i < contentCategoria.length; i++) {
            var textoCategoria = contentCategoria[i].textContent;
            var li = contentCategoria[i].parentNode.parentNode.parentNode;

            if (textoCategoria == catBreadcrumb) {
                li.className="selectedCategory";
            }

        }
    }




    /* EVENTS FOR clearList */
    $(document).ready(function(){
        clearList();
        expRec();
        selectedCat();
    });

    // $( "#pesquisa" ).bind("keydown", "blur",function(){
    //     clearList();
    //     expRec();
    //     selectedCat();

    // });

    /* EVENTS FOR expRec */
    // $( ".navigationMain" ).on("change", function(){
    //     clearList();
    //      expRec();
    //     selectedCat();
    // });



     /* focus input
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */ 
    // $( ".inputPesquisa" ).focus();



     /* create list of the summary
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */ 
    var divSumario = $( ".sumario" );
    var todosTitulos = $( "h2" );
    var tagUl = $( "<ul>" );
    
    todosTitulos.each(function(){
        // catch anchor after todosTitulos
        var linkAncora = this.firstChild;

        // creating tag <a>
        var tagA = $( "<a>" );
            tagA.attr("href","#" + linkAncora.name);
        var contentTagA = $(this).text();
        tagA.append(contentTagA);
        
        // creating tag <li> and inserting content
        var tagLi = $( "<li>" );
        tagLi.append(tagA);

        // inserting content in tag <ul>
        tagUl.append(tagLi);
        
    });

    // inserting content tag <ul> na divSumario
    divSumario.append(tagUl);


     /* create anchor summary
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */ 
    /*
    * Obs: Rotina de programação para construir a âncora do sumário
    * Mas a âncora pode ser incluída fora da div "imageContainer"
    * Verificar o critério de alocação das âncoras para viabilizar
    * a utilidade desta rotina.
    */
    // divAnchorSumario.each(function(){
    //     var divAnchorSumario = $( ".imageContainer" );
    //     // creating tag <div>
    //     var tagDiv = $( "<div>" ).addClass("voltarSumario", "fix");
    //     // creating tag <a> and content
    //     var tagAnchor = $( "<a>" );
    //         tagAnchor.attr("href","#sumarioAncora");
    //     var txtA = "Sumário";
    //     // inserting in DOM
    //     tagAnchor.text(txtA);
    //     tagDiv.append(tagAnchor);        
    //     divAnchorSumario.append(tagDiv);
    // });
    

})(jQuery);

