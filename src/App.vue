<template>
  <div id="app" class="bg">
    <div class="p-3">
      <b-container fluid="xl">
        <b-card tag="article">
          <table>

            <thead>

              <tr>
                <th>NAME</th>
                <th>EYE COLOR</th>
                <th>GENDER</th>
                <th>HAIR COLOR</th>
                <th>SKIN COLOR</th>
              </tr>

            </thead>

            <tbody>

              <tr v-for="people of peoples" :key="people.id">

                <td class="textStyle">{{ people.name }}</td>
                <td class="textStyle">{{ people.eye_color }}</td>
                <td class="textStyle">{{ people.gender }}</td>
                <td class="textStyle">{{ people.hair_color }}</td>
                <td class="textStyle">{{ people.skin_color }}</td>
                <td>
                  <button @click="editar(produto)" class="waves-effect btn-small blue darken-1"><i class="material-icons">airplanemode_active</i></button>

                </td>

              </tr>

            </tbody>
          
          </table>

        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>

  import People from './services/people'
  export default {

    data(){
      return{
        peoples: [],
         
      }
    },
    mounted(){

      People.getPeople().then(response =>{

        for(var i = 0; i < response.data.results.length; i++){
          response.data.results[i].id = i;
        }
        this.peoples = response.data.results
      })
  
    }

  }
</script>

<style>

.textStyle {
  text-transform: uppercase
}

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
