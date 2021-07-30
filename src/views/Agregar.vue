<template>
    <div>
        <h1>Agregar Juego</h1>
        <Input1
            titulo="Nombre"
            :id="ID"
            placeholder="Ingrese un nombre"
            :maxlength="80"
            
        />
        <!-- <form @submit.prevent="guardarTodo()">
            <div class="mb-3">
                 <label for="Name" class="form-label">Nombre</label>
                 <input
                    v-model.trim="todo.Name"
                    type="text"
                    class="form-control"
                    id="Name"
                    placeholder="Ingrese un nombre"
                    maxlength="80"
                    required
                    />
            </div>

            <div class="mb-3">
                 <label for="Publisher" class="form-label">Editor</label>
                 <input
                    v-model.trim="todo.Publisher"
                    type="text"
                    class="form-control"
                    id="Publisher"
                    placeholder="Ingrese el nombre del editor"
                    maxlength="60"
                    required
                    />
            </div>

            <div class="mb-3">
                 <label for="Description" class="form-label">Descripcion</label>
                 <input
                    v-model.trim="todo.Description"
                    type="text"
                    class="form-control"
                    id="Description"
                    placeholder="Ingrese una descripcion"
                    maxlength="200"
                    />
            </div>

            <br>
                <label for="Category" class="form-label">Categoria</label>
                <br>

                <div class="form-check form-check-inline">
                    <input
                    v-model="todo.Category"
                    class="form-check-input"
                    type="checkbox"
                    id="11"
                    value="Adventure"
                    
                    />
                    <label class="form-check-label" for="Adventure">Adventure</label>
                </div>
                
                <div class="form-check form-check-inline">
                    <input
                    v-model="todo.Category"
                    class="form-check-input"
                    type="checkbox"
                    id="12"
                    value="Puzzle"
                    
                    />
                    <label class="form-check-label" for="Puzzle">Puzzle</label>
                </div>

                <div class="form-check form-check-inline">
                    <input
                    v-model="todo.Category"
                    class="form-check-input"
                    type="checkbox"
                    id="13"
                    value="Strategy"
                    />
                    <label class="form-check-label" for="Strategy">Strategy</label>
                </div>

                <div class="form-check form-check-inline">
                    <input
                    v-model="todo.Category"
                    class="form-check-input"
                    type="checkbox"
                    id="14"
                    value="Fantasy"
                    
                    />
                    <label class="form-check-label" for="Fantasy">Fantasy</label>
                </div>

                <div class="form-check form-check-inline">
                    <input
                    v-model="todo.Category"
                    class="form-check-input"
                    type="checkbox"
                    id="15"
                    value="Civilization"
                    
                    />
                    <label class="form-check-label" for="Civilization">Civilization</label>
                </div>

            <br>
            <br>
            <div class="mb-3">
                <label for="año" class="form-label">Año Lanzado</label>
                <input
                v-model.number="todo.Year"
                type="number"
                class="form-control"
                id="Year"
                placeholder="Ingrese un año"
                min="1000"
                max="9999"
                />
            </div>

            <br>
            <button class="btn  btn-success" type="submit">Guardar </button>
        </form> -->
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapActions } from 'vuex'

import Input1 from '../components/Input1.vue'

export default {
    name: 'Agregar',
    components:{Input1},
    data:()=> {
        return {
            todo:{
                id: '',
                Name: '',
                Publisher: '',
                Category: [],
                Description: '',
                Year: ''
            }
        }
    },
    methods:{
        ...mapActions(['setTodos']),
         
         guardarTodo() {
             console.log("todo", this.todo);

             this.todo.id = nanoid(4);
            console.log("id", this.todo.id);

            this.setTodos(this.todo);
            this.limpiar();
            this.$router.push({name: 'Home'}); //cambia a la vista de home al momento de hacer click en guardar 

         },
         limpiar(){
            this.todo = {
                id: '',
                Name: '',
                Publisher: '',
                Category: [],
                Description: '',
                Year: ''
                }
            }
    },
};
</script>