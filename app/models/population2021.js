import Model, {attr} from '@ember-data/model';

export default class Population2021Model extends Model {
    @attr('string') gemeente;
    @attr('number') inwoner;
}
