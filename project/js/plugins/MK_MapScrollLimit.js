//=============================================================================
// MK_MapScrollLimit.js
// 地图滚动限制
//=============================================================================
//  author : Mikan 
//  plugin : MK_MapScrollLimit.js 地图滚动限制
// version : v1.0.6 2021/01/26 修复工程改变后，读档丢失区域限制的问题
// ------------------------------------------------------------------------------
// [Twitter] https://twitter.com/_MikanHako/
//  [GitHub] https://github.com/MikanHako1024/
//	[Blog] NONE
//=============================================================================




/*:
 * @plugindesc 地图滚动限制 <MK_MapScrollLimit>
 * @author Mikan 
 * @version v1.0.6 2021/01/26 修复工程改变后，读档丢失区域限制的问题
 *   v1.0.5 2020/07/10 修复了存档前无该插件时，读档报错的问题
 *   v1.0.4 2020/04/12 解决了切换区域时，背景图错位的问题
 *   v1.0.3 2020/04/12 解决了切换到宽度过小的区域时，背景图异常的问题
 *   v1.0.2 2020/04/12 解决了地图滚动同时设置玩家移动路线时，滚动错位的问题
 *   v1.0.1 2020/04/12 添加了一些说明
 *   v1.0.0 2020/04/12 实现了基本功能
 *   v0.1.0 2020/04/11 插件名由 MK_MapViewLimit 地图视野限制 更名为 MK_MapScrollLimit 地图滚动限制
 *   v0.0.0 2020/03/21 开发中
 *   
 * 
 * @param ==== 游戏参数配置 ====
 * 
 * @param 
 * @desc 
 * @default 
 * 
 * @param ==== 插件指令配置 ====
 * 
 * @param 
 * @desc 
 * @default 
 * 
 * @param ==== under ====
 * 
 * 
 * @help
 * ---- 插件指令 ----
 * 
 *   # 设置当前滚动限制 (会自动on).
 *   MapScrollLimit Set 开始x 结束x 开始y 结束y
 *       使用 -1 或 n 表示使用不限制
 *       使用 p 表示当前玩家的对应x或y位置 (不能计算，一般用于设置以玩家为中心)
 * 
 *       eg1 限制只能显示 格子(4,6)到格子(10,12)的矩形范围.
 *       MapScrollLimit Set 4 10 6 12
 * 
 *       eg2 限制只能显示 列号(x)在10~20的范围内.
 *       MapScrollLimit Set 10 20 n n
 *       或 MapScrollLimit Set 10 20 -1 -1
 * 
 *   # 开启限制.
 *   MapScrollLimit On
 * 
 *   # 关闭限制 (不会丢失上一次的范围).
 *   MapScrollLimit Off
 * 
 *   # 清除限制范围 (自动off并丢失上一次的范围).
 *   MapScrollLimit Unset 或 MapScrollLimit Clear
 * 
 *   # 进行x/y方向的滚动，滚动到另一个范围内
 *       (Set是直接跳转的，不能缓慢移动，为了弥补这一点，可以在Set前进行滚动，会暂停，自动off).
 *   MapScrollLimit ScrollX 开始x 结束x 开始y 结束y
 *   MapScrollLimit ScrollY 开始x 结束x 开始y 结束y
 * 
 *       eg1 限制只能显示 格子(4,6)到格子(10,12)的矩形范围，限制前缓慢移动视野.
 *       MapScrollLimit ScrollX 4 10 6 12
 *       MapScrollLimit ScrollY 4 10 6 12
 *       MapScrollLimit Set 4 10 6 12
 *       
 *   # 设置滚动速度 (速度按照MV的规范 1~6，默认4).
 *   MapScrollLimit SetSpeed 速度
 *       
 *   # 允许玩家移动使得地图滚动
 *   MapScrollLimit ScrollByPlayerOn
 *       
 *   # 禁止玩家移动使得地图滚动 
 *       (切换区域自动滚动时，若设置玩家移动路线会使得滚动错位，可以设置该项之后恢复，以解决)
 *   MapScrollLimit ScrollByPlayerOff
 * 
 * 
 * ---- 使用方法 ----
 * 
 *   # 本插件只负责控制地图上的滚动，可以实现限制视野在一定范围内等功能。
 *   # 不负责玩家或事件的实际行走的限制，视野外的事件也仍然会活动。
 * 
 *   # 暂时不清楚在循环地图上的效果和问题。
 * 
 * 
 *   # 限制只能显示 格子(4,6)到格子(10,12)的矩形范围.
 * 
 *     事件  自动触发
 *       ◆插件指令：MapScrollLimit Set 4 10 6 12
 *       ◆暂时消除事件
 *       ◆
 * 
 *   # 划分左右两个区域(列0-26)和(列26-结尾) 经过时触发切换，直接切换.
 * 
 *     ■□□  事件001 (25,10)  玩家触发
 *       ◆插件指令：MapScrollLimit Set -1 26 -1 -1
 *       ◆
 *     
 *     □■□  事件002 (26,10)  玩家触发
 *       ◆变量操作：#0001 玩家方向 = 玩家 的 方向
 *       ◆如果：玩家方向 = 4
 *         ◆插件指令：MapScrollLimit Set -1 26 -1 -1
 *         ◆
 *         ：结束
 *       ◆如果：玩家方向 = 6
 *         ◆插件指令：MapScrollLimit Set 26 30 -1 -1
 *         ◆
 *       ：结束
 *       ◆
 *     
 *     □□■  事件003 (27,10)  玩家触发
 *       ◆插件指令：MapScrollLimit Set 26 30 -1 -1
 *       ◆
 * 
 *   # 划分左右两个区域(列0-29)和(列30-结尾) 经过时触发切换，切换时暂停并滚动.
 * 
 *     公共事件 #0001 Map2 区域1  无
 *       ◆插件指令：MapScrollLimit ScrollX -1 29 -1 -1
 *       ◆插件指令：MapScrollLimit ScrollY -1 29 -1 -1
 *       ◆插件指令：MapScrollLimit Set -1 29 -1 -1
 *       ◆
 * 
 *     公共事件 #0002 Map2 区域2  无
 *       ◆插件指令：MapScrollLimit ScrollX 30 -1 -1 -1
 *       ◆插件指令：MapScrollLimit ScrollY 30 -1 -1 -1
 *       ◆插件指令：MapScrollLimit Set 30 -1 -1 -1
 *       ◆
 * 
 *     ■□  事件003 (29,10)  玩家触发
 *       ◆公共事件：Map2 区域1
 *       ◆
 *     
 *     □■  事件004 (30,10)  玩家触发
 *       ◆公共事件：Map2 区域2
 *       ◆
 * 
 *   # 清除限制，并让镜头缓慢滚动到以玩家为中心.
 *     
 *     事件
 *       ◆插件指令：MapScrollLimit ScrollX p p p p
 *       ◆插件指令：MapScrollLimit ScrollY p p p p
 *       ◆插件指令：MapScrollLimit Set p p p p
 *       ◆插件指令：MapScrollLimit Unset
 * 
 *   # 切换区域时需要设置玩家移动路线的话.
 *     
 *     事件
 *       ◆插件指令：MapScrollLimit ScrollByPlayerOff
 *       ◆变量操作：#0001 玩家方向 = 玩家 的 方向
 *       ◆如果：玩家方向 = 4
 *         ◆设置移动路线：玩家
 *         ：　　　　　　：◇向左移动
 *         ：　　　　　　：◇向左移动
 *         ◆插件指令：MapScrollLimit ScrollX -1 29 -1 -1
 *         ◆插件指令：MapScrollLimit ScrollY -1 29 -1 -1
 *         ◆插件指令：MapScrollLimit Set -1 29 -1 -1
 *         ◆
 *       ：结束
 *       ◆如果：玩家方向 = 6
 *         ◆设置移动路线：玩家
 *         ：　　　　　　：◇向右移动
 *         ：　　　　　　：◇向右移动
 *         ◆插件指令：MapScrollLimit ScrollX 29 77 -1 -1
 *         ◆插件指令：MapScrollLimit ScrollY 29 77 -1 -1
 *         ◆插件指令：MapScrollLimit Set 29 77 -1 -1
 *       
 *       ：结束
 *       ◆插件指令：MapScrollLimit ScrollByPlayerOn
 * 
 * 
 * ---- 标签设置 ----
 * 
 * NONE
 * 
 * 
 * 
 * ---- 参数描述 ----
 * 
 * TODO
 * 
 * 
 * 
 * ---- 用语说明 ----
 * 
 * TODO
 * 
 * 
 * 
 * ---- 开发方法 ----
 * 
 * TODO
 * 
 * 
 * 
 * ---- 使用规约 ----
 * 
 * 如果需要使用本插件，只需要在GitHub给本插件一个Star或Watching即可。
 * 仓库：https://github.com/MikanHako1024/RPGMakerMV-MyPlugins
 * 
 * 这之后，可以对本插件随意修改使用，或二次开发。（但是，请保留页眉的著作权表示部分。）
 * 
 * 使用形式（自由游戏、商业游戏、R-18作品等）没有限制，请随意使用。
 * 
 * 由于使用本插件而发生的问题，作者不负任何责任。有必要时请注意备份。
 * 
 * 如果您有任何要求，您可能需要本插件的版本升级。
 * 根据版本升级，本插件的规格有可能变更。请谅解。
 * 
 * 如果有什么意见或建议可以联系我，欢迎。
 * 
 * 
 * ---- 后续任务 ----
 * 
 *   # 插件指令Set的位置参数 添加 c 表示当前镜头位置
 *       可以完成锁定镜头等操作
 * 
 *   # 插件指令Set的位置参数 添加 \v[xx] 表示使用变量的值
 *       以及其他的一些
 *       可以使得配置更加灵活
 * 
 *   # (也许) 可以记录配置
 *   
 *   # 并且可以让区域配置成矩形拼接的形状
 * 
 * 
 */




