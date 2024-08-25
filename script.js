AFRAME.registerComponent('diver-movement', {
  schema: {
    speed: { type: 'number', default: 0.1 }
  },
  init: function () {
    this.direction = new THREE.Vector3();
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        this.direction.z = -1; // Move forward (negative z direction)
      } else if (e.key === 'ArrowDown') {
        this.direction.z = 1; // Move backward (positive z direction)
      } else if (e.key === 'ArrowLeft') {
        this.direction.x = -1; // Move left (negative x direction)
      } else if (e.key === 'ArrowRight') {
        this.direction.x = 1; // Move right (positive x direction)
      } else if (e.key === 'KeyW') {
        this.direction.y = 1; // Move up (positive y direction)
      } else if (e.key === 'KeyS') {
        this.direction.y = -1; // Move down (negative y direction)
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        this.direction.z = 0;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        this.direction.x = 0;
      } else if (e.key === 'KeyW' || e.key === 'KeyS') {
        this.direction.y = 0;
      }
    });
  },
  tick: function () {
    const position = this.el.getAttribute('position');
    position.x += this.direction.x * this.data.speed;
    position.y += this.direction.y * this.data.speed;
    position.z += this.direction.z * this.data.speed;
    this.el.setAttribute('position', position);

    // Ensure diver is facing forward
    const rotation = this.el.getAttribute('rotation');
    rotation.y = 180; // Adjust as needed based on initial rotation
    this.el.setAttribute('rotation', rotation);
  }
});
