let animal = ['Cat', 'Cat', 'Cat', 'Bat']
let alphabet = 'c'
/// TEST CASE  : ['Cat', 'Cat', 'Cat', 'Bat'] , ['Cat','Bat,'Cat','Bat']

function removeSameData(array) {
    /// Set is the main character of this code (not allowed to have the same element in new array)
    return [...new Set(array)]
}
var arraySolution = function (animal, alphabet) {
    let animalArray = []
    let indexArray = []

    /// for make sure will don't have Uppercase in code
    alphabet = alphabet.toLowerCase()

    /// Get the new array  before go loop check
    animal = removeSameData(animal)

    ///  split data and check === alphabet or not 
    for (let index of animal) {
        let solution = index.toLowerCase().split('')
        for (let i = 0; i < solution.length; i++) {
            if (solution[i] === alphabet) {
                indexArray.push(i)
                animalArray.push(index)
            }
        }
    }

    /// return found or not found
    if (animalArray.length === 0) {
        return console.log('No results found')
    } else {
        return console.log(animalArray + '\n' + indexArray)
    }
}

arraySolution(animal, alphabet);


