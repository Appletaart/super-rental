import Model, { belongsTo }  from '@ember-data/model';

export default class LineItemModel extends Model {
    @belongsTo('order') order;
}
