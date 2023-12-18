import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-cel-специалист', 'Unit | Model | i-i-s-cel-специалист', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-cel-анкеты',
    'model:i-i-s-cel-оцен-прич-увольн',
    'model:i-i-s-cel-причин-увольн',
    'model:i-i-s-cel-рекомендац',
    'model:i-i-s-cel-специалист',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
