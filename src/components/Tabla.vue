<template>
    <div>
        <br>
        <h3>Tabla</h3>
            <table class="table">
        <thead>
            <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Editor</th>
            <th scope="col">Categoria</th>
            <th scope="col">Año</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="t in todos" :key="t.id">
            <th scope="row">{{t.id}}</th>
            <td>{{t.name}}</td>
            <td>{{t.Publisher}}</td>
            <td>{{t.Category.join(", ") || "-"}}</td>
            <td>{{t.Year}}</td>
            <td>
                <b-button size="sm">Editar</b-button>
                <b-button size="sm">Eliminar</b-button>
            </td>
            
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Tabla',
    computed:{
        ...mapState(['todos'])
    },
    
}
</script>

<style>

</style>