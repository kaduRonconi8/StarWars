<template>
  <div id="app" class="bg">
    <div class="p-3">
      <b-container fluid="xl">
        <b-card tag="article" class="colorTable cardStyle">

          <div class="text-center"  v-if="peoples.length === 0">
              <b-spinner 
                variant="light"
              ></b-spinner>
            </div>
          <table  v-if="peoples.length > 0">

            <thead>

              <tr class="colorText" id="linha-horizontal">
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

          <button @click="getPreviusPeople()" :disabled="isDisabledPrevius" class="waves-effect btn-small yellow darken-1"><i class="material-icons">skip_previous</i></button>
          <button @click="getNextPeople()" :disabled="isDisabledNext" class="waves-effect btn-small yellow darken-1 leftButtom"><i class="material-icons">skip_next</i></button>

        </b-card>
      </b-container>

       <b-modal id="starships" centered hide-footer title="STARSHIPS">

          <b-container fluid="xl">

          <div class="text-center"  v-if="starships.length === 0">
              <b-spinner 
                variant="dark"
              ></b-spinner>
            </div>

            <table>
              <tbody>
                <tr v-for="starship of starships" :key="starship.id" class="textStyle">
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
        starships: [],
        nextUrl: null,
        previusUrl:null
         
      }
    },
    mounted(){
      this.getListPeople()
    },

    computed: {

      //Verificacao de quando o botao habilita
      isDisabledNext() {
        if(this.nextUrl === null){
          return true
        }
        return false
      },

      isDisabledPrevius() {
        if(this.previusUrl === null){
          return true
        }
        return false
      },
    },

    methods:{

      //Funcao responsavel por buscar todas as pessoas iniciais 
      getListPeople(){
        People.getPeople().then(response =>{
         this.mountVars(response)
        })
      },

      //Funcao responsavel por montar o array de pessoas e passar os registros 
      mountVars(res){
         for(var i = 0; i < res.data.results.length; i++){
            res.data.results[i].id = i;
          }
          this.peoples = res.data.results
          this.nextUrl = res.data.next
          this.previusUrl = res.data.previous
      },

      //Funcao que buscar os proximos registros 
      getNextPeople(){
        People.getUrlInfo(this.nextUrl).then(response =>{
         this.mountVars(response)
        })
      },

      //Funcao que busca os registros anteriores
      getPreviusPeople(){
        People.getUrlInfo(this.previusUrl).then(response =>{
        this.mountVars(response)
        })
      },

      //Funcao que buscas as aeronaves
      getStarships(people){
        this.starships = []
        for(var i = 0; i < people.starships.length; i++){
          People.getUrlInfo(people.starships[i]).then(response =>{
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

  #linha-horizontal {
      width: 300px;
      border: 1px solid grey;
  }

  .cardStyle{
      border-width: medium;
      border-style: solid;
      border-color: grey;
      border-radius: 15px;
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

  .leftButtom{
      margin-left: 10px;
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
