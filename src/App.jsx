import { useState } from 'react'
import "./App.css"
import AuthLoginPage from "./AuthLoginPage";
import ChatMessagesPage from "./ChatMessagesPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthLoginPage onAuth={(user) => setUser(user)} />
  } else {
    return <ChatMessagesPage user={user} />
  }
}

export default App;