import { useEffect } from 'react';

const CarSimulation = () => {
  useEffect(() => {
    const loadScripts = async () => {
      const scripts = [
        'world/js/world.js',
        'world/js/viewport.js',
        'world/js/markings/marking.js',
        'world/js/markings/stop.js',
        'world/js/markings/crossing.js',
        'world/js/markings/start.js',
        'world/js/editors/markingEditor.js',
        'world/js/editors/graphEditor.js',
        'world/js/editors/stopEditor.js',
        'world/js/editors/crossingEditor.js',
        'world/js/editors/startEditor.js',
        'world/js/items/tree.js',
        'world/js/items/building.js',
        'world/js/math/utils.js',
        'world/js/math/graph.js',
        'world/js/primitives/point.js',
        'world/js/primitives/segment.js',
        'world/js/primitives/polygon.js',
        'world/js/primitives/envelope.js',
        'world/saves/moName.world',
        'world/visualizer.js',
        'world/network.js',
        'world/sensor.js',
        'world/utils.js',
        'world/controls.js',
        'world/car.js',
        'world/main.js'
      ];

      // Check if scripts have been loaded already
      if (!localStorage.getItem('scriptsLoaded')) {
        localStorage.setItem('scriptsLoaded', 'true');
        console.log("Scripts loaded and set flag.");

        for (const src of scripts) {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          document.body.appendChild(script);

          // Wait until the script is loaded
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
          });
        }
      } else {
        console.log("Scripts already loaded, skipping.");
      }
    };

    loadScripts();

    localStorage.removeItem('scriptsLoaded');

    // Cleanup function
    return () => {
      console.log("Cleanup function executed");
      localStorage.removeItem('scriptsLoaded');
      console.log("LocalStorage after removal:", localStorage);
    };
  }, []);

  return (
    <canvas 
      className='      
      w-full 
      h-1/2 
      top-[-50px]
      sm:w-full
      sm:top-[-100px] 
      md:w-full
      md:top-[-100px]
      lg:w-full 
      lg:top-[-150px]
      relative
      z-100
      '
      id="carCanvas"
    ></canvas>
  );
};

export default CarSimulation;
