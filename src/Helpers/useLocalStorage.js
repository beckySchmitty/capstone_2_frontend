import { useState, useEffect } from "react";

// Custom hook for keeping state data synced with localStorage.
//  Ex. const [myThing, setMyThing] = useLocalStorage("myThing")


function useLocalStorage(key, firstVal = null) {
  const initialValue = localStorage.getItem(key) || firstVal;

  const [item, setItem] = useState(initialValue);

  useEffect(function setKeyInLocalStorage() {

    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
}

export default useLocalStorage;
