(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "891d9e4dc9d797933abc";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "widgets/SprintrFeedbackWidget/" + chunkId + ".SprintrFeedback.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/SprintrFeedback.tsx")(__webpack_require__.s = "./src/SprintrFeedback.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, widgetName, version, description, copyright, author, engines, config, packagePath, scripts, license, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"sprintrFeedback\",\"widgetName\":\"SprintrFeedback\",\"version\":\"10.2.0\",\"description\":\"Mendix Feedback Widget\",\"copyright\":\"© Mendix Technology BV 2023. All rights reserved.\",\"author\":\"End User Experience Team\",\"engines\":{\"node\":\">=12\"},\"config\":{\"mendixHost\":\"http://localhost:8080\",\"developmentPort\":\"3000\"},\"packagePath\":\"SprintrFeedbackWidget\",\"scripts\":{\"start\":\"pluggable-widgets-tools start:server --open\",\"dev\":\"pluggable-widgets-tools start:web\",\"build\":\"pluggable-widgets-tools build:web\",\"lint\":\"pluggable-widgets-tools lint\",\"lint:fix\":\"pluggable-widgets-tools lint:fix\",\"test\":\"pluggable-widgets-tools test:unit:web --coverage\",\"prerelease\":\"npm run lint\",\"release\":\"pluggable-widgets-tools release:web\",\"postinstall\":\"patch-package\",\"e2e:local\":\"LOCAL=true npx playwright test\",\"e2e:ci\":\"npx playwright test\"},\"license\":\"Mendix EULA\",\"devDependencies\":{\"@mendix/pluggable-widgets-tools\":\"^8.14.0\",\"@mendix/piw-utils-internal\":\"file:/./dependencies/mendix-piw-utils-internal-1.0.0.tgz\",\"@playwright/test\":\"^1.25.0\",\"@prettier/plugin-xml\":\"2.1.0\",\"@testing-library/dom\":\"^8.17.1\",\"@testing-library/jest-dom\":\"^5.16.5\",\"@testing-library/react\":\"^12.1.2\",\"@testing-library/user-event\":\"^13.5.0\",\"@types/big.js\":\"^4.0.5\",\"@types/classnames\":\"^2.2.4\",\"@types/enzyme\":\"^3.10.8\",\"@types/enzyme-adapter-react-16\":\"^1.0.6\",\"@types/jasmine\":\"^3.6.9\",\"@types/jest\":\"^26.0.22\",\"@types/jwt-decode\":\"^2.2.1\",\"@types/react\":\"~16.9.0\",\"@types/react-dom\":\"~16.9.0\",\"classnames\":\"^2.2.6\",\"mendix-client\":\"^7.15.8\",\"patch-package\":\"^6.4.7\",\"sass\":\"^1.50.1\"},\"dependencies\":{\"@types/node\":\"^17.0.41\",\"html2canvas\":\"^1.4.1\",\"jwt-decode\":\"^2.2.0\",\"webpack-copy-plugin\":\"0.0.4\",\"webpack-merge\":\"^5.8.0\"}}");

/***/ }),

/***/ "./src/SprintrFeedback.tsx":
/*!*********************************!*\
  !*** ./src/SprintrFeedback.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SprintrFeedback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _components_FeedbackRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FeedbackRoot */ "./src/components/FeedbackRoot.tsx");



function SprintrFeedback(_a) {
    var className = _a.class, tabIndex = _a.tabIndex, allowScreenshot = _a.allowScreenshot, scrollableAreaSelector = _a.scrollableAreaSelector, foreignObjectRendering = _a.foreignObjectRendering, sprintrapp = _a.sprintrapp, submitSuccessImgUrl = _a.submitSuccessImgUrl, submitFailedImgUrl = _a.submitFailedImgUrl, userInfoEntityDS = _a.userInfoEntityDS, displayNameAttribute = _a.displayNameAttribute, emailAddressAttribute = _a.emailAddressAttribute, overrideFeedbackServerLocation = _a.overrideFeedbackServerLocation, translation_Feedback = _a.translation_Feedback, translation_Modal_Title = _a.translation_Modal_Title, translation_Modal_Introduction_Text = _a.translation_Modal_Introduction_Text, translation_Close = _a.translation_Close, translation_Cancel = _a.translation_Cancel, translation_Clear = _a.translation_Clear, translation_Submit = _a.translation_Submit, translation_Email_Address = _a.translation_Email_Address, translation_Email_Description_Placeholder = _a.translation_Email_Description_Placeholder, translation_Subject = _a.translation_Subject, translation_Description = _a.translation_Description, translation_Description_Placeholder = _a.translation_Description_Placeholder, translation_Attachment = _a.translation_Attachment, translation_Done = _a.translation_Done, translation_Enter_screenshot_mode = _a.translation_Enter_screenshot_mode, translation_Upload_from_computer = _a.translation_Upload_from_computer, translation_File_Size = _a.translation_File_Size, translation_Summarize_feedback_item = _a.translation_Summarize_feedback_item, translation_Add_as_many_details_as_you_can = _a.translation_Add_as_many_details_as_you_can, translation_Use_Screenshot_mode_to_take_a_snapshot = _a.translation_Use_Screenshot_mode_to_take_a_snapshot, translation_Your_email_address_is_optional = _a.translation_Your_email_address_is_optional, translation_Include_a_screenshot_of_the_current_page = _a.translation_Include_a_screenshot_of_the_current_page, translation_Screenshots_have_been_disabled_for_the_feedback_mode = _a.translation_Screenshots_have_been_disabled_for_the_feedback_mode, translation_Take_screenshot = _a.translation_Take_screenshot, translation_Screenshot_Image_Alt_Text = _a.translation_Screenshot_Image_Alt_Text, translation_Annotate = _a.translation_Annotate, translation_Error = _a.translation_Error, translation_Sending_feedback = _a.translation_Sending_feedback, translation_Outro_Title = _a.translation_Outro_Title, translation_Outro_Paragraph = _a.translation_Outro_Paragraph, translation_Error_creating_a_screenshot = _a.translation_Error_creating_a_screenshot, translation_Submit_Feedback_Error_Title = _a.translation_Submit_Feedback_Error_Title, translation_Submit_Feedback_Error_Message = _a.translation_Submit_Feedback_Error_Message, translation_Field_Required = _a.translation_Field_Required, translation_Description_Error = _a.translation_Description_Error, translation_Email_Invalid = _a.translation_Email_Invalid;
    var translation = {
        Feedback: translation_Feedback === null || translation_Feedback === void 0 ? void 0 : translation_Feedback.value,
        Modal_Title: translation_Modal_Title === null || translation_Modal_Title === void 0 ? void 0 : translation_Modal_Title.value,
        Modal_Introduction_Text: translation_Modal_Introduction_Text === null || translation_Modal_Introduction_Text === void 0 ? void 0 : translation_Modal_Introduction_Text.value,
        Close: translation_Close === null || translation_Close === void 0 ? void 0 : translation_Close.value,
        Cancel: translation_Cancel === null || translation_Cancel === void 0 ? void 0 : translation_Cancel.value,
        Clear: translation_Clear === null || translation_Clear === void 0 ? void 0 : translation_Clear.value,
        Submit: translation_Submit === null || translation_Submit === void 0 ? void 0 : translation_Submit.value,
        Email_Address: translation_Email_Address === null || translation_Email_Address === void 0 ? void 0 : translation_Email_Address.value,
        Email_Address_Placeholder: translation_Email_Description_Placeholder === null || translation_Email_Description_Placeholder === void 0 ? void 0 : translation_Email_Description_Placeholder.value,
        Email_Invalid: translation_Email_Invalid === null || translation_Email_Invalid === void 0 ? void 0 : translation_Email_Invalid.value,
        Subject: translation_Subject === null || translation_Subject === void 0 ? void 0 : translation_Subject.value,
        Description: translation_Description === null || translation_Description === void 0 ? void 0 : translation_Description.value,
        Description_Placeholder: translation_Description_Placeholder === null || translation_Description_Placeholder === void 0 ? void 0 : translation_Description_Placeholder.value,
        Description_Error: translation_Description_Error === null || translation_Description_Error === void 0 ? void 0 : translation_Description_Error.value,
        Attachment: translation_Attachment === null || translation_Attachment === void 0 ? void 0 : translation_Attachment.value,
        Done: translation_Done === null || translation_Done === void 0 ? void 0 : translation_Done.value,
        Enter_screenshot_mode: translation_Enter_screenshot_mode === null || translation_Enter_screenshot_mode === void 0 ? void 0 : translation_Enter_screenshot_mode.value,
        Upload_from_computer: translation_Upload_from_computer === null || translation_Upload_from_computer === void 0 ? void 0 : translation_Upload_from_computer.value,
        FileSize: translation_File_Size === null || translation_File_Size === void 0 ? void 0 : translation_File_Size.value,
        Summarize_Feedback_Item: translation_Summarize_feedback_item === null || translation_Summarize_feedback_item === void 0 ? void 0 : translation_Summarize_feedback_item.value,
        Add_as_many_details_as_you_can: translation_Add_as_many_details_as_you_can === null || translation_Add_as_many_details_as_you_can === void 0 ? void 0 : translation_Add_as_many_details_as_you_can.value,
        Use_Screenshot_mode_to_take_a_snapshot: translation_Use_Screenshot_mode_to_take_a_snapshot === null || translation_Use_Screenshot_mode_to_take_a_snapshot === void 0 ? void 0 : translation_Use_Screenshot_mode_to_take_a_snapshot.value,
        Your_email_address_is_optional: translation_Your_email_address_is_optional === null || translation_Your_email_address_is_optional === void 0 ? void 0 : translation_Your_email_address_is_optional.value,
        Include_a_screenshot_of_the_current_page: translation_Include_a_screenshot_of_the_current_page === null || translation_Include_a_screenshot_of_the_current_page === void 0 ? void 0 : translation_Include_a_screenshot_of_the_current_page.value,
        Screenshots_have_been_disabled_for_the_feedback_mode: translation_Screenshots_have_been_disabled_for_the_feedback_mode === null || translation_Screenshots_have_been_disabled_for_the_feedback_mode === void 0 ? void 0 : translation_Screenshots_have_been_disabled_for_the_feedback_mode.value,
        Take_screenshot: translation_Take_screenshot === null || translation_Take_screenshot === void 0 ? void 0 : translation_Take_screenshot.value,
        Image_Alt_Text: translation_Screenshot_Image_Alt_Text === null || translation_Screenshot_Image_Alt_Text === void 0 ? void 0 : translation_Screenshot_Image_Alt_Text.value,
        Annotate: translation_Annotate === null || translation_Annotate === void 0 ? void 0 : translation_Annotate.value,
        Sending_feedback: translation_Sending_feedback === null || translation_Sending_feedback === void 0 ? void 0 : translation_Sending_feedback.value,
        Success_Outro_Title: translation_Outro_Title === null || translation_Outro_Title === void 0 ? void 0 : translation_Outro_Title.value,
        Success_Outro_Paragraph: translation_Outro_Paragraph === null || translation_Outro_Paragraph === void 0 ? void 0 : translation_Outro_Paragraph.value,
        Error: translation_Error === null || translation_Error === void 0 ? void 0 : translation_Error.value,
        Error_creating_a_screenshot: translation_Error_creating_a_screenshot === null || translation_Error_creating_a_screenshot === void 0 ? void 0 : translation_Error_creating_a_screenshot.value,
        Submit_Feedback_Error_Title: translation_Submit_Feedback_Error_Title === null || translation_Submit_Feedback_Error_Title === void 0 ? void 0 : translation_Submit_Feedback_Error_Title.value,
        Submit_Feedback_Error_Message: translation_Submit_Feedback_Error_Message === null || translation_Submit_Feedback_Error_Message === void 0 ? void 0 : translation_Submit_Feedback_Error_Message.value,
        Required_Field: translation_Field_Required === null || translation_Field_Required === void 0 ? void 0 : translation_Field_Required.value
    };
    var feedbackServerLocation = overrideFeedbackServerLocation
        ? overrideFeedbackServerLocation
        : _config__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_FEEDBACK_SERVER_URL"];
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_FeedbackRoot__WEBPACK_IMPORTED_MODULE_2__["default"], { className: className, tabIndex: tabIndex, allowScreenshot: allowScreenshot, scrollableAreaSelector: scrollableAreaSelector, foreignObjectRendering: foreignObjectRendering, sprintrapp: sprintrapp, userInfoEntityDS: userInfoEntityDS, displayNameAttribute: displayNameAttribute, emailAddressAttribute: emailAddressAttribute, feedbackServerLocation: feedbackServerLocation, translation: translation, submitSuccessImgUrl: submitSuccessImgUrl, submitFailedImgUrl: submitFailedImgUrl }));
}


/***/ }),

/***/ "./src/components/Failed.tsx":
/*!***********************************!*\
  !*** ./src/components/Failed.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_CloseIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/CloseIcon */ "./src/resources/CloseIcon.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




