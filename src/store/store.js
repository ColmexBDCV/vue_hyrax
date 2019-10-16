
import init from './modules/init'
import pages from './modules/pages'

export const store = new Vuex.Store({
	modules: {
        principal: init,
        pages: pages
    }
  })