"use strict";var _createClass=function(){function e(n,s){for(var t=0;t<s.length;t++){var e=s[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(n,s,t){return s&&e(n.prototype,s),t&&e(n,t),n}}();function _classCallCheck(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}var Snow=function(){function n(){_classCallCheck(this,n),this.snow=null}return _createClass(n,[{key:"renderer",value:function(n,s,t,e){return this.snow=new PIXI.Graphics,this.snow.beginFill(16777215,e),this.snow.drawCircle(10,10,t),this.snow.endFill(),this.snow.x=n,this.snow.y=s,app.stage.addChild(this.snow),this.snow.ResetPosition=this.ResetPosition,this.snow}},{key:"rendererSnow",value:function(n,s,t,e){return this.snow=new PIXI.Sprite(PIXI.loader.resources["images/snow.png"].texture),this.snow.x=n,this.snow.y=s,this.snow.width=t,this.snow.height=t,this.snow.alpha=e,this.snow.anchor.x=.5,this.snow.anchor.y=.5,this.snow.ResetPosition=this.ResetPosition,this.snow}},{key:"ResetPosition",value:function(n){n.x<-10&&(n.x=Math.random()*$(".app").width(),n.y=-50),n.y>$(".app").height()&&(n.x=Math.random()*$(".app").width(),n.y=-50)}}]),n}();