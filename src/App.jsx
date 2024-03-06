import { useState, useEffect } from 'react'
import './App.css'
import NavigationMenu from '@/Components/NavigationMenu/NavigationMenu'
import Header from '@/Components/Header/Header'
import ContentView from '@/Components/ContentView/ContentView'
import { userContext } from '@/Utils/contexts'
import { baseUserUrl } from './Utils/apiUtils'

const user = {
  firstName: "A",
  lastName: "B",
  favouriteColour: "Lightgreen"
}

function App() {
  const [loggedInUser, setLoggedInUser] = useState(user)

  const retrieveUserDetails = async () => {
    await fetch(baseUserUrl)
      .then((res) => res.json())
      .then((res) => setLoggedInUser({...res.at(-1)}))
  }
  
  useEffect(() => {
    retrieveUserDetails()
  }, [])

  return (
    <>
    <userContext.Provider
      value={{LoggedInUser: loggedInUser}}
    >
      <Header />
      <NavigationMenu />
      <ContentView />
    </userContext.Provider>
    </>
  )
}

export default App
