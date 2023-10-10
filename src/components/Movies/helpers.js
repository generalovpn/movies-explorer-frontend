const setLocalStorageData = (key, newData) => {
    const currentData = JSON.parse(localStorage.getItem(key) || '{}');

    const data = {
      ...currentData,
      ...newData,
    };
    localStorage.setItem(key, JSON.stringify(data));
  };

const getLocalStorageData = (key) => JSON.parse(localStorage.getItem(key));

const toggleHandler = (setToggle, isToggle) => {
      setToggle(!isToggle);
      setLocalStorageData('lastSearchDataLocalStorage', {
        lastIsShortsOnly: !isToggle,
      });
    };

export {
  setLocalStorageData,
  getLocalStorageData,
  toggleHandler
}