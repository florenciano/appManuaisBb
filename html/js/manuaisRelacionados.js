/* ===============================================================
	
	MATRIZ DOS MANUAIS RELACIONADOS

   	Este documento é responsável por alimentar a lista dos
   	'Manuais relacionados' de cada manual.

   	Local do arquivo base:
   	U:\TAI\Projetos\Projetos 2014\Reformulacao_manuais\Professor\DI\Para_Producao

   	Nome:
   	Blackboard_Sintaxe_Relacao_Manuais_Prof_vf

   	Nomes das classe:
   	1- blackboard
   	2- catme
   	3- clickers
   	4- casos
   	5- simuladores
   	6- cursosOnline

================================================================== */

manuaisBB.controller("manuaisRelacionados", function ($scope) { 
	
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: BLACKBOARD
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Conhecer o ambiente
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	
	// "O que é Blackboard"
	$scope.O_que_e_Blackboard = 
	[
	{	"manual"	: 	"Acessar pelo computador",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/conhecendo-o-ambiente/acessar-pelo-computador/",
		"tipoIcone"	: 	"blackboard"
	},
	{	
		"manual"	: 	"Acessar por dispositivos móveis",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/conhecendo-o-ambiente/acessar-por-dispositivos-moveis/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Acessar pelo computador"
	$scope.Acessar_pelo_computador = 
	[
	{
		"manual"	: 	"Acessar por dispositivos móveis",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/conhecendo-o-ambiente/acessar-por-dispositivos-moveis/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Acessar por dispositivos móveis"
	$scope.Acessar_por_dispositivos_moveis = 
	[
	{
		"manual"	: 	"Acessar pelo computador",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/conhecendo-o-ambiente/acessar-pelo-computador/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// CATEGORIA: Materiais
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Carregar materiais no ambiente virtual"
	$scope.Carregar_materiais_no_ambiente_virtual = 
	[
	{
		"manual"	: 	"Compartilhar materiais com os alunos",
		"Link" 		:  	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/compartilhar-materiais-com-os-alunos/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Alterar ou excluir um material compartilhado", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/alterar-ou-excluir-um-material-compartilhado/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Aproveitar materiais de um curso para outro", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/aproveitar-materiais-de-um-curso-para-outro/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Compartilhar materiais com os alunos"
	$scope.Compartilhar_materiais_com_os_alunos = 
	[
	{
		"manual"	: 	"Carregar materiais no ambiente virtual",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/carregar-materiais-no-ambiente-virtual/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Alterar ou excluir um material compartilhado",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/alterar-ou-excluir-um-material-compartilhado/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Aproveitar materiais de um curso para outro",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/aproveitar-materiais-de-um-curso-para-outro/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Alterar ou excluir um material compartilhado"
	$scope.Alterar_ou_excluir_um_material_compartilhado = 
	[
	{
		"manual"	: 	"Carregar materiais no ambiente virtual",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/carregar-materiais-no-ambiente-virtual/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Compartilhar materiais com os alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/compartilhar-materiais-com-os-alunos/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Aproveitar materiais de um curso para outro",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/aproveitar-materiais-de-um-curso-para-outro/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Aproveitar materiais de um curso para outro"
	$scope.Aproveitar_materiais_de_um_curso_para_outro = 
	[
	{
		"manual"	: 	"Carregar materiais no ambiente virtual",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/carregar-materiais-no-ambiente-virtual/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Compartilhar materiais com os alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/compartilhar-materiais-com-os-alunos/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Alterar ou excluir um material compartilhado",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/alterar-ou-excluir-um-material-compartilhado/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// CATEGORIA: Comunicação e interação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Enviar avisos aos alunos"
	$scope.Enviar_avisos_aos_alunos = 
	[
	{
		"manual"	: 	"Enviar e-mail pelo ambiente",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/enviar-email-pelo-ambiente/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Enviar e-mail pelo ambiente"
	$scope.Enviar_eMail_pelo_ambiente = 
	[
	{
		"manual"	: 	"Enviar avisos aos alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/enviar-avisos-aos-alunos/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Planejar uma discussão via fórum"
	$scope.Planejar_discussao_via_forum = 
	[
	{
		"manual"	: 	"Criar um fórum de discussão",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-um-forum-de-discussao/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Avaliar fórum de discussão", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/avaliar-forum-de-discussao/",
		"tipoIcone"	: 	"blackboard"
	},
	{

		"manual"	: 	"Exemplos de dinâmicas – atividades colaborativas",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/exemplos-dinamicas/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Criar um fórum de discussão"
	$scope.Criar_forum_de_discussao = 
	[
	{
		"manual"	: 	"Avaliar fórum de discussão", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/avaliar-forum-de-discussao/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar blog",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-um-blog/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Exemplos de dinâmicas – atividades colaborativas",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/exemplos-dinamicas/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Criar um blog"
	$scope.Criar_blog = 
	[
	{
		"manual"	: 	"Avaliar blog",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/avaliar-blog/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar diário",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-diario/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar um fórum de discussão",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-um-forum-de-discussao/",
		"tipoIcone"	: 	"blackboard"
	},
	{

		"manual"	: 	"Exemplos de dinâmicas – atividades colaborativas",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/exemplos-dinamicas/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Criar diário"
	$scope.Criar_diario = 
	[
	{
		"manual"	: 	"Avaliar diário",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/avaliar-diario/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar blog",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-um-blog/",
		"tipoIcone"	: 	"blackboard"
	}
	];


	// "Criar wiki"
	$scope.Criar_wiki = 
	[
	{
		"manual"	: 	"Avaliar wiki",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/avaliar-wiki/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Exemplos de dinâmicas – atividades colaborativas",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/exemplos-dinamicas/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// Exemplos de dinâmicas - atividades colaborativas
	$scope.Exemplos_dinamicas = 
	[
	{
		"manual"	: 	"Criar um fórum de discussão",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-um-forum-de-discussao/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar blog",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-um-blog/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar wiki",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-wiki/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// CATEGORIA: Trabalhos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Receber trabalhos sem verificação de plágio (exercicício)"
	$scope.Receber_trabalhos_sem_verificacao_de_plagio = 
	[
	{
		"manual"	: 	"Corrigir trabalhos sem verificação de plágio (Exercício)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/corrigir-trabalhos-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Receber trabalhos com verificação de plágio (SafeAssignment)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-com-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Receber trabalhos com verificação de plágio (SafeAssignment)"
	$scope.Receber_trabalhos_com_verificacao_de_plagio = 
	[
	{
		"manual"	: 	"Corrigir trabalhos com verificação de plágio (SafeAssignment)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/corrigir-trabalhos-com-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Submeter arquivos para verificação de plágio ou criar base de comparação (SafeAssign)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/submeter-arquivos-para-verificacao-de-plagio-ou-criar-base-de-comparacao/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Receber trabalhos sem verificação de plágio (Exercício)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Receber trabalhos com ou sem verificação de plágio (Exercício)"
	$scope.Receber_trabalhos_com_e_sem_verificacao_de_plagio = 
	[
	{
		"manual"	: 	"Corrigir trabalhos com ou sem verificação de plágio (Exercício)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/corrigir-trabalhos-com-ou-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Submeter arquivos para verificação de plágio ou criar base de comparação (SafeAssign)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/submeter-arquivos-para-verificacao-de-plagio-ou-criar-base-de-comparacao/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar ou alterar grupos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/grupos/criar-alterar-grupos/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Submeter arquivos para verificação de plágio ou criar base de comparação"
	$scope.Submeter_arquivos_para_verificacao_de_plagio_ou_criar_base_de_comparacao = 
	[
	{	"manual"	: 	"Receber trabalhos com ou sem verificação de plágio (Exercício)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-com-ou-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Receber trabalhos para autoavaliação e avaliação de colegas"
	// $scope.Receber_trabalhos_para_autoavaliacao_e_avaliacao_de_colegas = 
	// [
	
	// ];

	// CATEGORIA: Grupos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Criar Grupos"
	$scope.Criar_Grupos = 
	[
	{
		"manual"	: 	"Receber trabalhos com ou sem verificação de plágio (Exercício)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-com-ou-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Criar ou alterrar Grupos"
	$scope.Criar_Alterar_Grupos = 
	[
	{
		"manual"	: 	"Receber trabalhos com ou sem verificação de plágio (Exercício)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-com-ou-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Corrigir trabalhos com ou sem verificação de plágio (Exercício)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/corrigir-trabalhos-com-ou-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Enviar e-mail pelo ambiente",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/enviar-email-pelo-ambiente/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// CATEGORIA: Testes e pesquisas
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Criar ou alterar testes (com nota)"
	$scope.Criar_ou_alterar_testes = 
	[
	{
		"manual"	: 	"Criar ou alterar pesquisas (sem nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-pesquisas-sem-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Conhecer os tipos de pergunta dos testes e pesquisas", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/conhecer-os-tipos-de-pergunta-dos-testes-e-pesquisas/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Gerar relatórios de testes", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/gerar-relatorios-de-testes/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Criar ou alterar pesquisas (sem nota)"
	$scope.Criar_ou_alterar_pesquisas = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Conhecer os tipos de pergunta dos testes e pesquisas", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/conhecer-os-tipos-de-pergunta-dos-testes-e-pesquisas/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Conhecer os tipos de pergunta dos testes e pesquisas"
	$scope.Conhecer_os_tipos_de_pergunta_dos_testes_e_pesquisas = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar ou alterar pesquisas (sem nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-pesquisas-sem-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Gerar relatórios de testes", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/gerar-relatorios-de-testes/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Importar testes e pesquisas do Word"
	$scope.Importar_testes_e_pesquisas_do_Word = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar ou alterar pesquisas (sem nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-pesquisas-sem-nota/",
		"tipoIcone"	: 	"blackboard"
	}
	// {
	// 	"manual"	: 	"Importar testes e pesquisas do Word", 
	// 	"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/",
	// 	"tipoIcone"	: 	"blackboard"
	// }
	];

	// "Copiar testes e pesquisas para outra disciplina"
	$scope.Copiar_testes_pesquisas = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar ou alterar pesquisas (sem nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-pesquisas-sem-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Conhecer os tipos de pergunta dos testes e pesquisas", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/conhecer-os-tipos-de-pergunta-dos-testes-e-pesquisas/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Gerar relatórios de testes", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/gerar-relatorios-de-testes/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Boas práticas", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/boas-praticas/",
		"tipoIcone"	: 	"blackboard"
	},

	];

	// "Gerar relatórios de testes"
	$scope.Gerar_relatorios_de_testes = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Conhecer os tipos de pergunta dos testes e pesquisas", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/conhecer-os-tipos-de-pergunta-dos-testes-e-pesquisas/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Gerar relatórios de testes"
	$scope.Boas_praticas = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar ou alterar pesquisas (sem nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-pesquisas-sem-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Conhecer os tipos de pergunta dos testes e pesquisas", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/conhecer-os-tipos-de-pergunta-dos-testes-e-pesquisas/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Copiar testes e pesquisas para outra disciplina", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/copiar-testes-e-pesquisas/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Gerar relatórios de testes", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/gerar-relatorios-de-testes/",
		"tipoIcone"	: 	"blackboard"
	},
	];

	// CATEGORIA: Rubric
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Criar uma Rubric"
	$scope.Criar_Rubric = 
	[
	{
		"manual"	: 	"Associar Rubric a atividades",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/rubrics/associar-rubric-a-atividades/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Associar Rubric a colunas na Central de Notas",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/rubrics/associar-rubric-a-colunas-na-central-de-notas/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Corrigir com Rubric",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/rubrics/criar-uma-rubric/corrigir-com-rubric/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Associar Rubric a atividades"
	$scope.Associar_Rubric_a_atividades = 
	[
	{
		"manual"	: 	"Associar Rubric a colunas na Central de Notas", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/rubrics/associar-rubric-a-colunas-na-central-de-notas/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Associar Rubric a colunas na Central de Notas"
	$scope.Associar_Rubric_a_colunas_na_Central_de_Notas = 
	[
	{
		"manual"	: 	"Corrigir com Rubric", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/corrigir-com-rubric/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// CATEGORIA: Avaliação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Configurar a Central de Notas"
	$scope.Configurar_a_Central_de_Notas = 
	[
	{
		"manual"		: 	"Calcular a média do aluno",
		"Link" 			: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/calcular-a-media-do-aluno/",
		"tipoIcone"		: 	"blackboard"
	},
	{
		"manual"		: 	"Exportar as notas para o sistema acadêmico",
		"Link" 			: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/exportar-as-notas-para-o-sistema-academico/",
		"tipoIcone"		: 	"blackboard"
	}
	];

	// "Dar nota a atividades feitas fora do ambiente"
	$scope.Dar_nota_a_atividades_feitas_fora_do_ambiente = 
	[
	];

	// "Calcular a média do aluno"
	$scope.Calcular_a_media_do_aluno = 
	[
	{
		"manual"	: 	"Exportar as notas para o sistema acadêmico",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/exportar-as-notas-para-o-sistema-academico/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Corrigir trabalhos sem verificação de plágio (Exercício)"
	$scope.Corrigir_trabalhos_sem_verificacao_de_plagio = 
	[
	{
		"manual"	: 	"Receber trabalhos sem verificação de plágio (Exercício)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Corrigir trabalhos com verificação de plágio (SafeAssignment)"
	$scope.Corrigir_trabalhos_com_verificacao_de_plagio = 
	[
	{
		"manual"	: 	"Receber trabalhos com ou sem verificação de plágio (Exercício)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-com-ou-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Corrigir trabalhos com e sem verificação de plágio (Exercício)"
	$scope.Corrigir_trabalhos_com_e_sem_verificacao_de_plagio = 
	[
	{
		"manual"	: 	"Receber trabalhos com ou sem verificação de plágio (Exercício)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-com-ou-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Avaliar fórum de discussão"
	$scope.Avaliar_forum_de_discussao = 
	[
	{
		"manual"	: 	"Criar fórum de discussão", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-um-forum-de-discussao/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Avaliar blog"
	$scope.Avaliar_blog = 
	[
	{
		"manual"	: 	"Criar blog", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-um-blog/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Avaliar diário"
	$scope.Avaliar_diario = 
	[
	{
		"manual"	: 	"Criar diário", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-diario/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Avaliar wiki"
	$scope.Avaliar_wiki = 
	[
	{
		"manual"	: 	"Criar wiki", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-wiki/",
		"tipoIcone"	: 	"blackboard"
	}
	];


	// "Corrigir com Rubric"
	$scope.Corrigir_com_Rubric = 
	[
	{
		"manual" 	: 	"Criar Rubric",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/rubrics/criar-uma-rubric/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Associar Rubric a atividades",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/rubrics/associar-rubric-a-atividades/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Associar Rubric a colunas na Central de Notas",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/rubrics/associar-rubric-a-colunas-na-central-de-notas/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Exportar as notas para o sistema acadêmico"
	$scope.Exportar_as_notas_para_o_sistema_academico = 
	[
	{
		"manual" 	: 	"Calcular a média do aluno",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/calcular-a-media-do-aluno/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Configurar a Central de Notas",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/configurar-a-central-de-notas/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Avaliar monografia da graduação"
	$scope.Avaliar_monografia_grad = 
	[
	{
		"manual"	: 	"Corrigir com Rubric",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/corrigir-com-rubric/",
		"tipoIcone"	: 	"blackboard"
	}
	];
	
	// CATEGORIA: Geral
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbGeral = 
	[
	{
		"manual" 	: 	"Criar grupos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/grupos/criar-alterar-grupos/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Disponibilizar links de casos, simuladores e cursos online aos alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/utilizar-recursos/#disponibilizar-links",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// Padronização dos ambientes online da
	$scope.BbGeral_Padronizacao_PGLS = 
	[
	{
		"manual" 	: 	"Carregar materiais no ambiente virtual",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/carregar-materiais-no-ambiente-virtual/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Compartilhar materiais com os alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/compartilhar-materiais-com-os-alunos/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Alterar ou excluir um material compartilhado",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/alterar-ou-excluir-um-material-compartilhado/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Aproveitar materiais de um curso para outro",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/aproveitar-materiais-de-um-curso-para-outro/",
		"tipoIcone"	: 	"blackboard"
	}
	];


	// CATEGORIA: Calendário
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Criar e visualizar eventos"
	$scope.Criar_e_visualizar_eventos = 
	[
	{
		"manual" 	: 	"Sincronizar com e-mail pessoal",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/calendario/sincronizar-com-email-pessoal/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Sincronizar com e-mail pessoal"
	$scope.Sincronizar_com_eMail_pessoal = 
	[
	{
		"manual" 	: 	"Criar e visualizar eventos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/calendario/criar-e-visualizar-eventos/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// CATEGORIA: Melhorias no Blackboard
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Criar e visualizar eventos"
	$scope.MelhoriasBb = 
	[
	{
		"manual" 	: 	"Receber trabalhos com ou sem verificação de plágio",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-com-ou-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Criar ou alterar grupos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/grupos/criar-alterar-grupos/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Simular como os alunos visualizam o ambiente",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/geral/simular-como-alunos-visualizam-o-ambiente/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: DIARIO DE CLASSE
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Informações
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.DiarioClasse_sobreInformacoes= 
	[
	{
		"manual" 	: 	"Sobre o Sistema",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Gestao-registro-disciplinas/sistema/sobre-sistema/",
		"tipoIcone"	: 	"diarioClasse"
	}
	];

	// CATEGORIA: Sistema
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.DiarioClasse_sobreSistema= 
	[
	{
		"manual" 	: 	"Informações sobre ementário, plano de ensino e plano de aula (PGLS)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Gestao-registro-disciplinas/informacoes/informacoes-sobre-ementario/",
		"tipoIcone"	: 	"diarioClasse"
	}
	];


	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CATME
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Sobre a ferramenta
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Sobre a ferramenta"
	$scope.Sobre_a_ferramenta = 
	[
	{
		"manual"	: 	"Aplicar uma pesquisa de avaliação",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/aplicar-uma-pesquisa-de-avaliacao/",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Analisar os resultados",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/analisar-os-resultados/",
		"tipoIcone"	: 	"catme"
	}
	];


	// CATEGORIA: Aplicar uma pesquisa de avaliação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Aplicar uma pesquisa de avaliação"
	$scope.Aplicar_uma_pesquisa_de_avaliacao = 
	[
	{
		"manual"	: 	"Sobre a ferramenta", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/sobre-a-ferramenta/",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Analisar os resultados", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/analisar-os-resultados/",
		"tipoIcone"	: 	"catme"
	}
	];

	// CATEGORIA: Analisar os resultados
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Analisar os resultados"
	$scope.Analisar_os_resultados = 
	[
	{
		"manual" 	: 	"Sobre a ferramenta",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/sobre-a-ferramenta/",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual" 	: 	"Aplicar uma pesquisa de avaliação",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/aplicar-uma-pesquisa-de-avaliacao/",
		"tipoIcone"	: 	"catme"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: VOTADORES ELETRÔNICOS (CLICKERS)
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Sobre a ferramenta
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.Sobre_a_ferramenta_clickers = 
	[
	{
		"manual"	: 	"Utilizar votadores eletrônicos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/utilizar-votadores-eletronicos/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Preparar slides",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/preparar-slides/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Identificar os votos dos alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/identificar-votos-alunos/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Promover votação em sala",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Analisar os resultados",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/analisar-resultados/",
		"tipoIcone"	: 	"clickers"
	}
	];

	// CATEGORIA: Utilizar votadores eletrônicos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.Utilizar_votadores_eletronicos = 
	[
	{
		"manual"	: 	"Promover votação eletrônica em sala de aula",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Preparar slides",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/preparar-slides/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Identificar os votos dos alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/identificar-votos-alunos/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Promover votação em sala",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Analisar os resultados",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/analisar-resultados/",
		"tipoIcone"	: 	"clickers"
	}
	];

	// CATEGORIA: Preparar slides
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.Preparar_slides = 
	[
	{
		"manual"	: 	"Promover votação eletrônica em sala de aula",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Utilizar votadores eletrônicos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/utilizar-votadores-eletronicos/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Identificar os votos dos alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/identificar-votos-alunos/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Promover votação em sala",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Analisar os resultados",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/analisar-resultados/",
		"tipoIcone"	: 	"clickers"
	}
	];

	// CATEGORIA: Identificar os votos dos alunos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.Identificar_votos_alunos = 
	[
	{
		"manual"	: 	"Promover votação eletrônica em sala de aula",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Utilizar votadores eletrônicos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/utilizar-votadores-eletronicos/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Preparar slides",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/preparar-slides/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Promover votação em sala",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Analisar os resultados",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/analisar-resultados/",
		"tipoIcone"	: 	"clickers"
	}
	];

	// CATEGORIA: Promover votação em sala
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.Promover_votacao_sala = 
	[
	{
		"manual"	: 	"Promover votação eletrônica em sala de aula",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Utilizar votadores eletrônicos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/utilizar-votadores-eletronicos/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Preparar slides",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/preparar-slides/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Identificar os votos dos alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/identificar-votos-alunos/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Analisar os resultados",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/analisar-resultados/",
		"tipoIcone"	: 	"clickers"
	}
	];

	// CATEGORIA: Analisar resultados
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.Analisar_os_resultados_clickers = 
	[
	{
		"manual"	: 	"Promover votação eletrônica em sala de aula",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Utilizar votadores eletrônicos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/utilizar-votadores-eletronicos/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Preparar slides",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/preparar-slides/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Identificar os votos dos alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/identificar-votos-alunos/",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Promover votação em sala",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/",
		"tipoIcone"	: 	"clickers"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CASOS, SIMULADORES E CURSOS ONLINE
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Sobre os recursos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.sobre_os_Recursos = 
	[
	{
		"manual"	: 	"Utilizar recursos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/utilizar-recursos/",
		"tipoIcone"	: 	"cursosOnline"
	},
	{
		"manual"	: 	"Consultar recursos disponíveis",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/consultar-recursos-disponiveis/",
		"tipoIcone"	: 	"cursosOnline"
	}
	];

	// CATEGORIA: Consultar recursos disponíveis
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.consultar_recursos_disponiveis = 
	[
	{
		"manual"	: 	"Sobre os recursos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/sobre-recursos/",
		"tipoIcone"	: 	"cursosOnline"
	},
	{
		"manual"	: 	"Utilizar recursos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/utilizar-recursos/",
		"tipoIcone"	: 	"cursosOnline"
	}
	];

	// CATEGORIA: Utilizar recursos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.utilizar_recursos = 
	[
	{
		"manual"	: 	"Sobre os recursos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/sobre-recursos/",
		"tipoIcone"	: 	"cursosOnline"
	},
	{
		"manual"	: 	"Consultar recursos disponíveis",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/consultar-recursos-disponiveis/",
		"tipoIcone"	: 	"cursosOnline"
	},
	{

		"manual"	: 	"Restringir visualização de materiais ou atividades a público específico",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/geral/restringir-visualizacao-de-materiais/",
		"tipoIcone"	: 	"blackboard"
	}
	];
	
});