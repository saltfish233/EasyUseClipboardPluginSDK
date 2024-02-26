import EUEvent from "./EUEvent.js";
export default class EUEventHandler {
    /**
     * EU事件处理器
     *
     * func handle: 找到event的callback，并invoke
     * func invode: invoke func
     */
    static handle(event: EUEvent): void;
    private static invoke;
}
