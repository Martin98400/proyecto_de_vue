<template>
    <div>
    <h3>Detalles Juegos</h3>
    <Tabla :items="juegos" :fields="fields" :busy="loading" >
    </Tabla>
    
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Tabla from '../components/Tabla.vue'

export default {
  name: 'detalle',
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
        {key: 'Description', label: 'Descripcion'},
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

   
  },
  mounted(){
    this.listarjuegos();
  }
}
</script>