var componentName = _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-failed";
var failedClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()(componentName, componentName + "__open");
var Failed = function (_a) {
    var error = _a.error, onCloseResult = _a.onCloseResult, translation = _a.translation, widgetSettings = _a.widgetSettings;
    var closeButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var closeResultRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    console.error("Feedback Widget >> " + error);
    var keyDownAction = function (e) {
        var _a, _b;
        if (e.key === "Enter" || e.key === "Escape") {
            onCloseResult();
        }
        if (e.key === "Tab") {
            if (e.shiftKey) {
                if (e.target === closeButtonRef.current) {
                    e.preventDefault();
                    (_a = closeResultRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }
            else {
                if (e.target === closeResultRef.current) {
                    e.preventDefault();
                    (_b = closeButtonRef.current) === null || _b === void 0 ? void 0 : _b.focus();
                }
            }
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        document.addEventListener("keydown", keyDownAction);
        return function () {
            document.removeEventListener("keydown", keyDownAction);
        };
    }, []);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(failedClass, _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-dialog") },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { ref: closeButtonRef, className: _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-close-button", onClick: onCloseResult, "aria-label": "Close button" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_resources_CloseIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { className: _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-close-button__icon" })),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", { className: _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-dialog__title" }, translation.Submit_Feedback_Error_Title),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", { className: componentName + "__message" }, translation.Submit_Feedback_Error_Message),
        widgetSettings.submitFailedImgUrl && (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", { src: widgetSettings.submitFailedImgUrl, alt: "failed image", className: componentName + "__error-image" })),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-button-group spacing-outer-top-medium" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { ref: closeResultRef, className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("btn btn-primary", componentName + "__close-button " + _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-button"), form: "comment", type: "button", onClick: onCloseResult, "aria-label": "Close failed button", autoFocus: true }, translation.Close))));
};
/* harmony default export */ __webpack_exports__["default"] = (Failed);


/***/ }),

/***/ "./src/components/FeedbackForm.tsx":
/*!*****************************************!*\
  !*** ./src/components/FeedbackForm.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/validation */ "./src/utils/validation.ts");
/* harmony import */ var _resources_CloseIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/CloseIcon */ "./src/resources/CloseIcon.tsx");
/* harmony import */ var _resources_DeleteScreenshotIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/DeleteScreenshotIcon */ "./src/resources/DeleteScreenshotIcon.tsx");
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormGroup */ "./src/components/FormGroup.tsx");
/* harmony import */ var _resources_PreviewScreenshotIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resources/PreviewScreenshotIcon */ "./src/resources/PreviewScreenshotIcon.tsx");
/* harmony import */ var _ScreenshotButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ScreenshotButtonGroup */ "./src/components/ScreenshotButtonGroup.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useDetermineUserType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useDetermineUserType */ "./src/hooks/useDetermineUserType.ts");
/* harmony import */ var _hooks_useHandleUserEmailInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useHandleUserEmailInfo */ "./src/hooks/useHandleUserEmailInfo.ts");
/* harmony import */ var _hooks_useSetCursorFocus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useSetCursorFocus */ "./src/hooks/useSetCursorFocus.ts");
/* harmony import */ var _hooks_useSubmitFeedback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useSubmitFeedback */ "./src/hooks/useSubmitFeedback.ts");
/* harmony import */ var _hooks_useUploadScreenshot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/useUploadScreenshot */ "./src/hooks/useUploadScreenshot.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};














var componentName = _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-feedback-form";
var FeedbackForm = function (_a) {
    var widgetSettings = _a.widgetSettings, formData = _a.formData, translation = _a.translation, updateFormData = _a.updateFormData, onUpdateScreenshot = _a.onUpdateScreenshot, takeScreenshot = _a.takeScreenshot, onShowLightbox = _a.onShowLightbox, showLightbox = _a.showLightbox, cancel = _a.cancel, succeeded = _a.succeeded, failed = _a.failed;
    var defaultUserData = { name: "", email: formData.email, userRoles: [] };
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultUserData), userData = _b[0], setUserData = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true), feedbackCommentValid = _c[0], setFeedbackCommentValid = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true), feedbackTitleValid = _d[0], setFeedbackTitleValid = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(formData && formData.email ? Object(_utils_validation__WEBPACK_IMPORTED_MODULE_2__["validateEmail"])(formData.email) : true), feedbackEmailValid = _e[0], setFeedbackEmailValid = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true), uploadFileValid = _f[0], setUploadFileValid = _f[1];
    var defaultShowEmail = function () {
        if (widgetSettings.userInfoEntityDS && widgetSettings.emailAddressAttribute)
            return false;
        if (formData && formData.email && feedbackEmailValid)
            return false;
        return true;
    };
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultShowEmail()), showEmail = _g[0], setShowEmail = _g[1];
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), submitInProgress = _h[0], setSubmitInProgress = _h[1];
    var formOuter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var titleInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var descriptionInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var screenshotButton = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var emailInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var title = formData.title, description = formData.description, email = formData.email, screenshot = formData.screenshot;
    var submitButton = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var firstFocusableElementForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var lastFocusableElementForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var handleUserEmailInfo = Object(_hooks_useHandleUserEmailInfo__WEBPACK_IMPORTED_MODULE_10__["useHandleUserEmailInfo"])(setFeedbackEmailValid, setUserData, userData, updateFormData, formData);
    var setCursorFocus = Object(_hooks_useSetCursorFocus__WEBPACK_IMPORTED_MODULE_11__["useSetCursorFocus"])(title, titleInput, description, descriptionInput, screenshot, screenshotButton, emailInput, email, feedbackEmailValid);
    var uploadScreenshot = Object(_hooks_useUploadScreenshot__WEBPACK_IMPORTED_MODULE_13__["useUploadScreenshot"])(_utils_validation__WEBPACK_IMPORTED_MODULE_2__["validateImage"], setUploadFileValid, onUpdateScreenshot);
    var onSubmit = Object(_hooks_useSubmitFeedback__WEBPACK_IMPORTED_MODULE_12__["useSubmitFeedback"])(setFeedbackCommentValid, setFeedbackTitleValid, setFeedbackEmailValid, showEmail, setShowEmail, titleInput, descriptionInput, emailInput, setSubmitInProgress, widgetSettings, screenshot, updateFormData, onUpdateScreenshot, succeeded, failed);
    Object(_hooks_useDetermineUserType__WEBPACK_IMPORTED_MODULE_9__["useDetermineUserType"])(setShowEmail, widgetSettings, setUserData);
    var keyDownAction = function (e) {
        var _a, _b;
        if (e.key === "Escape") {
            if (showLightbox) {
                onShowLightbox(false);
            }
            else {
                cancel();
            }
        }
        if (e.key === "Tab") {
            if (e.shiftKey) {
                if (e.target === firstFocusableElementForm.current) {
                    e.preventDefault();
                    (_a = lastFocusableElementForm.current) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }
            else {
                if (e.target === lastFocusableElementForm.current) {
                    e.preventDefault();
                    (_b = firstFocusableElementForm.current) === null || _b === void 0 ? void 0 : _b.focus();
                }
            }
        }
    };
    // If no widgetSettings.emailAddressAttribute, always show email input.
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (userData.email === "" || !widgetSettings.emailAddressAttribute) {
            setShowEmail(true);
        }
        else {
            setShowEmail(false);
        }
    }, [userData]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var _a, _b;
        var focusableElement = Array.from((_b = (_a = formOuter.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll("[tabindex]")) !== null && _b !== void 0 ? _b : []);
        firstFocusableElementForm.current = focusableElement[0];
        lastFocusableElementForm.current = focusableElement[focusableElement.length - 1];
        firstFocusableElementForm.current.focus();
    }, [firstFocusableElementForm, lastFocusableElementForm]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        document.addEventListener("keydown", keyDownAction);
        setCursorFocus();
        return function () {
            document.removeEventListener("keydown", keyDownAction);
        };
    }, []);
    var onTitleChange = function (e) {
        var title = e.target.value;
        var isValid = Object(_utils_validation__WEBPACK_IMPORTED_MODULE_2__["validateFeedbackTitle"])(title);
        if (isValid) {
            setFeedbackTitleValid(isValid);
        }
        updateFormData(__assign(__assign({}, formData), { title: title, timestamp: new Date().toString() }));
    };
    var onTitleBlur = function (e) {
        if (Object(_utils_validation__WEBPACK_IMPORTED_MODULE_2__["validateFeedbackTitle"])(e.target.value)) {
            setFeedbackTitleValid(true);
        }
    };
    var onDescriptionChange = function (e) {
        setFeedbackCommentValid(Object(_utils_validation__WEBPACK_IMPORTED_MODULE_2__["validateFeedbackComment"])(e.target.value));
        updateFormData(__assign(__assign({}, formData), { description: e.target.value, timestamp: new Date().toString() }));
    };
    var onEmailBlur = function (e) {
        var emailValid = Object(_utils_validation__WEBPACK_IMPORTED_MODULE_2__["validateEmail"])(formData.email ? formData.email : e.target.value);
        if (emailValid) {
            setFeedbackEmailValid(emailValid);
        }
    };
    var onDeleteScreenshot = function () {
        updateFormData(__assign(__assign({}, formData), { screenshot: "", timestamp: new Date().toString() }));
    };
    var onClear = function () {
        updateFormData({ title: "", description: "", email: "", screenshot: "", timestamp: "" });
        onUpdateScreenshot("");
    };
    var onSubmitFeedback = function () {
        if (submitInProgress) {
            return;
        }
        onSubmit({
            title: title,
            description: description,
            userData: userData
        });
    };
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(componentName, _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-dialog"), "data-html2canvas-ignore": "true", ref: formOuter },
        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-close-button", onClick: cancel, "aria-label": "Close button", tabIndex: 0 },
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_resources_CloseIcon__WEBPACK_IMPORTED_MODULE_3__["default"], { className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-close-button__icon" })),
        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: "mxfeedback-dialog__header" },
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", { className: "mxfeedback-dialog__title" }, translation.Modal_Title),
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", { className: "mxfeedback-dialog__body-text" }, translation.Modal_Introduction_Text)),
        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "mxfeedback_feedback_title", errorText: translation.Required_Field, labelText: translation.Subject, hasError: !feedbackTitleValid, className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "__input-text" },
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", { className: "form-control", id: "mxfeedback_feedback_title_input", ref: titleInput, type: "text", value: title, required: true, name: "feedback_title", placeholder: translation.Summarize_Feedback_Item, maxLength: _config__WEBPACK_IMPORTED_MODULE_0__["FEEDBACK_TITLE_MAX_LENGTH"], onChange: onTitleChange, onBlur: onTitleBlur, "aria-labelledby": "mxfeedback_feedback_title_label", "data-testid": "title", autoFocus: true, tabIndex: 0 })),
        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "mxfeedback_feedback_description", hasError: !feedbackCommentValid, labelText: translation.Description, tooltipText: translation.Add_as_many_details_as_you_can, errorText: translation.Description_Error, className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "__input-textarea" },
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("textarea", { className: "form-control mx-textarea-input mx-textarea-noresize", id: "mxfeedback_feedback_description_input", ref: descriptionInput, value: description, name: "feedback_description", placeholder: translation.Description_Placeholder, maxLength: _config__WEBPACK_IMPORTED_MODULE_0__["FEEDBACK_COMMENT_MAX_LENGTH"], rows: 4, cols: 50, onChange: onDescriptionChange, "aria-labelledby": "mxfeedback_feedback_description_label", "data-testid": "description", tabIndex: 0 })),
        !!widgetSettings.allowScreenshot && (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "mxfeedback_feedback_take_screenshot", hasError: !uploadFileValid, labelText: translation.Attachment, tooltipText: translation.Use_Screenshot_mode_to_take_a_snapshot, errorText: translation.FileSize },
                Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ScreenshotButtonGroup__WEBPACK_IMPORTED_MODULE_7__["default"], { takeScreenshot: takeScreenshot, translation: translation, uploadScreenshot: uploadScreenshot, ref: screenshotButton })),
            screenshot && (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-screenshot-preview" },
                    Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", { className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-screenshot-preview__image", src: screenshot, alt: translation.Image_Alt_Text }),
                    Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { onClick: function () { return onShowLightbox(true); }, className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-screenshot-preview__overlay", id: "mxfeedback_feedback_preview_overlay", tabIndex: 0 },
                        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_resources_PreviewScreenshotIcon__WEBPACK_IMPORTED_MODULE_6__["default"], { className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-screenshot-preview__preview-icon" })),
                    Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_resources_DeleteScreenshotIcon__WEBPACK_IMPORTED_MODULE_4__["default"], { className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-screenshot-preview__delete-icon", onClick: onDeleteScreenshot })))))),
        showEmail && (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "mxfeedback_feedback_email", hasError: !feedbackEmailValid, labelText: translation.Email_Address, tooltipText: translation.Your_email_address_is_optional, errorText: translation.Email_Invalid, className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "__input-text" },
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", { className: "form-control", id: "mxfeedback_feedback_email_input", ref: emailInput, type: "text", value: email, name: "comment_email", placeholder: translation.Email_Address_Placeholder, maxLength: _config__WEBPACK_IMPORTED_MODULE_0__["FEEDBACK_EMAIL_MAX_LENGTH"], onChange: handleUserEmailInfo, onBlur: onEmailBlur, "aria-labelledby": "mxfeedback_feedback_email_label", "data-testid": "email", tabIndex: 0 }))),
        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-button-group" },
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("btn mx-button btn-secondary", _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-button " + _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "__btn-text", componentName + "__cancel-button"), type: "button", onClick: cancel, tabIndex: 0 }, translation.Cancel),
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { className: "btn mx-button btn-secondary " + _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-button " + _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "__btn-bordered", type: "button", onClick: onClear, tabIndex: 0 }, translation.Clear),
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { className: "btn mx-button btn-primary " + _config__WEBPACK_IMPORTED_MODULE_0__["SCOPE_PREFIX"] + "-button", ref: submitButton, "data-testid": "submit", type: "button", disabled: submitInProgress, onClick: onSubmitFeedback, tabIndex: 0 }, submitInProgress ? "" + translation.Sending_feedback : "" + translation.Submit))));
};
/* harmony default export */ __webpack_exports__["default"] = (FeedbackForm);


