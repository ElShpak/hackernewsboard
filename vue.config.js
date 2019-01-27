module.exports = {
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
