new Vue({
	//ZONA DE ACTUACION DE VUE
	el:"#miPagina",

	//DEFINICION DEL ARRAY
	data:{
		nombre:'',
		apellidop:'',
		apellidom:'',
		genero:'',
		indice:0,
		//TRABAJAREMOS UN ARRAY ESTÁTICO
		propietarios:[{nombre:'Jesus', apellidop:'Chan', apellidom:'tamay', genero:'H'},
		{nombre:'Maria', apellidop:'Chable', apellidom:'Burgos', genero:'M'},
		{nombre:'Ricardo', apellidop:'Espadas', apellidom:'Hu', genero:'H'},
		{nombre:'Antonio', apellidop:'May', apellidom:'Estrella', genero:'H'}
		],

	},

	//Seccion de metodos
	methods:{

		//CREAMOS UN MÉTODO PARA GUARDAR DATOS NUEVOS
		agregarPropietario:function(){

			var unPropietario={nombre:this.nombre,apellidop:this.apellidop,apellidom:this.apellidom,genero:this.genero};
			this.propietarios.push(unPropietario);
		},

		limpiarHtml:function(){
			this.nombre='';
			this.apellidop='';
			this.apellidom='';
			this.genero='';
		},

		editarPropietario:function(){
			this.nombre=this.propietarios[pos].nombre;
			this.apellidop=this.propietarios[pos].apellidop
			this.apellidom=this.propietarios[pos].apellidom;
			this.genero=this.propietarios[pos].genero;
		}
	}
})