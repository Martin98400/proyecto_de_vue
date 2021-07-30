<template>
    <div>
        <h1>Agregar Juego</h1>
        <form @submit.prevent="GuardarJuego()">

            <Input1
             v-model="juego.Name"
            titulo="Nombre"
            id="Name"
            placeholder="Ingrese un nombre"
            :maxlength="80"
            mensajeError="es necesario insertar el nombre"
            :error="errorValidacion && !validacionNombre"
        />


            <Input1
             v-model="juego.Publisher"

            titulo="Publisher"
            id="Publisher"
            placeholder="Ingrese un editor"
            :maxlength="60"
            mensajeError="es necesario insertar el editor"
        />
       
            <Input1
             v-model="juego.Description"

            titulo="Descripcion"
            id="Description"
            placeholder="Ingrese una descripcion"
            :maxlength="200"
            mensajeError="se nesesita una descripcion   "
        />

             <Input1
            v-model="juego.Category"

            titulo="Categoria"
            id="Category"
            placeholder="Ingrese categorias ej:11-adventure,12-puzzle,13-estrategy,14-fantasy,15-civilization"
            mensajeError="es necesario insertar la categoria"
        />

            <Input1
             v-model="juego.Year"

            titulo="Year"
            id="Year"
            placeholder="año de lanzamiento"
            :maxlength="4"
            mensajeError="es necesario insertar el año de lanzamiento"
        />

             <b-button type="submit" variant="primary" class="my-2">Guardar</b-button>

<!-- <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
adventure
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    puzzle
  </label>

</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    estrategy
  </label>
  
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    fantasy
  </label>
  
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    civilization
  </label>
  
</div> -->


        </form>
    </div>
</template>

<script>


import Input1 from '../components/Input1.vue'

export default {
    name: 'Agregar',
    components:{Input1},
   data(){
       return{
           juego:{
               Name:'',
               Publisher:'',
               Description:'',
               Category:'',
               Year:''
           },
        errorValidacion: false
       }

   },
   computed:{
       validacionNombre(){
           return(this.juego.Name !==undefined && this.juego.Name.trim() !=='' )
       }
   },
   methods:{
       GuardarJuego(){
           if(this.validacionNombre){
            
            this.errorValidacion = false;
            console.log("si puede guardar");

            this.limpiar();
           }else{
               this.errorValidacion = true;

           }
        },

        limpiar(){
            this.juego={
                Name:'',
               Publisher:'',
               Description:'',
               Category:'',
               Year:''
            }

        }
    }    
};



</script>

<style> </style>