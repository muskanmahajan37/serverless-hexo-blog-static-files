var Hexo = require("hexo");

var hexo = new Hexo(process.cwd(), {});
hexo.init().then( () => {
	console.info("Running Hexo Generate");
	hexo.call("generate",{})
		.then( () => {
			return hexo.exit();
		})
		.catch( () => {
			return hexo.exit();
		});
});