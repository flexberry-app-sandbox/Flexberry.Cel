import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ФакторыEnum from '../enums/i-i-s-cel-факторы';

export default FlexberryEnum.extend({
  enum: ФакторыEnum,
  sourceType: 'IIS.Cel.Факторы'
});
