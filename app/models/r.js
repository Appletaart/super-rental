import Model, {attr} from '@ember-data/model';

export default class RModel extends Model {
    @attr('string') title;
}
