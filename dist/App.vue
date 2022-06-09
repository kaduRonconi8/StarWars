<template>
  <div id="app" class="bg">
    <div class="p-3">
      <b-container fluid="xl">
        <b-card tag="article">
          <b-table striped hover :items="items"></b-table>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>

  import People from './services/people'
  export default {
    
    mounted(){

      People.getPeople().then(response =>{
        console.log(response)
      })
  
    }

  }
</script>

<style>

.p-3 {
padding: $spacer !important;
}

body, html {
  height: 100%;
  margin: 0;
}

.bg {
  /* The image used */
  background-image: url("https://wallpaperaccess.com/full/652074.jpg") !important;

  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
