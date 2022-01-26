let colors = ["red", "blue", "yellow", "violet", "green", "orange"]
const colorManagerStates = {}


function createColorManager(color, id) { 
    this.get = function () { 
        return colorManagerStates[id]
    },
    this.next = function () {
        //get color in index of currentcolor+1 then assign to state
        return colorManagerStates[id] = colors[colors.findIndex(e => e == colorManagerStates[id]) + 1]
    },
    this.prev = function () { 
        //get color in index of currentcolor-1 then assign to state
        return colorManagerStates[id] = colors[colors.findIndex(e => e == colorManagerStates[id]) - 1]
    },
    this.reset = function () { 
        return colorManagerStates[id] = color
        }
    
    colorManagerStates[id] = color
}

const colorManager1 = new createColorManager("red", "colorManager1")
const colorManager2 = new createColorManager("blue", "colorManager2")
const colorManager3 = new createColorManager("blue", "colorManager3")


console.log(colorManagerStates);

colorManager1.next(), colorManager1.next(), colorManager1.next(), colorManager2.next(), 

console.log(colorManager1.get(),);

console.log(colorManagerStates);

colorManager1.prev()

console.log(colorManagerStates);

colorManager1.reset()

console.log(colorManagerStates);
