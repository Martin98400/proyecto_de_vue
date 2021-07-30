<template>
    <div>
        <label :for="id" class="m-2">{{titulo}}</label>
        <Input
            :id="id"
            :type="type"
            class="form-control"
            :maxlength="maxlength"
            :disabled="disabled"
            :placeholder="placeholder"
            :readonly="readonly"
             @input="$emit('input', $event.target.value)"

        />
     <span v-if="error" class="text-danger">{{mensajeError}}</span>
    </div>
</template>

<script>
export default {
    name:'Input1',
    props:{
        id:{
            type:[Number,String ],
            require:true,
        },
        titulo:{
            type:String,
            default:''
        },
        type:{
            type:[String,Number],
        },
        maxlength:{
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
        error:{
        type:Boolean,
        default: false
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