var MK_Plugins = MK_Plugins || {};
MK_Plugins.class = MK_Plugins.class || {};


function MK_MapScrollLimit() {
	this.initialize.apply(this, arguments);
};

MK_MapScrollLimit.prototype.constructor = MK_MapScrollLimit;

MK_MapScrollLimit.prototype.initialize = function() {
	this._scrollLimitOn = false;

	this._startX = -1;
	this._endX   = -1;
	this._startY = -1;
	this._endY   = -1;
};

Object.defineProperties(MK_MapScrollLimit.prototype, {
	sX : { 
		get : function () {
			return this._startX >= 0 ? this._startX : 0;
		}, 
		set : function (value) {
			this._startX = value;
		}, 
	}, 
	eX : { 
		get : function () {
			return this._endX >= 0 ? this._endX : $gameMap.width() - 1;
		}, 
		set : function (value) {
			this._endX = value;
		}, 
	}, 
	sY : { 
		get : function () {
			return this._startY >= 0 ? this._startY : 0;
		}, 
		set : function (value) {
			this._startY = value;
		}, 
	}, 
	eY : { 
		get : function () {
			return this._endY >= 0 ? this._endY : $gameMap.height() - 1;
		}, 
		set : function (value) {
			this._endY = value;
		}, 
	}, 
});

