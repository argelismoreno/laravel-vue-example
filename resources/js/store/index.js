import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {layout} from './modules/layout/layout';

export default new Vuex.Store({
    modules: {
        layout,
    },
    state: {},
    getters: {},
    mutations: {},
    actions: {}
});