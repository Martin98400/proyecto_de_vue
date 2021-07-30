<template>
  <div class="home m-3">    
    <b-button to="/agregar">Agregar</b-button>
    <Tabla :items="juegos" >
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
  computed: {
    ...mapState(['juegos'])
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