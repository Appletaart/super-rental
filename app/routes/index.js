import Route from '@ember/routing/route';
// import { data } from '/api/rentals.json';
import { inject as service } from '@ember/service';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
    @service store;
  
   /*  async model() {
      return this.store.findAll('rental');
    } */
  
      async model() {
        // const myRequest = new Request('/api/rentals.json');
        // await fetch(myRequest)
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(console.error);

        let response = await fetch('/api/rentals.json');
        // let parsed = await response.json();
        // console.log(parsed);
        // return parsed;

        let { data } = await response.json(); 
        console.log(data);
        // if did not use { data } data.map is data.map is not a function

        return data.map((model) => {
          let { id, attributes } = model;
          let type;
    
          if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
            type = 'Community';
          } else {
            type = 'Standalone';
          }
    
          return { id, type, ...attributes };
        });
        // return {
        //   title: 'Grand Old Mansion',
        //   owner: 'Veruca Salt',
        //   city: 'San Francisco',
        //   location: {
        //     lat: 37.7749,
        //     lng: -122.4194,
        //   },
        //   category: 'Estate',
        //   type: 'Standalone',
        //   bedrooms: 15,
        //   image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        //   description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
        // };
      }
}
