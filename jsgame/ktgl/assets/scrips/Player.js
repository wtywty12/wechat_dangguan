// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var Side = cc.Enum({
    left:1,
    right:2
});

cc.Class({
    extends: cc.Component,

    properties: {
        _side : null,
        side : {
            get:function(){
                return this._side;
            },
            set:function(value){
                this._side = value;
            },
            type:Side
        },
        player : cc.Node,
        index : null,
        targetindex :null,
    },
    statics:
    {
        Side
    },
    ctor(){
        this.side = null;
        this.index = 0;
        // this.match_players_node = [];
    },
    init:function(){//maxPlayerNum){
        this.side = Math.random() >0.5 && Side.left || Side.right;
        // this.index = index;
        // this.targetindex = index;
        // for (var i = 1; i < maxPlayerNum; i++) {
            // var node = new cc.Node();
            // var sprite = node.addComponent(cc.Sprite);
            // sprite.spriteFrame = new cc.SpriteFrame(cc.url.raw('resources/ic_morenhead0.png'));
        // }
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = new cc.SpriteFrame(cc.url.raw('resources/ic_morenhead0.png'));
        // var node = new cc.Sprite('resources/ic_morenhead0.png');
        this.player = node;
        // this.match_players_node[index] = this.player;
        // return node
        // return node
    }

});
