import EUEvent from "./EUEvent.js";
import EUEventManager from "./EUEventManager.js";

export default class EUEventHandler {
    /**
     * EU事件处理器
     * 
     * func handle: 找到event的callback，并invoke
     * func invode: invoke func
     */


    static handle(event: EUEvent) {
        console.log("事件处理中...")

        const hub = EUEventManager.eventCallbackHub
        
        if (hub.has(event)) {
            const couples = hub.get(event)
            if (couples?.length) {
                for (const couple of couples) {
                    this.invoke(couple.callback)
                }
            }
        }
        console.log("事件处理完成")
    }

    private static invoke(callback: Function) {
        callback()

    }
}