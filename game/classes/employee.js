/*
 * Employee class
 */

var Employee = pc.Base.extend('Employee', {}, {
  /*
   * Default values
   */

  skill        : 1,
  minimumSalary: 500,
  salary       : 0,
  skillBonus   : 0,

  /*
   * Constructor and functions
   */

  init: function() {
    skillBonus = Math.floor(Math.random() * 10) + 1;
  },

  modifySalary: function(amount) {
    salary += amount; 
  }, 

  updateSkill: function() {
    if(satisfaction - prevSat !== 0) {
      skill = 1; // algorithm for skills
    }

    prevSat = satisfaction;
  } 
});
