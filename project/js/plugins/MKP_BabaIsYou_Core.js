/*!
 * MKP_BabaIsYou_Core - v0.2.2.branch1
 * Updated : 2021-11-16T19:21:00+0800
 * 
 * https://github.com/MikanHako1024/RpgMaker-is-you
 * Copyright (C) 2021 Mikan(MikanHako)
 * 
 * Released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */


/*:
 * ================================================================
 * [Twitter] https://twitter.com/_MikanHako/
 * -[GitHub] https://github.com/MikanHako1024/
 * ---[Blog] Coming soon
 * -----[QQ] 312859582
 * ================================================================
 * 
 * @plugindesc BabaIsYou复刻-核心 <MKP_BabaIsYou_Core>
 * @author Mikan (MikanHako)
 * @url https://github.com/MikanHako1024/RpgMaker-is-you
 * @version 
 *   v0.2.2.branch1 (2021-11-16T19:21:00+0800)
 *     修正部分插件说明
 *     修复回退朝向的问题
 *     修复地图刷新时图块类事件显示异常问题
 * 
 * 
 * 
 * 
 * @help
 * 
 * BabaIsYou复刻-核心 <MKP_BabaIsYou_Core>
 * 
 * ## 简要说明
 * 
 * TODO
 * 
 * 
 * ## 其他说明
 * 
 * #### Baba对象类型
 * > Baba对象的类型 包括 Item 和 Text  
 * > 其中 Text 可以是 Word 或 Rule  
 * 
 * | type  | description |
 * | :---: | :---------- |
 * | Item  | 实物。 如 baba 为 baba(兔子?) ; key 为 钥匙 |
 * | Tile  | 图块实物。 如 wall 和 grass 其图像会根据四周同种物体的情况改变 |
 * | Role  | 角色实物。 |
 * | Floor | 地板实物。 如 tile 和 grass 为其设置更低的图层优先级 |
 * | Text  | 文字。 如 text_baba 为 文字baba ; text_is 为 文字is |
 * | Word  | 实物文字。 实物对应的文字 |
 * | Rule  | 规则文字。 作为规则的文字 |
 * 
 * #### Baba对象
 * > 已实现的Baba对象  
 * 
 * | name     | Item | Tile | Role | Floor | Text | Word | Rule | description |
 * | :------: | :--: | :--: | :--: | :---: | :--: | :--: | :--: | :---------: |
 * | baba     |  √   |      |  √   |       |  √   |  √   |      | TODO        |
 * | key      |  √   |      |      |       |  √   |  √   |      | TODO        |
 * | door     |  √   |      |      |       |  √   |  √   |      | TODO        |
 * | flag     |  √   |      |      |       |  √   |  √   |      | TODO        |
 * | rock     |  √   |      |      |       |  √   |  √   |      | TODO        |
 * | tree     |  √   |      |      |       |  √   |  √   |      | TODO        |
 * | tile     |  √   |      |      |  √    |  √   |  √   |      | TODO        |
 * | keke     |  √   |      |  √   |       |  √   |  √   |      | TODO        |
 * | wall     |  √   |  √   |      |       |  √   |  √   |      | TODO        |
 * | grass    |  √   |  √   |      |  √    |  √   |  √   |      | TODO        |
 * | you      |      |      |      |       |  √   |      |  √   | TODO        |
 * | win      |      |      |      |       |  √   |      |  √   | TODO        |
 * | stop     |      |      |      |       |  √   |      |  √   | TODO        |
 * | push     |      |      |      |       |  √   |      |  √   | TODO        |
 * | move     |      |      |      |       |  √   |      |  √   | TODO        |
 * | is       |      |      |      |       |  √   |      |      | TODO        |
 * | and      |      |      |      |       |  √   |      |      | TODO        |
 * | not      |      |      |      |       |  √   |      |      | TODO        |
 * | on       |      |      |      |       |  √   |      |      | TODO        |
 * 空 表示 ×
 * 
 * 
 * ## 使用方法
 * 
 * #### 编辑baba谜题的方法
 * TODO
 * 
 * #### 进入baba谜题的方法
 * ◆脚本：$gameMap.baba_enableBabaMap();
 * ...
 * 
 * #### baba谜题的操作方法
 * + up arrow : 上移动
 * + down arrow : 下移动
 * + left arrow : 左移动
 * + right arrow : 右移动
 * + z (ok) : 等待
 * + x (cancel) : 回退 (暂不支持使用backspace)
 * + page up : (暂时) 打开规则列表
 * + page down : (暂时) 关闭规则列表
 * 
 * 
 * ## 标签设置
 * 
 * | type  | description           | note     |
 * | :---  | :------------------   | :------- |
 * | Map   | 包含Baba谜题的地图     | `<baba is you:x, y, width, height>` |
 * | Map   | 显示gameover画面的事件 | `<BIY puzzle gameover start:事件id>` |
 * | Map   | 隐藏gameover画面的事件 | `<BIY puzzle gameover end:事件id>` |
 * | Event | 作为Baba对象的事件     | `<baba is you:name>` |
 * 
 * #### 包含Baba谜题的地图
 * > 地图备注  
 * > 设置地图为Baba地图，使其包含的Baba事件生效  
 * > 可以设置Baba地图边界，缺省时，默认为整个地图  
 * 
 * ` <baba is you:x, y, width, height> `  
 * ` <baba is you:0, 0, 17, 13> `  
 * + baba is you
 *   - 标签名
 *   - 固定写法，区分大小写
 *   - 不能包含多余空格
 * + [x, y, width, height]
 *   - 地图边界
 *   - 逗号分隔的四个整数
 *   - 分别为边界左上角坐标、边界宽高
 *   - 缺省时，地图边界默认为整个地图
 * 
 * #### 显示gameover画面的事件
 * > 触发gameover时执行的事件
 * 
 * ` <BIY puzzle gameover start:事件id> `  
 * + BIY puzzle gameover start
 *   - 标签名
 *   - 固定写法，区分大小写
 *   - 不能包含多余空格
 * + 事件id
 *   - 所执行事件的事件id
 *   - 数值，正整数
 * 
 * #### 隐藏gameover画面的事件
 * > 解除gameover时执行的事件
 * 
 * ` <BIY puzzle gameover start:事件id> `  
 * + BIY puzzle gameover start
 *   - 标签名
 *   - 固定写法，区分大小写
 *   - 不能包含多余空格
 * + 事件id
 *   - 所执行事件的事件id
 *   - 数值，正整数
 * 
 * #### 作为Baba对象的事件
 * > 事件备注  
 * > 设置事件为Baba对象，需要设置对象名  
 * 
 * ` <baba is you:name> `  
 * ` <baba is you:text_baba> `  
 * + baba is you
 *   - 标签名
 *   - 固定写法，区分大小写
 *   - 不能包含多余空格
 * + name
 *   - Baba对象名
 *   - 小写字母，或 text_ + 小写字母
 *   - 详见【其他说明】-【Baba对象】
 *   - 作为Item时，对象名为 name，如 baba
 *   - 作为Text时，对象名为 text_ + name，如 text_baba
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] 解决wall染色卡顿问题
 * - [ ] 破坏类规则 : weak, melt, hot, open, shut, defeat, sink 及特殊影响规则float
 * - [ ] ...
 * 
 * ## 联系方式
 * [Twitter] https://twitter.com/_MikanHako/  
 * -[GitHub] https://github.com/MikanHako1024/  
 * ---[Blog] Coming soon  
 * -----[QQ] 312859582  
 * 
 * 如需在鸣谢名单中显示插件作者名，可以显示此ID :  
 * Mikan(MikanHako)  
 * 
 * 
 * ## 使用规约
 * MIT License  
 * Copyright (C) 2021 Mikan(MikanHako)  
 * http://opensource.org/licenses/mit-license.php  
 * 
 * 本插件使用 MIT协议  
 * 这意味着：  
 * 1. 任何人可以使用、修改、复制、分发本插件。
 * 2. 使用形式不受限制，可以用于交流学习或者用于商用。
 * 3. 插件原作者不对使用本插件的创作作品做担保和负责。
 * 4. 在插件和插件的所有副本中都必须包含以上版权声明和本许可声明。
 * 
 * --------------------------------
 * ENDLINE
 * 
 * 
 * 
 * 
 * @param ---- 游戏参数配置 ----
 * 
 * @param 
 * @text 
 * @desc 
 * @type 
 * @default 
 * @parent 
 * 
 * @param ---- 插件指令配置 ----
 * 
 * @param 
 * @text 
 * @desc 
 * @type 
 * @default 
 * 
 * @param ---- 内容数据配置 ----
 * 
 * @param 
 * @text 
 * @desc 
 * @type 
 * @default 
 * 
 * @param ---- endline ----
 * 
 */




