import { createContext, useContext, useReducer } from "react";

const initialState = {
  user: {},
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "logout":
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error("Unknown error type");
  }
}
const AuthContext = createContext();

function AuthProvider({ children }) {
  const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(userMail, userPass) {
    if (userMail === FAKE_USER.email && userPass === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthCountext() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthProvider is used out of border in DOM tree.");
  return context;
}

export { useAuthCountext, AuthProvider };
