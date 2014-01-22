// vide example
// http://angular.github.io/angular-phonecat/step-3/app/

var manuaisBB = angular.module('manuaisBB', []);

manuaisBB.controller('listaMenu', function ($scope) {
	
	$scope.blackboardBb = [
	{
		'manual'		: 	'O que é Blackboard',
		'linkManual'	: 	'/blackboard/sub1'
	},
	{
		'manual'		: 	'Acessar pelo computador',
		'linkManual'	: 	'/blackboard/sub2'
	},
	{
		'manual'		: 	'Acessar por dispositivos móveis',
		'linkManual'	: 	'/blackboard/sub3'
	}
	];

	$scope.BbMateriais = [
	{
		'manual'			: 	'Carregar materiais no ambiente virtual',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Compartilhar materiais com os alunos',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Alterar ou excluir um material compartilhado',
		'linkManual'		: 	'/blackboard/sub3'
	},
	{
		'manual'			: 	'Aproveitar materiais de um curso para outro',
		'linkManual'		: 	'/blackboard/sub3'
	}
	];

	$scope.BbComunicacaoInteracao = [
	{
		'manual'			: 	'Enviar avisos aos alunos',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Enviar e-mail pelo ambiente',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Criar um fórum de discussão',
		'linkManual'		: 	'/blackboard/sub3'
	},
	{
		'manual'			: 	'Criar um blog',
		'linkManual'		: 	'/blackboard/sub3'
	}
	];

	$scope.BbTrabalhos = [
	{
		'manual'			: 	'Receber trabalhos sem verificação de plágio',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Receber trabalhos com verificação de plágio',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Submeter arquivos para verificação de plágio ou criar base de comparação',
		'linkManual'		: 	'/blackboard/sub3'
	}
	];
	

});
