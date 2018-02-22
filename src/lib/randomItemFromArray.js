export default function randomItemFromArray(items) {
	return items[Math.floor(Math.random()*items.length)];
}