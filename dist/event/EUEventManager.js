import EUEvent from "./EUEvent.js";
import EUEventCallbackCouple from "./EUEventCallbackCouple.js";
class EUEventManager {
    static get eventCallbackHub() {
        return this._eventCallbackHub;
    }
    static get eventHub() {
        return this._eventHub;
    }
    /**
     * 事件注册
     * @param event 事件
     */
    static install(event) {
        //TODO: 事件应通过名字来直接确定
        //TODO : 事件已经存在异常
        for (let e of this.eventHub) {
            if (e.name === event.name) {
                return false;
            }
        }
        this.eventHub.push(event);
        this.eventCallbackHub.set(event, new Array());
        return true;
    }
    /**
     * 事件卸载
     * @param event 事件
     */
    static uninstall(eventName) {
        //TODO : 事件不存在异常
        eventName = String(eventName);
        this._eventHub.filter(e => { return e.name !== eventName; });
        for (const [e, couple] of this.eventCallbackHub) {
            if (e.name === eventName) {
                this.eventCallbackHub.delete(e);
                break;
            }
        }
        return true;
    }
    /**
     * 事件与callback绑定
     * @param event
     * @param callback
     * @param isOnce
     * @param isStart
     */
    static on(event, callback, isOnce = false, isStart = true) {
        var _a, _b;
        //TODO: event不存在错误
        if (event instanceof String || typeof event === "string") {
            event = String(event);
            for (const e of this.eventHub) {
                if (e.name === event) {
                    const couple = new EUEventCallbackCouple(e, callback, isOnce, isStart);
                    (_a = this.eventCallbackHub.get(e)) === null || _a === void 0 ? void 0 : _a.push(couple);
                }
                else { }
            }
        }
        else if (event instanceof EUEvent) {
            for (const e of this.eventHub) {
                if (e === event) {
                    const couple = new EUEventCallbackCouple(event, callback, isOnce, isStart);
                    (_b = this.eventCallbackHub.get(event)) === null || _b === void 0 ? void 0 : _b.push(couple);
                }
            }
            //TODO： event不存在异常
        }
    }
    /**
     * 事件与callback解绑
     * @param event
     * @param callback
     */
    static off(event, callback) {
        // TODO: event不存在错误
        if (event instanceof String || typeof event === "string") {
            event = String(event);
            for (const e of this.eventHub) {
                if (e.name === event) {
                    this.eventCallbackHub.delete(e);
                }
                else { }
            }
        }
        else if (event instanceof EUEvent) {
            if (this.eventCallbackHub.has(event)) {
                this.eventCallbackHub.delete(event);
            }
            else { }
        }
    }
}
/**
 * 事件管理者
 * 负责事件的注册、卸载
 * 负责事件与func关系的维护
 */
EUEventManager._eventHub = new Array();
EUEventManager._eventCallbackHub = new Map();
export default EUEventManager;
//# sourceMappingURL=EUEventManager.js.map