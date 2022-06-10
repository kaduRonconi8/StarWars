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

              <tr class="colorText textStyle" v-for="people of peoples" :key="people.id">

                <td>{{ people.name }}</td>
                <td>{{ people.eye_color }}</td>
                <td>{{ people.gender }}</td>
                <td>{{ people.hair_color }}</td>
                <td>{{ people.skin_color }}</td>
                <td>
                  <button @click="getStarships(people)" :disabled="people.starships.length  === 0"  class="waves-effect btn-small yellow darken-1" v-b-modal.starships><i class="material-icons">rocket</i></button>

                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </b-container>

       <b-modal id="starships" hide-footer title="Starships">

          <b-container fluid="xl">
            <table>
              <tbody>
                <tr v-for="starship of starships" :key="starship.id">
                  <td>{{ starship.name }}</td>
                </tr>
              </tbody>
            </table>
        </b-container>
        
       </b-modal>

    </div>
  </div>



</template>

<script>

  import People from './services/people'
  export default {

    data(){
      return{
        peoples: [],
        starships: []
         
      }
    },
    mounted(){
      this.getListPeople()
    },

    methods:{
      getListPeople(){
        People.getPeople().then(response =>{
          for(var i = 0; i < response.data.results.length; i++){
            response.data.results[i].id = i;
          }
          this.peoples = response.data.results
        })
      },

      getStarships(people){
        this.starships = []
        for(var i = 0; i < people.starships.length; i++){
          People.getStarships(people.starships[i]).then(response =>{
          this.starships.push(response.data)
          })
        }

        for(var j = 0; j < this.starships.length; j++){
          this.starships[j].id = j;
        }
      }
    }
  }
</script>

<style>

.textStyle {
  text-transform: uppercase
}

#starships {
  background: transparent !important
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