// 显示X : sX ~ eX
// 显示Y : sY ~ eY
// displayX : (eX-sX+1 >= screenTileX) sX ~ eX - screenTileX + 1
// displayY : (eY-sY+1 >= screenTileY) sY ~ eY - screenTileY + 1
Object.defineProperties(MK_MapScrollLimit.prototype, {
	width : { 
		get : function () { 
			return this.eX - this.sX + 1; 
		} 
	}, 
	height : { 
		get : function () { 
			return this.eY - this.sY + 1; 
		} 
	}, 
});

// 计算 $gameMap._displayX/Y 的真实 最大最小值
Object.defineProperties(MK_MapScrollLimit.prototype, {
	sDisX : {
		get : function() {
			return this.sX;
		}
	}, 
	eDisX : {
		get : function() {
			return this.eX + 1 - $gameMap.screenTileX();
		}
	}, 
	sDisY : {
		get : function() {
			return this.sY;
		}
	}, 
	eDisY : {
		get : function() {
			return this.eY + 1 - $gameMap.screenTileY();
		}
	}, 
});

MK_MapScrollLimit.prototype.setOn = function() {
	this._scrollLimitOn = true;
};

MK_MapScrollLimit.prototype.setOff = function() {
	this._scrollLimitOn = false;
};

MK_MapScrollLimit.prototype.limitStatus = function() {
	this.refreshMustScroll();
	return !!this._scrollLimitOn;
};

