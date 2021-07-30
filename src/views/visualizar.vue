<template>
    <div>
    <h3>Visualizar</h3>
    <tarjeta1 :items="juegos" :fields="fields" :busy="loading" >
    </tarjeta1>
    
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import tarjeta1 from '../components/tarjeta1.vue'

export default {
  name: 'detalle',
  components: {
    tarjeta1
  },
  data() {
    return {
      fields: [
        {key: 'Name',label:'Nombre'},
        {key: 'Publisher', label: 'Editor'},
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