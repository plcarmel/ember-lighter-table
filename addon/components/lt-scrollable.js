import $ from 'jquery';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/lt-scrollable';

export default Component.extend({

  layout,
  tagName: '',

  // passed in
  virtual: false,
  vertical: true,
  horizontal: false,
  classNames: ['lt-scrollable'],

  scrollTop: computed('_scrollTopGet', {
    get() {
      return this.get('_scrollTopGet');
    },
    set(key, value) {
      this.set('_scrollTopGet', value);
      this.set('_scrollTopSet', value);
      return value;
    }
  }),

  _scrollTopSet: null,
  _scrollTopGet: 0,

  actions: {

    onScroll(scrollTop) {
      this.set('_scrollTopGet', scrollTop);
      this.sendAction('onScroll', ...arguments);
    },

    onScrollTo(x) {
      this.set('_scrollTopSet', x);
    }

  }

});
