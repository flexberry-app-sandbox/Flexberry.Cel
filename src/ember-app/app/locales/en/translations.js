import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISCelАнкетыLForm from './forms/i-i-s-cel-анкеты-l';
import IISCelПричинУвольнLForm from './forms/i-i-s-cel-причин-увольн-l';
import IISCelСпециалистLForm from './forms/i-i-s-cel-специалист-l';
import IISCelАнкетыEForm from './forms/i-i-s-cel-анкеты-e';
import IISCelПричинУвольнEForm from './forms/i-i-s-cel-причин-увольн-e';
import IISCelСпециалистEForm from './forms/i-i-s-cel-специалист-e';
import IISCelАнкетыModel from './models/i-i-s-cel-анкеты';
import IISCelОценПричУвольнModel from './models/i-i-s-cel-оцен-прич-увольн';
import IISCelПричинУвольнModel from './models/i-i-s-cel-причин-увольн';
import IISCelРекомендацModel from './models/i-i-s-cel-рекомендац';
import IISCelСпециалистModel from './models/i-i-s-cel-специалист';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-cel-анкеты': IISCelАнкетыModel,
    'i-i-s-cel-оцен-прич-увольн': IISCelОценПричУвольнModel,
    'i-i-s-cel-причин-увольн': IISCelПричинУвольнModel,
    'i-i-s-cel-рекомендац': IISCelРекомендацModel,
    'i-i-s-cel-специалист': IISCelСпециалистModel
  },

  'application-name': 'Cel',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Cel',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Cel',
          title: 'Cel'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        cel: {
          caption: 'Cel',
          title: 'Cel',
          'i-i-s-cel-причин-увольн-l': {
            caption: 'Причин увольн',
            title: ''
          },
          'i-i-s-cel-специалист-l': {
            caption: 'Специалист',
            title: ''
          },
          'i-i-s-cel-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-cel-анкеты-l': IISCelАнкетыLForm,
    'i-i-s-cel-причин-увольн-l': IISCelПричинУвольнLForm,
    'i-i-s-cel-специалист-l': IISCelСпециалистLForm,
    'i-i-s-cel-анкеты-e': IISCelАнкетыEForm,
    'i-i-s-cel-причин-увольн-e': IISCelПричинУвольнEForm,
    'i-i-s-cel-специалист-e': IISCelСпециалистEForm
  },

});

export default translations;