/***/ }),

/***/ "./src/components/FeedbackRoot.tsx":
/*!*****************************************!*\
  !*** ./src/components/FeedbackRoot.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeedbackStage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackStage */ "./src/components/FeedbackStage.tsx");
/* harmony import */ var _Lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lightbox */ "./src/components/Lightbox.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StartButton */ "./src/components/StartButton.tsx");
/* harmony import */ var _hooks_useFormData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useFormData */ "./src/hooks/useFormData.ts");







var FeedbackRoot = function (_a) {
    var className = _a.className, tabIndex = _a.tabIndex, allowScreenshot = _a.allowScreenshot, scrollableAreaSelector = _a.scrollableAreaSelector, foreignObjectRendering = _a.foreignObjectRendering, userInfoEntityDS = _a.userInfoEntityDS, displayNameAttribute = _a.displayNameAttribute, emailAddressAttribute = _a.emailAddressAttribute, sprintrapp = _a.sprintrapp, feedbackServerLocation = _a.feedbackServerLocation, translation = _a.translation, submitSuccessImgUrl = _a.submitSuccessImgUrl, submitFailedImgUrl = _a.submitFailedImgUrl;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].NULL), stage = _b[0], setStage = _b[1];
    var _c = Object(_hooks_useFormData__WEBPACK_IMPORTED_MODULE_6__["useFormData"])(sprintrapp), formData = _c[0], setFormData = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), screenshot = _d[0], setScreenshot = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), error = _e[0], setError = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), showLightbox = _f[0], setShowLightbox = _f[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        /*
        There is an issue when a pop-up modal page is displayed in Mendix.
        The mendix modal underlying code set the modal page as `focus-capturing` element
        In that case every focus will be redirected to the `focus-capturing` element which will be mendix modal
        This behavior has conflict with Feedback modal
        To fix the issue here we remove the `focus-capturing` attribute from mendix Modal elements
        We set the original value back again on unmounting the Feedback modal
        */
        if (stage === _utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].NULL) {
            return;
        }
        var capturingElements = document.querySelectorAll("[data-focus-capturing=modal]");
        capturingElements.forEach(function (element) {
            element.removeAttribute("data-focus-capturing");
        });
        return function () {
            capturingElements.forEach(function (element) {
                element.setAttribute("data-focus-capturing", "modal");
            });
        };
    }, [stage]);
    var onUpdateScreenshot = function (screenshot) {
        setScreenshot(screenshot);
        if (screenshot) {
            setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].ANNOTATE);
        }
        else {
            setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].FORM);
        }
    };
    var onCancelAnnotationAndRemoveScreenshot = function () {
        setScreenshot("");
        setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].FORM);
    };
    var getStageName = function () {
        switch (stage) {
            case _utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].FORM:
                return "FORM";
            case _utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].SCREENSHOT:
                return "SCREENSHOT";
            case _utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].ANNOTATE:
                return "ANNOTATE";
            case _utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].RESULT:
                return "RESULT";
            case _utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].FAILED:
                return "FAILED";
            case _utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].NULL:
                return "NULL";
            default:
                return "NULL";
        }
    };
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_StartButton__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: function () { return setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].FORM); }, className: _config__WEBPACK_IMPORTED_MODULE_3__["SCOPE_PREFIX"] + "-start-button " + className, tabIndex: tabIndex, translation: translation }),
        showLightbox && (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Lightbox__WEBPACK_IMPORTED_MODULE_2__["default"], { onCloseLightbox: function () { return setShowLightbox(false); }, screenshot: formData.screenshot ? formData.screenshot : screenshot })),
        (stage === _utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].FORM || stage === _utils_enums__WEBPACK_IMPORTED_MODULE_4__["Stage"].RESULT) && (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: "mx-underlay " + _config__WEBPACK_IMPORTED_MODULE_3__["SCOPE_PREFIX"] + "-underlay", "data-html2canvas-ignore": "true" })),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_FeedbackStage__WEBPACK_IMPORTED_MODULE_1__["default"], { allowScreenshot: allowScreenshot, scrollableAreaSelector: scrollableAreaSelector, foreignObjectRendering: foreignObjectRendering, sprintrapp: sprintrapp, userInfoEntityDS: userInfoEntityDS, displayNameAttribute: displayNameAttribute, emailAddressAttribute: emailAddressAttribute, feedbackServerLocation: feedbackServerLocation, translation: translation, submitSuccessImgUrl: submitSuccessImgUrl, submitFailedImgUrl: submitFailedImgUrl, stageName: getStageName(), setStage: setStage, setScreenshot: setScreenshot, screenshot: screenshot, onCancelAnnotationAndRemoveScreenshot: onCancelAnnotationAndRemoveScreenshot, onUpdateScreenshot: onUpdateScreenshot, setShowLightbox: setShowLightbox, showLightbox: showLightbox, setError: setError, updateFormData: setFormData, formData: formData, error: error })));
};
/* harmony default export */ __webpack_exports__["default"] = (FeedbackRoot);


/***/ }),

/***/ "./src/components/FeedbackStage.tsx":
/*!******************************************!*\
  !*** ./src/components/FeedbackStage.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _annotation_AnnotationContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annotation/AnnotationContainer */ "./src/components/annotation/AnnotationContainer.tsx");
/* harmony import */ var _Failed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Failed */ "./src/components/Failed.tsx");
/* harmony import */ var _FeedbackForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeedbackForm */ "./src/components/FeedbackForm.tsx");
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Result */ "./src/components/Result.tsx");
/* harmony import */ var _ScreenshotContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScreenshotContainer */ "./src/components/ScreenshotContainer.tsx");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/enums */ "./src/utils/enums.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};







var FeedbackStage = function (_a) {
    var allowScreenshot = _a.allowScreenshot, scrollableAreaSelector = _a.scrollableAreaSelector, foreignObjectRendering = _a.foreignObjectRendering, userInfoEntityDS = _a.userInfoEntityDS, displayNameAttribute = _a.displayNameAttribute, emailAddressAttribute = _a.emailAddressAttribute, sprintrapp = _a.sprintrapp, feedbackServerLocation = _a.feedbackServerLocation, translation = _a.translation, submitSuccessImgUrl = _a.submitSuccessImgUrl, submitFailedImgUrl = _a.submitFailedImgUrl, stageName = _a.stageName, setStage = _a.setStage, setScreenshot = _a.setScreenshot, screenshot = _a.screenshot, onCancelAnnotationAndRemoveScreenshot = _a.onCancelAnnotationAndRemoveScreenshot, onUpdateScreenshot = _a.onUpdateScreenshot, setShowLightbox = _a.setShowLightbox, showLightbox = _a.showLightbox, setError = _a.setError, updateFormData = _a.updateFormData, formData = _a.formData, error = _a.error;
    var stageList = {
        FORM: (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_FeedbackForm__WEBPACK_IMPORTED_MODULE_3__["default"], { widgetSettings: {
                sprintrapp: sprintrapp,
                feedbackServerLocation: feedbackServerLocation,
                allowScreenshot: allowScreenshot,
                userInfoEntityDS: userInfoEntityDS,
                displayNameAttribute: displayNameAttribute,
                emailAddressAttribute: emailAddressAttribute
            }, formData: formData, screenshot: screenshot, translation: translation, takeScreenshot: function () { return setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_6__["Stage"].SCREENSHOT); }, updateFormData: updateFormData, onUpdateScreenshot: onUpdateScreenshot, cancel: function () { return setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_6__["Stage"].NULL); }, succeeded: function () { return setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_6__["Stage"].RESULT); }, failed: function (error) {
                setError(error);
                setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_6__["Stage"].FAILED);
            }, onShowLightbox: function () { return setShowLightbox(true); }, showLightbox: showLightbox })),
        SCREENSHOT: (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ScreenshotContainer__WEBPACK_IMPORTED_MODULE_5__["default"], { onSave: onUpdateScreenshot, onCancel: function () { return setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_6__["Stage"].FORM); }, onMinimize: function () { return setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_6__["Stage"].NULL); }, foreignObjectRendering: foreignObjectRendering, scrollableAreaSelector: scrollableAreaSelector, translation: translation })),
        ANNOTATE: (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_annotation_AnnotationContainer__WEBPACK_IMPORTED_MODULE_1__["AnnotationContainer"], { screenshot: screenshot, onSave: function (screenshot) {
                setScreenshot(screenshot);
                setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_6__["Stage"].FORM);
                updateFormData(__assign(__assign({}, formData), { screenshot: screenshot, timestamp: new Date().toString() }));
            }, onCancel: onCancelAnnotationAndRemoveScreenshot, translation: translation })),
        RESULT: (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Result__WEBPACK_IMPORTED_MODULE_4__["default"], { widgetSettings: {
                submitSuccessImgUrl: submitSuccessImgUrl
            }, onCloseResult: function () { return setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_6__["Stage"].NULL); }, translation: translation })),
        FAILED: (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Failed__WEBPACK_IMPORTED_MODULE_2__["default"], { widgetSettings: {
                submitFailedImgUrl: submitFailedImgUrl
            }, onCloseResult: function () { return setStage(_utils_enums__WEBPACK_IMPORTED_MODULE_6__["Stage"].NULL); }, translation: translation, error: error })),
        NULL: Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null)
    };
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, stageList[stageName]);
};
/* harmony default export */ __webpack_exports__["default"] = (FeedbackStage);


/***/ }),

/***/ "./src/components/FormGroup.tsx":
/*!**************************************!*\
  !*** ./src/components/FormGroup.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tooltip */ "./src/components/Tooltip.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




var FormGroup = function (_a) {
    var children = _a.children, id = _a.id, errorText = _a.errorText, labelText = _a.labelText, hasError = _a.hasError, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.tooltipText, tooltipText = _c === void 0 ? "" : _c;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("form-group no-columns", _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-form-group", className, hasError && "has-error"), "aria-label": "Feedback " + labelText },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-label-group" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", { className: "control-label " + _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-label-group__label", id: id + "_label" }, labelText),
            tooltipText && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], { tip: tooltipText })),
        children,
        hasError && (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: "alert alert-danger mx-validation-message", role: "alert" }, errorText))));
};
/* harmony default export */ __webpack_exports__["default"] = (FormGroup);


/***/ }),

/***/ "./src/components/Lightbox.tsx":
/*!*************************************!*\
  !*** ./src/components/Lightbox.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_CloseIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/CloseIcon */ "./src/resources/CloseIcon.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.ts");



var Lightbox = function (_a) {
    var onCloseLightbox = _a.onCloseLightbox, screenshot = _a.screenshot;
    var componentName = _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-lightbox";
    var keyDownAction = function (e) {
        if (e.key === "Escape") {
            e.stopPropagation();
            onCloseLightbox();
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        document.addEventListener("keydown", keyDownAction);
        return function () {
            document.removeEventListener("keydown", keyDownAction);
        };
    }, []);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: "" + componentName },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { className: _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-close-button " + _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-close-button--white", id: "mxfeedback_feedback_lightbox_close_button", onClick: onCloseLightbox, "aria-label": "Close button", autoFocus: true },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_resources_CloseIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { className: _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-close-button__icon" })),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", { src: screenshot, className: componentName + "__image" })));
};
/* harmony default export */ __webpack_exports__["default"] = (Lightbox);


/***/ }),

/***/ "./src/components/Result.tsx":
/*!***********************************!*\
  !*** ./src/components/Result.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_CloseIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/CloseIcon */ "./src/resources/CloseIcon.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




