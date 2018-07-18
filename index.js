// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}

function appendKitten(name){
  var newKitten = [...kittens]
  newKitten.push(name)
  return newKitten
}

function prependKitten(name){
  var newKitten = [kitten...]
  newKitten.unshift(name)
  return newKitten
}
