import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-cel-анкеты-l');
  this.route('i-i-s-cel-анкеты-e',
  { path: 'i-i-s-cel-анкеты-e/:id' });
  this.route('i-i-s-cel-анкеты-e.new',
  { path: 'i-i-s-cel-анкеты-e/new' });
  this.route('i-i-s-cel-причин-увольн-l');
  this.route('i-i-s-cel-причин-увольн-e',
  { path: 'i-i-s-cel-причин-увольн-e/:id' });
  this.route('i-i-s-cel-причин-увольн-e.new',
  { path: 'i-i-s-cel-причин-увольн-e/new' });
  this.route('i-i-s-cel-специалист-l');
  this.route('i-i-s-cel-специалист-e',
  { path: 'i-i-s-cel-специалист-e/:id' });
  this.route('i-i-s-cel-специалист-e.new',
  { path: 'i-i-s-cel-специалист-e/new' });
});

export default Router;
