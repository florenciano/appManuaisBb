// vide example
// http://angular.github.io/angular-phonecat/step-3/app/

var manuaisBB = angular.module('manuaisBB', []);

manuaisBB.controller('listaMenu', function ($scope) {

	// Blackboard: Conhecendo o ambiente
	$scope.blackboardBb = [
	{
		'manual'		: 	'O que é Blackboard',
		'linkManual'	: 	'/href/sub1'
	},
	{
		'manual'		: 	'Acessar pelo computador',
		'linkManual'	: 	'/href/sub2'
	},
	{
		'manual'		: 	'Acessar por dispositivos móveis',
		'linkManual'	: 	'/href/sub3'
	}
	];

	// Blackboard: Materiais
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

	// Blackboard: Comunicação e Interação
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

	// Blackboard: Trabalhos
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

	// Blackboard: Grupos
	$scope.BbGrupos = [
	{
		'manual'			: 	'Criar Grupos',
		'linkManual'		: 	'/blackboard/sub1'
	}
	];

	// Blackboard: Testes e Pesquisas
	$scope.BbTestesPesquisas = [
	{
		'manual'			: 	'Criar ou alterar testes (com nota)',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Criar ou alterar pesquisas (sem nota)',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Conhecer os tipos de pergunta dos testes e pesquisas',
		'linkManual'		: 	'/blackboard/sub3'
	},
	{
		'manual'			: 	'Importar testes e pesquisas do Word',
		'linkManual'		: 	'/blackboard/sub3'
	}
	];

	// Blackboard: Rubrics
	$scope.BbRubrics = [
	{
		'manual'			: 	'Criar uma Rubric',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Associar Rubric a atividades',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Associar Rubric a colunas na Central de Notas',
		'linkManual'		: 	'/blackboard/sub3'
	}
	];

	// Blackboard: Avaliação
	$scope.BbAvaliacao = [
	{
		'manual'			: 	'Configurar a Central de Notas',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Dar nota a atividades feitas fora do ambiente',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Calcular a média do aluno',
		'linkManual'		: 	'/blackboard/sub3'
	},
	{
		'manual'			: 	'Corrigir trabalhos sem verificação de plágio',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Corrigir trabalhos com verificação de plágio',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Corrigir com Rubric',
		'linkManual'		: 	'/blackboard/sub3'
	},
	{
		'manual'			: 	'Consultar as faltas dos alunos',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Exportar as notas para o sistema acadêmico',
		'linkManual'		: 	'/blackboard/sub3'
	}
	];

	// Blackboard: calendário
	$scope.BbCalendario = [
	{
		'manual'			: 	'Criar e visualizar eventos',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Sincronizar com e-mail pessoal',
		'linkManual'		: 	'/blackboard/sub2'
	}
	];

	// Catme: sobre a ferramenta
	$scope.catmeSobreFerramenta = [
	{
		'manual'			: 	'O que é Catme',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Funcionamento do Catme',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Criar conta',
		'linkManual'		: 	'/blackboard/sub2'
	}
	];

	// Catme: Aplicar uma pesquisa de avaliação
	$scope.catmeAplicarPesquisaAval = [
	{
		'manual'			: 	'Preparar listagem de alunos',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Criar classe',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Criar pesquisa de avaliação',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Editar informações',
		'linkManual'		: 	'/blackboard/sub2'
	}
	];

	// Catme: Analisar os resultados
	$scope.catmeAnalisarResultados = [
	{
		'manual'			: 	'Acessar resultados de uma avaliação existente',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Trabalhar resultados no Excel',
		'linkManual'		: 	'/blackboard/sub2'
	}
	];

	// Clickers
	$scope.clickers = [
	{
		'manual'			: 	'Informações do software',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Informações do hardware',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Votadores eletrônicos (clickers): Utilização',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Como utilizar',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Criar pergunta',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Criar lista',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Salvar sessão',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Gerar e acessar relatórios',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Controle dos aparelhos',
		'linkManual'		: 	'/blackboard/sub2'
	}
	];

	// Casos
	$scope.casos = [
	{
		'manual'			: 	'Sobre os casos',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Cadastrar-se em base de dados',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Consultar casos disponíveis',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Solicitar casos pelo CUCA',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Disponibilizar link aos alunos',
		'linkManual'		: 	'/blackboard/sub1'
	}
	];

	// Simuladores
	$scope.simuladores = [
	{
		'manual'			: 	'Conhecer simuladores',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Solicitar simulador',
		'linkManual'		: 	'/blackboard/sub2'
	},
	{
		'manual'			: 	'Disponibilizar link aos alunos',
		'linkManual'		: 	'/blackboard/sub1'
	}
	];

	// Cursos online
	$scope.cursosOnline = [
	{
		'manual'			: 	'Acessar',
		'linkManual'		: 	'/blackboard/sub1'
	},
	{
		'manual'			: 	'Gerenciar',
		'linkManual'		: 	'/blackboard/sub2'
	}
	];
});
