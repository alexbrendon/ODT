
export function randomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomNum( min, max ) {
	const num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
}
