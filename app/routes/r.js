import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';

export default class RRoute extends Route {
    @service store;
    //https://api.emberjs.com/ember-data/3.27/classes/Store/methods/query?anchor=query
    //query (modelName, query, options) Promise
    async model(params){
            // alert(params.gemeente)
            // return this.store.query('r', params.subriddit);
            // return this.store.findRecord('population2021', `${params.gemeente}`);
            const response = await fetch(`/api/population2021.json`).then(
            response => response.json().then((data,error) => {
            if(error){
            console.log(error)
            }else{
            console.log(data);
            return data
            }
            }));
            return response
            // alert(gemeente_id)
    } 

    // afterModel(r){
    //     return r.subreddit = r.data.children[0].data.subreddit || '';
    // }

    //https://www.reddit.com/r/pics.json
}
