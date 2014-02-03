manuaisBB.controller("manuaisComplementares", function ($scope) { 

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: BLACKBOARD
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Nome da categoria
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	
	//manual "nome do manual aqui"
	$scope.lorem = 
	[
	{	"manual"	: 	"[Arquivo] (pode ser PDF, DOC, PPT etc.)",
		"Link" 		: 	"#",
		"tipoIcone" : 	"arquivo" //nome da classe
	},
	{	
		"manual"	: 	"[Vídeo] (videoaula ou tutorial narrado)",
		"Link" 		: 	"#",
		"tipoIcone" : 	"video" //nome da classe
	},
	{	"manual"	: 	"[Site] (link para portais ou páginas específicas)",
		"Link" 		: 	"#",
		"tipoIcone" : 	"site" //nome da classe
	},
	{	
		"manual"	: 	"[Curso] (indicação de algum curso, workshop etc.)",
		"Link" 		: 	"#",
		"tipoIcone" : 	"curso" //nome da classe
	},
	{	
		"manual"	: 	"[Livro] (indicação de bibliografia)",
		"Link" 		: 	"#",
		"tipoIcone" : 	"livro" //nome da classe
	},
	{	
		"manual"	: 	"[Discussão] (indicação de algum fórum ou lista de discussão, comunidade de prática etc.)",
		"Link" 		: 	"#",
		"tipoIcone" : 	"discussao" //nome da classe
	}
	];

});