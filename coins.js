AFRAME.registerComponent('coins', {
  init: function() {
    for (var i = 1; i <= 20; i++) {
      var id = `coin${i}`;
      var posX = (Math.random() * 30) - 15; // Adjusted to keep coins closer
      var posY = (Math.random() * 4) - 2; // Adjusted to spread coins vertically
      var posZ = (Math.random() * 30) - 15; // Adjusted to keep coins closer

      var position = { x: posX, y: posY, z: posZ };

      // Get the initial y position of the scubaDiver
      var diverY = document.querySelector('#scubaDiver').getAttribute('position').y;

      // Set the y position of the coin to match the diver's y position
      position.y = diverY;

      this.createCoins(id, position);
    }
  },
  createCoins: function(id, position) {
    var terrain = document.querySelector("#terrain");

    var coinEl = document.createElement("a-entity");
    coinEl.setAttribute("id", id);
    coinEl.setAttribute("position", position);
    coinEl.setAttribute("scale", "2 2 2");
    coinEl.setAttribute("gltf-model", "#coinModel");
    coinEl.setAttribute("animation-mixer", {});
    coinEl.setAttribute("static-body");

    // Adding rotation animation
    coinEl.setAttribute("animation", {
      property: 'rotation',
      to: '0 360 0',
      loop: true,
      dur: 2000, // Duration in milliseconds
      easing: 'linear'
    });

    terrain.appendChild(coinEl);
  }
});
