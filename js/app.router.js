(function () {


	angular
	.module('app')
	.config(configRoutes);

	configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configRoutes($stateProvider, $urlRouterProvider) {
		$stateProvider
		// .state('navbar', {
		// 	abstract : true,
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'content' : {
		// 			template: '<div ui-view="content"></div>'
		// 		}
		// 	}
		//
		// })
		.state('index', {
			url : "/",
			views : {
				'navbar' : {
					templateUrl: '/templates/navbar/main.html',
					data : {
						components: ['header-sticky']
					}
				},
				'banner' : {
					templateUrl: '/templates/index/banner.html',
					data : {
						components: ['index - banner']
					}
				},
				'content' : {
					templateUrl: '/templates/index/main.html',
					data : {
						components: ['index - content']
					}
				},
				'footer' : {
					templateUrl: '/templates/footer/main.html'
				}
			}
		})
		.state('about', {
			url : "/about",
			views : {
				'navbar' : {
					templateUrl: '/templates/navbar/main.html',
					data : {
						components: ['header-sticky']
					}
				},
				'banner' : {
					templateUrl: '/templates/index/banner.html',
					data : {
						components: ['about - banner']
					}
				},
				'content' : {
					templateUrl: '/templates/about/main.html',
					data : {
						components: ['about - content']
					}
				},
				'footer' : {
					templateUrl: '/templates/footer/main.html'
				}
			}
		})
		// .state('about-csdc', {
		// 	url : "/about/csdc",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/about/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/about/csdc.html'
		// 		}
		// 	}
		// })
		// .state('about-mssg', {
		// 	url : "/about/mssg",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/about/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/about/mssg.html'
		// 		}
		// 	}
		// })
		// .state('about-education', {
		// 	url : "/about/education",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/about/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/about/education.html'
		// 		}
		// 	}
		// })
		// .state('about-policy', {
		// 	url : "/about/policy",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/about/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/about/policy.html'
		// 		}
		// 	}
		// })
		// .state('about-contact', {
		// 	url : "/about/contact",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/about/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/about/contact.html'
		// 		}
		// 	}
		// })
		// .state('competitions', {
		// 	url : "/competitions",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/competitions/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/under-construction.html'
		// 			// templateUrl: '/templates/competitions/main.html'
		// 		}
		// 	}
		// })
		// .state('competitions-csdc', {
		// 	url : "/competitions/csdc",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/competitions/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/under-construction.html'
		// 			// templateUrl: '/templates/competitions/csdc.html'
		// 		}
		// 	}
		// })
		// .state('competitions-seds', {
		// 	url : "/competitions/seds",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/competitions/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/under-construction.html'
		// 			// templateUrl: '/templates/competitions/seds.html'
		// 		}
		// 	}
		// })
		// .state('research', {
		// 	url : "/research",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/research/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/under-construction.html'
		// 			// templateUrl: '/templates/research/main.html'
		// 		}
		// 	}
		// })
		// .state('research-design-projects', {
		// 	url : "/research/design-projects",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/research/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/under-construction.html'
		// 			// templateUrl: '/templates/research/design-projects.html'
		// 		}
		// 	}
		// })
		// .state('research-academic-papers', {
		// 	url : "/research/academic-papers",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/research/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/under-construction.html'
		// 			// templateUrl: '/templates/research/academic-papers.html'
		// 		}
		// 	}
		// })
		// .state('sponsorships', {
		// 	url : "/sponsorships",
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'banner' : {
		// 			templateUrl: '/templates/sponsorships/banner.html'
		// 		},
		// 		'content' : {
		// 			templateUrl: '/templates/under-construction.html'
		// 			// templateUrl: '/templates/sponsorships/main.html'
		// 		}
		// 	}
		// })

		$urlRouterProvider.otherwise('/');
	}

})()
