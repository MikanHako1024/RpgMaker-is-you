/*:
 * @plugindesc CallDebug
 * @author Mikan
 */

(function() {
	try {
		require('nw.gui').Window.get().showDevTools();
	}
	catch (e) {
		console.error(e);
	}
})();