var componentName = _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-result";
var resultClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()(componentName, componentName + "__open");
var Result = function (_a) {
    var onCloseResult = _a.onCloseResult, translation = _a.translation, widgetSettings = _a.widgetSettings;
    var closeButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var closeResultRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var keyDownAction = function (e) {
        var _a, _b;
        if (e.key === "Enter" || e.key === "Escape") {
            onCloseResult();
        }
        if (e.key === "Tab") {
            if (e.shiftKey) {
                if (e.target === closeButtonRef.current) {
                    e.preventDefault();
                    (_a = closeResultRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }
            else {
                if (e.target === closeResultRef.current) {
                    e.preventDefault();
                    (_b = closeButtonRef.current) === null || _b === void 0 ? void 0 : _b.focus();
                }
            }
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        document.addEventListener("keydown", keyDownAction);
        return function () {
            document.removeEventListener("keydown", keyDownAction);
        };
    }, []);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(resultClass, _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-dialog") },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { ref: closeButtonRef, className: _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-close-button", onClick: onCloseResult, "aria-label": "Close button" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_resources_CloseIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { className: _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-close-button__icon" })),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", { "data-testid": "mxfeedback-outro-span", className: _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-dialog__title" }, translation.Success_Outro_Title),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", { className: "mxfeedback-dialog__body-text" }, translation.Success_Outro_Paragraph),
        widgetSettings.submitSuccessImgUrl && (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", { src: widgetSettings.submitSuccessImgUrl, alt: "thank you image", className: componentName + "__result-image" })),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-button-group spacing-outer-top-medium" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { ref: closeResultRef, className: "btn mx-button btn-primary " + _config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-button", form: "comment", type: "button", onClick: onCloseResult, "aria-label": "Close result button", autoFocus: true }, translation.Close))));
};
/* harmony default export */ __webpack_exports__["default"] = (Result);


/***/ }),

/***/ "./src/components/ScreenshotButtonGroup.tsx":
/*!**************************************************!*\
  !*** ./src/components/ScreenshotButtonGroup.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _resources_TakeScreenshotIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/TakeScreenshotIcon */ "./src/resources/TakeScreenshotIcon.tsx");
/* harmony import */ var _resources_UploadScreenshotIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/UploadScreenshotIcon */ "./src/resources/UploadScreenshotIcon.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





var ScreenshotButtonGroup = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
    var takeScreenshot = props.takeScreenshot, translation = props.translation, uploadScreenshot = props.uploadScreenshot;
    var uploaderInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var uploaderInputButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var feedbackFormComponentName = _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-feedback-form";
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-button-group " + _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-screenshot-button-group", _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-button-group--justify-center " + _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-button-group--row-xs") },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("btn mx-button btn-primary mxfeedback-button", _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-button", feedbackFormComponentName + "__screenshot-button"), id: "mxfeedback_feedback_take_screenshot_button", ref: ref, type: "button", onClick: takeScreenshot, "data-testid": "enter-screenshot-mode", tabIndex: 0 },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_resources_TakeScreenshotIcon__WEBPACK_IMPORTED_MODULE_2__["default"], null),
            translation.Enter_screenshot_mode),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { ref: uploaderInput, type: "file", onChange: uploadScreenshot, accept: ".gif,.jpg,.jpeg,.png", className: "hidden" }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { tabIndex: 0, className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("btn mx-button", _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-button", feedbackFormComponentName + "__upload-button"), id: "mxfeedback_feedback_upload_screenshot_button", ref: uploaderInputButton, onClick: function () { var _a; return uploaderInput && ((_a = uploaderInput.current) === null || _a === void 0 ? void 0 : _a.click()); }, name: "feedback_attachment", "data-testid": "upload-from-computer" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_resources_UploadScreenshotIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null),
            translation.Upload_from_computer)));
});
/* harmony default export */ __webpack_exports__["default"] = (ScreenshotButtonGroup);


/***/ }),

/***/ "./src/components/ScreenshotContainer.tsx":
/*!************************************************!*\
  !*** ./src/components/ScreenshotContainer.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_screenshot_imageUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/screenshot/imageUtils */ "./src/utils/screenshot/imageUtils.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_screenshot_capture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/screenshot/capture */ "./src/utils/screenshot/capture.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _resources_TakeScreenshotIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/TakeScreenshotIcon */ "./src/resources/TakeScreenshotIcon.tsx");
/* harmony import */ var _utils_screenshot_thirdPartyCapture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/screenshot/thirdPartyCapture */ "./src/utils/screenshot/thirdPartyCapture.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);







var ScreenshotContainer = function (_a) {
    var onSave = _a.onSave, onCancel = _a.onCancel, onMinimize = _a.onMinimize, scrollableAreaSelector = _a.scrollableAreaSelector, foreignObjectRendering = _a.foreignObjectRendering, translation = _a.translation;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), takingScreenshot = _b[0], setTakingScreenshot = _b[1];
    var screenshotOuter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var firstFocusableElementScreenshot = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var lastFocusableElementScreenshot = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var takeAlternateScreenshot = function () {
        Object(_utils_screenshot_thirdPartyCapture__WEBPACK_IMPORTED_MODULE_5__["default"])(scrollableAreaSelector, foreignObjectRendering)
            .then(function (screenshot) {
            onSave(screenshot);
            setTakingScreenshot(false);
        })
            .catch(function (error) {
            console.error(error);
            setTakingScreenshot(false);
            onSave("");
        });
    };
    var takeScreenshot = function () {
        if (takingScreenshot) {
            return;
        }
        setTakingScreenshot(true);
        if (Object(_utils_screenshot_capture__WEBPACK_IMPORTED_MODULE_2__["isCaptureAvailable"])()) {
            onMinimize();
            Object(_utils_screenshot_capture__WEBPACK_IMPORTED_MODULE_2__["getCaptureImage"])()
                .then(function (blob) {
                return Object(_utils_screenshot_imageUtils__WEBPACK_IMPORTED_MODULE_0__["imageToBase64"])(blob)
                    .then(function (screenshot) {
                    setTakingScreenshot(false);
                    onSave(screenshot);
                })
                    .catch(function (error) {
                    console.error(error);
                    setTakingScreenshot(false);
                    takeAlternateScreenshot();
                });
            })
                .catch(function (error) {
                console.error(error);
                setTakingScreenshot(false);
                if (error.name !== "NotAllowedError") {
                    takeAlternateScreenshot();
                }
            });
        }
        else {
            takeAlternateScreenshot();
        }
    };
    var pasteScreenshot = function () {
        if (!Object(_utils_screenshot_imageUtils__WEBPACK_IMPORTED_MODULE_0__["isClipboardAvailable"])()) {
            return;
        }
        Object(_utils_screenshot_imageUtils__WEBPACK_IMPORTED_MODULE_0__["checkClipboardPermission"])().then(function (permission) {
            if (permission === _utils_screenshot_imageUtils__WEBPACK_IMPORTED_MODULE_0__["PermissionType"].denied || permission === _utils_screenshot_imageUtils__WEBPACK_IMPORTED_MODULE_0__["PermissionType"].notSupported) {
                return;
            }
            Object(_utils_screenshot_imageUtils__WEBPACK_IMPORTED_MODULE_0__["readImageFromClipboard"])().then(function (screenshot) {
                onSave(screenshot);
                setTakingScreenshot(false);
            });
        });
    };
    var keyDownAction = function (e) {
        var _a, _b;
        if (e.key === "s" || e.key === "S") {
            takeScreenshot();
        }
        if (e.key === "v" && (e.ctrlKey || e.metaKey)) {
            pasteScreenshot();
        }
        if (e.key === "Escape") {
            onCancel();
        }
        if (e.key === "Tab") {
            if (e.target === lastFocusableElementScreenshot.current && !e.shiftKey) {
                e.preventDefault();
                (_a = firstFocusableElementScreenshot.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else if (e.target === firstFocusableElementScreenshot.current && e.shiftKey) {
                (_b = lastFocusableElementScreenshot.current) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var _a, _b;
        var focusableElement = Array.from((_b = (_a = screenshotOuter.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll("[tabindex]")) !== null && _b !== void 0 ? _b : []);
        firstFocusableElementScreenshot.current = focusableElement[0];
        lastFocusableElementScreenshot.current = focusableElement[focusableElement.length - 1];
        firstFocusableElementScreenshot.current.focus();
    }, [firstFocusableElementScreenshot, lastFocusableElementScreenshot]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        document.addEventListener("keydown", keyDownAction);
        return function () {
            document.removeEventListener("keydown", keyDownAction);
        };
    }, []);
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { ref: screenshotOuter, className: _config__WEBPACK_IMPORTED_MODULE_3__["SCOPE_PREFIX"] + "-toolbar " + _config__WEBPACK_IMPORTED_MODULE_3__["SCOPE_PREFIX"] + "-toolbar--screenshot", "data-html2canvas-ignore": "true" },
        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_3__["SCOPE_PREFIX"] + "-button-group " + _config__WEBPACK_IMPORTED_MODULE_3__["SCOPE_PREFIX"] + "-button-group--screenshot-container" },
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { tabIndex: 0, type: "button", "data-testid": "take-screenshot", onClick: takeScreenshot, title: "Click to take the screenshot", className: "btn mx-button btn-primary " + _config__WEBPACK_IMPORTED_MODULE_3__["SCOPE_PREFIX"] + "-button", autoFocus: true },
                Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_resources_TakeScreenshotIcon__WEBPACK_IMPORTED_MODULE_4__["default"], { className: _config__WEBPACK_IMPORTED_MODULE_3__["SCOPE_PREFIX"] + "-button__take-screenshot-icon" }),
                takingScreenshot ? "Taking screenshot ..." : translation.Take_screenshot),
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { tabIndex: 0, type: "button", onClick: onCancel, className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("btn mx-button btn-secondary", _config__WEBPACK_IMPORTED_MODULE_3__["SCOPE_PREFIX"] + "-button " + _config__WEBPACK_IMPORTED_MODULE_3__["SCOPE_PREFIX"] + "__btn-text") }, translation.Cancel))));
};
/* harmony default export */ __webpack_exports__["default"] = (ScreenshotContainer);


/***/ }),

/***/ "./src/components/StartButton.tsx":
/*!****************************************!*\
  !*** ./src/components/StartButton.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.ts");



var StartButton = function (_a) {
    var onClick = _a.onClick, className = _a.className, tabIndex = _a.tabIndex, translation = _a.translation;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { "data-html2canvas-ignore": "true", "data-testid": "feedback", type: "button", onClick: onClick, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_config__WEBPACK_IMPORTED_MODULE_2__["SCOPE_PREFIX"] + "-button", className), tabIndex: tabIndex }, translation.Feedback));
};
/* harmony default export */ __webpack_exports__["default"] = (StartButton);


/***/ }),

/***/ "./src/components/Tooltip.tsx":
/*!************************************!*\
  !*** ./src/components/Tooltip.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _resources_TooltipIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/TooltipIcon */ "./src/resources/TooltipIcon.tsx");



var Tooltip = function (_a) {
    var tip = _a.tip;
    var componentName = _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-tooltip";
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: "" + componentName },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_resources_TooltipIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { className: componentName + "__icon" }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", { className: componentName + "__tip" }, tip)));
};
/* harmony default export */ __webpack_exports__["default"] = (Tooltip);


/***/ }),

/***/ "./src/components/annotation/AnnotationCanvas.tsx":
/*!********************************************************!*\
  !*** ./src/components/annotation/AnnotationCanvas.tsx ***!
  \********************************************************/
/*! exports provided: AnnotationCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationCanvas", function() { return AnnotationCanvas; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");


var componentName = _config__WEBPACK_IMPORTED_MODULE_1__["SCOPE_PREFIX"] + "-annotation-canvas";
var AnnotationCanvas = function (_a) {
    var screenshot = _a.screenshot, imageSize = _a.imageSize, setImageSize = _a.setImageSize, setCursorPosition = _a.setCursorPosition, imageCanvasRef = _a.imageCanvasRef, freehandCanvasRef = _a.freehandCanvasRef;
    var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var updateCursorPosition = function () {
        if (!imageCanvasRef.current) {
            return;
        }
        // For top and left position check canvas position
        setCursorPosition({
            top: imageCanvasRef.current.offsetTop,
            left: imageCanvasRef.current.offsetLeft
        });
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (imageRef.current && imageCanvasRef.current && imageSize) {
            var context = imageCanvasRef.current.getContext("2d");
            if (!context) {
                return;
            }
            context.drawImage(imageRef.current, 0, 0, imageSize.width, imageSize.height);
            updateCursorPosition();
        }
    }, [imageSize]);
    var updateImageSize = function () {
        if (!imageRef.current) {
            return;
        }
        // If image is small we don't need to scale it down for annotation
        // For width and height check actual image size
        var resize = imageRef.current.width > window.innerWidth * 0.8;
        if (resize) {
            var ratio = (window.innerWidth * 0.8) / imageRef.current.width;
            setImageSize({
                width: imageRef.current.width * ratio,
                height: imageRef.current.height * ratio
            });
        }
        else {
            setImageSize({
                width: imageRef.current.width,
                height: imageRef.current.height
            });
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!imageRef.current || !imageCanvasRef.current) {
            return;
        }
        updateCursorPosition();
        imageCanvasRef.current.addEventListener("resize", updateCursorPosition);
        return function () {
            if (imageCanvasRef.current) {
                imageCanvasRef.current.removeEventListener("resize", updateCursorPosition);
            }
        };
    }, [imageRef.current, imageCanvasRef.current]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        window.addEventListener("resize", updateImageSize);
        return function () {
            window.removeEventListener("resize", updateImageSize);
        };
    }, []);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: componentName },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", { ref: imageRef, src: screenshot, className: "hidden", onLoad: updateImageSize }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("canvas", { className: componentName + "__canvas", ref: imageCanvasRef, width: imageSize ? imageSize.width : undefined, height: imageSize ? imageSize.height : undefined }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("canvas", { className: componentName + "__canvas", ref: freehandCanvasRef, width: imageSize ? imageSize.width : undefined, height: imageSize ? imageSize.height : undefined })));
};


/***/ }),

