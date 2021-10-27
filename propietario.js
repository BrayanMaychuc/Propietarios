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
		editando:0,
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

			if (this.nombre && this.apellidop && this.apellidom && this.genero) {

			var unPropietario={nombre:this.nombre,apellidop:this.apellidop,apellidom:this.apellidom,genero:this.genero};
			this.propietarios.push(unPropietario);
			this.limpiarHtml();

			Swal.fire({
				position:'top-end',
				icon:'success',
				title:'El propietario se agrego correctamente',
				showConfirmButton: false,
				timer:1000
				});

				} else {
				Swal.fire({
				position:'top-end',
				icon:'error',
				title:'Debe ingresar los datos',
				showConfirmButton: false,
				timer:1000
				});
		}
		},

		limpiarHtml:function(){
			this.nombre='';
			this.apellidop='';
			this.apellidom='';
			this.genero='';
		},

		editarPropietario:function(pos){
			this.nombre=this.propietarios[pos].nombre;
			this.apellidop=this.propietarios[pos].apellidop;
			this.apellidom=this.propietarios[pos].apellidom;
			this.genero=this.propietarios[pos].genero;
			this.indice=pos;
			this.editando=1;
		},

		eliminarPropietario:function(){
			var pregunta=confirm('Esta seguro de Eliminar?');
			 
			 if(pregunta)
			 	this.propietarios.splice(pos,1);

			 Swal.fire({
				position:'top-end',
				icon:'danger',
				title:'El propietario se elimino correctamente',
				showConfirmButton: false,
				timer:1000
				});

		},

		guardarEdicion:function(){
			this.propietarios[this.indice].nombre=this.nombre;
			this.propietarios[this.indice].apellidop=this.apellidop;
			this.propietarios[this.indice].apellidom=this.apellidom;
			this.propietarios[this.indice].genero=this.genero;
			this.limpiarHtml();
			this.editando=0;
		},

		cancelar:function(){
			this.limpiarHtml();
			this.editando=0;
		},
	}
})