export default {
    namespaced: true,
    state: {
        repo: '',
        base_url: 'http://biblio-rep.colmex.mx/',
        url: "http://biblio-rep.colmex.mx/catalog.json",
        modalFacets: false
    },
    mutations: {
        set_repo(state, repo) {
			 state.repo = repo;
        },
        set_url(state, url){
            state.url = url;
        },
        set_modalFacets(state, value){
            state.modalFacets = value;
        }
    },
    getters: {
        repo(state){
            return state.repo
        },
        url(state){
            return state.url
        },
        modalFacets(state){
            return state.modalFacets
        },
        base_url(state){
            return state.base_url;
        }
    },
    actions: {
        async get_data({ state, commit }) {
            await axios.get(state.url)
               .then(response => {
                   var repository = filter_data(response.data.response);
                   commit('set_repo', repository);
               })
       }
        /*incrementScoreAsync: ({commit}, payload) => {
            setTimeout(() => {
                commit('incrementScore', 100)
            }, payload)
        }*/
    }
}