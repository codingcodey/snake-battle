namespace SpriteKind {
    export const Bullet = SpriteKind.create()
    export const SnakeBullet = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Bullet, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    snake.startEffect(effects.halo, 2000)
    snakeLife += -1
    music.baDing.play()
    info.changeScoreBy(1)
    if (snakeLife == 0) {
        game.over(true)
        effects.confetti.startScreenEffect()
        music.powerUp.play()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(img`
        . . 
        . . 
        . . 
        5 5 
        5 5 
        5 5 
        5 5 
        5 5 
        `, fighter, 0, -50)
    music.pewPew.play()
    bullet.setKind(SpriteKind.Bullet)
})
sprites.onOverlap(SpriteKind.SnakeBullet, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
    music.powerDown.play()
    fighter.startEffect(effects.fire, 2000)
})
sprites.onOverlap(SpriteKind.Bullet, SpriteKind.SnakeBullet, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
let projectile: Sprite = null
let bullet: Sprite = null
let fighter: Sprite = null
let snakeLife = 0
let snake: Sprite = null
snake = sprites.create(img`
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
snakeLife = 20
snake.setPosition(80, 20)
fighter = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 2 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 2 . . . . . . . 
    . . . . . . e e 4 e . . . . . . 
    . . . . . . e 2 4 e . . . . . . 
    . . . . . c c c e e e . . . . . 
    . . . . e e 2 2 2 4 e e . . . . 
    . . c f f f c c e e f f e e . . 
    . c c c c e e 2 2 2 2 4 2 e e . 
    c c c c c c e e 2 2 2 4 2 2 e e 
    c c c c c c e e 2 2 2 2 4 2 e e 
    `, SpriteKind.Player)
scene.setBackgroundColor(7)
info.setScore(0)
info.setLife(5)
controller.moveSprite(fighter, 100, 0)
fighter.setPosition(80, 111)
info.startCountdown(60)
game.onUpdateInterval(1800, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . 5 . . 
        . 2 2 2 . 
        5 2 4 2 5 
        . 2 2 2 . 
        . . 5 . . 
        `, snake, 0, -50)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . f . . 
        . 2 f 5 . 
        f f f f f 
        . 5 f 2 . 
        . . f . . 
        `, snake, 30, -40)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . 9 . . 
        . 9 4 9 . 
        9 4 5 4 9 
        . 9 4 9 . 
        . . 9 . . 
        `, snake, 45, -20)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . 4 . . 
        . 3 2 3 . 
        4 8 8 8 4 
        . 3 2 3 . 
        . . 4 . . 
        `, snake, 50, 0)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . 5 . . 
        . e 5 e . 
        5 5 2 5 5 
        . e 5 e . 
        . . 5 . . 
        `, snake, 45, 20)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . 8 . . 
        . 5 2 5 . 
        8 4 8 4 8 
        . 5 2 5 . 
        . . 8 . . 
        `, snake, 30, 40)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . 3 . . 
        . 3 5 3 . 
        3 8 3 8 3 
        . 3 5 3 . 
        . . 3 . . 
        `, snake, 0, 50)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . 2 . . 
        . 4 4 4 . 
        5 4 8 4 5 
        . 4 4 4 . 
        . . 2 . . 
        `, snake, -30, 40)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . a . . 
        . a a a . 
        a a 2 a a 
        . a a a . 
        . . a . . 
        `, snake, -45, 20)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . 9 . . 
        . e a e . 
        9 3 4 3 9 
        . e a e . 
        . . 9 . . 
        `, snake, -50, 0)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . c . . 
        . a 4 2 . 
        9 e 5 1 d 
        . 2 3 a . 
        . . f . . 
        `, snake, -45, -20)
    projectile.setKind(SpriteKind.SnakeBullet)
    projectile = sprites.createProjectileFromSprite(img`
        . . c . . 
        . c 5 e . 
        c 1 f 1 c 
        . e 5 c . 
        . . c . . 
        `, snake, -30, -40)
    projectile.setKind(SpriteKind.SnakeBullet)
})
