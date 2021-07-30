<template>
  <b-table striped hover :items="items" :fields="fields">
  </b-table>
</template>

<script>
export default {
  name: "Tabla",
  props: {
    items: Array,
    fields: Array,
  }
};
</script>

<style></style>
