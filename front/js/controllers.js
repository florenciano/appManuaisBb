// vide example
// http://angular.github.io/angular-phonecat/step-3/app/

var manuaisBB = angular.module('manuaisBB', []);

manuaisBB.controller('listaMenu', function ($scope) {
	$scope.itensManual = [
	// ASSUNTO : BLACKBOARD
	{	'assunto'				: 'blackboard',
		'categoria'				: 'Quisque eleifend',
		'subCategoria'			: 'Consectetur adipiscing elit',
		'linkSubCategoria'		: '/blackboard/sub1',
		
		'subCategoria2'			: 'Mauris eu velit in felis viverra rutrum',
		'linkSubCategoria2'		: '/blackboard/sub2',
		
		'subCategoria3'			: 'Posuere leo scelerisque sit amet',
		'linkSubCategoria3'		: '/blackboard/sub3',
		
		'subCategoria4'			: 'Phasellus blandit',
		'linkSubCategoria4'		: '/blackboard/sub4',
		
		'subCategoria5'			: 'Vel porttitor mi vulputate',
		'linkSubCategoria5'		: '/blackboard/sub5'
	},
	{	'categoria'				: 'nomeCategoria',
		'subCategoria'			: 'Cras laoreet',
		'linkSubCategoria'		: '/blackboard/sub1',
		
		'subCategoria2'			: 'Purus ut metus rhoncus',
		'linkSubCategoria2'		: '/blackboard/sub2',
		
		'subCategoria3'			: 'Lacinia molestie ve3',
		'linkSubCategoria3'		: '/blackboard/sub3',
		
		'subCategoria4'			: 'Tortor non volutpa',
		'linkSubCategoria4'		: '/blackboard/sub4',
		
		'subCategoria5'			: 'Suspendisse non mattis nunc',
		'linkSubCategoria5'		: '/blackboard/sub5'
	},
	{	'categoria'				: 'Lorem ipsum dolor simet',
		'subCategoria'			: 'Aliquam molestie',
		'linkSubCategoria'		: '/blackboard/sub',

		'subCategoria2'			: 'Aliquet rutrum',
		'linkSubCategoria2'		: '/blackboard/sub2',

		'subCategoria3'			: 'velit dapibus tellus',
		'linkSubCategoria3'		: '/blackboard/sub3',

		'subCategoria4'			: 'Tortor non volutpa',
		'linkSubCategoria4'		: '/blackboard/sub4',

		'subCategoria5'			: 'Quisque egestas',
		'linkSubCategoria5'		: '/blackboard/sub5'
	},
	// ASSUNTO : CATME
	{	'assunto'				: 'catme',
		'categoria'				: 'Link da subCategoria, recomenda-se até sessenta caracteres',
		'linkSubCategoria'		: '/catme/sub',

		'subCategoria2'			: 'Curabitur ullamcorper enim id consequat porttitor',
		'linkSubCategoria2'		: '/catme/sub2',

		'subCategoria3'			: 'Sed porta',
		'linkSubCategoria3'		: '/catme/sub3'
	},
	// ASSUNTO : RUBRIC
	{	'assunto'				: 'rubric',
		'categoria'				: 'Vestibulum facilisis tincidunt odio',
		'linkSubCategoria'		: '/rubric/sub',

		'subCategoria2'			: 'Eros sit amet',
		'linkSubCategoria2'		: '/rubric/sub2',

		'subCategoria3'			: 'Ut auctor diam fringilla sed',
		'linkSubCategoria3'		: '/rubric/sub3',

		'subCategoria4'			: 'Suspendisse blandit',
		'linkSubCategoria4'		: '/rubric/sub4'
	}
	];
});

// manuaisBB.controller('navMenu', function ($scope) {

// 	setTimeout(function() {

// 		/* show and Hide the subcategories
// 	    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 		// declaration variables
// 		var expandirRecolher = $( ".exp-rec" );
// 	    var expandirTudo = $( ".expandir" );
// 	    var recolherTudo = $( ".recolher" );
// 	    var todasListas = $( "#listinha" );
	        
// 	    var linkMais = "[+]";
// 	    var linkMenos = "[-]";
// 	    var linkText = "";

// 	    // show/hide each categories
//         $scope.showHideAllCategory = function() {
//             event.preventDefault();
//             var lista = $(event.target).parent().parent().next();
//             lista.toggle(400);
            
//             // call function replace text
//             var linkText = linkMais; //[+]
//             if(linkText.innerText == linkMais) {
//                 linkText.innerText = linkMenos;
//             } else if(linkText.innerText == linkMenos) {
//                 linkText.innerText = linkMais;
//             }
//         }

// 		$scope.showHideEachCategory = function() {
// 		    /* show Each the categories */
// 	        event.preventDefault();
//             linkText.innerText = linkMais;
			
// 	        todasListas.each(function(event){
// 	            $(this).toggle(400);
// 	            if(linkText.innerText == linkMais) {
// 	                linkText.innerText = linkMenos;
// 	            } else if(linkText.innerText == linkMenos) {
// 	                linkText.innerText = linkMais;
// 	            }
// 	        });

// 	        // display Text
// 	        // expandirRecolher.each(function(){
// 	            // var linkText = linkMais; //[+]
// 	        // });
			
		
			
// 			/* hide Each the categories */
//         	// event.preventDefault();
            
//          //    todasListas.each(function(event){
//          //        $(this).hide(400);
//          //    });

//          //    expandirRecolher.each(function(){
//          //        var linkText = linkMenos; //[-]
//          //        linkText.innerText = linkMais;
//          //    });
// 		}

// 	}, 500);
	
// });