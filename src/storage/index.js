const STORAGE_KEY = "lottery";
export default {
  // 存储值
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    } else {
      let val = this.getStorage();
      val[key] = value;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取某一个模块下面的属性user下面的userName
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
  },
  clear(key, module_name) {
    let storage = this.getStorage();
    if (module_name) {
      if (!storage[module_name]) return;
      delete storage[module_name][key];
    } else {
      delete storage[key];
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  }
};
