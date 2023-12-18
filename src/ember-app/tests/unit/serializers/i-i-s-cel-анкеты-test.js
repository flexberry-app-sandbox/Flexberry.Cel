import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-cel-анкеты', 'Unit | Serializer | i-i-s-cel-анкеты', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-cel-анкеты',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-cel-возраст',
    'transform:i-i-s-cel-катег-сотруд',
    'transform:i-i-s-cel-стаж',
    'transform:i-i-s-cel-факторы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
