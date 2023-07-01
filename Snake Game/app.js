const canvas = document.querySelector("canvas")
const context = canvas.getContext('2d')

let box = 20

let snake = [];
sanke[0] = { x: 10 * box, y: 10 * box }

let food = {
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box
}

let score = 0

let d

document.addEventListener("keydown", direction);

function direction(event) {
	let key = event.keyCode;
	if (key == 37 && d != "RIGHT") {
		d = "LEFT";
	} else if (key == 38 && d != "DOWN") {
		d = "UP";
	} else if (key == 39 && d != "LEFT") {
		d = "RIGHT";
	} else if (key == 40 && d != "UP") {
		d = "Down";
	}
}

function draw() {
	context.clearRect(0, 0, 400, 400)

	for (let i = 0; i < snake.length; i++) {
		context.fillStyle = (i == 0) ? "green" : "white"
		context.fillRect(snake[i].x, snake[i].y, box, box)
		context.strokeStyle = "red"
		context.strokeRect(snake[i].x, snake[i].y, box, box);
	}

	context.fillStyle = "orange"
	context.fillRect(food.x, food.y, x, y);

	let snakeX = snake[0].x
	let snakeY = snake[0].y

	if (d == "LEFT") snakeX -= box;
	if (d == "UP") snakeY -= box;
	if (d == "RIGHT") snakeX += box;
	if (d == "DOWN") snakeY += box;

	if (snakeX == food.x && snakeY == food.y) {
		score++;
		food = {
			x: Math.floor(Math.random() * 15 + 1) * box,
			y: Math.floor(Math.random() * 15 + 1) * box,
		}
	} else {
		snake.pop()
	}

	let newHead = {
		x: snakeX,
		y: snakeY,
	}

	if (snakeX < 0 || snakeY < 0 || snakeX > 19 * box || snakeY > 19 * box || collision(newHead, snake)) {
		clearInterval(game);
		alert("Perdu !")
	}

	snake.unshift(newHead);

	context.fillStyle = "red"
	context.font = "30px Arial"
	context.fillText(score, 2 * box, 1.6 * box)
}

function collision(head, array) {
	for (let g = 0; g < array.length; g++) {
		if (head.x == array[g].x && head.y == array[g].y) {
			return true;
		}
	}
	return false
}

let game = setInterval(draw, 100)


