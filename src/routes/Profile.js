import { authService, dbService } from "fbase"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Profile = ({userObj, refreshUser}) => {
  const history = useHistory()
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)

  const onLogOutClick = () => {
    authService.signOut()
    history.push("/")
  }

  const onChange = (e) => {
    const {
      target: {value}
    } = e
    setNewDisplayName(value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if(userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({displayName: newDisplayName})
      refreshUser()
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
}

export default Profile