/**
 * EU事件类
 */
export default class EUEvent {
    // 事件源
    // private src: String;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(_name) {
        this._name = _name;
    }
    get manager() {
        return this._manager;
    }
    set manager(_manager) {
        this._manager = _manager;
    }
}
//# sourceMappingURL=EUEvent.js.map