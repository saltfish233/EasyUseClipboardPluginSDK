import EUEvent from "./EUEvent.js";
export default class EUEventCallbackCouple {
    /**
     * 维护Event与Callback连接类
     */
    private _event;
    private _callback;
    private once;
    private start;
    constructor(event: EUEvent, callback: Function, once: Boolean, start: Boolean);
    get event(): EUEvent;
    set event(_event: EUEvent);
    get callback(): Function;
    set callback(_callback: Function);
}
