<template>
  <b-table striped hover :items="items" :fields="fields" :busy="busy">

    <template #table-busy>
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Cargando...</strong>
      </div>
    </template>

    <template #cell(acciones)="data">
      <slot name="actions" :item="data.item"></slot>
    </template>

  </b-table>
</template>

<script>
export default {
  name: "Tabla",
  props: {
    items: Array,
    fields: Array,
    busy: {
        type: Boolean,
        default: false
    }
  }
};
</script>

<style></style>
