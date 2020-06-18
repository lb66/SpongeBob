// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"paint.js":[function(require,module,exports) {
var string = ".face * {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\nbody{\n  background-color: rgba(250,225,35,1);\n}\n\n.nose{\n  border: 5px solid black ;\n  position: relative;\n  left: 50%;\n  top:220px;\n  height: 120px;\n  width: 80px;\n  margin-left: -40px;\n  border-radius: 50%;\n  background-color: rgba(250,225,35,1);\n  z-index: 100;\n\n  transform-origin: bottom ;\n  animation: wave 1s infinite linear;\n}\n.nose::after{\n  position: absolute;\n  content: '';\n  top: 55%;\n  left: 50%;\n  margin-left: -30px;\n  background-color: rgba(250,225,35,1);\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n.eye{\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  border: 5px solid black;\n  border-radius: 50%;\n  top:100px;\n  left:50%;\n  margin-left: -100px;\n  background-color: white; \n}\n.eye.left{\n  transform: translateX(-100px);\n  \n}\n.eye.right{\n  transform: translateX(100px);\n}\n.eye::after{\n  position: absolute;\n  content: '';\n  width: 30px;\n  height: 30px;\n  background:black;\n  border-radius: 50%;\n  left: 50%;\n  margin-left: -14px;\n  top:81px\n}\n.eye::before{\n  position: absolute;\n  content: '';\n  width: 60px;\n  height: 60px;\n  background-color:#0099ff;\n  border: 4px solid black;\n  border-radius: 50%;\n  left: 50%;\n  margin-left: -34px;\n  top:62px\n}\n.eyelash{\n  position: absolute;\n  top: -50px;\n  left: 90px;\n  height: 50px;\n  width: 10px;\n  background-color: #000;\n}\n.eyelash::before{\n  content: '';\n  position: absolute;\n  height: 50px;\n  width: 10px;\n  background-color: #000;\n  transform: translateX(-60px) rotate(-30deg) translateY(10px);\n}\n.eyelash::after{\n  content: '';\n  position: absolute;\n  height: 50px;\n  width: 10px;\n  background-color: #000;\n  transform: translateX(60px) rotate(30deg) translateY(10px);\n}\n.blush-group{\n  position: relative;\n  min-height:186px ;\n}\n.blush{\n  position: absolute;\n  border: 5px solid red;\n  border-radius: 50%;\n  background-color: rgba(250,225,35,1);\n  width: 90px;\n  height: 90px;\n  left: 50%;\n  margin-left: -45px;\n  top: 120px;\n}\n.blush.left{\n  transform: translateX(-165px);\n}\n.blush.right{\n  transform: translateX(165px);\n}\n.blush.left::after{\n  content: '';\n  position: absolute;\n  background-color: rgba(250,225,35,1) ;\n  border-radius: 50%;\n  width: 75px;\n  height: 75px;\n  top:40px;\n  transform: translateX(8px);\n}\n.blush.right::after{\n  content: '';\n  position: absolute;\n  background-color: rgba(250,225,35,1) ;\n  border-radius: 50%;\n  width: 75px;\n  height: 75px;\n  top:40px;\n  transform: translateX(-5px);\n  }\n.freckle{\n  position: absolute;\n  background-color: red;\n  width:10px;\n  height: 10px;\n  border-radius: 50%;\n  left: 50%;\n  margin-left: -5px;\n  top:160px;\n}\n.freckle.left{\n  transform: translateX(-165px);\n}\n.freckle.right{\n  transform: translateX(165px);\n}\n.freckle.left::before{\n  content: '';\n  position: absolute;\n  background-color: red;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  top: -16px;\n  right: 22px;\n}\n.freckle.left::after{\n  content: '';\n  position: absolute;\n  background-color: red;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  top: -25px;\n  left: 8px;\n}\n.freckle.right::before{\n  content: '';\n  position: absolute;\n  background-color: red;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  top: -25px;\n  right: 8px;\n}\n.freckle.right::after{\n  content: '';\n  position: absolute;\n  background-color: red;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  top: -16px;\n  left: 22px;\n}\n.mouth-group{\n  position: relative;\n  min-height:220px ;\n  overflow: hidden;\n}\n.lip-up{\n  position: absolute;\n  border: 5px solid black;\n  width: 440px;\n  height: 170px;\n  border-radius: 50%/0 0 160px 160px;\n  border-color: transparent transparent black transparent;\n  top: -100px;\n  left: 50%;\n  margin-left: -220px;\n  background-color: rgba(250,225,35,1) ;\n  z-index: 99;\n}\n.lip-up::before{\n  content: '';\n  position: absolute;\n  border: 5px solid black;\n  width: 25px;\n  height: 25px;\n  border-color: transparent black transparent transparent;\n  transform: translateX(22px) translateY(78px) rotate(55deg);\n}\n.lip-up::after{\n  content: '';\n  position: absolute;\n  border: 5px solid black;\n  border-radius: 5%;\n  width: 25px;\n  height: 25px;\n  border-color: transparent black transparent transparent;\n  transform: translateX(354px) translateY(103px) rotate(-60deg);\n}\n.lip-down{\n  position: absolute;\n  border: 5px solid black;\n  width: 336px;\n  height: 180px;\n  border-radius: 50%/0 0 175px 175px;\n  border-color: transparent black black black;\n  top: 12px;\n  left: 50%;\n  margin-left: -168px;\n  background-color: saddlebrown;\n  overflow: hidden;\n}\n.lip-down::before{\n  position: absolute;\n  content: '';\n  border: 5px solid black;\n  border-radius: 50%;\n  width: 90px;\n  height: 90px;\n  background-color: pink;\n  left: 25%;\n  top:120px;\n}\n.lip-down::after{\n  position: absolute;\n  content: '';\n  border: 5px solid black;\n  border-radius: 50%;\n  width: 90px;\n  height: 90px;\n  background-color: pink;\n  left: 45%;\n  top:120px;\n  border-color: transparent transparent black black;\n  transform: rotate(160deg);\n}\n.tooth{\n  position: absolute;\n  border: 5px solid black;\n  background-color: white;\n  width: 50px;\n  height: 45px;\n  left: 50%;\n  margin-left: -25px;\n  top:68px\n}\n.tooth.left{\n  transform: rotate(8deg) translateX(-40px);\n}\n.tooth.right{\n  transform: rotate(-8deg) translateX(40px);\n}\n@keyframes wave{\n  0%{\n    transform: rotate(0deg);\n  }\n  50%{\n    transform: rotate(15deg);\n  }\n  100%{\n    transform: rotate(0deg);\n  }\n}\n";
var words = document.querySelector('#words');
var type = document.querySelector('#type');
var n = 1;

var run = function run() {
  n += 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  words.innerText = string.substr(0, n);
  type.innerHTML = string.substr(0, n);
  words.scrollTop = 99999; //每次都滚到底
};

var time = 50;

var start = function start() {
  id = setInterval(run, time);
};

var stop = function stop() {
  window.clearInterval(id);
};

start();
pause.onclick = stop;

play.onclick = function () {
  stop();
  start();
};

slow.onclick = function () {
  stop();
  time = 100;
  start();
};

normal.onclick = function () {
  stop();
  time = 30;
  start();
};

fast.onclick = function () {
  stop();
  time = 0;
  start();
};
},{}],"C:/Users/86178/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57637" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/86178/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","paint.js"], null)
//# sourceMappingURL=/paint.28064e34.js.map