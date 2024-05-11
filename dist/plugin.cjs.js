'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Bugly = core.registerPlugin('Bugly', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BuglyWeb()),
});

class BuglyWeb extends core.WebPlugin {
    initCrashReport() {
        throw new Error('Method not implemented.');
    }
    setUserValue() {
        throw new Error('Method not implemented.');
    }
    setUserSceneTag() {
        throw new Error('Method not implemented.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BuglyWeb: BuglyWeb
});

exports.Bugly = Bugly;
//# sourceMappingURL=plugin.cjs.js.map
