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

(function(){
    /* ===============================================================
       Page: local
    ================================================================== */

    /* show and Hie the subcategories
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */ 
    var expandirRecolher = $(".exp-rec");
    // console.log(expandirRecolher.length);
    // iterando com cada grupo
    
    for(var i = 0; i < expandirRecolher.length; i++) {
        // $(this).click(function(e){
        //     e.preventDefault();
        //     console.log("dljasl");
        // });
        expandirRecolher[i].addEventListener("click", function(e){
            e.preventDefault();
            var listaSubcategoria = this.parentNode.parentNode.nextSibling;
            console.log(listaSubcategoria);
        })
    };

})();

