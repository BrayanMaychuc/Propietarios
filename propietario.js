new Vue({
	//ZONA DE ACTUACION DE VUE
	el:"#miPagina",

	//DEFINICION DEL ARRAY
	data:{
		nombre:'',
		apellidop:'',
		apellidom:'',
		genero:'',
		editando:0,
		indice:0,
		buscar:'',
		//TRABAJAREMOS UN ARRAY ESTÁTICO
		propietarios:[{nombre:'Jesus', apellidop:'Chan', apellidom:'tamay', genero:'H'},
		{nombre:'Maria', apellidop:'Chable', apellidom:'Burgos', genero:'M'},
		{nombre:'Ricardo', apellidop:'Espadas', apellidom:'Hu', genero:'H'},
		{nombre:'Antonio', apellidop:'May', apellidom:'Estrella', genero:'H'}
		],

	},
})