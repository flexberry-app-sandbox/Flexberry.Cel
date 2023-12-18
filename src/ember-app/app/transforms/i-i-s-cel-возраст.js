import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВозрастEnum from '../enums/i-i-s-cel-возраст';

export default FlexberryEnum.extend({
  enum: ВозрастEnum,
  sourceType: 'IIS.Cel.Возраст'
});
