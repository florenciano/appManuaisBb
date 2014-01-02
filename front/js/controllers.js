// vide example
// http://angular.github.io/angular-phonecat/step-3/app/

var manuaisBB = angular.module('manuaisBB', []);

manuaisBB.controller('listControl', function ($scope) {
	$scope.itensManual = [
	// ASSUNTO : BLACKBOARD
	{	'assunto'				: 'blackboard',
		'categoria'				: 'Quisque eleifend',
		'subCategoria'			: 'Consectetur adipiscing elit',
		'subCategoria2'			: 'Mauris eu velit in felis viverra rutrum',
		'subCategoria3'			: 'Posuere leo scelerisque sit amet',
		'subCategoria4'			: 'Phasellus blandit',
		'subCategoria5'			: 'Vel porttitor mi vulputate'
	},
	{	'categoria'				: 'nomeCategoria',
		'subCategoria'			: 'Cras laoreet',
		'subCategoria2'			: 'Purus ut metus rhoncus',
		'subCategoria3'			: 'Lacinia molestie ve3',
		'subCategoria4'			: 'Tortor non volutpa',
		'subCategoria5'			: 'Suspendisse non mattis nunc'
	},
	{	'categoria'				: 'Lorem ipsum dolor simet',
		'subCategoria'			: 'Aliquam molestie',
		'subCategoria2'			: 'Aliquet rutrum',
		'subCategoria3'			: 'velit dapibus tellus',
		'subCategoria4'			: 'Tortor non volutpa',
		'subCategoria5'			: 'Quisque egestas'
	},
	// ASSUNTO : CATME
	{	'assunto'				: 'catme',
		'categoria'				: 'Link da subCategoria, recomenda-se até sessenta caracteres',
		'subCategoria2'			: 'Curabitur ullamcorper enim id consequat porttitor',
		'subCategoria3'			: 'Sed porta'
	},
	// ASSUNTO : RUBRIC
	{	'assunto'				: 'rubric',
		'categoria'				: 'Vestibulum facilisis tincidunt odio',
		'subCategoria2'			: 'Eros sit amet',
		'subCategoria3'			: 'Ut auctor diam fringilla sed',
		'subCategoria4'			: 'Suspendisse blandit'
	}
	];
});
