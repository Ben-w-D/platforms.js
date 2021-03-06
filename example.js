var canvas = document.getElementById('canvas');
var game = new Game({maxVelocity:10, moveSpeed:3, jumpSpeed:10});
var level1 = new Level(200, 0);
var bouncy = new CustomPlatform(()=>{
	game.yVelocity = -13;
}, "yellow")
level1.add(new Platform(0, 475, 500, 25, "platform", ()=>{}, "purple"))
level1.add(new Platform(200, 300, 25, 200))
level1.add(new Platform(300, 300, 200, 25))
level1.add(bouncy.createNew(600, 300, 200, 25))
level1.add(new Platform(600, 300, 25, 200))
level1.add(new Platform(600, 300, 200, 25))
game.add(level1)
var level2 = new Level(0, 0);
game.add(level2)
function gameloop(){

	if (keysPressed[37]){
		game.x -= game.speed;
	}
	if (keysPressed[39]){
		game.x += game.speed;
	}
	if (keysPressed[38]){
		game.jump();
	}
	game.doCollisions(game.x, game.y);
	game.render(canvas);
	game.reset();
};
window.setInterval(gameloop, 10);
