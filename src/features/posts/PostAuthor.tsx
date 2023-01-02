import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { User } from '../users/userType'

interface Props {
	userId: string
}

const PostAuthor = (props: Props) => {
    const users = useSelector(selectAllUsers)

    const author = users.find((user: User) => user.id === props.userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor