import Vue from 'vue';
import { fetchEntries } from '@/services/contentful';

/* eslint no-shadow: ["error", { "allow": ["state", "getters"] }] */
// State object
const state = {
  // appState: {
  //   isDev: process.env.VUE_APP_ENV === 'dev',
  //   isDevelopment: process.env.VUE_APP_ENV === 'development',
  //   webAppVersion: process.env.VERSION,
  //   webAppEnv: process.env.VUE_APP_ENV,
  //   webSiteURL: process.env.VUE_APP_WEBSITE,
  // },
  views: {},
};

// Mutations
const mutations = {
  setAppState(state, [prop, value]) {
    Vue.set(state.appState, prop, value);
  },
  setState(state, [prop, value]) {
    Vue.set(state, prop, value);
  },
  setViewTemplate(state, [prop, value]) {
    Vue.set(state.views, prop, value);
  },
  pushState(state, [prop, value]) {
    state[prop].push(value);
  },
};

// Actions
const actions = {
  async getTemplate({ commit }, payload) {
    commit('setState', ['isLoading', true]);

    try {
      const templates = await fetchEntries('viewTemplate');
      const view = templates.items.find(item => item.fields.slug === payload);
      console.log('view', view);

      commit('setViewTemplate', [payload, view]);
      // commit('setState', ['isLoading', false]);

      // return products;
    } catch (err) {
      // commit('setState', ['isLoading', false]);
      // return err;
    }
  },
};

// Getter functions
const getters = {
};

export default {
  namespaced: true,
  state: () => (state),
  getters,
  actions,
  mutations,
};
