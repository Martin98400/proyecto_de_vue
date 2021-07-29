<template>
 <b-table striped hover :items="items" :fields="fields">
    <template #cell(acciones)="data">
        <slot name="actions" :item="data.item"></slot>
    </template>

 </b-table>
</template>

<script>
export default {
    name: 'TablaBV',
    props: {
        items: Array,
        fields: Array
    }
}
</script>

<style>
</style>