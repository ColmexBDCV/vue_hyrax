export default{
    name: 'helperbar',
    template: '#helperbar',
    props: ['pages', 'total'],
    data(){
        return{
            paginas: 10,
            order: 'Relevancia'
        }
    },
    methods:{
        next_page: function(num){
            this.$store.dispatch('pages/next_page',num);
        },
        per_pages: function(num){
            var params = this.$store.getters['principal/url'].split("?");

			if(params.length > 1){
				var urlParams = new URLSearchParams(this.$store.getters['principal/url'].split('?')[1]);

				if(urlParams.has('per_page')) urlParams.set('per_page', num) 
				else urlParams.append('per_page',num);

                this.$store.commit('principal/set_url', params[0] + "?" + urlParams.toString());
			}else{
				this.$store.commit('principal/set_url', this.$store.getters['principal/url'] + "?per_page=" + num);
            }            
            
            this.$store.dispatch('principal/get_data');
            this.paginas = num;
        },
        order_by: function(param, order){

            var params = this.$store.getters['principal/url'].split("?");

			if(params.length > 1){
				var urlParams = new URLSearchParams(this.$store.getters['principal/url'].split('?')[1]);

				if(urlParams.has('sort')) urlParams.set('sort', param) 
				else urlParams.append('sort',param);

                this.$store.commit('principal/set_url', params[0] + "?" + urlParams.toString());
			}else{
				this.$store.commit('principal/set_url', this.$store.getters['principal/url'] + "?sort=" + param);
            }            
            
            this.$store.dispatch('principal/get_data');
            this.order = order;
            this.$router.push({name:'order'})
        }
    },
    watch: {
        total: function(){
            return this.$store.getters['principal/repo'].pages.total_pages;
        }
    },
    computed:{
        page_from(){
            return this.$store.getters['pages/pagesArray'][0];
        },
        page_to(){
            var array = this.$store.getters['pages/pagesArray'];
            return array[array.length-1];
        }
    }
}