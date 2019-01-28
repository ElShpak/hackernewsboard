module.exports = {

		publicPath: process.env.NODE_ENV === 'production'
		  ? '/hackernewsboard/'
		  : '/',
	  
	css: {
		loaderOptions: {
			sass: {
				data: `
            @import "@/style/_var.scss";
            @import "@/style/_mixins.scss";
        `
			}
		}
	}
};
