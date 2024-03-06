import AccountIcon from '@/Components/AccountIcon/AccountIcon'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const PostItemAuthor = ({user, post}) => {
    const navigate = useNavigate()

    return (
        <div className="post-user-information-container">
            <AccountIcon user={user} />
            <div className='post-user-information'>
            <span>
                {user.firstName} {user.lastName}
            </span> <br/>
            <span 
                className='post-title'
                onClick={() => navigate(`/post/${post.id}`)}
            >
                    {post.title}
            </span>
            </div>
        </div>
    )
}

PostItemAuthor.propTypes = {
    user: PropTypes.object,
    post: PropTypes.object,
}

export default PostItemAuthor