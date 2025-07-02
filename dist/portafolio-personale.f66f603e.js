// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"fsZiL":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4fce20e4f66f603e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"6NrYQ":[function(require,module,exports,__globalThis) {
var _dom = require("@floating-ui/dom");
// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
// Custom Cursor Logic
const backToTopBtn = document.querySelector('.back-to-top-btn');
const tooltip = document.querySelector('#tooltip');
// Tooltip Logic
const elementsWithTooltip = document.querySelectorAll('[data-tooltip]');
elementsWithTooltip.forEach((element)=>{
    const reference = element;
    const tooltipText = reference.dataset.tooltip || '';
    const showTooltip = ()=>{
        if (!tooltip) return;
        tooltip.textContent = tooltipText;
        tooltip.classList.add('visible');
        (0, _dom.computePosition)(reference, tooltip, {
            placement: 'top',
            middleware: [
                (0, _dom.offset)(8),
                (0, _dom.flip)(),
                (0, _dom.shift)({
                    padding: 5
                })
            ]
        }).then(({ x, y })=>{
            Object.assign(tooltip.style, {
                left: `${x}px`,
                top: `${y}px`
            });
        });
    };
    const hideTooltip = ()=>{
        if (tooltip) tooltip.classList.remove('visible');
    };
    reference.addEventListener('mouseenter', showTooltip);
    reference.addEventListener('mouseleave', hideTooltip);
    reference.addEventListener('focus', showTooltip);
    reference.addEventListener('blur', hideTooltip);
});
// Back to Top Button Logic
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 300) backToTopBtn?.classList.add('visible');
    else backToTopBtn?.classList.remove('visible');
});
backToTopBtn?.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('#home')?.scrollIntoView({
        behavior: 'smooth'
    });
});
// Mobile Navigation Toggle
function toggleMobileMenu() {
    // Only toggle mobile menu on devices with width <= 1024px
    if (window.innerWidth <= 1024) {
        hamburger?.classList.toggle('active');
        navMenu?.classList.toggle('active');
        // Prevent body scroll when menu is open
        if (navMenu?.classList.contains('active')) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }
}
function closeMobileMenu() {
    // Only close mobile menu on devices where it might be active
    if (window.innerWidth <= 1024) {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
hamburger?.addEventListener('click', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
});
// Add touch support for mobile devices
hamburger?.addEventListener('touchstart', (e)=>{
    e.preventDefault();
    e.stopPropagation();
}, {
    passive: false
});
hamburger?.addEventListener('touchend', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
}, {
    passive: false
});
// Close mobile menu when clicking on a link
navLinks.forEach((link)=>{
    link.addEventListener('click', closeMobileMenu);
    // Add touch support for navigation links
    link.addEventListener('touchend', (e)=>{
        // Small delay to ensure smooth transition
        setTimeout(closeMobileMenu, 100);
    }, {
        passive: true
    });
});
// Close mobile menu when clicking outside
document.addEventListener('click', (e)=>{
    const target = e.target;
    if (window.innerWidth <= 1024 && navMenu?.classList.contains('active') && !navMenu.contains(target) && !hamburger?.contains(target)) closeMobileMenu();
});
// Close mobile menu when touching outside (mobile)
document.addEventListener('touchstart', (e)=>{
    const target = e.target;
    if (window.innerWidth <= 1024 && navMenu?.classList.contains('active') && !navMenu.contains(target) && !hamburger?.contains(target)) closeMobileMenu();
}, {
    passive: true
});
// Handle window resize
window.addEventListener('resize', ()=>{
    if (window.innerWidth > 1024) {
        closeMobileMenu();
        // Ensure navbar is in correct state for desktop
        document.body.style.overflow = 'auto';
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});
// Handle escape key to close mobile menu
document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && window.innerWidth <= 1024 && navMenu?.classList.contains('active')) closeMobileMenu();
});
// Prevent scrolling on mobile when menu is open
let startY = 0;
document.addEventListener('touchstart', (e)=>{
    if (window.innerWidth <= 1024 && navMenu?.classList.contains('active')) startY = e.touches[0].clientY;
}, {
    passive: true
});
document.addEventListener('touchmove', (e)=>{
    if (window.innerWidth <= 1024 && navMenu?.classList.contains('active')) {
        const target = e.target;
        if (!navMenu.contains(target)) e.preventDefault();
    }
}, {
    passive: false
});
// Navbar Background on Scroll
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 100) navbar?.classList.add('scrolled');
    else navbar?.classList.remove('scrolled');
});
// Active Navigation Link Highlighting
window.addEventListener('scroll', ()=>{
    const scrollY = window.scrollY;
    let currentSectionId = "";
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop - 85; // Offset per l'altezza della navbar + buffer
        if (scrollY >= sectionTop) currentSectionId = section.getAttribute('id') || "";
    });
    // Gestisce il caso in cui si arriva in fondo alla pagina
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) currentSectionId = lastSection.getAttribute('id') || "";
    }
    navLinks.forEach((link)=>{
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) link.classList.add('active');
    });
});
// Animated Counter for Stats
function animateCounter(element, target, duration = 2000, suffix = '') {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(()=>{
        start += increment;
        if (start >= target) {
            element.textContent = target.toString() + suffix;
            clearInterval(timer);
        } else element.textContent = Math.floor(start).toString() + suffix;
    }, 16);
}
// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Text animation for section headers
            if (entry.target.classList.contains('section-header')) {
                const spans = entry.target.querySelectorAll('h2 span, p span');
                spans.forEach((span, index)=>{
                    span.style.transitionDelay = `${index * 0.03}s`;
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0) scale(1)';
                });
            }
            // Animate counters when stats section is visible
            if (entry.target.classList.contains('stats')) {
                const statNumbers = entry.target.querySelectorAll('.stat h4');
                statNumbers.forEach((stat)=>{
                    const target = parseInt(stat.dataset.target || '0');
                    const suffix = stat.dataset.suffix || '';
                    if (!isNaN(target)) animateCounter(stat, target, 2000, suffix);
                });
                // Unobserve the stats section after animation to prevent re-triggering
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) age--;
    return age;
}
// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            if (element) element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
function initInteractiveParticles(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    const mouse = {
        x: width / 2,
        y: height / 2
    };
    canvas.addEventListener('mousemove', (event)=>{
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });
    canvas.addEventListener('mouseleave', ()=>{
        mouse.x = width / 2;
        mouse.y = height / 2;
    });
    window.addEventListener('resize', ()=>{
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
    });
    class Particle {
        constructor(){
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() * 2 - 1) * 0.5;
            this.speedY = (Math.random() * 2 - 1) * 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            // Interazione con il mouse
            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                this.x += dx / distance * 2;
                this.y += dy / distance * 2;
            }
            // Mantieni le particelle all'interno dei bordi con un margine
            const margin = 10;
            if (this.x < margin) {
                this.x = margin;
                this.speedX = Math.abs(this.speedX);
            }
            if (this.x > width - margin) {
                this.x = width - margin;
                this.speedX = -Math.abs(this.speedX);
            }
            if (this.y < margin) {
                this.y = margin;
                this.speedY = Math.abs(this.speedY);
            }
            if (this.y > height - margin) {
                this.y = height - margin;
                this.speedY = -Math.abs(this.speedY);
            }
        }
        draw() {
            if (!ctx) return;
            ctx.fillStyle = 'rgba(237, 242, 244, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    let particlesArray = [];
    function initParticles() {
        particlesArray = [];
        const numberOfParticles = 80;
        for(let i = 0; i < numberOfParticles; i++)particlesArray.push(new Particle());
    }
    initParticles();
    function handleParticles() {
        for(let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            particlesArray[i].draw();
            for(let j = i; j < particlesArray.length; j++){
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    if (!ctx) return;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(248, 112, 96, ${1 - distance / 100})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        handleParticles();
        requestAnimationFrame(animate);
    }
    animate();
}
function initPlexusAnimation(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let points = [];
    let snake = [];
    let snakeTarget = 0;
    const easing = 0.05; // Fattore di easing per un movimento più fluido
    const setup = ()=>{
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        points = [];
        const pointCount = Math.floor(canvas.width * canvas.height / 9000); // Leggermente meno punti
        for(let i = 0; i < pointCount; i++)points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            impactRadius: 0,
            impactOpacity: 0
        });
        snake = [
            {
                x: canvas.width / 2,
                y: canvas.height / 2
            }
        ];
        for(let i = 1; i < 15; i++)snake.push({
            x: snake[0].x,
            y: snake[0].y
        });
        findNewTarget();
    };
    const findNewTarget = ()=>{
        let newTarget;
        do newTarget = Math.floor(Math.random() * points.length);
        while (newTarget === snakeTarget);
        snakeTarget = newTarget;
    };
    const updateSnake = ()=>{
        if (points.length === 0 || !points[snakeTarget]) return;
        const target = points[snakeTarget];
        const head = snake[0];
        const dx = target.x - head.x;
        const dy = target.y - head.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 10) {
            // "Colpito" il target: crea effetto impatto
            points[snakeTarget].impactRadius = 15;
            points[snakeTarget].impactOpacity = 1;
            findNewTarget();
        } else {
            // Muovi la testa con easing
            head.x += dx * easing;
            head.y += dy * easing;
        }
        // La coda segue la testa
        for(let i = 1; i < snake.length; i++){
            const leader = snake[i - 1];
            const segment = snake[i];
            const segDx = leader.x - segment.x;
            const segDy = leader.y - segment.y;
            segment.x += segDx * 0.5; // La coda segue in modo più "morbido"
            segment.y += segDy * 0.5;
        }
    };
    const draw = ()=>{
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Disegna e aggiorna i punti e gli impatti
        points.forEach((p)=>{
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            ctx.beginPath();
            ctx.fillStyle = 'rgba(248, 112, 96, 0.8)';
            ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
            ctx.fill();
            // Disegna l'effetto impatto
            if (p.impactRadius > 0) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(248, 112, 96, ${p.impactOpacity})`;
                ctx.lineWidth = 2;
                ctx.arc(p.x, p.y, p.impactRadius, 0, Math.PI * 2);
                ctx.stroke();
                p.impactRadius += 0.5; // L'onda si espande
                p.impactOpacity -= 0.02; // E svanisce
                if (p.impactOpacity <= 0) {
                    p.impactRadius = 0;
                    p.impactOpacity = 0;
                }
            }
        });
        // Disegna le connessioni tra punti (plexus)
        for(let i = 0; i < points.length; i++)for(let j = i + 1; j < points.length; j++){
            const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
            if (dist < 100) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[j].x, points[j].y);
                ctx.lineWidth = (1 - dist / 100) * 0.4;
                ctx.strokeStyle = 'rgba(248, 112, 96, 0.2)';
                ctx.stroke();
            }
        }
        updateSnake();
        // Disegna il proiettile (serpente)
        for(let i = 0; i < snake.length; i++){
            const segment = snake[i];
            const opacity = 1 - i / snake.length * 0.8;
            const size = 5 - i / snake.length * 4; // La coda si restringe
            ctx.beginPath();
            ctx.fillStyle = `rgba(248, 112, 96, ${opacity})`;
            ctx.arc(segment.x, segment.y, Math.max(1, size), 0, Math.PI * 2);
            ctx.fill();
        }
        // Disegna un alone attorno al punto target
        if (points[snakeTarget]) {
            const target = points[snakeTarget];
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(248, 112, 96, 0.5)';
            ctx.lineWidth = 1;
            ctx.arc(target.x, target.y, 10, 0, Math.PI * 2);
            ctx.stroke();
        }
        requestAnimationFrame(draw);
    };
    let animationFrameId = null;
    const projectsSection = document.getElementById('projects');
    const plexusObserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                if (!animationFrameId) {
                    setup();
                    animationFrameId = requestAnimationFrame(draw);
                }
            } else if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        });
    }, {
        threshold: 0.1
    });
    if (projectsSection) plexusObserver.observe(projectsSection);
    window.addEventListener('resize', setup);
}
function initTechArt() {
    const container = document.getElementById('tech-art-container');
    if (!container) return;
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let width = container.clientWidth;
    let height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;
    const particles = [];
    const particleCount = Math.min(Math.floor(width / 20), 30);
    const maxDistance = 100;
    class TechParticle {
        constructor(){
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            // Mantieni le particelle all'interno dei bordi con un margine
            const margin = 5;
            if (this.x < margin) {
                this.x = margin;
                this.speedX = Math.abs(this.speedX);
            }
            if (this.x > width - margin) {
                this.x = width - margin;
                this.speedX = -Math.abs(this.speedX);
            }
            if (this.y < margin) {
                this.y = margin;
                this.speedY = Math.abs(this.speedY);
            }
            if (this.y > height - margin) {
                this.y = height - margin;
                this.speedY = -Math.abs(this.speedY);
            }
        }
        draw() {
            if (!ctx) return;
            ctx.fillStyle = '#F87060';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function initParticles() {
        particles.length = 0;
        for(let i = 0; i < particleCount; i++)particles.push(new TechParticle());
    }
    function handleParticles() {
        if (!ctx) return;
        for(let i = 0; i < particles.length; i++){
            particles[i].update();
            particles[i].draw();
            for(let j = i + 1; j < particles.length; j++){
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(248, 112, 96, ${1 - distance / maxDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        handleParticles();
        requestAnimationFrame(animate);
    }
    window.addEventListener('resize', ()=>{
        width = container.clientWidth;
        height = container.clientHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    });
    initParticles();
    animate();
}
function initSubtleBackground() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const dots = [];
    const dotCount = Math.floor(width * height / 15000); // Densità molto bassa
    // Inizializza i punti fluttuanti
    for(let i = 0; i < dotCount; i++)dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2
    });
    function draw() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        dots.forEach((dot)=>{
            // Aggiorna posizione
            dot.x += dot.speedX;
            dot.y += dot.speedY;
            // Rimbalzo sui bordi
            if (dot.x < 0 || dot.x > width) dot.speedX *= -1;
            if (dot.y < 0 || dot.y > height) dot.speedY *= -1;
            // Effetto pulsazione
            dot.pulsePhase += dot.pulseSpeed;
            const pulseOpacity = dot.opacity * (0.5 + 0.5 * Math.sin(dot.pulsePhase));
            // Disegna il punto con gradiente
            const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.size * 3);
            gradient.addColorStop(0, `rgba(248, 112, 96, ${pulseOpacity})`);
            gradient.addColorStop(1, 'rgba(248, 112, 96, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size * 3, 0, Math.PI * 2);
            ctx.fill();
        });
        // Disegna connessioni sottili tra punti vicini
        ctx.strokeStyle = 'rgba(248, 112, 96, 0.1)';
        ctx.lineWidth = 0.5;
        for(let i = 0; i < dots.length; i++)for(let j = i + 1; j < dots.length; j++){
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
                const opacity = (1 - distance / 150) * 0.1;
                ctx.strokeStyle = `rgba(248, 112, 96, ${opacity})`;
                ctx.beginPath();
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.stroke();
            }
        }
        requestAnimationFrame(draw);
    }
    window.addEventListener('resize', ()=>{
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        // Ricalcola il numero di punti in base alla nuova dimensione
        const newDotCount = Math.floor(width * height / 15000);
        while(dots.length > newDotCount)dots.pop();
        while(dots.length < newDotCount)dots.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: (Math.random() - 0.5) * 0.2,
            opacity: Math.random() * 0.3 + 0.1,
            pulseSpeed: Math.random() * 0.02 + 0.01,
            pulsePhase: Math.random() * Math.PI * 2
        });
    });
    draw();
}
function initTypingAnimation() {
    const nameSpan = document.querySelector('.hero-text h1 .highlight');
    if (nameSpan?.textContent) {
        const textToType = nameSpan.textContent;
        nameSpan.textContent = '';
        setTimeout(()=>{
            if (nameSpan) typeWriter(nameSpan, textToType, 100);
        }, 1000);
    }
}
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    hamburger?.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        navMenu?.classList.toggle('active');
    });
    // Close mobile menu when clicking on a link
    navLinks.forEach((link)=>{
        link.addEventListener('click', ()=>{
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });
}
function initNavbarActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach((link)=>{
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) link.classList.add('active');
    });
}
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 100) navbar?.classList.add('scrolled');
        else navbar?.classList.remove('scrolled');
    });
}
function initScrollToTop() {
    const backToTopBtn = document.getElementById('scrollToTopBtn');
    if (!backToTopBtn) return;
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 300) backToTopBtn.classList.add('visible');
        else backToTopBtn.classList.remove('visible');
    });
    backToTopBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
function initTooltips() {
    const tooltipItems = document.querySelectorAll('[data-tooltip]');
    const tooltip = document.getElementById('tooltip');
    if (tooltip && tooltipItems.length > 0) tooltipItems.forEach((item)=>{
        const reference = item;
        const tooltipText = reference.dataset.tooltip || '';
        const showTooltip = ()=>{
            tooltip.textContent = tooltipText;
            tooltip.classList.add('visible');
            (0, _dom.computePosition)(reference, tooltip, {
                placement: 'top',
                middleware: [
                    (0, _dom.offset)(8),
                    (0, _dom.flip)(),
                    (0, _dom.shift)({
                        padding: 5
                    })
                ]
            }).then(({ x, y })=>{
                Object.assign(tooltip.style, {
                    left: `${x}px`,
                    top: `${y}px`
                });
            });
        };
        const hideTooltip = ()=>{
            tooltip.classList.remove('visible');
        };
        reference.addEventListener('mouseenter', showTooltip);
        reference.addEventListener('mouseleave', hideTooltip);
        reference.addEventListener('focus', showTooltip);
        reference.addEventListener('blur', hideTooltip);
    });
}
function initKeyboardAnimation() {
// La logica per l'animazione della tastiera va qui se necessaria
}
function initStatsCounters() {
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                if (entry.target.matches('.stats')) {
                    const statNumbers = entry.target.querySelectorAll('.stat h4');
                    statNumbers.forEach((stat)=>{
                        const target = parseInt(stat.dataset.target || '0', 10);
                        const suffix = stat.dataset.suffix || '';
                        animateCounter(stat, target, 2000, suffix);
                    });
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: 0.1
    });
    const statsEl = document.querySelector('.stats');
    if (statsEl) observer.observe(statsEl);
}
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) entry.target.classList.add('animate');
        });
    }, {
        threshold: 0.1
    });
    timelineItems.forEach((item)=>{
        timelineObserver.observe(item);
    });
}
function initAboutBackground() {
    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;
    // Crea il canvas per le forme geometriche animate
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '1';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.6';
    aboutSection.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = aboutSection.offsetWidth;
    let height = aboutSection.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    const shapes = [];
    const shapeCount = 8;
    // Inizializza le forme
    for(let i = 0; i < shapeCount; i++)shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 40 + 20,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        type: [
            'circle',
            'triangle',
            'square'
        ][Math.floor(Math.random() * 3)],
        opacity: Math.random() * 0.3 + 0.1
    });
    function drawShape(shape) {
        if (!ctx) return;
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.globalAlpha = shape.opacity;
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
        gradient.addColorStop(0, 'rgba(248, 112, 96, 0.3)');
        gradient.addColorStop(1, 'rgba(248, 112, 96, 0)');
        ctx.fillStyle = gradient;
        ctx.strokeStyle = 'rgba(248, 112, 96, 0.2)';
        ctx.lineWidth = 1;
        switch(shape.type){
            case 'circle':
                ctx.beginPath();
                ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                break;
            case 'triangle':
                ctx.beginPath();
                ctx.moveTo(0, -shape.size / 2);
                ctx.lineTo(-shape.size / 2, shape.size / 2);
                ctx.lineTo(shape.size / 2, shape.size / 2);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                break;
            case 'square':
                ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
                ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
                break;
        }
        ctx.restore();
    }
    function updateShapes() {
        shapes.forEach((shape)=>{
            shape.x += shape.speedX;
            shape.y += shape.speedY;
            shape.rotation += shape.rotationSpeed;
            // Rimbalzo sui bordi
            if (shape.x < -shape.size || shape.x > width + shape.size) shape.speedX *= -1;
            if (shape.y < -shape.size || shape.y > height + shape.size) shape.speedY *= -1;
            // Mantieni le forme all'interno dell'area
            shape.x = Math.max(-shape.size / 2, Math.min(width + shape.size / 2, shape.x));
            shape.y = Math.max(-shape.size / 2, Math.min(height + shape.size / 2, shape.y));
        });
    }
    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        updateShapes();
        shapes.forEach(drawShape);
        requestAnimationFrame(animate);
    }
    // Gestisci il ridimensionamento
    const resizeObserver = new ResizeObserver(()=>{
        width = aboutSection.offsetWidth;
        height = aboutSection.offsetHeight;
        canvas.width = width;
        canvas.height = height;
    });
    resizeObserver.observe(aboutSection);
    // Avvia l'animazione solo quando la sezione è visibile
    const intersectionObserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) animate();
        });
    }, {
        threshold: 0.1
    });
    intersectionObserver.observe(aboutSection);
}
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.profile-photo-container, .timeline-container');
    if (parallaxElements.length === 0) return;
    const handleScroll = ()=>{
        const scrollY = window.scrollY;
        parallaxElements.forEach((el)=>{
            const element = el;
            const speed = parseFloat(element.dataset.parallaxSpeed || '0.1');
            const offset = scrollY * speed;
            element.style.transform = `translateY(${offset}px)`;
        });
    };
    window.addEventListener('scroll', handleScroll, {
        passive: true
    });
}
/**
 * Initializes a neural network animation on a canvas.
 */ function initNeuralNetworkBackground() {
    const canvas = document.getElementById('neural-network-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const mouse = {
        x: 0,
        y: 0
    };
    window.addEventListener('mousemove', (e)=>{
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    let nodes;
    const resizeCanvas = ()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        nodes = [];
        const nodeCount = window.innerWidth < 768 ? 40 : 80;
        for(let i = 0; i < nodeCount; i++)nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            baseRadius: Math.random() * 1.5 + 1,
            pulseAngle: Math.random() * Math.PI
        });
    };
    const draw = ()=>{
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        nodes.forEach((node)=>{
            node.x += node.vx;
            node.y += node.vy;
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            node.pulseAngle += 0.02;
            const pulseFactor = (Math.sin(node.pulseAngle) + 1) / 2;
            const currentRadius = node.baseRadius + pulseFactor * 1.5;
            ctx.beginPath();
            ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + pulseFactor * 0.4})`;
            ctx.fill();
        });
        for(let i = 0; i < nodes.length; i++)for(let j = i + 1; j < nodes.length; j++){
            const dist = Math.sqrt(Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2));
            const distToMouse = Math.min(Math.sqrt(Math.pow(nodes[i].x - mouse.x, 2) + Math.pow(nodes[i].y - mouse.y, 2)), Math.sqrt(Math.pow(nodes[j].x - mouse.x, 2) + Math.pow(nodes[j].y - mouse.y, 2)));
            if (dist < 150) {
                let opacity = (1 - dist / 150) * 0.5;
                if (distToMouse < 100) opacity = Math.min(1, opacity + (1 - distToMouse / 100) * 0.8);
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    };
    const animate = ()=>{
        draw();
        requestAnimationFrame(animate);
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}
/**
 * Initializes a data flow animation on a canvas.
 */ function initDataFlowBackground() {
    const canvas = document.getElementById('data-flow-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let particles;
    const resizeCanvas = ()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        const particleCount = 300;
        for(let i = 0; i < particleCount; i++)particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 1 + 0.2,
            size: Math.random() * 1.5 + 1,
            length: Math.random() * 15 + 5,
            opacity: Math.random() * 0.4 + 0.1
        });
    };
    const draw = ()=>{
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p)=>{
            p.y -= p.speed;
            if (p.y < -p.length) {
                p.y = canvas.height;
                p.x = Math.random() * canvas.width;
            }
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x, p.y - p.length);
            ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.lineWidth = p.size;
            ctx.stroke();
        });
    };
    const animate = ()=>{
        draw();
        requestAnimationFrame(animate);
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}
// Main initialization
document.addEventListener('DOMContentLoaded', ()=>{
    // Staggered fall-in animation for keyboard keys
    const keys = document.querySelectorAll('.key');
    keys.forEach((key, index)=>{
        key.style.animationDelay = `${index * 0.05}s`;
    });
    // Page-specific initializations
    if (document.getElementById('neural-network-canvas')) initNeuralNetworkBackground();
    if (document.getElementById('data-flow-canvas')) initDataFlowBackground();
    initTooltips();
    initHamburgerMenu();
    initScrollToTop();
    initTimelineAnimation();
    // Funzioni comuni a tutte le pagine
    initNavbarActiveLink();
    initNavbarScroll();
    // Funzioni specifiche per pagina
    if (document.getElementById('matrix-canvas')) initSubtleBackground();
    if (document.querySelector('.keyboard')) initKeyboardAnimation();
    if (document.getElementById('tech-art-container')) initTechArt();
    const plexusCanvas = document.getElementById('plexus-canvas');
    if (plexusCanvas) initPlexusAnimation(plexusCanvas);
    if (document.querySelector('.stats')) initStatsCounters();
    if (document.querySelector('.hero-text h1 .highlight')) initTypingAnimation();
    const interactiveCanvas = document.getElementById('interactive-particles-canvas');
    if (interactiveCanvas) initInteractiveParticles(interactiveCanvas);
    if (document.querySelector('.timeline')) initTimelineAnimation();
    if (document.querySelector('.about')) initAboutBackground();
    initParallaxEffect(); // Inizializza l'effetto parallasse
    // Calculate and set age for the stat counter
    const ageStatElement = document.getElementById('age-stat');
    if (ageStatElement) {
        const birthDate = new Date(2005, 6, 6); // 06/07/2005 (mese è 0-indexed)
        const age = calculateAge(birthDate);
        ageStatElement.dataset.target = age.toString();
    }
    // Calcolo Età per il testo
    const ageText = document.getElementById('age-text');
    if (ageText) {
        const birthDate = new Date('2005-07-06'); // 06/07/2005
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) age--;
        ageText.innerText = age.toString();
    }
    const animateElements = document.querySelectorAll('.about-content, .stats, .contact-content, .section-header');
    animateElements.forEach((el)=>observer.observe(el));
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card)=>{
        card.addEventListener('mouseenter', ()=>{
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        card.addEventListener('mouseleave', ()=>{
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    // Skills cards animation
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index)=>{
        card.style.animationDelay = `${index * 0.1}s`;
        // Add hover effect
        card.addEventListener('mouseenter', ()=>{
            card.style.transform = 'translateY(-15px) rotateY(5deg)';
        });
        card.addEventListener('mouseleave', ()=>{
            card.style.transform = 'translateY(0) rotateY(0deg)';
        });
    });
    // Update GitHub chart image source to prevent caching
    if (window.location.pathname.endsWith('projects.html')) {
        const chart = document.getElementById('github-chart');
        if (chart) {
            // Append a timestamp to the image URL to bypass the cache
            const baseUrl = chart.src.split('?')[0];
            chart.src = `${baseUrl}?t=${new Date().getTime()}`;
        }
    }
});
// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        background: rgba(16, 37, 66, 0.95) !important;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1) !important;
    }
    
    .animate {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-card, .project-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .skill-card.animate, .project-card.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .nav-link.active {
        color: #F87060 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

},{"@floating-ui/dom":"9ipqt"}],"9ipqt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOverflowAncestors", ()=>(0, _dom.getOverflowAncestors));
parcelHelpers.export(exports, "arrow", ()=>arrow);
parcelHelpers.export(exports, "autoPlacement", ()=>autoPlacement);
parcelHelpers.export(exports, "autoUpdate", ()=>autoUpdate);
parcelHelpers.export(exports, "computePosition", ()=>computePosition);
parcelHelpers.export(exports, "detectOverflow", ()=>detectOverflow);
parcelHelpers.export(exports, "flip", ()=>flip);
parcelHelpers.export(exports, "hide", ()=>hide);
parcelHelpers.export(exports, "inline", ()=>inline);
parcelHelpers.export(exports, "limitShift", ()=>limitShift);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "platform", ()=>platform);
parcelHelpers.export(exports, "shift", ()=>shift);
parcelHelpers.export(exports, "size", ()=>size);
var _core = require("@floating-ui/core");
var _utils = require("@floating-ui/utils");
var _dom = require("@floating-ui/utils/dom");
function getCssDimensions(element) {
    const css = (0, _dom.getComputedStyle)(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, _dom.isHTMLElement)(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = (0, _utils.round)(width) !== offsetWidth || (0, _utils.round)(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, _dom.isElement)(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, _dom.isHTMLElement)(domElement)) return (0, _utils.createCoords)(1);
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? (0, _utils.round)(rect.width) : rect.width) / width;
    let y = ($ ? (0, _utils.round)(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) x = 1;
    if (!y || !Number.isFinite(y)) y = 1;
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ (0, _utils.createCoords)(0);
function getVisualOffsets(element) {
    const win = (0, _dom.getWindow)(element);
    if (!(0, _dom.isWebKit)() || !win.visualViewport) return noOffsets;
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) isFixed = false;
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, _dom.getWindow)(element)) return false;
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = (0, _utils.createCoords)(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, _dom.isElement)(offsetParent)) scale = getScale(offsetParent);
        } else scale = getScale(element);
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, _utils.createCoords)(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, _dom.getWindow)(domElement);
        const offsetWin = offsetParent && (0, _dom.isElement)(offsetParent) ? (0, _dom.getWindow)(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, _dom.getFrameElement)(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, _dom.getComputedStyle)(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, _dom.getWindow)(currentIFrame);
            currentIFrame = (0, _dom.getFrameElement)(currentWin);
        }
    }
    return (0, _core.rectToClientRect)({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, _dom.getNodeScroll)(element).scrollLeft;
    if (!rect) return getBoundingClientRect((0, _dom.getDocumentElement)(element)).left + leftScroll;
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
    if (ignoreScrollbarX === void 0) ignoreScrollbarX = false;
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect));
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, _dom.getDocumentElement)(offsetParent);
    const topLayer = elements ? (0, _dom.isTopLayer)(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) return rect;
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = (0, _utils.createCoords)(1);
    const offsets = (0, _utils.createCoords)(0);
    const isOffsetParentAnElement = (0, _dom.isHTMLElement)(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _dom.getNodeName)(offsetParent) !== 'body' || (0, _dom.isOverflowElement)(documentElement)) scroll = (0, _dom.getNodeScroll)(offsetParent);
        if ((0, _dom.isHTMLElement)(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : (0, _utils.createCoords)(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, _dom.getDocumentElement)(element);
    const scroll = (0, _dom.getNodeScroll)(element);
    const body = element.ownerDocument.body;
    const width = (0, _utils.max)(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = (0, _utils.max)(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, _dom.getComputedStyle)(body).direction === 'rtl') x += (0, _utils.max)(html.clientWidth, body.clientWidth) - width;
    return {
        width,
        height,
        x,
        y
    };
}
function getViewportRect(element, strategy) {
    const win = (0, _dom.getWindow)(element);
    const html = (0, _dom.getDocumentElement)(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, _dom.isWebKit)();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width,
        height,
        x,
        y
    };
}
const absoluteOrFixed = /*#__PURE__*/ new Set([
    'absolute',
    'fixed'
]);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, _dom.isHTMLElement)(element) ? getScale(element) : (0, _utils.createCoords)(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') rect = getViewportRect(element, strategy);
    else if (clippingAncestor === 'document') rect = getDocumentRect((0, _dom.getDocumentElement)(element));
    else if ((0, _dom.isElement)(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return (0, _core.rectToClientRect)(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, _dom.getParentNode)(element);
    if (parentNode === stopNode || !(0, _dom.isElement)(parentNode) || (0, _dom.isLastTraversableNode)(parentNode)) return false;
    return (0, _dom.getComputedStyle)(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) return cachedResult;
    let result = (0, _dom.getOverflowAncestors)(element, [], false).filter((el)=>(0, _dom.isElement)(el) && (0, _dom.getNodeName)(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, _dom.getComputedStyle)(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, _dom.getParentNode)(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, _dom.isElement)(currentNode) && !(0, _dom.isLastTraversableNode)(currentNode)){
        const computedStyle = (0, _dom.getComputedStyle)(currentNode);
        const currentNodeIsContaining = (0, _dom.isContainingBlock)(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') currentContainingBlockComputedStyle = null;
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0, _dom.isOverflowElement)(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) // Drop non-containing blocks.
        result = result.filter((ancestor)=>ancestor !== currentNode);
        else // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
        currentNode = (0, _dom.getParentNode)(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, _dom.isTopLayer)(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = (0, _utils.max)(rect.top, accRect.top);
        accRect.right = (0, _utils.min)(rect.right, accRect.right);
        accRect.bottom = (0, _utils.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _utils.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, _dom.isHTMLElement)(offsetParent);
    const documentElement = (0, _dom.getDocumentElement)(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = (0, _utils.createCoords)(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _dom.getNodeName)(offsetParent) !== 'body' || (0, _dom.isOverflowElement)(documentElement)) scroll = (0, _dom.getNodeScroll)(offsetParent);
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) setLeftRTLScrollbarOffset();
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) setLeftRTLScrollbarOffset();
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, _utils.createCoords)(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, _dom.getComputedStyle)(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, _dom.isHTMLElement)(element) || (0, _dom.getComputedStyle)(element).position === 'fixed') return null;
    if (polyfill) return polyfill(element);
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, _dom.getDocumentElement)(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, _dom.getWindow)(element);
    if ((0, _dom.isTopLayer)(element)) return win;
    if (!(0, _dom.isHTMLElement)(element)) {
        let svgOffsetParent = (0, _dom.getParentNode)(element);
        while(svgOffsetParent && !(0, _dom.isLastTraversableNode)(svgOffsetParent)){
            if ((0, _dom.isElement)(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
            svgOffsetParent = (0, _dom.getParentNode)(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, _dom.isTableElement)(offsetParent) && isStaticPositioned(offsetParent))offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    if (offsetParent && (0, _dom.isLastTraversableNode)(offsetParent) && isStaticPositioned(offsetParent) && !(0, _dom.isContainingBlock)(offsetParent)) return win;
    return offsetParent || (0, _dom.getContainingBlock)(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, _dom.getComputedStyle)(element).direction === 'rtl';
}
const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: (0, _dom.getDocumentElement),
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: (0, _dom.isElement),
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, _dom.getDocumentElement)(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) skip = false;
        if (threshold === void 0) threshold = 1;
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) onMove();
        if (!width || !height) return;
        const insetTop = (0, _utils.floor)(top);
        const insetRight = (0, _utils.floor)(root.clientWidth - (left + width));
        const insetBottom = (0, _utils.floor)(root.clientHeight - (top + height));
        const insetLeft = (0, _utils.floor)(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: (0, _utils.max)(0, (0, _utils.min)(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) return refresh();
                if (!ratio) // If the reference is clipped, the ratio is 0. Throttle the refresh
                // to prevent an infinite loop of updates.
                timeoutId = setTimeout(()=>{
                    refresh(false, 1e-7);
                }, 1000);
                else refresh(false, ratio);
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) // It's possible that even though the ratio is reported as 1, the
            // element is not actually fully within the IntersectionObserver's root
            // area anymore. This can happen under performance constraints. This may
            // be a bug in the browser's IntersectionObserver implementation. To
            // work around this, we compare the element's bounding rect now with
            // what it was at the time we created the IntersectionObserver. If they
            // are not equal then the element moved, so we refresh.
            refresh();
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) options = {};
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, _dom.getOverflowAncestors)(referenceEl) : [],
        ...(0, _dom.getOverflowAncestors)(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) frameLoop();
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) cancelAnimationFrame(frameId);
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow = (0, _core.detectOverflow);
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = (0, _core.offset);
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = (0, _core.autoPlacement);
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = (0, _core.shift);
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = (0, _core.flip);
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = (0, _core.size);
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = (0, _core.hide);
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (0, _core.arrow);
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = (0, _core.inline);
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = (0, _core.limitShift);
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return (0, _core.computePosition)(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};

},{"@floating-ui/core":"9Yzy9","@floating-ui/utils":"jY82y","@floating-ui/utils/dom":"Dh21b","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9Yzy9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rectToClientRect", ()=>(0, _utils.rectToClientRect));
parcelHelpers.export(exports, "arrow", ()=>arrow);
parcelHelpers.export(exports, "autoPlacement", ()=>autoPlacement);
parcelHelpers.export(exports, "computePosition", ()=>computePosition);
parcelHelpers.export(exports, "detectOverflow", ()=>detectOverflow);
parcelHelpers.export(exports, "flip", ()=>flip);
parcelHelpers.export(exports, "hide", ()=>hide);
parcelHelpers.export(exports, "inline", ()=>inline);
parcelHelpers.export(exports, "limitShift", ()=>limitShift);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "shift", ()=>shift);
parcelHelpers.export(exports, "size", ()=>size);
var _utils = require("@floating-ui/utils");
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = (0, _utils.getSideAxis)(placement);
    const alignmentAxis = (0, _utils.getAlignmentAxis)(placement);
    const alignLength = (0, _utils.getAxisLength)(alignmentAxis);
    const side = (0, _utils.getSide)(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch((0, _utils.getAlignment)(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < validMiddleware.length; i++){
        const { name, fn } = validMiddleware[i];
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) statefulPlacement = reset.placement;
                if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
                    reference,
                    floating,
                    strategy
                }) : reset.rects;
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) options = {};
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = (0, _utils.evaluate)(options, state);
    const paddingObject = (0, _utils.getPaddingObject)(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0, _utils.rectToClientRect)(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = (0, _utils.rectToClientRect)(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = (0, _utils.evaluate)(options, state) || {};
            if (element == null) return {};
            const paddingObject = (0, _utils.getPaddingObject)(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, _utils.getAlignmentAxis)(placement);
            const length = (0, _utils.getAxisLength)(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = (0, _utils.min)(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = (0, _utils.min)(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, _utils.clamp)(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, _utils.getAlignment)(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>(0, _utils.getAlignment)(placement) === alignment),
        ...allowedPlacements.filter((placement)=>(0, _utils.getAlignment)(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>(0, _utils.getSide)(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) return (0, _utils.getAlignment)(placement) === alignment || (autoAlignment ? (0, _utils.getOppositeAlignmentPlacement)(placement) !== placement : false);
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = (0, _utils.placements), autoAlignment = true, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === (0, _utils.placements) ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) return {};
            const alignmentSides = (0, _utils.getAlignmentSides)(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) return {
                reset: {
                    placement: placements$1[0]
                }
            };
            const currentOverflows = [
                overflow[(0, _utils.getSide)(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) return {
                data: {
                    index: currentIndex + 1,
                    overflows: allOverflows
                },
                reset: {
                    placement: nextPlacement
                }
            };
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = (0, _utils.getAlignment)(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                (0, _utils.getAlignment)(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) return {
                data: {
                    index: currentIndex + 1,
                    overflows: allOverflows
                },
                reset: {
                    placement: resetPlacement
                }
            };
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
            const side = (0, _utils.getSide)(placement);
            const initialSideAxis = (0, _utils.getSideAxis)(initialPlacement);
            const isBasePlacement = (0, _utils.getSide)(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                (0, _utils.getOppositePlacement)(initialPlacement)
            ] : (0, _utils.getExpandedPlacements)(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...(0, _utils.getOppositeAxisPlacements)(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) overflows.push(overflow[side]);
            if (checkCrossAxis) {
                const sides = (0, _utils.getAlignmentSides)(placement, rects, rtl);
                overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) {
                    const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== (0, _utils.getSideAxis)(nextPlacement) : false;
                    if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
                    // overflows the main axis.
                    overflowsData.every((d)=>d.overflows[0] > 0 && (0, _utils.getSideAxis)(d.placement) === initialSideAxis)) // Try next placement and re-run the lifecycle.
                    return {
                        data: {
                            index: nextIndex,
                            overflows: overflowsData
                        },
                        reset: {
                            placement: nextPlacement
                        }
                    };
                }
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) switch(fallbackStrategy){
                    case 'bestFit':
                        {
                            var _overflowsData$filter2;
                            const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                if (hasFallbackAxisSideDirection) {
                                    const currentSideAxis = (0, _utils.getSideAxis)(d.placement);
                                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                    // reading directions favoring greater width.
                                    currentSideAxis === 'y';
                                }
                                return true;
                            }).map((d)=>[
                                    d.placement,
                                    d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                            if (placement) resetPlacement = placement;
                            break;
                        }
                    case 'initialPlacement':
                        resetPlacement = initialPlacement;
                        break;
                }
                if (placement !== resetPlacement) return {
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return (0, _utils.sides).some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    return {};
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = (0, _utils.min)(...rects.map((rect)=>rect.left));
    const minY = (0, _utils.min)(...rects.map((rect)=>rect.top));
    const maxX = (0, _utils.max)(...rects.map((rect)=>rect.right));
    const maxY = (0, _utils.max)(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) groups.push([
            rect
        ]);
        else groups[groups.length - 1].push(rect);
        prevRect = rect;
    }
    return groups.map((rect)=>(0, _utils.rectToClientRect)(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = (0, _utils.evaluate)(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = (0, _utils.rectToClientRect)(getBoundingRect(nativeClientRects));
            const paddingObject = (0, _utils.getPaddingObject)(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) // Find the first rect in which the point is fully inside.
                return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ((0, _utils.getSideAxis)(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = (0, _utils.getSide)(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = (0, _utils.getSide)(placement) === 'left';
                    const maxRight = (0, _utils.max)(...clientRects.map((rect)=>rect.right));
                    const minLeft = (0, _utils.min)(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) return {
                reset: {
                    rects: resetRects
                }
            };
            return {};
        }
    };
};
const originSides = /*#__PURE__*/ new Set([
    'left',
    'top'
]);
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = (0, _utils.getSide)(placement);
    const alignment = (0, _utils.getAlignment)(placement);
    const isVertical = (0, _utils.getSideAxis)(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0, _utils.evaluate)(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) options = 0;
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const crossAxis = (0, _utils.getSideAxis)((0, _utils.getSide)(placement));
            const mainAxis = (0, _utils.getOppositeAxis)(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = (0, _utils.clamp)(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = (0, _utils.clamp)(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) options = {};
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = (0, _utils.evaluate)(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = (0, _utils.getSideAxis)(placement);
            const mainAxis = (0, _utils.getOppositeAxis)(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = (0, _utils.evaluate)(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
                else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = originSides.has((0, _utils.getSide)(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
                else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const side = (0, _utils.getSide)(placement);
            const alignment = (0, _utils.getAlignment)(placement);
            const isYAxis = (0, _utils.getSideAxis)(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = (0, _utils.min)(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = (0, _utils.min)(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) availableWidth = maximumClippingWidth;
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) availableHeight = maximumClippingHeight;
            if (noShift && !alignment) {
                const xMin = (0, _utils.max)(overflow.left, 0);
                const xMax = (0, _utils.max)(overflow.right, 0);
                const yMin = (0, _utils.max)(overflow.top, 0);
                const yMax = (0, _utils.max)(overflow.bottom, 0);
                if (isYAxis) availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, _utils.max)(overflow.left, overflow.right));
                else availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, _utils.max)(overflow.top, overflow.bottom));
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) return {
                reset: {
                    rects: true
                }
            };
            return {};
        }
    };
};

},{"@floating-ui/utils":"jY82y","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jY82y":[function(require,module,exports,__globalThis) {
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alignments", ()=>alignments);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "createCoords", ()=>createCoords);
parcelHelpers.export(exports, "evaluate", ()=>evaluate);
parcelHelpers.export(exports, "expandPaddingObject", ()=>expandPaddingObject);
parcelHelpers.export(exports, "floor", ()=>floor);
parcelHelpers.export(exports, "getAlignment", ()=>getAlignment);
parcelHelpers.export(exports, "getAlignmentAxis", ()=>getAlignmentAxis);
parcelHelpers.export(exports, "getAlignmentSides", ()=>getAlignmentSides);
parcelHelpers.export(exports, "getAxisLength", ()=>getAxisLength);
parcelHelpers.export(exports, "getExpandedPlacements", ()=>getExpandedPlacements);
parcelHelpers.export(exports, "getOppositeAlignmentPlacement", ()=>getOppositeAlignmentPlacement);
parcelHelpers.export(exports, "getOppositeAxis", ()=>getOppositeAxis);
parcelHelpers.export(exports, "getOppositeAxisPlacements", ()=>getOppositeAxisPlacements);
parcelHelpers.export(exports, "getOppositePlacement", ()=>getOppositePlacement);
parcelHelpers.export(exports, "getPaddingObject", ()=>getPaddingObject);
parcelHelpers.export(exports, "getSide", ()=>getSide);
parcelHelpers.export(exports, "getSideAxis", ()=>getSideAxis);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "rectToClientRect", ()=>rectToClientRect);
parcelHelpers.export(exports, "round", ()=>round);
parcelHelpers.export(exports, "sides", ()=>sides);
const sides = [
    'top',
    'right',
    'bottom',
    'left'
];
const alignments = [
    'start',
    'end'
];
const placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v)=>({
        x: v,
        y: v
    });
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
};
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
    return placement.split('-')[0];
}
function getAlignment(placement) {
    return placement.split('-')[1];
}
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/ new Set([
    'top',
    'bottom'
]);
function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) rtl = false;
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment)=>oppositeAlignmentMap[alignment]);
}
const lrPlacement = [
    'left',
    'right'
];
const rlPlacement = [
    'right',
    'left'
];
const tbPlacement = [
    'top',
    'bottom'
];
const btPlacement = [
    'bottom',
    'top'
];
function getSideList(side, isStart, rtl) {
    switch(side){
        case 'top':
        case 'bottom':
            if (rtl) return isStart ? rlPlacement : lrPlacement;
            return isStart ? lrPlacement : rlPlacement;
        case 'left':
        case 'right':
            return isStart ? tbPlacement : btPlacement;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
    return list;
}
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side)=>oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Dh21b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
parcelHelpers.export(exports, "getContainingBlock", ()=>getContainingBlock);
parcelHelpers.export(exports, "getDocumentElement", ()=>getDocumentElement);
parcelHelpers.export(exports, "getFrameElement", ()=>getFrameElement);
parcelHelpers.export(exports, "getNearestOverflowAncestor", ()=>getNearestOverflowAncestor);
parcelHelpers.export(exports, "getNodeName", ()=>getNodeName);
parcelHelpers.export(exports, "getNodeScroll", ()=>getNodeScroll);
parcelHelpers.export(exports, "getOverflowAncestors", ()=>getOverflowAncestors);
parcelHelpers.export(exports, "getParentNode", ()=>getParentNode);
parcelHelpers.export(exports, "getWindow", ()=>getWindow);
parcelHelpers.export(exports, "isContainingBlock", ()=>isContainingBlock);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isLastTraversableNode", ()=>isLastTraversableNode);
parcelHelpers.export(exports, "isNode", ()=>isNode);
parcelHelpers.export(exports, "isOverflowElement", ()=>isOverflowElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
parcelHelpers.export(exports, "isTableElement", ()=>isTableElement);
parcelHelpers.export(exports, "isTopLayer", ()=>isTopLayer);
parcelHelpers.export(exports, "isWebKit", ()=>isWebKit);
function hasWindow() {
    return typeof window !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) return (node.nodeName || '').toLowerCase();
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) return false;
    return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
    if (!hasWindow()) return false;
    return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
    if (!hasWindow()) return false;
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') return false;
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/ new Set([
    'inline',
    'contents'
]);
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/ new Set([
    'table',
    'td',
    'th'
]);
function isTableElement(element) {
    return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [
    ':popover-open',
    ':modal'
];
function isTopLayer(element) {
    return topLayerSelectors.some((selector)=>{
        try {
            return element.matches(selector);
        } catch (_e) {
            return false;
        }
    });
}
const transformProperties = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective'
];
const willChangeValues = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
    'filter'
];
const containValues = [
    'paint',
    'layout',
    'strict',
    'content'
];
function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return transformProperties.some((value)=>css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some((value)=>(css.willChange || '').includes(value)) || containValues.some((value)=>(css.contain || '').includes(value));
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) return currentNode;
        else if (isTopLayer(currentNode)) return null;
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/ new Set([
    'html',
    'body',
    '#document'
]);
function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') return node;
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) return node.ownerDocument ? node.ownerDocument.body : node.body;
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) list = [];
    if (traverseIframes === void 0) traverseIframes = true;
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["fsZiL","6NrYQ"], "6NrYQ", "parcelRequire2ffc", {})

//# sourceMappingURL=portafolio-personale.f66f603e.js.map
