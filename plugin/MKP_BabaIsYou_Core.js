/*!
 * MKP_BabaIsYou_Core - v0.2.1.fix1
 * Updated : 2021-11-14T17:31:00+0800
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
 *   v0.2.1.fix1 (2021-11-14T17:31:00+0800)
 *     修正部分插件说明
 *     修复回退朝向的问题
 *     修复地图刷新时图块类事件显示异常问题
 *   v0.2.1 (2021-11-14T16:14:00+0800)
 *     尝试解决图块类型图像染色卡顿的问题(暂未解决)
 *     wait移动
 *     move移动
 *     检查是否有实际移动 无实际移动时不添加记录
 *     检查到gameover时 若wait移动可以产生变化 则解除gameover
 *   v0.2.0.fix2 (2021-11-14T03:23:00+0800)
 *     is变换考虑not修饰 (a is not b, not a is b, not a is not b)
 *     尝试解决图块类型图像染色卡顿的问题(暂未解决)
 *   v0.2.0.fix1 (2021-11-14T02:09:00+0800)
 *     item变化的回退时重新显示隐藏的baba事件
 *   v0.2.0 (2021-11-14T01:16:00+0800)
 *     完成item变化
 *       考虑循环变化和一变多变化等
 *       考虑可回退
 *       完成动态数目baba事件的功能
 *   v0.1.2.branch1 (2021-11-12T22:57:00+0800)
 *     更新插件说明样式
 *     完善部分插件说明
 *     提出一些方法 : baba_refreshItemImage, baba_makeBabaCharacterName
 *   v0.1.2 (2021-11-12T17:23:00+0800)
 *     增加游戏结束的检查和触发事件
 *   v0.1.1 2021/06/21 简单完成显示规则的文本表述的功能
 *   v0.1.0 2021/06/21 完成更复杂的语法规则的框架
 *     完成带on条件、not修饰、and连接的语法检查
 *     完成带on条件、not修饰的规则的生效判断
 *   v0.0.12.branch2 2021/06/21 尝试完成检查物体规则
 *   v0.0.12.branch1 2021/06/20 尝试完善检查规则语法
 *   v0.0.12 2021/06/18 修复you移动不能使you物体重叠的问题、修正一些注释、增加图块转换事件不存在配置时的提示
 *     修复无stop、push规则的you规则物体you移动不能使you物体重叠的问题
 *     修正了处理you移动的代码里的一些注释
 *     增加图块转换事件不存在配置时的提示
 *   v0.0.11.fix1 2021/06/18 修复重叠的baba图块只有一个能转化成事件的问题
 *   v0.0.11 2021/06/18 修复you移动撞墙转向问题、修正部分TODO任务状态、统一踏步动画
 *     you移动撞墙不移动但可以转向，push移动撞墙仍不转向
 *     回退撞墙的you移动时，方向也会回退
 *     修正部分TODO任务状态
 *     统一baba事件踏步动画，使得能同时变化pattern，看上去更整齐
 *   v0.0.10.fix1 2021/06/18 修复部分图块转换的事件不显示的问题
 *     修复部分图块转换的事件不显示的问题(地板对象优先级的问题)
 *   v0.0.10 2021/06/17 添加通过图块编辑谜题的功能
 *   v0.0.9 2021/06/16 完成判断胜利、胜利处理、临时图层顺序、补充Baba对象说明
 *     完成判断胜利
 *     完成处理响应胜利的简单框架
 *     临时的图层顺序设置
 *     补充Baba对象说明
 *   v0.0.8 2021/06/16 尝试修复you+stop时移动有误的问题
 *   v0.0.7 2021/06/16 添加一些小功能，修正一些错误
 *     完成启用禁用Baba地图的功能，启用时玩家角色无法活动
 *     添加检查Baba对象是否都已配置的功能
 *     修正 Baba对象配置构建映射的对象名
 *     修正 console.warn 函数名
 *   v0.0.6 2021/06/16 完成一些功能
 *     完成图块型物体的显示
 *     完成地图缩放的尝试
 *     完成简单的颜色显示
 *   v0.0.5 2021/06/16 完成边界,修正移动框架问题,并修复一个bug
 *     完成地图边界的配置和判定
 *     修正移动框架移动顺序问题
 *     解决YouMove+PushMove多移动的bug
 *   v0.0.4.branch1 2021/06/15 清理冗余注释 修正版本时间
 *   v0.0.4 2021/06/15 添加部分插件说明
 *   v0.0.3.fix1 2021/06/15 修复不存在历史路径时BackMove报错的问题
 *   v0.0.3 2021/06/14 完成Back移动
 *   v0.0.2 2021/06/14 完成Push移动
 *   v0.0.1 2021/06/14 完成简单框架和You移动
 *   v0.0.0 2021/06/13 项目计划中
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
 * ## 插件指令
 * 
 * | description | command |
 * | :---------- | :------ |
 * | XX | `Yy zz ww` |
 * | AA | `Bb cc dd` |
 * 
 * #### XX
 * > ...  
 * 
 * ` Yy Zz Ww `  
 * ` Yy 1 2 `  
 * + Yy
 *   - 主命令
 *   - 固定写法，不区分大小写
 * + Zz
 *   - 子命令
 *   - 固定写法，区分大小写
 * + Ww
 *   - ...
 *   - ...
 * 
 * #### AA
 * > ...  
 * 
 * ` Bb cc dd `  
 * + ...
 *   - ...
 *   - ...
 * + ...
 *   - ...
 *   - ...
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
 * ## 控制字符
 * 
 * TODO
 * 
 * ## 参数描述
 * 
 * TODO
 * 
 * ## 用语说明
 * 
 * TODO
 * 
 * ## 开发方法
 * 
 * TODO
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

!function() {
    const e = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function(a) {
        e.apply(this, arguments), this.baba_isBabaMap() && (this.baba_initBabaMap(), this.baba_updateItemRuleAll(), 
        this.baba_updateTileEventImageAll());
    }, Game_Map.prototype.baba_isBabaMap = function() {
        return !!$dataMap.meta["baba is you"] || "" === $dataMap.meta["baba is you"];
    }, Game_Map.prototype.baba_initMapSize = function() {
        var a = $dataMap.meta["baba is you"], e = (a = "string" == typeof a ? a : "").split(","), t = parseInt(e[0]), b = parseInt(e[1]), a = parseInt(e[2]), e = parseInt(e[3]);
        (Number.isNaN(t) || Number.isNaN(b) || Number.isNaN(a) || Number.isNaN(e)) && (b = t = 0, 
        a = this.width(), e = this.height()), this._baba_mapSizeX = t, this._baba_mapSizeY = b, 
        this._baba_mapSizeW = a, this._baba_mapSizeH = e;
    }, Game_Map.prototype.baba_initBabaMap = function() {
        this._babaMapEnabled = !1, this.baba_initBabaEventAnimation(), this.baba_initPuzzleWin(), 
        this.baba_initPuzzleGameover(), this.baba_initMapSize(), this.baba_setupBabaEventsByTileset(), 
        this.baba_checkObjectExistAll(), this._baba_isMoving = !1, this._baba_inputWait = 0, 
        this.baba_initItemRules();
    }, Game_Map.prototype.baba_checkObjectExistAll = function() {
        this.baba_babaEvents().filter(a => !this.baba_checkTypeIsItem(a._baba_item) && !this.baba_checkTypeIsText(a._baba_item), this).forEach(a => {
            console.warn(`baba object without config : eventId ${a._eventId}, baba_objectName ${a._baba_item}`);
        });
    }, Game_Map.prototype.baba_isBabaMapEnabled = function() {
        return this.baba_isBabaMap() && this._babaMapEnabled;
    }, Game_Map.prototype.baba_enableBabaMap = function() {
        this._babaMapEnabled = !0;
    }, Game_Map.prototype.baba_disableBabaMap = function() {
        this._babaMapEnabled = !1;
    };
    const t = Game_Player.prototype.canMove;
    Game_Player.prototype.canMove = function() {
        var a = t.apply(this, arguments);
        return a && !$gameMap.baba_isBabaMapEnabled();
    };
    const a = Game_Map.prototype.updateInterpreter;
    Game_Map.prototype.updateInterpreter = function() {
        this.baba_isBabaMapEnabled() ? this.baba_puzzleEventIsRunning() ? this.baba_updatePuzzleEventInterpreter() : this.baba_updateBabaMapTurn() : a.apply(this, arguments), 
        this.baba_updateBabaEventAnimation();
    }, Game_Map.prototype.baba_puzzleEventIsRunning = function() {
        return !!this._baba_puzzleInterpreter;
    }, Game_Map.prototype.baba_updatePuzzleEventInterpreter = function() {
        if (this._baba_puzzleInterpreter) return this._baba_puzzleInterpreter.update(), 
        !!this._baba_puzzleInterpreter.isRunning() || (this._baba_puzzleInterpreter = null, 
        !1);
    }, Game_Map.prototype.baba_updateBabaMapTurn = function() {
        var a, e = !1, t = !1;
        !this.baba_canInput() || 0 < (a = this.baba_getInputSignal()) && (1 == a ? (this.baba_updateNewRouteTurnAll(), 
        this.baba_updateInputMove(Input.dir4), this._baba_isMoving = !0) : 2 == a ? (this.baba_updateNewRouteTurnAll(), 
        this.baba_updateInputWait(), this._baba_isMoving = !0) : 3 == a && (this.baba_updateInputBack(), 
        this.baba_updatePopRouteTurnAll(), this._baba_isMoving = !0), (a = 3 == a) ? (this.baba_updateExecuteMoveAll(a), 
        t = !0) : this.baba_checkHaveAnyReadyRoute() ? (t = !0, this.baba_updateExecuteMoveAll(a)) : this.baba_updatePopRouteTurnAll(), 
        this.baba_updateItemRuleAll(), this.baba_updateRuleEffect_isTransform() && (this.baba_updateItemRuleAll(), 
        t = !0), this.baba_updateTileEventImageAll(), this.baba_updatePuzzleWin(), e = !0);
        this.baba_updatePuzzleGameover(t);
        this.baba_updateInputWaitCount(e), e && (this._baba_somethingChanged = !0);
    }, Game_Map.prototype.baba_isMoving = function() {
        var a;
        return this._baba_isMoving && (a = this.baba_babaEvents().some(a => a.baba_isMoving()), 
        this._baba_isMoving = a), this._baba_isMoving;
    }, Game_Map.prototype.baba_updateInputWaitCount = function(a) {
        a && (this._baba_inputWait = 10), 0 < this._baba_inputWait && this._baba_inputWait--;
    }, Game_Map.prototype.baba_canInput = function() {
        return this._baba_inputWait <= 0 && !this.baba_isMoving();
    }, Game_Map.prototype.baba_getInputSignal = function() {
        return 0 < Input.dir4 ? 1 : Input.isRepeated("ok") ? 2 : Input.isRepeated("escape") ? 3 : 0;
    }, Game_Map.prototype.baba_updateInputMove = function(a) {
        this.baba_babaEvents().some(a => a.baba_checkRule("you")) && (this.baba_addYouMoveAll(a), 
        this.baba_addMoveMoveAll());
    }, Game_Map.prototype.baba_updateInputWait = function() {
        this.baba_addMoveMoveAll();
    }, Game_Map.prototype.baba_updateInputBack = function() {
        this.baba_addBackMoveAll();
    }, Game_Map.prototype.baba_updateNewRouteTurnAll = function() {
        this.baba_babaEvents().forEach(a => a.baba_newRouteTurn()), this.baba_hidedBabaEvents().forEach(a => a.baba_newHidedRouteTurn());
    }, Game_Map.prototype.baba_updatePopRouteTurnAll = function() {
        this.baba_babaEvents().forEach(a => a.baba_popRouteTurn()), this.baba_hidedBabaEvents().forEach(a => a.baba_popRouteTurn());
    }, Game_Map.prototype.baba_updateExecuteMoveAll = function(e) {
        this.baba_babaEvents().forEach(a => a.baba_executeAllMoveStep(e));
    }, Game_Map.prototype.baba_checkHaveAnyReadyRoute = function() {
        return this.baba_babaEvents().some(a => a._baba_readyMoveSteps && 0 < a._baba_readyMoveSteps.length);
    }, Game_Map.prototype.baba_checkPuzzleWin = function() {
        var e = {};
        return this.baba_babaEvents().filter(a => a.baba_checkRule("you")).forEach(a => e[[ a._x, a._y ]] = !0), 
        this.baba_babaEvents().filter(a => a.baba_checkRule("win")).some(a => !!e[[ a._x, a._y ]]);
    }, Game_Map.prototype.baba_updatePuzzleWin = function() {
        var a = this.baba_checkPuzzleWin();
        return a && (this._baba_puzzleWin = !0, this.baba_disableBabaMap()), a;
    }, Game_Map.prototype.baba_initPuzzleWin = function() {
        this._baba_puzzleWin = !1;
    }, Game_Map.prototype.baba_setPuzzleWin = function(a) {
        this._baba_puzzleWin = !!a;
    }, Game_Map.prototype.baba_isPuzzleWin = function() {
        return this._baba_puzzleWin;
    }, Game_Map.prototype.baba_checkPuzzleGameover = function() {
        return !this.baba_babaEvents().some(a => a.baba_checkRule("you"));
    }, Game_Map.prototype.baba_updatePuzzleGameover = function(a) {
        return !a && this.baba_checkPuzzleGameover() ? 120 <= this._baba_puzzleGameoverCount ? 1 != this._baba_puzzleGameover && (this._baba_puzzleGameover = !0, 
        this.baba_executeEventPuzzleGameoverStart()) : this._baba_puzzleGameoverCount++ : (0 != this._baba_puzzleGameover && (this._baba_puzzleGameover = !1, 
        this.baba_executeEventPuzzleGameoverEnd()), this._baba_puzzleGameoverCount = 0), 
        this._baba_puzzleGameover;
    }, Game_Map.prototype.baba_executePuzzleGameoverEvent = function(a) {
        var e = $dataMap.events[a];
        0 < a && e && e.pages[0] && (this._baba_puzzleInterpreter = new Game_Interpreter(0), 
        this._baba_puzzleInterpreter.setup(e.pages[0].list, a));
    }, Game_Map.prototype.baba_getPuzzleGameoverStartEventId = function() {
        var a = $dataMap.meta["BIY puzzle gameover start"];
        return Number.parseInt(a || 0) || 0;
    }, Game_Map.prototype.baba_getPuzzleGameoverEndEventId = function() {
        var a = $dataMap.meta["BIY puzzle gameover end"];
        return Number.parseInt(a || 0) || 0;
    }, Game_Map.prototype.baba_executeEventPuzzleGameoverStart = function() {
        var a = this.baba_getPuzzleGameoverStartEventId();
        0 < a && this.baba_executePuzzleGameoverEvent(a);
    }, Game_Map.prototype.baba_executeEventPuzzleGameoverEnd = function() {
        var a = this.baba_getPuzzleGameoverEndEventId();
        0 < a && this.baba_executePuzzleGameoverEvent(a);
    }, Game_Map.prototype.baba_initPuzzleGameover = function() {
        this._baba_puzzleGameover = !1, this._baba_puzzleGameoverCount = 0;
    }, Game_Map.prototype.baba_isPuzzleGameover = function() {
        return this._baba_puzzleGameover;
    }, Game_Map.prototype.baba_addYouMoveAll = function(a) {
        for (var e = this.baba_babaEvents().filter(a => a.baba_checkRule("you")), t = e.map(a => !1), b = 0; b < e.length; b++) if (!t[b]) {
            this.baba_addEventMoveStep(e[b]._eventId, a, !0);
            for (var i, n = 0; n < e.length; n++) t[n] || null != (i = e[n])._baba_moveStepTempX && (i._baba_moveStepTempX == i._x && i._baba_moveStepTempY == i._y || (t[n] = !0));
            t[b] = !0;
        }
        this.baba_babaEvents().forEach(a => a.baba_addMoveStep());
    }, Game_Map.prototype.baba_addMoveMoveAll = function() {
        this.baba_babaEvents().filter(a => a.baba_checkRule("move")).forEach(a => {
            this.baba_addEventMoveStep(a._eventId, a.direction(), !1, !0);
        }, this), this.baba_babaEvents().forEach(a => a.baba_addMoveStep());
    }, Game_Map.prototype.baba_addShiftMoveAll = function() {}, Game_Map.prototype.baba_addEventMoveStep = function(a, e, t, b) {
        var i = this._events[a];
        if (!this.baba_isBabaEvent(i)) return console.warn("eror baba event (eventId : " + a + ")", i), 
        !1;
        var n = this.roundXWithDirection(i._baba_moveStepX, e), o = this.roundYWithDirection(i._baba_moveStepY, e);
        if (this.baba_checkEventsStopMove(n, o, t)) {
            if (t) return i.baba_setMoveStepTemp(0, e), !1;
            if (b) {
                var r = 10 - e;
                return this.baba_addEventMoveStep(a, r, t, !1);
            }
            return !1;
        }
        if (this.baba_checkEventsPushMove(n, o, t)) {
            o = this.baba_addEventsMoveStep(n, o, e, t);
            return o ? i.baba_setMoveStepTemp(e, e) : t ? i.baba_setMoveStepTemp(0, e) : b && this.baba_addEventMoveStep(a, r = 10 - e, t, !1), 
            o;
        }
        return i.baba_setMoveStepTemp(e, e), !0;
    }, Game_Map.prototype.baba_addEventsMoveStep = function(a, e, t, b) {
        var i = this.roundXWithDirection(a, t), n = this.roundYWithDirection(e, t);
        if (this.baba_checkEventsStopMove(i, n, b)) return b && this.baba_babaEventsMoveStepAt(a, e).filter(a => a.baba_checkRule("you")).forEach(a => a.baba_setMoveStepTemp(0, t)), 
        !1;
        if (this.baba_checkEventsPushMove(i, n, b)) {
            n = this.baba_addEventsMoveStep(i, n, t, b);
            return n ? this.baba_addEventPushMoveStep(a, e, t, b) : b && this.baba_babaEventsMoveStepAt(a, e).filter(a => a.baba_checkRule("you")).forEach(a => a.baba_setMoveStepTemp(0, t)), 
            n;
        }
        return this.baba_addEventPushMoveStep(a, e, t, b), !0;
    }, Game_Map.prototype.baba_checkInMapSize = function(a, e) {
        return !(a < this._baba_mapSizeX) && (!(e < this._baba_mapSizeY) && (!(this._baba_mapSizeX + this._baba_mapSizeW <= a) && !(this._baba_mapSizeY + this._baba_mapSizeH <= e)));
    }, Game_Map.prototype.baba_checkEventsStopMove = function(a, e, t) {
        return !this.baba_checkInMapSize(a, e) || (t ? this.baba_babaEventsMoveStepAt(a, e).filter(a => !a.baba_checkRule("push")).filter(a => !a.baba_checkRule("you")).some(a => a.baba_checkRule("stop")) : this.baba_babaEventsMoveStepAt(a, e).filter(a => !a.baba_checkRule("push")).some(a => a.baba_checkRule("stop")));
    }, Game_Map.prototype.baba_checkEventsPushMove = function(a, e, t) {
        return t ? this.baba_babaEventsMoveStepAt(a, e).some(a => a.baba_checkRule("push") || a.baba_checkRule("you") && a.baba_checkRule("stop")) : this.baba_babaEventsMoveStepAt(a, e).some(a => a.baba_checkRule("push"));
    }, Game_Map.prototype.baba_addEventPushMoveStep = function(a, e, t, b) {
        b ? this.baba_babaEventsMoveStepAt(a, e).filter(a => a.baba_checkRule("push") || a.baba_checkRule("you") && a.baba_checkRule("stop")).forEach(a => a.baba_setMoveStepTemp(t, t)) : this.baba_babaEventsMoveStepAt(a, e).filter(a => a.baba_checkRule("push")).forEach(a => a.baba_setMoveStepTemp(t, t));
    }, Game_Map.prototype.baba_checkBackMove = function() {
        return this.baba_babaEvents().some(a => a.baba_hasRouteTurn());
    }, Game_Map.prototype.baba_addBackMoveAll = function() {
        this.baba_checkBackMove() && (this.baba_babaEvents().forEach(a => {
            if (a.baba_hasRouteTurn()) for (var e = a.baba_topRouteTurn(), t = e.length - 1; 1 <= t; t--) {
                var b = e[t], i = e[t - 1];
                0 < b.md ? (b = 10 - b.md, a.baba_setMoveStepTemp(b, i.d)) : a.baba_setMoveStepTemp(0, i.d), 
                a.baba_addMoveStep(), a._baba_item != i.i && a.baba_setItemAndAddRoute(i.i);
            } else a.baba_deactivateBabaEvent();
        }), this.baba_hidedBabaEvents().forEach(a => {
            a.baba_hasRouteTurn() ? a.baba_hasHidedRouteTurn() || a.baba_showBabaEvent() : a.baba_deactivateBabaEvent();
        }));
    };
    var b = [ "baba", "key", "door", "flag", "rock", "tree", "tile", "keke" ];
    const i = [ "wall", "grass" ];
    var n = [ "baba", "key", "door", "flag", "rock", "wall", "tree", "grass", "tile", "keke" ], o = [ "you", "win", "stop", "push", "move" ], r = [ "is", "and", "not", "on" ], p = [], _ = [ "not" ], s = [], h = [ "is" ], u = [ ...b, ...i ];
    const c = [ ...n, ...o, ...r ];
    var m = [ ...p, ..._ ], l = [ ...s, ...h ];
    function temp_list2map(a, t) {
        var b = {};
        return a.forEach((a, e) => b[t ? "text_" + a : a] = e + 1), b;
    }
    temp_list2map(b, !1);
    const v = temp_list2map(i, !1), d = temp_list2map(u, !1);
    Game_Map.prototype.baba_checkTypeIsTileItem = function(a) {
        return a in v;
    };
    const f = temp_list2map([ "grass", "tile" ], !(Game_Map.prototype.baba_checkTypeIsItem = function(a) {
        return a in d;
    }));
    Game_Map.prototype.baba_checkTypeIsFloorItem = function(a) {
        return a in f;
    };
    const y = temp_list2map(n, !0), M = temp_list2map(o, !0);
    temp_list2map(r, !0);
    const E = temp_list2map(c, !0);
    Game_Map.prototype.baba_checkTypeIsWord = function(a) {
        return a in y;
    }, Game_Map.prototype.baba_checkTypeIsRule = function(a) {
        return a in M;
    }, Game_Map.prototype.baba_checkTypeIsText = function(a) {
        return a in E;
    };
    const I = temp_list2map([ "on" ], !0), G = temp_list2map(p, !0), g = temp_list2map(_, !0), T = temp_list2map(m, !0), R = temp_list2map(s, !0), S = temp_list2map(h, !0), x = temp_list2map(l, !0);
    Game_Map.prototype.baba_checkTypeIsConditionText = function(a) {
        return a in I;
    }, Game_Map.prototype.baba_checkTypeIsDecorate1Text = function(a) {
        return a in G;
    }, Game_Map.prototype.baba_checkTypeIsDecorate2Text = function(a) {
        return a in g;
    }, Game_Map.prototype.baba_checkTypeIsDecorateText = function(a) {
        return a in T;
    }, Game_Map.prototype.baba_checkTypeIsBehavior1Text = function(a) {
        return a in R;
    }, Game_Map.prototype.baba_checkTypeIsBehavior2Text = function(a) {
        return a in S;
    }, Game_Map.prototype.baba_checkTypeIsBehaviorText = function(a) {
        return a in x;
    }, Game_Map.prototype.baba_initItemRules = function() {
        this._baba_itemRuleUnits = [], this._baba_babaEventRules = [];
    }, Game_Map.prototype.baba_clearItemRules = function() {
        this._baba_itemRuleUnits.splice(0), this._baba_babaEventRules.splice(0);
    }, Game_Map.prototype.baba_parseItemRuleUnitMainWord = function(a) {
        for (var e = a.mainWord.decorates, t = !1, b = !1, i = !1, n = e.length - 1; 0 <= n; n--) "not" == e[n] ? b ? i = !i : t = !t : "lonely" == e[n] ? (b && console.warn('error itemRuleUnit : many "lonely" decorate', a), 
        b = !0) : console.warn("error itemRuleUnit : unknown mainWord decorate", a);
        a.mainWord.parseDecorate = {
            notWord: t,
            existLonely: b,
            notLonely: i
        };
    }, Game_Map.prototype.baba_parseItemRuleUnitConditions = function(a) {
        for (var e of a.conditions) {
            e.decorates.some(a => "not" != a) && console.warn("error itemRuleUnit : unknown condition decorate", a);
            var t, b = !!(e.decorates.length % 2);
            e.parseDecorate = {
                notCondition: b
            };
            for (t of e.words) {
                t.decorates.some(a => "not" != a) && console.warn("error itemRuleUnit : unknown conditionWord decorate", a);
                var i = !!(t.decorates.length % 2);
                t.parseDecorate = {
                    notWord: i
                };
            }
        }
    }, Game_Map.prototype.baba_parseItemRuleUnitBehavior = function(a) {
        var e = a.behavior.word;
        e.decorates.some(a => "not" != a) && console.warn("error itemRuleUnit : unknown behaviorWord decorate", a);
        a = !!(e.decorates.length % 2);
        e.parseDecorate = {
            notWord: a
        };
    }, Game_Map.prototype.baba_addItemRuleUnit = function(a, e) {
        this.baba_parseItemRuleUnitMainWord(a), this.baba_parseItemRuleUnitConditions(a), 
        this.baba_parseItemRuleUnitBehavior(a), a.baseRule = !!e, this._baba_itemRuleUnits.push(a);
    }, Game_Map.prototype.baba_addItemRuleByItemRuleUnits = function(a, e) {
        for (var t of a) this.baba_addItemRuleUnit(t, e);
    }, Game_Map.prototype.baba_checkItemRuleUnitMainWord = function(a, e, t, b, i) {
        var n = a.mainWord.parseDecorate.notWord, o = a.mainWord.parseDecorate.existLonely, r = a.mainWord.parseDecorate.notLonely;
        if (n) {
            if (a.mainWord.name == e) return !1;
            if (!o) return !0;
            p = this.baba_babaEventsAt(t, b).length;
            return r ? 1 < p : p <= 1;
        }
        if (a.mainWord.name != e) return !1;
        if (!o) return !0;
        var p = this.baba_babaEventsAt(t, b).length;
        return r ? 1 < p : p <= 1;
    }, Game_Map.prototype.baba_checkItemRuleUnitCondition = function(a, e, t, b, i) {
        if ("on" != a.name) return console.warn("error itemRuleUnit : unknown condition", a), 
        !1;
        var n = this.baba_babaEventsAt(t, b).map(a => a._baba_item);
        itemCount = {}, n.forEach(a => itemCount[a] = (itemCount[a] || 0) + 1);
        var o, r = !0;
        for (o of a.words) if (o.parseDecorate.notWord) {
            if (!n.some(a => a != o.name)) {
                r = !1;
                break;
            }
        } else {
            if (!(itemCount[o.name] && 0 < itemCount[o.name])) {
                r = !1;
                break;
            }
            itemCount[o.name]--;
        }
        return a.parseDecorate.notCondition ? !r : r;
    }, Game_Map.prototype.baba_checkItemRuleUnitConditions = function(a, e, t, b, i) {
        for (var n of a.conditions) if (!this.baba_checkItemRuleUnitCondition(n, e, t, b, i)) return !1;
        return !0;
    }, Game_Map.prototype.baba_filterItemRuleUnits = function(e, t, b, i) {
        return this._baba_itemRuleUnits.filter(function(a) {
            return this.baba_checkItemRuleUnitMainWord(a, e, t, b, i) && this.baba_checkItemRuleUnitConditions(a, e, t, b, i);
        }, this);
    }, Game_Map.prototype.baba_makeItemBehaviorMap = function(a) {
        var e, a = this._events[a], a = this.baba_filterItemRuleUnits(a._baba_item, a._x, a._y, a._eventId), t = {
            is: {}
        }, b = {};
        for (e in a.filter(a => "is" == a.behavior.name).forEach(a => {
            a = a.behavior.word;
            b[a.name] = b[a.name] || [], b[a.name].push(a.parseDecorate.notWord);
        }), b) b[e].every(a => !a) && (t.is[e] = !0);
        return t.has = a.filter(a => "has" == a.behavior.name).map(a => a.behavior.word.name), 
        t.make = a.filter(a => "make" == a.behavior.name).map(a => a.behavior.word.name), 
        t;
    }, Game_Map.prototype.baba_updateBabaEventsRules = function() {
        this.baba_babaEvents().forEach(function(a) {
            var e = this.baba_makeItemBehaviorMap(a._eventId);
            this._baba_babaEventRules[a._eventId] = e;
        }, this);
    }, Game_Map.prototype.baba_checkBabaEventRule = function(a, e) {
        a = this._baba_babaEventRules[a];
        return !!a && a.is[e];
    }, Game_Map.prototype.baba_getBabaEventHasList = function(a) {
        a = this._baba_babaEventRules[a];
        return !!a && a.has[rule];
    }, Game_Map.prototype.baba_getBabaEventMakeList = function(a) {
        a = this._baba_babaEventRules[a];
        return !!a && a.make;
    }, Game_Map.prototype.baba_updateRuleEffect_isTransform = function() {
        var t = !1, a = this._baba_itemRuleUnits.filter(a => "is" == a.behavior.name && this.baba_checkTypeIsItem(a.behavior.word.name));
        if (a.length <= 0) return !1;
        var b = {};
        this.baba_babaEvents().filter(a => this.baba_checkTypeIsItem(a._baba_item)).forEach(a => b[a._baba_item] = !0);
        var e, i = {}, n = {};
        for (e in a.forEach(a => {
            if (a.behavior.word.parseDecorate.notWord) if (a.mainWord.parseDecorate.notWord) {
                e = a.behavior.word.name;
                for (t in b) t != a.mainWord.name && (n[t] = n[t] || {}, n[t][e] = !0);
            } else {
                t = a.mainWord.name, e = a.behavior.word.name;
                n[t] = n[t] || {}, n[t][e] = !0;
            } else if (a.mainWord.parseDecorate.notWord) {
                var e = a.behavior.word.name;
                for (t in b) t != a.mainWord.name && (i[t] = i[t] || {}, i[t][e] = i[t][e] || 0, 
                i[t][e]++);
            } else {
                var t = a.mainWord.name, e = a.behavior.word.name;
                i[t] = i[t] || {}, i[t][e] = i[t][e] || 0, i[t][e]++;
            }
        }), i) for (var o in i[e]) 2 < i[e][o] && (i[e][o] = 2);
        for (e in Object.keys(i).filter(a => i[a][a]).forEach(a => delete i[a]), i) if (n[e]) {
            for (var o in i[e]) n[e][o] && delete i[e][o];
            Object.keys(i[e]).length <= 0 && delete i[e];
        }
        if (Object.keys(i).length <= 0) return !1;
        var r, p = [];
        for (r in i) {
            var _ = 1 == Object.keys(i[r]).length;
            this.baba_babaEvents().filter(a => a._baba_item == r).forEach(a => p.push({
                id: a._eventId,
                name1: r,
                x: a._x,
                y: a._y,
                d: a._direction,
                oneToOne: _
            }));
        }
        return p.forEach(a => !a.oneToOne && this.baba_hideBabaEvent(a.id)), p.forEach(a => {
            if (a.oneToOne) {
                var e = Object.keys(i[a.name1])[0];
                this._events[a.id].baba_setItemAndAddRoute(e), t = !0;
            } else for (var e in i[a.name1]) this.baba_requireBabaEvent(e, a.x, a.y, a.d), t = !0;
        }, this), t;
    }, Game_Map.prototype.baba_updateItemRuleAll = function() {
        this.baba_clearItemRules();
        var a = this.baba_makeItemRuleUnits_baseRule();
        this.baba_addItemRuleByItemRuleUnits(a, !0), a = this.baba_makeItemRuleUnits_rule1(), 
        this.baba_addItemRuleByItemRuleUnits(a), this.baba_updateBabaEventsRules();
    }, Game_Map.prototype.baba_makeItemRuleUnits_baseRule = function() {
        var e = [], t = {
            mainWord: {
                name: "",
                decorates: []
            },
            conditions: [],
            behavior: {
                name: "",
                word: {
                    name: "",
                    decorates: []
                }
            }
        };
        return c.forEach(a => {
            t.mainWord.name = "text_" + a, t.behavior.name = "is", t.behavior.word.name = "push", 
            e.push(JSON.parse(JSON.stringify(t)));
        }), e;
    }, Game_Map.prototype.baba_makeItemRuleUnits_rule1 = function() {
        var e = {};
        this.baba_babaEvents().filter(a => this.baba_checkInMapSize(a._x, a._y), this).filter(a => a._baba_item && a._baba_item.startsWith("text_")).map(a => {
            e[[ a._x, a._y ]] || (e[[ a._x, a._y ]] = {
                x: a._x,
                y: a._y,
                text: a._baba_item
            });
        });
        for (var a = [], t = [], b = this._baba_mapSizeX, i = this._baba_mapSizeX + this._baba_mapSizeW, n = this._baba_mapSizeY, o = this._baba_mapSizeY + this._baba_mapSizeH, r = n; r < o; r++) for (var p = b; p < i; p++) if (e[[ p, r ]]) {
            if (!e[[ p - 1, r ]]) {
                for (var _ = p; _ < i && e[[ _, r ]]; _++) t.push(e[[ _, r ]].text);
                3 <= t.length ? a.push(t.splice(0)) : t.splice(0);
            }
            if (!e[[ p, r - 1 ]]) {
                for (var s = r; s < o && e[[ p, s ]]; s++) t.push(e[[ p, s ]].text);
                3 <= t.length ? a.push(t.splice(0)) : t.splice(0);
            }
        }
        for (var h = [], u = 0, c = 0, m = 0, l = 1e3 + 10 * ((a = a.map(a => a.map(function(a) {
            var e = "";
            return this.baba_checkTypeIsWord(a) ? e = "word" : this.baba_checkTypeIsRule(a) ? e = "rule" : this.baba_checkTypeIsConditionText(a) ? e = "condition" : this.baba_checkTypeIsDecorate1Text(a) ? e = "decorate1" : this.baba_checkTypeIsDecorate2Text(a) ? e = "decorate2" : this.baba_checkTypeIsBehavior1Text(a) ? e = "behavior1" : this.baba_checkTypeIsBehavior2Text(a) ? e = "behavior2" : "text_and" == a && (e = "and"), 
            {
                text: a.slice("text_".length),
                type: e
            };
        }, this), this)).length <= 0 ? 10 : a.length <= 1 ? a[0].length : a.length * a.reduce((a, e) => (a.length > e.length ? a : e).length)); l--; ) {
            for (var v = a[u], d = 11, f = {
                text: "",
                decorates: []
            }, y = [], M = null, E = [], I = {
                text: "",
                words: []
            }, G = 0, g = [], T = 0, R = [], T = c; T < v.length; T++) {
                var S = v[T];
                if (11 == d ? "decorate1" == S.type || "decorate2" == S.type ? "lonely" == S.text && f.decorates.includes("lonely") ? d = 99 : f.decorates.push(S.text) : "word" == S.type ? (f.text = S.text, 
                y.push(f), f = {
                    text: "",
                    decorates: []
                }, d++) : d = 99 : 12 == d ? "and" == S.type ? d-- : d = "decorate2" == S.type ? (f.decorates.push(S.text), 
                21) : "condition" == S.type ? (f.text = S.text, M = f, f = {
                    text: "",
                    decorates: []
                }, 22) : "behavior1" == S.type || "behavior2" == S.type ? (I.text = S.text, G = "behavior1" == S.type ? 1 : 2, 
                32) : 99 : 21 == d ? "decorate2" == S.type ? f.decorates.push(S.text) : "condition" == S.type ? (f.text = S.text, 
                M = f, f = {
                    text: "",
                    decorates: []
                }, d++) : d = 99 : 22 == d ? "decorate1" == S.type || "decorate2" == S.type ? f.decorates.push(S.text) : "word" == S.type ? (f.text = S.text, 
                E.push(f), f = {
                    text: "",
                    decorates: []
                }, d++) : d = 99 : 23 == d ? "and" == S.type ? d-- : d = "behavior1" == S.type || "behavior2" == S.type ? (I.text = S.text, 
                G = "behavior1" == S.type ? 1 : 2, 32) : 99 : 32 == d ? "decorate2" == S.type && 2 == G ? f.decorates.push(S.text) : "word" == S.type || 2 == G && "rule" == S.type ? (f.text = S.text, 
                I.words.push(f), f = {
                    text: "",
                    decorates: []
                }, d++) : d = 0 < I.words.length ? 98 : 99 : 33 == d ? d = "and" == S.type ? 34 : 98 : 34 == d && (d = "behavior1" == S.type || "behavior2" == S.type ? (g.push(I), 
                G = 0, (I = {
                    text: "",
                    words: []
                }).text = S.text, G = "behavior1" == S.type ? 1 : 2, 32) : "decorate2" == S.type && 2 == G ? (f.decorates.push(S.text), 
                32) : "word" == S.type || 2 == G && "rule" == S.type ? (f.text = S.text, I.words.push(f), 
                f = {
                    text: "",
                    decorates: []
                }, 33) : 98), R[T] = d, T == v.length - 1 && (d = 32 == d ? 0 < I.words.length ? 98 : 99 : 33 == d || 34 == d || 98 == d ? 98 : 99, 
                R[z + 1] = d), 98 == d) {
                    g.push(I);
                    break;
                }
                if (99 == d) break;
            }
            if (98 == d) {
                var x = {
                    name: "",
                    decorates: []
                }, k = {
                    name: "",
                    decorates: [],
                    words: []
                }, B = {
                    name: "",
                    word: {
                        name: "",
                        decorates: []
                    }
                }, w = {
                    mainWord: x,
                    conditions: [ k ],
                    behavior: B
                };
                if (null != M ? (w.conditions = [ k ], k.name = M.text, k.decorates = M.decorates, 
                k.words = E.map(a => ({
                    name: a.text,
                    decorates: a.decorates
                }))) : w.conditions = [], 0 < y.length && 0 < g.length) for (var z = 0; z < y.length; z++) {
                    var W = y[z];
                    x.name = W.text, x.decorates = W.decorates;
                    for (var A = 0; A < g.length; A++) {
                        var P = g[A];
                        B.name = P.text;
                        for (var C = 0; C < P.words.length; C++) {
                            S = P.words[C];
                            B.word.name = S.text, B.word.decorates = S.decorates, h.push(JSON.parse(JSON.stringify(w)));
                        }
                    }
                }
            }
            if (99 == d) m = c + 1; else {
                if (98 != d) {
                    console.warn(`error phase after parse sentence : phase ${d}`);
                    break;
                }
                for (A = T; c <= A; A--) {
                    if ("behavior1" == v[A].type || "behavior2" == v[A].type) {
                        m = A + 1;
                        break;
                    }
                    A == c && (m = c + 1, console.warn("not found behavior text", v, T, c, m));
                }
            }
            if (m >= v.length) {
                if (m = c = 0, ++u >= a.length) break;
            } else c = m;
        }
        return h;
    }, Game_Map.prototype.baba_isBabaEvent = function(a) {
        return !!a && !a._erased && a.baba_isBabaEvent();
    }, Game_Map.prototype.baba_babaEvents = function() {
        return this._events.filter(a => this.baba_isBabaEvent(a), this);
    }, Game_Map.prototype.baba_babaEventsAt = function(e, t) {
        return this._events.filter(a => this.baba_isBabaEvent(a), this).filter(a => a._x == e && a._y == t);
    }, Game_Map.prototype.baba_babaEventsMoveStepAt = function(e, t) {
        return this._events.filter(a => this.baba_isBabaEvent(a), this).filter(a => a._baba_moveStepX == e && a._baba_moveStepY == t);
    }, Game_Map.prototype.baba_isNoIdleBabaEvent = function(a) {
        return !!a && a.baba_isBabaEvent() && !a._baba_isIdleBabaEvent;
    }, Game_Map.prototype.baba_noIdleBabaEvents = function() {
        return this._events.filter(a => this.baba_isNoIdleBabaEvent(a), this);
    }, Game_Map.prototype.baba_isHidedBabaEvent = function(a) {
        return !!a && a._erased && a.baba_isBabaEvent() && !a._baba_isIdleBabaEvent;
    }, Game_Map.prototype.baba_hidedBabaEvents = function() {
        return this._events.filter(a => this.baba_isHidedBabaEvent(a), this);
    };
    const k = JSON.stringify({
        id: 1,
        name: "EV001",
        note: "<baba is you:%name%>",
        pages: [ {
            conditions: {
                actorId: 1,
                actorValid: !1,
                itemId: 1,
                itemValid: !1,
                selfSwitchCh: "A",
                selfSwitchValid: !1,
                switch1Id: 1,
                switch1Valid: !1,
                switch2Id: 1,
                switch2Valid: !1,
                variableId: 1,
                variableValid: !1,
                variableValue: 0
            },
            directionFix: !0,
            image: {
                tileId: 0,
                characterName: "",
                direction: 2,
                pattern: 1,
                characterIndex: 0
            },
            list: [ {
                code: 0,
                indent: 0,
                parameters: []
            } ],
            moveFrequency: 3,
            moveRoute: {
                list: [ {
                    code: 0,
                    parameters: []
                } ],
                repeat: !0,
                skippable: !1,
                wait: !1
            },
            moveSpeed: 3,
            moveType: 0,
            priorityType: 1,
            stepAnime: !0,
            through: !0,
            trigger: 0,
            walkAnime: !1
        } ],
        x: 1,
        y: 1
    });
    Game_Map.prototype.baba_babaEventTemplate = function() {
        return JSON.parse(k);
    }, Game_Map.prototype.baba_makeBabaEventData = function(a, e, t, b, i) {
        var n = this.baba_babaEventTemplate();
        n.id = a, n.note = n.note.replace("<baba is you:%name%>", "<baba is you:" + e + ">"), 
        DataManager.extractMetadata(n), n.name = e + "_" + a;
        a = n.pages[0].image;
        return a.characterName = this.baba_makeBabaCharacterName(e), a.characterIndex = 0, 
        a.direction = i, n.x = t, n.y = b, n;
    }, Game_Map.prototype.baba_makeBabaCharacterName = function(a) {
        return this.baba_checkTypeIsTileItem(a) ? "!" + a + "_tile1" : "!$" + a;
    }, Spriteset_Map.prototype.baba_addBabaEventCharacter = function(a) {
        a = new Sprite_Character(a);
        this._characterSprites.push(a), this._tilemap.addChild(a);
    }, Game_Map.prototype.baba_addBabaEvent = function(a, e, t, b) {
        var i = $dataMap.events.length, b = this.baba_makeBabaEventData(i, a, e, t, b);
        $dataMap.events.push(b);
        b = new Game_Event(this._mapId, i);
        (this._events[i] = b).baba_deactivateBabaEvent(), b.baba_initBabaEventByData();
        i = SceneManager._scene._spriteset;
        return i && i.baba_addBabaEventCharacter(b), b;
    }, Game_Map.prototype.baba_deactivateBabaEvent = function(a) {
        a = this.event(a);
        a && a.baba_deactivateBabaEvent();
    }, Game_Event.prototype.baba_deactivateBabaEvent = function() {
        this.erase(), this._baba_isIdleBabaEvent = !0, this.setImage("", 0), this.baba_initReadyMoveStep(), 
        this.baba_initRouteTurn();
    }, Game_Map.prototype.baba_hideBabaEvent = function(a) {
        a = this.event(a);
        a && a.baba_hideBabaEvent();
    }, Game_Event.prototype.baba_hideBabaEvent = function() {
        this.erase();
    }, Game_Map.prototype.baba_showBabaEvent = function(a) {
        a = this.event(a);
        a && a.baba_showBabaEvent();
    }, Game_Event.prototype.baba_showBabaEvent = function() {
        this._erased = !1;
    }, Game_Map.prototype.baba_requireNewBabaEvent = function(a) {
        return this.baba_addBabaEvent(a || "XXX", -1, -1, 2);
    }, Game_Map.prototype.baba_requireIdleBabaEvent = function(a) {
        return this._events.find(a => !!a && !!a._baba_isIdleBabaEvent && a.baba_isBabaEvent()) || this.baba_requireNewBabaEvent(a);
    }, Game_Map.prototype.baba_requireBabaEvent = function(a, e, t, b) {
        var i = this.baba_requireIdleBabaEvent(a), n = i.event();
        n.meta["baba is you"] = a, n.pages[0].image.characterName = this.baba_makeBabaCharacterName(a), 
        i._erased = !1, i._baba_isIdleBabaEvent = !1, i.baba_setItem(a), i.baba_refreshItemImage(), 
        i.setPosition(e, t), i.setDirectionFix(!1), i.setDirection(b), i.baba_initReadyMoveStep(), 
        i.baba_initRouteTurn();
    }, Game_Map.prototype.baba_makeTileEventImageIndex = function(a, e, t, b) {
        return parseInt([ !!e, !!t, !!a, !!b ].map(a => a ? 1 : 0).join(""), 2);
    }, Game_Map.prototype.baba_makeTileEventImageData = function(e) {
        for (var a, t = this.baba_babaEvents().filter(a => a._baba_item == e), b = {}, i = 0; i < t.length; i++) {
            var n = t[i];
            b[[ n._x, n._y ]] = b[[ n._x, n._y ]] || {
                x: n._x,
                y: n._y,
                eventsId: [],
                imageIndex: 0
            }, b[[ n._x, n._y ]].eventsId.push(n._eventId);
        }
        for (a in b) {
            var o, r = (o = b[a]).x, p = o.y, _ = !this.baba_checkInMapSize(r, p - 1) || !!([ r, p - 1 ] in b), s = !this.baba_checkInMapSize(r, p + 1) || !!([ r, p + 1 ] in b), h = !this.baba_checkInMapSize(r - 1, p) || !!([ r - 1, p ] in b), p = !this.baba_checkInMapSize(r + 1, p) || !!([ r + 1, p ] in b), p = this.baba_makeTileEventImageIndex(_, s, h, p);
            o.imageIndex = p;
        }
        return b;
    }, Game_Map.prototype.baba_updateTileEventImageAll = function() {
        i.forEach(a => this.baba_updateTileEventImage(a), this);
    }, Game_Map.prototype.baba_updateTileEventImage = function(a) {
        var e, t, b, i = this.baba_makeTileEventImageData(a);
        for (b in i) e = i[b].imageIndex, t = "!" + a + "_tile" + (e < 8 ? 1 : 2), e %= 8, 
        i[b].eventsId.forEach(function(a) {
            this._events[a].setImage(t, e);
        }, this);
    };
    const B = [ "baba", "key", "door", "flag", "rock", "wall", "tree", "grass", "tile", "keke" ], w = [ "you", "win", "stop", "push", "move" ], z = [ "is", "and", "not", "on" ];
    [ B, w, z ].forEach(a => {
        for (var e = 0; e < a.length; e++) a[e] = "text_" + a[e];
    });
    const W = [];
    [ [ "baba", "key", "door", "flag", "rock", "wall", "tree", "grass", "tile", "keke" ], B, w, z ].forEach(a => {
        for (var e = 0; e < 32; e++) W.push(a[e]);
    }), Game_Map.prototype.baba_isBabaTilesetIndex = function(a) {
        return 768 <= a && a < 896;
    }, Game_Map.prototype.baba_getBabaTilesetName = function(a) {
        return this.baba_isBabaTilesetIndex(a) ? W[a - 768] : "";
    }, Game_Map.prototype.baba_setupBabaEventsByTileset = function() {
        for (var a = $dataMap.data, e = $dataMap.width, t = $dataMap.height, b = e * t, i = 0, n = 0; i < t; i++) for (var o = 0; o < e; o++, 
        n++) for (var r = 3; 2 <= r; r--) {
            var p = n + r * b, _ = this.baba_getBabaTilesetName(a[p]);
            _ ? (this.baba_requireBabaEvent(_, o, i, 2), a[p] = 0) : void 0 === _ && console.warn(`unknown baba tileset : tileId ${a[p]} at (${o},${i})`);
        }
    }, Game_Map.prototype.baba_initBabaEventAnimation = function() {
        this._baba_babaEventAnimationCount = 0, this._baba_babaEventPattern = 0;
    }, Game_Map.prototype.baba_babaEventPattern = function() {
        return this._baba_babaEventPattern;
    }, Game_Map.prototype.baba_updateBabaEventAnimation = function() {
        this._baba_babaEventAnimationCount++;
        18 <= this._baba_babaEventAnimationCount && (this._baba_babaEventPattern = (this._baba_babaEventPattern + 1) % 3, 
        this._baba_babaEventAnimationCount = 0);
    };
    const A = Spriteset_Map.prototype.createTilemap;
    Spriteset_Map.prototype.createTilemap = function() {
        A.apply(this, arguments);
        var a = Math.max(Graphics.width, Graphics.height) / 2 + 20;
        this._tilemap._margin = a, this._tilemap._width = Graphics.width + 2 * a, this._tilemap._height = Graphics.height + 2 * a;
    }, Game_Event.prototype.baba_isBabaEvent = function() {
        return !!this.event().meta["baba is you"];
    };
    const P = Game_Map.prototype.setupEvents;
    Game_Map.prototype.setupEvents = function() {
        P.apply(this, arguments), this._events.filter(a => !!a && a.baba_isBabaEvent()).forEach(a => a.baba_initBabaEventByData());
    };
    const C = Game_Event.prototype.refresh;
    Game_Event.prototype.refresh = function() {
        C.apply(this, arguments), this.baba_refreshItemImage();
    };
    const D = Game_Map.prototype.refresh;
    Game_Map.prototype.refresh = function() {
        D.apply(this, arguments), this.baba_updateTileEventImageAll();
    }, Game_Event.prototype.baba_initItem = function() {
        var a = this.event().meta["baba is you"];
        this.baba_setItem("string" == typeof a ? a.trim() : "");
    }, Game_Event.prototype.baba_initBabaEventByData = function() {
        this.baba_isBabaEvent() && (this.baba_initItem(), this.baba_initPaletteIndex(), 
        this.baba_initReadyMoveStep(), this.baba_initRouteTurn());
    }, Game_Event.prototype.baba_setItem = function(a) {
        this._baba_item !== (a = a || "") && (this._baba_item = a, this.baba_refreshItemImage(), 
        this._baba_item && this.baba_initPaletteIndex());
    }, Game_Event.prototype.baba_setItemAndAddRoute = function(a) {
        var e = this._baba_item;
        this.baba_setItem(a), this._baba_item !== e && this._baba_item && this.baba_addCurrentRoute();
    }, Game_Event.prototype.baba_refreshItemImage = function() {
        var a;
        this._baba_item ? (a = $gameMap.baba_makeBabaCharacterName(this._baba_item), this.setImage(a, 0)) : this.setImage("", 0);
    }, Game_Event.prototype.baba_getItem = function() {
        return this._baba_item;
    }, Game_Event.prototype.baba_checkRule = function(a) {
        return $gameMap.baba_checkBabaEventRule(this._eventId, a);
    }, Game_Event.prototype.baba_initRouteTurn = function() {
        this._baba_routeTurn = [];
    }, Game_Event.prototype.baba_clearRouteTurn = function() {
        this._baba_routeTurn.splice(0);
    }, Game_Event.prototype.baba_hasRouteTurn = function() {
        return 0 < this._baba_routeTurn.length;
    }, Game_Event.prototype.baba_hasHidedRouteTurn = function() {
        return this.baba_hasRouteTurn() && this.baba_topRouteTurn().length <= 0;
    }, Game_Event.prototype.baba_newRouteTurn = function() {
        this._baba_routeTurn.unshift([]), this.baba_addCurrentRoute();
    }, Game_Event.prototype.baba_newHidedRouteTurn = function() {
        this._baba_routeTurn.unshift([]);
    }, Game_Event.prototype.baba_popRouteTurn = function() {
        return this._baba_routeTurn.shift();
    }, Game_Event.prototype.baba_topRouteTurn = function() {
        return this._baba_routeTurn[0];
    }, Game_Event.prototype.baba_addCurrentRoute = function() {
        this.baba_addRoute(this._x, this._y, this._direction, 0, 0);
    }, Game_Event.prototype.baba_hasRoute = function() {
        return this.baba_hasRouteTurn() && 0 < this._baba_routeTurn[0].length;
    }, Game_Event.prototype.baba_addRoute = function(a, e, t, b, i) {
        this._baba_routeTurn[0] ? this._baba_routeTurn[0].push({
            x: a,
            y: e,
            d: t,
            md: b,
            ml: i,
            i: this._baba_item
        }) : console.warn("please newRouteTurn");
    }, Game_Event.prototype.baba_popRoute = function() {
        return this._baba_routeTurn[0].pop();
    }, Game_Event.prototype.baba_initReadyMoveStep = function() {
        this._baba_readyMoveSteps = [], this._baba_moveStepX = this._x, this._baba_moveStepY = this._y, 
        this._baba_moveStepTempX = null, this._baba_moveStepTempY = null, this._baba_moveStepTempFacingDirection = null, 
        this._baba_moveStepTempDirection = null;
    }, Game_Event.prototype.baba_clearMoveStep = function() {
        this._baba_readyMoveSteps.splice(0), this._baba_moveStepX = this._x, this._baba_moveStepY = this._y, 
        this._baba_moveStepTempX = null, this._baba_moveStepTempY = null, this._baba_moveStepTempFacingDirection = null, 
        this._baba_moveStepTempDirection = null;
    }, Game_Event.prototype.baba_clearMoveStepTemp = function() {
        this._baba_moveStepTempX = null, this._baba_moveStepTempY = null, this._baba_moveStepTempFacingDirection = null, 
        this._baba_moveStepTempDirection = null;
    }, Game_Event.prototype.baba_setMoveStepTemp = function(a, e) {
        0 < a ? (this._baba_moveStepTempX = $gameMap.roundXWithDirection(this._baba_moveStepX, a), 
        this._baba_moveStepTempY = $gameMap.roundYWithDirection(this._baba_moveStepY, a), 
        this._baba_moveStepTempFacingDirection = e, this._baba_moveStepTempDirection = a) : this._direction != e && (this._baba_moveStepTempX = this._baba_moveStepX, 
        this._baba_moveStepTempY = this._baba_moveStepY, this._baba_moveStepTempFacingDirection = e, 
        this._baba_moveStepTempDirection = a);
    }, Game_Event.prototype.baba_addMoveStep = function() {
        null != this._baba_moveStepTempX && (this._baba_readyMoveSteps.push({
            x: this._baba_moveStepTempX,
            y: this._baba_moveStepTempY,
            md: this._baba_moveStepTempDirection,
            fd: this._baba_moveStepTempFacingDirection
        }), this._baba_moveStepX = this._baba_moveStepTempX, this._baba_moveStepY = this._baba_moveStepTempY, 
        this._direction = this._baba_moveStepTempFacingDirection, this.baba_clearMoveStepTemp());
    }, Game_Event.prototype.baba_executeAllMoveStep = function(a) {
        for (var e of this._baba_readyMoveSteps) this.baba_executeMove(e.md, e.fd, a);
        this.baba_clearMoveStep();
    }, Game_Event.prototype.baba_executeMove = function(a, e, t) {
        this.setThrough(!0), this.setDirectionFix(!0), this.setMoveSpeed(5), t ? (this.moveStraight(a), 
        this._direction = e) : (this._direction = e, this.moveStraight(a)), t || this.baba_addRoute(this._x, this._y, this._direction, a, 0 < a ? 1 : 0);
    }, Game_Event.prototype.baba_isMoving = function() {
        return this.isMoving();
    }, ImageManager.baba_loadBabaPalettes = function(a, e) {
        return this.loadBitmap("img/palettes/", a, e, !1);
    }, ImageManager.baba_loadBabaPalettes("default");
    const U = Game_Screen.prototype.clear;
    Game_Screen.prototype.clear = function() {
        U.apply(this, arguments), this.baba_clearPalette();
    }, Game_Screen.prototype.baba_clearPalette = function() {
        this._baba_paletteName = "default", this.baba_makePaletteData();
    }, Game_Screen.prototype.baba_setPalette = function(a) {
        a = "" !== (a = "string" == typeof a ? a : "") ? a : "default";
        this._baba_paletteName !== a && (this._baba_paletteName = a, this.baba_makePaletteData());
    }, Game_Screen.prototype.baba_makePaletteData = function() {
        for (var a = ImageManager.baba_loadBabaPalettes(this._baba_paletteName), e = [], t = 0, b = 0; t < 5; t++) for (var i = 0; i < 7; i++, 
        b++) {
            var n = a._context.getImageData(i, t, 1, 1).data;
            e[b] = [ -255 + n[0], -255 + n[1], -255 + n[2], 0 ];
        }
        this._baba_paletteData = e;
    }, Game_Screen.prototype.baba_getPaletteTone = function(a) {
        return "number" != typeof a || a < 0 || 35 <= a ? [ 0, 0, 0, 0 ] : this._baba_paletteData[a];
    }, Game_Event.prototype.baba_initPaletteIndex = function() {
        var a = {
            tile: 1,
            flag: 30,
            text_flag: 30,
            rock: 20,
            text_rock: 13,
            wall: 8,
            text_wall: 8,
            tree: 19,
            text_tree: 19,
            grass: 5,
            baba: -1,
            keke: 18,
            key: 30,
            text_is: -1,
            text_baba: 11,
            text_you: 11,
            text_stop: 12,
            text_push: 13,
            text_not: 11,
            text_keke: 18,
            text_key: 30,
            text_win: 30
        };
        this._baba_paletteIndex = this._baba_item in a ? a[this._baba_item] : -1;
    }, Game_Event.prototype.baba_setPaletteIndex = function(a) {
        this._baba_paletteIndex = a;
    };
    const N = Sprite_Character.prototype.updateBitmap;
    Sprite_Character.prototype.updateBitmap = function() {
        N.apply(this, arguments), this.baba_isBabaToneChanged() && this.baba_updateBabaTone();
    }, Sprite_Character.prototype.baba_isBabaToneChanged = function() {
        return this._baba_paletteIndex !== this._character._baba_paletteIndex;
    }, Sprite_Character.prototype.baba_updateBabaTone = function() {
        this._baba_paletteIndex = this._character._baba_paletteIndex, this.setColorTone($gameScreen.baba_getPaletteTone(this._baba_paletteIndex));
    };
    const $ = Game_Event.prototype.screenZ;
    Game_Event.prototype.screenZ = function() {
        if (this.baba_isBabaEvent()) {
            var a = this.baba_checkRule("you"), e = $gameMap.baba_checkTypeIsFloorItem(this._baba_item);
            return 2 * (this._priorityType + (a ? 1 : e ? -1 : 0)) + 1;
        }
        return $.apply(this, arguments);
    };
    const X = Game_Event.prototype.updatePattern;
    Game_Event.prototype.updatePattern = function() {
        this.baba_isBabaEvent() ? this._pattern = $gameMap.baba_babaEventPattern() : X.apply(this, arguments);
    };
    const L = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function() {
        $gameMap.baba_isBabaMap() && this.baba_createBabaRuleListWindow(), L.apply(this, arguments);
    }, Scene_Map.prototype.baba_createBabaRuleListWindow = function() {
        var a = new BabaWindow_RuleList();
        this._baba_babaRuleListWindow = a, this.addWindow(this._baba_babaRuleListWindow);
    }, Scene_Map.prototype.baba_updateBabaRuleList = function() {
        var a;
        $gameMap.baba_isBabaMap() && ((a = this._baba_babaRuleListWindow) && $gameMap._baba_somethingChanged && ($gameMap._baba_somethingChanged = !1, 
        a.refresh()), !a || a._opening || a._closing || (Input.isTriggered("pageup") ? a.open() : Input.isTriggered("pagedown") && a.close()));
    };
    const Y = Scene_Map.prototype.update;
    function BabaWindow_RuleList() {
        this.initialize.apply(this, arguments);
    }
    Scene_Map.prototype.update = function() {
        Y.apply(this, arguments), this.baba_updateBabaRuleList();
    }, ((BabaWindow_RuleList.prototype = Object.create(Window_Base.prototype)).constructor = BabaWindow_RuleList).prototype.initialize = function() {
        var a = this.windowWidth(), e = this.windowHeight();
        Window_Base.prototype.initialize.call(this, 0, 0, a, e), this._openness = 0, this.refresh();
    }, BabaWindow_RuleList.prototype.windowWidth = function() {
        return Graphics.width;
    }, BabaWindow_RuleList.prototype.windowHeight = function() {
        return Graphics.height;
    }, BabaWindow_RuleList.prototype.baba_showTextWordUnit = function(a) {
        var e = a.name;
        return a.decorates.forEach(a => e = a + " " + e), e;
    }, BabaWindow_RuleList.prototype.baba_showTextConditionUnit = function(a) {
        var e = a.name;
        a.decorates.forEach(a => e = a + " " + e);
        for (var t = a.words.map(a => this.baba_showTextWordUnit(a), this), b = 0; b < t.length; b++) e += 0 == b ? " " + t[b] : " & " + t[b];
        return e;
    }, BabaWindow_RuleList.prototype.baba_showTextConditionUnits = function(a) {
        for (var e = "", t = 0; t < a.length; t++) 0 < t && (e += ""), e += this.baba_showTextConditionUnit(a[t]);
        return e;
    }, BabaWindow_RuleList.prototype.baba_showTextBehaviorUnit = function(a) {
        return a.name + " " + this.baba_showTextWordUnit(a.word);
    }, BabaWindow_RuleList.prototype.baba_showTextItemRuleUnit = function(a) {
        var e = this.baba_showTextWordUnit(a.mainWord), t = this.baba_showTextConditionUnits(a.conditions), e = e;
        return t && (e += " " + t), e += " " + this.baba_showTextBehaviorUnit(a.behavior);
    }, BabaWindow_RuleList.prototype.baba_showTextItemRuleUnits = function(a) {
        for (var e = a.map(a => this.baba_showTextItemRuleUnit(a), this), t = "", b = 0; b < e.length; b++) 0 < b && (t += "\n"), 
        t += e;
        return t;
    }, BabaWindow_RuleList.prototype.refresh = function() {
        this.contents.clear(), $gameMap._baba_itemRuleUnits.filter(a => !a.baseRule).map(a => this.baba_showTextItemRuleUnit(a), this).forEach((a, e) => this.drawText(a, 0, 24 * e, this.width), this);
    }, BabaWindow_RuleList.prototype.open = function() {
        this.refresh(), Window_Base.prototype.open.call(this);
    };
}(), function() {
    const t = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(a, e) {
        t.apply(this, arguments);
    };
}();