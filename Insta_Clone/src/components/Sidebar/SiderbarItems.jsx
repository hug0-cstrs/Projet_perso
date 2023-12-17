import Home from "./Home"
import Notifications from "./Notifications"
import ProfileLink from "./ProfileLink"
import CreatePost from "./CreatePost"
import Search from "./Search"

const SiderbarItems = () => {
  return (
    <>
        <Home />
        <Search />
        <Notifications />
        <CreatePost />
        <ProfileLink />
    </>
  )
}

export default SiderbarItems