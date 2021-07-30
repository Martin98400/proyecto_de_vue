<template>
  <div class="home m-3">    
    <h3>Juegos </h3>
    <b-button to="/agregar" class="m-1">Agregar</b-button>
    <Tabla :items="juegos" :fields="fields" :busy="loading" >
    </Tabla>
    <!-- <TablaBV :items="juegos" :fields="campos">
       <template slot="actions" slot-scope="{ item }">
           <b-button size="sm">Editar</b-button>
           <b-button @click="eliminar(item)" size="sm" class="mx-2">Eliminar</b-button>
      </template>
    </TablaBV> -->
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Tabla from '../components/Tabla.vue'

export default {
  name: 'Home',
  components: {
    Tabla
  },
  data() {
    return {
      fields: [
        {key: 'ID', label: 'Clave'},
        {key: 'Name',label:'Nombre'},
        {key: 'Publisher', label: 'Editor'},
        {key: 'Category', label:'Categoria'},
        {key: 'Year', label:'Año'},
        'acciones'
      ]
    }
  },

  computed: {
    ...mapState(['juegos', 'loading'])
  },
  methods: {
    ...mapActions(['listarjuegos']),
    vistaAgregar() {
      this.$router.push({ name: "Agregar" });
    },
    eliminar(item) {
      console.log("item", item);
    },
    
  },
  mounted(){
    this.listarjuegos();
  }
}
</script>