<template>
  <div class="p-3">
    <b-container fluid="xl">
      <b-card tag="article">
        <b-table striped hover :items="items"></b-table>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>

<style>
.p-3 {
padding: $spacer !important;
}
</style>