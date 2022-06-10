import { http } from './config'

export default{

    getPeople:() => {
        return http.get('people');
    },

    getUrlInfo:(url) => {
      return http.get(url);
    }

}