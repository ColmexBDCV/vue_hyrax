import facetModal from './facetModal.vue'

export default {
    name: "facets",
    props: ["facets", "params"],
    template: "#facetas",
    components:{
        'facetModal': facetModal
    },//katrin1987  Katrin1987 
    data: function(){
        return {
            facet_data: "",
		    facet_label: "",
		    facet_sort: "index",
		    acet_page: 1
        }
    },
    methods: {
        query(type, val) {
            var params = this.$store.getters['principal/url'].split("?");
            var urlParams = new URLSearchParams(this.$store.getters['principal/url'].split('?')[1]);
            if(!urlParams.has('f['+ type +'][]')){
                urlParams.set('f['+ type +'][]', val);
            } 
            else urlParams.append('f['+ type +'][]', val);

            this.$store.commit('principal/set_url', params[0] + "?" + urlParams.toString());
			this.$store.dispatch('principal/get_data');

		},
        delete_query: function (type, val) {
            var params = this.$store.getters['principal/url'].split("?");
            var urlParams = new URLSearchParams(this.$store.getters['principal/url'].split('?')[1]);
            var urlParamsTmp = new URLSearchParams(urlParams.toString());
            urlParams.forEach(function(value, key) {
                if(key == 'f['+ type +'][]' && value == val)
                    urlParams.delete('f['+ type +'][]');
            });
            urlParamsTmp.forEach(function(value, key) {
                if(key == 'f['+ type +'][]' && value != val)
                    urlParams.append(key, value)
            });
            this.$store.commit('principal/set_url', params[0] + "?" + urlParams.toString());
			this.$store.dispatch('principal/get_data');
		},
        get_data_facet(val) {
            this.facet_label = val
			axios.get(this.facet_url)
				.then(response => {

					this.facet_data = response.data.response.facets.items
					this.facet_page = response.data.response.facets.facet_page
					this.facet_sort = response.data.response.facets.sort
					this.$store.commit('principal/set_modalFacets', true);
                });
        },
        compare_params: function (type, val) {
            var response = false
            var urlParams = new URLSearchParams(this.$store.getters['principal/url'].split('?')[1]);
            urlParams.forEach(function(value, key) {
                if(key == 'f['+ type +'][]' && value == val)
                response = true;
            });

			return response
        }       
    },
    computed:{
        facet_url() {
			return "http://biblio-rep.colmex.mx/catalog/facet/" + this.facet_label + ".json?facet.page=" + this.facet_page + "&facet.sort=" + this.facet_sort
        },
        showModal(){
			return this.$store.state.principal.modalFacets;
		}
    },
    watch:{
        facet_label(){
            return this.facet_label
        }
    }
};