/***/ "./src/components/annotation/AnnotationContainer.tsx":
/*!***********************************************************!*\
  !*** ./src/components/annotation/AnnotationContainer.tsx ***!
  \***********************************************************/
/*! exports provided: AnnotationContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationContainer", function() { return AnnotationContainer; });
/* harmony import */ var _typings_annotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../typings/annotation */ "./typings/annotation.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnnotationCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationCanvas */ "./src/components/annotation/AnnotationCanvas.tsx");
/* harmony import */ var _AnnotationToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnnotationToolbar */ "./src/components/annotation/AnnotationToolbar.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _utils_annotation_bindFreehand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/annotation/bindFreehand */ "./src/utils/annotation/bindFreehand.ts");






var componentName = _config__WEBPACK_IMPORTED_MODULE_4__["SCOPE_PREFIX"] + "-annotation-frame";
var AnnotationContainer = function (_a) {
    var screenshot = _a.screenshot, onSave = _a.onSave, onCancel = _a.onCancel, translation = _a.translation;
    var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var freehandToolRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var freehandCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var imageCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), imageSize = _b[0], setImageSize = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), cursorPosition = _c[0], setCursorPosition = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_typings_annotation__WEBPACK_IMPORTED_MODULE_0__["ToolSet"].Freehand), currentTool = _d[0], setCurrentTool = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Color"].Yellow), currentColor = _e[0], setCurrentColor = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Thickness"].Three), currentThickness = _f[0], setCurrentThickness = _f[1];
    var annotationOuter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var firstFocusableElementAnnotation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var lastFocusableElementAnnotation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var detachBinder;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (freehandCanvasRef.current && cursorPosition) {
            if (detachBinder) {
                detachBinder();
            }
            detachBinder = Object(_utils_annotation_bindFreehand__WEBPACK_IMPORTED_MODULE_5__["bindFreehand"])(freehandCanvasRef.current, cursorPosition, currentThickness, currentColor);
        }
        return function () {
            if (detachBinder) {
                detachBinder();
            }
        };
    }, [currentColor, currentThickness, cursorPosition]);
    var setFreehandTool = function () {
        setCurrentTool(_typings_annotation__WEBPACK_IMPORTED_MODULE_0__["ToolSet"].Freehand);
        if (freehandCanvasRef.current) {
            Object(_utils_annotation_bindFreehand__WEBPACK_IMPORTED_MODULE_5__["bindFreehand"])(freehandCanvasRef.current, cursorPosition, currentThickness, currentColor);
        }
    };
    var onSaveClicked = function () {
        if (!imageCanvasRef.current) {
            return;
        }
        var context = imageCanvasRef.current.getContext("2d");
        if (!context) {
            return;
        }
        if (freehandCanvasRef.current) {
            context.drawImage(freehandCanvasRef.current, 0, 0);
        }
        onSave(imageCanvasRef.current.toDataURL());
    };
    var onClearClicked = function () {
        if (!freehandCanvasRef.current) {
            return;
        }
        var freehandContext = freehandCanvasRef.current.getContext("2d");
        if (!freehandContext) {
            return;
        }
        freehandContext.clearRect(0, 0, freehandCanvasRef.current.width, freehandCanvasRef.current.height);
    };
    var keyDownAction = function (e) {
        var _a, _b;
        if (e.key === "Escape") {
            onCancel();
        }
        if (e.key === "Tab") {
            if (e.target === lastFocusableElementAnnotation.current && !e.shiftKey) {
                e.preventDefault();
                (_a = firstFocusableElementAnnotation.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else if (e.target === firstFocusableElementAnnotation.current && e.shiftKey) {
                (_b = lastFocusableElementAnnotation.current) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var _a, _b;
        var focusableElement = Array.from((_b = (_a = annotationOuter.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll("[tabindex]")) !== null && _b !== void 0 ? _b : []);
        firstFocusableElementAnnotation.current = focusableElement[0];
        lastFocusableElementAnnotation.current = focusableElement[focusableElement.length - 1];
        firstFocusableElementAnnotation.current.focus();
    }, [firstFocusableElementAnnotation, lastFocusableElementAnnotation]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        document.addEventListener("keydown", keyDownAction);
        return function () {
            document.removeEventListener("keydown", keyDownAction);
        };
    }, []);
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { ref: annotationOuter, className: componentName },
        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_AnnotationToolbar__WEBPACK_IMPORTED_MODULE_3__["AnnotationToolbar"], { menuRef: menuRef, freehandToolRef: freehandToolRef, currentTool: currentTool, setFreehandTool: setFreehandTool, currentColor: currentColor, setCurrentColor: setCurrentColor, currentThickness: currentThickness, setCurrentThickness: setCurrentThickness, onClearClicked: onClearClicked, onSaveClicked: onSaveClicked, onCancel: onCancel, translation: translation }),
        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_AnnotationCanvas__WEBPACK_IMPORTED_MODULE_2__["AnnotationCanvas"], { screenshot: screenshot, imageSize: imageSize, setImageSize: setImageSize, setCursorPosition: setCursorPosition, imageCanvasRef: imageCanvasRef, freehandCanvasRef: freehandCanvasRef })));
};


/***/ }),

/***/ "./src/components/annotation/AnnotationToolbar.tsx":
/*!*********************************************************!*\
  !*** ./src/components/annotation/AnnotationToolbar.tsx ***!
  \*********************************************************/
/*! exports provided: AnnotationToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationToolbar", function() { return AnnotationToolbar; });
/* harmony import */ var _typings_annotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../typings/annotation */ "./typings/annotation.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/ArrowDownIcon */ "./src/resources/ArrowDownIcon.tsx");
/* harmony import */ var _resources_CheckIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/CheckIcon */ "./src/resources/CheckIcon.tsx");
/* harmony import */ var _resources_ClearIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/ClearIcon */ "./src/resources/ClearIcon.tsx");
/* harmony import */ var _resources_FreehandIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/FreehandIcon */ "./src/resources/FreehandIcon.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);








