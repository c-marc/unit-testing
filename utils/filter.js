const filter = (tab, cb) => {
  let newTab = [];

  if (cb !== undefined && tab !== null) {
    for (let i = 0; i < tab.length; i++) {
      if (cb(tab[i]) === true) {
        newTab.push(tab[i]);
      }
    }
  }

  return newTab;
};

module.exports = filter;