MK_MapScrollLimit.prototype.setRange = function(sx, ex, sy, ey) {
	this.sX = sx;
	this.eX = ex;
	this.sY = sy;
	this.eY = ey;
	this.mustScrollSetOff();
};

MK_MapScrollLimit.prototype.clearRange = function() {
	this.sX = -1;
	this.eX = -1;
	this.sY = -1;
	this.eY = -1;
	this.mustScrollSetOff();
};

MK_MapScrollLimit.prototype.getScrollNewRange = function(sx, ex, sy, ey) {
	var oldDisX = $gameMap._displayX;
	var oldDisY = $gameMap._displayY;
	var oldParX = $gameMap._parallaxX;
	var oldParY = $gameMap._parallaxY;
	var oldLimit = $gameMap._scrollLimit;

	var tempLimit = new MK_MapScrollLimit();
	tempLimit.setRange(sx, ex, sy, ey);
	tempLimit.setOn();
	$gameMap._scrollLimit = tempLimit;

	$gameMap.setDisplayPos(oldDisX, oldDisY);

	var newDisX = $gameMap._displayX;
	var newDisY = $gameMap._displayY;

	$gameMap._displayX = oldDisX;
	$gameMap._displayY = oldDisY;
	$gameMap._parallaxX = oldParX;
	$gameMap._parallaxY = oldParY;
	$gameMap._scrollLimit = oldLimit;

	var direX = oldDisX < newDisX ? 6 : 4;
	var distX = Math.abs(newDisX - oldDisX);
	var direY = oldDisY < newDisY ? 2 : 8;
	var distY = Math.abs(newDisY - oldDisY);
	return [direX, distX, direY, distY];
};

MK_MapScrollLimit.prototype.getScrollNewRangeX = function(sx, ex, sy, ey) {
	var oldDisX = $gameMap._displayX;
	var oldParX = $gameMap._parallaxX;
	var oldLimit = $gameMap._scrollLimit;

	var tempLimit = new MK_MapScrollLimit();
	tempLimit.setRange(sx, ex, oldLimit._startY, oldLimit._endY);
	tempLimit.setOn();
	$gameMap._scrollLimit = tempLimit;

	$gameMap.setDisplayPos(oldDisX, $gameMap._displayY);

	var newDisX = $gameMap._displayX;

	$gameMap._displayX = oldDisX;
	$gameMap._parallaxX = oldParX;
	$gameMap._scrollLimit = oldLimit;

	var direX = oldDisX < newDisX ? 6 : 4;
	var distX = Math.abs(newDisX - oldDisX);
	return [direX, distX];
};

MK_MapScrollLimit.prototype.getScrollNewRangeY = function(sx, ex, sy, ey) {
	var oldDisY = $gameMap._displayY;
	var oldParY = $gameMap._parallaxY;
	var oldLimit = $gameMap._scrollLimit;

	var tempLimit = new MK_MapScrollLimit();
	tempLimit.setRange(oldLimit._startX, oldLimit._endX, sy, ey);
	tempLimit.setOn();
	$gameMap._scrollLimit = tempLimit;

	$gameMap.setDisplayPos($gameMap._displayX, oldDisY);

	var newDisY = $gameMap._displayY;

	$gameMap._displayY = oldDisY;
	$gameMap._parallaxY = oldParY;
	$gameMap._scrollLimit = oldLimit;

	var direY = oldDisY < newDisY ? 2 : 8;
	var distY = Math.abs(newDisY - oldDisY);
	return [direY, distY];
};

MK_MapScrollLimit._scrollSpeed = 4;
MK_MapScrollLimit.prototype.scrollSpeed = function() {
	return this.constructor._scrollSpeed;
};
MK_MapScrollLimit.prototype.setScrollSpeed = function(speed) {
	this.constructor._scrollSpeed = speed;
};

MK_MapScrollLimit.prototype.makeScrollNewRangeList = function(sx, ex, sy, ey) {
	var list = JSON.parse('[{"code":204,"indent":0,"parameters":[2,0,4]},{"code":204,"indent":0,"parameters":[8,0,4]},{"code":0,"indent":0,"parameters":[]}]');
	var params = this.getScrollNewRange(sx, ex, sy, ey);
	list[0].parameters[0] = params[0];
	list[0].parameters[1] = params[1];
	list[0].parameters[2] = this.scrollSpeed();
	list[1].parameters[0] = params[2];
	list[1].parameters[1] = params[3];
	list[1].parameters[2] = this.scrollSpeed();
	return list;
};

