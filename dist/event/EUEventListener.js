import EUEvent from "./EUEvent.js";
import EUEventHandler from "./EUEventHandler.js";
import EUEventManager from "./EUEventManager.js";
export default class EUEventListener {
    /**
     * func trigger: event发生
     */
    static trigger(event) {
        if (event instanceof String || typeof event === "string") {
            event = String(event);
            for (const e of EUEventManager.eventHub) {
                if (e.name === event) {
                    console.log(event + "触发");
                    EUEventHandler.handle(e);
                }
            }
        }
        else if (event instanceof EUEvent) {
            console.log(event.name + "触发");
            EUEventHandler.handle(event);
        }
    }
}
//# sourceMappingURL=EUEventListener.js.map