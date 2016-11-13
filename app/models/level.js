import Ember from 'ember';

export default Ember.Object.extend({
  teleport: true,
  // 0 is a blank space
  // 1 is a wall
  // 2 is a pellet
  layout: [
    [1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 3, 1],
    [1, 2, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 2 ,1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 3, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 2, 1, 1, 1, 1],
  ],
  startingPac: {
    x: 3,
    y: 3
  },
  startingGhosts: [{
    x: 1,
    y: 1
  }, {
    x: 5,
    y: 5
  }],
  ghostRetreat: {
    x: 4,
    y: 3
  },

  squareSize: 30,
  height: Ember.computed('grid', function() {
    return this.get('grid.length');
  }),
  width: Ember.computed('grid', function() {
    return this.get('grid.firstObject.length');
  }),
  pixelWidth: Ember.computed(function(){
    return this.get('width') * this.get('squareSize');
  }),
  pixelHeight: Ember.computed(function() {
    return this.get('height') * this.get('squareSize');
  }),

  isComplete() {
    let hasPelletsLeft = false;
    let grid = this.get('grid');

    grid.forEach((row) => {
      row.forEach((cell) => {
        if (cell == 2) {
          hasPelletsLeft = true;
        }
      });
    });

    return !hasPelletsLeft;
  },

  restart() {
    let newGrid = jQuery.extend(true, [], this.get('layout'));
    this.set('grid', newGrid);
  },
});
