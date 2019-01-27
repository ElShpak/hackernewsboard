import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		favorites: []
	},
	mutations: {
		updateFavorites(state, payload) {
			state.favorites.push(payload);
		},
		clearFavorite(state, payload) {
			state.favorites = state.favorites.filter((id) => id !== payload);
		}
	},
	actions: {
		addToFavorite({ commit }, payload) {
			commit('updateFavorites', payload);
		},
		deleteFavorite({ commit }, payload) {
			commit('clearFavorite', payload);
		}
	}
});
