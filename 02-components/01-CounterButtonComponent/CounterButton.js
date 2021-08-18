import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      default: 0,
    },
  },
  emits: {
    'update:count': null,
  },
  methods: {
    increment() {
      this.$emit('update:count', this.count + 1);
    },
  },
  template: `<button type="button" @click="increment">{{ count }}</button>`,
});
