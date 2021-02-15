let projectile: Sprite = null
let snake = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Enemy)
snake.setPosition(80, 20)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, 0, -50)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, 30, -40)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, 45, -20)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, 50, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, 45, 20)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, 30, 40)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, 0, 50)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, -30, 40)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, -45, 20)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, -50, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, -45, -20)
    projectile = sprites.createProjectileFromSprite(img`
        . . 7 . . 
        . 7 7 7 . 
        7 7 7 7 7 
        . 7 7 7 . 
        . . 7 . . 
        `, snake, -30, -40)
})
