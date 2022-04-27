const loadScript = async (script_path) => {
  return new Promise((resolve, reject) => {
    const scriptDom = document.createElement('script');
    scriptDom.type = 'text/javascript';
    scriptDom.onload = () => {
      resolve();
    }
    scriptDom.onerror = () => {
      reject();
      throw new Error('tianditu load error');
    }
    scriptDom.src = script_path;
    document.body.appendChild(scriptDom);
  });
}

export { loadScript };