import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.cel.caption'),
          title: i18n.t('forms.application.sitemap.cel.title'),
          children: [{
            link: 'i-i-s-cel-причин-увольн-l',
            caption: i18n.t('forms.application.sitemap.cel.i-i-s-cel-причин-увольн-l.caption'),
            title: i18n.t('forms.application.sitemap.cel.i-i-s-cel-причин-увольн-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-cel-специалист-l',
            caption: i18n.t('forms.application.sitemap.cel.i-i-s-cel-специалист-l.caption'),
            title: i18n.t('forms.application.sitemap.cel.i-i-s-cel-специалист-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-cel-анкеты-l',
            caption: i18n.t('forms.application.sitemap.cel.i-i-s-cel-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.cel.i-i-s-cel-анкеты-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})