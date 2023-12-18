import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Cel',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Cel',
          title: 'Cel'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
