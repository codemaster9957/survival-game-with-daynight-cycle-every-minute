namespace SpriteKind {
    export const object = SpriteKind.create()
    export const Flashlight_holder = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    flashlight.direction = -90
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    flashlight.direction = 180
})
controller.combos.attachCombo("d r", function () {
    flashlight.direction = -320
})
controller.combos.attachCombo("d l", function () {
    flashlight.direction = -230
})
controller.combos.attachCombo("u r", function () {
    flashlight.direction = -45
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    flashlight.direction = 0
})
controller.combos.attachCombo("u l", function () {
    flashlight.direction = -135
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    flashlight.direction = 90
})
let time = 0
let tree: Sprite = null
let flashlight: lightsource.FlashlightLightSource = null
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . f f 5 1 1 1 1 5 f f . . . 
    . . f f f 5 1 1 1 1 5 f f f . . 
    . . f f e 2 5 1 1 5 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 5 5 2 f e e e e f f . . . 
    . . f 1 1 5 e f f e e e f . . . 
    . f 5 1 1 5 2 e e f f f f . . . 
    . f 2 5 5 f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 5 5 2 f e e e e f f . . . 
    . . f 1 1 5 e f f e e e f . . . 
    . f 5 1 1 5 2 e e f f f f . . . 
    . f 2 5 5 f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d e e e e e f . . . 
    . . . f e 4 e d d 4 f . . . . . 
    . . . f 2 2 e d d e f . . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `,img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 5 5 2 f e e e e f f . . . 
    . . f 1 1 5 e f f e e e f . . . 
    . f 5 1 1 5 2 e e f f f f . . . 
    . f 2 5 5 f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 5 5 2 f e e e e f f . . . 
    . . f 1 1 5 e f f e e e f . . . 
    . f 5 1 1 5 2 e e f f f f . . . 
    . f 2 5 f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d e e e e e f . . . 
    . . . f e 4 e d d 4 f 4 . . . . 
    . . . f 2 2 e d d e f e . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 5 5 f . . 
    . . . f e e e f f e 5 1 1 f . . 
    . . . f f f f e e 2 5 1 1 5 f . 
    . . . f e 2 2 2 f f f 5 5 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 5 5 f . . 
    . . . f e e e f f e 5 1 1 f . . 
    . . . f f f f e e 2 5 1 1 5 f . 
    . . . f e 2 2 2 f f f 5 5 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 5 5 f . . 
    . . . f e e e f f e 5 1 1 f . . 
    . . . f f f f e e 2 5 1 1 5 f . 
    . . . f e 2 2 2 f f f 5 5 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 5 5 f . . 
    . . . f e e e f f e 5 1 1 f . . 
    . . . f f f f e e 2 5 1 1 5 f . 
    . . . f e 2 2 2 f f f f 5 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . 4 f 4 d d e 4 e f . . . 
    . . . . e f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e f f e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f e e f f f f f . . 
    . . f f e e e e e e e e f f . . 
    . . f e e e e e e e e e e f . . 
    . . f f f e e e e e e f f f . . 
    . f f e e e e e e e e e e f f . 
    . f e e e e e e e e e e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e f f e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f e e f f f f . . . 
    . . f f e e e e e e e e f f . . 
    . . f e e e e e e e e e e f . . 
    . . f f f e e e e e e f f f . . 
    . . f e e e e e e e e e e f . . 
    . f f e e e e e e e e e e f f . 
    . f f e e e e e e e e e e f f . 
    . . . f e e e e e e e e f . . . 
    . . . e f f f f f f f f 4 e . . 
    . . . 4 f 2 2 2 2 2 e d d 4 . . 
    . . . e f f f f f f e e 4 . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e f f e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f e e f f f f f . . 
    . . f f e e e e e e e e f f . . 
    . . f e e e e e e e e e e f . . 
    . . f f f e e e e e e f f f . . 
    . f f e e e e e e e e e e f f . 
    . f e e e e e e e e e e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e f f e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f e e f f f f . . . 
    . . f f e e e e e e e e f f . . 
    . . f e e e e e e e e e e f . . 
    . . f f f e e e e e e f f f . . 
    . . f e e e e e e e e e e f . . 
    . f f e e e e e e e e e e f f . 
    . f f e e e e e e e e e e f f . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f e . . . 
    . . 4 d d e 2 2 2 2 2 f 4 . . . 
    . . . 4 e e f f f f f f e . . . 
    . . . . . . . . . f f f . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . f f 5 1 1 1 1 5 f f . . . 
    . . f f f 5 1 1 1 1 5 f f f . . 
    . . f f e 2 5 1 1 5 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . f f 5 1 1 1 1 5 f f . . . 
    . . f f f 5 1 1 1 1 5 f f f . . 
    . . f f e 2 5 1 1 5 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . f f 5 1 1 1 1 5 f f . . . 
    . . f f f 5 1 1 1 1 5 f f f . . 
    . . f f e 2 5 1 1 5 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . f f 5 1 1 1 1 5 f f . . . 
    . . f f f 5 1 1 1 1 5 f f f . . 
    . . f f e 2 5 1 1 5 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . e f e 4 d d d d 4 e f . . . 
    . . e 4 d d e 2 2 2 2 f e f . . 
    . . . e d d e 2 2 2 2 f 4 e . . 
    . . . . e e f 5 5 4 4 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . f f f . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingDown)
)
multilights.addFlashLightSource(
mySprite,
0,
70,
50
)
flashlight = multilights.flashlightSourceAttachedTo(mySprite)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 35; index++) {
    tree = sprites.create(assets.image`myImage`, SpriteKind.object)
    tiles.placeOnRandomTile(tree, sprites.castle.tileDarkGrass3)
    tileUtil.setWalls(sprites.castle.tileDarkGrass3, true)
}
pause(100)
multilights.toggleLighting(false)
multilights.addLightSource(mySprite, 3)
game.onUpdateInterval(60000, function () {
    if (time == 0) {
        time = 1
        multilights.toggleLighting(false)
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (time == 1) {
        time = 0
        multilights.toggleLighting(true)
        tiles.setCurrentTilemap(tilemap`level7`)
    }
})
