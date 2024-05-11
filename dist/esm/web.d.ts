import { WebPlugin } from '@capacitor/core';
import type { BuglyPlugin } from './definitions';
export declare class BuglyWeb extends WebPlugin implements BuglyPlugin {
    initCrashReport(): Promise<void>;
    setUserValue(): Promise<void>;
    setUserSceneTag(): Promise<void>;
}
