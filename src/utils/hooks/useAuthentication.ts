import React from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./../../../firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function useAuthentication() {
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(undefined);
        }
      }
    );

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user,
  };
}

export { useAuthentication };
