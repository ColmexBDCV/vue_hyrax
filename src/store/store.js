
import init from './modules/init.js'
import pages from './modules/pages.js'

export const store = new Vuex.Store({
	modules: {
        principal: init,
        pages: pages
    }
  })