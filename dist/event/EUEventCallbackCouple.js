export default class EUEventCallbackCouple {
    constructor(event, callback, once, start) {
        this._event = event;
        this._callback = callback;
        this.once = once;
        this.start = start;
    }
    get event() {
        return this._event;
    }
    set event(_event) {
        this._event = _event;
    }
    get callback() {
        return this._callback;
    }
    set callback(_callback) {
        this._callback = _callback;
    }
}
//# sourceMappingURL=EUEventCallbackCouple.js.map