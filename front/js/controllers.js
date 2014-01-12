// vide example
// http://angular.github.io/angular-phonecat/step-3/app/

var manuaisBB = angular.module('manuaisBB', []);

manuaisBB.controller('listaMenu', function ($scope) {
	$scope.itensAssunto1 = [

	// ASSUNTO : BLACKBOARD COM CATEGORIA
	{	'categoria'				: 'Primeiro nome da categoria',

		'subCategoria1'			: 'Primeiro nome da subcategoria 1',
		'linkSubCategoria1'		: '/blackboard/sub1',

		'subCategoria2'			: 'Lorem ipsum dolor sit',
		'linkSubCategoria2'		: '/blackboard/sub2',

		'subCategoria3'			: 'Primeiro nome da subcategoria 3',
		'linkSubCategoria3'		: '/blackboard/sub3',

		'subCategoria4'			: 'Primeiro nome da subcategoria 4',
		'linkSubCategoria4'		: '/blackboard/sub4',

		'subCategoria5'			: 'Primeiro nome da subcategoria 5',
		'linkSubCategoria5'		: '/blackboard/sub5',

		'subCategoria6'			: 'Primeiro nome da subcategoria 6',
		'linkSubCategoria6'		: '/blackboard/sub6'
	},

	{	'categoria'				: 'Segundo nome da categoria',

		'subCategoria1'			: 'Primeiro nome da subcategoria 1',
		'linkSubCategoria1'		: '/blackboard/sub21'
	},

	];

	$scope.itensAssunto1NoCat = [

	// ASSUNTO : BLACKBOARD SEM CATEGORIA
	{
		'semCategoria1'			: 'Primeiro nome da categoria',
		'linkSemCategoria1'		: '/blackboard/sub1',

		'semCategoria2'			: 'Segundo nome do item sem subcategoria 2',
		'linkSemCategoria2'		: '/blackboard/sub1',

		// 'semCategoria3'			: 'Terceiro nome do item sem subcategoria 3',
		// 'linkSemCategoria3'		: '/blackboard/sub1'
	}
	];

	$scope.itensAssunto2 = [

	// ASSUNTO : BLACKBOARD COM CATEGORIA
	{	'categoria'				: 'Nome da categoria do segundo assunto',

		'subCategoria1'			: 'Primeiro nome da subcategoria 1',
		'linkSubCategoria1'		: '/blackboard/sub1'

		// 'subCategoria2'			: 'Lorem ipsum dolor sit',
		// 'linkSubCategoria2'		: '/blackboard/sub2',

		// 'subCategoria3'			: 'Primeiro nome da subcategoria 3',
		// 'linkSubCategoria3'		: '/blackboard/sub3',

		// 'subCategoria4'			: 'Primeiro nome da subcategoria 4',
		// 'linkSubCategoria4'		: '/blackboard/sub4',

		// 'subCategoria5'			: 'Primeiro nome da subcategoria 5',
		// 'linkSubCategoria5'		: '/blackboard/sub5',

		// 'subCategoria6'			: 'Primeiro nome da subcategoria 6',
		// 'linkSubCategoria6'		: '/blackboard/sub6'
	},

	{	'categoria'				: 'Segundo nome da categoria',

		'subCategoria1'			: 'Primeiro nome da subcategoria 1',
		'linkSubCategoria1'		: '/blackboard/sub21'
	},

	];

	$scope.itensAssunto2NoCat = [

	// ASSUNTO : BLACKBOARD SEM CATEGORIA
	{
		'semCategoria1'			: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
		'linkSemCategoria1'		: '/blackboard/sub1',

		'semCategoria2'			: 'Segundo nome do item sem subcategoria 2',
		'linkSemCategoria2'		: '/blackboard/sub1',

		'semCategoria3'			: 'Terceiro nome do item sem subcategoria 3',
		'linkSemCategoria3'		: '/blackboard/sub1'
	}
	];


	$scope.showAllCat = function() {
		// declaration variables...
		var todasListas = $( ".subCat" );
		var expandirRecolher = $( ".exp-rec" );
		var expandirTudo = $( ".expandir" );
        var recolherTudo = $( ".recolher" );

		var linkMais = "[+]";
        var linkMenos = "[-]";

		todasListas.each(function(event){
			$(this).show(400);
		});

		expandirRecolher.each(function(){
            var linkText = $(this); //[+]
            linkText.text(linkMenos);
        });

		event.preventDefault();
	}

	$scope.hideAllCat = function() {
		// declaration variables...
		var todasListas = $( ".subCat" );
		var expandirRecolher = $( ".exp-rec" );
		var expandirTudo = $( ".expandir" );
        var recolherTudo = $( ".recolher" );

		var linkMais = "[+]";
        var linkMenos = "[-]";

		todasListas.each(function(event){
			$(this).hide(400);
		});

		expandirRecolher.each(function(){
            var linkText = $(this); //[+]
            linkText.text(linkMais);
        });

		event.preventDefault();
	}

	$scope.showHideCat = function($event) {
		// declaration variables...
		var linkMais = "[+]";
        var linkMenos = "[-]";

        var lista = $(event.target).parent().parent().next();
        lista.each(function(){
        	$(this).toggle(400);
        });

        var teste = $event.target;
        if(teste.innerText == linkMais) {
        	teste.innerText = linkMenos;
        } else {
        	teste.innerText = linkMais;
        }

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
		var catBreadcrumb = document.querySelector(".nameCategory").innerText;
	    var contentCategoria = document.querySelectorAll(".titleCategory");

	    for(i = 0; i < contentCategoria.length; i++) {
	        var txt = contentCategoria[i].textContent;
	        var li = contentCategoria[i].parentNode.parentNode.parentNode;

	        if (txt == catBreadcrumb) {
	            li.className="selectedCategory";
	        }
	    }
	}

	$scope.selectedNoCat = function(){
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

});