(function() {

// ----------------------------------------------------------------
// Game_Map
// baba地图

// --------------------------------
// 初始化

const _MK_Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	_MK_Game_Map_setup.apply(this, arguments);

	if (this.baba_isBabaMap()) {
		this.baba_initBabaMap();

		this.baba_updateItemRuleAll();
		// 初始化中更新规则后 无需进行 is变换 等处理
		this.baba_updateTileEventImageAll();
	}
};

Game_Map.prototype.baba_isBabaMap = function() {
	return !!$dataMap.meta['baba is you'] || $dataMap.meta['baba is you'] === '';
};

Game_Map.prototype.baba_initMapSize = function() {
	var mapSizeStr = $dataMap.meta['baba is you'];
	mapSizeStr = typeof mapSizeStr === 'string' ? mapSizeStr : '';
	var arr = mapSizeStr.split(',');
	var x = parseInt(arr[0]);
	var y = parseInt(arr[1]);
	var w = parseInt(arr[2]);
	var h = parseInt(arr[3]);
	if (Number.isNaN(x) || Number.isNaN(y) || Number.isNaN(w) || Number.isNaN(h)) {
		x = 0;
		y = 0;
		w = this.width();
		h = this.height();
	}
	this._baba_mapSizeX = x;
	this._baba_mapSizeY = y;
	this._baba_mapSizeW = w;
	this._baba_mapSizeH = h;
};
Game_Map.prototype.baba_initBabaMap = function() {
	this._babaMapEnabled = false;

	this.baba_initBabaEventAnimation();

	this.baba_initPuzzleWin();
	this.baba_initPuzzleGameover();

	this.baba_initMapSize();

	this.baba_setupBabaEventsByTileset();

	this.baba_checkObjectExistAll();

	this._baba_isMoving = false;
	this._baba_inputWait = 0;
	this.baba_initItemRules();
};

Game_Map.prototype.baba_checkObjectExistAll = function() {
	this.baba_babaEvents()
		.filter(e => !this.baba_checkTypeIsItem(e._baba_item)
			 && !this.baba_checkTypeIsText(e._baba_item), this)
		.forEach(e => {
			console.warn(`baba object without config : eventId ${e._eventId}, baba_objectName ${e._baba_item}`);
		});
};


// --------------------------------
// 启用禁用

Game_Map.prototype.baba_isBabaMapEnabled = function() {
	return this.baba_isBabaMap() && this._babaMapEnabled;
};
Game_Map.prototype.baba_enableBabaMap = function() {
	this._babaMapEnabled = true;
};
Game_Map.prototype.baba_disableBabaMap = function() {
	this._babaMapEnabled = false;
};

// 修改 canMove 使角色无法移动
const _MK_Game_Player_canMove = Game_Player.prototype.canMove;
Game_Player.prototype.canMove = function() {
	var res = _MK_Game_Player_canMove.apply(this, arguments);
	if (!!res) {
		return !$gameMap.baba_isBabaMapEnabled();
	}
	else {
		return res;
	}
};


// --------------------------------
// update

const _MK_Game_Map_updateInterpreter = Game_Map.prototype.updateInterpreter;
Game_Map.prototype.updateInterpreter = function() {
	// 进入谜题时 阻止其他命令指令 完成后再继续执行
	// 但这样将无法在 谜题进行时 进行其他事件触发

	if (this.baba_isBabaMapEnabled()) {
		if (this.baba_puzzleEventIsRunning()) {
			this.baba_updatePuzzleEventInterpreter();
		}
		else {
			this.baba_updateBabaMapTurn();
		}

	}
	else {
		_MK_Game_Map_updateInterpreter.apply(this, arguments);
	}

	// 地图不可用时 也要 更新baba事件的Pattern
	this.baba_updateBabaEventAnimation();
};

Game_Map.prototype.baba_puzzleEventIsRunning = function() {
	return !!this._baba_puzzleInterpreter;
};
Game_Map.prototype.baba_updatePuzzleEventInterpreter = function() {
	if (this._baba_puzzleInterpreter) {
		this._baba_puzzleInterpreter.update();
		if (this._baba_puzzleInterpreter.isRunning()) {
			return true;
		} else {
			this._baba_puzzleInterpreter = null;
			return false;
		}
	}
};

Game_Map.prototype.baba_updateBabaMapTurn = function() {
	var haveInput = false;
	var inputChanged = false;

	if (this.baba_canInput()) {
		var inputSingnal = this.baba_getInputSignal();
		if (inputSingnal > 0) {
			// 有操作才进行更新

			// 添加移动
			if (inputSingnal == 1) {
				// 写入移动
				this.baba_updateNewRouteTurnAll();
				this.baba_updateInputMove(Input.dir4);
				this._baba_isMoving = true;
			}
			else if (inputSingnal == 2) {
				// 写入移动
				this.baba_updateNewRouteTurnAll();
				this.baba_updateInputWait();
				this._baba_isMoving = true;
			}
			else if (inputSingnal == 3) {
				// 写入移动
				this.baba_updateInputBack();
				this.baba_updatePopRouteTurnAll();
				this._baba_isMoving = true;
			}
			// TODO : ...

			var back = (inputSingnal == 3);
			if (!back) {
				// YouMove or WaitMove
				if (this.baba_checkHaveAnyReadyRoute()) {
					inputChanged = true;
					// 执行移动
					this.baba_updateExecuteMoveAll(back);
				}
				else {
					this.baba_updatePopRouteTurnAll();
				}
			}
			else {
				// BackMove
				// 执行移动
				this.baba_updateExecuteMoveAll(back);
				inputChanged = true;
			}

			this.baba_updateItemRuleAll();

			var isTransformChanged = this.baba_updateRuleEffect_isTransform();
			if (isTransformChanged) {
				this.baba_updateItemRuleAll();
				inputChanged = true;
			}

			this.baba_updateTileEventImageAll();

			var puzzleWin = this.baba_updatePuzzleWin();
			if (puzzleWin) {
				//console.log('success');
			}

			haveInput = true;
		}
	}

	// 没有输入时 也要处理游戏结束的计时
	var puzzleGameover = this.baba_updatePuzzleGameover(inputChanged);
	if (puzzleGameover) {
		//console.log('gameover');
	}

	this.baba_updateInputWaitCount(haveInput);

	// 临时
	// 通知 SceneMap 刷新显示规则
	if (haveInput) {
		this._baba_somethingChanged = true;
		// 通知 规则列表窗口 更新
	}
};


Game_Map.prototype.baba_isMoving = function() {
	// 获取前更新
	if (this._baba_isMoving) {
		var isMoving = this.baba_babaEvents()
			.some(e => e.baba_isMoving());
		this._baba_isMoving = isMoving;
	}
	return this._baba_isMoving;
};
Game_Map.prototype.baba_updateInputWaitCount = function(wait) {
	if (wait) {
		this._baba_inputWait = 10;
		// speed = 5 时 每次移动需要等待 1 / (Math.pow(2, speed) / 256) = 8 帧

		// TODO : 可配置
		// TODO : 连续移动/回退减少间隔 等
	}
	if (this._baba_inputWait > 0) {
		this._baba_inputWait--;
	}
};
Game_Map.prototype.baba_canInput = function() {
	return this._baba_inputWait <= 0 && !this.baba_isMoving();
};

// 分离 检测输入 与 写入准备的移动
Game_Map.prototype.baba_getInputSignal = function() {
	if (Input.dir4 > 0) {
		return 1;
	}
	else if (Input.isRepeated('ok')) {
		return 2;
	}
	else if (Input.isRepeated('escape')) {
		return 3;
	}
	else {
		return 0;
	}
};


Game_Map.prototype.baba_updateInputMove = function(direction) {
	// 无you规则物体时 方向键不代替wait
	if (this.baba_babaEvents()
			.some(e => e.baba_checkRule('you'))) {
		this.baba_addYouMoveAll(direction);
		this.baba_addMoveMoveAll();
	}
};
Game_Map.prototype.baba_updateInputWait = function() {
	this.baba_addMoveMoveAll();
};
Game_Map.prototype.baba_updateInputBack = function() {
	this.baba_addBackMoveAll();
};


Game_Map.prototype.baba_updateNewRouteTurnAll = function() {
	this.baba_babaEvents()
		.forEach(e => e.baba_newRouteTurn());
	// 增加隐藏baba事件的记录
	this.baba_hidedBabaEvents()
		.forEach(e => e.baba_newHidedRouteTurn());
};
Game_Map.prototype.baba_updatePopRouteTurnAll = function() {
	this.baba_babaEvents()
		.forEach(e => e.baba_popRouteTurn());
	// TODO : 无历史记录的对象 将摧毁 (相应地 需要有添加对象的方法)

	// 增加隐藏baba事件的记录
	this.baba_hidedBabaEvents()
		.forEach(e => e.baba_popRouteTurn());
};

Game_Map.prototype.baba_updateExecuteMoveAll = function(back) {
	this.baba_babaEvents()
		.forEach(e => e.baba_executeAllMoveStep(back));
};

Game_Map.prototype.baba_checkHaveAnyReadyRoute = function() {
	return this.baba_babaEvents()
		.some(e => e._baba_readyMoveSteps && e._baba_readyMoveSteps.length > 0);
};


// --------------------------------
// 胜利

Game_Map.prototype.baba_checkPuzzleWin = function() {
	// 检查 You规则的对象 和 Win规则的对象重合
	// 可以一个对象同时是You和Win规则
	var youPosMap = {};
	this.baba_babaEvents()
		.filter(e => e.baba_checkRule('you'))
		.forEach(e => youPosMap[[e._x,e._y]] = true);
	var puzzleWin = this.baba_babaEvents()
		.filter(e => e.baba_checkRule('win'))
		.some(e => !!youPosMap[[e._x,e._y]]);
	return puzzleWin;
};

Game_Map.prototype.baba_updatePuzzleWin = function() {
	var puzzleWin = this.baba_checkPuzzleWin();
	if (puzzleWin) {
		this._baba_puzzleWin = true;
		this.baba_disableBabaMap();
	}
	return puzzleWin;
};

Game_Map.prototype.baba_initPuzzleWin = function() {
	this._baba_puzzleWin = false;
};
Game_Map.prototype.baba_setPuzzleWin = function(win) {
	this._baba_puzzleWin = !!win;
};
Game_Map.prototype.baba_isPuzzleWin = function() {
	return this._baba_puzzleWin;
};


// --------------------------------
// 游戏结束(无法行动)

Game_Map.prototype.baba_checkPuzzleGameover = function() {
	// 检查 不存在You规则的对象 表示gameover
	var puzzleGameover = !this.baba_babaEvents()
		.some(e => e.baba_checkRule('you'));
	return puzzleGameover;
};

Game_Map.prototype.baba_updatePuzzleGameover = function(inputChanged) {
	var puzzleGameover = !inputChanged && this.baba_checkPuzzleGameover();
	if (puzzleGameover) {
		if (this._baba_puzzleGameoverCount >= 120) { // TODO : 可配置
			if (this._baba_puzzleGameover != true) {
				this._baba_puzzleGameover = true;
				this.baba_executeEventPuzzleGameoverStart();
			}
		}
		else {
			this._baba_puzzleGameoverCount++;
		}
	}
	else {
		if (this._baba_puzzleGameover != false) {
			this._baba_puzzleGameover = false;
			this.baba_executeEventPuzzleGameoverEnd();
		}
		this._baba_puzzleGameoverCount = 0;
	}
	return this._baba_puzzleGameover;
};

// 新建一个子解释器 用于专门执行babaisyou的事件
Game_Map.prototype.baba_executePuzzleGameoverEvent = function(eventId) {
	var eventData = $dataMap.events[eventId];
	if (eventId > 0 && !!eventData && !!eventData.pages[0]) {
		this._baba_puzzleInterpreter = new Game_Interpreter(0);
		this._baba_puzzleInterpreter.setup(eventData.pages[0].list, eventId);
	}
};

Game_Map.prototype.baba_getPuzzleGameoverStartEventId = function() {
	var eventIdStr = $dataMap.meta['BIY puzzle gameover start'];
	return Number.parseInt(eventIdStr || 0) || 0;
};
Game_Map.prototype.baba_executeEventPuzzleGameoverStart = function() {
	var eventId = this.baba_getPuzzleGameoverStartEventId();
	if (eventId > 0) {
		this.baba_executePuzzleGameoverEvent(eventId);
	}
};

Game_Map.prototype.baba_getPuzzleGameoverEndEventId = function() {
	var eventIdStr = $dataMap.meta['BIY puzzle gameover end'];
	return Number.parseInt(eventIdStr || 0) || 0;
};
Game_Map.prototype.baba_executeEventPuzzleGameoverEnd = function() {
	var eventId = this.baba_getPuzzleGameoverEndEventId();
	if (eventId > 0) {
		this.baba_executePuzzleGameoverEvent(eventId);
	}
};

Game_Map.prototype.baba_initPuzzleGameover = function() {
	this._baba_puzzleGameover = false;
	this._baba_puzzleGameoverCount = 0;
};
Game_Map.prototype.baba_isPuzzleGameover = function() {
	return this._baba_puzzleGameover;
};


// --------------------------------
// 移动

Game_Map.prototype.baba_addYouMoveAll = function(direction) {
	var events = this.baba_babaEvents()
		.filter(e => e.baba_checkRule('you'));
	var flags = events.map(e => false);
	for (var i = 0; i < events.length; i++) {
		if (flags[i]) continue;
		this.baba_addEventMoveStep(events[i]._eventId, direction, true);
		// 检查有移动的you对象 标记为不再处理
		for (var j = 0; j < events.length; j++) {
			if (flags[j]) continue;
			var e = events[j];
			if (e._baba_moveStepTempX != null) {
				if (e._baba_moveStepTempX != e._x || e._baba_moveStepTempY != e._y) {
					// 临时位置有移动
					flags[j] = true;
				}
			}
		}
		flags[i] = true;
	}

	// 写入移动
	this.baba_babaEvents()
		.forEach(e => e.baba_addMoveStep());
};
Game_Map.prototype.baba_addMoveMoveAll = function() {
	this.baba_babaEvents()
		.filter(e => e.baba_checkRule('move'))
		.forEach(e => {
			this.baba_addEventMoveStep(e._eventId, e.direction(), false, true);
		}, this);

	// TODO : 检查 not move
	// TODO : 检查规则被禁止的框架

	// 写入移动
	this.baba_babaEvents()
		.forEach(e => e.baba_addMoveStep());
};
Game_Map.prototype.baba_addShiftMoveAll = function() {
	// 筛选 在 拥有规则shift的对象 上的对象
	// 并向 拥有规则shift的对象的朝向移动
	// 还要考虑 float
	// ...
};


// 为 baba事件 添加准备的移动
// 可以通过 push规则 传递移动到其他 baba事件
// 当不能移动时 停止传递 并拒绝添加移动
Game_Map.prototype.baba_addEventMoveStep = function(eventId, direction, you, rebound) {
	var event = this._events[eventId];
	if (!this.baba_isBabaEvent(event)) {
		console.warn('eror baba event (eventId : ' + eventId + ')', event);
		return false;
	}

	var dx = this.roundXWithDirection(event._baba_moveStepX, direction);
	var dy = this.roundYWithDirection(event._baba_moveStepY, direction);
	if (this.baba_checkEventsStopMove(dx, dy, you)) {
		// 存在 非push 非you(参数you=Ture) 的 stop对象
		// 停止传递 拒绝添加移动 回传false
		if (you) {
			event.baba_setMoveStepTemp(0, direction);
			return false;
		}
		else if (rebound) {
			// 可以反弹
			var d2 = 10 - direction; // 反向
			return this.baba_addEventMoveStep(eventId, d2, you, false);
		}
		else {
			// TODO : 非you移动的撞墙转向问题
		}
		return false;
	}
	else {
		// 不存在 非push 非you(参数you=Ture时) 的 stop对象
		// 检查push传递
		if (this.baba_checkEventsPushMove(dx, dy, you)) {
			// 存在 push对象 或 you且stop对象(参数you=Ture)
			// 不考虑 非push非stop的you对象(参数you=Ture)

			// 进行push传递
			// 递归检查后续是否成功传递 并且添加准备移动
			var canPush = this.baba_addEventsMoveStep(dx, dy, direction, you);

			if (canPush) {
				// 可以传递
				// 添加自身事件的准备移动
				event.baba_setMoveStepTemp(direction, direction);
			}
			else {
				// 不可传递
				if (you) {
					// you移动撞墙转向 (?)
					event.baba_setMoveStepTemp(0, direction);
				}
				else if (rebound) {
					// 可以反弹
					var d2 = 10 - direction; // 反向
					this.baba_addEventMoveStep(eventId, d2, you, false);
				}
				else {
					// TODO : 非you移动的撞墙转向
				}
			}
			return canPush;
		}
		else {
			// 不存在 push 对象
			// 直接添加自身的准备移动
			event.baba_setMoveStepTemp(direction, direction);
			return true;
		}
	}
};

Game_Map.prototype.baba_addEventsMoveStep = function(x, y, direction, you) {
	var dx = this.roundXWithDirection(x, direction);
	var dy = this.roundYWithDirection(y, direction);
	if (this.baba_checkEventsStopMove(dx, dy, you)) {
		// 存在 非push 非you(参数you=Ture) 的 stop对象
		// 停止传递 拒绝添加移动 回传false
		if (you) {
			this.baba_babaEventsMoveStepAt(x, y)
				.filter(e => e.baba_checkRule('you'))
				.forEach(e => e.baba_setMoveStepTemp(0, direction));
		}
		else {
			// TODO : 非you移动的撞墙转向问题
		}
		return false;
	}
	else {
		// 不存在 非push 非you(参数you=Ture) 的 stop对象
		// 检查push传递
		if (this.baba_checkEventsPushMove(dx, dy, you)) {
			// 存在 push对象 或 you且stop对象(参数you=Ture)
			// 不考虑 非push非stop的you对象(参数you=Ture)

			// 进行push传递
			// 递归检查后续是否成功传递 并且添加准备移动
			var canPush = this.baba_addEventsMoveStep(dx, dy, direction, you);

			if (canPush) {
				// 可以传递
				// 添加该坐标的检查了push传递的事件的准备移动
				// 与 baba_checkEventsPushMove 同逻辑
				// 只为 push对象 或 you且stop对象(参数you=Ture) 添加准备移动
				this.baba_addEventPushMoveStep(x, y, direction, you);
			}
			else {
				// 不可传递
				if (you) {
					// you移动撞墙转向
					// ？只有you规则的物体需要撞墙转向 ...
					this.baba_babaEventsMoveStepAt(x, y)
						.filter(e => e.baba_checkRule('you'))
						.forEach(e => e.baba_setMoveStepTemp(0, direction));
				}
				else {
					// TODO : 非you移动的撞墙转向
				}
			}
			return canPush;
		}
		else {
			// 不存在 push 对象
			// 添加该坐标的检查了push传递的事件的准备移动
			this.baba_addEventPushMoveStep(x, y, direction, you);
			return true;
		}
	}
};

// 在baba地图范围内
Game_Map.prototype.baba_checkInMapSize = function(x, y) {
	if (x < this._baba_mapSizeX) return false;
	else if (y < this._baba_mapSizeY) return false;
	else if (this._baba_mapSizeX + this._baba_mapSizeW <= x) return false;
	else if (this._baba_mapSizeY + this._baba_mapSizeH <= y) return false;
	else return true;
};
// 是否阻止移动，不考虑传递
Game_Map.prototype.baba_checkEventsStopMove = function(x, y, you) {
	if (this.baba_checkInMapSize(x, y)) {
		// 边界内

		if (!you) {
			// 非you移动
			return this.baba_babaEventsMoveStepAt(x, y) 
				.filter(e => !e.baba_checkRule('push'))
				.some(e => e.baba_checkRule('stop'));
				// 存在 非push规则 且 有stop规则 的对象
		}
		else {
			// you移动
			return this.baba_babaEventsMoveStepAt(x, y) 
				.filter(e => !e.baba_checkRule('push'))
				.filter(e => !e.baba_checkRule('you'))
				.some(e => e.baba_checkRule('stop'));
				// 存在 非push规则 且 有stop规则 的对象
		}
	}
	else {
		return true;
	}
};

// 是否存在可push对象 (不考虑是否可以实际push)
Game_Map.prototype.baba_checkEventsPushMove = function(x, y, you) {
	if (!you) {
		return this.baba_babaEventsMoveStepAt(x, y) 
			.some(e => e.baba_checkRule('push'));
	}
	else {
		return this.baba_babaEventsMoveStepAt(x, y) 
			.some(e => e.baba_checkRule('push')
				 || (e.baba_checkRule('you') && e.baba_checkRule('stop')));
	}
};

Game_Map.prototype.baba_addEventPushMoveStep = function(x, y, direction, you) {
	if (!you) {
		this.baba_babaEventsMoveStepAt(x, y)
			.filter(e => e.baba_checkRule('push'))
			.forEach(e => e.baba_setMoveStepTemp(direction, direction));
	}
	else {
		this.baba_babaEventsMoveStepAt(x, y)
			.filter(e => e.baba_checkRule('push')
				 || (e.baba_checkRule('you') && e.baba_checkRule('stop')))
			.forEach(e => e.baba_setMoveStepTemp(direction, direction));
	}
};

// 检查 是否可以 BackMove 即 是否至少一个 baba事件 拥有历史路径
Game_Map.prototype.baba_checkBackMove = function() {
	return this.baba_babaEvents()
		.some(e => e.baba_hasRouteTurn());
};
Game_Map.prototype.baba_addBackMoveAll = function() {
	if (this.baba_checkBackMove()) {
		this.baba_babaEvents().forEach(e => {
			if (e.baba_hasRouteTurn()) {
				var route = e.baba_topRouteTurn();
				for (var i = route.length-1; i >= 1; i--) {
					var moveStep = route[i];
					var last_moveStep = route[i-1];
					if (moveStep.md > 0) {
						var r_md = 10 - moveStep.md; // 反向方向
						e.baba_setMoveStepTemp(r_md, last_moveStep.d);
						e.baba_addMoveStep();
					}
					else {
						// 无移动，只更改方向
						e.baba_setMoveStepTemp(0, last_moveStep.d);
						e.baba_addMoveStep();
					}

					// item变换
					if (e._baba_item != last_moveStep.i) {
						e.baba_setItemAndAddRoute(last_moveStep.i);
					}
				}
			}
			else {
				// 没有历史路径 直接销毁该baba事件
				e.baba_deactivateBabaEvent();
			}
		});

		// 未闲置的隐藏的baba事件 可能需要恢复显示
		this.baba_hidedBabaEvents().forEach(e => {
			if (e.baba_hasRouteTurn()) {
				if (!e.baba_hasHidedRouteTurn()) {
					e.baba_showBabaEvent();
				}
			}
			else {
				// 没有历史路径 直接销毁该baba事件
				e.baba_deactivateBabaEvent();
			}
		});
	}
};


// --------------------------------
// 检查baba对象类型

const baba_BABA_OBJECT_NORMITEM_LIST = [
	'baba', 
	'key', 
	'door', 
	'flag', 
	'rock', 
	'tree', 
	'tile', 
	'keke', 
];
const baba_BABA_OBJECT_TILEITEM_LIST = [
	'wall', 
	'grass', 
];

// 设置为显示到下图层
const baba_BABA_OBJECT_FLOORITEM_LIST = [
	'grass', 
	'tile', 
];

const baba_BABA_OBJECT_WORD_LIST = [
	'baba', 
	'key', 
	'door', 
	'flag', 
	'rock', 
	'wall', 
	'tree', 
	'grass', 
	'tile', 
	'keke', 
];
const baba_BABA_OBJECT_RULE_LIST = [
	'you', 
	'win', 
	'stop', 
	'push', 
	'move', 
];
const baba_BABA_OBJECT_OTHERTEXT_LIST = [
	'is', 
	'and', 
	'not', 
	'on', 
];

const baba_BABA_OBJECT_CONDITIONTEXT_LIST = [
	'on', 
];
const baba_BABA_OBJECT_DECORATE1TEXT_LIST = [
	//'lonely', 
]; // lonely 可连接 物体 (不包括行为里的物体)
// ？a on lonely b is c ...
const baba_BABA_OBJECT_DECORATE2TEXT_LIST = [
	'not', 
]; // not 可连接 物体 和 规则 和 条件
const baba_BABA_OBJECT_BEHAVIOR1TEXT_LIST = [
	//'has', 
	//'make', 
]; // has, make 可连接 物体
const baba_BABA_OBJECT_BEHAVIOR2TEXT_LIST = [
	'is', 
]; // is 可连接 物体 和 规则


const baba_BABA_OBJECT_ITEM_LIST = [
	...baba_BABA_OBJECT_NORMITEM_LIST, 
	...baba_BABA_OBJECT_TILEITEM_LIST, 
];
const baba_BABA_OBJECT_TEXT_LIST = [
	...baba_BABA_OBJECT_WORD_LIST, 
	...baba_BABA_OBJECT_RULE_LIST, 
	...baba_BABA_OBJECT_OTHERTEXT_LIST, 
];
const baba_BABA_OBJECT_DECORATETEXT_LIST = [
	...baba_BABA_OBJECT_DECORATE1TEXT_LIST, 
	...baba_BABA_OBJECT_DECORATE2TEXT_LIST, 
];
const baba_BABA_OBJECT_BEHAVIORTEXT_LIST = [
	...baba_BABA_OBJECT_BEHAVIOR1TEXT_LIST, 
	...baba_BABA_OBJECT_BEHAVIOR2TEXT_LIST, 
];

function temp_list2map(list, isText) {
	var map = {};
	list.forEach((name, i) => map[isText ? 'text_'+name : name] = i+1);
	return map;
}

const baba_BABA_OBJECT_NORMITEM_MAP = temp_list2map(baba_BABA_OBJECT_NORMITEM_LIST, false);
const baba_BABA_OBJECT_TILEITEM_MAP = temp_list2map(baba_BABA_OBJECT_TILEITEM_LIST, false);
const baba_BABA_OBJECT_ITEM_MAP = temp_list2map(baba_BABA_OBJECT_ITEM_LIST, false);
Game_Map.prototype.baba_checkTypeIsTileItem = function(name) {
	return (name in baba_BABA_OBJECT_TILEITEM_MAP);
};
Game_Map.prototype.baba_checkTypeIsItem = function(name) {
	return (name in baba_BABA_OBJECT_ITEM_MAP);
};

const baba_BABA_OBJECT_FLOORITEM_MAP = temp_list2map(baba_BABA_OBJECT_FLOORITEM_LIST, false);
Game_Map.prototype.baba_checkTypeIsFloorItem = function(name) {
	return (name in baba_BABA_OBJECT_FLOORITEM_MAP);
};

const baba_BABA_OBJECT_WORD_MAP = temp_list2map(baba_BABA_OBJECT_WORD_LIST, true);
const baba_BABA_OBJECT_RULE_MAP = temp_list2map(baba_BABA_OBJECT_RULE_LIST, true);
const baba_BABA_OBJECT_OTHERTEXT_MAP = temp_list2map(baba_BABA_OBJECT_OTHERTEXT_LIST, true); // ？TODO : 未用到 ...
const baba_BABA_OBJECT_TEXT_MAP = temp_list2map(baba_BABA_OBJECT_TEXT_LIST, true);
Game_Map.prototype.baba_checkTypeIsWord = function(name) {
	return (name in baba_BABA_OBJECT_WORD_MAP);
};
Game_Map.prototype.baba_checkTypeIsRule = function(name) {
	return (name in baba_BABA_OBJECT_RULE_MAP);
};
Game_Map.prototype.baba_checkTypeIsText = function(name) {
	return (name in baba_BABA_OBJECT_TEXT_MAP);
};

const baba_BABA_OBJECT_CONDITIONTEXT_MAP = temp_list2map(baba_BABA_OBJECT_CONDITIONTEXT_LIST, true);
const baba_BABA_OBJECT_DECORATE1TEXT_MAP = temp_list2map(baba_BABA_OBJECT_DECORATE1TEXT_LIST, true);
const baba_BABA_OBJECT_DECORATE2TEXT_MAP = temp_list2map(baba_BABA_OBJECT_DECORATE2TEXT_LIST, true);
const baba_BABA_OBJECT_DECORATETEXT_MAP = temp_list2map(baba_BABA_OBJECT_DECORATETEXT_LIST, true);
const baba_BABA_OBJECT_BEHAVIOR1TEXT_MAP = temp_list2map(baba_BABA_OBJECT_BEHAVIOR1TEXT_LIST, true);
const baba_BABA_OBJECT_BEHAVIOR2TEXT_MAP = temp_list2map(baba_BABA_OBJECT_BEHAVIOR2TEXT_LIST, true);
const baba_BABA_OBJECT_BEHAVIORTEXT_MAP = temp_list2map(baba_BABA_OBJECT_BEHAVIORTEXT_LIST, true);
Game_Map.prototype.baba_checkTypeIsConditionText = function(name) {
	return (name in baba_BABA_OBJECT_CONDITIONTEXT_MAP);
};
Game_Map.prototype.baba_checkTypeIsDecorate1Text = function(name) {
	return (name in baba_BABA_OBJECT_DECORATE1TEXT_MAP);
};
Game_Map.prototype.baba_checkTypeIsDecorate2Text = function(name) {
	return (name in baba_BABA_OBJECT_DECORATE2TEXT_MAP);
};
Game_Map.prototype.baba_checkTypeIsDecorateText = function(name) {
	return (name in baba_BABA_OBJECT_DECORATETEXT_MAP);
};
Game_Map.prototype.baba_checkTypeIsBehavior1Text = function(name) {
	return (name in baba_BABA_OBJECT_BEHAVIOR1TEXT_MAP);
};
Game_Map.prototype.baba_checkTypeIsBehavior2Text = function(name) {
	return (name in baba_BABA_OBJECT_BEHAVIOR2TEXT_MAP);
};
Game_Map.prototype.baba_checkTypeIsBehaviorText = function(name) {
	return (name in baba_BABA_OBJECT_BEHAVIORTEXT_MAP);
};


// --------------------------------
// 检查baba规则

Game_Map.prototype.baba_initItemRules = function() {
	this._baba_itemRuleUnits = [];
	this._baba_babaEventRules = [];
};
Game_Map.prototype.baba_clearItemRules = function() {
	this._baba_itemRuleUnits.splice(0);
	this._baba_babaEventRules.splice(0);
};

Game_Map.prototype.baba_parseItemRuleUnitMainWord = function(unit) {
	// 提前解析 mainWord 的修饰文字
	var decorates = unit.mainWord.decorates;
	var notWord = false, existLonely = false, notLonely = false;
	for (var i = decorates.length-1; i >= 0; i--) {
		// 认为最多只有一个 lonely 修饰
		if (decorates[i] == 'not') {
			if (!existLonely) {
				// 右边的修饰不存在 lonely
				notWord = !notWord;
			}
			else {
				// 右边的修饰存在 lonely
				notLonely = !notLonely;
			}
		}
		else if (decorates[i] == 'lonely') {
			if (existLonely) {
				console.warn('error itemRuleUnit : many "lonely" decorate', unit);
			}
			existLonely = true;
		}
		else {
			console.warn('error itemRuleUnit : unknown mainWord decorate', unit);
		}
	}
	// ？是否可以 not lonely, lonely not, not lonely not, lonely not lonely ...
	// FINISH : 拒绝 多个 lonely 修饰 ...

	unit.mainWord.parseDecorate = {
		notWord : notWord, 
		existLonely : existLonely, 
		notLonely : notLonely, 
	}
};
Game_Map.prototype.baba_parseItemRuleUnitConditions = function(unit) {
	// 提前解析 conditions 的修饰文字
	for (var condition of unit.conditions) {
		if (condition.decorates.some(text => text != 'not')) {
			console.warn('error itemRuleUnit : unknown condition decorate', unit);
		}
		var notCondition = !!(condition.decorates.length % 2);
		condition.parseDecorate = {
			notCondition : notCondition, 
		}
		for (var word of condition.words) {
			if (word.decorates.some(text => text != 'not')) {
				console.warn('error itemRuleUnit : unknown conditionWord decorate', unit);
			}
			var notWord = !!(word.decorates.length % 2);
			word.parseDecorate = {
				notWord : notWord, 
			}
		}
	}
};
Game_Map.prototype.baba_parseItemRuleUnitBehavior = function(unit) {
	// 提前解析 behaviors 的修饰文字
	var word = unit.behavior.word;
	if (word.decorates.some(text => text != 'not')) {
		console.warn('error itemRuleUnit : unknown behaviorWord decorate', unit);
	}
	var notWord = !!(word.decorates.length % 2);
	word.parseDecorate = {
		notWord : notWord, 
	}
};
Game_Map.prototype.baba_addItemRuleUnit = function(unit, baseRule) {
	this.baba_parseItemRuleUnitMainWord(unit);
	this.baba_parseItemRuleUnitConditions(unit);
	this.baba_parseItemRuleUnitBehavior(unit);

	unit.baseRule = !!baseRule;
	this._baba_itemRuleUnits.push(unit);
};
Game_Map.prototype.baba_addItemRuleByItemRuleUnits = function(itemRuleUnits, baseRule) {
	for (var unit of itemRuleUnits) {
		this.baba_addItemRuleUnit(unit, baseRule);
	}
};

// 检查符合主物体
Game_Map.prototype.baba_checkItemRuleUnitMainWord = function(unit, name, x, y, eventId) {
	var notWord = unit.mainWord.parseDecorate.notWord;
	var existLonely = unit.mainWord.parseDecorate.existLonely;
	var notLonely = unit.mainWord.parseDecorate.notLonely;
	if (!notWord) {
		// 指定物体

		if (unit.mainWord.name != name) {
			// 不是该物体
			return false;
		}
		else if (!existLonely) {
			// 是该物体 无孤独修饰
			return true;
		}
		// 是该物体 有孤独修饰
		var count = this.baba_babaEventsAt(x, y).length;
		// 位置使用移动前的位置 即 e._x 而非 e._baba_moveStepX
		if (!notLonely) {
			// 需要孤独
			return count <= 1;
		}
		else {
			// 需要不孤独
			return count > 1;
		}
	}
	else {
		// 指定以外的物体
		// ？有些需要排除 text ...

		if (unit.mainWord.name == name) {
			// 是该物体
			return false;
		}
		else if (!existLonely) {
			// 不是该物体 无孤独修饰
			return true;
		}
		// 不是该物体 有孤独修饰
		var count = this.baba_babaEventsAt(x, y).length;
		// 位置使用移动前的位置 即 e._x 而非 e._baba_moveStepX
		if (!notLonely) {
			// 需要孤独
			return count <= 1;
		}
		else {
			// 需要不孤独
			return count > 1;
		}
	}
};
// 检查符合条件
Game_Map.prototype.baba_checkItemRuleUnitCondition = function(conditionUnit, name, x, y, eventId) {
	if (conditionUnit.name == 'on') {
		var items = this.baba_babaEventsAt(x, y).map(e => e._baba_item);
		itemCount = {};
		items.forEach(each => itemCount[each] = (itemCount[each] || 0) + 1);

		// 设定 非not修饰的物体 同时要求多次时 那么要重叠相应数量
		// 原作为无法生效
		var flag = true;
		for (var word of conditionUnit.words) {
			if (word.parseDecorate.notWord) {
				if (items.some(each => each != word.name)) {
					continue;
				}
				else {
					flag = false;
					break;
				}
			}
			else {
				if (!!itemCount[word.name] && itemCount[word.name] > 0) {
					itemCount[word.name]--;
					continue;
				}
				else {
					flag = false;
					break;
				}
			}
		}
		if (!conditionUnit.parseDecorate.notCondition) {
			return flag;
		}
		else {
			return !flag;
		}
	}
	else {
		console.warn('error itemRuleUnit : unknown condition', conditionUnit);
		return false;
	}
	// TODO : 可拓展的框架
};
// 检查符合条件组织
Game_Map.prototype.baba_checkItemRuleUnitConditions = function(unit, name, x, y, eventId) {
	for (var conditionUnit of unit.conditions) {
		if (!this.baba_checkItemRuleUnitCondition(conditionUnit, name, x, y, eventId)) {
			return false;
		}
	}
	return true;
};
// 筛选符合条件的规则组
Game_Map.prototype.baba_filterItemRuleUnits = function(name, x, y, eventId) {
	return this._baba_itemRuleUnits.filter(function(unit) {
		return this.baba_checkItemRuleUnitMainWord(unit, name, x, y, eventId)
			 && this.baba_checkItemRuleUnitConditions(unit, name, x, y, eventId);
	}, this);
};

Game_Map.prototype.baba_makeItemBehaviorMap = function(eventId) {
	var e = this._events[eventId];
	var itemRuleUnits = this.baba_filterItemRuleUnits(e._baba_item, e._x, e._y, e._eventId);

	var itemBehaviorMap = {};

	itemBehaviorMap['is'] = {};
	var tempMap = {};
	itemRuleUnits
		.filter(unit => unit.behavior.name == 'is')
		.forEach(unit => {
			var word = unit.behavior.word;
			tempMap[word.name] = tempMap[word.name] || [];
			tempMap[word.name].push(word.parseDecorate.notWord);
		});
	for (var name in tempMap) {
		if (tempMap[name].every(each => !each)) {
			itemBehaviorMap['is'][name] = true;
		}
	}

	itemBehaviorMap['has'] = itemRuleUnits
		.filter(unit => unit.behavior.name == 'has')
		.map(unit => unit.behavior.word.name);
	itemBehaviorMap['make'] = itemRuleUnits
		.filter(unit => unit.behavior.name == 'make')
		.map(unit => unit.behavior.word.name);

	// TODO : 可拓展的框架

	return itemBehaviorMap;
};

// 计算每个物体的所有生效规则
Game_Map.prototype.baba_updateBabaEventsRules = function() {
	this.baba_babaEvents()
		.forEach(function(e) {
			var itemBehaviorMap = this.baba_makeItemBehaviorMap(e._eventId);
			this._baba_babaEventRules[e._eventId] = itemBehaviorMap;
		}, this);
};

Game_Map.prototype.baba_checkBabaEventRule = function(eventId, rule) {
	var itemBehaviorMap = this._baba_babaEventRules[eventId];
	if (!itemBehaviorMap) return false;
	return itemBehaviorMap['is'][rule];
};
Game_Map.prototype.baba_getBabaEventHasList = function(eventId) {
	var itemBehaviorMap = this._baba_babaEventRules[eventId];
	if (!itemBehaviorMap) return false;
	return itemBehaviorMap['has'][rule];
};
Game_Map.prototype.baba_getBabaEventMakeList = function(eventId) {
	var itemBehaviorMap = this._baba_babaEventRules[eventId];
	if (!itemBehaviorMap) return false;
	return itemBehaviorMap['make'];
};

// TODO : 构建 itemRuleUnit 的 相关函数

// TODO : 从 itemRuleUnit 生成语句 用于显示



// --------------------------------
// 规则产生的影响

// is变换
Game_Map.prototype.baba_updateRuleEffect_isTransform = function() {
	var changed = false;

	// 变化的规则
	var tfList = this._baba_itemRuleUnits.filter(
		each => each.behavior.name == 'is'
			 && this.baba_checkTypeIsItem(each.behavior.word.name));
	if (tfList.length <= 0) {
		return false;
	}

	// 全物体的集合
	var itemSet = {};
	this.baba_babaEvents()
		.filter(e => this.baba_checkTypeIsItem(e._baba_item))
		.forEach(e => itemSet[e._baba_item] = true);

	// 变化的映射表
	var tfMap = {};
	var prohibitMap = {};
	tfList.forEach(each => {
		if (!each.behavior.word.parseDecorate.notWord) {
			// is b
			if (!each.mainWord.parseDecorate.notWord) {
				// a is b
				var name1 = each.mainWord.name;
				var name2 = each.behavior.word.name;
				tfMap[name1] = tfMap[name1] || {};
				tfMap[name1][name2] = tfMap[name1][name2] || 0;
				tfMap[name1][name2]++;
			}
			else {
				// not a is b
				var name2 = each.behavior.word.name;
				for (var name1 in itemSet) {
					if (name1 != each.mainWord.name) {
						tfMap[name1] = tfMap[name1] || {};
						tfMap[name1][name2] = tfMap[name1][name2] || 0;
						tfMap[name1][name2]++;
					}
				}
			}
		}
		else {
			// is not b
			if (!each.mainWord.parseDecorate.notWord) {
				// a is not b
				var name1 = each.mainWord.name;
				var name2 = each.behavior.word.name;
				prohibitMap[name1] = prohibitMap[name1] || {};
				prohibitMap[name1][name2] = true
			}
			else {
				// not a is not b
				var name2 = each.behavior.word.name;
				for (var name1 in itemSet) {
					if (name1 != each.mainWord.name) {
						prohibitMap[name1] = prohibitMap[name1] || {};
						prohibitMap[name1][name2] = true;
					}
				}
			}
		}
	});
	for (var name1 in tfMap) {
		for (var name2 in tfMap[name1]) {
			if (tfMap[name1][name2] > 2) {
				tfMap[name1][name2] = 2;
			}
		}
	}

	// 去除禁止变化的规则
	// a is a 禁止 a is b
	Object.keys(tfMap)
		.filter(name => tfMap[name][name])
		.forEach(name => delete tfMap[name]);
	// a is not b 禁止 a is b
	for (var name1 in tfMap) {
		if (prohibitMap[name1]) {
			for (var name2 in tfMap[name1]) {
				if (prohibitMap[name1][name2]) {
					delete tfMap[name1][name2];
				}
			}
			if (Object.keys(tfMap[name1]).length <= 0) {
				delete tfMap[name1];
			}
		}
	}
	if (Object.keys(tfMap).length <= 0) {
		return false;
	}

	// TODO : 标记规则失效 并画叉


	// 记录变化的物体
	var itemTfList = [];
	for (var name in tfMap) {
		var keys = Object.keys(tfMap[name]);
		var oneToOne = (keys.length == 1);
		this.baba_babaEvents()
			.filter(event => event._baba_item == name)
			.forEach(event => itemTfList.push({
				id : event._eventId, 
				name1 : name,
				x : event._x, 
				y : event._y, 
				d : event._direction, 
				oneToOne : oneToOne, 
			}));
	}

	// 销毁非一变一变化的物体
	itemTfList.forEach(obj => 
		//!obj.oneToOne && this.baba_deactivateBabaEvent(obj.id));
		!obj.oneToOne && this.baba_hideBabaEvent(obj.id));

	// 生成变成的物体 或 变化一变一变化的物体
	itemTfList.forEach(obj => {
		if (obj.oneToOne) {
			var name2 = Object.keys(tfMap[obj.name1])[0];
			this._events[obj.id].baba_setItemAndAddRoute(name2);
			changed = true;
		}
		else {
			for (var name2 in tfMap[obj.name1]) {
				// 暂时 同样的 is变换 只变换一次
				// TODO : 考证
				this.baba_requireBabaEvent(name2, obj.x, obj.y, obj.d);
				changed = true;
			}
		}
	}, this);

	return changed;
};

// TODO : 变化动画 粒子



// --------------------------------
// 更新baba规则

Game_Map.prototype.baba_updateItemRuleAll = function() {
	this.baba_clearItemRules();

	var itemRuleUnits = null;

	// add base rule
	itemRuleUnits = this.baba_makeItemRuleUnits_baseRule();
	this.baba_addItemRuleByItemRuleUnits(itemRuleUnits, true);

	// add rule1
	itemRuleUnits = this.baba_makeItemRuleUnits_rule1();
	this.baba_addItemRuleByItemRuleUnits(itemRuleUnits);

	// ...

	// FINISH : 预处理每个baba事件的生效规则
	this.baba_updateBabaEventsRules();
};


Game_Map.prototype.baba_makeItemRuleUnits_baseRule = function() {
	var itemRuleUnits = [];

	var mainWordUnit = {
		name : '', 
		decorates : [], 
	};
	var conditionUnit = {
		name : '', 
		decorates : [], 
		words : [], 
	};
	var behaviorUnit = {
		name : '', 
		word : {
			name : '', 
			decorates : [], 
		}, 
	};

	var itemRuleUnit = {
		mainWord : mainWordUnit, 
		conditions : [], 
		behavior : behaviorUnit, 
	};

	// text is push
	baba_BABA_OBJECT_TEXT_LIST.forEach(name => {
		itemRuleUnit.mainWord.name = 'text_' + name;
		itemRuleUnit.behavior.name = 'is';
		itemRuleUnit.behavior.word.name = 'push';
		itemRuleUnits.push(JSON.parse(JSON.stringify(itemRuleUnit)));
	});

	// ? text is word
	// ...

	return itemRuleUnits;
};
// 根据基础规则 如 text is word 再加上 其他的 xx is word 构建下一步的规则


// 不考虑 is word 规则 的检查规则
// text 自带 is word 规则

Game_Map.prototype.baba_makeItemRuleUnits_rule1 = function() {
	// 文字
	var wordGrid = {};
	this.baba_babaEvents()
		.filter(e => this.baba_checkInMapSize(e._x, e._y), this)
		.filter(e => e._baba_item && e._baba_item.startsWith('text_'))
		.map(e => {
			// 暂时不考虑文字重叠
			// (TODO)

			if (!wordGrid[[e._x,e._y]]) {
				wordGrid[[e._x,e._y]] = {
					x : e._x,
					y : e._y, 
					text : e._baba_item, 
				};
			}
		});


	// ？暂时不考虑文字重叠的情况 ...
	// (TODO)


	// 规则源语句
	// 文字相连组成的语句，可能为无效规则语句，也可能有多个规则语句
	var ruleOriginSentences = [];
	var tempSentence = [];
	var sx = this._baba_mapSizeX;
	var ex = this._baba_mapSizeX + this._baba_mapSizeW;
	var sy = this._baba_mapSizeY;
	var ey = this._baba_mapSizeY + this._baba_mapSizeH;
	for (var y = sy; y < ey; y++) {
		for (var x = sx; x < ex; x++) {
			if (!wordGrid[[x,y]]) continue;
			// 横向
			if (!wordGrid[[x-1,y]]) {
				for (var tx = x; tx < ex; tx++) {
					if (wordGrid[[tx,y]]) {
						tempSentence.push(wordGrid[[tx,y]].text);
					}
					else {
						break;
					}
				}

				if (tempSentence.length >= 3) {
					ruleOriginSentences.push(tempSentence.splice(0));
				}
				else {
					tempSentence.splice(0);
				}
			}

			// 纵向
			if (!wordGrid[[x,y-1]]) {
				for (var ty = y; ty < ey; ty++) {
					if (wordGrid[[x,ty]]) {
						tempSentence.push(wordGrid[[x,ty]].text);
					}
					else {
						break;
					}
				}
				if (tempSentence.length >= 3) {
					ruleOriginSentences.push(tempSentence.splice(0));
				}
				else {
					tempSentence.splice(0);
				}
			}
		}
	}


	// 文字类型
	// 按语句的文字的类型 对语句进行判断

	// 物体 word : baba, keke, key 等
	// 规则 rule : you, push, stop 等
	// 修饰 ?decorate : not, lonely, ?and
	// 条件 condition : on, near, facing 等
	// 行为 behavior : is, has, make


	// ？语法树 ...

	// ？用 文字的前接或后接文字类型 顺序解析语句文字 ...
	/*
	修饰 ?decorate
			后接  word rule condition ...
		not      √    √    √
		lonely   √    ×    ×
		and      √    √    √
	行为 behavior
			后接  word rule
		is       √    √
		has      √    ×
		make     √    ×
	...
	*/

	/*
	not : 后接除is,has,make以外的文字 连接后成为后接文字的类型
	？not not 也行 ...
	not baba not on not keke is not me -> (baba) (on) (keke) is (me)
	
	lonely : 后接物体文字

	is : 后接物体或者规则文字
	has,make : 后接物体文字
	(baba) (on) (keke) is (me) -> (baba) (on) (keke) [is]

	on,near,facing : 后接物体文字
	(baba) (on) (keke) [is] -> (baba) [on] [is]

	物体文字 : 可选后接条件[on] 再后接行为[is]
	(baba) [on] [is] -> {sentence}
	
	and : 前接和后接物体或规则文字 ？或条件词组行为词组 ...
	baba and keke on door and key is you and wall
	 -> (baba) on (door) is (you)
	baba and keke on door and key and on flag is you and wall and is rock
	 -> (baba) on (door) and on flag is (you) and is rock
	 -> (baba) [on] and [on] [is] and [is]
	 -> (baba) [on] [is]
	 -> {sentence}
	*/

	/*
	a and b on c and d is e and f and on g is h and is i and j
	a =and= b -on- c =and= d -is- e =and= f =and= -on- g -is- h =and= -is- i =and= j
	(a,b -on- c,d -is- e,f) =and= -on- g -is- h =and= -is- i =and= j

	？从 开头 或者 上一语句的最后一个行为文字(is,?has,?make)后的文字 或 一个物体文字 开始解析语句 ...
	a and b on c and d is e and f and on g is h and is i and j
	(a and b on c and d is e and f)
						  e and f and on g is h and is i and j
								f and on g is h and is i and j
										 g is h and is i and j
										 (g is h and is i and j)
													   i and j

	？and 左右 要相同类型 ...
	？特殊的是 is后接可以是 物体and规则 ...
	a and b on c and d is e and f and is h and is i and j
	a =and= b -on- c =and= d -is- e =and= f =and= -is- h =and= -is- i =and= j
	a,b -on- c,d -is- e,f =and= -is- h =and= -is- i,j
	[a,b] [on c,d] [is e,f] =and= [is h] =and= [is i,j]
	[a,b on c,d] [is e,f,h,i,j]
	{a,b on c,d is e,f,h,i,j}
	*/

	/*
	？从前往后解析 ...
	a and b on c and d and near e is f and g and is h and is i and j
	a : 物体
	and : 需要下一个物体
	b : 下一个物体
	on : 需要条件
	c : 条件物体
	and : 需要下一个条件或条件物体
	d : 下一个条件物体
	and : 需要下一个条件或条件物体
	near : 下一个条件
	e : 条件物体
	is : 行为
	f : 行为物体或规则
	and : 需要下一个行为或下一个行为物体或规则
	g : 下一个行为物体或规则
	and : 需要下一个行为或下一个行为物体或规则
	is : 下一个行为
	h : 行为物体或规则
	and : 需要下一个行为或下一个行为物体或规则
	is : 下一个行为
	i : 下一个行为物体或规则
	and : 需要下一个行为或下一个行为物体或规则
	j : 下一个行为物体或规则

	not a and b not on c and not d and near e is f and not g and is h and is not i and j
	not : 后接物体或规则或条件
	...
	*/

	ruleOriginSentences = ruleOriginSentences
		.map(arr => arr
			.map(function(text) {
				var type = '';
				if (this.baba_checkTypeIsWord(text)) {
					type = 'word';
				}
				else if (this.baba_checkTypeIsRule(text)) {
					type = 'rule';
				}
				else if (this.baba_checkTypeIsConditionText(text)) {
					type = 'condition';
				}
				else if (this.baba_checkTypeIsDecorate1Text(text)) {
					type = 'decorate1';
				}
				else if (this.baba_checkTypeIsDecorate2Text(text)) {
					type = 'decorate2';
				}
				else if (this.baba_checkTypeIsBehavior1Text(text)) {
					type = 'behavior1';
				}
				else if (this.baba_checkTypeIsBehavior2Text(text)) {
					type = 'behavior2';
				}
				else if (text == 'text_and') {
					type = 'and';
				}
				return {
					text : text.slice('text_'.length), 
					type : type, 
				}
			}, this), this
		);


	var itemRuleUnits = [];

	var sentence_index = 0, sentence_s_index = 0, sentence_e_index = 0;
	var maxLoop = 1000 + 10 * (ruleOriginSentences.length <= 0 ? 10
					  : ruleOriginSentences.length <= 1 ? ruleOriginSentences[0].length
					  : ruleOriginSentences.length * ruleOriginSentences.reduce((a,b) => a.length>b.length?a.length:b.length));
	while (maxLoop--) {
		var list = ruleOriginSentences[sentence_index];

		var phase = 11;

		var tempWord = {
			text : '', 
			decorates : [], 
		};
		var mainWords = [];

		var condition = null, conditionWords = [];
		// 暂时只考虑一个条件

		var tempBehavior = {
			text : '', 
			words : [], 
		};
		var behaviorType = 0;
		var behaviors = [];
		
		var list_index = 0;
		var phaseList = [];
		for (list_index = sentence_s_index; list_index < list.length; list_index++) {
			var word = list[list_index];
			if (phase == 11) {
				// mainWord
				if (word.type == 'decorate1' || word.type == 'decorate2') {
					// mainWord -- decorate1/2 -> mainWord
					//tempWord.decorates.push(word.text);

					// lonely 只允许有一个
					// 暂时如此
					if (word.text == 'lonely' && tempWord.decorates.includes('lonely')) {
						phase = 99;
					}
					else {
						tempWord.decorates.push(word.text);
					}
				}
				else if (word.type == 'word') {
					// mainWord -- word -> mainWordConnect
					tempWord.text = word.text;
					mainWords.push(tempWord);
					tempWord = { text : '', decorates : [] };
					// TODO : not a and b 是 not a 和 b 还是 not a 和 not b
					phase++;
				}
				else {
					// mainWord -- other -> failEnd
					phase = 99;
				}
			}
			else if (phase == 12) {
				// mainWordConnect
				if (word.type == 'and') {
					// mainWordConnect -- and -> mainWord
					phase--;
				}
				else if (word.type == 'decorate2') {
					// mainWordConnect -- decorate2 -> condition
					// 指 之后等待输入一个 condition 文字
					// 条件文字 不能接受lonely等修饰文字 (decorate1)
					// 行为文字 不能接受修饰文字
					tempWord.decorates.push(word.text);
					phase = 21;
				}
				else if (word.type == 'condition') {
					// mainWordConnect -- condition -> conditionWord
					// 指 之后等待输入一个 condition目标 文字
					tempWord.text = word.text;
					condition = tempWord;
					tempWord = { text : '', decorates : [] };
					phase = 22;
				}
				else if (word.type == 'behavior1' || word.type == 'behavior2') {
					// mainWordConnect -- behavior1/2 -> behaviorWord
					// 指 之后等待输入一个 behavior目标 文字
					// 此处无需判断是否有修饰词存在
					tempBehavior.text = word.text;
					behaviorType = word.type == 'behavior1' ? 1 : 2;
					phase = 32;
				}
				else {
					// mainWordConnect -- other -> failEnd
					phase = 99;
				}
			}
			else if (phase == 21) {
				// condition
				// 指 等待输入一个 condition 文字
				if (word.type == 'decorate2') {
					// condition -- decorate2 -> condition
					tempWord.decorates.push(word.text);
				}
				else if (word.type == 'condition') {
					// condition -- condition -> conditionWord
					tempWord.text = word.text;
					condition = tempWord;
					tempWord = { text : '', decorates : [] };
					phase++;
				}
				else {
					// condition -- other -> failEnd
					phase = 99;
				}
			}
			else if (phase == 22) {
				// conditionWord
				if (word.type == 'decorate1' || word.type == 'decorate2') {
					// conditionWord -- decorate1/2 -> conditionWord
					// TODO : 条件中的物体是否可以用 lonely 修饰
					tempWord.decorates.push(word.text);
				}
				else if (word.type == 'word') {
					// conditionWord -- word -> conditionWordConnect
					tempWord.text = word.text;
					conditionWords.push(tempWord);
					tempWord = { text : '', decorates : [] };
					phase++;
				}
				else {
					// conditionWord -- other -> failEnd
					phase = 99;
				}
			}
			else if (phase == 23) {
				// conditionWordConnect
				if (word.type == 'and') {
					// conditionWordConnect -- and -> conditionWord
					// 暂不考虑 conditionConnect
					phase--;
				}
				else if (word.type == 'behavior1' || word.type == 'behavior2') {
					// conditionWordConnect -- behavior1/2 -> behaviorWord
					tempBehavior.text = word.text;
					behaviorType = word.type == 'behavior1' ? 1 : 2;
					phase = 32;
				}
				else {
					// conditionWordConnect -- other -> failEnd
					phase = 99;
				}
			}
			else if (phase == 32) {
				// behaviorWord
				if (word.type == 'decorate2' && behaviorType == 2) {
					// behaviorWord (behaviorType=2) -- decorate2 -> behaviorWord
					// (behaviorWord (behaviorType=1) -- decorate1/2 -> successEnd/failEnd)
					tempWord.decorates.push(word.text);
				}
				else if (word.type == 'word'
						 || (behaviorType == 2 && word.type == 'rule')) {
					// behaviorWord (behaviorType=1,2) -- word -> behaviorWordConnect
					// behaviorWord (behaviorType=2) -- rule -> behaviorWordConnect
					tempWord.text = word.text;
					tempBehavior.words.push(tempWord);
					tempWord = { text : '', decorates : [] };
					phase++;
				}
				else {
					// behaviorWord -- other -> successEnd/failEnd
					if (tempBehavior.words.length > 0) {
						phase = 98;
					}
					else {
						phase = 99;
					}
				}
			}
			else if (phase == 33) {
				// behaviorWordConnect
				if (word.type == 'and') {
					phase = 34;
				}
				else {
					// behaviorWordConnect -- other -> successEnd
					phase = 98;
				}
			}
			else if (phase == 34) {
				// behaviorOrWord
				if (word.type == 'behavior1' || word.type == 'behavior2') {
					// behaviorOrWord -- behavior1/2 -> behaviorWord
					// 写入之前的行为
					behaviors.push(tempBehavior);
					tempBehavior = { text : '', words : [] };
					behaviorType = 0;
					// 新的行为
					tempBehavior.text = word.text;
					behaviorType = word.type == 'behavior1' ? 1 : 2;
					phase = 32;
				}
				else if (word.type == 'decorate2' && behaviorType == 2) {
					// behaviorOrWord (behaviorType=2) -- decorate2 -> behaviorWord
					// (behaviorOrWord (behaviorType=1) -- decorate1/2 -> successEnd)
					tempWord.decorates.push(word.text);
					phase = 32;
				}
				else if (word.type == 'word'
						 || (behaviorType == 2 && word.type == 'rule')) {
					// behaviorOrWord (behaviorType=1,2) -- word -> behaviorWordConnect
					// behaviorOrWord (behaviorType=2) -- rule -> behaviorWordConnect
					tempWord.text = word.text;
					tempBehavior.words.push(tempWord);
					tempWord = { text : '', decorates : [] };
					phase = 33;
				}
				else {
					// behaviorOrWord -- other -> successEnd
					// behaviorOrWord阶段 在 behaviorWordConnect阶段 之后 此时 tempBehavior已经完整 可以写入behaviors
					phase = 98;
				}
			}

			phaseList[list_index] = phase;

			if (list_index == list.length-1) {
				// 遍历结束的检查
				// 相当于 传入异常的 word.type 使得进行结束遍历的处理

				if (phase == 32) {
					// 结束在 behaviorWord阶段 语法末尾有多余文字
					// 必有 行为文字 如有 行为物体 则 tempBehavior 完整 可以写入
					if (tempBehavior.words.length > 0) {
						phase = 98;
					}
					else {
						phase = 99;
					}
				}
				else if (phase == 33) {
					// 结束在 behaviorWordConnect阶段 语法完整且无多余文字
					phase = 98;
				}
				else if (phase == 34) {
					// 结束在 behaviorOrWord阶段 语法末尾有多余文字
					phase = 98;
				}
				else if (phase == 98) {
					// 已设置 phase = 98 也表示语法完整
					phase = 98;
				}
				else {
					// 结束在 其他阶段 表示语法不完整
					phase = 99;
				}

				phaseList[i+1] = phase;
			}

			if (phase == 98) {
				// 写入
				behaviors.push(tempBehavior);

				break;
			}
			else if (phase == 99) {
				break;
			}
		}

		if (phase == 98) {
			var mainWordUnit = {
				name : '', 
				decorates : [], 
			};
			var conditionUnit = {
				name : '', 
				decorates : [], 
				words : [], 
			};
			var behaviorUnit = {
				name : '', 
				word : {
					name : '', 
					decorates : [], 
				}, 
			};

			var itemRuleUnit = {
				mainWord : mainWordUnit, 
				conditions : [ conditionUnit ], 
				behavior : behaviorUnit, 
			};

			if (condition != null) {
				itemRuleUnit.conditions = [ conditionUnit ];

				conditionUnit.name = condition.text;
				conditionUnit.decorates = condition.decorates;
				conditionUnit.words = conditionWords.map(word => {
					return {
						name : word.text, 
						decorates : word.decorates, 
					};
				});
				// TODO : 多个条件
			}
			else {
				itemRuleUnit.conditions = [];
			}

			if (mainWords.length > 0 && behaviors.length > 0) {
				for (var i = 0; i < mainWords.length; i++) {
					var mainWord = mainWords[i];
					mainWordUnit.name = mainWord.text;
					mainWordUnit.decorates = mainWord.decorates;
					for (var j = 0; j < behaviors.length; j++) {
						var behavior = behaviors[j];
						behaviorUnit.name = behavior.text;
						for (var k = 0; k < behavior.words.length; k++) {
							var word = behavior.words[k];
							behaviorUnit.word.name = word.text;
							behaviorUnit.word.decorates = word.decorates;

							itemRuleUnits.push(JSON.parse(JSON.stringify(itemRuleUnit)));
						}
					}
				}
			}
		}


		if (phase == 99) {
			// 异常语句
			// 下次 从该语句第二个文字 开始解析
			sentence_e_index = sentence_s_index + 1;
		}
		else if (phase == 98) {
			// 正常语句
			// 计算完整语句的结束位置

			// TODO : 完整语句发光

			// 下次 从该语句最后一个行为文字后 开始解析
			// a is b and c is e 是 b and c is e 还是 c is e
			// TODO : ...

			for (var j = list_index; j >= sentence_s_index; j--) {
				if (list[j].type == 'behavior1' || list[j].type == 'behavior2') {
					sentence_e_index = j + 1;
					break;
				}
				else if (j == sentence_s_index) {
					sentence_e_index = sentence_s_index + 1;
					console.warn(`not found behavior text`, 
						list, list_index, sentence_s_index, sentence_e_index);
				}
			}
		}
		else {
			console.warn(`error phase after parse sentence : phase ${phase}`);
			break;
		}
		
		if (sentence_e_index >= list.length) {
			// 下一个源语句
			sentence_s_index = 0;
			sentence_e_index = 0;
			sentence_index++;
			if (sentence_index >= ruleOriginSentences.length) {
				// 没有下一个源语句
				break;
			}
			else {
				// 有下一个源语句
				continue;
			}
		}
		else {
			// 继续该源语句
			sentence_s_index = sentence_e_index;
			continue;
		}
	}

	return itemRuleUnits;

	// TODO : 更严格的测试
};



// --------------------------------
// 获取baba事件

Game_Map.prototype.baba_isBabaEvent = function(e) {
	return !!e && !e._erased && e.baba_isBabaEvent();
};
Game_Map.prototype.baba_babaEvents = function() {
	return this._events.filter(e => this.baba_isBabaEvent(e), this);
};
Game_Map.prototype.baba_babaEventsAt = function(x, y) {
	return this._events
		.filter(e => this.baba_isBabaEvent(e), this)
		.filter(e => e._x == x && e._y == y);
};
Game_Map.prototype.baba_babaEventsMoveStepAt = function(x, y) {
	return this._events
		.filter(e => this.baba_isBabaEvent(e), this)
		.filter(e => e._baba_moveStepX == x && e._baba_moveStepY == y);
};

// 注意区分 erased 和 idle 和 show
// TODO : 消除歧义

Game_Map.prototype.baba_isNoIdleBabaEvent = function(e) {
	return !!e && e.baba_isBabaEvent() && !e._baba_isIdleBabaEvent;
};
Game_Map.prototype.baba_noIdleBabaEvents = function() {
	return this._events.filter(e => this.baba_isNoIdleBabaEvent(e), this);
};

Game_Map.prototype.baba_isHidedBabaEvent = function(e) {
	return !!e && e._erased && e.baba_isBabaEvent() && !e._baba_isIdleBabaEvent;
};
Game_Map.prototype.baba_hidedBabaEvents = function() {
	return this._events.filter(e => this.baba_isHidedBabaEvent(e), this);
};



// --------------------------------
// 添加和销毁 baba事件

const baba_BABA_EVENT_TEMPLATE = JSON.stringify({"id":1,"name":"EV001","note":"<baba is you:%name%>","pages":[{"conditions":{"actorId":1,"actorValid":false,"itemId":1,"itemValid":false,"selfSwitchCh":"A","selfSwitchValid":false,"switch1Id":1,"switch1Valid":false,"switch2Id":1,"switch2Valid":false,"variableId":1,"variableValid":false,"variableValue":0},"directionFix":true,"image":{"tileId":0,"characterName":"","direction":2,"pattern":1,"characterIndex":0},"list":[{"code":0,"indent":0,"parameters":[]}],"moveFrequency":3,"moveRoute":{"list":[{"code":0,"parameters":[]}],"repeat":true,"skippable":false,"wait":false},"moveSpeed":3,"moveType":0,"priorityType":1,"stepAnime":true,"through":true,"trigger":0,"walkAnime":false}],"x":1,"y":1});
Game_Map.prototype.baba_babaEventTemplate = function() {
	return JSON.parse(baba_BABA_EVENT_TEMPLATE);
};
Game_Map.prototype.baba_makeBabaEventData = function(eventId, name, x, y, d) {
	// TODO : 检查 name 合法

	var eventData = this.baba_babaEventTemplate();
	eventData.id = eventId;
	// 此时还没有 meta 需要用 DataManager.extractMetadata 从 note 提取到 meta
	eventData.note = eventData.note.replace('<baba is you:%name%>', '<baba is you:'+name+'>')
	DataManager.extractMetadata(eventData);
	eventData.name = name + '_' + eventId;
	var image = eventData.pages[0].image;
	image.characterName = this.baba_makeBabaCharacterName(name);
	image.characterIndex = 0;
	image.direction = d;
	eventData.x = x;
	eventData.y = y;

	return eventData;
};
Game_Map.prototype.baba_makeBabaCharacterName = function(name) {
	return this.baba_checkTypeIsTileItem(name) ? '!'+name+'_tile1' : '!$'+name;
};

Spriteset_Map.prototype.baba_addBabaEventCharacter = function(event) {
	var sprite = new Sprite_Character(event);
	this._characterSprites.push(sprite);
	this._tilemap.addChild(sprite);
};
Game_Map.prototype.baba_addBabaEvent = function(name, x, y, d) {
	var eventId = $dataMap.events.length;
	// TODO : ？是否应该是 $gameMap._events.length ...
	var eventData = this.baba_makeBabaEventData(eventId, name, x, y, d);
	$dataMap.events.push(eventData);
	var event = new Game_Event(this._mapId, eventId);
	//event.refresh();
	this._events[eventId] = event;

	//this.refresh();

	//event.erase();
	event.baba_deactivateBabaEvent();

	event.baba_initBabaEventByData();

	var spriteset = SceneManager._scene._spriteset;
	!!spriteset && spriteset.baba_addBabaEventCharacter(event);

	return event;
};

Game_Map.prototype.baba_deactivateBabaEvent = function(eventId) {
	// 移除事件仅抹去事件 添加事件也可以从这些抹去事件中恢复

	var event = this.event(eventId);
	if (event) {
		event.baba_deactivateBabaEvent();
	}
};
Game_Event.prototype.baba_deactivateBabaEvent = function() {
	this.erase();
	this._baba_isIdleBabaEvent = true;

	this.setImage('', 0);

	// 销毁时清空路线记录
	this.baba_initReadyMoveStep();
	this.baba_initRouteTurn();
};

// 隐藏baba事件
// 在回退操作时可以再出现 在隐藏期间不能被占用
Game_Map.prototype.baba_hideBabaEvent = function(eventId) {
	var event = this.event(eventId);
	if (event) {
		event.baba_hideBabaEvent();
	}
};
Game_Event.prototype.baba_hideBabaEvent = function() {
	this.erase();
};

// 显示baba事件 即 隐藏baba事件 的回退
Game_Map.prototype.baba_showBabaEvent = function(eventId) {
	var event = this.event(eventId);
	if (event) {
		event.baba_showBabaEvent();
	}
};
Game_Event.prototype.baba_showBabaEvent = function() {
	this._erased = false;
};

Game_Map.prototype.baba_requireNewBabaEvent = function(name) {
	return this.baba_addBabaEvent(name || 'XXX', -1, -1, 2);
};
Game_Map.prototype.baba_requireIdleBabaEvent = function(name) {
	var event = this._events
		.find(e => !!e && !!e._baba_isIdleBabaEvent && e.baba_isBabaEvent());
	return event || this.baba_requireNewBabaEvent(name);
};

Game_Map.prototype.baba_requireBabaEvent = function(name, x, y, d) {
	var event = this.baba_requireIdleBabaEvent(name);

	var eventData = event.event();
	// 在刷新事件页时 会通过事件数据设置baba事件 所以需要修改 eventData
	eventData.meta['baba is you'] = name;
	eventData.pages[0].image.characterName = this.baba_makeBabaCharacterName(name);

	event._erased = false;
	event._baba_isIdleBabaEvent = false;

	event.baba_setItem(name);
	event.baba_refreshItemImage();

	event.setPosition(x, y);
	event.setDirectionFix(false);
	event.setDirection(d);

	event.baba_initReadyMoveStep();
	event.baba_initRouteTurn();
};



// --------------------------------
// baba图块图像对象

// 图块排布
/*
!name_tile1
... ... .+. .+. ... ... .+. .+.
.+. .++ .+. .++ ++. +++ ++. +++
... ... ... ... ... ... ... ...
!name_tile2
... ... .+. .+. ... ... .+. .+.
.+. .++ .+. .++ ++. +++ ++. +++
.+. .+. .+. .+. .+. .+. .+. .+.
*/
// 实际上是二进制排布的
// 按位数高到低 顺序为 下、左、上、右
// 如 第12个(索引11) 为 : 11 -> 1011(2) 所以 下右上有，左无
// 如 左上有，右下无 为 : 0110(2) -> 6 -> 索引6 即第7个

Game_Map.prototype.baba_makeTileEventImageIndex = function(u, d, l, r) {
	var arr = [!!d, !!l, !!u, !!r];
	var index = parseInt(arr.map(a=>a?1:0).join(''), 2);
	return index;
};

Game_Map.prototype.baba_makeTileEventImageData = function(name) {
	var events = this.baba_babaEvents()
		.filter(e => e._baba_item == name);

	var map = {};
	for (var i = 0; i < events.length; i++) {
		var e = events[i];
		map[[e._x,e._y]] = map[[e._x,e._y]] || {
			x: e._x, 
			y: e._y, 
			eventsId: [], 
			imageIndex: 0, 
		};
		map[[e._x,e._y]].eventsId.push(e._eventId);
	}

	var u, d, l, r;
	var obj, x, y;
	for (var key in map) {
		obj = map[key];
		x = obj.x;
		y = obj.y;
		u = this.baba_checkInMapSize(x, y-1) ? !!([x,y-1] in map) : true;
		d = this.baba_checkInMapSize(x, y+1) ? !!([x,y+1] in map) : true;
		l = this.baba_checkInMapSize(x-1, y) ? !!([x-1,y] in map) : true;
		r = this.baba_checkInMapSize(x+1, y) ? !!([x+1,y] in map) : true;
		var imageIndex = this.baba_makeTileEventImageIndex(u, d, l, r);
		obj.imageIndex = imageIndex;
	}

	return map;
};

Game_Map.prototype.baba_updateTileEventImageAll = function() {
	baba_BABA_OBJECT_TILEITEM_LIST
		.forEach(name => this.baba_updateTileEventImage(name), this);
};
Game_Map.prototype.baba_updateTileEventImage = function(name) {
	var map = this.baba_makeTileEventImageData(name);
	var imageIndex, imageName;
	for (var key in map) {
		imageIndex = map[key].imageIndex;
		imageName = '!' + name + '_tile' + (imageIndex < 8 ? 1 : 2);
		imageIndex = imageIndex % 8;
		map[key].eventsId.forEach(function(id) {
			this._events[id].setImage(imageName, imageIndex);
		}, this);
	}
};



// --------------------------------
// baba图块转换baba事件
// 允许通过图块编辑谜题

// baba图块配置
// 使用E层图块 (768-1023)
// 分为 物体(768-799) 物体文字(800-831) 规则文字(832-863) 其他文字(864-895)

const baba_BABA_TILESET_CONFIG_ITEM = [
	'baba', 'key', 'door', 'flag', 'rock', 'wall', 'tree', 'grass', 
	'tile', 'keke', 
];

const baba_BABA_TILESET_CONFIG_WORD = [
	'baba', 'key', 'door', 'flag', 'rock', 'wall', 'tree', 'grass', 
	'tile', 'keke', 
];
const baba_BABA_TILESET_CONFIG_RULE = [
	'you', 'win', 'stop', 'push', 'move', 
];
const baba_BABA_TILESET_CONFIG_OTHERTEXT = [
	'is', 'and', 'not', 'on', 
];

[
	baba_BABA_TILESET_CONFIG_WORD, 
	baba_BABA_TILESET_CONFIG_RULE, 
	baba_BABA_TILESET_CONFIG_OTHERTEXT, 
].forEach(list => {
	for (var i = 0; i < list.length; i++) {
		list[i] = 'text_' + list[i];
	}
});

const baba_BABA_TILESET_CONFIG_ALL = [];
[
	baba_BABA_TILESET_CONFIG_ITEM, 
	baba_BABA_TILESET_CONFIG_WORD, 
	baba_BABA_TILESET_CONFIG_RULE, 
	baba_BABA_TILESET_CONFIG_OTHERTEXT, 
].forEach(list => {
	for (var i = 0; i < 32; i++) {
		baba_BABA_TILESET_CONFIG_ALL.push(list[i]);
	}
});

Game_Map.prototype.baba_isBabaTilesetIndex = function(index) {
	return 768 <= index && index < 896;
};
Game_Map.prototype.baba_getBabaTilesetName = function(index) {
	if (this.baba_isBabaTilesetIndex(index)) {
		return baba_BABA_TILESET_CONFIG_ALL[index - 768];
	}
	else {
		return '';
	}
};

Game_Map.prototype.baba_setupBabaEventsByTileset = function() {
	var data = $dataMap.data;
	var width = $dataMap.width;
	var height = $dataMap.height;

	var offset_each = width * height;
	for (var y = 0, i = 0; y < height; y++) {
		for (var x = 0; x < width; x++, i++) {
			for (var layer = 3; layer >= 2; layer--) {
				var index = i + layer * offset_each;
				var name = this.baba_getBabaTilesetName(data[index]);
				if (!!name) {
					this.baba_requireBabaEvent(name, x, y, 2);
					// 方向向下

					// 消去图块
					data[index] = 0;
				}
				else {
					if (typeof name === 'undefined') {
						// name 为空 但不是 空字符串
						// 使用了baba图块的索引号 但是没有设置对应的baba对象名
						console.warn(`unknown baba tileset : tileId ${data[index]} at (${x},${y})`);
					}
				}
			}
		}
	}
};



// --------------------------------
// baba事件(baba物体)踏步动画

Game_Map.prototype.baba_initBabaEventAnimation = function() {
	this._baba_babaEventAnimationCount = 0;
	this._baba_babaEventPattern = 0;
};
Game_Map.prototype.baba_babaEventPattern = function() {
	return this._baba_babaEventPattern;
};
Game_Map.prototype.baba_updateBabaEventAnimation = function() {
	this._baba_babaEventAnimationCount++; // updateAnimationCount
	var animationWait = 18; // animationWait : (9 - realMoveSpeed()) * 3
	// TODO : 可配置速度
	if (this._baba_babaEventAnimationCount >= animationWait) {
		// updatePattern
		this._baba_babaEventPattern = (this._baba_babaEventPattern + 1) % 3;

		this._baba_babaEventAnimationCount = 0;
	}
};



// 临时 扩大图块显示
const _MK_Spriteset_Map_createTilemap = Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap = function() {
	_MK_Spriteset_Map_createTilemap.apply(this, arguments);

	var margin = Math.max(Graphics.width, Graphics.height) / 2 + 20;
	this._tilemap._margin = margin;
	this._tilemap._width = Graphics.width + margin * 2;
	this._tilemap._height = Graphics.height + margin * 2;
};




// ----------------------------------------------------------------
// Game_Event
// baba事件

Game_Event.prototype.baba_isBabaEvent = function() {
	return !!this.event().meta['baba is you'];
};

const _MK_Game_Map_setupEvents = Game_Map.prototype.setupEvents;
Game_Map.prototype.setupEvents = function() {
	_MK_Game_Map_setupEvents.apply(this, arguments);

	this._events
		.filter(e => !!e && e.baba_isBabaEvent())
		.forEach(e => e.baba_initBabaEventByData());
};

// 执行谜题gameover触发事件后 会调用refresh使得变成事件数据中的图像 所以需要重新设置图像
const _MK_Game_Event_refresh = Game_Event.prototype.refresh;
Game_Event.prototype.refresh = function() {
	_MK_Game_Event_refresh.apply(this, arguments);
	this.baba_refreshItemImage();
};

// 地图刷新时 会刷新tile类事件 使得显示异常
const _MK_Game_Map_refresh = Game_Map.prototype.refresh;
Game_Map.prototype.refresh = function() {
	_MK_Game_Map_refresh.apply(this, arguments);
	this.baba_updateTileEventImageAll();
};



// --------------------------------
// baba物体

Game_Event.prototype.baba_initItem = function() {
	var item = this.event().meta['baba is you'];
	this.baba_setItem(typeof item === 'string' ? item.trim() : '');
};

Game_Event.prototype.baba_initBabaEventByData = function() {
	if (this.baba_isBabaEvent()) {
		this.baba_initItem();
		this.baba_initPaletteIndex();
		this.baba_initReadyMoveStep();
		this.baba_initRouteTurn();
	}
};

Game_Event.prototype.baba_setItem = function(item) {
	item = item || '';
	if (this._baba_item !== item) {
		this._baba_item = item;
		this.baba_refreshItemImage();

		if (this._baba_item) {
			this.baba_initPaletteIndex();
		}
	}
};

Game_Event.prototype.baba_setItemAndAddRoute = function(item) {
	var oldItem = this._baba_item;
	this.baba_setItem(item);
	if (this._baba_item !== oldItem && this._baba_item) {
		this.baba_addCurrentRoute();
	}
};

Game_Event.prototype.baba_refreshItemImage = function() {
	if (this._baba_item) {
		var name = $gameMap.baba_makeBabaCharacterName(this._baba_item);
		this.setImage(name, 0);
	}
	else {
		this.setImage('', 0);
	}
};

Game_Event.prototype.baba_getItem = function() {
	return this._baba_item;
};

Game_Event.prototype.baba_checkRule = function(rule) {
	return $gameMap.baba_checkBabaEventRule(this._eventId, rule);
};


// --------------------------------
// 路线记录

Game_Event.prototype.baba_initRouteTurn = function() {
	this._baba_routeTurn = [];
};
Game_Event.prototype.baba_clearRouteTurn = function() {
	this._baba_routeTurn.splice(0);
};
Game_Event.prototype.baba_hasRouteTurn = function() {
	return this._baba_routeTurn.length > 0;
};
Game_Event.prototype.baba_hasHidedRouteTurn = function() {
	return this.baba_hasRouteTurn()
		 && this.baba_topRouteTurn().length <= 0;
};

Game_Event.prototype.baba_newRouteTurn = function() {
	this._baba_routeTurn.unshift([]);
	this.baba_addCurrentRoute();
};
Game_Event.prototype.baba_newHidedRouteTurn = function() {
	this._baba_routeTurn.unshift([]);
};
Game_Event.prototype.baba_popRouteTurn = function() {
	return this._baba_routeTurn.shift();
};
Game_Event.prototype.baba_topRouteTurn = function() {
	return this._baba_routeTurn[0];
};
Game_Event.prototype.baba_addCurrentRoute = function() {
	this.baba_addRoute(this._x, this._y, this._direction, 0, 0);
};

Game_Event.prototype.baba_hasRoute = function() {
	return this.baba_hasRouteTurn() && this._baba_routeTurn[0].length > 0;
};
Game_Event.prototype.baba_addRoute = function(x, y, d, md, ml) {
	if (!this._baba_routeTurn[0]) {
		console.warn('please newRouteTurn');
		return ;
	}
	this._baba_routeTurn[0].push({
		x : x,
		y : y,
		d : d, // 面向方向
		md : md, // 该步的移动方向
		ml : ml, // 该步的移动距离
		i : this._baba_item, 
	});
};
Game_Event.prototype.baba_popRoute = function() {
	return this._baba_routeTurn[0].pop();
};



// --------------------------------
// 准备的移动

Game_Event.prototype.baba_initReadyMoveStep = function() {
	this._baba_readyMoveSteps = []; // 该轮移动的准备移动

	// 该轮移动的现阶段的位置
	this._baba_moveStepX = this._x;
	this._baba_moveStepY = this._y;

	// 该轮移动的该阶段的该步的临时移动位置和方向
	this._baba_moveStepTempX = null;
	this._baba_moveStepTempY = null;
	this._baba_moveStepTempFacingDirection = null;
	this._baba_moveStepTempDirection = null;

	// 暂时只考虑移动一格
	// TODO : 考虑 fall
};
Game_Event.prototype.baba_clearMoveStep = function() {
	this._baba_readyMoveSteps.splice(0);
	this._baba_moveStepX = this._x;
	this._baba_moveStepY = this._y;
	this._baba_moveStepTempX = null;
	this._baba_moveStepTempY = null;
	this._baba_moveStepTempFacingDirection = null;
	this._baba_moveStepTempDirection = null;
};
Game_Event.prototype.baba_clearMoveStepTemp = function() {
	this._baba_moveStepTempX = null;
	this._baba_moveStepTempY = null;
	this._baba_moveStepTempFacingDirection = null;
	this._baba_moveStepTempDirection = null;
};

// 设置临时移动位置
Game_Event.prototype.baba_setMoveStepTemp = function(direction, facingDirection) {
	if (direction > 0) {
		this._baba_moveStepTempX = $gameMap.roundXWithDirection(this._baba_moveStepX, direction);
		this._baba_moveStepTempY = $gameMap.roundYWithDirection(this._baba_moveStepY, direction);
		this._baba_moveStepTempFacingDirection = facingDirection;
		this._baba_moveStepTempDirection = direction;
	}
	else if (this._direction != facingDirection) {
		this._baba_moveStepTempX = this._baba_moveStepX;
		this._baba_moveStepTempY = this._baba_moveStepY;
		this._baba_moveStepTempFacingDirection = facingDirection;
		this._baba_moveStepTempDirection = direction;
	}
	else {
		// 无移动且不改变朝向时 不记录变化
	}
};
// 从临时移动位置和方向写入到准备移动
Game_Event.prototype.baba_addMoveStep = function() {
	if (this._baba_moveStepTempX != null) {
		// 存在写入的临时移动位置 才进行处理

		this._baba_readyMoveSteps.push({
			x : this._baba_moveStepTempX, 
			y : this._baba_moveStepTempY, 
			md : this._baba_moveStepTempDirection, 
			fd : this._baba_moveStepTempFacingDirection, 
		});
		this._baba_moveStepX = this._baba_moveStepTempX;
		this._baba_moveStepY = this._baba_moveStepTempY;
		
		this._direction = this._baba_moveStepTempFacingDirection;

		this.baba_clearMoveStepTemp();
	}
};


Game_Event.prototype.baba_executeAllMoveStep = function(back) {
	for (var obj of this._baba_readyMoveSteps) {
		this.baba_executeMove(obj.md, obj.fd, back);
	}

	this.baba_clearMoveStep();
};
Game_Event.prototype.baba_executeMove = function(direction, facingDirection, back) {
	this.setThrough(true);
	this.setDirectionFix(true);
	this.setMoveSpeed(5); // TODO : 相应变动的 使得总移动时间相等

	if (!back) {
		this._direction = facingDirection;
		this.moveStraight(direction);
	}
	else {
		this.moveStraight(direction);
		this._direction = facingDirection;
	}

	if (!back) {
		// 移动方向为0时不移动 此时移动距离为0
		this.baba_addRoute(this._x, this._y, this._direction, 
			direction, direction > 0 ? 1 : 0);
	}
	else {
		// backMove 不记录路线
	}
};


Game_Event.prototype.baba_isMoving = function() {
	return this.isMoving();
};



// --------------------------------
// 颜色 染色

ImageManager.baba_loadBabaPalettes = function(filename, hue) {
	return this.loadBitmap('img/palettes/', filename, hue, false);
};

// 临时
ImageManager.baba_loadBabaPalettes('default');
// TODO : 预加载

const _MK_Game_Screen_clear = Game_Screen.prototype.clear;
Game_Screen.prototype.clear = function() {
	_MK_Game_Screen_clear.apply(this, arguments);
	this.baba_clearPalette();
};
Game_Screen.prototype.baba_clearPalette = function() {
	this._baba_paletteName = 'default';
	this.baba_makePaletteData();
};
Game_Screen.prototype.baba_setPalette = function(paletteName) {
	paletteName = typeof paletteName === 'string' ? paletteName : '';
	var paletteName = paletteName !== '' ? paletteName : 'default';
	if (this._baba_paletteName !== paletteName) {
		this._baba_paletteName = paletteName;
		this.baba_makePaletteData();
	}
}

// ？改 记录palette图像 为 记录palette图像所储存的色调数据 ...
Game_Screen.prototype.baba_makePaletteData = function() {
	var palette = ImageManager.baba_loadBabaPalettes(this._baba_paletteName);
	var paletteData = [];
	for (var y = 0, i = 0; y < 5; y++) {
		for (var x = 0; x < 7; x++, i++) {
			var color = palette._context.getImageData(x, y, 1, 1).data;
			paletteData[i] = [-255+color[0], -255+color[1], -255+color[2], 0];
		}
	}
	this._baba_paletteData = paletteData;
}

Game_Screen.prototype.baba_getPaletteTone = function(index) {
	if (typeof index !== 'number' || index < 0 || index >= 7 * 5) {
		return [0, 0, 0, 0];
	}
	else {
		return this._baba_paletteData[index];
	}
}

Game_Event.prototype.baba_initPaletteIndex = function() {
	var paletteIndexMap = {
		'tile': 1, 
		'flag': 30, 
		'text_flag': 30, 
		'rock': 20, 
		'text_rock': 13, 
		'wall': 8, 
		'text_wall': 8, 
		'tree': 19, 
		'text_tree': 19, 
		'grass': 5, 
		'baba': -1, 
		'keke': 18, 
		'key': 30, 
		'text_is': -1, 
		'text_baba': 11, 
		'text_you': 11, 
		'text_stop': 12, 
		'text_push': 13, 
		'text_not': 11, 
		'text_keke': 18, 
		'text_key': 30, 

		//'text_win': 13, 
		'text_win': 30, 
	};
	// TODO : 自动配色
	this._baba_paletteIndex = 
		this._baba_item in paletteIndexMap
		 ? paletteIndexMap[this._baba_item]
		 : -1;
};
Game_Event.prototype.baba_setPaletteIndex = function(index) {
	this._baba_paletteIndex = index;
};


const _MK_Sprite_Character_updateBitmap = Sprite_Character.prototype.updateBitmap;
Sprite_Character.prototype.updateBitmap = function() {
	_MK_Sprite_Character_updateBitmap.apply(this, arguments);

	if (this.baba_isBabaToneChanged()) {
		this.baba_updateBabaTone();
	}
};

Sprite_Character.prototype.baba_isBabaToneChanged = function() {
	return this._baba_paletteIndex !== this._character._baba_paletteIndex;
};
Sprite_Character.prototype.baba_updateBabaTone = function() {
	this._baba_paletteIndex = this._character._baba_paletteIndex;
	this.setColorTone($gameScreen.baba_getPaletteTone(this._baba_paletteIndex));
};

// TODO : 颜色配置 颜色设置规律 等

// TODO : 规则语法正确时 发光


// TODO : 解决加载大量图块类图像(如wall)时卡顿的问题

// 卡顿的位置是 _executeTint
// 原因是 染色
// 对图块类图像(如wall)设置色调时会卡顿
// 因为图块类图像的原图像太大



// --------------------------------
// 图层顺序

const _MK_Game_Event_screenZ = Game_Event.prototype.screenZ;
Game_Event.prototype.screenZ = function() {
	if (this.baba_isBabaEvent()) {
		var haveYouRule = this.baba_checkRule('you');
		var floorItem = $gameMap.baba_checkTypeIsFloorItem(this._baba_item);
		var extraPriority = haveYouRule ? 1 : (floorItem ? -1 : 0);
		return (this._priorityType + extraPriority) * 2 + 1;
	}
	else {
		return _MK_Game_Event_screenZ.apply(this, arguments);
	}
};


// --------------------------------
// 踏步动画

const _MK_Game_Event_updatePattern = Game_Event.prototype.updatePattern;
Game_Event.prototype.updatePattern = function() {
	if (this.baba_isBabaEvent()) {
		// 未进行是否有踏步动画等判断
		this._pattern = $gameMap.baba_babaEventPattern();
	}
	else {
		_MK_Game_Event_updatePattern.apply(this, arguments);
	}
};




// ----------------------------------------------------------------
// Scene_Map
// baba地图图像

const _MK_Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
	if ($gameMap.baba_isBabaMap()) {
		this.baba_createBabaRuleListWindow();
	}
	_MK_Scene_Map_createAllWindows.apply(this, arguments);
};
Scene_Map.prototype.baba_createBabaRuleListWindow = function() {
	var w = new BabaWindow_RuleList();
	this._baba_babaRuleListWindow = w;
	this.addWindow(this._baba_babaRuleListWindow);
};
Scene_Map.prototype.baba_updateBabaRuleList = function() {
	if ($gameMap.baba_isBabaMap()) {
		var w = this._baba_babaRuleListWindow;
		if (!!w && $gameMap._baba_somethingChanged) {
			$gameMap._baba_somethingChanged = false;
			w.refresh();
		}
		if (!!w && !w._opening && !w._closing) {
			if (Input.isTriggered('pageup')) {
				w.open();
			}
			else if (Input.isTriggered('pagedown')) {
				w.close();
			}
		}
	}
};
const _MK_Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
	_MK_Scene_Map_update.apply(this, arguments);
	this.baba_updateBabaRuleList();
};

