
export function randomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomNum( min, max ) {
	const num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
}


export function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}