var toolButtonComponentName = _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button";
var componentName = _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-toolbar";
var colors = [
    { name: "midnight", color: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Color"].MidnightBlue },
    { name: "grey", color: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Color"].Grey },
    { name: "green", color: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Color"].Green },
    { name: "blue", color: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Color"].Blue },
    { name: "purple", color: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Color"].Purple },
    { name: "magenta", color: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Color"].Magenta },
    { name: "red", color: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Color"].Red },
    { name: "yellow", color: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Color"].Yellow }
];
var thickness = [
    { name: "one", width: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Thickness"].One },
    { name: "two", width: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Thickness"].Two },
    { name: "three", width: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Thickness"].Three },
    { name: "four", width: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Thickness"].Four },
    { name: "five", width: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Thickness"].Five },
    { name: "six", width: _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["Thickness"].Six }
];
var ColorButton = function (_a) {
    var colorName = _a.colorName, colorHex = _a.colorHex, setMethod = _a.setMethod, selected = _a.selected, freehandToolRef = _a.freehandToolRef, tabIndex = _a.tabIndex;
    var onSetColor = function () {
        var _a;
        setMethod(colorHex);
        (_a = freehandToolRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(toolButtonComponentName + "__color", toolButtonComponentName + "__color--" + colorName), onClick: onSetColor, tabIndex: tabIndex }, selected && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_resources_CheckIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
var ThicknessButton = function (_a) {
    var thicknessName = _a.thicknessName, width = _a.width, setMethod = _a.setMethod, selected = _a.selected, freehandToolRef = _a.freehandToolRef, tabIndex = _a.tabIndex;
    var onSetThickness = function () {
        var _a;
        setMethod(width);
        (_a = freehandToolRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-button", toolButtonComponentName + "__thickness", toolButtonComponentName + "__thickness--" + thicknessName, selected ? toolButtonComponentName + "__thickness--selected" : ""), onClick: onSetThickness, tabIndex: tabIndex }));
};
var AnnotationToolbar = function (_a) {
    var menuRef = _a.menuRef, freehandToolRef = _a.freehandToolRef, currentTool = _a.currentTool, setFreehandTool = _a.setFreehandTool, currentColor = _a.currentColor, setCurrentColor = _a.setCurrentColor, currentThickness = _a.currentThickness, setCurrentThickness = _a.setCurrentThickness, onClearClicked = _a.onClearClicked, onSaveClicked = _a.onSaveClicked, onCancel = _a.onCancel, translation = _a.translation;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), showDropdown = _b[0], setShowDropdown = _b[1];
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var onOutsideClick = function (event) {
            if (showDropdown && ref.current && !ref.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", onOutsideClick);
        return function () {
            document.removeEventListener("mousedown", onOutsideClick);
        };
    }, [showDropdown]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-toolbar " + _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-toolbar--gap-lg " + _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-toolbar--annotation", "data-html2canvas-ignore": "true", ref: menuRef },
        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-button-group " + _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-button-group--gap-md" },
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button", currentTool === _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["ToolSet"].Freehand && _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button--active"), onClick: function () {
                    setShowDropdown(!showDropdown);
                    if (currentTool === _typings_annotation__WEBPACK_IMPORTED_MODULE_0__["ToolSet"].Freehand) {
                        return;
                    }
                    setFreehandTool();
                }, ref: freehandToolRef, autoFocus: true, tabIndex: 0 },
                Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__inner" },
                    Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_resources_FreehandIcon__WEBPACK_IMPORTED_MODULE_5__["default"], { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__icon" }),
                    Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__label" }, translation.Annotate)),
                Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__dropdown" },
                    Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_resources_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__caret" }),
                    showDropdown && (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { ref: ref, className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__menu" },
                        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__list" }, colors.map(function (item) { return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorButton, { key: item.name, colorName: item.name, colorHex: item.color, setMethod: setCurrentColor, selected: currentColor === item.color, freehandToolRef: freehandToolRef, tabIndex: 0 })); })),
                        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__list " + _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__list--col-3" }, thickness.map(function (item) { return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThicknessButton, { key: item.name, thicknessName: item.name, setMethod: setCurrentThickness, width: item.width, selected: currentThickness === item.width, freehandToolRef: freehandToolRef, tabIndex: 0 })); })))))),
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button", onClick: onClearClicked, tabIndex: 0 },
                Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__inner" },
                    Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_resources_ClearIcon__WEBPACK_IMPORTED_MODULE_4__["default"], { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__icon" }),
                    Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-tool-button__label" }, translation.Clear)))),
        Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { className: _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-button-group" },
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("btn mx-button btn-secondary", _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-button " + _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "__btn-text", componentName + "__cancel-screenshot-button"), type: "button", onClick: onCancel, "data-testid": "cancel-screenshot", tabIndex: 0 }, translation.Cancel),
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", { className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("btn mx-button btn-primary", componentName + "__save-screenshot-button " + _config__WEBPACK_IMPORTED_MODULE_6__["SCOPE_PREFIX"] + "-button"), type: "button", onClick: onSaveClicked, "data-testid": "save-screenshot", tabIndex: 0 }, translation.Done))));
};


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: getBaseWebModelerUrl, STATUS, ATLAS_SCROLLABLE_AREA_SELECTOR, DEFAULT_FEEDBACK_SERVER_URL, FEEDBACK_TITLE_MAX_LENGTH, FEEDBACK_COMMENT_MAX_LENGTH, FEEDBACK_EMAIL_MAX_LENGTH, SCOPE_PREFIX, LOCAL_STORAGE_FORM_DATA_KEY, FORMDATA_DELETE_INTERVAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseWebModelerUrl", function() { return getBaseWebModelerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATLAS_SCROLLABLE_AREA_SELECTOR", function() { return ATLAS_SCROLLABLE_AREA_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FEEDBACK_SERVER_URL", function() { return DEFAULT_FEEDBACK_SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_TITLE_MAX_LENGTH", function() { return FEEDBACK_TITLE_MAX_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_COMMENT_MAX_LENGTH", function() { return FEEDBACK_COMMENT_MAX_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_EMAIL_MAX_LENGTH", function() { return FEEDBACK_EMAIL_MAX_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCOPE_PREFIX", function() { return SCOPE_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_FORM_DATA_KEY", function() { return LOCAL_STORAGE_FORM_DATA_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMDATA_DELETE_INTERVAL", function() { return FORMDATA_DELETE_INTERVAL; });
var getBaseWebModelerUrl = function (environmentName) {
    var env = environmentName ? environmentName + "." : "";
    return "https://studio." + env + "mendix.com/";
};
var STATUS;
(function (STATUS) {
    STATUS[STATUS["OK"] = 200] = "OK";
    STATUS[STATUS["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    STATUS[STATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    STATUS[STATUS["NOT_FOUND"] = 404] = "NOT_FOUND";
    STATUS[STATUS["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(STATUS || (STATUS = {}));
var ATLAS_SCROLLABLE_AREA_SELECTOR = ".mx-scrollcontainer-fixed > .mx-scrollcontainer-middle > .mx-scrollcontainer-wrapper";
var DEFAULT_FEEDBACK_SERVER_URL = "https://feedback-api.mendix.com/";
var FEEDBACK_TITLE_MAX_LENGTH = 200;
var FEEDBACK_COMMENT_MAX_LENGTH = 128000;
var FEEDBACK_EMAIL_MAX_LENGTH = 200;
var SCOPE_PREFIX = "mxfeedback";
var LOCAL_STORAGE_FORM_DATA_KEY = SCOPE_PREFIX + "-form-data";
var FORMDATA_DELETE_INTERVAL = 86400 * 31; // this value currently represents 1 month (in seconds)


/***/ }),

/***/ "./src/hooks/useDetermineUserType.ts":
/*!*******************************************!*\
  !*** ./src/hooks/useDetermineUserType.ts ***!
  \*******************************************/
/*! exports provided: useDetermineUserType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDetermineUserType", function() { return useDetermineUserType; });
/* harmony import */ var _utils_mxHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mxHelpers */ "./src/utils/mxHelpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useDetermineUserType = function (setShowEmail, widgetSettings, setUserData) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (!widgetSettings.userInfoEntityDS ||
            !widgetSettings.userInfoEntityDS.items ||
            widgetSettings.userInfoEntityDS.items.length < 1) {
            setShowEmail(true);
        }
        else if (widgetSettings.emailAddressAttribute) {
            var emailAddress = widgetSettings.emailAddressAttribute(widgetSettings.userInfoEntityDS.items[0]).value || "";
            var displayName = widgetSettings.displayNameAttribute
                ? widgetSettings.displayNameAttribute(widgetSettings.userInfoEntityDS.items[0]).value || ""
                : emailAddress;
            var userRoles = _utils_mxHelpers__WEBPACK_IMPORTED_MODULE_0__["session"].getUserRoleNames();
            setUserData({ name: displayName, email: emailAddress, userRoles: userRoles });
            // Later need to check whether email address is an empty string and toggle showEmail to true.
            setShowEmail(false);
        }
    }, [widgetSettings]);
};


/***/ }),

/***/ "./src/hooks/useFormData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useFormData.ts ***!
  \**********************************/
/*! exports provided: useFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormData", function() { return useFormData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localstorage */ "./src/utils/localstorage.ts");



var useFormData = function (sprintrapp) {
    //Use the local storage data
    var existingFormData = Object(_utils_localstorage__WEBPACK_IMPORTED_MODULE_2__["getFromLocalStorage"])(_config__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_FORM_DATA_KEY"] + "__" + sprintrapp);
    var emptyFormData = {
        title: "",
        description: "",
        email: "",
        screenshot: "",
        timestamp: ""
    };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(existingFormData ? JSON.parse(existingFormData) : emptyFormData), formData = _a[0], setFormData = _a[1];
    var shouldClearStoredFormData = function () {
        if (!formData.timestamp) {
            return false;
        }
        var now = new Date();
        var timestamp = new Date(formData.timestamp.toString()).getTime();
        var diffInSeconds = Math.round((now.getTime() - timestamp) / 1000);
        return diffInSeconds >= _config__WEBPACK_IMPORTED_MODULE_1__["FORMDATA_DELETE_INTERVAL"];
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (existingFormData && JSON.parse(existingFormData).timestamp && shouldClearStoredFormData()) {
            setFormData(emptyFormData);
        }
    }, [existingFormData, formData, setFormData, shouldClearStoredFormData]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        Object(_utils_localstorage__WEBPACK_IMPORTED_MODULE_2__["saveToLocalStorage"])(_config__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_FORM_DATA_KEY"] + "__" + sprintrapp, formData);
    }, [formData]);
    return [formData, setFormData];
};


/***/ }),

/***/ "./src/hooks/useHandleUserEmailInfo.ts":
/*!*********************************************!*\
  !*** ./src/hooks/useHandleUserEmailInfo.ts ***!
  \*********************************************/
/*! exports provided: useHandleUserEmailInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHandleUserEmailInfo", function() { return useHandleUserEmailInfo; });
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/validation */ "./src/utils/validation.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var useHandleUserEmailInfo = function (setFeedbackEmailValid, setUserData, userData, updateFormData, formData) {
    var handleUserEmailInfo = function (e) {
        var value = e.target.value.trim();
        var emailValid = Object(_utils_validation__WEBPACK_IMPORTED_MODULE_0__["validateEmail"])(value);
        if (emailValid) {
            setFeedbackEmailValid(emailValid);
        }
        setUserData(__assign(__assign({}, userData), { email: value }));
        updateFormData(__assign(__assign({}, formData), { email: value, timestamp: new Date().toString() }));
    };
    return handleUserEmailInfo;
};


/***/ }),

/***/ "./src/hooks/useSetCursorFocus.ts":
/*!****************************************!*\
  !*** ./src/hooks/useSetCursorFocus.ts ***!
  \****************************************/
/*! exports provided: useSetCursorFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetCursorFocus", function() { return useSetCursorFocus; });
var useSetCursorFocus = function (title, titleInput, description, descriptionInput, screenshot, screenshotButton, emailInput, email, feedbackEmailValid) {
    var setCursorFocus = function () {
        if (!title && titleInput.current) {
            titleInput.current.focus();
            return;
        }
        if (!description && descriptionInput.current) {
            descriptionInput.current.focus();
            return;
        }
        if (!screenshot && screenshotButton.current) {
            screenshotButton.current.focus();
            return;
        }
        if (emailInput.current && (!email || !feedbackEmailValid)) {
            emailInput.current.focus();
            return;
        }
    };
    return setCursorFocus;
};


/***/ }),

/***/ "./src/hooks/useSubmitFeedback.ts":
/*!****************************************!*\
  !*** ./src/hooks/useSubmitFeedback.ts ***!
  \****************************************/
/*! exports provided: useSubmitFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubmitFeedback", function() { return useSubmitFeedback; });
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/validation */ "./src/utils/validation.ts");
/* harmony import */ var _utils_feedbackAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/feedbackAPI */ "./src/utils/feedbackAPI.ts");


var useSubmitFeedback = function (setFeedbackCommentValid, setFeedbackTitleValid, setFeedbackEmailValid, showEmail, setShowEmail, titleInput, descriptionInput, emailInput, setSubmitInProgress, widgetSettings, screenshot, updateFormData, updateScreenshot, succeeded, failed) {
    return function (_a) {
        var title = _a.title, description = _a.description, userData = _a.userData;
        var sprintrapp = widgetSettings.sprintrapp, feedbackServerLocation = widgetSettings.feedbackServerLocation;
        var commentValid = Object(_utils_validation__WEBPACK_IMPORTED_MODULE_0__["validateFeedbackComment"])(description);
        setFeedbackCommentValid(commentValid);
        var titleValid = Object(_utils_validation__WEBPACK_IMPORTED_MODULE_0__["validateFeedbackTitle"])(title);
        setFeedbackTitleValid(titleValid);
        var emailValid = Object(_utils_validation__WEBPACK_IMPORTED_MODULE_0__["validateEmail"])(userData.email);
        setFeedbackEmailValid(emailValid);
        if (!emailValid && !showEmail) {
            setShowEmail(true);
        }
        if (!titleValid && titleInput.current) {
            titleInput.current.focus();
            return;
        }
        if (!commentValid && descriptionInput.current) {
            descriptionInput.current.focus();
            return;
        }
        if (!emailValid && emailInput.current) {
            emailInput.current.focus();
            return;
        }
        setSubmitInProgress(true);
        Object(_utils_feedbackAPI__WEBPACK_IMPORTED_MODULE_1__["callFeedbackAPI"])({
            sprintrapp: sprintrapp,
            feedbackServerLocation: feedbackServerLocation,
            screenshot: widgetSettings.allowScreenshot && screenshot ? screenshot : null,
            username: userData ? userData.name : "",
            email: userData ? userData.email : "",
            userRoles: userData ? userData.userRoles : [],
            title: title,
            description: description
        })
            .then(function (response) {
            if (response.ok) {
                updateFormData({ title: "", description: "", email: "", screenshot: "", timestamp: "" });
                updateScreenshot("");
                succeeded();
            }
            else {
                console.warn("Feedback Widget >> Failed submitting feedback with the following error: " + response.statusText);
                failed(response.statusText);
            }
            setSubmitInProgress(false);
        })
            .catch(function (error) {
            console.warn("Feedback Widget >> Failed submitting feedback with the following error: " + error);
            setSubmitInProgress(false);
            failed(error);
        });
    };
};


/***/ }),

/***/ "./src/hooks/useUploadScreenshot.ts":
/*!******************************************!*\
  !*** ./src/hooks/useUploadScreenshot.ts ***!
  \******************************************/
/*! exports provided: useUploadScreenshot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUploadScreenshot", function() { return useUploadScreenshot; });
/* harmony import */ var _utils_screenshot_imageUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/screenshot/imageUtils */ "./src/utils/screenshot/imageUtils.ts");

var useUploadScreenshot = function (validateImage, setUploadFileValid, updateScreenshot) {
    return function (e) {
        var image = validateImage(e.target.files);
        if (!image) {
            setUploadFileValid(false);
            return;
        }
        setUploadFileValid(true);
        Object(_utils_screenshot_imageUtils__WEBPACK_IMPORTED_MODULE_0__["imageToBase64"])(image)
            .then(updateScreenshot)
            .catch(function (error) { return console.error(error); });
    };
};


/***/ }),

/***/ "./src/resources/ArrowDownIcon.tsx":
/*!*****************************************!*\
  !*** ./src/resources/ArrowDownIcon.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ArrowDownIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: className, xmlns: "http://www.w3.org/2000/svg" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M3.9907 6.6554C3.77013 6.65566 3.56013 6.56093 3.41437 6.39536L0.144042 2.67803C-0.070925 2.42186 -0.0420586 2.0409 0.209075 1.82C0.460207 1.59913 0.84174 1.61913 1.06837 1.86503L3.92803 5.1157C3.94387 5.13376 3.9667 5.14413 3.9907 5.14413C4.01473 5.14413 4.03757 5.13376 4.05337 5.1157L6.91307 1.86503C7.13973 1.61913 7.52123 1.59913 7.77237 1.82C8.0235 2.0409 8.05237 2.42186 7.8374 2.67803L4.56803 6.39403C4.42203 6.56 4.21173 6.65516 3.9907 6.6554Z" })));
};
/* harmony default export */ __webpack_exports__["default"] = (ArrowDownIcon);


/***/ }),

/***/ "./src/resources/CheckIcon.tsx":
/*!*************************************!*\
  !*** ./src/resources/CheckIcon.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CheckIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: className, viewBox: "0 0 10 10", fill: "none", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M8.5 1L3.46933 8.18633C3.33468 8.37982 3.11523 8.49678 2.87953 8.50068C2.64384 8.50457 2.42064 8.39493 2.27967 8.206L1 6.5", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};
/* harmony default export */ __webpack_exports__["default"] = (CheckIcon);


/***/ }),

/***/ "./src/resources/ClearIcon.tsx":
/*!*************************************!*\
  !*** ./src/resources/ClearIcon.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ClearIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "12", y: "14", width: "2", height: "10" }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "18", y: "14", width: "2", height: "10" }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "13", y: "3", width: "6", height: "2" }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M8,7h-3v2h2V27c0,1.1,.85,2,1.89,2h14.22c1.04,0,1.89-.9,1.89-2V9h2v-2H8Zm14.99,20H9V9h14V27Z" })));
};
/* harmony default export */ __webpack_exports__["default"] = (ClearIcon);


/***/ }),

/***/ "./src/resources/CloseIcon.tsx":
/*!*************************************!*\
  !*** ./src/resources/CloseIcon.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CloseIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", { points: "27.71 5.71 26.29 4.29 16 14.59 5.71 4.29 4.29 5.71 14.59 16 4.29 26.29 5.71 27.71 16 17.41 26.29 27.71 27.71 26.29 17.41 16 27.71 5.71" })));
};
/* harmony default export */ __webpack_exports__["default"] = (CloseIcon);


/***/ }),

/***/ "./src/resources/DeleteScreenshotIcon.tsx":
/*!************************************************!*\
  !*** ./src/resources/DeleteScreenshotIcon.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DeleteScreenshotIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, onClick = _a.onClick;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", onClick: onClick },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", { strokeLinecap: "round", strokeLinejoin: "round", opacity: "0.6" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M5 8h6" }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M8 15.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M5.879 10.121L10.12 5.88M10.121 10.121L5.878 5.88" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteScreenshotIcon);


/***/ }),

/***/ "./src/resources/FreehandIcon.tsx":
/*!****************************************!*\
  !*** ./src/resources/FreehandIcon.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FreehandIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M20,28H4V6h13v-2H4c-1.1,0-2,.9-2,2V28c0,1.1,.9,2,2,2H20c1.1,0,2-.9,2-2v-10h-2v10Z" }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M28.24,6.78l.03-.32c.15-1.54-.17-2.71-.95-3.49-.77-.77-1.94-1.09-3.48-.94l-.36,.04L12.09,13.48l-1.42,6.17,6.2-1.42,9.98-10.01,1.15,1.15-4.24,4.24,1.41,1.41,4.24-4.24c.38-.38,.59-.88,.59-1.41s-.21-1.04-.59-1.41l-1.17-1.17Zm-3.85-2.77c.56-.02,1.19,.05,1.53,.39,.34,.34,.41,.97,.39,1.53l-3.26,3.27-1.92-1.92,3.27-3.27Zm-8.53,12.4l-2.53,.58,.58-2.5,5.8-5.8,1.92,1.92-5.77,5.79Z" })));
};
/* harmony default export */ __webpack_exports__["default"] = (FreehandIcon);


