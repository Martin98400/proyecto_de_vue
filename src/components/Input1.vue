<template>
    <div>
        <label :for="id">{{titulo}}</label>
        <Input
            :id="id"
            :type="type"
            class="form-control"
            :maxlength="maxlength"
            :disabled="disabled"
            :placeholder="placeholder"
            :readonly="readonly"
        />
     <span v-if="error" class="text-danger">{{mensajeError}}</span>
    </div>
</template>

<script>
export default {
    name:'Input1',
    props:{
        id:{
            type:Number,
            require:true,
        },
        titulo:{
            type:String,
            default:''
        },
        type:{
            type:[String,Number],
        },
        maxlenght:{
            type:Number,
            default:100,
        },
        disabled:{
            type: Boolean,
            default:false,
        },
        placeholder:{
            type:String,
            default:''
        },
        readonly:{
            type: Boolean,
            default:false,
        },
        mensajeError:{
            type:String,
            default:'Campo Obligatorio'
        }

    }
    
}
</script>

<style>

</style>