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




var MK_Plugins = MK_Plugins || {};
MK_Plugins.paramGet = MK_Plugins.paramGet || {};
MK_Plugins.param = MK_Plugins.param || {};
MK_Plugins.class = MK_Plugins.class || {};
MK_Plugins.datas = MK_Plugins.datas || {};

MK_Plugins.getPluginParam = MK_Plugins.getPluginParam ||
function (pluginName) {
	var param = PluginManager.parameters(pluginName);
	if (!param || JSON.stringify(param) === '{}') {
		var list = $plugins.filter(function (i) {
			return i.description.contains('<' + pluginName + '>');
		});
		for (var i = 0; i < list.length; i++) {
			var realPluginName = list[i].name;
			if (realPluginName !== pluginName)
				return PluginManager.parameters(realPluginName);
		}
		return {};
	}
	return param;
};




(function() {

	var pluginName = 'xxx';
	MK_Plugins.paramGet[pluginName] = MK_Plugins.getPluginParam(pluginName);
	MK_Plugins.param[pluginName] = {};

	function parse_xx(str, defstr) {
		str = str || defstr;
		try {
			data = JSON.parse(str);
		}
		catch(e) {
			data = (!defstr && str != defstr) ? arguments.callee(defstr) : {};
		}
		var res = {};
		res['xxx']   = String(data['xxx']    || '');
		return res;
	}

	function parse_xxs(str, defstr) {
		str = str || defstr;
		try {
			data = JSON.parse(str);
		}
		catch(e) {
			data = (!defstr && str != defstr) ? arguments.callee(defstr) : [];
		}
		res = data.map(s => parse_xx(s, '{}'));
		return res;
	}

	function parse_boolean(val, defVal) {
		if (val === 'true') return true;
		else if (val === 'false') return false;
		else return JSON.parse(JSON.stringify(defVal));
	}
	
	var paramGet = MK_Plugins.paramGet[pluginName];
	var param = MK_Plugins.param[pluginName];

	param['xxx']             = String(paramGet['xxx']            || '' );
	param['xxx']             = Number(paramGet['xxx']            ||  0 );
	param['xxx']             = JSON.parse(String(paramGet['xxx'] || '{}'));
	
	param['xxx']             = parse_boolean(paramGet['xxx'], false);
	
	param['xxx']             = parse_xx(paramGet['xxx']          ,  '{}');
	param['xxx']             = parse_xxs(paramGet['xxx']         ,  '[]');

	// 注释里的结构体默认值字符串 : 
	// 在编辑器里填写后 从文本选项卡里把值复制出来 即可
	// 格式是 字符串做key字符串做value的字典
	
	// 代码里的结构体默认值字符串 : 
	// 不能把注释里的字符串复制后加引号后使用
	// 也不可以 用JSON.stringify处理注释里的字符串后加引号后使用
	// 可以直接使用其字典 或者 把注释里的字符串的 \ 手动数量翻倍 再加引号
	
})();




