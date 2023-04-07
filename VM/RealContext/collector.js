async function getWindow() {
	let loopCount = 0;
    return new Promise(resolve => {
        doLoop();

        function doLoop() {
        	loopCount === 1 ? startTracking() : "";
        	loopCount++;

            setTimeout(() => {

                // let voices = window.speechSynthesis.getVoices().map(voice => {
                //     return {
                //         "uri": voice.voiceURI,
                //         "lang": voice.lang
                //     }
                // });

                // if (voices.length <= 0) return doLoop();

                resolve({
                    "userAgent": window.navigator.userAgent,
                    "plugins": getAllPlugins(),
                    "pluginsNames": getPluginNames(),
                    "pluginLength": window.navigator.plugins.length,
                    "pluginTest": ra(),
                    "language": window.navigator.language,
                    "languages": window.navigator.languages,
                    "platform": window.navigator.platform,
                    "DNT": !!(navigator.doNotTrack || null === navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack),
                    "mimeTypes": na(),
                    "mimeTypesLength": window.navigator.mimeTypes.length,
                    "product": window.navigator.product,
                    "productSub": window.navigator.productSub,
                    "appVersion": window.navigator.appVersion,
                    "appName": window.navigator.appName,
                    "appCodeName": window.navigator.appCodeName,
                    "geoLocationBool": navigator.geolocation + "" == "[object Geolocation]",
                    "colorDepth": window.screen && +screen.colorDepth || 0,
                    "pixelDepth": screen && +screen.pixelDepth || 0,
                    "scrollX": window.scrollX || window.pageXOffset || 0,
                    "scrollY": window.scrollY || window.pageYOffset || 0,
                    "outerWidthBool": !(0 === window.outerWidth && 0 === window.outerHeight),
                    "screenArray": fa(),
                    "windowCache": !!window.caches,
                    // "jsHeapSizeLimit": window.performance && performance["memory"]["jsHeapSizeLimit"],
                    // "totalJSHeapSize": window.performance && performance["memory"]["totalJSHeapSize"],
                    // "usedJSHeapSize": window.performance && performance["memory"]["usedJSHeapSize"],
                    "getTimezoneOffset": new window.Date()[`getTimezoneOffset`](),
                    "touchPoints": Wt(),
                    "msDoNotTrack": navigator.msDoNotTrack,
                    "visibleTest": la(),
                    "showModalDialog": !!window.showModalDialog,
                    "createTouch": sa(),
                    "onTouchStart": window.hasOwnProperty("ontouchstart") || !!window.ontouchstart,
                    "setTimeout": Ft(window.setTimeout),
                    "openDatabase": Ft(window.openDatabase),
                    "batteryManager": Ft(window.BatteryManager) || Ft(navigator.battery) || Ft(navigator.getBattery),
                    "isSecureContext": !!window.isSecureContext,
                    "worklet": !!window.Worklet,
                    "audioWorklet": !!window.AudioWorklet,
                    "audioWrokletNode": !!window.AudioWorkletNode,
                    "checkForWebdriver": Wi(),
                    "PX1025": fn(window, "navigator") && !!fn(window, "navigator")["value"],
                    "onorientationchange": window.hasOwnProperty("onorientationchange") || !!window.onorientationchange,
                    "windowOnTop": window.self === window.top ? 0 : 1,
                    "documentReferer": document.referrer ? encodeURIComponent(document.referrer) : "",
                    "performanceRoundTest": Ct(),
                    "PX1008": Qe(),
                    "availWidth": window.screen.availWidth,
                    "availHeight": window.screen.availHeight,
                    "width": window.screen.width,
                    "height": window.screen.height,
                    "innerWidth": window.innerWidth,
                    "innerHeight": window.innerHeight,
                    "outerWidth": window.outerWidth,
                    "outerHeight": window.outerHeight,
                    "devicePixelRatio": 'devicePixelRatio' in window && void 0 !== window.devicePixelRatio ? window.devicePixelRatio : -1,
                    //"voices": voices,
                    "DeviceOrientationEvent": window.DeviceOrientationEvent ? 'do_en' : 'do_dis',
                    "DeviceMotionEvent": window.DeviceMotionEvent ? 'dm_en' : 'dm_dis',
                    "TouchEvent": window.TouchEvent ? 't_en' : 't_dis',
                    //"sessionStorage": !!window.sessionStorage,
                    //"localStorage": !!window.localStorage,
                    "indexedDB": !!window.indexedDB,
                    "browser_properties": {
                        "window": check_properties(window, ["onrendersubtreeactivation", "scheduler", "onactivateinvisible", "onoverscroll", "onscrollend", "trustedTypes", "requestPostAnimationFrame", "cancelPostAnimationFrame", "getComputedAccessibleNode", "getDefaultComputedStyle", "scrollByLines", "scrollByPages", "sizeToContent", "updateCommands", "dump", "setResizable", "mozInnerScreenX", "mozInnerScreenY", "scrollMaxX", "scrollMaxY", "fullScreen", "ondevicemotion", "ondeviceorientation", "onabsolutedeviceorientation", "ondeviceproximity", "onuserproximity", "ondevicelight", "InstallTrigger", "sidebar", "onvrdisplayconnect", "onvrdisplaydisconnect", "onvrdisplayactivate", "onvrdisplaydeactivate", "onvrdisplaypresentchange", "ondragexit", "onloadend", "onshow", "onmozfullscreenchange", "onmozfullscreenerror", "crossOriginIsolated", "caches", "applicationCache", "offscreenBuffering", "webkitIndexedDB", "webkitCancelRequestAnimationFrame", "getMatchedCSSRules", "showModalDialog", "webkitConvertPointFromPageToNode", "webkitConvertPointFromNodeToPage", "safari", "yandexApi", "yandex", "onelementpainted"]),
                        "document": check_properties(window.document, ["origin", "webkitFullScreenKeyboardInputAllowed", "onrejectionhandled", "onunhandledrejection", "getOverrideStyle", "getCSSCanvasContext", "onrendersubtreeactivation", "addressSpace", "onactivateinvisible", "onoverscroll", "onscrollend", "rootScroller", "ol_originalAddEventListener", "releaseCapture", "mozSetImageElement", "mozCancelFullScreen", "enableStyleSheetsForSet", "caretPositionFromPoint", "onbeforescriptexecute", "onafterscriptexecute", "mozFullScreen", "mozFullScreenEnabled", "selectedStyleSheetSet", "lastStyleSheetSet", "preferredStyleSheetSet", "styleSheetSets", "mozFullScreenElement", "ondragexit", "onloadend", "onshow", "onmozfullscreenchange", "onmozfullscreenerror", "registerElement"]),
                        "navigator": check_properties(window.navigator, ["deviceMemory", "getUserAgent", "clipboard", "credentials", "keyboard", "locks", "mediaDevices", "serviceWorker", "storage", "presentation", "bluetooth", "hid", "usb", "xr", "setAppBadge", "clearAppBadge", "getInstalledRelatedApps", "getUserMedia", "webkitGetUserMedia", "requestMIDIAccess", "canShare", "share", "scheduling", "serial", "sms", "wakeLock", "taintEnabled", "oscpu", "buildID", "getStorageUpdates"]),
                        "location": check_properties(window.location, ["ancestorOrigins", "fragmentDirective"]),
                    },
                    "built_in_functions": {
                        "fetch": '' + window['fetch'],
                        "performance": {
                            "timing": {
                                //"toJson": "" + performance.timing["toJSON"]
                            }
                        },
                        "createElement": "" + document["createElement"]
                    },
                    "validateFuncs": {
                        "addEventListener": window.addEventListener ? 1 : 0,
                        "XMLHttpRequest": window.XMLHttpRequest ? 1 : 0,
                        "XDomainRequest": window.XDomainRequest ? 1 : 0,
                        "emit": window.emit ? 1 : 0,
                        "DeviceOrientationEvent": window.DeviceOrientationEvent ? 1 : 0,
                        "DeviceMotionEvent": window.DeviceMotionEvent ? 1 : 0,
                        "TouchEvent": window.TouchEvent ? 1 : 0,
                        "spawn": window.spawn ? 1 : 0,
                        "innerWidth": window.innerWidth ? 1 : 0,
                        "outerWidth": window.outerWidth ? 1 : 0,
                        "chrome": window.chrome ? 1 : 0,
                        "bind": Function.prototype.bind ? 1 : 0,
                        "Buffer": window.Buffer ? 1 : 0,
                        "PointerEvent": window.PointerEvent ? 1 : 0
                    },
                    "validateFuncs1": {
                        "callPhantom": window.callPhantom ? 1 : 0,
                        "ActiveXObject": window.ActiveXObject && 'ActiveXObject' in window ? 1 : 0,
                        "documentMode": 'number' == typeof document.documentMode ? 1 : 0,
                        "webstore": window.chrome && window.chrome.webstore ? 1 : 0,
                        "onLine": navigator.onLine ? 1 : 0,
                        "opera": window.opera ? 1 : 0,
                        "HTMLElement": window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ? 1 : 0,
                        "webrtcKey": 'function' == typeof window.RTCPeerConnection || 'function' == typeof window.mozRTCPeerConnection || 'function' == typeof window.webkitRTCPeerConnection ? 1 : 0,
                        "InstallTrigger": 'undefined' != typeof InstallTrigger ? 1 : 0,
                        "mozInnerScreenY": 'mozInnerScreenY' in window ? window.mozInnerScreenY : 0,
                        "vibrate": 'function' == typeof navigator.vibrate ? 1 : 0,
                        "getBattery": 'function' == typeof navigator.getBattery ? 1 : 0,
                        "forEach": Array.prototype.forEach ? 0 : 1,
                        "FileReader": 'FileReader' in window ? 1 : 0,
                        "v8Locale": window.v8Locale ? 1 : 0,
                    },
                    "validateFuncs2": {
                        "cdc_asdjflasutopfhvcZLmcfl_": window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? '1' : '0',
                        "elemWebdriver": null != window.document.documentElement.getAttribute('webdriver') ? '1' : '0',
                        "navWebdriver": void 0 !== navigator.webdriver && navigator.webdriver ? '1' : '0',
                        "winWebdriver": void 0 !== window.webdriver ? '1' : '0',
                        "XPathResult": void 0 !== window.XPathResult || void 0 !== document.XPathResult ? '1' : '0',
                        "driver": null != window.document.documentElement.getAttribute('driver') ? '1' : '0',
                        "selenium": null != window.document.documentElement.getAttribute('selenium') ? '1' : '0',
                        "webdriverScript": !!document.__webdriver_script_fn,
                        "isSelenium": !!window._Selenium_IDE_Recorder,
                        "windowGeb": !!window.geb,
                        "windowAwesomium": !!window.awesomium,
                        "perfTest": Ft(window.RunPerfTest),
                        "fmgetTargets": !!window.fmget_targets,
                        "windowNightmare": !!window.__nightmare,
                        "windowPerformance": Ei(),
                        "browserTest": Si(),
                        "browserVars": ("object" === tu(window.chrome) && "function" == typeof Object.keys ? Object.keys(window.chrome) : []),
                        "windowRuntime": window.chrome && window.chrome.runtime && window.chrome.runtime.id || "",
                    },
                    "navigator": {
                        "credentials": Boolean(navigator.credentials),
                        "appMinorVersion": Boolean(navigator.appMinorVersion),
                        "bluetooth": Boolean(navigator.bluetooth),
                        "storage": Boolean(navigator.storage),
                        "imul": Boolean(Math.imul),
                        "getGamepads": Boolean(navigator.getGamepads),
                        "getStorageUpdates": Boolean(navigator.getStorageUpdates),
                        "hardwareConcurrency": Boolean(navigator.hardwareConcurrency),
                        "mediaDevices": Boolean(navigator.mediaDevices),
                        "mozAlarms": Boolean(navigator.mozAlarms),
                        "mozConnection": Boolean(navigator.mozConnection),
                        "mozIsLocallyAvailable": Boolean(navigator.mozIsLocallyAvailable),
                        "mozPhoneNumberService": Boolean(navigator.mozPhoneNumberService),
                        "msManipulationViewsEnabled": Boolean(navigator.msManipulationViewsEnabled),
                        "permissions": navigator.permissions && navigator.permissions.query && "query" === navigator.permissions.query.name,
                        "registerProtocolHandler": Boolean(navigator.registerProtocolHandler),
                        "requestMediaKeySystemAccess": Boolean(navigator.requestMediaKeySystemAccess),
                        "requestWakeLock": Boolean(navigator.requestWakeLock),
                        "sendBeacon": Boolean(navigator.sendBeacon),
                        "serviceWorker": Boolean(navigator.serviceWorker),
                        "storeWebWideTrackingException": Boolean(navigator.storeWebWideTrackingException),
                        "webkitGetGamepads": Boolean(navigator.webkitGetGamepads),
                        "webkitTemporaryStorage": Boolean(navigator.webkitTemporaryStorage),
                        "parseInt": Boolean(Number.parseInt),
                        "hypot": Boolean(Math.hypot),
                        "webdriver_in_navigator": 'webdriver' in navigator,
                    },
                    "isPuppeteer": {
                        "_phantom": window._phantom ? 1 : 0,
                        "webdriver": window.webdriver ? 1 : 0,
                        "domAutomation": window.domAutomation ? 1 : 0
                    }
                });
            }, 500);
        }
    });
}

