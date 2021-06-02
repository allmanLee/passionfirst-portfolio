import { createStore } from "vuex";
import portfolio from "../assets/data/portfolio.json";
export default createStore({
  state: {
    portfolio: [],
  },
  mutations: {
    setPortfolio(state, data) {
      state.portfolio = data;
    },
  },
  actions: {
    portfolioInit({ commit }) {
      const res = portfolio;
      const data = res.data.map((d) => ({
        EngId: d.EngId,
        Cate: d.Cate,
        Data: d.Data,
        Name: d.Name,
        SubName: d.SubName,
        Script: d.Script,
        SiteUrl: d.SiteUrl,
        StakItems: d.StackItems,
        TableItems: d.TableItems,
      }));
      commit("setPortfolio", data);
    },
  },
  modules: {},
});