/***/ }),

/***/ "./src/resources/PreviewScreenshotIcon.tsx":
/*!*************************************************!*\
  !*** ./src/resources/PreviewScreenshotIcon.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PreviewScreenshotIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M28.71,27.29l-6.97-6.97c1.41-1.72,2.26-3.93,2.26-6.32,0-5.51-4.49-10-10-10S4,8.49,4,14s4.49,10,10,10c2.4,0,4.6-.85,6.32-2.26l6.97,6.97,1.41-1.41Zm-14.71-5.29c-4.41,0-8-3.59-8-8S9.59,6,14,6s8,3.59,8,8-3.59,8-8,8Z" })));
};
/* harmony default export */ __webpack_exports__["default"] = (PreviewScreenshotIcon);


/***/ }),

/***/ "./src/resources/TakeScreenshotIcon.tsx":
/*!**********************************************!*\
  !*** ./src/resources/TakeScreenshotIcon.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TakeScreenshotIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M28,8h-5.22l-.62-2.48c-.22-.89-1.02-1.52-1.94-1.52H11.78c-.92,0-1.72,.62-1.94,1.52l-.62,2.48H4c-1.1,0-2,.9-2,2V26c0,1.1,.9,2,2,2H28c1.1,0,2-.9,2-2V10c0-1.1-.9-2-2-2Zm0,18H4V10h6.78l1-4h8.44l1,4h6.78V26Z" }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M16,12c-3.31,0-6,2.69-6,6s2.64,6,6,6,6-2.69,6-6-2.75-6-6-6Zm0,10c-2.24,0-4-1.76-4-4s1.79-4,4-4,4,1.87,4,4-1.79,4-4,4Z" })));
};
/* harmony default export */ __webpack_exports__["default"] = (TakeScreenshotIcon);


/***/ }),

/***/ "./src/resources/TooltipIcon.tsx":
/*!***************************************!*\
  !*** ./src/resources/TooltipIcon.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TooltipIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M16,2c-7.72,0-14,6.28-14,14s6.28,14,14,14,14-6.28,14-14S23.72,2,16,2Zm0,26c-6.62,0-12-5.38-12-12S9.38,4,16,4s12,5.38,12,12-5.38,12-12,12Z" }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", { points: "17 13 12 13 12 15 15 15 15 22 12 22 12 24 20 24 20 22 17 22 17 13" }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", { cx: "16", cy: "9.5", r: "1.5" })));
};
/* harmony default export */ __webpack_exports__["default"] = (TooltipIcon);


/***/ }),

/***/ "./src/resources/UploadScreenshotIcon.tsx":
/*!************************************************!*\
  !*** ./src/resources/UploadScreenshotIcon.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UploadScreenshotIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M26,26H6v-4h-2v4c0,1.1,.9,2,2,2H26c1.1,0,2-.9,2-2v-4h-2v4Z" }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", { points: "15 7.41 15 22 17 22 17 7.41 22.29 12.71 23.71 11.29 16 3.59 8.29 11.29 9.71 12.71 15 7.41" })));
};
/* harmony default export */ __webpack_exports__["default"] = (UploadScreenshotIcon);


/***/ }),

/***/ "./src/utils/annotation/bindFreehand.ts":
/*!**********************************************!*\
  !*** ./src/utils/annotation/bindFreehand.ts ***!
  \**********************************************/
/*! exports provided: bindFreehand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindFreehand", function() { return bindFreehand; });
var bindFreehand = function (theCanvas, cursorPosition, currentThickness, currentColor) {
    var ongoingTouche;
    if (!theCanvas || !cursorPosition) {
        return;
    }
    var context = theCanvas.getContext("2d");
    if (!context) {
        return;
    }
    theCanvas.onmousedown = function (e) {
        if (!theCanvas) {
            return;
        }
        var left = cursorPosition.left, top = cursorPosition.top;
        context.beginPath();
        context.lineWidth = currentThickness;
        context.strokeStyle = currentColor;
        context.lineJoin = "round";
        context.lineCap = "round";
        context.moveTo(e.clientX - left, e.clientY - top);
        theCanvas.onmouseup = function () {
            if (!theCanvas) {
                return;
            }
            theCanvas.onmousemove = null;
            theCanvas.onmouseup = null;
            context.closePath();
        };
        theCanvas.onmousemove = function (e) {
            var left = cursorPosition.left, top = cursorPosition.top;
            context.lineTo(e.clientX - left, e.clientY - top);
            context.stroke();
        };
    };
    var touchMoveFired = function (e) {
        var touches = e.changedTouches;
        if (!ongoingTouche || touches.length === 0) {
            return;
        }
        var left = cursorPosition.left, top = cursorPosition.top;
        context.beginPath();
        context.moveTo(ongoingTouche.pageX - left, ongoingTouche.pageY - top);
        context.lineTo(touches[0].pageX - left, touches[0].pageY - top);
        context.stroke();
        ongoingTouche = touches[0];
    };
    var touchEndFired = function () {
        if (!theCanvas) {
            return;
        }
        theCanvas.removeEventListener("touchend", touchEndFired);
        theCanvas.removeEventListener("touchmove", touchMoveFired);
        context.closePath();
    };
    var touchStartFired = function (e) {
        theCanvas.onmousemove = null;
        theCanvas.onmouseup = null;
        var touches = e.changedTouches;
        if (touches.length === 0) {
            return;
        }
        ongoingTouche = touches[0];
        context.beginPath();
        context.lineWidth = currentThickness;
        context.strokeStyle = currentColor;
        context.lineJoin = "round";
        context.lineCap = "round";
        theCanvas.addEventListener("touchend", touchEndFired);
        theCanvas.addEventListener("touchmove", touchMoveFired, { passive: true });
    };
    theCanvas.addEventListener("touchstart", touchStartFired, { passive: true });
    var detach = function () {
        theCanvas.removeEventListener("touchstart", touchStartFired);
        theCanvas.removeEventListener("touchmove", touchMoveFired);
        theCanvas.removeEventListener("touchend", touchEndFired);
    };
    return detach;
};


/***/ }),

/***/ "./src/utils/enums.ts":
/*!****************************!*\
  !*** ./src/utils/enums.ts ***!
  \****************************/
/*! exports provided: Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return Stage; });
var Stage;
(function (Stage) {
    Stage["FORM"] = "FORM";
    Stage["SCREENSHOT"] = "SCREENSHOT";
    Stage["ANNOTATE"] = "ANNOTATE";
    Stage["RESULT"] = "RESULT";
    Stage["FAILED"] = "FAILED";
    Stage["NULL"] = "NULL";
})(Stage || (Stage = {}));


/***/ }),

/***/ "./src/utils/feedbackAPI.ts":
/*!**********************************!*\
  !*** ./src/utils/feedbackAPI.ts ***!
  \**********************************/
/*! exports provided: callFeedbackAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callFeedbackAPI", function() { return callFeedbackAPI; });
/* harmony import */ var _mxHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mxHelpers */ "./src/utils/mxHelpers.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);


var callFeedbackAPI = function (_a) {
    var sprintrapp = _a.sprintrapp, feedbackServerLocation = _a.feedbackServerLocation, screenshot = _a.screenshot, userId = _a.userId, username = _a.username, email = _a.email, userRoles = _a.userRoles, title = _a.title, description = _a.description;
    var img = screenshot ? screenshot.replace(/(data:image\/png;base64,)/, "") : "";
    var form = Object(_mxHelpers__WEBPACK_IMPORTED_MODULE_0__["getContentForm"])();
    var data = {
        title: title,
        description: description,
        issueType: "Issue",
        submitter: {
            userId: userId,
            email: email,
            displayName: username ? username : email
        },
        metadata: {
            userRoles: userRoles.join(","),
            location: window.location.href,
            form: form ? form.path : "",
            userAgent: navigator.userAgent,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height
        },
        imageAttachment: img
    };
    if (!data.submitter.userId) {
        if (!data.submitter.displayName) {
            console.warn("Feedback Widget >> Username is empty");
            return Promise.reject(new Error("username is empty."));
        }
        if (!data.submitter.email) {
            console.warn("Feedback Widget >> Email address is empty");
            return Promise.reject(new Error("email address is empty."));
        }
    }
    return window.fetch(feedbackServerLocation + "rest/v3/feedbackapi/projects/" + sprintrapp + "/issues", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            ClientIdentifier: "Feedback Widget v" + _package_json__WEBPACK_IMPORTED_MODULE_1__["version"]
        }
    });
};



/***/ }),

/***/ "./src/utils/getCursorPosition.ts":
/*!****************************************!*\
  !*** ./src/utils/getCursorPosition.ts ***!
  \****************************************/
/*! exports provided: getScroll, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScroll", function() { return getScroll; });
/**
 *
 * @param {string} selector
 * 1. user provided selector
 * 2. Atlas default scrollable area selector
 */
var getScroll = function (selector) {
    var scrollableElement = (!!selector && document.querySelector(selector)) ||
        document.documentElement ||
        document.body.parentNode ||
        document.body;
    var x = scrollableElement
        ? scrollableElement.scrollLeft
        : window.scrollX ||
            window.pageXOffset ||
            document.body.scrollLeft + ((document.documentElement && document.documentElement.scrollLeft) || 0);
    var y = scrollableElement
        ? scrollableElement.scrollTop
        : window.scrollY ||
            window.pageYOffset ||
            document.body.scrollTop + ((document.documentElement && document.documentElement.scrollTop) || 0);
    return { x: x, y: y };
};
var getCursorPosition = function (event) {
    var dotX = Math.round(event.clientX);
    var dotY = Math.round(event.clientY);
    return { dotX: dotX, dotY: dotY };
};
/* harmony default export */ __webpack_exports__["default"] = (getCursorPosition);


/***/ }),

/***/ "./src/utils/localstorage.ts":
/*!***********************************!*\
  !*** ./src/utils/localstorage.ts ***!
  \***********************************/
/*! exports provided: saveToLocalStorage, getFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveToLocalStorage", function() { return saveToLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromLocalStorage", function() { return getFromLocalStorage; });
var saveToLocalStorage = function (key, value) {
    /**
     * localstorage only accepts string values to be stored, so
     * we need all non-string values to be converted to string
     */
    var formattedValue = typeof value !== "string" ? JSON.stringify(value) : value;
    localStorage.setItem(key, formattedValue);
};
var getFromLocalStorage = function (key) {
    return localStorage.getItem(key);
};


/***/ }),

/***/ "./src/utils/mxHelpers.ts":
/*!********************************!*\
  !*** ./src/utils/mxHelpers.ts ***!
  \********************************/
/*! exports provided: getData, mxData, session, getContentForm, getDocumentId, getWebModelerUrl, getAppUrl, redirectToLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mxData", function() { return mxData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "session", function() { return session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentForm", function() { return getContentForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentId", function() { return getDocumentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWebModelerUrl", function() { return getWebModelerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppUrl", function() { return getAppUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectToLogin", function() { return redirectToLogin; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// Ported from the old version
function action(params) {
    return new Promise(function (resolve, reject) {
        window.mx.data.action({
            params: params,
            callback: function (response) {
                var outcome = response;
                if (response instanceof Array && response.length) {
                    var mxObj_1 = response[0];
                    outcome = mxObj_1.getAttributes().reduce(function (obj, attr) {
                        var _a;
                        return (__assign(__assign({}, obj), (_a = {}, _a[attr] = mxObj_1.get(attr), _a)));
                    }, {});
                }
                resolve(outcome);
            },
            error: reject
        });
    });
}
function getData(params) {
    return new Promise(function (resolve, reject) {
        if (!params) {
            return null;
        }
        window.mx.data.get(__assign(__assign({}, params), { callback: resolve, error: reject }));
    });
}
var mxData = {
    action: action,
    get: getData
};
var getUserRoleNames = function () {
    var mxSession = window.mx.session;
    if ("getUserRoleNames" in mxSession && typeof mxSession["getUserRoleNames"] == "function") {
        return mxSession.getUserRoleNames();
    }
    return [];
};
var session = {
    getUserRoleNames: getUserRoleNames
};
// mx.ui.getContentForm is an undocumented API that is intentionally remained  for feedback widget
// We use this to get the documentID, so user can go to the page directly in Studio Pro / Studio.
var getContentForm = function () {
    var mxUI = window.mx.ui;
    try {
        if (typeof mxUI !== "undefined" &&
            typeof mxUI.getContentForm === "function" &&
            typeof mxUI.getContentForm().path !== "undefined") {
            return mxUI.getContentForm();
        }
        return undefined;
    }
    catch (e) {
        return undefined;
    }
};
var getDocumentId = function () {
    var form = getContentForm();
    return form ? form.id : "";
};
var getLoginUrl = function () {
    var redirectUrl = window.location.origin + "/openid/login?continuation=" + window.location.href;
    return "https://login.mendix.com/oidp/login?ret=" + redirectUrl;
};
/**
 *
 * @param {string} sprintrId
 *
 */
