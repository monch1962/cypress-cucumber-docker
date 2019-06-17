import checkIfElementExists from '../lib/checkIfElementExists'

module.exports = (isExisting, elem) => {
    let falseCase = true
    if (isExisting === 'an') {
        falseCase = false
    }
    checkIfElementExists(elem, falseCase)
}