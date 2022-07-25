function areaFunc(shape, width, height) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
document.body.innerHTML = areaFunc("rectangle", 30, 15);
var sharp = ["Triangle", 100];
var ShapeType;
(function (ShapeType) {
    ShapeType["Triangle"] = "TRIANGLE";
    ShapeType["Circle"] = "CIRCLE";
    ShapeType["Cube"] = "CUBE";
})(ShapeType || (ShapeType = {}));
// Access the Enum
ShapeType.Cube; //returns CUBE
