import "./CreatePost.css"
import { useState, useContext } from 'react'
import AccountIcon from "@/Components/AccountIcon/AccountIcon.jsx"
import { userContext } from '@/Utils/contexts'


const CreatePost = () => {
    const [postObject, setPostObject] = useState(
        {content: localStorage.getItem("post_in_progress") || ""})
    const { LoggedInUser } = useContext(userContext)

    const handleChangeEvent = (e) => {
        localStorage.setItem("post_in_progress")
        setPostObject({...postObject, [e.target.id]: e.target.value})
    }

    return (
        <div className="create-post-container">
            <AccountIcon user={LoggedInUser}/>
            <label>
                <input
                    id="content"
                    type="text"
                    placeholder="What's on your mind?"
                    value={postObject["content"]}
                    onChange={(e) => handleChangeEvent(e)}
                />
            </label>
            <button>
                Post
            </button>
        </div>
    )
}

export default CreatePost