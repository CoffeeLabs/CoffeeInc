/*
 * Game class
 */

CoffeeInc = pc.Game.extend('CoffeeInc', {}, {
  /*
   * Game is loading
   */
  onLoading: function() {

  },

  onLoaded : function() {
  
  },

  /*
   * Game is fully loaded
   */

  onReady  : function() {
    this._super(); // DON'T TOUCH DAMMIT

    if(pc.device.devMode) {
      pc.device.loader.setDisableCache();
    }


  }
});
