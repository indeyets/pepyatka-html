define(["app/app"], function(App) {
  "use strict";

  App.TimelineIndexRoute = Ember.Route.extend({
    queryParams: {
      offset: {
        refreshModel: true
      }
    },

    model: function(params) {
      return this.store.findOneQuery('timeline', params.username, { offset: params.offset  })
    },

    deactivate: function() {
      this.controllerFor('pub-sub').unsubscribe()
    },

    setupController: function(controller, model) {
      this.controllerFor('pub-sub').set('channel', model)

      controller.set('model', model)
    }
  })
})
