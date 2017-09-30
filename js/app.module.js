(function () {

	window.ANGULAR_LOADER = (function () {
		var eventTarget = document.createDocumentFragment();

		return {
			ready : function (componentName, fn) {
				eventTarget.addEventListener(componentName, function () {
					fn.apply(document, arguments);
				}, {
					once: true
				});
			},
			dispatch : function (componentName) {
				console.log('dispatching component : ', componentName);
				eventTarget.dispatchEvent(new Event(componentName));
			}
		};
	})();

	angular.module('app', ['ui.router'])
		.run(function ($rootScope) {
			function getComponentsOfState(state) {
				var comps = [];
				for (var view in state.views) {
					if (state.views.hasOwnProperty(view)) {
						if (state.views[view].data && state.views[view].data.components) {
							comps = comps.concat(state.views[view].data.components);
						}
					}
				}
				return comps;
			}

			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
				event.targetScope.$watch("$viewContentLoaded", function () {
					// console.log('viewContentLoaded', event, toState, toParams, fromState);
					var toStateComps = getComponentsOfState(toState);
					var fromStateComps = getComponentsOfState(fromState);
					setTimeout(function () {
						toStateComps.filter(comp => !fromStateComps.includes(comp)).forEach(ANGULAR_LOADER.dispatch);
					}, 0);
				});
			});
		});
})();
