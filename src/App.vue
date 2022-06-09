<template>
  <div id="app" class="bg">
    <div class="p-3">
      <b-container fluid="xl">
        <b-card tag="article" class="colorTable">
          <table>

            <thead>

              <tr class="colorText">
                <th>NAME</th>
                <th>EYE COLOR</th>
                <th>GENDER</th>
                <th>HAIR COLOR</th>
                <th>SKIN COLOR</th>
              </tr>

            </thead>

            <tbody>

              <tr class="colorText" v-for="people of peoples" :key="people.id">

                <td class="textStyle">{{ people.name }}</td>
                <td class="textStyle">{{ people.eye_color }}</td>
                <td class="textStyle">{{ people.gender }}</td>
                <td class="textStyle">{{ people.hair_color }}</td>
                <td class="textStyle">{{ people.skin_color }}</td>
                <td>
                  <button @click="editar(produto)" class="waves-effect btn-small yellow darken-1"><i class="material-icons">airplanemode_active</i></button>

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

.colorTable {
  background-color: black
}

.colorText {
  color: white
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
  background-image: url("https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png") !important;

  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
