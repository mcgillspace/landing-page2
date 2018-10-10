(function () {

	window.ANGULAR_LOADER = (function () {
		var eventTarget = document.createDocumentFragment();

		return {
			ready : function (componentName, fn) {
				eventTarget.addEventListener(componentName, function () {
					fn.apply(document, arguments);
				});
			},
			dispatch : function (componentName) {
				console.log('dispatching component : ', componentName);
				eventTarget.dispatchEvent(new Event(componentName));
			}
		};
	})();

	angular.module('app', ['ui.router'])
		.run(function ($rootScope, $window) {
			function getDataPropertyOfState(state, property) {
				var comps = [];
				for (var view in state.views) {
					if (state.views.hasOwnProperty(view)) {
						if (state.views[view].data && state.views[view].data[property]) {
							comps = comps.concat(state.views[view].data[property]);
						}
					}
				}
				return comps;
			}

			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
				$window.scrollTo(0, 0);
				event.targetScope.$watch("$viewContentLoaded", function () {
					// console.log('viewContentLoaded', event, toState, toParams, fromState);
					var toStateComps = getDataPropertyOfState(toState, 'components');
					var toStateStartFns = getDataPropertyOfState(toState, 'onStart');
					var fromStateComps = getDataPropertyOfState(fromState, 'components');
					setTimeout(function () {
						toStateComps.filter(comp => !fromStateComps.includes(comp)).forEach(ANGULAR_LOADER.dispatch);
						ANGULAR_LOADER.dispatch('global');

						toStateStartFns.forEach(startFn => startFn());

					}, 100);
				});
			});
		});
})();
