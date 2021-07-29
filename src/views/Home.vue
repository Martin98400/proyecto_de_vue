<template>
  <div class="home m-3">    
    <b-button to="/agregar">Agregar</b-button>
    <TablaBV :items="allTodos" :fields="campos">
       <template slot="actions" slot-scope="{ item }">
           <b-button size="sm">Editar</b-button>
           <b-button @click="eliminar(item)" size="sm" class="mx-2">Eliminar</b-button>
      </template>
    </TablaBV>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

import TablaBV from '../components/TablaBV.vue'
export default {
  name: 'Home',
  components: {
    
    TablaBV
  },
  data() {
    return {
      campos: [
        {
          key: 'id',
          label: 'ID'
        },
        {
          key:'Name',
          label: 'Nombre'
        },
        {
          key: 'Category',
          formatter: value => {
            return value.join(" , ")
          }
        },
        {
          key: 'Year',
          label: 'Año Lanzado'
        },
        'acciones'
      ]
    }
  },
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['allTodos'])
  },
  methods: {
    vistaAgregar() {
      this.$router.push({ name: "Agregar" });
    },
    eliminar(item) {
      console.log("item", item);
    }
  }
}
</script>