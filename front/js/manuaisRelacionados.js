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
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/conhecendo-o-ambiente/acessar-pelo-computador/",
		"tipoIcone"	: 	"blackboard"
	},
	{	
		"manual"	: 	"Acessar por dispositivos móveis",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/conhecendo-o-ambiente/acessar-por-dispositivos-moveis/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Acessar pelo computador"
	$scope.Acessar_pelo_computador = 
	[
	{
		"manual"	: 	"Acessar por dispositivos móveis",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/conhecendo-o-ambiente/acessar-por-dispositivos-moveis/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Acessar por dispositivos móveis"
	$scope.Acessar_por_dispositivos_moveis = 
	[
	{
		"manual"	: 	"Acessar pelo computador",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/conhecendo-o-ambiente/acessar-pelo-computador/",
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
		"Link" 		:  	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/compartilhar-materiais-com-os-alunos/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Alterar ou excluir um material compartilhado", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/alterar-ou-excluir-um-material-compartilhado/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Aproveitar materiais de um curso para outro", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/aproveitar-materiais-de-um-curso-para-outro/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Compartilhar materiais com os alunos"
	$scope.Compartilhar_materiais_com_os_alunos = 
	[
	{
		"manual"	: 	"Carregar materiais no ambiente virtual",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/carregar-materiais-no-ambiente-virtual/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Alterar ou excluir um material compartilhado",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/alterar-ou-excluir-um-material-compartilhado/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Aproveitar materiais de um curso para outro",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/aproveitar-materiais-de-um-curso-para-outro/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Alterar ou excluir um material compartilhado"
	$scope.Alterar_ou_excluir_um_material_compartilhado = 
	[
	{
		"manual"	: 	"Carregar materiais no ambiente virtual",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/carregar-materiais-no-ambiente-virtual/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Compartilhar materiais com os alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/compartilhar-materiais-com-os-alunos/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Aproveitar materiais de um curso para outro",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/aproveitar-materiais-de-um-curso-para-outro/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Aproveitar materiais de um curso para outro"
	$scope.Aproveitar_materiais_de_um_curso_para_outro = 
	[
	{
		"manual"	: 	"Carregar materiais no ambiente virtual",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/carregar-materiais-no-ambiente-virtual/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Compartilhar materiais com os alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/compartilhar-materiais-com-os-alunos/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Alterar ou excluir um material compartilhado",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/materiais/alterar-ou-excluir-um-material-compartilhado/",
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
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/comunicacao-e-interacao/enviar-email-pelo-ambiente/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Enviar e-mail pelo ambiente"
	$scope.Enviar_eMail_pelo_ambiente = 
	[
	{
		"manual"	: 	"Enviar avisos aos alunos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/comunicacao-e-interacao/enviar-avisos-aos-alunos/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Criar um fórum de discussão"
	$scope.Criar_forum_de_discussao = 
	[
	{
		"manual"	: 	"Avaliar fórum de discussão", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/avaliar-forum-de-discussao/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar blog",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/comunicacao-e-interacao/criar-um-blog/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Criar um blog"
	$scope.Criar_blog = 
	[
	{
		"manual"	: 	"Avaliar blog",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/avaliar-blog/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar diário",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/comunicacao-e-interacao/criar-diario/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar um fórum de discussão",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/comunicacao-e-interacao/criar-um-forum-de-discussao/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Criar diário"
	$scope.Criar_diário = 
	[
	{
		"manual"	: 	"Avaliar diário",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/avaliar-diario/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar blog",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/comunicacao-e-interacao/criar-um-blog/",
		"tipoIcone"	: 	"blackboard"
	}
	];


	// "Criar wiki"
	$scope.Criar_wiki = 
	[
	{
		"manual"	: 	"Avaliar wiki",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/avaliar-wiki/",
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
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/corrigir-trabalhos-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Receber trabalhos com verificação de plágio (SafeAssignment)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/trabalhos/receber-trabalhos-com-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Receber trabalhos com verificação de plágio (SafeAssignment)"
	$scope.Receber_trabalhos_com_verificacao_de_plagio = 
	[
	{
		"manual"	: 	"Corrigir trabalhos com verificação de plágio (SafeAssignment)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/corrigir-trabalhos-com-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Receber trabalhos com verificação de plágio (SafeAssignment)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/trabalhos/receber-trabalhos-com-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Receber trabalhos sem verificação de plágio (Exercício)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/trabalhos/receber-trabalhos-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Submeter arquivos para verificação de plágio ou criar base de comparação"
	$scope.Submeter_arquivos_para_verificacao_de_plagio_ou_criar_base_de_comparacao = 
	[
	{	"manual"	: 	"Receber trabalhos com verificação de plágio (SafeAssignment)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/trabalhos/receber-trabalhos-com-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	},
	{	"manual"	: 	"Corrigir trabalhos com verificação de plágio (SafeAssignment)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/corrigir-trabalhos-com-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// CATEGORIA: Grupos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Criar Grupos"
	$scope.Criar_Grupos = 
	[
	{
		"manual"	: 	"Receber trabalhos sem verificação de plágio (Exercício)",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/trabalhos/receber-trabalhos-sem-verificacao-de-plagio/",
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
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/criar-ou-alterar-pesquisas-sem-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Conhecer os tipos de pergunta dos testes e pesquisas", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/conhecer-os-tipos-de-pergunta-dos-testes-e-pesquisas/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Criar ou alterar pesquisas (sem nota)"
	$scope.Criar_ou_alterar_pesquisas = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Conhecer os tipos de pergunta dos testes e pesquisas", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/conhecer-os-tipos-de-pergunta-dos-testes-e-pesquisas/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Conhecer os tipos de pergunta dos testes e pesquisas"
	$scope.Conhecer_os_tipos_de_pergunta_dos_testes_e_pesquisas = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar ou alterar pesquisas (sem nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/criar-ou-alterar-pesquisas-sem-nota/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Importar testes e pesquisas do Word"
	$scope.Importar_testes_e_pesquisas_do_Word = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Criar ou alterar pesquisas (sem nota)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/criar-ou-alterar-pesquisas-sem-nota/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// CATEGORIA: Rubric
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Criar uma Rubric"
	$scope.Criar_Rubric = 
	[
	{
		"manual"	: 	"Associar Rubric a atividades",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/rubrics/associar-rubric-a-atividades/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Associar Rubric a colunas na Central de Notas",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/rubrics/associar-rubric-a-colunas-na-central-de-notas/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual"	: 	"Corrigir com Rubric",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/rubrics/criar-uma-rubric/corrigir-com-rubric/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Associar Rubric a atividades"
	$scope.Associar_Rubric_a_atividades = 
	[
	{
		"manual"	: 	"Associar Rubric a colunas na Central de Notas", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/rubrics/associar-rubric-a-colunas-na-central-de-notas/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Associar Rubric a colunas na Central de Notas"
	$scope.Associar_Rubric_a_colunas_na_Central_de_Notas = 
	[
	{
		"manual"	: 	"Corrigir com Rubric", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/corrigir-com-rubric/",
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
		"Link" 			: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/calcular-a-media-do-aluno/",
		"tipoIcone"		: 	"blackboard"
	},
	{
		"manual"		: 	"Exportar as notas para o sistema acadêmico",
		"Link" 			: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/exportar-as-notas-para-o-sistema-academico/",
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
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/exportar-as-notas-para-o-sistema-academico/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Corrigir trabalhos sem verificação de plágio (Exercício)"
	$scope.Corrigir_trabalhos_sem_verificacao_de_plagio = 
	[
	{
		"manual"	: 	"Receber trabalhos sem verificação de plágio (Exercício)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/trabalhos/receber-trabalhos-sem-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Corrigir trabalhos com verificação de plágio (SafeAssignment)"
	$scope.Corrigir_trabalhos_com_verificacao_de_plagio = 
	[
	{
		"manual"	: 	"Receber trabalhos com verificação de plágio (SafeAssignment)", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/trabalhos/receber-trabalhos-com-verificacao-de-plagio/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Avaliar fórum de discussão"
	$scope.Avaliar_forum_de_discussao = 
	[
	{
		"manual"	: 	"Criar fórum de discussão", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/comunicacao-e-interacao/criar-um-forum-de-discussao/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Avaliar blog"
	$scope.Avaliar_blog = 
	[
	{
		"manual"	: 	"Criar blog", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/comunicacao-e-interacao/criar-um-blog/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Avaliar diário"
	$scope.diário = 
	[
	{
		"manual"	: 	"Criar diário", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/comunicacao-e-interacao/criar-diario/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Avaliar wiki"
	$scope.Avaliar_wiki = 
	[
	{
		"manual"	: 	"Criar wiki", 
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/comunicacao-e-interacao/criar-wiki/",
		"tipoIcone"	: 	"blackboard"
	}
	];


	// "Corrigir com Rubric"
	$scope.Corrigir_com_Rubric = 
	[
	{
		"manual" 	: 	"Criar Rubric",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/rubrics/criar-uma-rubric/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Associar Rubric a atividades",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/rubrics/associar-rubric-a-atividades/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Associar Rubric a colunas na Central de Notas",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/rubrics/associar-rubric-a-colunas-na-central-de-notas/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Exportar as notas para o sistema acadêmico"
	$scope.Exportar_as_notas_para_o_sistema_academico = 
	[
	{
		"manual" 	: 	"Calcular a média do aluno",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/calcular-a-media-do-aluno/",
		"tipoIcone"	: 	"blackboard"
	},
	{
		"manual" 	: 	"Configurar a Central de Notas",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/avaliacao/configurar-a-central-de-notas/",
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
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/calendario/sincronizar-com-email-pessoal/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	// "Sincronizar com e-mail pessoal"
	$scope.Sincronizar_com_eMail_pessoal = 
	[
	{
		"manual" 	: 	"Criar e visualizar eventos",
		"Link" 		: 	"https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/Blackboard/calendario/criar-e-visualizar-eventos/",
		"tipoIcone"	: 	"blackboard"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CATME
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Sobre a ferramenta
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "O que é Catme"
	$scope.O_que_é_Catme = 
	[
	{
		"manual"	: 	"Funcionamento do Catme",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Criar conta",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	}
	];

	// "Funcionamento do Catme"
	$scope.Funcionamento_do_Catme = 
	[
	{
		"manual"	: 	"O que é Catme",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Criar conta",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	}
	];

	// "Criar conta"
	$scope.Criar_conta = 
	[
	{
		"manual"	: 	"O que é Catme",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Funcionamento do Catme",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	}
	];

	// CATEGORIA: Aplicar uma pesquisa de avaliação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Preparar listagem de alunos"
	$scope.Preparar_listagem_de_alunos = 
	[
	{
		"manual"	: 	"Criar classe", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Criar pesquisa de avaliação", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Editar informações", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	}
	];

	// "Criar classe"
	$scope.Criar_classe = 
	[
	{
		"manual"	: 	"Preparar listagem de alunos", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Criar pesquisa de avaliação", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Editar informações", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	}
	];

	// "Criar pesquisa de avaliação"
	$scope.Criar_pesquisa_de_avaliação = 
	[
	{
		"manual"	: 	"Preparar listagem de alunos", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Criar classe", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Editar informações", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	}
	];

	// "Editar informações"
	$scope.Editar_informações = 
	[
	{
		"manual"	: 	"Preparar listagem de alunos", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Criar classe", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	},
	{
		"manual"	: 	"Criar pesquisa de avaliação", 
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	}
	];

	// CATEGORIA: Analisar os resultados
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Acessar resultados de uma avaliação existente"
	$scope.Acessar_resultados_de_uma_avaliação_existente = 
	[
	{
		"manual" 	: 	"Trabalhar resultados no Excel",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	}
	];

	// "Trabalhar resultados no Excel"
	$scope.Trabalhar_resultados_no_Excel = 
	[
	{
		"manual" 	: 	"Acessar resultados de uma avaliação existente",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"catme"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: VOTADORES ELETRÔNICOS (CLICKERS)
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Informações do software"
	$scope.Informações_do_software = 
	[
	{
		"manual"	: 	"Informações do hardware",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Como utilizar",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar pergunta",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Salvar sessão",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Controle dos aparelhos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	}
	];

	// "Informações do hardware"
	$scope.Informações_do_hardware = 
	[
	{
		"manual"	: 	"Informações do software",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Como utilizar",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar pergunta",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Salvar sessão",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Controle dos aparelhos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	}
	];

	// "Como utilizar"
	$scope.Como_utilizar = 
	[
	{
		"manual"	: 	"Informações do software",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Informações do hardware",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar pergunta",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Salvar sessão",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Controle dos aparelhos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	}
	];

	// "Criar pergunta"
	$scope.Criar_pergunta = 
	[
	{
		"manual"	: 	"Informações do software",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Informações do hardware",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Como utilizar",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Salvar sessão",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Controle dos aparelhos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	}
	];

	// "Criar lista"
	$scope.Criar_lista = 
	[
	{
		"manual" 	: 	"Informações do software",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Informações do hardware",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Como utilizar",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Criar pergunta",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Salvar sessão",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Controle dos aparelhos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	}
	];

	// "Salvar sessão"
	$scope.Salvar_sessão = 
	[
	{
		"manual"	: 	"Informações do software",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Informações do hardware",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Como utilizar",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar pergunta",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Controle dos aparelhos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	}
	];

	// "Gerar e acessar relatórios"
	$scope.Gerar_e_acessar_relatórios = 
	[
	{
		"manual" 	: 	"Informações do software",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Informações do hardware",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Como utilizar",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Criar pergunta",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Criar lista",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Salvar sessão",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual" 	: 	"Controle dos aparelhos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	}
	];

	// "Controle dos aparelhos"
	$scope.Controle_dos_aparelhos = 
	[
	{
		"manual"	: 	"Informações do software",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Informações do hardware",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Como utilizar",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar pergunta",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual	" 	: 	"Salvar sessão",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"clickers"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CASOS
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Sobre os casos"
	$scope.Sobre_os_casos = 
	[
	{
		"manual"	: 	"Cadastrar-se em base de dados",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Consultar casos disponíveis",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Solicitar casos pelo CUCA",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	}
	];

	// "Cadastrar-se em base de dados"
	$scope.CadastrarSe_em_base_de_dados = 
	[
	{
		"manual"	: 	"Sobre os casos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Consultar casos disponíveis",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Solicitar casos pelo CUCA",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	}
	];

	// "Consultar casos disponíveis"
	$scope.Consultar_casos_disponíveis = 
	[
	{
		"manual"	: 	"Sobre os casos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Cadastrar-se em base de dados",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Solicitar casos pelo CUCA",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	}
	];

	// "Solicitar casos pelo CUCA"
	$scope.Solicitar_casos_pelo_CUCA = 
	[
	{
		"manual"	: 	"Sobre os casos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Cadastrar-se em base de dados",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Consultar casos disponíveis",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	}
	];

	// "Disponibilizar link aos alunos"
	$scope.Disponibilizar_link_aos_alunos = 
	[
	{
		"manual"	: 	"Sobre os casos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Cadastrar-se em base de dados",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Consultar casos disponíveis",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	},
	{
		"manual"	: 	"Solicitar casos pelo CUCA",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"casos"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: SIMULADORES
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Conhecer simuladores"
	$scope.Conhecer_simuladores = 
	[
	{
		"manual" 	: 	"Solicitar simulador",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"simuladores"
	},
	{
		"manual" 	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"simuladores"
	}
	];

	// "Solicitar simulador"
	$scope.Solicitar_simulador = 
	[
	{
		"manual" 	: 	"Conhecer simuladores",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"simuladores"
	},
	{
		"manual" 	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"simuladores"
	}
	];

	// "Disponibilizar link aos alunos"
	$scope.Disponibilizar_link_aos_alunos = 
	[
	{
		"manual" 	: 	"Conhecer simuladores",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"simuladores"
	},
	{
		"manual" 	: 	"Solicitar simulador",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"simuladores"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CURSOS
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Acessar"
	$scope.Acessar = 
	[
	{
		"manual" 	: 	"Gerenciar",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"cursosOnline"
	}
	];

	// "Gerenciar"
	$scope.Gerenciar = 
	[
	{
		"manual" 	: 	"Acessar",
		"Link" 		: 	"#",
		"tipoIcone"	: 	"cursosOnline"
	}
	];
});