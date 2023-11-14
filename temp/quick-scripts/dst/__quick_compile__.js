
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/CustomSyncData":2,"./assets/game/scripts/SkeletonExt":5,"./assets/game/scripts/Data/EventType":6,"./assets/frame/scripts/Data/FrameConstValue":7,"./assets/game/scripts/Manager/EditorManager":9,"./assets/frame/scripts/Utils/Tools":13,"./assets/frame/scripts/Manager/ListenerManager":16,"./assets/frame/scripts/UI/AdaptiveScreen":21,"./assets/frame/scripts/UI/BindNode":22,"./assets/frame/scripts/UI/Item/Tip":25,"./assets/frame/scripts/Data/FrameMsgType":36,"./assets/frame/scripts/Utils/HitTest":39,"./assets/frame/scripts/Data/FrameSyncData":41,"./assets/frame/scripts/Utils/BoundingBoxHelp":42,"./assets/frame/scripts/SDK/GameMsg":44,"./assets/frame/scripts/Utils/MathUtils":45,"./assets/game/scripts/Manager/GameManager":47,"./assets/game/scripts/Data/ConstValue":48,"./assets/game/scripts/UI/Item/SoundConfig":49,"./assets/game/scripts/UI/panel/TeacherPanel":1,"./assets/frame/scripts/Manager/SyncDataManager":4,"./assets/frame/scripts/UI/Item/MaskRecover":3,"./assets/frame/scripts/Http/NetWork":8,"./assets/frame/scripts/SDK/T2M":11,"./assets/frame/scripts/Manager/UIManager":14,"./assets/frame/scripts/Manager/ReportManager":15,"./assets/frame/scripts/Manager/SoundManager":17,"./assets/frame/scripts/UI/BaseUI":18,"./assets/game/scripts/UI/Item/GameUI":10,"./assets/frame/scripts/UI/GameMain":19,"./assets/frame/scripts/UI/BaseFrameUI":20,"./assets/frame/scripts/Utils/AudioPlayExtension":33,"./assets/frame/scripts/UI/Panel/ErrorPanel":12,"./assets/frame/scripts/Utils/UIHelp":40,"./assets/frame/scripts/Utils/BoundingBoxDemo":43,"./assets/frame/scripts/UI/Item/MaskGlobal":23,"./assets/frame/scripts/UI/Item/replayBtn":24,"./assets/frame/scripts/UI/Item/TitleNode":26,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":27,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":28,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":29,"./assets/frame/scripts/UI/Panel/LoadingUI":30,"./assets/frame/scripts/UI/Panel/OverTips":31,"./assets/frame/scripts/UI/Panel/TipUI":32,"./assets/frame/scripts/UI/Panel/BaseGamePanel":34,"./assets/frame/scripts/UI/Panel/StarCount":35,"./assets/frame/scripts/UI/Panel/SubmissionPanel":37,"./assets/frame/scripts/UI/Panel/AffirmTips":38,"./assets/game/scripts/UI/Components/ButtonSync":46,"./assets/game/scripts/UI/panel/GamePanel":50},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../../../frame/scripts/Data/FrameMsgType":36,"../../../../frame/scripts/Manager/ListenerManager":16,"../../../../frame/scripts/Manager/ReportManager":15,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":27,"../../../../frame/scripts/Manager/UIManager":14,"../../../../frame/scripts/Utils/UIHelp":40,"../../Manager/EditorManager":9,"./GamePanel":50},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../../Data/FrameMsgType":36,"../../Manager/ListenerManager":16,"../../Manager/UIManager":14,"../BindNode":22},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"../../../frame/scripts/Manager/ReportManager":15,"../../../game/scripts/Data/CustomSyncData":2,"../../../frame/scripts/Data/FrameSyncData":41},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../../../game/scripts/Data/ConstValue":48,"../Manager/UIManager":14,"../SDK/GameMsg":44,"../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":16,"../../../../frame/scripts/Utils/Tools":13,"../../../../frame/scripts/Manager/SyncDataManager":4,"../../../../frame/scripts/Manager/SoundManager":17,"../../../../frame/scripts/Utils/UIHelp":40,"./SoundConfig":49,"../../Data/EventType":6,"../../Manager/EditorManager":9},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{"../Http/NetWork":8,"../Data/FrameMsgType":36,"../Manager/ListenerManager":16,"./GameMsg":44,"../Manager/SyncDataManager":4,"../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"./../BaseFrameUI":20,"../../Utils/UIHelp":40,"./../../SDK/GameMsg":44,"./../../Manager/SoundManager":17},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{"../UI/BaseUI":18},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../SDK/GameMsg":44,"../../../game/scripts/Data/ConstValue":48,"../../../game/scripts/Manager/EditorManager":9},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../Data/FrameConstValue":7,"../Http/NetWork":8,"../Data/FrameMsgType":36,"../SDK/GameMsg":44,"./ListenerManager":16,"./UIManager":14},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../Data/FrameConstValue":7,"../Manager/ListenerManager":16,"./BindNode":22},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../Data/FrameMsgType":36,"../Http/NetWork":8,"../../../game/scripts/Manager/EditorManager":9,"../Manager/ListenerManager":16,"../Manager/ReportManager":15,"../Manager/SoundManager":17,"../SDK/T2M":11,"../Manager/SyncDataManager":4,"../SDK/GameMsg":44,"../Manager/UIManager":14,"../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../Data/FrameConstValue":7,"./BaseUI":18},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../Data/FrameMsgType":36,"../../Utils/UIHelp":40,"../BindNode":22,"../../Manager/ListenerManager":16,"../../Manager/UIManager":14},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../Data/FrameMsgType":36,"../../SDK/T2M":11},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../Manager/ListenerManager":16,"../../Data/FrameMsgType":36},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../../Http/NetWork":8,"../../../../game/scripts/Manager/EditorManager":9,"../../../../game/scripts/Data/ConstValue":48,"../BaseUI":18,"../../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"../../Data/FrameMsgType":36,"../../Manager/ListenerManager":16,"../BindNode":22},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../BaseFrameUI":20,"./../../Manager/ListenerManager":16,"../../Data/FrameMsgType":36,"../../Manager/SoundManager":17,"../../SDK/T2M":11,"../../Utils/UIHelp":40,"../../../../game/scripts/Manager/EditorManager":9,"../../Manager/ReportManager":15},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"../../../../game/scripts/UI/panel/GamePanel":50,"../../../../game/scripts/Data/ConstValue":48,"../../../../game/scripts/UI/panel/TeacherPanel":1,"../BaseFrameUI":20,"../../Http/NetWork":8,"../../SDK/GameMsg":44,"../../Manager/SoundManager":17,"../../Manager/UIManager":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../../Utils/Tools":13,"../BaseFrameUI":20,"../../Utils/UIHelp":40,"./../../Manager/SoundManager":17,"../../SDK/T2M":11,"../../../../game/scripts/Data/ConstValue":48,"../../Data/FrameMsgType":36,"../../Manager/UIManager":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../BaseFrameUI":20,"../Item/Tip":25},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"./../Manager/SoundManager":17},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../../Http/NetWork":8,"../../../../game/scripts/Manager/EditorManager":9,"../../Manager/ReportManager":15,"../../Manager/ListenerManager":16,"../../Manager/SyncDataManager":4,"../../Data/FrameMsgType":36,"../../SDK/GameMsg":44,"../../Manager/SoundManager":17,"../../Manager/UIManager":14,"../../../../game/scripts/Data/ConstValue":48,"../../SDK/T2M":11,"../BaseUI":18,"../../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../../Utils/Tools":13,"../BaseFrameUI":20,"../../Utils/UIHelp":40,"../../../../game/scripts/Manager/EditorManager":9,"./../../Manager/SoundManager":17,"../../Manager/ReportManager":15,"../../../../game/scripts/Data/ConstValue":48},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{"../../Http/NetWork":8,"../../Utils/UIHelp":40,"../../../../game/scripts/Data/ConstValue":48,"../../../../game/scripts/Manager/EditorManager":9,"../BaseFrameUI":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../../SDK/T2M":11,"../../Utils/UIHelp":40,"../../Data/FrameMsgType":36,"../BaseFrameUI":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":50,"../../../game/scripts/UI/panel/TeacherPanel":1,"../Data/FrameMsgType":36,"../Manager/UIManager":14,"../Manager/ListenerManager":16,"../UI/Panel/OverTips":31,"../UI/Panel/AffirmTips":38,"../UI/Panel/SubmissionPanel":37,"../UI/Panel/ErrorPanel":12,"../UI/Panel/StarCount":35,"../UI/Panel/UploadAndReturnPanel":29,"../UI/Panel/TipUI":32},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"./BoundingBoxHelp":42},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":11},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":16,"../../Data/EventType":6,"../../../../frame/scripts/Manager/SyncDataManager":4,"../../../../frame/scripts/UI/Panel/BaseGamePanel":34},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    