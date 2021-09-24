import RESTAdapter from '@ember-data/adapter/rest';

export default class RAdapter extends RESTAdapter {
   namespace = 'api'
    // host = 'http://www.reddit.com';
    // //https://api.emberjs.com/ember-data/3.27/classes/JSONAPIAdapter/methods/urlForQuery?anchor=urlForQuery
    // urlForQuery (query,  modelName) {
    //      debugger;
    //         return `${this.host}${query}.json`;

    //   }
}
