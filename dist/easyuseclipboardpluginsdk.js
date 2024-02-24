class t {
  // 事件源
  // private src: String;
  constructor(e) {
    this._name = e;
  }
  get name() {
    return this._name;
  }
  set name(e) {
    this._name = e;
  }
  get manager() {
    return this._manager;
  }
  set manager(e) {
    this._manager = e;
  }
}
export {
  t as default
};