async function pxData() {
    return {
        "pxCanvas": {
            "gl": await Ea("gl"),
            "2d": await Ea("2d")
        },
        "pxBrowserData": {
            "evalLength": "eval" in window ? (eval + "").length : -1,
            "windowHash": Ma(window),
            "WebKitCSSMatrixHash": Na(window, "WebKitCSSMatrix"),
            "WebGLContextEventHash": Na(window, "WebGLContextEvent"),
            "UIEventHash": Na(window, "UIEvent"),
            "offsetWidthAndHeight": document.body && document.body.offsetWidth + "x" + document.body.offsetHeight || "",
            "navigatorPlugins": Ra()
        }
    }
}

async function getDocument(userAgent) {
    return new Promise(async (resolve) => {
        resolve({
            "clientWidth": document.body.clientWidth,
            "clientHeight": document.body.clientHeight,
            "elemClientWidth": document.documentElement.clientWidth,
            "elemClientHeight": document.documentElement.clientHeight,
            "activeElement": document.activeElement,
            "hidden": document.hidden ? 1 : 0,
            "mozHidden": document.mozHidden ? 1 : 0,
            "msHidden": document.msHidden ? 1 : 0,
            "webkitHidden": document.webkitHidden ? 1 : 0,
            "addEventListener": document.addEventListener,
            //"canvas1": await canvas("<@nv45. F1n63r,Pr1n71n6!", userAgent),
            //"canvas2": await canvas("m,Ev!xV67BaU> eh2m<f3AG3@", userAgent),
            "pixel_canvas": await pixel_canvas(),
            "fm": await getFontCanvas(),
            "getmr": await getmr(),
            "nav_perms": await nav_perms(),
            "fonts": await getFonts(userAgent),
            "fonts_o": await getFonts_optm(userAgent),
            "fonts_pixel": await PixelFonts(),
            "plugins": await navPlugins(),
            "documentMode": +document.documentMode || 0,
            "offsetWidth": document.body.offsetWidth,
            "offsetHeight": document.body.offsetHeight
        });
    });
}

