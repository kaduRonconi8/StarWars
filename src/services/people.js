import { http } from './config'

export default{

    getPeople:() => {
        return http.get('people');
    },

    getStarships:(url) => {

      return http.get(url);

    }

}