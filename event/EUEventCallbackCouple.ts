import EUEvent from "./EUEvent.js";

export default class EUEventCallbackCouple {
    /**
     * 维护Event与Callback连接类
     */

    private _event: EUEvent;
    private _callback: Function;
    private once: Boolean;
    private start: Boolean;


    constructor(event: EUEvent, callback: Function, once: Boolean, start: Boolean) {
        this._event = event;
        this._callback = callback
        this.once = once
        this.start = start
    }

    get event() {
        return this._event
    }
    set event(_event: EUEvent) {
        this._event = _event
    }

    get callback() {
        return this._callback
    }
    set callback(_callback: Function) {
        this._callback = _callback
    }

}