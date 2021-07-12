import { IAttraction } from '@/interface/IAttraction'
import { IPark } from '@/interface/IPark';
import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: "http://localhost:3000/",
    attractionDetails: {} as IAttraction,
    parkDetails: {} as IPark,
  },
  mutations: {
    fillParkDetails(state, park:IPark){
      state.parkDetails = park;
    },
    fillAttractioDetails(state, attraction: IAttraction){
      state.attractionDetails = attraction;
    }
  },
  actions: {
    GetParkDetails({commit, state}, parkId: string) {
      axios.get(`${state.baseUrl}park/${parkId}`).then((data) => {
        commit("fillparkDetails", data.data as IPark);
      });
    },
    GetAttractionDetails({commit, state}, attractionData: string[]) {
      axios.get(`${state.baseUrl}attraction/${attractionData[0]}?parkId=${attractionData[1]}`).then((data) => {
        commit("fillparkDetails", data.data as IPark);
      });
    }
  },
  modules: {
  }
})
