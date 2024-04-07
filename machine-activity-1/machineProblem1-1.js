const data = [
  {
    id: 1,
    brand: "Honda",
    model: "CBR1000RR",
    year: 2022,
    color: "Red",
    engineSize: 1000,
    topSpeed: 186,
    features: [
      "ABS",
      "Quick Shifter",
      "LED Headlights",
      "Adjustable Suspension",
      "Riding Modes",
    ],
    price: 15000,
  },
  {
    id: 2,
    brand: "Harley-Davidson",
    model: "Sportster Iron 883",
    year: 2021,
    color: "Black",
    engineSize: 883,
    topSpeed: 110,
    features: [
      "Cruiser Style",
      "Belt Drive",
      "Forward Controls",
      "Custom Exhaust",
    ],
    price: 9999,
  },
  {
    id: 3,
    brand: "Kawasaki",
    model: "Ninja ZX-6R",
    year: 2023,
    color: "Green",
    engineSize: 636,
    topSpeed: 156,
    features: [
      "Quick Shifter",
      "Traction Control",
      "Slipper Clutch",
      "Adjustable Windscreen",
    ],
    price: 12000,
  },
  {
    id: 4,
    brand: "Yamaha",
    model: "MT-09",
    year: 2022,
    color: "Blue",
    engineSize: 847,
    topSpeed: 135,
    features: [
      "Naked Bike Design",
      "TFT Display",
      "Quick Shifter",
      "Adjustable Suspension",
    ],
    price: 11000,
  },
  {
    id: 5,
    brand: "Ducati",
    model: "Panigale V4",
    year: 2024,
    color: "Yellow",
    engineSize: 1103,
    topSpeed: 211,
    features: [
      "Ohlins Suspension",
      "Brembo Brakes",
      "Power Modes",
      "Quick Shifter",
    ],
    price: 25000,
  },
  {
    id: 6,
    brand: "BMW",
    model: "S1000RR",
    year: 2023,
    color: "White",
    engineSize: 999,
    topSpeed: 186,
    features: [
      "Dynamic Traction Control",
      "Launch Control",
      "Up/Down Quick Shifter",
      "Adjustable Riding Modes",
    ],
    price: 18000,
  },
  {
    id: 7,
    brand: "Suzuki",
    model: "GSX-R750",
    year: 2022,
    color: "Black/Blue",
    engineSize: 750,
    topSpeed: 165,
    features: [
      "Race-Ready Design",
      "Brembo Monobloc Calipers",
      "Quick Shifter",
      "Traction Control",
    ],
    price: 13000,
  },
  {
    id: 8,
    brand: "Indian",
    model: "Chieftain",
    year: 2023,
    color: "Brown",
    engineSize: 1811,
    topSpeed: 115,
    features: [
      "Touring Bike",
      "Touchscreen Infotainment",
      "Cruise Control",
      "Keyless Ignition",
    ],
    price: 22000,
  },
  {
    id: 9,
    brand: "Triumph",
    model: "Street Triple RS",
    year: 2022,
    color: "Silver",
    engineSize: 765,
    topSpeed: 166,
    features: [
      "Brembo Brakes",
      "Quick Shifter",
      "Adjustable Suspension",
      "Triumph Shift Assist",
    ],
    price: 14000,
  },
  {
    id: 10,
    brand: "Aprilia",
    model: "Tuono V4 1100",
    year: 2024,
    color: "Red",
    engineSize: 1077,
    topSpeed: 175,
    features: [
      "Semi-Active Suspension",
      "Cornering ABS",
      "Quick Shifter",
      "Ride-By-Wire Throttle",
    ],
    price: 19000,
  },
];
function getMotorcycles() {
  return data;
}
function getMotorcycle(id) {
  return data.find((d) => d.id === id);
}
//number 1
// const motorcycle = getMotorcycle(1);
// const { brand, model, year } = motorcycle;
// console.log(brand, model, year);

//number 2
// const motorcycle = getMotorcycle(3);
// const { brand, color, topSpeed } = motorcycle;
// console.log(brand, color, topSpeed);

//number 3
// const motorcycle = getMotorcycle(3);
// const { model, engineSize, price } = motorcycle;
// console.log(model, engineSize, price);

//number 4
// const motorcycle = getMotorcycle(10);
// const [firstFeature, secondFeature] = motorcycle.features;
// console.log(firstFeature, secondFeature);

//number 5
// const motorcycle = getMotorcycle(10);
// const [firstFeature, secondFeature, ...otherFeature] = motorcycle.features;
// console.log(firstFeature, secondFeature, otherFeature);

//number 6
// const motorcycle = getMotorcycle(1);
// const newFeature = "GPS Navigation";
// const updatedFeature = [...motorcycle.features, newFeature];
// const updatedMotorcycle = { ...motorcycle, features: updatedFeature };
// console.log(updatedMotorcycle);

//number 7
// const motorcycle = getMotorcycle(5);
// const updatedMotorcycle = { ...data[4], type: "Sports Bike" };
// console.log(updatedMotorcycle);

//number 8
// const motorcycle = getMotorcycle(3);
// const updatedMotorcycle = {
//   ...data[2],
//   topSpeed: data[2].topSpeed + 10,
//   color: "Black",
// };
// console.log(updatedMotorcycle);

//number 9
// const updatedMotorcycle = data.map((motorcycle) => ({
//   ...motorcycle,
//   price:
//     motorcycle.year === 2022
//       ? motorcycle.price * 1.05
//       : motorcycle.price * 0.97,
// }));
// console.log(updatedMotorcycle);

// number 10
// const updatedMotorcycle = data.map((motorcycle) => ({
//   ...motorcycle,
//   discounted: motorcycle.price > 15000,
// }));
// console.log(updatedMotorcycle);

//number 11
// const add = (a, b) => a + b;
// console.log(add(1, 1));

//number 12
// const greet = (name) => `Hello, ${name}!`;
// const greeting = greet("Miguel");
// console.log(greeting);

//number 13
// const square = (x) => x * x;
// const area = square(2);
// console.log(area);

//number 14-15
// const multiplyAndAdd = (a, b, c) => {
//   let result = a * b;
//   result += c;
//   return result;
// };
// const total = multiplyAndAdd(2, 4, 6);
// console.log(total);
