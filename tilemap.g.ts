// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0f000f00010808080808080808080808080802060a0a0a0a0a0a0a0a0a0a0a0a0a07060a090a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a0a0a0a0a0a07040505050505050505050505050503`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0f000f00020202020202020202020202020202020304020203020502020202060202020202020202020202010202020202020203020101020202020202020202020202020202020202020202020202020202030202020203020202020203020202020202020202020202020202020202010202030202020201020202020302020202010202020202020202020202020201010202020202020202020202010202020202020102020202020102020202020302020202020202020202020202020202020202020202020302020201020202020202010202020201020202020202020202020202`, img`
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight1,sprites.dungeon.chestClosed,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