var getWebModelerUrl = function (sprintrId) {
    var currentUrl = window.location.origin;
    var matches = currentUrl.match(
    // https://designsystem101-accp.mendixcloud.com/
    // https://designsystem101-accp.mendix.com/
    // https://designsystem101-accp.mxapp.com/
    /^https:\/\/[a-zA-Z0-9]+(-(test|accp|sandbox))?(\.home)?(\.(mendixcloud|mendix|mxapp))\.com/);
    var currentEnvironment = matches && matches[2]; // accp
    var baseUrl = Object(_config__WEBPACK_IMPORTED_MODULE_0__["getBaseWebModelerUrl"])(currentEnvironment);
    var projectUrl = baseUrl + "project/" + sprintrId;
    var form = getContentForm();
    if (!form) {
        return projectUrl;
    }
    var documentId = form.id;
    // NOTE: the trailing slash is important. Studio needs this trailing slash
    return documentId ? projectUrl + "/document/" + documentId + "/" : baseUrl;
    /**
     * https://studio.test.mendix.com/project/3c69f543-ed2f-4545-8c30-1a98d1aa9747/document/7b22940f-b2dd-43e1-9a0b-25011a7e1b33
     */
};
var getAppUrl = function () {
    var hasAppUrl = window.mx && window.mx.appUrl;
    var isOffline = hasAppUrl && window.mx.isOffline;
    var getOfflineUrl = function () {
        return JSON.stringify({
            url: window.mx.appUrl,
            offline: window.mx.isOffline()
        });
    };
    var getOnlineUrl = function () { return (hasAppUrl ? window.mx.appUrl : window.location.origin); };
    return isOffline ? getOfflineUrl() : getOnlineUrl();
};
var redirectToLogin = function () {
    window.mx.logout(); // not async
    window.location.href = getLoginUrl();
};


/***/ }),

/***/ "./src/utils/screenshot/capture.ts":
/*!*****************************************!*\
  !*** ./src/utils/screenshot/capture.ts ***!
  \*****************************************/
/*! exports provided: getCaptureImage, getCaptureVideo, isCaptureAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaptureImage", function() { return getCaptureImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaptureVideo", function() { return getCaptureVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCaptureAvailable", function() { return isCaptureAvailable; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var getBlobFromMediaStream = function (stream) {
    if ("ImageCapture" in window) {
        var track_1 = stream.getVideoTracks()[0];
        var imageCapture_1 = new ImageCapture(track_1);
        return new Promise(function (resolve, reject) {
            imageCapture_1
                .grabFrame()
                .then(function (bitmap) {
                track_1.stop();
                var canvas = document.createElement("canvas");
                canvas.width = bitmap.width;
                canvas.height = bitmap.height;
                var context = canvas.getContext("2d");
                if (!context) {
                    reject("No context");
                    return;
                }
                context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);
                canvas.toBlob(function (blob) { return (blob ? resolve(blob) : reject(new Error("No blob"))); }, "image/png");
            })
                .catch(function (error) { return reject(error); });
        });
    }
    else {
        return new Promise(function (resolve, reject) {
            var video = document.createElement("video");
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            video.srcObject = stream;
            video.addEventListener("loadeddata", function () {
                var videoWidth = video.videoWidth, videoHeight = video.videoHeight;
                canvas.width = videoWidth;
                canvas.height = videoHeight;
                if (!context) {
                    reject("No context");
                    return;
                }
                try {
                    context.drawImage(video, 0, 0, videoWidth, videoHeight);
                    canvas.toBlob(function (blob) {
                        video.pause();
                        if (!blob) {
                            reject(new Error("No blob"));
                        }
                        resolve(blob);
                    }, "image/png");
                }
                catch (error) {
                    reject(error);
                }
            });
            video.play();
        });
    }
};
var getCaptureImage = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                navigator.mediaDevices
                    .getDisplayMedia({ preferCurrentTab: true })
                    .then(function (stream) {
                    getBlobFromMediaStream(stream)
                        .then(function (blob) { return (blob ? resolve(blob) : reject(new Error("No blob"))); })
                        .catch(function (e) { return reject(e); });
                })
                    .catch(function (e) { return reject(e); });
            })];
    });
}); };
var getCaptureVideo = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                navigator.mediaDevices
                    .getDisplayMedia({ preferCurrentTab: true })
                    .then(function (stream) {
                    var recordedChunks = [];
                    var options = { mimeType: "video/webm; codecs=vp9" };
                    var mediaRecorder = new window.MediaRecorder(stream, options);
                    mediaRecorder.ondataavailable = function (event) {
                        if (event.data.size > 0) {
                            recordedChunks.push(event.data);
                            var blob = new Blob(recordedChunks, {
                                type: "video/webm"
                            });
                            var url = URL.createObjectURL(blob);
                            var a = document.createElement("a");
                            document.body.appendChild(a);
                            a.style.display = "none";
                            a.href = url;
                            a.download = "test.webm";
                            a.click();
                            window.URL.revokeObjectURL(url);
                        }
                    };
                    mediaRecorder.start();
                    setTimeout(function () {
                        mediaRecorder.stop();
                    }, 10000);
                    resolve();
                })
                    .catch(function (e) { return reject(e); });
            })];
    });
}); };
var isCaptureAvailable = function () {
    if (!navigator.mediaDevices) {
        return false;
    }
    var mediaDevices = navigator.mediaDevices;
    if (!mediaDevices.getDisplayMedia) {
        return false;
    }
    return true;
};



/***/ }),

/***/ "./src/utils/screenshot/imageUtils.ts":
/*!********************************************!*\
  !*** ./src/utils/screenshot/imageUtils.ts ***!
  \********************************************/
/*! exports provided: PermissionType, imageToBase64, readImageFromClipboard, isClipboardAvailable, checkClipboardPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionType", function() { return PermissionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageToBase64", function() { return imageToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readImageFromClipboard", function() { return readImageFromClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClipboardAvailable", function() { return isClipboardAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkClipboardPermission", function() { return checkClipboardPermission; });
var imageToBase64 = function (blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
            if (reader.result && typeof reader.result === "string") {
                resolve(reader.result);
            }
            else {
                reject(new Error("Error reading file"));
            }
        };
    });
};
var isClipboardAvailable = function () {
    if (window.navigator.clipboard && window.navigator.clipboard.read) {
        return true;
    }
    return false;
};
var PermissionType;
(function (PermissionType) {
    PermissionType[PermissionType["granted"] = 0] = "granted";
    PermissionType[PermissionType["prompt"] = 1] = "prompt";
    PermissionType[PermissionType["denied"] = 2] = "denied";
    PermissionType[PermissionType["notSupported"] = 3] = "notSupported";
})(PermissionType || (PermissionType = {}));
var checkClipboardPermission = function () {
    return new Promise(function (resolve, reject) {
        if (!isClipboardAvailable()) {
            reject(PermissionType.notSupported);
        }
        else {
            var permit = { name: "clipboard-read" };
            navigator.permissions.query(permit).then(function (result) {
                switch (result.state) {
                    case "granted":
                        resolve(PermissionType.granted);
                        break;
                    case "prompt":
                        reject(PermissionType.prompt);
                        break;
                    case "denied":
                        reject(PermissionType.denied);
                        break;
                    default:
                        reject(PermissionType.notSupported);
                }
            });
        }
    });
};
var readImageFromClipboard = function () {
    return new Promise(function (resolve, reject) {
        try {
            window.navigator.clipboard.read().then(function (clipboardItems) {
                for (var _i = 0, clipboardItems_1 = clipboardItems; _i < clipboardItems_1.length; _i++) {
                    var clipboardItem = clipboardItems_1[_i];
                    for (var _a = 0, _b = clipboardItem.types; _a < _b.length; _a++) {
                        var type = _b[_a];
                        if (type !== "image/png") {
                            continue;
                        }
                        clipboardItem
                            .getType(type)
                            .then(function (blob) { return imageToBase64(blob).then(function (image) { return resolve(image); }); });
                    }
                }
            });
        }
        catch (err) {
            reject(err);
        }
    });
};



/***/ }),

/***/ "./src/utils/screenshot/thirdPartyCapture.ts":
/*!***************************************************!*\
  !*** ./src/utils/screenshot/thirdPartyCapture.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCursorPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getCursorPosition */ "./src/utils/getCursorPosition.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var loadLibrary = function () { return __awaiter(void 0, void 0, void 0, function () {
    var html2canvas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js", 7))];
            case 1:
                html2canvas = _a.sent();
                return [2 /*return*/, html2canvas.default];
        }
    });
}); };
var thirdPartyCapture = function (selector, foreignObjectRendering) { return __awaiter(void 0, void 0, void 0, function () {
    var html2canvas, _a, x, y, canvas, dataUrl;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, loadLibrary()];
            case 1:
                html2canvas = _b.sent();
                _a = Object(_getCursorPosition__WEBPACK_IMPORTED_MODULE_0__["getScroll"])(selector), x = _a.x, y = _a.y;
                return [4 /*yield*/, html2canvas(document.documentElement, {
                        /**
                         * https://github.com/niklasvh/html2canvas/issues/1295
                         * If foreignObjectRendering is true, onClone will not be triggered.
                         * Then this introduced the scrolling issue
                         */
                        foreignObjectRendering: foreignObjectRendering,
                        onclone: function (clone) {
                            var element = clone.querySelector(selector) || clone.body;
                            element.scrollTop = y;
                            element.scrollLeft = x;
                        }
                    }).catch(function () {
                        var _a;
                        // eslint-disable-next-line no-console
                        console.warn("\n            Feedback Widget >> An error occurred while capturing screenshot.\n            It is an known issue of a library (html2canvas) that is used in the Feedback widget.\n        ");
                        // as a fallback: take a screenshot that scrolling is ignored.
                        return html2canvas(document.body, {
                            foreignObjectRendering: foreignObjectRendering,
                            windowHeight: (_a = document.querySelector("div.mx-page")) === null || _a === void 0 ? void 0 : _a.clientHeight,
                            scrollY: 0
                        });
                    })];
            case 2:
                canvas = _b.sent();
                dataUrl = canvas.toDataURL();
                if (canvas && canvas.remove) {
                    canvas.remove();
                }
                return [2 /*return*/, dataUrl];
        }
    });
}); };
/* harmony default export */ __webpack_exports__["default"] = (thirdPartyCapture);


/***/ }),

/***/ "./src/utils/validation.ts":
/*!*********************************!*\
  !*** ./src/utils/validation.ts ***!
  \*********************************/
/*! exports provided: validateFeedbackComment, validateFeedbackTitle, validateEmail, validateImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFeedbackComment", function() { return validateFeedbackComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFeedbackTitle", function() { return validateFeedbackTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateImage", function() { return validateImage; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");

var validateFeedbackComment = function (description) {
    if (!description) {
        // Description is not required
        return true;
    }
    if (description.length > _config__WEBPACK_IMPORTED_MODULE_0__["FEEDBACK_COMMENT_MAX_LENGTH"]) {
        return false;
    }
    return true;
};
var validateFeedbackTitle = function (title) {
    if (!title || !title.trim()) {
        return false;
    }
    if (title.length > _config__WEBPACK_IMPORTED_MODULE_0__["FEEDBACK_TITLE_MAX_LENGTH"]) {
        return false;
    }
    return true;
};
var validateEmail = function (email) {
    if (!email) {
        return false;
    }
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
};
var validateImage = function (curFiles) {
    if (!curFiles || curFiles.length === 0) {
        console.error("Feedback Widget >> No file selected");
        return;
    }
    var fileType = curFiles[0].type.split("/");
    if (fileType[0] !== "image") {
        console.error("Feedback Widget >> File is not an image");
        return;
    }
    if (curFiles[0].size > 5 * 1024 * 1024) {
        console.error("Feedback Widget >> Image is too big");
        return;
    }
    return curFiles[0];
};



/***/ }),

/***/ "./typings/annotation.ts":
/*!*******************************!*\
  !*** ./typings/annotation.ts ***!
  \*******************************/
/*! exports provided: ToolSet, Color, Thickness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolSet", function() { return ToolSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thickness", function() { return Thickness; });
var ToolSet;
(function (ToolSet) {
    ToolSet[ToolSet["Freehand"] = 0] = "Freehand";
})(ToolSet || (ToolSet = {}));
var Color;
(function (Color) {
    Color["MidnightBlue"] = "#2f3646";
    Color["Grey"] = "#c1c3c8";
    Color["Green"] = "#4fd84f";
    Color["Blue"] = "#47a9ff";
    Color["Purple"] = "#845eff";
    Color["Magenta"] = "#ca49f8";
    Color["Red"] = "#fb4a4c";
    Color["Yellow"] = "#fcc73a";
})(Color || (Color = {}));
var Thickness;
(function (Thickness) {
    Thickness[Thickness["One"] = 1] = "One";
    Thickness[Thickness["Two"] = 2] = "Two";
    Thickness[Thickness["Three"] = 3] = "Three";
    Thickness[Thickness["Four"] = 4] = "Four";
    Thickness[Thickness["Five"] = 5] = "Five";
    Thickness[Thickness["Six"] = 6] = "Six";
})(Thickness || (Thickness = {}));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=SprintrFeedback.js.map