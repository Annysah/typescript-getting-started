function areaFunc(shape: string, width: number, height: number) {
  let area = width * height;
  return "I'm a " + shape + " with an area of " + area + " cm squared.";
}

document.body.innerHTML = areaFunc("rectangle", 30, 15);

let sharp: [string, number] = ["Triangle", 100];

enum ShapeType {
  Triangle = "TRIANGLE",
  Circle = "CIRCLE",
  Cube = "CUBE",
}

// Access the Enum
ShapeType.Cube; //returns CUBE
