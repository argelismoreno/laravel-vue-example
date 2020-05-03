import Vue from 'vue';
import {
    ValidationProvider,
    ValidationObserver,
    extend,
    localize
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import es from 'vee-validate/dist/locale/es';
import en from 'vee-validate/dist/locale/en';
localize({
  es,
  en
});
for (let rule in rules) {
    extend(rule, {
      ...rules[rule], // add the rule
      message: en.messages[rule] // add its message
    });
  }
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