function BabaWindow_RuleList() {
	this.initialize.apply(this, arguments);
}
BabaWindow_RuleList.prototype = Object.create(Window_Base.prototype);
BabaWindow_RuleList.prototype.constructor = BabaWindow_RuleList;
BabaWindow_RuleList.prototype.initialize = function() {
	var width = this.windowWidth();
	var height = this.windowHeight();
	Window_Base.prototype.initialize.call(this, 
		0, 0, width, height);
	this._openness = 0;
	this.refresh();
};
BabaWindow_RuleList.prototype.windowWidth = function() {
	return Graphics.width;
};
BabaWindow_RuleList.prototype.windowHeight = function() {
	return Graphics.height;
};

BabaWindow_RuleList.prototype.baba_showTextWordUnit = function(word) {
	var text = word.name;
	word.decorates.forEach(decorate => text = decorate + ' ' + text);
	return text;
};
BabaWindow_RuleList.prototype.baba_showTextConditionUnit = function(condition) {
	var text = condition.name;
	condition.decorates.forEach(decorate => text = decorate + ' ' + text);
	var wordTexts = condition.words.map(word => this.baba_showTextWordUnit(word), this);
	for (var i = 0; i < wordTexts.length; i++) {
		if (i == 0) {
			text += ' ' + wordTexts[i];
		}
		else {
			text += ' & ' + wordTexts[i];
		}
	}
	return text;
};
BabaWindow_RuleList.prototype.baba_showTextConditionUnits = function(conditions) {
	var text = '';
	for (var i = 0; i < conditions.length; i++) {
		if (i > 0) text += '';
		text += this.baba_showTextConditionUnit(conditions[i]);
	}
	return text;
};
BabaWindow_RuleList.prototype.baba_showTextBehaviorUnit = function(behavior) {
	var text = behavior.name + ' ' + this.baba_showTextWordUnit(behavior.word);
	return text;
};

