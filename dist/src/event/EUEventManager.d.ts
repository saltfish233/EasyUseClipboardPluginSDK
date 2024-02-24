import EUEvent from "./EUEvent.js";
import EUEventCallbackCouple from "./EUEventCallbackCouple.js";
export default class EUEventManager {
    /**
     * 事件管理者
     * 负责事件的注册、卸载
     * 负责事件与func关系的维护
     */
    private static _eventHub;
    private static _eventCallbackHub;
    static get eventCallbackHub(): Map<EUEvent, EUEventCallbackCouple[]>;
    static get eventHub(): EUEvent[];
    /**
     * 事件注册
     * @param event 事件
     */
    static install(event: EUEvent): Boolean;
    /**
     * 事件卸载
     * @param event 事件
     */
    static uninstall(eventName: String | string): Boolean;
    /**
     * 事件与callback绑定
     * @param event
     * @param callback
     * @param isOnce
     * @param isStart
     */
    static on(event: EUEvent | String, callback: Function, isOnce?: Boolean, isStart?: Boolean): void;
    /**
     * 事件与callback解绑
     * @param event
     * @param callback
     */
    static off(event: EUEvent | String, callback: Function): void;
}
