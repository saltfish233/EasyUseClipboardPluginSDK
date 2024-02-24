import EUEventManager from "./EUEventManager.js"

/**
 * EU事件类
 */
export default class EUEvent {
    // 名称
    private _name: String
    // 管理者
    private _manager: EUEventManager
    // 事件源
    // private src: String;

    constructor(name: String) {
        this._name = name
    }

    get name() {
        return this._name
    }
    set name(_name) {
        this._name = _name
    }

    get manager() {
        return this._manager
    }
    set manager(_manager) {
        this._manager = _manager
    }


}