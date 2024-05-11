import { registerPlugin } from '@capacitor/core';
const Bugly = registerPlugin('Bugly', {
    web: () => import('./web').then(m => new m.BuglyWeb()),
});
export * from './definitions';
export { Bugly };
//# sourceMappingURL=index.js.map