(function() {


// ？整体的输入只有 上下左右、空格和回退 ...
// ？移动完毕后可接受输入 ...
// ？每次接受输入，进行一轮行动 ...

// ？先计算所有需要的移动，再执行移动，之后更新规则，最后执行立即触发的规则 ...

// ？因为有回退的存在 所以事件需要记录自己的历史路径 包括位置和方向 ...
// ？没有其他属性需要记录 ...

// ？同步踏步 ...

// ？不使用 Game_Player ...

// ？推动时无法移动 不转向 ...


// ？lua ...
// ？找到一个可兼容各规则的方法 ...
// ？插件式的 ...


// FINISH : 地图边界

// TODO : 地图缩放

// FINISH : 推动行为

// FINISH : item变换 (包括 backMove 时的 item变换)

// TODO : 强制朝向

// TODO : 图层顺序
// FINISH : You规则的对象 高图层 其他对象按种类顺序排图层
// TODO : ？文字对象高图层 ...

// TODO : fall 的移动

// TODO : 判断死亡
// ？不存在You规则的对象时 禁止YouMove ...
// ？如果存在Move规则的对象 则可以WaitMove 此时依然会记录历史路径 ...
// (TODO : 先完成wait移动move移动)
// ？一定时间 无法YouMove 时 判定为死亡 ...
// ？但可以通过 有效的 WaitMove 解除死亡判定 ...

// FINISH : 判断胜利

// FINISH : 染色
// TODO : 颜色配置

// FINISH : ？接入事件

// ？语句 必要 is 据此 搜索语句 ...

// FINISH : 用 图块 编辑地图 将图块自动转换为 baba事件

// FINISH : You移动撞墙时 改变方向
// FINISH : YouMove 撞墙不能移动时 仍然可以转向 也能成功移动 并记录历史路径 ...


// ？被反墙推Move, 反墙Move > 被推Move > Move ...
// ？覆盖式的 ...
// ？一个对象同时接受多个移动时 生效的移动的判定 ...
// ？所以在这个阶段最多移动一格 ...
// ？被反墙推Move, 反墙Move 优先级相同 顺序取决于判断顺序 即id顺序 ...

// ？You移动 和 Move移动 是分开进行处理的 ...
// ？所以有可能 一个对象 通过 You移动推动 和 Move移动 一共移动两格子 ...


// FINISH : 解决YouMove+PushMove多移动的bug
// ？YouMove 的 PushMove 忽略 其他的You ...
// ？因为 在该阶段移动中 所有的 YouMove和PushMove的方向都相同 ...


// FINISH : 解决 baba同时为you和stop规则时 相邻两个baba移动碰撞问题


// ？baba对象是有方向的 现在用的是 RM自带的 Game_CharacterBase的 _direction ...
// ？这个值与事件的图像选择有关 ...
// ？所以 不能用一横排3三个图块表示一种baba对象 ...

// ？Wall事件的图像 ...
// ？直接用图块 ...


// TODO : _baba_item 改名 并添加获取 _baba_item 的函数


// ？item变换 的动画 ...

// ？胜利条件 和 判断胜利 ...


// ？特效


// ？_baba_routeTurn 有问题 ...


// TODO : 优化性能


// FINISH : 行走图图像统一 pattern
// updatePattern 时 从 $gameMap 获取统一的 pattern
// TODO : 重新验证其是否有效


// TODO : 解决保存读取问题


// TODO : 修复重叠文字时检查规则异常的问题
// TODO : 重置检查规则的实现


// FINISH : 修复无stop、push规则的you规则物体you移动不能使you物体重叠的问题


// TODO : 文字图像图层调高

// TODO : 按类型固定图层


// TODO : 失效的规则画叉



// TODO : 相同物体、位置、方向的baba事件 只保留两个 ...


// TODO : a is b is c

// FINISH : a is not b


// TODO : 优化 大量设置图块图像(如wall)时的卡顿问题
// ？对图块类图像(如wall)设置色调时会卡顿 ...
// ？因为原图像太大 ...



// ？规则顺序 ...
// ？移动类 -> 破坏类 -> 变化类 ...
// ？移动类 : ...



// TODO : ？墙 a(move,push,右) b(you,push,右) 往左移动 ...
// ？结果是否是 重新回到 墙 a(move,push,右) b(you,push,右) ...




// ----------------------------------------------------------------
// Game_Map
// baba地图

// --------------------------------
// 初始化

const _MK_Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	_MK_Game_Map_setup.apply(this, arguments);

	if (this.baba_isBabaMap()) {
		//this._baba_isMoving = false;
		//this._baba_inputWait = 0;
		//this.baba_initItemRules();
		this.baba_initBabaMap();

		this.baba_updateItemRuleAll();
		// ？初始化中更新规则后 无需进行 is变换 等处理 ...
		this.baba_updateTileEventImageAll();
	}
};

Game_Map.prototype.baba_isBabaMap = function() {
	//return !!$dataMap.meta['baba is you'];
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
	//return this._babaMapEnabled;
	return this.baba_isBabaMap() && this._babaMapEnabled;
};
Game_Map.prototype.baba_enableBabaMap = function() {
	this._babaMapEnabled = true;
};
Game_Map.prototype.baba_disableBabaMap = function() {
	this._babaMapEnabled = false;
};

/*
const _MK_Game_Player_update = Game_Player.prototype.update;
Game_Player.prototype.update = function(sceneActive) {
	if (!$gameMap.baba_isBabaMapEnabled()) {
		_MK_Game_Player_update.apply(this, arguments);
	}
};
*/
// ？修改 canMove 使角色无法移动 ...
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

/*
Game_Map.prototype.updateInterpreter = function() {
	for (;;) {
		if (this.baba_isBabaMapEnabled()) {
			return ;
		}

		this._interpreter.update();
		if (this._interpreter.isRunning()) {
			return;
		}
		if (this._interpreter.eventId() > 0) {
			this.unlockEvent(this._interpreter.eventId());
			this._interpreter.clear();
		}
		if (!this.setupStartingEvent()) {
			return;
		}
	}
};
// 重写了 Game_Map.prototype.updateInterpreter
*/

const _MK_Game_Map_updateInterpreter = Game_Map.prototype.updateInterpreter;
Game_Map.prototype.updateInterpreter = function() {
	//_MK_Game_Map_updateInterpreter.apply(this, arguments);
	// ？考虑进入谜题时 阻止其他命令指令 完成后再继续执行 ...
	// ？但这样将无法在 谜题进行时 进行其他事件触发 ...

	//if (this.baba_isBabaMap() && this.baba_isBabaMapEnabled()) {
	if (this.baba_isBabaMapEnabled()) {
		//this.baba_updateInterpreter_updateBabaMapInput();

		/*if (!!this._interpreter._childInterpreter) {
			this.baba_updateChildInterpreter();
		}
		else {
			this.baba_updateInterpreter_updateBabaMapInput();
		}*/
		/*if (this.baba_haveBabaChildInterpreter()) {
			this.baba_updateBabaChildInterpreter();
		}
		else {
			this.baba_updateInterpreter_updateBabaMapInput();
		}*/
		if (this.baba_puzzleEventIsRunning()) {
			this.baba_updatePuzzleEventInterpreter();
		}
		else {
			// 临时
			// 处理用脚本执行的 baba_setItem 的规则更新
			/*if (this.baba_babaEvents().some(e => e._baba_itemChanged)) {
				this.baba_babaEvents().forEach(e => e._baba_itemChanged = false);

				this.baba_updateItemRuleAll();
				this.baba_updateTileEventImageAll();
				this._baba_somethingChanged = true; // 通知 规则列表窗口 更新
			}*/

			//this.baba_updateInterpreter_updateBabaMapInput();
			this.baba_updateBabaMapTurn();
		}

	}
	else {
		// ？暂时 ...
		// ？注意需要手动设置等待命令 ...
		// TODO : 自动等待
		_MK_Game_Map_updateInterpreter.apply(this, arguments);
	}

	// ？地图不可用时 也要 更新baba事件的Pattern ...
	this.baba_updateBabaEventAnimation();
};
/*Game_Map.prototype.baba_updateChildInterpreter = function() {
	var inter = this._interpreter;
	while (inter.isRunning()) {
		if (!inter._childInterpreter) {
			break;
		}
		if (inter.updateChild()) {
			break;
		}
	}
};*/
/*Game_Map.prototype.baba_haveBabaChildInterpreter = function() {
	return !!this._baba_babaChildInterpreter;
};
Game_Map.prototype.baba_updateBabaChildInterpreter = function() {
	if (this._baba_babaChildInterpreter) {
		this._baba_babaChildInterpreter.update();
		if (this._baba_babaChildInterpreter.isRunning()) {
			return true;
		} else {
			this._baba_babaChildInterpreter = null;
			return false;
		}
	}
};*/
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
//Game_Map.prototype.baba_updateInterpreter_updateBabaMapInput = function() {
Game_Map.prototype.baba_updateBabaMapTurn = function() {
	var haveInput = false;
	var inputChanged = false;

	// FINISH : 检查 其他原因的停止活动 如 最小间隔帧
	if (this.baba_canInput()) {
		//haveInput = this.baba_updateInput();
		// 注意 更新输入 同时写入了移动

		var inputSingnal = this.baba_getInputSignal();
		//var puzzleWin = false;
		//var puzzleGameover = false;
		if (inputSingnal > 0) {
			// 有操作才进行更新

			// 添加移动
			if (inputSingnal == 1) {
				this.baba_updateNewRouteTurnAll(); // ?
				this.baba_updateInputMove(Input.dir4);
				this._baba_isMoving = true;
			}
			else if (inputSingnal == 2) {
				this.baba_updateNewRouteTurnAll(); // ?
				this.baba_updateInputWait();
				this._baba_isMoving = true;
			}
			else if (inputSingnal == 3) {
				this.baba_updateInputBack();
				this.baba_updatePopRouteTurnAll(); // ?
				this._baba_isMoving = true;
			}
			// TODO : ...

			/*
			// 写入移动
			var back = (inputSingnal == 3);
			if (!back) {
				// YouMove or WaitMove
				this.baba_updateNewRouteTurnAll();
			}
			else {
				// BackMove
				this.baba_updatePopRouteTurnAll();
			}

			// 执行移动
			this.baba_updateExecuteMoveAll(back);
			*/

			var back = (inputSingnal == 3);
			if (!back) {
				// YouMove or WaitMove

				if (this.baba_checkHaveAnyReadyRoute()) {
					// 写入移动
					//this.baba_updateNewRouteTurnAll();

					inputChanged = true;
					this.baba_updateExecuteMoveAll(back);
				}
				else {
					this.baba_updatePopRouteTurnAll(); // ?
				}
			}
			else {
				// BackMove

				// 写入移动
				//this.baba_updatePopRouteTurnAll();
				// 执行移动
				this.baba_updateExecuteMoveAll(back);

				inputChanged = true;
			}

			// TODO : 检查是否有实际移动
			// ？无实际移动时 不记录历史移动 也不更新规则 ...


			this.baba_updateItemRuleAll();

			// TODO : item变换 等
			// 处理 is变换
			// TODO : 考虑各部分执行顺序
			// TODO : ？研究 物体变成文字或文字变成物体之后 对规则的影响 ...
			// ？是否应该是 移动 -> 更新规则 -> 处理is变换 -> 再次更新规则 之后不会再处理is变换 ...

			var isTransformChanged = this.baba_updateRuleEffect_isTransform();
			if (isTransformChanged) {
				this.baba_updateItemRuleAll();
				inputChanged = true;
			}

			// TODO : 各规则影响的顺序

			// TODO : ？更方便 执行规则 的框架 ...


			this.baba_updateTileEventImageAll();

			var puzzleWin = this.baba_updatePuzzleWin();
			//puzzleWin = this.baba_updatePuzzleWin();
			if (puzzleWin) {
				//console.log('success');
			}
			/*else {
				var puzzleGameover = this.baba_updatePuzzleGameover();
				if (puzzleGameover) {
					console.log('gameover');
				}
				else {
				}
				// ...
			}*/
			// ？没有输入时 也要处理游戏结束的计时 ...
			// ...

			haveInput = true;
		}
	}

	//var puzzleGameover = this.baba_updatePuzzleGameover();
	var puzzleGameover = this.baba_updatePuzzleGameover(inputChanged);
	if (puzzleGameover) {
		//console.log('gameover');
	}
	else {
	}

	this.baba_updateInputWaitCount(haveInput);

	// 临时
	// 通知 SceneMap 刷新显示规则
	if (haveInput) {
		// TODO : 检查是否有实际改变
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
	// ...
};
Game_Map.prototype.baba_updateInputWaitCount = function(wait) {
	if (wait) {
		//this._baba_inputWait = 12;
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
	//return !this.baba_isMoving() && this._baba_inputWait <= 0;
	return this._baba_inputWait <= 0 && !this.baba_isMoving();
};

/*
Game_Map.prototype.baba_updateInput = function() {
	if (Input.dir4 > 0) {
		this.baba_updateInputMove(Input.dir4);
		this._baba_isMoving = true;
		return 1;
	}
	else if (Input.isRepeated('ok')) {
		this.baba_updateInputWait();
		this._baba_isMoving = true;
		return 2;
	}
	else if (Input.isRepeated('escape')) {
		this.baba_updateInputBack();
		this._baba_isMoving = true;
		return 3;
	}
	else {
		// 无操作
		return 0;
	}
};
*/
// ？分离 检测输入 与 写入准备的移动 ...
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
	//this.baba_addYouMoveAll(direction);
	//this.baba_addMoveMoveAll();

	// ？无you规则物体时 方向键不代替wait ...
	// TODO : 是否要这样
	if (this.baba_babaEvents()
			.some(e => e.baba_checkRule('you'))) {
		this.baba_addYouMoveAll(direction);
		this.baba_addMoveMoveAll();
	}

	// ...
};
Game_Map.prototype.baba_updateInputWait = function() {
	this.baba_addMoveMoveAll();
	// ...
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
		//.some(e => e._baba_readyMoveSteps && e._baba_readyMoveSteps.length > 1);
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
		// ...
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
	// TODO : ？wait操作后有move移动、shift移动时 暂时解除gameover ...
	//var puzzleGameover = this.baba_babaEvents()
	//	.every(e => !e.baba_checkRule('you'));
	var puzzleGameover = !this.baba_babaEvents()
		.some(e => e.baba_checkRule('you'));
	return puzzleGameover;
};

//Game_Map.prototype.baba_updatePuzzleGameover = function() {
Game_Map.prototype.baba_updatePuzzleGameover = function(inputChanged) {
	var puzzleGameover = !inputChanged && this.baba_checkPuzzleGameover();
	if (puzzleGameover) {
		if (this._baba_puzzleGameoverCount >= 120) {
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
	//return puzzleGameover;
	return this._baba_puzzleGameover;
};

/*Game_Map.prototype.baba_getPuzzleGameoverEventId = function() {
	var eventIdStr = $dataMap.meta['BIY puzzle gameover'];
	if (eventIdStr) {
		return Number.parseInt(eventIdStr || 0) || 0;
	}
	else {
		return 0;
	}
};
Game_Map.prototype.baba_executeEventPuzzleGameoverStart = function() {
	var eventId = this.baba_getPuzzleGameoverEventId();
	if (eventId > 0) {
		var key = [this._mapId, eventId, 'A'];
		$gameSelfSwitches.setValue(key, true);
	}
};
Game_Map.prototype.baba_executeEventPuzzleGameoverEnd = function() {
	var eventId = this.baba_getPuzzleGameoverEventId();
	if (eventId > 0) {
		var key = [this._mapId, eventId, 'B'];
		$gameSelfSwitches.setValue(key, true);
	}
};*/
// ？阻塞在进入babaisyou谜题的事件中 所以不能直接执行其他事件 ...
// ？需要用 setupChild ...

/*Game_Map.prototype.baba_executePuzzleGameoverEvent = function(eventId) {
	//var commonEvent = $dataCommonEvents[eventId];
	//if (eventId > 0 && !!commonEvent) {
	var eventData = $dataMap.events[eventId];
	if (eventId > 0 && !!eventData) {
		if (this._interpreter.isRunning()) {
			this._interpreter.setupChild(eventData.pages[0].list, eventId);
		}
		else {
			this._interpreter.setup(eventData.pages[0].list, eventId);
		}
	}
};*/
// ？新建一个子解释器 用于专门执行babaisyou的事件 ...
Game_Map.prototype.baba_executePuzzleGameoverEvent = function(eventId) {
	var eventData = $dataMap.events[eventId];
	if (eventId > 0 && !!eventData && !!eventData.pages[0]) {
		// this.baba_setupBabaEventChildInterpreter(list, eventId)
		//this._baba_babaChildInterpreter = new Game_Interpreter(0);
		//this._baba_babaChildInterpreter.setup(eventData.pages[0].list, eventId);
		this._baba_puzzleInterpreter = new Game_Interpreter(0);
		this._baba_puzzleInterpreter.setup(eventData.pages[0].list, eventId);
	}
};

Game_Map.prototype.baba_getPuzzleGameoverStartEventId = function() {
	var eventIdStr = $dataMap.meta['BIY puzzle gameover start'];
	return Number.parseInt(eventIdStr || 0) || 0;
};
Game_Map.prototype.baba_getPuzzleGameoverEndEventId = function() {
	var eventIdStr = $dataMap.meta['BIY puzzle gameover end'];
	return Number.parseInt(eventIdStr || 0) || 0;
};

Game_Map.prototype.baba_executeEventPuzzleGameoverStart = function() {
	var eventId = this.baba_getPuzzleGameoverStartEventId();
	if (eventId > 0) {
		/*var commonEvent = $dataCommonEvents[eventId];
		if (commonEvent) {
			this.setupChild(commonEvent.list, eventId);
		}*/
		this.baba_executePuzzleGameoverEvent(eventId);
	}
};
Game_Map.prototype.baba_executeEventPuzzleGameoverEnd = function() {
	var eventId = this.baba_getPuzzleGameoverEndEventId();
	if (eventId > 0) {
		/*var commonEvent = $dataCommonEvents[eventId];
		if (commonEvent) {
			this.setupChild(commonEvent.list, eventId);
		}*/
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
	//this.baba_babaEvents()
	//  .filter(e => e.baba_checkRule('you'))
	//  .forEach(e => this.baba_addEventMoveStep(e._eventId, direction), this);

	//var events = this.baba_babaEvents()
	//  .filter(e => e.baba_checkRule('you'));
	//events.forEach(e => this.baba_addEventMoveStep(e._eventId, direction), this);
	//events.forEach(e => e.baba_addMoveStep());

	// ？涉及到移动的baba对象 不移动全都是 you规则的对象 ...

	//this.baba_babaEvents()
	//  .filter(e => e.baba_checkRule('you'))
	//  .forEach(e => this.baba_addEventMoveStep(e._eventId, direction), this);
	// ？you移动推动其他you 被推动的you相当于做了移动 所以不需要再次处理移动 ...

	var events = this.baba_babaEvents()
		.filter(e => e.baba_checkRule('you'));
	var flags = events.map(e => false);
	for (var i = 0; i < events.length; i++) {
		if (flags[i]) continue;
		this.baba_addEventMoveStep(events[i]._eventId, direction, true);
		// 检查有移动的you对象 标记为不再处理
		for (var j = 0; j < events.length; j++) {
			if (flags[j]) continue;
			//if (events[j]._baba_moveStepTempX != null) {
			//  // 有设置临时位置
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
			//this.baba_addEventMoveStep(e._eventId, 
			//	e._baba_moveStepTempDirection || e.direction(), false, true);
		}, this);

	// TODO : 检查 not move
	// TODO : 检查规则被禁止的框架

	// 写入移动
	this.baba_babaEvents()
		.forEach(e => e.baba_addMoveStep());

	// TODO : ...
};
Game_Map.prototype.baba_addShiftMoveAll = function() {
	// 筛选 在 拥有规则shift的对象 上的对象
	// 并向 拥有规则shift的对象的朝向移动
	// ？还要考虑 float ...
	// ...
};


// ？为 baba事件 添加准备的移动 ...
// ？可以通过 push规则 传递移动到其他 baba事件 ...
// ？当不能移动时 停止传递 并拒绝添加移动 ...
//Game_Map.prototype.baba_addEventMoveStep = function(eventId, direction, you) {
Game_Map.prototype.baba_addEventMoveStep = function(eventId, direction, you, rebound) {
	var event = this._events[eventId];
	if (!this.baba_isBabaEvent(event)) {
		console.warn('eror baba event (eventId : ' + eventId + ')', event);
		return false;
	}

	var dx = this.roundXWithDirection(event._baba_moveStepX, direction);
	var dy = this.roundYWithDirection(event._baba_moveStepY, direction);
	if (this.baba_checkEventsStopMove(dx, dy, you)) {
		// 存在 非push 的 stop 对象
		// 停止传递 并拒绝添加移动
		//return false;

		// FINISH : you移动撞墙转向

		// FINISH : 修正这里的一些注释

		// 存在 非push 非you(参数you=Ture) 的 stop对象
		// 停止传递 拒绝添加移动 回传false
		if (you) {
			event.baba_setMoveStepTemp(0, direction);
			//if (event._direction != direction) {
			//	event.baba_setMoveStepTemp(0, direction);
			//}
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
				//event.baba_addMoveStep(direction, direction);
				event.baba_setMoveStepTemp(direction, direction);
			}
			else {
				// 不可传递
				if (you) {
					// you移动撞墙转向 (?)
					event.baba_setMoveStepTemp(0, direction);
					//if (event._direction != direction) {
					//	event.baba_setMoveStepTemp(0, direction);
					//}
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
			//event.baba_addMoveStep(direction, direction);
			event.baba_setMoveStepTemp(direction, direction);
			return true;
		}
	}
};

// ？push移动 和 传递的push移动  都是 应用于 某一格位置的所有 baba事件 而非一个 baba事件 ...
Game_Map.prototype.baba_addEventsMoveStep = function(x, y, direction, you) {
	var dx = this.roundXWithDirection(x, direction);
	var dy = this.roundYWithDirection(y, direction);
	if (this.baba_checkEventsStopMove(dx, dy, you)) {
		// 存在 非push 的 stop 对象
		// 停止传递 并拒绝添加移动
		//return false;

		// 存在 非push 非you(参数you=Ture) 的 stop对象
		// 停止传递 拒绝添加移动 回传false
		if (you) {
			this.baba_babaEventsMoveStepAt(x, y)
				//.filter(e => this.baba_checkItemRule(e._baba_item, 'you'), this)
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
						//.filter(e => this.baba_checkItemRule(e._baba_item, 'you'), this)
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
//Game_Map.prototype.baba_checkEventsStopMove = function(x, y) {
Game_Map.prototype.baba_checkEventsStopMove = function(x, y, you) {
	//if (0 <= x && x < this.width() && 0 <= y && y < this.height()) {
	//  // FINISH : baba 边界
	if (this.baba_checkInMapSize(x, y)) {
		// 边界内
		//return this.baba_babaEventsMoveStepAt(x, y)   
		//  .filter(e => !this.baba_checkItemRule(e._baba_item, 'push'), this)
		//  .some(e => this.baba_checkItemRule(e._baba_item, 'stop'), this);
		//  // 存在 非push规则 且 有stop规则 的对象     

		if (!you) {
			// 非you移动
			return this.baba_babaEventsMoveStepAt(x, y) 
				//.filter(e => !this.baba_checkItemRule(e._baba_item, 'push'), this)
				//.some(e => this.baba_checkItemRule(e._baba_item, 'stop'), this);
				.filter(e => !e.baba_checkRule('push'))
				.some(e => e.baba_checkRule('stop'));
				// 存在 非push规则 且 有stop规则 的对象
		}
		else {
			// you移动
			return this.baba_babaEventsMoveStepAt(x, y) 
				//.filter(e => !this.baba_checkItemRule(e._baba_item, 'push'), this)
				//.filter(e => !this.baba_checkItemRule(e._baba_item, 'you'), this)
				//.some(e => this.baba_checkItemRule(e._baba_item, 'stop'), this);
				.filter(e => !e.baba_checkRule('push'))
				.filter(e => !e.baba_checkRule('you'))
				.some(e => e.baba_checkRule('stop'));
				// 存在 非push规则 且 有stop规则 的对象
		}

		// ？不行 ...
		// ？当某一个 you 遇到 stop 不能移动时 其他准备移动到它位置上的 you 也不能移动 ...
	}
	else {
		return true;
	}
};

// 是否存在可push对象 (不考虑是否可以实际push)
Game_Map.prototype.baba_checkEventsPushMove = function(x, y, you) {
	//return this.baba_babaEventsMoveStepAt(x, y)   
	//  .some(e => this.baba_checkItemRule(e._baba_item, 'push'), this);

	/*
	if (!you) {
		return this.baba_babaEventsMoveStepAt(x, y) 
			.some(e => this.baba_checkItemRule(e._baba_item, 'push'), this);
	}
	else {
		return this.baba_babaEventsMoveStepAt(x, y) 
			.some(e => this.baba_checkItemRule(e._baba_item, 'push')
				 || this.baba_checkItemRule(e._baba_item, 'you'), this);
	}
	*/

	// ？you移动的push发现其他you对象 不应该看做 其他you对象被该you对象推动 ...
	// ？而应该是 忽视这个you对象 ...
	// ？...

	// ？you移动的push发现其他you对象 ...
	// ？如果它可以成功移动 则由它自己处理移动 如果它不能移动 也由它自己判定和处理 ...
	// ？如果它不能移动且为push或stop规则 将拒绝触发移动的you对象的移动 ...
	// ？如果它不能移动且不是push和stop规则 则不拒绝触发移动的you对象的移动 移动后它们将重叠 ...
	
	// ？所以 应该将 同时为stop和you规则的物体 也视为可以推动的物体 ...
	// ？push且you规则的物体 和 push且非you规则的物体 即包含push规则的物体 也都如此 ...
	// ？而 非stop非push且you规则的物体 不可推动也不可阻挡 应将其忽视 让其自行处理 而不是将其的you移动视作可推动 ...

	// TODO : ？考虑分开处理you移动 导致重复推动同一物体 或 同一物体被推动多次 的问题 ...
	// ？同一阶段的移动 被优先级机制 覆盖先前的移动 ...

	if (!you) {
		return this.baba_babaEventsMoveStepAt(x, y) 
			//.some(e => this.baba_checkItemRule(e._baba_item, 'push'), this);
			.some(e => e.baba_checkRule('push'));
	}
	else {
		return this.baba_babaEventsMoveStepAt(x, y) 
			//.some(e => this.baba_checkItemRule(e._baba_item, 'push')
			//   || (this.baba_checkItemRule(e._baba_item, 'you')
			//       && this.baba_checkItemRule(e._baba_item, 'stop')), this);
			.some(e => e.baba_checkRule('push')
				 || (e.baba_checkRule('you') && e.baba_checkRule('stop')));
	}
};

Game_Map.prototype.baba_addEventPushMoveStep = function(x, y, direction, you) {
	//this.baba_babaEventsMoveStepAt(x, y)
	//  .filter(e => this.baba_checkItemRule(e._baba_item, 'push'), this)
	//  //.forEach(e => e.baba_addMoveStep(direction, direction));
	//  .forEach(e => e.baba_setMoveStepTemp(direction, direction));

	if (!you) {
		this.baba_babaEventsMoveStepAt(x, y)
			//.filter(e => this.baba_checkItemRule(e._baba_item, 'push'), this)
			.filter(e => e.baba_checkRule('push'))
			.forEach(e => e.baba_setMoveStepTemp(direction, direction));
	}
	else {
		//this.baba_babaEventsMoveStepAt(x, y)
		//  .filter(e => this.baba_checkItemRule(e._baba_item, 'push')
		//       || this.baba_checkItemRule(e._baba_item, 'you'), this)
		//  .forEach(e => e.baba_setMoveStepTemp(direction, direction));

		// you移动时 移动(x,y)位置的baba事件
		// ？需要移动的有 push且非you、push且you、非push且you且stop ...
		// ？非push非stop且you 不被传递push移动 ...
		// ？只在 baba_addEventMoveStep 用 baba_setMoveStepTemp 添加移动 ...
		this.baba_babaEventsMoveStepAt(x, y)
			//.filter(e => this.baba_checkItemRule(e._baba_item, 'push')
			//   || (this.baba_checkItemRule(e._baba_item, 'you')
			//       && this.baba_checkItemRule(e._baba_item, 'stop')), this)
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
	// FINISH : 所有 baba事件 都不存在历史路径时 不进行 backMove
	if (this.baba_checkBackMove()) {
		this.baba_babaEvents().forEach(e => {
		// ？未闲置的隐藏的baba事件 可能需要恢复显示 ...
		//this.baba_noIdleBabaEvents().forEach(e => {
		// ？分开处理 ...
			if (e.baba_hasRouteTurn()) {
				var route = e.baba_topRouteTurn();
				for (var i = route.length-1; i >= 1; i--) {
					var moveStep = route[i];
					var last_moveStep = route[i-1];
					if (moveStep.md > 0) {
						var r_md = 10 - moveStep.md; // 反向方向
						//e.baba_addMoveStep(r_md, last_moveStep.d);
						e.baba_setMoveStepTemp(r_md, last_moveStep.d);
						//e.baba_setMoveStepTemp(r_md, last_moveStep.md);
						e.baba_addMoveStep();
					}
					else {
						// 无移动，只更改方向
						e.baba_setMoveStepTemp(0, last_moveStep.d);
						e.baba_addMoveStep();
					}

					// item变换
					//if (e._baba_item != moveStep.i) {
					if (e._baba_item != last_moveStep.i) {
						//e.baba_setItem(moveStep.i);
						//e.baba_setItemAndAddRoute(moveStep.i);
						e.baba_setItemAndAddRoute(last_moveStep.i);

						// FINISH : item变化的路线记录

						// TODO : ？item变化 是否需要 用类似 _baba_moveStepTempX 的记录 ...
					}

					//e.baba_addMoveStep();
				}
			}
			else {
				// 没有历史路径 直接销毁该baba事件
				e.baba_deactivateBabaEvent();
			}
		});

		// ？未闲置的隐藏的baba事件 可能需要恢复显示 ...
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
	else {
		// ...
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

// ？设置为显示到下图层 ...
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

/*
const baba_BABA_OBJECT_TEXT_LIST = [];
[
	baba_BABA_OBJECT_WORD_LIST, 
	baba_BABA_OBJECT_RULE_LIST, 
	baba_BABA_OBJECT_OTHERTEXT_LIST, 
].forEach(list => {
	list.forEach(name => {
		baba_BABA_OBJECT_TEXT_LIST.push(name);
	})
});
*/

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

//function temp_list2map(list) {
//function temp_list2map(list, nameFunc) {
function temp_list2map(list, isText) {
	//nameFunc = nameFunc || (name => name);
	var map = {};
	//list.forEach((name, i) => map['text_'+name] = i+1);
	//list.forEach((name, i) => map[nameFunc(name)] = i+1);
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

/*
Game_Map.prototype.baba_initItemRules = function() {
	this._baba_itemRules = {};
};
Game_Map.prototype.baba_clearItemRules = function() {
	for (var item in this._baba_itemRules) {
		for (var rule in this._baba_itemRules[item]) {
			this._baba_itemRules[item][rule] = false;
		}
	}
};
Game_Map.prototype.baba_setItemRule = function(item, rule, value) {
	if (!this._baba_itemRules[item]) {
		this._baba_itemRules[item] = {};
	}
	this._baba_itemRules[item][rule] = !!value;
};
Game_Map.prototype.baba_checkItemRule = function(item, rule) {
	return !!(this._baba_itemRules[item] || {})[rule];
	// TODO : 带条件的规则 
	// ？位置使用移动前的位置 即 e._x 而非 e._baba_moveStepX ...
};
*/

Game_Map.prototype.baba_initItemRules = function() {
	this._baba_itemRuleUnits = [];
	//this._baba_itemRuleMap = {};
	this._baba_babaEventRules = [];
};
Game_Map.prototype.baba_clearItemRules = function() {
	this._baba_itemRuleUnits.splice(0);
	//this._baba_itemRuleMap = {};
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
//Game_Map.prototype.baba_addItemRuleUnit = function(unit) {
Game_Map.prototype.baba_addItemRuleUnit = function(unit, baseRule) {
	this.baba_parseItemRuleUnitMainWord(unit);
	this.baba_parseItemRuleUnitConditions(unit);
	this.baba_parseItemRuleUnitBehavior(unit);

	unit.baseRule = !!baseRule;
	this._baba_itemRuleUnits.push(unit);
};
//Game_Map.prototype.baba_addItemRuleByItemRuleUnits = function(itemRuleUnits) {
Game_Map.prototype.baba_addItemRuleByItemRuleUnits = function(itemRuleUnits, baseRule) {
	for (var unit of itemRuleUnits) {
		//this.baba_addItemRuleUnit(unit);
		this.baba_addItemRuleUnit(unit, baseRule);
	}
};

// 检查符合主物体
Game_Map.prototype.baba_checkItemRuleUnitMainWord = function(unit, name, x, y, eventId) {
	//var notWord, existLonely, notLonely = unit.mainWord.parseDecorate;
	// ？...
	var notWord = unit.mainWord.parseDecorate.notWord;
	var existLonely = unit.mainWord.parseDecorate.existLonely;
	var notLonely = unit.mainWord.parseDecorate.notLonely;
	if (!notWord) {
		// 指定物体

		// ？text_xx 视为 text ...
		// TODO : ？找到一个兼容合并的方法 ...
		//if (name.startsWith('text_')) {
		//	//name = name.slice('text_'.length);
		//	name = 'text';
		//}

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
		// ？位置使用移动前的位置 即 e._x 而非 e._baba_moveStepX ...
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
		// TODO : ？有些需要排除 text ...

		// ===  break  202106211654  ===

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
		// ？位置使用移动前的位置 即 e._x 而非 e._baba_moveStepX ...
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

		// ？设定 非not修饰的物体 同时要求多次时 那么要重叠相应数量 ...
		// ？原作为无法生效 ...
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
	//else if (conditionUnit.name == 'near') {
	//  var items1 = this.baba_babaEventsAt(x-1, dy).map(e => e._baba_item);
	//  var items2 = this.baba_babaEventsAt(x+1, dy).map(e => e._baba_item);
	//  var items3 = this.baba_babaEventsAt(x, dy-1).map(e => e._baba_item);
	//  var items4 = this.baba_babaEventsAt(x, dy+1).map(e => e._baba_item);
	//}
	//else if (conditionUnit.name == 'facing') {
	//  var d = ...
	//  dx = x;
	//  dy = y;
	//}
	// TDDO : ...
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
		/*
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
				console.warn('error itemRuleUnit : unknown decorate', unit);
			}
		}
		// ？是否可以 not lonely, lonely not, not lonely not, lonely not lonely ...
		// FINISH : 拒绝 多个 lonely 修饰 ...
		*/
		// ？在添加时 提前处理 避免重复处理 ...

		/*
		var notWord, existLonely, notLonely = unit.mainWord.parseDecorate;
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
			// ？位置使用移动前的位置 即 e._x 而非 e._baba_moveStepX ...
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
			// TODO : ？有些需要排除 text ...
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
			// ？位置使用移动前的位置 即 e._x 而非 e._baba_moveStepX ...
			if (!notLonely) {
				// 需要孤独
				return count <= 1;
			}
			else {
				// 需要不孤独
				return count > 1;
			}
		}
		*/

		return this.baba_checkItemRuleUnitMainWord(unit, name, x, y, eventId)
			 && this.baba_checkItemRuleUnitConditions(unit, name, x, y, eventId);
	}, this);
};

Game_Map.prototype.baba_makeItemBehaviorMap = function(eventId) {
	var e = this._events[eventId];
	var itemRuleUnits = this.baba_filterItemRuleUnits(e._baba_item, e._x, e._y, e._eventId);
	
	//var itemBehaviorMap = {};
	//for (var text of baba_BABA_OBJECT_BEHAVIORTEXT_LIST) {
	//  itemBehaviorMap[text] = [];
	//}
	//var itemBehaviorMap = {
	//  'is' : [], 
	//  'has' : [], 
	//  'make' : [], 
	//};

	//for (var unit of itemRuleUnits) {
	//  itemBehaviorMap[unit.behavior.name].push(unit.behavior.word);
	//}

	var itemBehaviorMap = {};

	//itemBehaviorMap['is'] = [];
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
			// 都是非notWord
			//itemBehaviorMap['is'].push(name);
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

// FINISH : 事先计算每个事件的所有生效规则
// 计算每个物体的所有生效规则
Game_Map.prototype.baba_updateBabaEventsRules = function() {
	this.baba_babaEvents()
		.forEach(function(e) {
			var itemBehaviorMap = this.baba_makeItemBehaviorMap(e._eventId);
			this._baba_babaEventRules[e._eventId] = itemBehaviorMap;
			// ？...
		}, this);
};

//Game_Map.prototype.baba_checkItemRule = function(name, x, y, rule) {
//};
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

// FINISH : 带条件的规则 

// TODO : 构建 itemRuleUnit 的 相关函数

// TODO : 从 itemRuleUnit 生成语句 用于显示



// --------------------------------
// 规则产生的影响

// is变换
Game_Map.prototype.baba_updateRuleEffect_isTransform = function() {

	// FINISH : a is a 不进行变化 同时禁止 a 的变化

	// FINISH : not a is b
	// FINISH : a is not b
	// TODO : ？a not is b ...

	// TODO : ？更方便 执行规则 的框架 ...

	// TODO : 使用 event.baba_checkRule 方式 以支持条件规则 ...


	var changed = false;

	// 变化的规则
	var tfList = this._baba_itemRuleUnits.filter(
		each => each.behavior.name == 'is'
			// && this.baba_checkTypeIsWord(each.behavior.word.name));
			// ？word 是 text_xxx ...
			// ？item 才是 xxx ...
			 && this.baba_checkTypeIsItem(each.behavior.word.name));
	if (tfList.length <= 0) {
		return false;
	}

	/*
	// 变化的规则
	var isItemRuleList = this._baba_itemRuleUnits.filter(
		each => each.behavior.name == 'is'
			// && this.baba_checkTypeIsWord(each.behavior.word.name));
			// ？word 是 text_xxx ...
			// ？item 才是 xxx ...
			 && this.baba_checkTypeIsItem(each.behavior.word.name));

	// 去除禁止变化的规则
	var prohibitFlag = {};
	isItemRuleList
		.filter(each => each.mainWord.name == each.behavior.word.name)
		.forEach(each => prohibitFlag[each.mainWord.name] = true);
	var tfList = isItemRuleList.filter(each => 
		!prohibitFlag[each.mainWord.name]
			 && each.mainWord.name != each.behavior.word.name);

	if (tfList.length <= 0) {
		return false;
	}
	*/
	// ？在处理映射表之后 可以方便地找到 禁止变化物体的变化 ...

	// 全物体的集合
	var itemSet = {};
	this.baba_babaEvents()
		.filter(e => this.baba_checkTypeIsItem(e._baba_item))
		.forEach(e => itemSet[e._baba_item] = true);

	// 变化的映射表
	var tfMap = {};
	//var notTfMap = {};
	var prohibitMap = {};
	tfList.forEach(each => {
		if (!each.behavior.word.parseDecorate.notWord) {
			// is b
			if (!each.mainWord.parseDecorate.notWord) {
				// a is b
				var name1 = each.mainWord.name;
				var name2 = each.behavior.word.name;
				tfMap[name1] = tfMap[name1] || {};
				//tfMap[name1][name2] = true;
				tfMap[name1][name2] = tfMap[name1][name2] || 0;
				tfMap[name1][name2]++;
			}
			else {
				// not a is b
				var name2 = each.behavior.word.name;
				for (var name1 in itemSet) {
					if (name1 != each.mainWord.name) {
						tfMap[name1] = tfMap[name1] || {};
						//tfMap[name1][name2] = true;
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
		// TODO : 兼容合并

		// ？一种物体需要变成多个某一种物体时 可以只创建一个 ...
		// ？因为变化出的物体 种类、位置、方向完全相同 ...
		// ？也因种类相同 所以后续的处理也完全相同 ...
		// ？于是可以当做只创建一个 ...

		// ？特例是 a on a 的条件 需要有两个 a 才能生效 ...
		// (TODO : 未进行该判断)
		// ？所以相同位置和方向的同种物体需要至少保留两个 ...

		// TODO : 考虑 a on b and b 为何无法生效 ...
		// ？这里暂不保留这一特性 ...

		// ？is转换的处理逻辑中 至多创建两个完全相同的物体 ...
		// ？之后再处理一次 完全相同物体只保留两个 ...
		// ？或者暂时不做该优化 ...

		/*if (tfMap[name1][name2] > 2) {
			tfMap[name1][name2] = 2;
		}*/
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
		//var oneToOne = (keys.length == 1) && (tfMap[name][keys[0]] == 1);
		// ？暂时 同样的 is变换 只变换一次 ...
		// TODO : 考证
		var oneToOne = (keys.length == 1);
		// ？涉及tile类型图像(如wall)时 不进行一变一变化 而是直接隐藏后生成新baba事件 ...
		/*if (oneToOne) {
			var haveTileItem = (this.baba_checkTypeIsTileItem(name)
				 || this.baba_checkTypeIsTileItem(keys[0]));
			if (haveTileItem) {
				oneToOne = false;
			}
		}*/ // TODO : debug
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

	/*
	// 销毁变化的物体
	itemTfList.forEach(obj => 
		this.baba_deactivateBabaEvent(obj.id));

	// 生成变成的物体
	itemTfList.forEach(obj => {
		for (var name2 in tfMap[obj.name1]) {
			for (var i = 0; i < tfMap[obj.name1][name2]; i++) {
				this.baba_requireBabaEvent(name2, obj.x, obj.y, obj.d);
				changed = true;
			}
		}
	});
	*/

	// ？一变一时 不进行销毁再生成 而是直接改变item ...

	// 销毁非一变一变化的物体
	itemTfList.forEach(obj => 
		//!obj.oneToOne && this.baba_deactivateBabaEvent(obj.id));
		!obj.oneToOne && this.baba_hideBabaEvent(obj.id));

	// 生成变成的物体 或 变化一变一变化的物体
	itemTfList.forEach(obj => {
		if (obj.oneToOne) {
			var name2 = Object.keys(tfMap[obj.name1])[0];
			//this._events[obj.id].baba_setItem(name2);
			this._events[obj.id].baba_setItemAndAddRoute(name2);
			changed = true;
		}
		else {
			for (var name2 in tfMap[obj.name1]) {
				/*for (var i = 0; i < tfMap[obj.name1][name2]; i++) {
					this.baba_requireBabaEvent(name2, obj.x, obj.y, obj.d);
					changed = true;
				}*/
				// ？暂时 同样的 is变换 只变换一次 ...
				// TODO : 考证
				this.baba_requireBabaEvent(name2, obj.x, obj.y, obj.d);
				changed = true;
			}
		}
	}, this);


	// TODO : ？销毁也需要记录 也需要可以还原销毁 ...
	// ？所以不能让销毁的baba事件被占用 ...
	// ？只有还原生成时的销毁 才完全释放baba事件 ...

	return changed;
};

// TODO : 变化动画


// TODO : 同统一pattern


// --------------------------------
// 更新baba规则

Game_Map.prototype.baba_updateItemRuleAll = function() {
	this.baba_clearItemRules(); // TODO

	//var ruleItemMap = null;
	var itemRuleUnits = null;

	// add base rule
	//ruleItemMap = this.baba_makeItemRule_baseRule();
	//this.baba_addItemRuleByRuleItemMap(ruleItemMap);
	itemRuleUnits = this.baba_makeItemRuleUnits_baseRule();
	//this.baba_addItemRuleByItemRuleUnits(itemRuleUnits);
	this.baba_addItemRuleByItemRuleUnits(itemRuleUnits, true);

	// add rule1
	//ruleItemMap = this.baba_makeItemRule_rule1();
	//this.baba_addItemRuleByRuleItemMap(ruleItemMap);
	itemRuleUnits = this.baba_makeItemRuleUnits_rule1();
	this.baba_addItemRuleByItemRuleUnits(itemRuleUnits);

	// ...

	// FINISH : 预处理每个baba事件的生效规则
	this.baba_updateBabaEventsRules();
};


/*
Game_Map.prototype.baba_addItemRuleByRuleItemMap = function(ruleItemMap) {
	for (var item in ruleItemMap) {
		for (var rule in ruleItemMap[item]) {
			this.baba_setItemRule(item, rule, ruleItemMap[item][rule]);
		}
	}
};
*/

/*
Game_Map.prototype.baba_makeItemRule_baseRule = function() {
	var ruleItemMap = {};
	var item, rule;

	// text is push
	rule = 'push';
	this.baba_babaEvents()
		//.filter(e => e._baba_item.startsWith('text_'))
		.filter(e => this.baba_checkTypeIsText(e._baba_item), this)
		.forEach(e => {
			var item = e._baba_item;
			ruleItemMap[item] = ruleItemMap[item] || {};
			ruleItemMap[item][rule] = true;
		});
	// ？考虑全部的 text_xx 而非 当前出现的 text_xx ...

	// ? text is word
	// ...

	return ruleItemMap;
};
*/
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
		//itemRuleUnit.mainWord.name = name;
		itemRuleUnit.mainWord.name = 'text_' + name;
		itemRuleUnit.behavior.name = 'is';
		itemRuleUnit.behavior.word.name = 'push';
		itemRuleUnits.push(JSON.parse(JSON.stringify(itemRuleUnit)));
	});

	// ? text is word
	// ...

	return itemRuleUnits;
};
// ？根据基础规则 如 text is word 再加上 其他的 xx is word 构建下一步的规则 ...

/*
// ？不考虑 is word 规则 的检查规则 ...
// ？text 自带 is word 规则 ...
Game_Map.prototype.baba_makeItemRule_rule1 = function() {
	var words = this.baba_babaEvents()
		.filter(e => e.baba_getItem().startsWith('text_'))
		// TODO : 检查 word规则的物体 和 普通word 的函数
		.map(e => {
			return {
				x : e._x, 
				y : e._y, 
				word : e.baba_getItem(), 
			}
		});

	var wordGrid = [];
	//var width = this.width();
	//var height = this.height();
	var sizeX = this._baba_mapSizeX;
	var sizeY = this._baba_mapSizeY;
	var sizeW = this._baba_mapSizeW;
	var sizeH = this._baba_mapSizeH;
	//for (var y = 0; y < height; y++) {
	for (var y = sizeY; y < sizeY+sizeH; y++) {
		wordGrid[y] = [];
		//for (var x = 0; x < width; x++) {
		for (var x = sizeX; x < sizeX+sizeW; x++) {
			wordGrid[y][x] = {
				map : {}, 
				list : [], 
			}
		}
	}
	words.forEach(function(each) {
		var obj = wordGrid[each.y][each.x];
		if (!obj.map[each.word]) {
			obj.map[each.word] = true;
			obj.list.push(each.word);
		}
		// ？相同对象重叠后只视作一个 ...
	});
	// TODO : 记录这些变量 并实时更新 ...

	/*
	var ruleSentences = [];
	var tempSentence = [];
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			// 横向
			for (var i = 0; i < width-x; i++) {
				for (var word in wordGrid[y][x].map) {
					tempSentence.push(..);
					...
				}

				slice(0, ..)
				...
			}

			// 纵向
			...
		}
	}
	* /
	// TODO : ...

	// 临时 : 只检查 baba/key is you/push 且不考虑重叠
	var ruleSentences = [];
	var tempSentence = [];
	//for (var y = 0; y < height; y++) {
	//  for (var x = 0; x < width; x++) {
	for (var y = sizeY; y < sizeY+sizeH; y++) {
		for (var x = sizeX; x < sizeX+sizeW; x++) {
			// 横向
			tempSentence.splice(0);
			//for (var j = 0; j < width-x; j++) {
			for (var j = 0; j < sizeX+sizeW-x; j++) {
				if (wordGrid[y][x+j].list.length <= 0) {
					break;
				}
				tempSentence.push(wordGrid[y][x+j].list[0]);
			}
			if (tempSentence.length >= 3) {
				ruleSentences.push(tempSentence.splice(0));
			}

			// 纵向
			tempSentence.splice(0);
			//for (var i = 0; i < height-y; i++) {
			for (var i = 0; i < sizeY+sizeH-y; i++) {
				if (wordGrid[y+i][x].list.length <= 0) {
					break;
				}
				tempSentence.push(wordGrid[y+i][x].list[0]);
			}
			if (tempSentence.length >= 3) {
				ruleSentences.push(tempSentence.splice(0));
			}
		}
	}

	var ruleItemMap = {};
	ruleSentences.forEach(function(arr) {
		for (var i = 0, l = arr.length; i+2 < l; i++) {
			//if (arr[i] != 'text_baba' && arr[i] != 'text_key' && arr[i] != 'text_wall') {
			if (!this.baba_checkTypeIsWord(arr[i])) {
				continue;
			} // TODO : 检查 规则word的物体
			var item = arr[i].slice('text_'.length);

			if (arr[i+1] != 'text_is') {
				continue;
			}

			//if (arr[i+2] != 'text_you' && arr[i+2] != 'text_push' && arr[i+2] != 'text_stop') {
			if (!this.baba_checkTypeIsRule(arr[i+2])) {
				continue;
			}
			var rule = arr[i+2].slice('text_'.length);

			// 规则语句有效
			ruleItemMap[item] = ruleItemMap[item] || {};
			ruleItemMap[item][rule] = true;

			i += 2; // 规则语句长度3

			// TODO : 其他语法

			// TODO : 条件规则
		}
		
	}, this);

	return ruleItemMap;
};
*/

// ？不考虑 is word 规则 的检查规则 ...
// ？text 自带 is word 规则 ...
//Game_Map.prototype.baba_makeItemRule_rule1 = function() {
Game_Map.prototype.baba_makeItemRuleUnits_rule1 = function() {
	// 文字
	var wordGrid = {};
	this.baba_babaEvents()
		.filter(e => this.baba_checkInMapSize(e._x, e._y), this)
		// TODO : 是否有必要做这个检查
		.filter(e => e._baba_item && e._baba_item.startsWith('text_'))
		// TODO : 检查 word规则的物体 和 普通word 的函数
		.map(e => {
			/*
			wordGrid[[e._x,e._y]] = wordGrid[[e._x,e._y]] || {
				x : e._x,
				y : e._y, 
				map : {}, 
			};
			wordGrid[[e._x,e._y]].map[e._baba_item] = true;
			// ？相同对象重叠后只视作一个 ...
			*/

			// 暂时不考虑文字重叠
			// TODO : 文字重叠

			if (!wordGrid[[e._x,e._y]]) {
				wordGrid[[e._x,e._y]] = {
					x : e._x,
					y : e._y, 
					text : e._baba_item, 
					//text : e._baba_item.slice('text_'.length), 
					// ？在检查类型之后去除 text_ ...
				};
			}
		});
	// TODO : 记录这些变量 并实时更新 以节省处理 ...


	// ？一个语句有且只有一个 is文字 ...
	// ？所以 应该围绕 is文字 实现相关逻辑 ...

	/*
	var wordIsGrid = {};
	for (var key in wordGrid) {
		if ('text_is' in wordGrid[key].map) {
			wordIsGrid[key] = {
				x : wordGrid[key].x, 
				y : wordGrid[key].y, 
			};
		}
	}
	*/

	// ？同方向的 is单词 不可重复用 ...
	// ？同方向的其他单词可以重复用 ...
	// TODO : 待考证

	// ？还有 xx has xx, xx make xx 的语句 ...

	// ？考虑各种重叠的情况 ...

	// ？从游戏设计者的角度思考 语句规则是怎样的 ...


	// ？规则语句左值1 : baba, not baba, lonely baba, baba and keke ...
	// ？not lonely xx, lonely not xx ...
	// ？规则语句左值2 : all, empty, level ...
	// ？规则语句条件1 : on baba, near baba, facing baba, on baba and keke ...
	// ？规则语句条件2 : not on baba, on not baba, ?on lonely baba ...
	// ？规则语句右值1 : is you, is you and push, is not you, is you and is push ...
	// ？规则语句右值2 : has baba, has baba and keke, make baba, make baba and keke ...
	// ？规则语句修饰词 : not ...
	// ？a on b is d and on e is f ...

	// ？baba on baba is you 需要两个baba重叠才能生效 ...
	// ？baba on baba and baba is you 三个baba重叠也不生效 ...
	// ？a on b and b is c 不生效 ...

	// ？not lonely baba, lonely not baba ...
	// ？not on xx 是 (not on) xx 还是 not (on xx) ...
	// ？not not ...
	// ？a on b and c on d is e ...
	// ？a on b is c and on d is e ...
	// ？a on b is c and d 是 a on b is (c and d) 还是 a (on b is c) and d ...
	// ？a is b is a ...

	// ？a on b near c is d ...
	// ？a on b and near c is d ...

	// ？not a and b ...
	// ？not a and not b ...
	// ？lonely a and b ...
	// ？lonely a and not b ...

	// ？not a and b is c 生效为 not a is c, b is c 不是 not b is c ...

	// ？a on b is c and d 生效为 a on b is c, a on b is d ...
	// ？a on b is c and is d 生效为 a on b is c, a on b is d ...
	// ？a is b and c on d is e 生效为 a is b, a is c, c on d is e 重复用了 c ...
	// ？a is b and on c is d 生效为 a is b, c is d 没有 a on c is d ...

	// ？a is b and c on d is e 生效为 a is b, c is d 没有 a on c is d ...
	// ？a and b on c is d 生效为 a on c is d, b on c id d ...


	// ？多重重叠 如 左值重叠 条件重叠 右值重叠 是否需要遍历每种组合 ...
	// ？或者将其视为一种 and 连接 ...
	// 注意 on a and b 表示 同时a,b的条件


	// ？暂时不考虑文字重叠的情况 ...


	// 规则源语句
	// 文字相连组成的语句，可能为无效规则语句，也可能有多个规则语句
	var ruleOriginSentences = [];
	var tempSentence = [];
	//for (var y = 0; y < height; y++) {
	//  for (var x = 0; x < width; x++) {
	//var width = this._baba_mapSizeW;
	//var height = this._baba_mapSizeH;
	//for (var y = this._baba_mapSizeY; y < this._baba_mapSizeY + height; y++) {
	//  for (var x = this._baba_mapSizeX; x < this._baba_mapSizeX + width; x++) {
	var sx = this._baba_mapSizeX;
	var ex = this._baba_mapSizeX + this._baba_mapSizeW;
	var sy = this._baba_mapSizeY;
	var ey = this._baba_mapSizeY + this._baba_mapSizeH;
	for (var y = sy; y < ey; y++) {
		for (var x = sx; x < ex; x++) {
			if (!wordGrid[[x,y]]) continue;

			/*
			// 横向
			//tempSentence.push(wordGrid[[x,y]].text);
			//for (var tx = x+1; tx < width; tx++) {
			//for (var tx = x; tx < width; tx++) {
			for (var tx = x; tx < ex; tx++) {
				if (wordGrid[[tx,y]]) {
					tempSentence.push(wordGrid[[tx,y]].text);
				}
				else {
					break;
				}
			}
			//if (tempSentence.length > 1) {
			//  ruleOriginSentences.push(tempSentence.splice(0));
			//}
			if (tempSentence.length >= 3) {
				ruleOriginSentences.push(tempSentence.splice(0));
			}
			else {
				tempSentence.splice(0);
			}

			// 纵向
			//for (var ty = y; ty < height; ty++) {
			for (var ty = y; ty < ey; ty++) {
				if (wordGrid[[x,ty]]) {
					tempSentence.push(wordGrid[[x,ty]].text);
				}
				else {
					break;
				}
			}
			//if (tempSentence.length > 1) {
			if (tempSentence.length >= 3) {
				ruleOriginSentences.push(tempSentence.splice(0));
			}
			else {
				tempSentence.splice(0);
			}
			*/

			// ？一串句子需要避免重复检查 ...
			// 如 0 0 1 2 3 4 0 5 6 7 0 8 得到 1234, 567, 8
			// 而不是 1234, 234, 34, 4, 567, 67, 7, 8
			// ？主要的特征是 这个句子开头的前一位和结尾的后一位 是范围外或者是0(空) ...

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

			// TODO : ？规则语句长度至少为2 还是 3 ...
			// ？原作中 and make 会生效 ...
		}
	}


	// 文字类型
	// ？按语句的文字的类型 对语句进行判断 ...

	// 物体 word : baba, keke, key 等
	// 规则 rule : you, push, stop 等
	// 修饰 ?decorate : not, lonely, ?and
	// 条件 condition : on, near, facing 等
	// 行为 behavior : is, has, make

	// ？用树形结构解析语句 ...
	/*
	？如 lonely not baba not on not keke is not me ...
		   /                |               \
	(lonely not baba)  (not on not keke)   (is not me)
		 /    \           /    \               /  \
	(lonely) (not baba) (not) (on not keke)  (is) (not me)
			   /  \             /    \              / \
		   (not) (baba)       (on) (not keke)   (not) (me)
									  /   \
								   (not) (keke)
	？...
	
	？改为 二叉的树形结构 ...
			 lonely not baba not on not keke is not me
		 lonely not baba not on not keke         is not me
	 lonely not baba        not on not keke     is   not me
	lonely   not baba     not on     not keke   is  not   me
	lonely  not   baba   not   on   not   keke  is  not   me
	？...

	？树结点对象 ...
	{
		sentence : '', 
		text : '', 
		...
	}
	...
	*/

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


	// ？兼容地考虑各文字 ...
	// ？设计一个可拓展的解析语句的框架 ...

	// ？输入为整个源语句 ...
	// ？再考虑输出的内容，设计输出的格式 ...
	// ？输出的应为规则数组 ...
	// ？每个规则有 主体物体、条件组(？或仅能有一个)、行为类型、行为物体 ...
	// ？每个条件有 条件类型、条件物体组 ...
	// ？每个主体物体、条件、条件物体、行为物体有 修饰文字 如 not, lonely ...

	// ？解析语句时，把各主体物体、条件物体、行为物体写入临时数组 ...

	// TODO : 尝试 ...

	// TODO : 还有修饰文字


	// ？not节点 : 可挂在物体节点、规则节点、条件节点上 ...
	// ？not文字 : 在临时内容里写入 not修饰 其他内容由之后的物体、规则、条件文字决定 不是这些文字时 失败 ...

	// ？and节点 : ...


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
				// TODO : 其他连接文字
				return {
					//text : text, 
					text : text.slice('text_'.length), 
					type : type, 
				}
			}, this), this
		);


	//var ruleSentence = [];
	var itemRuleUnits = [];

	//for (var list of ruleOriginSentences) {
	//for (var sentence_index = 0 ; sentence_index < ruleOriginSentences.length; sentence_index++) {
	//  var list = ruleOriginSentences[sentence_index];
	var sentence_index = 0, sentence_s_index = 0, sentence_e_index = 0;
	//while (sentence_index < ruleOriginSentences.length) {
	var maxLoop = 1000 + 10 * (ruleOriginSentences.length <= 0 ? 10
					  : ruleOriginSentences.length <= 1 ? ruleOriginSentences[0].length
					  : ruleOriginSentences.length * ruleOriginSentences.reduce((a,b) => a.length>b.length?a.length:b.length));
	while (maxLoop--) {
		var list = ruleOriginSentences[sentence_index];

		var phase = 11;
		//var phase = 99;

		// 11 : mainWord, 12 : mainWordConnect

		//// 21 : condition, 22 : conditionWord, 23 : conditionWordConnect, 24 : conditionConnect(暂不考虑)
		//// 31 : behaviorWord, 32 : behaviorWordConnect, 33 : behaviorConnect
		// ？behavior 不能加修饰词 所以 behaviorWord之前 没有 behavior 阶段 ...
		// ？在 behaviorWordConnect阶段 检查到 and 后 需要输入 behavior 或者 behaviorWord ...
		// ？所以 需要 behavior 阶段 ...
		// ？and 后进入 behaviorWord 需要输入 行为 或 行为物体 这两种情况都不会使得 进入 behaviorConnect阶段 ...
		// ？所以 不需要 behaviorConnect阶段 ...
		// ？同样地 不需要 conditionConnect阶段 ...
		// 21 : condition, 22 : conditionWord, 23 : conditionWordConnect
		//// 31 : behavior, 32 : behaviorWord, 33 : behaviorWordConnect
		// ？and 后进入 behaviorWord 需要输入 行为 或 行为物体 因为不清楚是哪种情况 所以用一个新阶段 ...
		// ？或者 使用 behavior阶段 或 behaviorWord阶段 但需要额外判断其他条件 进行分支处理 ...
		// ？这里添加一个新阶段 behaviorOrWord ...
		//// 31 : behavior, 32 : behaviorWord, 33 : behaviorWordConnect, 34 : behaviorOrWord
		// ？因为 行为文字不存在修饰词 ...
		// ？behaviorOrWord阶段 将会跳转 behaviorWord阶段 或 behaviorWordConnect阶段 ...
		// ？于是 不再需要 behavior阶段 ...
		// 32 : behaviorWord, 33 : behaviorWordConnect, 34 : behaviorOrWord
		
		// 98 : successEnd, 99 : failEnd

		// TODO : ？可兼容合并 ...
		// ？如 添加 behavior 阶段 用于输入 behavior文字 但是进入该阶段不使得索引前进 ...
		// ？拆开各阶段的特征 ...

		var tempWord = {
			text : '', 
			decorates : [], 
		};
		// ？是否需要 decorateType (最大修饰级别) ...
		var mainWords = [];

		//var condition = { text : '', decorates : [] }, conditionWords = [];
		var condition = null, conditionWords = [];
		// 暂时只考虑一个条件

		//var behavior = '', behaviorType = 0, behaviorWords = [], behaviorWordRules = [];
		var tempBehavior = {
			text : '', 
			words : [], 
			// ？行为的物体也有修饰 但仅限 decorate2 中的 not ...
		};
		//var behaviorType = 0, behaviorWords = [], behaviorWordRules = [];
		// ？直接使用 tempBehavior.words 记录文字 并在各阶段检查 behaviorType ...
		// ？故 不再需要 behaviorWords 和 behaviorWordRules ...
		var behaviorType = 0;
		// TODO : behaviorType 放入 tempBehavior 方便重置 tempBehavior ...
		var behaviors = [];
		
		var list_index = 0;
		var phaseList = [];
		//for (i = 0; i < list.length; i++) {
		for (list_index = sentence_s_index; list_index < list.length; list_index++) {
			/*
			if (phase == 99) {
				// new start
				tempWord = { text : '', decorates : [] };
				mainWords = [];
				condition = null;
				conditionWords = [];
				tempBehavior = { text : '', words : [] };
				behaviorType = 0;
				//behaviorWords = [];
				//behaviorWordRules = [];
				behaviors = 0;
				// ...
			}
			*/
			// phase == 99 将结束循环

			var word = list[list_index];
			if (phase == 11) {
				// mainWord
				if (word.type == 'decorate1' || word.type == 'decorate2') {
					// mainWord -- decorate1/2 -> mainWord
					//tempWord.decorates.push(word.text);

					// ？lonely 只允许有一个 ...
					// 暂时如此
					if (word.text == 'lonely' && tempWord.decorates.includes('lonely')) {
						phase = 99;
					}
					else {
						tempWord.decorates.push(word.text);
					}
					// TODO : 支持扩展更多修饰文字的框架
				}
				else if (word.type == 'word') {
					// mainWord -- word -> mainWordConnect
					tempWord.text = word.text;
					mainWords.push(tempWord);
					tempWord = { text : '', decorates : [] };
					// TODO : ？not a and b 是 not a 和 b 还是 not a 和 not b ...
					// ？即 是否需要保留修饰 ...
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
					// ？指 之后等待输入一个 condition 文字 ...
					// ？条件文字 不能接受lonely等修饰文字 (decorate1) ...
					// ？行为文字 不能接受修饰文字 ...
					tempWord.decorates.push(word.text);
					phase = 21;
				}
				else if (word.type == 'condition') {
					// mainWordConnect -- condition -> conditionWord
					// ？指 之后等待输入一个 condition目标 文字 ...
					tempWord.text = word.text;
					condition = tempWord;
					tempWord = { text : '', decorates : [] };
					phase = 22;
				}
				else if (word.type == 'behavior1' || word.type == 'behavior2') {
					// mainWordConnect -- behavior1/2 -> behaviorWord
					// ？指 之后等待输入一个 behavior目标 文字 ...
					// ？此处无需判断是否有修饰词存在 ...
					//behavior = word.text;
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
				// ？指 等待输入一个 condition 文字 ...
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
					// TODO : ？条件中的物体是否可以用 lonely 修饰 ...
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
					//behavior = word.text;
					tempBehavior.text = word.text;
					behaviorType = word.type == 'behavior1' ? 1 : 2;
					phase = 32;
				}
				else {
					// conditionWordConnect -- other -> failEnd
					phase = 99;
				}
			}
			/*
			else if (phase == 31) {
				// behavior
				if (word.type == 'behavior1' || word.type == 'behavior2') {
					// behavior -- behavior1/2 -> behaviorWord
					tempBehavior.text = word.text;
					behaviorType = word.type == 'behavior1' ? 1 : 2;
					phase++;
				}
				else {
					// behavior -- other -> successEnd/failEnd
					if (behaviors.length > 0) {
						phase = 98;
					}
					else {
						phase = 99;
					}
					// ...
				}
			}
			*/
			else if (phase == 32) {
				// behaviorWord
				//if (word.type == 'decorate2') {
				//  // behaviorWord -- decorate2 -> behaviorWord
				//  tempWord.decorates.push(word.text);
				//}
				// FINISH : behavior1 连接的物体不能有修饰
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
					//if (behaviors.length > 0) {
					// ？不是 存在已写入行为 而是 存在完整的还未写入的行为 ...
					// 必有 行为文字 如有 行为物体 则 tempBehavior 完整 可以写入 ...
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
					//// behaviorWordConnect -- and -> behaviorWord
					//phase--;
					// behaviorWordConnect -- and -> behaviorOrWord
					phase = 34;
				}
				else {
					// behaviorWordConnect -- other -> successEnd
					// ？behaviorWordConnect阶段时 tempBehavior已经完整 可以写入behaviors ...
					//behaviors.push(tempBehavior);
					//tempBehavior = { text : '', words : [] };
					//behaviorType = 0;
					//if (behaviors.length > 0) {
					//  phase = 98;
					//}
					//else {
					//  phase = 99;
					//}
					// ？必有 behaviors.length > 0 ...
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
				//else if (word.type == 'decorate2') {
				//  // behaviorOrWord -- decorate2 -> behaviorWord
				//  tempWord.decorates.push(word.text);
				//  phase = 32;
				//}
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
					// ？behaviorOrWord阶段 在 behaviorWordConnect阶段 之后 此时 tempBehavior已经完整 可以写入behaviors ...
					//behaviors.push(tempBehavior);
					//tempBehavior = { text : '', words : [] };
					//behaviorType = 0;
					// ？在每轮遍历后检查到 phase == 98 时 写入 ...
					// ？作为结束遍历的写入 ...
					phase = 98;
				}
			}

			// TODO : ？计算多余文字数 以计算完整语句长度 ...
			// ？多余文字数 其实就是上一个 behaviorWordConnect阶段之后 到当前阶段的长度 ...
			// ？因为 只有 behaviorWordConnect阶段 表示 语句完整且无多余 ...
			// ？完整语句长度 其实就是 语句开头到最后一个 behaviorWordConnect阶段 的长度 ...
			// ？如果记录了每个文字对应的阶段号 将很容易计算 ...

			// ？记录每个文字对应的阶段号 ...
			phaseList[list_index] = phase;

			if (list_index == list.length-1) {
				// 遍历结束的检查
				// ？相当于 传入异常的 word.type 使得进行结束遍历的处理 ...

				if (phase == 32) {
					// ？结束在 behaviorWord阶段 语法末尾有多余文字 ...
					// 必有 行为文字 如有 行为物体 则 tempBehavior 完整 可以写入 ...
					if (tempBehavior.words.length > 0) {
						phase = 98;
					}
					else {
						phase = 99;
					}
				}
				else if (phase == 33) {
					// ？结束在 behaviorWordConnect阶段 语法完整且无多余文字 ...
					phase = 98;
				}
				else if (phase == 34) {
					// ？结束在 behaviorOrWord阶段 语法末尾有多余文字 ...
					phase = 98;
				}
				//else {
				//  // ？结束在 其他阶段时 表示语法不完整 ...
				//  phase = 99;
				//}
				else if (phase == 98) {
					// ？已设置 phase = 98 也表示语法完整 ...
					phase = 98;
				}
				else {
					// ？结束在 其他阶段 表示语法不完整 ...
					phase = 99;
				}

				phaseList[i+1] = phase;
			}

			if (phase == 98) {
				// 写入
				behaviors.push(tempBehavior);

				//phase = 99;
				break;
			}
			else if (phase == 99) {
				break;
			}
		}

		/*
		// 遍历结束的检查
		if (phase == 33) {
			// ？结束在 behaviorWordConnect阶段 表示语法完整 ...
			// ...
		}
		else if (phase == 32) {
			// ？结束在 behaviorWord阶段 表示语法末尾有多余文字 ...
			// ...
		}
		else if (phase == 31) {
			// ？结束在 behavior阶段时 表示语法末尾有多余文字 ...
			// ...
		}
		else {
			// ？结束在 其他阶段时 表示语法不完整 ...
			// ...
		}
		*/
		// ？放入遍历中 当最后一次遍历的最后处理时 设置phase=98 ...
		// ？兼容合并了 遍历结束后的写入 ...


		// FINISH : 写入 ruleSentence
		// FINISH : ruleSentence 改名

		/*
		var wordUnit = {
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
			words : [], 
		};

		var itemRuleUnit = {
			word : {
				name : '', 
				decorates : [], 
			}, 
			conditions : [], 
			behaviors : [], 
		};

		if (condition != null) {
			conditionUnit.name = condition.text;
			conditionUnit.decorates = condition.decorates;
			conditionUnit.words = condition.words.map(word => {
				return {
					name : word.text, 
					decorates : word.decorates, 
				};
			});
			itemRuleUnit.conditions.push(conditionUnit);
			// TODO : 多个条件
		}
		for (var behavior of behaviors) {
			var tempUnit = JSON.parse(JSON.stringify(behaviorUnit));
			tempUnit.name = behavior.text;
			tempUnit.words = behavior.words.map(word => {
				return {
					name : word.text, 
					decorates : word.decorates, 
				};
			});
			itemRuleUnit.behavior.push(tempUnit);
		}
		for (var word of mainWords) {
			var tempUnit = {
				name : word.text, 
				decorates : word.decorates, 
			};
		}
		*/

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
				//conditionUnit.words = condition.words.map(word => {
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
				//for (var mainWord of mainWords) {
				// ？TypeError: Method Array Iterator.prototype.next called on incompatible receiver [object Unknown] ...
				for (var i = 0; i < mainWords.length; i++) {
					var mainWord = mainWords[i];
					mainWordUnit.name = mainWord.text;
					mainWordUnit.decorates = mainWord.decorates;
					//for (var behavior of behaviors) {
					for (var j = 0; j < behaviors.length; j++) {
						var behavior = behaviors[j];
						behaviorUnit.name = behavior.text;
						//for (var word of behavior.words) {
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


		// FINISH : 语句后续

		if (phase == 99) {
			// 异常语句
			// 下次 从该语句第二个文字 开始解析
			sentence_e_index = sentence_s_index + 1;
		}
		else if (phase == 98) {
			// 正常语句

			/*
			for (var j = i; j >= sentence_s_index; j--) {
				if (phaseList[j] == 33) {
					sentence_e_index = j;
					break;
				}
			} // 完整语句的结束位置
			*/
			// TODO : 完整语句发光

			// ？下次 从该语句最后一个行为文字后 开始解析 ...
			// ？a is b and c is e 是 b and c is e 还是 c is e ...
			// TODO : ...

			// ？在遍历的最后一轮时 设置了 phase 为 98 或 99 之后进行了 break ...
			// ？所以 i 不会达到 list.length 最后为 list.length-1 ... 
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


		// TODO : 函数化一些方法 使得兼容合并

		// ？baba语法解析器 ...
	}

	// FINISH : 其他语法

	// FINISH : 条件规则

	//return ruleItemMap;
	return itemRuleUnits;

	// TODO : 检测规则的函数 适应该变化

	// TODO : 测试
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

// ？注意区分 erased 和 idle 和 show ...

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

//const baba_BABA_EVENT_TEMPLATE = JSON.stringify({"id":1,"name":"EV001","note":"<baba is you:%name%>","pages":[{"conditions":{"actorId":1,"actorValid":false,"itemId":1,"itemValid":false,"selfSwitchCh":"A","selfSwitchValid":false,"switch1Id":1,"switch1Valid":false,"switch2Id":1,"switch2Valid":false,"variableId":1,"variableValid":false,"variableValue":0},"directionFix":true,"image":{"tileId":0,"characterName":"","direction":2,"pattern":1,"characterIndex":0},"list":[{"code":0,"indent":0,"parameters":[]}],"moveFrequency":3,"moveRoute":{"list":[{"code":0,"parameters":[]}],"repeat":true,"skippable":false,"wait":false},"moveSpeed":3,"moveType":0,"priorityType":0,"stepAnime":true,"through":true,"trigger":0,"walkAnime":false}],"x":1,"y":1});
// ？需要将 priorityType 设为 1 ...
const baba_BABA_EVENT_TEMPLATE = JSON.stringify({"id":1,"name":"EV001","note":"<baba is you:%name%>","pages":[{"conditions":{"actorId":1,"actorValid":false,"itemId":1,"itemValid":false,"selfSwitchCh":"A","selfSwitchValid":false,"switch1Id":1,"switch1Valid":false,"switch2Id":1,"switch2Valid":false,"variableId":1,"variableValid":false,"variableValue":0},"directionFix":true,"image":{"tileId":0,"characterName":"","direction":2,"pattern":1,"characterIndex":0},"list":[{"code":0,"indent":0,"parameters":[]}],"moveFrequency":3,"moveRoute":{"list":[{"code":0,"parameters":[]}],"repeat":true,"skippable":false,"wait":false},"moveSpeed":3,"moveType":0,"priorityType":1,"stepAnime":true,"through":true,"trigger":0,"walkAnime":false}],"x":1,"y":1});
Game_Map.prototype.baba_babaEventTemplate = function() {
	return JSON.parse(baba_BABA_EVENT_TEMPLATE);
};
Game_Map.prototype.baba_makeBabaEventData = function(eventId, name, x, y, d) {
	// TODO : 检查 name 合法

	var eventData = this.baba_babaEventTemplate();
	eventData.id = eventId;
	//eventData.meta['baba is you'] = name;
	// ？此时还没有 meta ...
	// ？需要用 DataManager.extractMetadata 从 note 提取到 meta ...
	eventData.note = eventData.note.replace('<baba is you:%name%>', '<baba is you:'+name+'>')
	DataManager.extractMetadata(eventData);
	eventData.name = name + '_' + eventId;
	var image = eventData.pages[0].image;
	//image.characterName = '!$'+name;
	//image.characterName = this.baba_checkTypeIsTileItem(name) ? '!'+name+'_tile1' : '!$'+name;
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

//Spriteset_Map.prototype.addEventCharacter = function(event) {
Spriteset_Map.prototype.baba_addBabaEventCharacter = function(event) {
	var sprite = new Sprite_Character(event);
	this._characterSprites.push(sprite);
	this._tilemap.addChild(sprite);
	// TODO : 考虑 图层顺序
};
Game_Map.prototype.baba_addBabaEvent = function(name, x, y, d) {
	var eventId = $dataMap.events.length;
	// TODO : ？是否应该是 $gameMap._events.length ...
	var eventData = this.baba_makeBabaEventData(eventId, name, x, y, d);
	$dataMap.events.push(eventData); // TODO : $dataMap.events 重新加载时可复原
	var event = new Game_Event(this._mapId, eventId);
	//event.refresh(); // ?
	this._events[eventId] = event;

	//this.refresh(); // ?

	//event.erase(); // ?
	event.baba_deactivateBabaEvent(); // ?

	event.baba_initBabaEventByData();

	var spriteset = SceneManager._scene._spriteset;
	!!spriteset && spriteset.baba_addBabaEventCharacter(event);

	return event;
};

// FINISH : 增加baba事件的缓存机制 类似对象池

//Game_Map.prototype.baba_removeBabaEvent = function(eventId) {
Game_Map.prototype.baba_deactivateBabaEvent = function(eventId) {
	//delete $dataMap.events[eventId];
	//delete this._events[eventId];
	// ？这样是否可以 ...

	// FINISH : ？移除事件仅抹去事件 添加事件也可以从这些抹去事件中恢复 ...

	var event = this.event(eventId);
	if (event) {
		//event.erase();
		event.baba_deactivateBabaEvent();
	}
};
Game_Event.prototype.baba_deactivateBabaEvent = function() {
	this.erase();
	this._baba_isIdleBabaEvent = true;

	this.setImage('', 0); // ?

	// FINISH : 销毁时清理路线记录

	this.baba_initReadyMoveStep();
	this.baba_initRouteTurn();
	// ...
};

// ？隐藏baba事件 ...
// ？在回退操作时可能再出现 在隐藏期间不能被占用 ...
Game_Map.prototype.baba_hideBabaEvent = function(eventId) {
	var event = this.event(eventId);
	if (event) {
		event.baba_hideBabaEvent();
	}
};
Game_Event.prototype.baba_hideBabaEvent = function() {
	this.erase();
};

// ？显示baba事件 ...
// ？隐藏baba事件 的回退 ...
Game_Map.prototype.baba_showBabaEvent = function(eventId) {
	var event = this.event(eventId);
	if (event) {
		event.baba_showBabaEvent();
	}
};
Game_Event.prototype.baba_showBabaEvent = function() {
	this._erased = false;
	//this.refresh();
	// ？刷新事件会用事件数据重置事件的图像 ...
};

/*Game_Map.prototype.baba_requireNewBabaEvent = function() {
	//return this.baba_addBabaEvent('text_is', -1, -1, 2);
	//return this.baba_addBabaEvent('', -1, -1, 2);
	return this.baba_addBabaEvent('XXX', -1, -1, 2);
};*/
Game_Map.prototype.baba_requireNewBabaEvent = function(name) {
	return this.baba_addBabaEvent(name || 'XXX', -1, -1, 2);
};
//Game_Map.prototype.baba_requireIdleBabaEvent = function() {
Game_Map.prototype.baba_requireIdleBabaEvent = function(name) {
	/*// this.baba_idleBabaEvents()
	// this.baba_isIdleBabaEvent(e)
	var list = this._events
		.filter(e => !!e && !!e._erased && e.baba_isBabaEvent());
	if (list.length > 0) {
		return list[0];
	}
	else {
		return this.baba_requireNewBabaEvent();
	}*/
	var event = this._events
		//.find(e => !!e && !!e._erased && e.baba_isBabaEvent());
		.find(e => !!e && !!e._baba_isIdleBabaEvent && e.baba_isBabaEvent());
	//return event || this.baba_requireNewBabaEvent();
	return event || this.baba_requireNewBabaEvent(name);
};

Game_Map.prototype.baba_requireBabaEvent = function(name, x, y, d) {
	//var event = this.baba_addBabaEvent(name, x, y, d);
	//var event = this.baba_requireIdleBabaEvent();
	var event = this.baba_requireIdleBabaEvent(name);

	var eventData = event.event();
	// ？是否要修改 eventData ...
	// ？在刷新事件页时 会通过事件数据设置baba事件 所以需要修改 eventData ...
	// ？或者修改设置baba事件的时机 ...
	eventData.meta['baba is you'] = name;
	eventData.pages[0].image.characterName = this.baba_makeBabaCharacterName(name);

	event._erased = false;
	//event.refresh(); // ?
	event._baba_isIdleBabaEvent = false;

	event.baba_setItem(name);
	//event.setImage(this.baba_makeBabaCharacterName(name), 0); // ?
	// TODO : 让 baba_refreshItemImage 考虑 erased 和 noIdle 并使用 baba_refreshItemImage
	event.baba_refreshItemImage();

	event.setPosition(x, y);
	event.setDirectionFix(false);
	event.setDirection(d);

	// ？设置位置和方向后 需要刷新记录的路线 ...
	event.baba_initReadyMoveStep();
	event.baba_initRouteTurn(); // ?
	//event.baba_newRouteTurn(); // ?
	// TODO : ？...

	// TODO : 把 设置位置和方向的逻辑 写成方法
	// ===  break  202111131934  ===
	// TODO : ？理清楚 在加载地图时自动初始化的baba事件 和 谜题进行中新建的baba事件 ...
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
// ？实际上是二进制排布的 ...
// ？按位数高到低 顺序为 下、左、上、右 ...
// ？如 第12个(索引11) 为 : 11 -> 1011(2) 所以 下右上有，左无 ...
// ？如 左上有，右下无 为 : 0110(2) -> 6 -> 索引6 即第7个 ...

Game_Map.prototype.baba_makeTileEventImageIndex = function(u, d, l, r) {
	var arr = [!!d, !!l, !!u, !!r];
	var index = parseInt(arr.map(a=>a?1:0).join(''), 2);
	return index;
};

//Game_Map.prototype.baba_setTileEventImage = function(name, x, y) {
// ？直接全部处理 而不是某一个位置处理 ...
// ？避免重复的检查 ...
//Game_Map.prototype.baba_setTileEventImage = function(name) {
Game_Map.prototype.baba_makeTileEventImageData = function(name) {
	var events = this.baba_babaEvents()
		.filter(e => e._baba_item == name);

	var map = {};
	//var xs = this._baba_mapSizeX;
	//var xe = this._baba_mapSizeX + this._baba_mapSizeW;
	//var ys = this._baba_mapSizeY;
	//var ye = this._baba_mapSizeY + this._baba_mapSizeH;
	//for (var y = ys; y < ye; y++) {
	//  for (var x = xs; x < xe; x++) {
	for (var i = 0; i < events.length; i++) {
		var e = events[i];
		map[[e._x,e._y]] = map[[e._x,e._y]] || {
			x: e._x, 
			y: e._y, 
			//eventIndexes: [], 
			eventsId: [], 
			imageIndex: 0, 
		};
		//map[[e._x,e._y]].eventIndexes.push(i);
		map[[e._x,e._y]].eventsId.push(e._eventId);
	}

	var u, d, l, r;
	var obj, x, y;
	for (var key in map) {
		obj = map[key];
		x = obj.x;
		y = obj.y;
		//u = this.baba_checkInMapSize(x, y) ? ([x,y-1] in map ? true : false) : true;
		u = this.baba_checkInMapSize(x, y-1) ? !!([x,y-1] in map) : true;
		d = this.baba_checkInMapSize(x, y+1) ? !!([x,y+1] in map) : true;
		l = this.baba_checkInMapSize(x-1, y) ? !!([x-1,y] in map) : true;
		r = this.baba_checkInMapSize(x+1, y) ? !!([x+1,y] in map) : true;
		var imageIndex = this.baba_makeTileEventImageIndex(u, d, l, r);
		obj.imageIndex = imageIndex;

		//obj.eventIndexes.forEach(i => events[i]. ...)
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

// TODO : ？直接用图块 setTileImage ...

// TODO : ？移动完成前 还是 立即 更新图片 ...



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
//const baba_BABA_TILESET_CONFIG_WORD = baba_BABA_TILESET_CONFIG_ITEM.slice(0);
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
		//var config = [
		//  baba_BABA_TILESET_CONFIG_ITEM, 
		//  baba_BABA_TILESET_CONFIG_WORD, 
		//  baba_BABA_TILESET_CONFIG_RULE, 
		//  baba_BABA_TILESET_CONFIG_OTHERTEXT, 
		//][Math.floor((index - 768) / 32)];

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

	// ？E层图块 在 $dataMap.data 中的顺序是 第4个(索引3) ...
	// ？最多重叠放置两个 将会位于 第4个(索引3) 和 第3个(索引2) ...
	/*
	var offset = 3 * width * height;
	for (var y = 0, i = offset; y < height; y++) {
		for (var x = 0; x < width; x++, i++) {
			var name = this.baba_getBabaTilesetName(data[i]);
			if (!!name) {
				this.baba_addBabaEvent(name, x, y, 2);
				// 方向向下

				// TODO : 可以配置方向
				// ？在图块中顺序排布方向 ...

				// 消去图块
				data[i] = 0;
				// ？可行 ...

				// TODO : $dataMap.data 可保存和还原
			}
		}
	}
	*/

	//for (var layer = 3; layer >= 2; layer--) {
	//  var offset = layer * width * height;

	//var offset3 = 3 * width * height;
	//var offset2 = 2 * width * height;
	var offset_each = width * height;
	for (var y = 0, i = 0; y < height; y++) {
		for (var x = 0; x < width; x++, i++) {
			for (var layer = 3; layer >= 2; layer--) {
				var index = i + layer * offset_each;
				var name = this.baba_getBabaTilesetName(data[index]);
				if (!!name) {
					//this.baba_addBabaEvent(name, x, y, 2);
					this.baba_requireBabaEvent(name, x, y, 2);
					// 方向向下

					// TODO : 可以配置方向
					// ？在图块中顺序排布方向 ...

					// 消去图块
					data[index] = 0;
					// ？可行 ...

					// TODO : $dataMap.data 可保存和还原
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

// ？踏步动画统一交替 ...
// ？baba地图负责更新pattern baba事件从baba地图获取pattern更修改自身pattern ...

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
		//this._baba_babaEventPattern = (this._baba_babaEventPattern + 1) % 4;
		this._baba_babaEventPattern = (this._baba_babaEventPattern + 1) % 3;
		// TODO : 考证是哪种方式

		this._baba_babaEventAnimationCount = 0;
	}
};



// 临时 扩大图块显示
const _MK_Spriteset_Map_createTilemap = Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap = function() {
	_MK_Spriteset_Map_createTilemap.apply(this, arguments);

	//var margin = this._tilemap._margin;
	//this._tilemap._width = Graphics.width * 2 + margin * 2;
	//this._tilemap._height = Graphics.height * 2 + margin * 2;
	// ？直接改宽高不能绘制左上角的内容 ...
	// ？但是修改 margin 可以绘制到左上角的内容 ...

	var margin = Math.max(Graphics.width, Graphics.height) / 2 + 20;
	this._tilemap._margin = margin;
	this._tilemap._width = Graphics.width + margin * 2;
	this._tilemap._height = Graphics.height + margin * 2;
};

/*
// 不绘制地图外的部分
Tilemap.prototype._posInMapData = function(x, y) {
	return 0 <= x && x < this._mapWidth && 0 <= y && y < this._mapHeight;
};
const _MK_Tilemap__paintTiles = Tilemap.prototype._paintTiles;
Tilemap.prototype._paintTiles = function(startX, startY, x, y) {
	if (this._posInMapData(startX + x, startY + y)) {
		_MK_Tilemap__paintTiles.apply(this, arguments);
	}
};
const _MK_ShaderTilemap__paintTiles = ShaderTilemap.prototype._paintTiles;
ShaderTilemap.prototype._paintTiles = function(startX, startY, x, y) {
	if (this._posInMapData(startX + x, startY + y)) {
		_MK_ShaderTilemap__paintTiles.apply(this, arguments);
	}
};
*/




// ----------------------------------------------------------------
// Game_Event
// baba事件

Game_Event.prototype.baba_isBabaEvent = function() {
	return !!this.event().meta['baba is you'];
};

//Game_Event.prototype.baba_checkYou = function() {
//  return this.baba_isBabaEvent();
//  // ...
//};
// ？you是规则中的一种 其他规则也需要被检查 ...


/*const _MK_Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
Game_Event.prototype.setupPageSettings = function() {
	_MK_Game_Event_setupPageSettings.apply(this, arguments);

	if (this.baba_isBabaEvent()) {
		this.baba_initItem();
		this.baba_initPaletteIndex();
		//this.baba_initMoveStep();
		this.baba_initReadyMoveStep();
		this.baba_initRouteTurn();
	}
};*/
// ？设置baba item时 不一定需要重新设置位置或者清空历史路线 ...
// ？改变时机到 设置baba item时 ...
// ？还要考虑直接用事件放置的baba对象 ...
const _MK_Game_Map_setupEvents = Game_Map.prototype.setupEvents;
Game_Map.prototype.setupEvents = function() {
	_MK_Game_Map_setupEvents.apply(this, arguments);

	this._events
		.filter(e => !!e && e.baba_isBabaEvent())
		.forEach(e => e.baba_initBabaEventByData());
};

// ？有几率在执行谜题gameover事件后 变成事件数据中的图像 ...
const _MK_Game_Event_refresh = Game_Event.prototype.refresh;
Game_Event.prototype.refresh = function() {
	_MK_Game_Event_refresh.apply(this, arguments);

	this.baba_refreshItemImage();
};

const _MK_Game_Map_refresh = Game_Map.prototype.refresh;
Game_Map.prototype.refresh = function() {
	_MK_Game_Map_refresh.apply(this, arguments);
	// ？地图刷新时 会刷新tile类事件 使得显示异常 ...
	this.baba_updateTileEventImageAll();
};


// ？对于条件规则 如 on, facing, near ...
// ？该种对象都拥有该条件规则 但只有满足条件时规则才生效 ...


// --------------------------------
// baba物体

Game_Event.prototype.baba_initItem = function() {
	var item = this.event().meta['baba is you'];
	//this._baba_item = item || '';
	//this._baba_item = typeof item === 'string' ? item.trim() : '';
	this.baba_setItem(typeof item === 'string' ? item.trim() : '');
};

Game_Event.prototype.baba_initBabaEventByData = function() {
	if (this.baba_isBabaEvent()) {
		this.baba_initItem();
		this.baba_initPaletteIndex();
		//this.baba_initMoveStep();
		this.baba_initReadyMoveStep();
		this.baba_initRouteTurn();
	}
};

/*Game_Event.prototype.baba_setItem = function(item) {
	this._baba_item = item || '';
};*/
Game_Event.prototype.baba_setItem = function(item) {
	item = item || '';
	if (this._baba_item !== item) {
		// 临时
		// 处理用脚本执行的 baba_setItem 的规则更新
		//this._baba_itemChanged = true;

		this._baba_item = item;
		this.baba_refreshItemImage();

		if (this._baba_item) {
			//this.baba_initItem();
			this.baba_initPaletteIndex();
			//this.baba_initMoveStep();
			//this.baba_initReadyMoveStep(); // ？该轮的准备移动 需要重置 ...
			// ？需要在设置位置和方向后调用 ...
			//this.baba_initRouteTurn(); // ？总的行动路线 不能重置 ...
		}

		// ？需要记录item变换 ...
		//this.baba_addCurrentRoute();
		// ？单独写一个方法 ...
	}
};

Game_Event.prototype.baba_setItemAndAddRoute = function(item) {
	var oldItem = this._baba_item;
	this.baba_setItem(item);
	if (this._baba_item !== oldItem && this._baba_item) {
		this.baba_addCurrentRoute();
	}
};

/*Game_Event.prototype.baba_refreshItemImage = function() {
	var name = $gameMap.baba_makeBabaCharacterName(this._baba_item);
	this.setImage(name, 0);
};*/
Game_Event.prototype.baba_refreshItemImage = function() {
	if (this._baba_item) {
		var name = $gameMap.baba_makeBabaCharacterName(this._baba_item);
		this.setImage(name, 0);
	}
	else {
		this.setImage('', 0);
	}
};

// FINISH : item变换 (包括循环变化，一变多变化 等)

Game_Event.prototype.baba_getItem = function() {
	return this._baba_item;
};


Game_Event.prototype.baba_checkRule = function(rule) {
	//return $gameMap.baba_checkItemRule(this._baba_item, rule);
	return $gameMap.baba_checkBabaEventRule(this._eventId, rule);
};


// --------------------------------
// 路线记录

// ？一轮移动可能移动多次 ...
// ？为了还原移动路线 需要记录一轮中每次移动的位置 ...
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
		md : md, // ？该步的移动方向 ...
		ml : ml, // ？该步的移动距离 ...
		i : this._baba_item, 
	});
};
Game_Event.prototype.baba_popRoute = function() {
	return this._baba_routeTurn[0].pop();
};



// --------------------------------
// 准备的移动

/*
Game_Event.prototype.baba_initMoveStep = function() {
	this._baba_moveSteps = [];
	this._baba_moveStepX = this._x;
	this._baba_moveStepY = this._y;
};
Game_Event.prototype.baba_clearMoveStep = function() {
	this._baba_moveSteps.splice(0);
	this._baba_moveStepX = this._x;
	this._baba_moveStepY = this._y;
};
Game_Event.prototype.baba_addMoveStep = function(direction, facingDirection) {
	this._baba_moveSteps.push({
		d : direction, 
		fd : facingDirection, 
	});

	// 临时位置
	this._baba_moveStepX = $gameMap.roundXWithDirection(this._baba_moveStepX, direction);
	this._baba_moveStepY = $gameMap.roundYWithDirection(this._baba_moveStepY, direction);

	// TODO : 临时朝向
};
*/
// TODO : ？优先级 ...
// ？准备的移动 分为 You移动 和 Move移动 (可能还有其他的) 多个阶段 ...
// ？手动写入优先级并排序 还是 按优先级顺序调用写入方法 ...

Game_Event.prototype.baba_initReadyMoveStep = function() {
	this._baba_readyMoveSteps = []; // 该轮移动的准备移动

	// 该轮移动的现阶段的位置
	this._baba_moveStepX = this._x;
	this._baba_moveStepY = this._y;

	// 该轮移动的该阶段的该步的临时移动位置和方向
	//this._baba_moveStepTempX = this._x;
	//this._baba_moveStepTempY = this._y;
	//this._baba_moveStepTempFacingDirection = this._direction;
	//this._baba_moveStepTempDirection = 0;
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
	//this._baba_moveStepTempX = this._x;
	//this._baba_moveStepTempY = this._y;
	//this._baba_moveStepTempFacingDirection = this._direction;
	//this._baba_moveStepTempDirection = 0;
	this._baba_moveStepTempX = null;
	this._baba_moveStepTempY = null;
	this._baba_moveStepTempFacingDirection = null;
	this._baba_moveStepTempDirection = null;
};
Game_Event.prototype.baba_clearMoveStepTemp = function() {
	//this._baba_moveStepTempX = this._x;
	//this._baba_moveStepTempY = this._y;
	//this._baba_moveStepTempFacingDirection = this._direction;
	//this._baba_moveStepTempDirection = 0;
	this._baba_moveStepTempX = null;
	this._baba_moveStepTempY = null;
	this._baba_moveStepTempFacingDirection = null;
	this._baba_moveStepTempDirection = null;
};

// 设置临时移动位置
Game_Event.prototype.baba_setMoveStepTemp = function(direction, facingDirection) {
	/*
	if (direction > 0) {
		this._baba_moveStepTempX = $gameMap.roundXWithDirection(this._baba_moveStepX, direction);
		this._baba_moveStepTempY = $gameMap.roundYWithDirection(this._baba_moveStepY, direction);
	}
	else {
		this._baba_moveStepTempX = this._baba_moveStepX;
		this._baba_moveStepTempY = this._baba_moveStepY;
	}
	this._baba_moveStepTempFacingDirection = facingDirection;
	this._baba_moveStepTempDirection = direction;

	//this._baba_moveStepTempDirty = true;
	*/

	// ？无移动且不改变朝向时 不记录变化 ...

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

	// ？临时位置是覆盖式的 更后写入的移动覆盖更早写入的移动 ...
	// ？且 不会记录被覆盖的移动 ...
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
		// TODO : 测试

		this.baba_clearMoveStepTemp();
	}
};

// TODO : 直接写入BackMove的移动的方法



Game_Event.prototype.baba_executeAllMoveStep = function(back) {
	//for (var obj of this._baba_moveSteps) {
	for (var obj of this._baba_readyMoveSteps) {
		this.baba_executeMove(obj.md, obj.fd, back);
	}

	this.baba_clearMoveStep();
};
Game_Event.prototype.baba_executeMove = function(direction, facingDirection, back) {
	this.setThrough(true);
	this.setDirectionFix(true);
	this.setMoveSpeed(5); // TODO : ？相应变动的 使得总移动时间相等 ...

	if (!back) {
		this._direction = facingDirection;
		this.moveStraight(direction);
	}
	else {
		this.moveStraight(direction);
		this._direction = facingDirection;
		// ？这样不能实现移动完后 修改方向 ...
		// TODO : backMove 先移动再修改方向
	}

	// FINISH : 朝向方向

	if (!back) {
		// ？全部移动完 并 执行变换item后 记录位置 ...
		// ？记录本回合的移动 ...
		// ？变换item也作为一步路线 ...

		//this.baba_addRoute(this._x, this._y, this._direction, direction, 1);
		// ？移动方向为0时不移动 此时移动距离为0 ...
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



// XX Item

//Game_Event.prototype.baba_setXXX = function() {
//};
//Game_Event.prototype.baba_setXXXByRoute = function() {
//};
// TODO




// --------------------------------
// 颜色

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
			//var color = palette.getPixel(x, y);
			//var color = palette._context.getImageData(x, y, 1, 1).data;
			// ？
			var color = palette._context.getImageData(x, y, 1, 1).data;

			//paletteData[i] = color;
			//paletteData[i] = color.slice(0);
			//paletteData[i] = [...color];
			// ？作用在白色上的色调(tone) 并非直接呈现其颜色 ...
			// ？在色调的作用下 会对rgb通道的颜色直接加减 ...
			paletteData[i] = [-255+color[0], -255+color[1], -255+color[2], 0];

			// TODO : 透明度
			// ？第四个参数是灰度 gray
		}
	}
	this._baba_paletteData = paletteData;
}

Game_Screen.prototype.baba_getPaletteTone = function(index) {
	if (typeof index !== 'number' || index < 0 || index >= 7 * 5) {
		return [0, 0, 0, 0];
	}
	else {
		//return this._baba_paletteData[index].slice(0);
		// ？sprite.setColorTone 会复制 tone数组 ...
		return this._baba_paletteData[index];
	}
}


//const _MK_Game_Event_updateBitmap = Game_Event.prototype.updateBitmap;
//Game_Event.prototype.updateBitmap = function() {
//  _MK_Game_Event_updateBitmap.apply(this, arguments);
//  ...
//};
//Game_Event.prototype.baba_updateBabaTone = function() {
//  // ...
//};

//Game_Event.prototype.baba_initBabaTone = function() {
//  this._baba_paletteIndex = -1;
//  this._baba_tone = [0, 0, 0, 0];
//};
//Game_Event.prototype.baba_setPaletteIndex = function(index) {
//  this._baba_paletteIndex = index;
//  this._baba_tone = ...
//};
//Game_Event.prototype.baba_setBabaTone = function(index) {
//};
//Game_Event.prototype.baba_babaTone = function() {
//};

Game_Event.prototype.baba_initPaletteIndex = function() {
	//this._baba_paletteIndex = -1;

	// 临时
	/*
	switch (this._baba_item) {
		case 'tile': this._baba_paletteIndex = 1; break;
		case 'wall': this._baba_paletteIndex = 8; break;
		case 'text_wall': this._baba_paletteIndex = 8; break;
		case 'tree': this._baba_paletteIndex = 19; break;
		case 'text_tree': this._baba_paletteIndex = 19; break;
		case 'grass': this._baba_paletteIndex = 5; break;
		case 'baba': this._baba_paletteIndex = -1; break;
		case 'text_is': this._baba_paletteIndex = -1; break;
		case 'text_baba': this._baba_paletteIndex = 11; break;
		case 'text_you': this._baba_paletteIndex = 11; break;
		case 'text_win': this._baba_paletteIndex = 13; break;
		case 'text_stop': this._baba_paletteIndex = 12; break;
	}
	*/
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
	// TODO : ？自动配色 ...
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
	//var color = $gameScreen.baba_getPaletteTone(this._baba_paletteIndex);
	//var tint = ((color[0] + 0xff) << 16) | ((color[1] + 0xff) << 8) | ((color[2] + 0xff) << 0);
	//this.tint = tint;
	// 尝试解决 加载大量图块类图像(如wall)时卡顿的问题
	// 但结果无效
};


// TODO : 颜色配置 颜色设置规律 等

// TODO : 规则语法正确时 发光


// --------------------------------
// 图层顺序

const _MK_Game_Event_screenZ = Game_Event.prototype.screenZ;
Game_Event.prototype.screenZ = function() {
	if (this.baba_isBabaEvent()) {
		var haveYouRule = this.baba_checkRule('you');
		var floorItem = $gameMap.baba_checkTypeIsFloorItem(this._baba_item);
		var extraPriority = haveYouRule ? 1 : (floorItem ? -1 : 0);
		//var extraPriority = haveYouRule ? 2 : (floorItem ? 0 : 1);
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
		//Graphics.height - height, Graphics.width - width, width, height);
		//0, 0, width, height);
		//0, 0, Graphics.width, Graphics.height);
		//Graphics.width - width, 0, width, Graphics.height);
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




/*
// ----------------------------------------------------------------
// ImageManager

ImageManager._baba_babaCharacterCaches = {};

const _MK_ImageManager_loadCharacter = ImageManager.loadCharacter;
ImageManager.loadCharacter = function(filename, hue) {
	if (this._baba_babaCharacterCaches[filename]) {
		return this._baba_babaCharacterCaches[filename];
	}
	else {
		var bitmap = this.loadBitmap('img/characters/', filename, hue, false);
		this._baba_babaCharacterCaches[filename] = bitmap;
		return bitmap;
	}
};
*/
// 尝试解决 加载大量图块类图像(如wall)时卡顿的问题
// 但结果无效

// ？卡顿的位置是 _executeTint ...
// ？原因是 染色 ...
// ？对图块类图像(如wall)设置色调时会卡顿 ...
// ？因为图块类图像的原图像太大 ...





// ？事件移动多格时 要加速移动 ...
// ？所以 需要先写入全部移动 再统一执行 ...

// ？推动行为 也是 触发推动时写入被推动对象的移动行为 ...
// ？推不动的情况 ...

// ？还要解决同时移动时碰撞的一些问题 ...


// ？普通移动只分为 you移动 push移动 move移动 shift移动 ...
// ？这些移动每次只移动一格 ...
// ？除 shift 可以多个叠加 ...
// ？其他每种移动每轮行动只一次 ...



})();




(function() {

const _MK_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_MK_Game_Interpreter_pluginCommand.apply(this, arguments);

};

})();