MK_MapScrollLimit.prototype.makeScrollNewRangeXList = function(sx, ex, sy, ey) {
	var list = JSON.parse('[{"code":204,"indent":0,"parameters":[2,0,4]}]');
	var params = this.getScrollNewRangeX(sx, ex, sy, ey);
	list[0].parameters[0] = params[0];
	list[0].parameters[1] = params[1];
	list[0].parameters[2] = this.scrollSpeed();
	return list;
};

MK_MapScrollLimit.prototype.makeScrollNewRangeYList = function(sx, ex, sy, ey) {
	var list = JSON.parse('[{"code":204,"indent":0,"parameters":[2,0,4]}]');
	var params = this.getScrollNewRangeY(sx, ex, sy, ey);
	list[0].parameters[0] = params[0];
	list[0].parameters[1] = params[1];
	list[0].parameters[2] = this.scrollSpeed();
	return list;
};

MK_MapScrollLimit.prototype.refreshScrollLimit = function() {
	$gameMap.setDisplayPos($gameMap.displayX(), $gameMap.displayY());
};

MK_MapScrollLimit._scrollByPlayer = true;
MK_MapScrollLimit.prototype.scrollByPlayer = function() {
	return this.constructor._scrollByPlayer;
};
MK_MapScrollLimit.prototype.scrollByPlayerSetOn = function() {
	this.constructor._scrollByPlayer = true;
};
MK_MapScrollLimit.prototype.scrollByPlayerSetOff = function() {
	this.constructor._scrollByPlayer = false;
};

MK_MapScrollLimit._mustScroll = false;
MK_MapScrollLimit.prototype.mustScrollStatus = function() {
	if ($gameMap.isScrolling()) {
		return !!this.constructor._mustScroll;
	}
	else {
		this.mustScrollSetOff();
		return !!this.constructor._mustScroll;
	}
};
MK_MapScrollLimit.prototype.refreshMustScroll = function() {
	this.mustScrollStatus();
};
MK_MapScrollLimit.prototype.mustScrollSetOn = function() {
	this.constructor._mustScroll = true;
};
MK_MapScrollLimit.prototype.mustScrollSetOff = function() {
	this.constructor._mustScroll = false;
};


MK_Plugins.class['MK_MapScrollLimit'] = MK_MapScrollLimit;




(function() {

var _MK_Game_Map_initialize   = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
	_MK_Game_Map_initialize.apply(this, arguments);
	this._scrollLimit = new MK_MapScrollLimit();
};

Game_Map.prototype.requestReloadSaveScrollLimit = function() {
	this._needsReloadSaveScrollLimit = true;
};

var _MK_Game_Map_setup   = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	_MK_Game_Map_setup.apply(this, arguments);
	if (!!this._needsReloadSaveScrollLimit) {
		this._needsReloadSaveScrollLimit = false;
	}
	else {
		this._scrollLimit.clearRange();
	}
};

var _MK_Scene_Load_reloadMapIfUpdated   = Scene_Load.prototype.reloadMapIfUpdated;
Scene_Load.prototype.reloadMapIfUpdated = function() {
	_MK_Scene_Load_reloadMapIfUpdated.apply(this, arguments);
	if ($gameSystem.versionId() !== $dataSystem.versionId) {
		$gameMap.requestReloadSaveScrollLimit();
	}
};

var _MK_Game_Map_scrollDown   = Game_Map.prototype.scrollDown;
Game_Map.prototype.scrollDown = function(distance) {
	if (this._scrollLimit.limitStatus() && !this.isLoopVertical()) {
		if (this._scrollLimit.height >= this.screenTileY()) {
			var lastY = this._displayY;
			this._displayY = Math.min(this._displayY + distance, this._scrollLimit.eDisY);
			this._parallaxY += this._displayY - lastY;
		}
		else {
			var lastY = this._displayY;
			this._displayY = (this._scrollLimit.sDisY + this._scrollLimit.eDisY) / 2;
			this._parallaxY += this._displayY - lastY;
		}
	}
	else if (this._scrollLimit.mustScrollStatus() && !this.isLoopVertical()) {
		var lastY = this._displayY;
		this._displayY = this._displayY + distance;
		this._parallaxY += this._displayY - lastY;
	}
	else {
		_MK_Game_Map_scrollDown.apply(this, arguments);
	}
};