async function getGpu() {
    return new Promise(resolve => {
        var canvas = document.createElement("canvas");
        var gpu = canvas.getContext("webgl");

        let extensions = gpu.getSupportedExtensions();
        let extensionVendor = gpu.getParameter(gpu.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL);
        let extensionRenderer = gpu.getParameter(gpu.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL);

        resolve({
            extensions,
            "extensionLength": extensions.length,
            "extensionInfo": extensions.indexOf("WEBGL_debug_renderer_info") >= 0,
            extensionVendor,
            extensionRenderer
        });
    });
}

let eventData = [];
let startTime = Date.now();

async function getEvents() {
    return new Promise(resolve => {
        setInterval(() => {
            if (eventData.length < 150) return;

            resolve(eventData.slice(0, 150));
        }, 10);
    });
}

async function startTracking() {
    window.addEventListener("mousemove", recordMouse);
    window.addEventListener("click", recordMouse);
    window.addEventListener("mousedown", recordMouse);
    window.addEventListener("mouseup", recordMouse);
    window.addEventListener("pointerdown", recordPointer);
    window.addEventListener("pointerup", recordPointer);
    window.addEventListener("keydown", recordKeyboard);
    window.addEventListener("keyup", recordKeyboard);
    window.addEventListener("keypress", recordKeyboard);
    window.onblur = () => recordVisibility(2);
    window.onfocus = () => recordVisibility(3);
}

async function recordMouse(data) {
	if (eventData.length !== 0 && (((Date.now() - startTime) - eventData[eventData.length - 1].timestamp) < 10) && await getDataType(data.type) === 1) return;

    eventData.push({
        "eventType": "mouse",
        "type": await getDataType(data.type),
        "pageX": data.pageX,
        "pageY": data.pageY,
        "which": data.which,
        "actualType": data.type,
        "timestamp": Date.now() - startTime
    });
}

async function recordPointer(data) {
    eventData.push({
        "eventType": "pointer",
        "type": await getDataType(data.type),
        "pageX": data.pageX,
        "pageY": data.pageY,
        "pointerType": data.pointerType,
        "actualType": data.type,
        "timestamp": Date.now() - startTime
    });
}

async function recordKeyboard(data) {
    eventData.push({
        "eventType": "keyboard",
        "type": await getDataType(data.type),
        "keyCode": data.keyCode,
        "charCode": data.charCode,
        "shiftKey": data.shiftKey,
        "ctrlKey": data.ctrlKey,
        "metaKey": data.metaKey,
        "altKey": data.altKey,
        "actualType": data.type,
        "timestamp": Date.now() - startTime
    });
}

async function recordVisibility(data) {
    eventData.push({
        "eventType": "visibility",
        "type": data,
        "timestamp": Date.now() - startTime
    });
}

async function getDataType(event) {
    switch (event.toLowerCase()) {
        case "mousemove":
            return 1;
        case "keydown":
            return 1;
        case "click":
            return 2;
        case "keyup":
            return 2;
        case "mousedown":
            return 3;
        case "pointerdown":
            return 3;
        case "keypress":
            return 3;
        case "mouseup":
            return 4;
        case "pointerup":
            return 4;
        default:
            return -1;
    }
}
// Website down
async function getJa3() {
    let res = await fetch("https://ja3er.com/json");
    let data = await res.json();

    return {
        "ja3": data.ja3,
        "ja3_hash": data.ja3_hash,
    };
}

async function sendData(userData) {
    document.getElementById('userData').innerHTML = userData;
    
    console.log(userData);

    document.getElementById("msg").innerHTML = "We have collected the data, thanks!";
}

(async () => {
    let ua = window.navigator.userAgent.replace(/\\|"/g, '');
    console.log(ua)
    let isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));

    console.log(`Mobile: ${isMobile}`);

    let userData = {
        isMobile,
        "window": await getWindow(),
        "document": await getDocument(window.navigator.userAgent),
        //"px": await pxData(),
        //"gpu": await getGpu(),
        //"tls": await getJa3(),
        //"data": await getEvents()
    };

    console.log("Collected all data :D");
    console.log(JSON.stringify(userData))
    await sendData(JSON.stringify(userData));
})();

function hide(data) {
    return window.btoa(unescape(encodeURIComponent(data)));
}

function getFontCanvas() {
    var a = ['Monospace', 'Wingdings 2', 'ITC Bodoni 72 Bold', 'Menlo', 'Gill Sans MT', 'Lucida Sans', 'Bodoni 72', 'Serif', 'Shree Devanagari 714', 'Microsoft Tai Le', 'Nimbus Roman No 9 L', 'Candara', 'Press Start 2P', 'Waseem'],
        t = document.createElement('span');
    t.innerHTML = 'mmmmmmmmlli', t.style.fontSize = '192px';
    var e = '',
        n = document.getElementsByTagName('body')[0];
    for (var o in a) t.style.fontFamily = a[o], n.appendChild(t), e += a[o] + ':' + t.offsetWidth + ',' + t.offsetHeight + ';', n.removeChild(t);

    let fmh = e ? e : "";
    let fmz = 'devicePixelRatio' in window && void 0 !== window.devicePixelRatio ? window.devicePixelRatio : -1;

    return {
        fmh,
        fmz
    }
}


async function nav_perms() {
    let nav_perm;
    var a = [],
        t = ['geolocation', 'notifications', 'push', 'midi', 'camera', 'microphone', 'speaker', 'device-info', 'background-sync', 'bluetooth', 'persistent-storage', 'ambient-light-sensor', 'accelerometer', 'gyroscope', 'magnetometer', 'clipboard', 'accessibility-events', 'clipboard-read', 'clipboard-write', 'payment-handler'];
    try {
        if (!navigator.permissions) return 6;
        nav_perm = 8;
        for (let e = 0; e < t.length; e++) {
            await navigator.permissions.query({
                name: t[e]
            }).then(function(t) {
                switch (t.state) {
                    case 'prompt':
                        a[e] = 1;
                        break;
                    case 'granted':
                        a[e] = 2;
                        break;
                    case 'denied':
                        a[e] = 0;
                        break;
                    default:
                        a[e] = 5
                }
            }).catch(function(t) {
                a[e] = -1 !== t.message.indexOf('is not a valid enum value of type PermissionName') ? 4 : 3
            })
        }
        return a.join('');
    } catch (a) {
        return 7;
    }
}

