import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class RController extends Controller {
    @tracked item;
    
    get pictures() {
        let model = this.model;
        let c = model.data.children.filterBy('data.domain','i.imgur.com');
        c.forEach((item) => {
            let newURL = item.data.url.replace(/^http:\/\//i, 'https://');
            let thumbURL = item.data.thumbnail.replace(/^http:\/\//i, 'https://');
            Ember.set(item,'data.url',newURL);
            Ember.set(item,'data.thumbnail',thumbURL);
            if(item.data.thumbnail === 'nsfw'){
                Ember.set(item,"data.thumbnail",'https://farm3.staticflickr.com/2571/3810679130_fbb7494d7b_t.jpg');
            }
        });
    return c;
    }//.property('model.data.children.[]')
}
