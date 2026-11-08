(() => {
 const prefix='fan-favorites-league-style-trial-v1:';
 globalThis.previewStorage={
  getItem(key){const value=globalThis.localStorage.getItem(prefix+key);return value===null&&key==='nfl-sorter-appearance-v1'?'light':value;},
  setItem(key,value){globalThis.localStorage.setItem(prefix+key,value);},
  removeItem(key){globalThis.localStorage.removeItem(prefix+key);}
 };
})();