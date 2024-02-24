import EUEventManager from "./EUEventManager.js";
/**
 * EU事件类
 */
export default class EUEvent {
    private _name;
    private _manager;
    constructor(name: String);
    get name(): String;
    set name(_name: String);
    get manager(): EUEventManager;
    set manager(_manager: EUEventManager);
}
