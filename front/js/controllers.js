// vide example
// http://angular.github.io/angular-phonecat/step-3/app/

var manuaisBB = angular.module('manuaisBB', []);

manuaisBB.controller('listaMenu', function ($scope) {
	$scope.itensAssunto1 = [

	// ASSUNTO : XXXX COM CATEGORIA
	{	'categoria'				: 'Duis ac vestibulum nisi',

		'subCategoria1'			: 'Aliquam erat volutpat',
		'linkSubCategoria1'		: '/blackboard/sub1',

		'subCategoria2'			: 'Velit nisi sollicitudin nisi',
		'linkSubCategoria2'		: '/blackboard/sub2',

		'subCategoria3'			: 'Aenean aliquam blandit lectus',
		'linkSubCategoria3'		: '/blackboard/sub3',

		'subCategoria4'			: 'Donec eu ligula vulputate, blandit urna ut, porta justo',
		'linkSubCategoria4'		: '/blackboard/sub4',

		'subCategoria5'			: 'Nulla condimentum massa',
		'linkSubCategoria5'		: '/blackboard/sub5',

		'subCategoria6'			: 'Praesent mollis sodales vulputate',
		'linkSubCategoria6'		: '/blackboard/sub6'
	},

	{	'categoria'				: 'Segundo nome da categoria, vamos simular um nome grande com mais de uma linha',

		'subCategoria1'			: 'Praesent auctor neque pretium',
		'linkSubCategoria1'		: '/blackboard/sub21'
	}
	];

	$scope.itensAssunto1NoCat = [

	// ASSUNTO : XXX SEM CATEGORIA
	{
		'semCategoria1'			: 'Aqui fica o primeiro item de assunto sem categoria',
		'linkSemCategoria1'		: '/blackboard/sub1',

		'semCategoria2'			: 'E aqui, é claro, fica o segundo item de assunto sem categoria',
		'linkSemCategoria2'		: '/blackboard/sub1'
	}
	];

	$scope.itensAssunto2 = [

	// ASSUNTO : XXX COM CATEGORIA
	{	'categoria'				: 'Primeiro nome da categoria',

		'subCategoria1'			: 'Mauris hendrerit at arcu a porta',
		'linkSubCategoria1'		: '/blackboard/sub1'
	},

	{	'categoria'				: 'Segundo nome da categoria',

		'subCategoria1'			: 'Vivamus posuere nibh mattis nulla congue porta',
		'linkSubCategoria1'		: '/blackboard/sub21',

		'subCategoria2'			: 'Pellentesque posuere varius commodoa',
		'linkSubCategoria2'		: '/blackboard/sub21',

		'subCategoria3'			: 'Vestibulum congue nisl et ipsum auctor',
		'linkSubCategoria3'		: '/blackboard/sub21'
	}
	];

	$scope.itensAssunto2NoCat = [

	// ASSUNTO : XXX SEM CATEGORIA
	{
		'semCategoria1'			: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
		'linkSemCategoria1'		: '/blackboard/sub1',

		'semCategoria2'			: 'Aliquam erat volutpat. Fusce sed porttitor urna',
		'linkSemCategoria2'		: '/blackboard/sub1',

		'semCategoria3'			: 'Ut ornare',
		'linkSemCategoria3'		: '/blackboard/sub1'
	}
	];

	$scope.itensAssunto3NoCat = [

	// ASSUNTO : XXX SEM CATEGORIA
	{
		'semCategoria1'			: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
		'linkSemCategoria1'		: '/blackboard/sub1',

		'semCategoria2'			: 'Phasellus tempor nibh vitae posuere tincidunt',
		'linkSemCategoria2'		: '/blackboard/sub1',

		'semCategoria3'			: 'Urna eros vehicula purus, quis fringilla',
		'linkSemCategoria3'		: '/blackboard/sub1'
	}
	];


	$scope.showAllCat = function($event) {
		// declaration variables...
		var todasListas = $( ".subCat" );
		var expandirRecolher = $( ".exp-rec" );
		var expandirTudo = $( ".expandir" );
        var recolherTudo = $( ".recolher" );

		var linkMais = "[+]";
        var linkMenos = "[-]";

		todasListas.each(function(event){
			$(this).show();
		});

		expandirRecolher.each(function(){
            var linkText = $(this); //[+]
            linkText.text(linkMenos);
        });

		$event.preventDefault();
	}

	$scope.hideAllCat = function($event) {
		// declaration variables...
		var todasListas = $( ".subCat" );
		var expandirRecolher = $( ".exp-rec" );
		var expandirTudo = $( ".expandir" );
        var recolherTudo = $( ".recolher" );

		var linkMais = "[+]";
        var linkMenos = "[-]";

		todasListas.each(function(event){
			$(this).hide();
		});

		expandirRecolher.each(function(){
            var linkText = $(this); //[+]
            linkText.text(linkMais);
        });

		$event.preventDefault();
	}

	$scope.hideItens = function() {
		// declaration variables...
		var list = $( ".sublist" );

		list.each(function(){
			var contentLink = $(this).children();
			if(contentLink.text() == "" || contentLink.text() == null || contentLink.text() == undefined) {
				$(this).remove();
			}
		});

	}

	$scope.hideItensNoCat = function() {
		// declaration variables...
		var listNo = $( ".noCategory li" );

		listNo.each(function(){
			var contentLinkNo = $(this).children();
			if(contentLinkNo.text() == "" || contentLinkNo.text() == null || contentLinkNo.text() == undefined) {
				$(this).remove();
			}
		});
	}

	$scope.selectedCat = function() {
		// declaration variables...
		var catBreadcrumb = document.querySelector(".nameCategory").textContent;
	    var contentCategoria = document.querySelectorAll(".titleCategory");

	    for(var i = 0; i < contentCategoria.length; i++) {
	        var txt = contentCategoria[i].textContent;
	        var li = contentCategoria[i].parentNode.parentNode.parentNode;

	        if (txt == catBreadcrumb) {
	            li.className="selectedCategory";
	        }
	    }
	}

	$scope.selectedNoCat = function() {
		// declaration variables...
		var catBreadcrumb = document.querySelector(".nameCategory").innerText;
		var contentNoCategoria = document.querySelectorAll(".noCat");

		for(i = 0; i < contentNoCategoria.length; i++) {
			var txtNo = contentNoCategoria[i].textContent;
			var liNo = contentNoCategoria[i].parentNode;

			if(txtNo == catBreadcrumb) {
				liNo.className="selectedCategory";
			}

		}
	}

	$scope.showHideCat = function($event) {
		// declaration variables...
		var linkMais = "[+]";
		var linkMenos = "[-]";
		var lista = $event.target.parentNode.parentNode.nextElementSibling;

		if($event.target.textContent == linkMais) {
	       $event.target.textContent = linkMenos;
	       lista.style.display="block";
		} else {
	        $event.target.textContent = linkMais;
	        lista.style.display="none";
		}
		$event.preventDefault();
		// outra alternativa
		// <ul> ng-show="item.show"
	}

	$scope.teste1 = function() {
        var title = $( ".contentMain h1" );
        var links = $( ".sublist a" );
        
        links.each( function () {
            if( $( this ).text() == $( title ).text() ) {
                $( this ).parent().addClass( "selectedCategory" );
            }
        });
		// console.log(this.length, "8=D");
	}

});