BabaWindow_RuleList.prototype.baba_showTextItemRuleUnit = function(unit) {
	var mainWordText = this.baba_showTextWordUnit(unit.mainWord);
	var conditonsText = this.baba_showTextConditionUnits(unit.conditions);
	var behaviorText = this.baba_showTextBehaviorUnit(unit.behavior);
	var text = mainWordText;
	if (!!conditonsText) text += ' ' + conditonsText;
	text += ' ' + behaviorText;
	return text;
};
BabaWindow_RuleList.prototype.baba_showTextItemRuleUnits = function(units) {
	var unitTexts = units.map(unit => this.baba_showTextItemRuleUnit(unit), this);
	var text = '';
	for (var i = 0; i < unitTexts.length; i++) {
		if (i > 0) text += '\n';
		text += unitTexts;
	}
	return text;
};

BabaWindow_RuleList.prototype.refresh = function() {
	this.contents.clear();
	var texts = $gameMap._baba_itemRuleUnits
		.filter(each => !each.baseRule)
		.map(unit => this.baba_showTextItemRuleUnit(unit), this);
	texts.forEach((text, i) => this.drawText(text, 0, i*24, this.width), this);
};
BabaWindow_RuleList.prototype.open = function() {
	this.refresh();
	Window_Base.prototype.open.call(this);
};

})();



