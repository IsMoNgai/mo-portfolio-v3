
// interface setup
const carCanvas=document.getElementById("carCanvas");
carCanvas.width=930;

carCanvas.height=window.innerHeight;

const carCtx = carCanvas.getContext("2d");

const viewport = new Viewport(carCanvas, world.zoom, world.offset);


//training amount
const maxSpeed = 3;
const N = 10;
const cars = generateCars(N);
let bestCar = cars[0];

// initializaing the road borders and traffic
const traffic = [];
const roadBorders = world.roadBorders.map((s) => [s.p1, s.p2]);

animate();
function generateCars(N) {
    const startPoints = world.markings.filter((m) => m instanceof Start);
    const cars = [];

    if (startPoints.length > 0) {
        // Loop through each start point
        for (const startPoint of startPoints) {
            const dir = startPoint.directionVector;
            const startAngle = -angle(dir) + Math.PI / 2;

            // Generate N cars at each start point
            for (let i = 1; i <= N; i++) {
                cars.push(new Car(startPoint.center.x, startPoint.center.y, 30, 50, "AI", startAngle, maxSpeed));
            }
        }
    } else {
        // Fallback to a default start point if no startPoints are found
        const defaultPoint = new Point(100, 100);
        const dir = new Point(0, -1);
        const startAngle = -angle(dir) + Math.PI / 2;

        // Generate N cars at the default start point
        for (let i = 1; i <= N; i++) {
            cars.push(new Car(defaultPoint.x, defaultPoint.y, 30, 50, "AI", startAngle, maxSpeed));
        }
    }

    return cars;
}

function animate(time) {
    carPOV = false;

    // Clear the canvas before rendering
    carCtx.clearRect(0, 0, carCanvas.width, carCanvas.height);

    // Update traffic and cars
    traffic.forEach(t => t.update(roadBorders, []));
    cars.forEach(c => c.update(roadBorders, traffic));

    // Draw traffic
    traffic.forEach(t => t.draw(carCtx, "green"));

    // FITNESS FUNCTION:
    const maxFitness = Math.max(...cars.map(c => c.fittness));
    bestCar = cars.find(c => c.fittness === maxFitness);

    world.cars = cars;
    world.bestCar = bestCar;

    // Update viewport based on POV
    if (carPOV) {
        viewport.offset.x = -bestCar.x;
        viewport.offset.y = -bestCar.y;
    } else {
        viewport.offset.x = 250;
        viewport.offset.y = 300;
    }
    viewport.reset();
    const viewPoint = scale(viewport.getOffset(), -1);

    // Draw the world
    world.draw(carCtx, viewPoint, false);

    // Car rendering
    carCtx.globalAlpha = 0.2;
    cars.forEach(c => c.draw(carCtx, "black"));
    carCtx.globalAlpha = 1;
    bestCar.draw(carCtx, "black", true);

    // Request the next animation frame
    requestAnimationFrame(animate);
}