var _MK_Game_Map_scrollLeft   = Game_Map.prototype.scrollLeft;
Game_Map.prototype.scrollLeft = function(distance) {
	if (this._scrollLimit.limitStatus() && !this.isLoopHorizontal()) {
		if (this._scrollLimit.width >= this.screenTileX()) {
			var lastX = this._displayX;
			this._displayX = Math.max(this._displayX - distance, this._scrollLimit.sDisX);
			this._parallaxX += this._displayX - lastX;
		}
		else {
			var lastX = this._displayX;
			this._displayX = (this._scrollLimit.sDisX + this._scrollLimit.eDisX) / 2;
			this._parallaxX += this._displayX - lastX;
		}
	}
	else if (this._scrollLimit.mustScrollStatus() && !this.isLoopHorizontal()) {
		var lastX = this._displayX;
		this._displayX = this._displayX - distance;
		this._parallaxX += this._displayX - lastX;
	}
	else {
		_MK_Game_Map_scrollLeft.apply(this, arguments);
	}
};

var _MK_Game_Map_scrollRight   = Game_Map.prototype.scrollRight;
Game_Map.prototype.scrollRight = function(distance) {
	if (this._scrollLimit.limitStatus() && !this.isLoopHorizontal()) {
		if (this._scrollLimit.width >= this.screenTileX()) {
			var lastX = this._displayX;
			this._displayX = Math.min(this._displayX + distance, this._scrollLimit.eDisX);
			this._parallaxX += this._displayX - lastX;
		}
		else {
			var lastX = this._displayX;
			this._displayX = (this._scrollLimit.sDisX + this._scrollLimit.eDisX) / 2;
			this._parallaxX += this._displayX - lastX;
		}
	}
	else if (this._scrollLimit.mustScrollStatus() && !this.isLoopHorizontal()) {
		var lastX = this._displayX;
		this._displayX = this._displayX + distance;
		this._parallaxX += this._displayX - lastX;
	}
	else {
		_MK_Game_Map_scrollRight.apply(this, arguments);
	}
};

var _MK_Game_Map_scrollUp   = Game_Map.prototype.scrollUp;
Game_Map.prototype.scrollUp = function(distance) {
	if (this._scrollLimit.limitStatus() && !this.isLoopVertical()) {
		if (this._scrollLimit.height >= this.screenTileY()) {
			var lastY = this._displayY;
			this._displayY = Math.max(this._displayY - distance, this._scrollLimit.sDisY);
			this._parallaxY += this._displayY - lastY;
		}
		else {
			var lastY = this._displayY;
			this._displayY = (this._scrollLimit.sDisY + this._scrollLimit.eDisY) / 2;
			this._parallaxY += this._displayY - lastY;
		}
	}
	else if (this._scrollLimit.mustScrollStatus() && !this.isLoopVertical()) {
		var lastY = this._displayY;
		this._displayY = this._displayY - distance;
		this._parallaxY += this._displayY - lastY;
	}
	else {
		_MK_Game_Map_scrollUp.apply(this, arguments);
	}
};

var _MK_Game_Map_setDisplayPos   = Game_Map.prototype.setDisplayPos;
Game_Map.prototype.setDisplayPos = function(x, y) {

	var lastDX = $gameMap._displayX;
	var lastDY = $gameMap._displayY;
	var lastPX = $gameMap._parallaxX;
	var lastPY = $gameMap._parallaxY;
	_MK_Game_Map_setDisplayPos.apply(this, arguments);
	if (this._scrollLimit.limitStatus() && !this.isLoopHorizontal()) {
		this._displayX = this._scrollLimit.eDisX < this._scrollLimit.sDisX
			 ? (this._scrollLimit.sDisX + this._scrollLimit.eDisX) / 2
			 : x.clamp(this._scrollLimit.sDisX, this._scrollLimit.eDisX);
		this._parallaxX = lastPX + this._displayX - lastDX;
	}
	if (this._scrollLimit.limitStatus() && !this.isLoopVertical()) {
		var endY = this.height() - this.screenTileY();
		this._displayY = this._scrollLimit.eDisY < this._scrollLimit.sDisY
			 ? (this._scrollLimit.sDisY + this._scrollLimit.eDisY) / 2
			 : y.clamp(this._scrollLimit.sDisY, this._scrollLimit.eDisY);
		this._parallaxY = lastPY + this._displayY - lastDY;
	}
};


