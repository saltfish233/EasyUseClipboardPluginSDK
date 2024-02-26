import EUEventManager from "./EUEventManager.js";
export default class EUEventHandler {
    /**
     * EU事件处理器
     *
     * func handle: 找到event的callback，并invoke
     * func invode: invoke func
     */
    static handle(event) {
        console.log("事件处理中...");
        const hub = EUEventManager.eventCallbackHub;
        if (hub.has(event)) {
            const couples = hub.get(event);
            if (couples === null || couples === void 0 ? void 0 : couples.length) {
                for (const couple of couples) {
                    this.invoke(couple.callback);
                }
            }
        }
        console.log("事件处理完成");
    }
    static invoke(callback) {
        callback();
    }
}
//# sourceMappingURL=EUEventHandler.js.map