function Ea(t) {
    var n = Oa(t);
    try {
        var e = Aa();
        if (e) {
            var r = t === "gl" ? xa : _a,
                o = r(e);
            if (o) {
                return (t === "gl" ? Ta : Sa)(o, n, e)
            }
            console.log("PX422")
        } else console.log("PX423")
    } catch (t) {
        console.log(t)
        console.log("PX424")
    }
    return n
}

function _a(t) {
    var n = t && t.getContext("2d");
    return n && "function" == typeof n.fillText ? n : null
}

function xa(t) {
    var _v = void 0;
    return !_v && t && (_v = t.getContext("webgl") || t.getContext("experimental-webgl")), _v
}

function Aa() {
    var t = document.createElement("canvas");
    return t.width = 2e3, t.height = 200, t.style.display = "inline", t
}

function Ta(t, n) {
    var e = void 0,
        r = void 0,
        o = void 0,
        i = void 0,
        a = function (n) {
            return t.clearColor(0, 0, 0, 1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), "[" + n[0] + ", " + n[1] + "]"
        };
    try {
        e = t.createBuffer()
    } catch (t) {
        console.log("PX439")
    }
    try {
        t.bindBuffer(t.ARRAY_BUFFER, e);
        var c = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
        t.bufferData(t.ARRAY_BUFFER, c, t.STATIC_DRAW), e.itemSize = 3, e.numItems = 3
    } catch (t) {
        console.log("PX438")
    }
    try {
        r = t.createProgram()
    } catch (t) {
        console.log("PX437")
    }
    try {
        o = t.createShader(t.VERTEX_SHADER), t.shaderSource(o, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), t.compileShader(o), i = t.createShader(t.FRAGMENT_SHADER), t.shaderSource(i, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), t.compileShader(i), t.attachShader(r, o), t.attachShader(r, i)
    } catch (t) {
        console.log(t)
        console.log("PX436")
    }
    try {
        t.linkProgram(r), t.useProgram(r), r.vertexPosAttrib = t.getAttribLocation(r, "attrVertex"), r.offsetUniform = t.getUniformLocation(r, "uniformOffset"), t.enableVertexAttribArray(r.vertexPosArray), t.vertexAttribPointer(r.vertexPosAttrib, e.itemSize, t.FLOAT, !1, 0, 0), t.uniform2f(r.offsetUniform, 1, 1)
    } catch (t) {
        console.log("PX435")
    }
    try {
        t.drawArrays(t.TRIANGLE_STRIP, 0, e.numItems)
    } catch (t) {
        console.log("PX434")
    }
    try {
        n.canvasfp = null === t.canvas ? "no_fp" : t.canvas.toDataURL() // H(t.canvas.toDataURL())
    } catch (t) {
        console.log(t)
        console.log("PX433")
    }
    try {
        n.extensions = t.getSupportedExtensions() || ["no_fp"]
    } catch (t) {
        console.log("PX432")
    }
    try {
        n.webglRenderer = Ia(t, t.RENDERER), n.shadingLangulageVersion = Ia(t, t.SHADING_LANGUAGE_VERSION), n.webglVendor = Ia(t, t.VENDOR), n.webGLVersion = Ia(t, t.VERSION);
        var u = t.getExtension("WEBGL_debug_renderer_info");
        u && (n.unmaskedVendor = Ia(t, u.UNMASKED_VENDOR_WEBGL), n.unmaskedRenderer = Ia(t, u.UNMASKED_RENDERER_WEBGL))
    } catch (t) {
        console.log(t)
        console.log("PX431")
    }
    n.webglParameters = [];
    var f = n.webglParameters;
    try {
        if (f.push(a(Ia(t, t.ALIASED_LINE_WIDTH_RANGE))), f.push(a(Ia(t, t.ALIASED_POINT_SIZE_RANGE))), f.push(Ia(t, t.ALPHA_BITS)), f.push(t.getContextAttributes().antialias ? "yes" : "no"), f.push(Ia(t, t.BLUE_BITS)), f.push(Ia(t, t.DEPTH_BITS)), f.push(Ia(t, t.GREEN_BITS)), f.push(function (t) {
                var n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic"),
                    e = void 0;
                return n ? (e = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === e && (e = 2), e) : null
            }(t)), f.push(Ia(t, t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), f.push(Ia(t, t.MAX_CUBE_MAP_TEXTURE_SIZE)), f.push(Ia(t, t.MAX_FRAGMENT_UNIFORM_VECTORS)), f.push(Ia(t, t.MAX_RENDERBUFFER_SIZE)), f.push(Ia(t, t.MAX_TEXTURE_IMAGE_UNITS)), f.push(Ia(t, t.MAX_TEXTURE_SIZE)), f.push(Ia(t, t.MAX_VARYING_VECTORS)), f.push(Ia(t, t.MAX_VERTEX_ATTRIBS)), f.push(Ia(t, t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), f.push(Ia(t, t.MAX_VERTEX_UNIFORM_VECTORS)), f.push(a(Ia(t, t.MAX_VIEWPORT_DIMS))),
            f.push(Ia(t, t.STENCIL_BITS)), t.getShaderPrecisionFormat)
            for (var s = ["VERTEX_SHADER", "FRAGMENT_SHADER", "VERTEX_SHADER", "FRAGMENT_SHADER"], l = 0; l < s.length; l++)
                for (var d = s[l], v = ["HIGH_FLOAT", "MEDIUM_FLOAT", "LOW_FLOAT"], h = 0; h < v.length; h++) {
                    var X = v[h],
                        P = t.getShaderPrecisionFormat(t[d], t[X]);
                    f.push(P.precision, P.rangeMin, P.rangeMax)
                }
    } catch (t) {
        console.log(t)
        console.log("PX430")
    }
    return n
}

function H(t, n, e) {
   // wu++;
    var r = U(t, n, e);
    return r
}



function Z(t) {
    var n = "0123456789abcdef",
        e = "",
        r = void 0,
        o = void 0;
    for (o = 0; o < t.length; o += 1) r = t.charCodeAt(o), e += n.charAt(r >>> 4 & 15) + n.charAt(15 & r);
    return e
}

function Y(t) {
    return F(j(t))
}

function F(t) {
    return M(D(V(t), 8 * t.length))
}


function B(t) {
    return Z(Y(t))
}

function U(t, n, e) {
    return n ? e ? L(n, t) : G(n, t) : e ? Y(t) : B(t)
}

function L(t, n) {
    return W(j(t), j(n))
}

function W(t, n) {
    var e = void 0,
        r = V(t),
        o = [],
        i = [];
    for (o[15] = i[15] = void 0, r.length > 16 && (r = D(r, 8 * t.length)), e = 0; e < 16; e += 1) o[e] = 909522486 ^ r[e], i[e] = 1549556828 ^ r[e];
    var a = D(o.concat(V(n)), 512 + 8 * n.length);
    return M(D(i.concat(a), 640))
}

function V(t) {
    var n = void 0,
        e = [];
    for (e[(t.length >> 2) - 1] = void 0, n = 0; n < e.length; n += 1) e[n] = 0;
    for (n = 0; n < 8 * t.length; n += 8) e[n >> 5] |= (255 & t.charCodeAt(n / 8)) << n % 32;
    return e
}


function M(t) {
    var n = void 0,
        e = "";
    for (n = 0; n < 32 * t.length; n += 8) e += String.fromCharCode(t[n >> 5] >>> n % 32 & 255);
    return e
}

function D(t, n) {
    t[n >> 5] |= 128 << n % 32, t[14 + (n + 64 >>> 9 << 4)] = n;
    var e = void 0,
        r = void 0,
        o = void 0,
        i = void 0,
        a = void 0,
        c = 1732584193,
        u = -271733879,
        f = -1732584194,
        s = 271733878;
    for (e = 0; e < t.length; e += 16) r = c, o = u, i = f, a = s, c = R(c, u, f, s, t[e], 7, -680876936), s = R(s, c, u, f, t[e + 1], 12, -389564586), f = R(f, s, c, u, t[e + 2], 17, 606105819), u = R(u, f, s, c, t[e + 3], 22, -1044525330), c = R(c, u, f, s, t[e + 4], 7, -176418897), s = R(s, c, u, f, t[e + 5], 12, 1200080426), f = R(f, s, c, u, t[e + 6], 17, -1473231341), u = R(u, f, s, c, t[e + 7], 22, -45705983), c = R(c, u, f, s, t[e + 8], 7, 1770035416), s = R(s, c, u, f, t[e + 9], 12, -1958414417), f = R(f, s, c, u, t[e + 10], 17, -42063), u = R(u, f, s, c, t[e + 11], 22, -1990404162), c = R(c, u, f, s, t[e + 12], 7, 1804603682), s = R(s, c, u, f, t[e + 13], 12, -40341101), f = R(f, s, c, u, t[e + 14], 17, -1502002290), u = R(u, f, s, c, t[e + 15], 22, 1236535329), c = k(c, u, f, s, t[e + 1], 5, -165796510), s = k(s, c, u, f, t[e + 6], 9, -1069501632), f = k(f, s, c, u, t[e + 11], 14, 643717713), u = k(u, f, s, c, t[e], 20, -373897302), c = k(c, u, f, s, t[e + 5], 5, -701558691), s = k(s, c, u, f, t[e + 10], 9, 38016083), f = k(f, s, c, u, t[e + 15], 14, -660478335), u = k(u, f, s, c, t[e + 4], 20, -405537848), c = k(c, u, f, s, t[e + 9], 5, 568446438), s = k(s, c, u, f, t[e + 14], 9, -1019803690), f = k(f, s, c, u, t[e + 3], 14, -187363961), u = k(u, f, s, c, t[e + 8], 20, 1163531501), c = k(c, u, f, s, t[e + 13], 5, -1444681467), s = k(s, c, u, f, t[e + 2], 9, -51403784), f = k(f, s, c, u, t[e + 7], 14, 1735328473), u = k(u, f, s, c, t[e + 12], 20, -1926607734), c = N(c, u, f, s, t[e + 5], 4, -378558), s = N(s, c, u, f, t[e + 8], 11, -2022574463), f = N(f, s, c, u, t[e + 11], 16, 1839030562), u = N(u, f, s, c, t[e + 14], 23, -35309556), c = N(c, u, f, s, t[e + 1], 4, -1530992060), s = N(s, c, u, f, t[e + 4], 11, 1272893353), f = N(f, s, c, u, t[e + 7], 16, -155497632), u = N(u, f, s, c, t[e + 10], 23, -1094730640), c = N(c, u, f, s, t[e + 13], 4, 681279174), s = N(s, c, u, f, t[e], 11, -358537222), f = N(f, s, c, u, t[e + 3], 16, -722521979), u = N(u, f, s, c, t[e + 6], 23, 76029189), c = N(c, u, f, s, t[e + 9], 4, -640364487), s = N(s, c, u, f, t[e + 12], 11, -421815835), f = N(f, s, c, u, t[e + 15], 16, 530742520), u = N(u, f, s, c, t[e + 2], 23, -995338651), c = C(c, u, f, s, t[e], 6, -198630844), s = C(s, c, u, f, t[e + 7], 10, 1126891415), f = C(f, s, c, u, t[e + 14], 15, -1416354905), u = C(u, f, s, c, t[e + 5], 21, -57434055), c = C(c, u, f, s, t[e + 12], 6, 1700485571), s = C(s, c, u, f, t[e + 3], 10, -1894986606), f = C(f, s, c, u, t[e + 10], 15, -1051523), u = C(u, f, s, c, t[e + 1], 21, -2054922799), c = C(c, u, f, s, t[e + 8], 6, 1873313359), s = C(s, c, u, f, t[e + 15], 10, -30611744), f = C(f, s, c, u, t[e + 6], 15, -1560198380), u = C(u, f, s, c, t[e + 13], 21, 1309151649), c = C(c, u, f, s, t[e + 4], 6, -145523070), s = C(s, c, u, f, t[e + 11], 10, -1120210379), f = C(f, s, c, u, t[e + 2], 15, 718787259), u = C(u, f, s, c, t[e + 9], 21, -343485551), c = x(c, r), u = x(u, o), f = x(f, i), s = x(s, a);
    return [c, u, f, s]
}

function k(t, n, e, r, o, i, a) {
    return O(n & r | e & ~r, t, n, o, i, a)
}

function R(t, n, e, r, o, i, a) {
    return O(n & e | ~n & r, t, n, o, i, a)
}

function O(t, n, e, r, o, i) {
    return x(I(x(x(n, t), x(r, i)), o), e)
}

function N(t, n, e, r, o, i, a) {
    return O(n ^ e ^ r, t, n, o, i, a)
}

function C(t, n, e, r, o, i, a) {
    return O(e ^ (n | ~r), t, n, o, i, a)
}

function I(t, n) {
    return t << n | t >>> 32 - n
}

function x(t, n) {
    var e = (65535 & t) + (65535 & n);
    return (t >> 16) + (n >> 16) + (e >> 16) << 16 | 65535 & e
}

function j(t) {
    return unescape(encodeURIComponent(t))
}

function Ia(t, n) {
    try {
        return t.getParameter(n) || "no_fp"
    } catch (t) {
        return "no_fp"
    }
}

function Sa(t, n, e) {
    try {
        t.rect(0, 0, 10, 10), t.rect(2, 2, 6, 6), n.canvasWinding = !1 === t.isPointInPath(5, 5, "evenodd")
    } catch (t) {
        console.log("PX429")
    }
    try {
        t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20)
    } catch (t) {
        console.log("PX428")
    }
    try {
        t.fillStyle = "#069", t.font = "11pt no-real-font-123", t.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45)
    } catch (t) {
        console.log("PX427")
    }
    try {
        t.globalCompositeOperation = "multiply", t.fillStyle = "rgb(255,0,255)", t.beginPath(), t.arc(50, 50, 50, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.fillStyle = "rgb(0,255,255)", t.beginPath(), t.arc(100, 50, 50, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.fillStyle = "rgb(255,255,0)", t.beginPath(), t.arc(75, 100, 50, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.fillStyle = "rgb(255,0,255)", t.arc(75, 75, 75, 0, 2 * Math.PI, !0), t.arc(75, 75, 25, 0, 2 * Math.PI, !0), t.fill("evenodd")
    } catch (t) {
        console.log("PX426")
    }
    try {
        n.canvasData = e.toDataURL() // H(e.toDataURL())
    } catch (t) {
        console.log("PX425")
    }
    return n
}

function Oa(t) {
    switch (t) {
    case "gl":
        return {
            canvasfp: "no_fp", webglRenderer: "no_fp", shadingLangulageVersion: "no_fp", webglVendor: "no_fp", webGLVersion: "no_fp", unmaskedVendor: "no_fp", unmaskedRenderer: "no_fp", webglParameters: ["no_fp"], errors: []
        };
    case "2d":
        return {
            canvasWinding: "no_fp", canvasData: "no_fp", errors: []
        }
    }
}

function Ma() {
    var t = "";
    if (window && document && document.body) try {
        for (var n = window.getComputedStyle(document.body), e = 0; e < n.length; e++) t += n[e]
    } catch (t) {}
    return H(t)
}

function Na(t, n) {
    try {
        if (t && t[n]) {
            var e = new t[n](""),
                r = "";
            for (var o in e) e.hasOwnProperty(o) && (r += o);
            return H(r)
        }
    } catch (t) {}
    return kv
}

function Ra() {
    var t = [];
    try {
        if (navigator.plugins)
            for (var n = 0; n < navigator.plugins.length && n < 30; n++) {
                for (var e = navigator.plugins[n], r = e.name + "::" + e.description, o = 0; o < e.length; o++) r = r + "::" + e[o].type + "~" + e[o].suffixes;
                t.push(r)
            }
    } catch (t) {console.log(t)}
    if ("ActiveXObject" in window)
        for (var i in xv) try {
            new ActiveXObject(i), t.push(i)
        } catch (t) {}
    return t
}

function navPlugins() {
    const tPLUGINS = ['WebEx64 General Plugin Container', 'YouTube Plug-in', 'Java Applet Plug-in', 'Shockwave Flash', 'iPhotoPhotocast', 'SharePoint Browser Plug-in', 'Chrome Remote Desktop Viewer', 'Chrome PDF Viewer', 'Native Client', 'Unity Player', 'WebKit-integrierte PDF', 'QuickTime Plug-in', 'RealPlayer Version Plugin', 'RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)', 'Mozilla Default Plug-in', 'Adobe Acrobat', 'AdobeAAMDetect', 'Google Earth Plug-in', 'Java Plug-in 2 for NPAPI Browsers', 'Widevine Content Decryption Module', 'Microsoft Office Live Plug-in', 'Windows Media Player Plug-in Dynamic Link Library', 'Google Talk Plugin Video Renderer', 'Edge PDF Viewer', 'Shockwave for Director', 'Default Browser Helper', 'Silverlight Plug-In'];
    if (void 0 === navigator.plugins) return null;
    for (var a = tPLUGINS.length, e = '', n = 0; n < a; n++) {
        var o = tPLUGINS[n];
        void 0 !== navigator.plugins[o] && (e = e + ',' + n)
    }
    return e
}

function getFonts(userAgent) {
    let ua = userAgent.replace(/\\|"/g, '');
    let isCompatible = !(!~ua.indexOf('Version/4.0') || !(~ua.indexOf('iPad;') || ~ua.indexOf('iPhone') || ~ua.indexOf('Mac OS X 10_5')));

    var a = [];
    if (!isCompatible && document.body) {
        var e = ['serif', 'sans-serif', 'monospace'],
            n = [0, 0, 0],
            o = [0, 0, 0],
            m = document.createElement('span');
        m.innerHTML = 'abcdefhijklmnopqrstuvxyz1234567890;+-.', m.style.fontSize = '90px';
        var r;
        for (r = 0; r < e.length; r++) m.style.fontFamily = e[r], document.body.appendChild(m), n[r] = m.offsetWidth, o[r] = m.offsetHeight, document.body.removeChild(m);
        for (var i = ['Geneva', 'Lobster', 'New York', 'Century', 'Apple Gothic', 'Minion Pro', 'Apple LiGothic', 'Century Gothic', 'Monaco', 'Lato', 'Fantasque Sans Mono', 'Adobe Braille', 'Cambria', 'Futura', 'Bell MT', 'Courier', 'Courier New', 'Calibri', 'Avenir Next', 'Birch Std', 'Palatino', 'Ubuntu Regular', 'Oswald', 'Batang', 'Ubuntu Medium', 'Cantarell', 'Droid Serif', 'Roboto', 'Helvetica Neue', 'Corsiva Hebrew', 'Adobe Hebrew', 'TI-Nspire', 'Comic Neue', 'Noto', 'AlNile', 'Palatino-Bold', 'ArialHebrew-Light', 'Avenir', 'Papyrus', 'Open Sans', 'Times', 'Quicksand', 'Source Sans Pro', 'Damascus', 'Microsoft Sans Serif'], c = [], b = 0; b < i.length; b++) {
            var d = !1;
            for (r = 0; r < e.length; r++)
                if (m.style.fontFamily = i[b] + ',' + e[r], document.body.appendChild(m), m.offsetWidth === n[r] && m.offsetHeight === o[r] || (d = !0), document.body.removeChild(m), d) {
                    c.push(b);
                    break
                }
        }
        a = c.sort()
    }
    return a.join(',')
}


async function PixelFonts(e) {
    let u = window.document;
    let h = [`Party LET`, `Academy Engraved LET`, `David`, `Palatino Linotype`, `Microsoft Sans Serif`, `Segoe UI`, `Malgun Gothic`, `Nirmala UI`, `Segoe Pseudo`, `Gadugi`, `Leelawadee UI Bold`, `Sitka Subheading Italic`, `Yu Gothic UI Light`, `Bahnschrift`, `Trattatello`, `Skia`, `Muna`, `PingFang`, `San Francisco UI`, `San Francisco Mono`, `Monotype LingWai Medium`, `American Typewriter`, `Rockwell`, `Al Nile`, `Roboto`, `Noto`, `Ubuntu`, `Century Schoolbook L`, `URW Chancery L`, `URW Gothic L`, `URW Bookman L`, `Nimbus Mono L`, `FreeMono`, `FreeSans`, `FreeSerif`, `Bitstream Vera Sans`, `Bitstream Charter`, `Liberation Sans`, `Liberation Serif`, `Liberation Mono`, `Luxi`, `Nimbus Mono`, `Nimbus Sans L`, `Nimbus Roman No 9 L`, `DejaVu Sans`, `MONO`, `DB LCD Temp`, `Oriya Sangam MN`, `Sinhala Sangam MN`, `Apple Color Emoji`, `Chalkboard`, `Andale Mono`, `Sitka Banner`, `Segoe UI Emoji`, `Leelawadee UI`, `Vijaya`, `Utsaah`, `Shonar Bangla`, `Aparajita`, `Khmer UI`, `Franklin Gothic`, `MV Boli`, `Corbel`, `Cambria`, `Segoe UI Light`, `MS Gothic`];

    function t(e) {
        return `<b style="position: absolute; display:inline !important; width:auto !important; font:normal 10px/1 ` + e + ` !important">wi wi</b>`
    }

    function n(e) {
        return `<div>` + t([e, `monospace`]) + t([e, `sans-serif`]) + `</div>`
    }

    function a(e, t) {
        var n = e.childNodes[0].offsetWidth;
        return n !== t || n === e.childNodes[1].offsetWidth
    }

    function r(e, t, r, i, o) {
        for (var s = `RYelrZVIUa`, c = [], l = e.length, f = ``, u = 0; u < l; u++) f += n(t[e[u]]);
        if (o && (f += n(s)), r.innerHTML = f, o && a(r.childNodes[l], i)) return null;
        for (u = 0; u < l; u++) a(r.childNodes[u], i) && c.push(e[u]);
        return c
    }
    var o = `fh`,
        c = `fc`;
    try {
        var l, f = [],
            d = !0,
            b = !1,
            p = (new Date).valueOf(),
            v = h.length,
            g = [],
            m = [],
            O = u.body,
            S = u.createElement(`div`),
            A = u.createElement(`div`),
            j = u.createElement(`div`);
        S.style.cssText = `position: relative; left: -9999px; visibility: hidden; display: block !important`, A.innerHTML = t('monospace'), S.appendChild(A), S.appendChild(j), O.insertBefore(S, O.firstChild);
        var w = A.childNodes[0].offsetWidth;
        0 === w && (b = !0);
        for (var y = 0; y < v; y++) y % 7 == 0 ? g.push(y) : m.push(y);
        if (l = r(g, h, j, w, !0), null === l ? b = !0 : (new Date).valueOf() - p > 100 ? d = !1 : f = r(m, h, j, w, !1), O.removeChild(S), b) i(o, !1), i(e, !1), i(c, !1);
        else {
            var R = l.concat(f);
            R.sort(function (e, t) {
                return e - t
            }), R += ``;

            return {
                'fh': R,
                'fc': d
            }
        }
    } catch (t) {
        try {
            O.removeChild(S)
        } catch (e) {}
    }

    return {
        'fh': null,
        'fc': false
    }
}

function getFonts_optm(userAgent) {
    let ua = userAgent.replace(/\\|"/g, '');
    let isCompatible = !(!~ua.indexOf('Version/4.0') || !(~ua.indexOf('iPad;') || ~ua.indexOf('iPhone') || ~ua.indexOf('Mac OS X 10_5')));

    var a = 200,
        e = Date.now ? Date.now() : +new Date,
        n = [];
    if (!isCompatible && document.body) {
        var o = ['sans-serif', 'monospace'],
            m = [0, 0],
            r = [0, 0],
            i = document.createElement('div');
        i.style.cssText = 'position: relative; left: -9999px; visibility: hidden; display: block !important';
        var c;
        for (c = 0; c < o.length; c++) {
            var b = document.createElement('span');
            b.innerHTML = 'abcdefhijklmnopqrstuvxyz1234567890;+-.', b.style.fontSize = '90px', b.style.fontFamily = o[c], i.appendChild(b)
        }
        for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++) b = i.childNodes[c], m[c] = b.offsetWidth, r[c] = b.offsetHeight;
        if (document.body.removeChild(i), (Date.now ? Date.now() : +new Date) - e > a) return '';
        var d = ['Geneva', 'Lobster', 'New York', 'Century', 'Apple Gothic', 'Minion Pro', 'Apple LiGothic', 'Century Gothic', 'Monaco', 'Lato', 'Fantasque Sans Mono', 'Adobe Braille', 'Cambria', 'Futura', 'Bell MT', 'Courier', 'Courier New', 'Calibri', 'Avenir Next', 'Birch Std', 'Palatino', 'Ubuntu Regular', 'Oswald', 'Batang', 'Ubuntu Medium', 'Cantarell', 'Droid Serif', 'Roboto', 'Helvetica Neue', 'Corsiva Hebrew', 'Adobe Hebrew', 'TI-Nspire', 'Comic Neue', 'Noto', 'AlNile', 'Palatino-Bold', 'ArialHebrew-Light', 'Avenir', 'Papyrus', 'Open Sans', 'Times', 'Quicksand', 'Source Sans Pro', 'Damascus', 'Microsoft Sans Serif'],
            k = document.createElement('div');
        k.style.cssText = 'position: relative; left: -9999px; visibility: hidden; display: block !important';
        for (var s = [], l = 0; l < d.length; l++) {
            var u = document.createElement('div');
            for (c = 0; c < o.length; c++) {
                var b = document.createElement('span');
                b.innerHTML = 'abcdefhijklmnopqrstuvxyz1234567890;+-.', b.style.fontSize = '90px', b.style.fontFamily = d[l] + ',' + o[c], u.appendChild(b)
            }
            k.appendChild(u)
        }
        if ((Date.now ? Date.now() : +new Date) - e > a) return '';
        document.body.appendChild(k);
        for (var l = 0; l < k.childNodes.length; l++) {
            var _ = !1,
                u = k.childNodes[l];
            for (c = 0; c < u.childNodes.length; c++) {
                var b = u.childNodes[c];
                if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
                    _ = !0;
                    break
                }
            }
            if (_ && s.push(l), (Date.now ? Date.now() : +new Date) - e > a) break
        }
        document.body.removeChild(k), n = s.sort()
    }
    return n.join(',')
}

function getmr() {
    let mrs = [];

    while ( mrs.length < 1000 ) {
        try {
            if ('undefined' == typeof performance || void 0 === performance.now || 'undefined' == typeof JSON) return 'undef';
            for (var a = '', t = 1e3, e = [Math.abs, Math.acos, Math.asin, Math.atanh, Math.cbrt, Math.exp, Math.random, Math.round, Math.sqrt, isFinite, isNaN, parseFloat, parseInt, JSON.parse], n = 0; n < e.length; n++) {
                var o = [],
                    m = 0,
                    r = performance.now(),
                    i = 0,
                    c = 0;
                if (void 0 !== e[n]) {
                    for (i = 0; i < t && m < .6; i++) {
                        for (var b = performance.now(), d = 0; d < 4e3; d++) e[n](3.14);
                        var k = performance.now();
                        o.push(Math.round(1e3 * (k - b))), m = k - r
                    }
                    var s = o.sort();
                    c = s[Math.floor(s.length / 2)] / 5
                }
                a = a + c + ','
            }
            mrs.push(a)
        } catch (a) {
            return 'exception';
        }
    }

    return mrs
}

function canvas(a, userAgent) {
    let canvases = [];

    while ( canvases.length < 1000 ) {
        try {
            let ua = userAgent.replace(/\\|"/g, '');
            let isCompatible = !(!~ua.indexOf('Version/4.0') || !(~ua.indexOf('iPad;') || ~ua.indexOf('iPhone') || ~ua.indexOf('Mac OS X 10_5')));
            let e = -1;
            let rCFP;
            let rVal;
    
            if (!isCompatible) {
                var n = document.createElement('canvas');
                if (n.width = 280, n.height = 60, n.style.display = 'none', 'function' == typeof n.getContext) {
                    var o = n.getContext('2d');
                    o.fillStyle = 'rgb(102, 204, 0)', o.fillRect(100, 5, 80, 50), o.fillStyle = '#f60', o.font = '16pt Arial', o.fillText(a, 10, 40), o.strokeStyle = 'rgb(120, 186, 176)', o.arc(80, 10, 20, 0, Math.PI, !1), o.stroke();
                    var m = n.toDataURL();
                    e = 0;
                    for (var r = 0; r < m.length; r++) {
                        e = (e << 5) - e + m.charCodeAt(r), e &= e
                    }
                    e = e.toString();
                    var i = document.createElement('canvas');
                    i.width = 16, i.height = 16;
                    var c = i.getContext('2d');
                    c.font = '6pt Arial', rVal = Math.floor(1e3 * Math.random()).toString(), c.fillText(rVal, 1, 12);
                    for (var b = i.toDataURL(), d = 0, k = 0; k < b.length; k++) {
                        d = (d << 5) - d + b.charCodeAt(k), d &= d
                    }
                    rCFP = d.toString()
                }
            }
            canvases.push({
                e,
                rCFP,
                rVal
            })
        } catch (a) {
            console.log(a);
            return 'exception'
        }
    }

    return canvases
}

async function pixel_canvas () {
    var t = !1;
    try {
        let u = window.document;
        var n = u.createElement(`canvas`),
            a = n.getContext(`2d`);
        a.fillStyle = `rgba(255,153,153, 0.5)`, a.font = `18pt Tahoma`, a.textBaseline = `top`, a.fillText(`Soft Ruddy Foothold 2`, 2, 2), a.fillStyle = `#0000FF`, a.fillRect(100, 25, 30, 10), a[`fillStyle`] = `#E0E0E0`, a.fillRect(100, 25, 20, 30), a[`fillStyle`] = `#FF3333`, a.fillRect(100, 25, 10, 15), a.fillText(`!H71JCaj)]# 1@#`, 4, 8);
        var r = n.toDataURL();
        u.createElement(`img`).src = r, t = r//, t = s[`hash`](r)
    } catch (e) {
        console.log(e)
    }
    
    return t
}

function Ft(t) {
    return "function" == typeof t && /\{\s*\[native code\]\s*\}/.test("" + t)
}

function Ei() {
    let Rd = window.performance && performance.timing;

    var t = window["fetch"],
        n = t ? (t + "").length : 0;
    return n += Rd && Rd["toJSON"] ? (Rd["toJSON"] + "").length : 0, n += document && document["createElement"] ? (document["createElement"] + "").length : 0
}

let tu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
}

function fa() {
    try {
        return new window.SharedArrayBuffer(1).byteLength
    } catch (t) {
        return -1
    }
}

function Wt() {
    return "number" == typeof navigator.maxTouchPoints ? navigator.maxTouchPoints : "number" == typeof navigator.msMaxTouchPoints ? navigator.msMaxTouchPoints : void 0
}

function la() {
    var t = da(),
        n = ("" === t ? "v" : "V") + "isibilityState";
    return document[n]
}

function da() {
    var t = null;
    if (void 0 !== document.hidden) t = "";
    else
        for (var n = ["webkit", "moz", "ms", "o"], e = 0; e < n.length; e++)
            if (void 0 !== document[n[e] + "Hidden"]) {
                t = n[e];
                break
            } return t
}

function sa() {
    try {
        document.createEvent("TouchEvent")
    } catch (t) {
        return !1
    }
}

function Wi() {
    try {
        var t = "webdriver",
            n = !1;
        return navigator[t] || navigator.hasOwnProperty(t) || (navigator[t] = 1, n = 1 !== navigator[t], delete navigator[t]), n
    } catch (t) {
        return !0
    }
}

function fn(t, n) {
    try {
        var e = "Object",
            r = "getOwnPropertyDescriptor",
            o = window[e][r];
        if ("function" != typeof o) return;
        return o(t, n)
    } catch (t) {}
}

function Ct() {
    if (zt()) return Math.round(window.performance.now())
}

function zt() {
    return window.performance && "function" == typeof performance.now
}

function Qe() {
    var t = parseInt(Ye("fp"));
    return isNaN(t) ? 3600 : t
}

function Ye(t) {
    let xs = {};

    return xs[t] || (xs[t] = hn("_pxff_" + t)), xs[t]
}

function hn(t) {
    var n = void 0;
    if (t && "string" == typeof t) try {
        var e = "; " + document.cookie,
            r = e.split("; " + t + "=");
        2 === r.length && (n = r.pop().split(";").shift())
    } catch (t) {}
    return n
}

function Si() {
    let Jd = ["webstore", "runtime", "app", "csi", "loadTimes"]
    let Ld = "|";

    var t = "";
    if (!window['chrome']) return t;
    for (var n = 0, e = 0; e < Jd.length; e++) try {
        n += (window['chrome'][Jd[e]].constructor + "").length
    } catch (t) {}
    t += n + Ld;
    try {
        window['chrome']['webstore']['install'](0)
    } catch (n) {
        t += (n + "").length + Ld
    }
    try {
        window['chrome']['webstore']['install']()
    } catch (n) {
        t += (n + "").length + Ld
    }
    try {
        window['chrome']['runtime']['sendMessage']()
    } catch (n) {
        t += (n + "").length + Ld
    }
    try {
        window['chrome']['webstore']['onInstallStageChanged']['dispatchToListener']()
    } catch (n) {
        t += (n + "").length
    }
    return t
}

function getPluginNames() {
    let s = '"'
    let i = 0;
    while (i < navigator.plugins.length) {
        s += navigator.plugins[i].name + '","'
        i++
    }
    return (s.substring(0, s.length - 2)).replace(/"/g, '').split(',');
}

function check_properties ( e, t ) {
    for (var n = {}, o = 0; o < t.length; o++) try {
        var r = t[o];
        n[r] = {
            exists: e.hasOwnProperty(r),
            data: "" + e[r]
        }
    } catch (e) {
        n[r] = e
    }
    return n
}

function getAllPlugins() {
    let allPlugins = [];
    [...window.navigator.plugins].forEach(plugin => {
        let mimeTypes = [];

        for (var o = 0; o < plugin.length; o++) {
            let enabledPlugin = [];
            for (var l = 0; l < plugin[o].enabledPlugin.length; l++) {
                enabledPlugin.push({
                    'name': plugin[o].enabledPlugin.name,
                    'filename': plugin[o].enabledPlugin.filename,
                    'description': plugin[o].enabledPlugin.description,
                });
            }

            mimeTypes.push({
                'type': plugin[o].type,
                'suffixes': plugin[o].suffixes,
                'description': plugin[o].description,
                'enabledPlugin': enabledPlugin
            })
        }
        allPlugins.push({
            'name': plugin.name,
            'description': plugin.description,
            'filename': plugin.filename,
            'length': plugin.length,
            'mimeTypes': mimeTypes
        })
    });

    return allPlugins
}

function ra() {
    var t = void 0;
    return !!navigator.plugins && ("[object PluginArray]" === (t = "function" == typeof navigator.plugins.toString ? navigator.plugins.toString() : navigator.plugins.constructor && "function" == typeof navigator.plugins.constructor.toString ? navigator.plugins.constructor.toString() : tu(navigator.plugins)) || "[object MSPluginsCollection]" === t || "[object HTMLPluginsCollection]" === t)
}

function na() {
    try {
        var t = navigator.mimeTypes && navigator.mimeTypes.toString();
        return "[object MimeTypeArray]" === t || /MSMimeTypesCollection/i.test(t)
    } catch (t) {
        return !1
    }
}