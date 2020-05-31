window.onload = function () {
  const TabGroup = require("electron-tabs");
  let tabGroup = new TabGroup();
  let tab = tabGroup.addTab({
    title: "Pomo",
    src: "./src/view/timer.html",
    visible: true,
    active: true,
    closable: false,
  });
  tabGroup.addTab({
    title: "About",
    src: "http://electron.atom.io",
    visible: true,
    closable: false,
  });
};