var _MK_Game_Player_updateScroll   = Game_Player.prototype.updateScroll;
Game_Player.prototype.updateScroll = function(lastScrolledX, lastScrolledY) {
	if (!$gameMap.isScrolling() || $gameMap._scrollLimit.scrollByPlayer()) {
		_MK_Game_Player_updateScroll.apply(this, arguments);
	}
	else {
	}
}

})();




(function() {

var _MK_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	_MK_DataManager_extractSaveContents.apply(this, arguments);
	if (!$gameMap._scrollLimit) {
		$gameMap._scrollLimit = new MK_MapScrollLimit();
	}
};

})();




(function() {

var _MK_Game_Interpreter_pluginCommand   = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
	_MK_Game_Interpreter_pluginCommand.apply(this, arguments);

	if (/^MapScrollLimit$/i.test(command)) {
		var subCommand = args[0];
		if (/^On$/i.test(subCommand)) {
			$gameMap._scrollLimit.setOn();
		}
		else if (/^Off$/i.test(subCommand)) {
			$gameMap._scrollLimit.setOff();
		}
		else if (/^Clear$/i.test(subCommand) || /^Unset$/i.test(subCommand)) {
			$gameMap._scrollLimit.clearRange();
			$gameMap._scrollLimit.setOff();
		}
		else if (/^Set$/i.test(subCommand)) {
			var range = (args || [])
				.map(function(str, idx) {
						 if (/^p$/.test(str)) return (idx <= 2 ? $gamePlayer.x : $gamePlayer.y);
					else if (/^n$/.test(str)) return -1;
					else return Number.isNaN(Number(str || '-1')) ? -1 : Number(str || '-1');
				});
			range.shift();
			$gameMap._scrollLimit.setRange(...range);
			$gameMap._scrollLimit.setOn();
			$gameMap._scrollLimit.refreshScrollLimit();
		}
		else if (/^ScrollX$/i.test(subCommand)) {
			var range = (args || [])
				.map(function(str, idx) {
						 if (/^p$/.test(str)) return (idx <= 2 ? $gamePlayer.x : $gamePlayer.y);
					else if (/^n$/.test(str)) return -1;
					else return Number.isNaN(Number(str || '-1')) ? -1 : Number(str || '-1');
				});
			range.shift();
			
			var list = $gameMap._scrollLimit.makeScrollNewRangeXList(...range);
			var interpreter = new Game_Interpreter();
			interpreter.setup(list, 0);

			$gameMap._scrollLimit.setOff();
			$gameMap._scrollLimit.mustScrollSetOn();

			interpreter.executeCommand();
			this.setWaitMode('scroll'); // 是否要先判断 
		}
		else if (/^ScrollY$/i.test(subCommand)) {
			var range = (args || [])
				.map(function(str, idx) {
						 if (/^p$/.test(str)) return (idx <= 2 ? $gamePlayer.x : $gamePlayer.y);
					else if (/^n$/.test(str)) return -1;
					else return Number.isNaN(Number(str || '-1')) ? -1 : Number(str || '-1');
				});
			range.shift();
			
			var list = $gameMap._scrollLimit.makeScrollNewRangeYList(...range);
			var interpreter = new Game_Interpreter();
			interpreter.setup(list, 0);

			$gameMap._scrollLimit.setOff();
			$gameMap._scrollLimit.mustScrollSetOn();

			interpreter.executeCommand();
			this.setWaitMode('scroll'); // 是否要先判断 
		}
		else if (/^SetSpeed$/i.test(subCommand)) {
			var speed = Number(args[1] || 0);
			if (speed <= 0) speed = 4;
			$gameMap._scrollLimit.setScrollSpeed(speed);
		}
		else if (/^ScrollByPlayerOn$/i.test(subCommand)) {
			$gameMap._scrollLimit.scrollByPlayerSetOn();
		}
		else if (/^ScrollByPlayerOff$/i.test(subCommand)) {
			$gameMap._scrollLimit.scrollByPlayerSetOff();
		}
	}
};

})();

