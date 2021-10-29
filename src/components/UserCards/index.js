import { selectUsers } from '../../redux/users/selectors';
import { selectImages } from '../../redux/images/selectors';
import Spinner from '../spinner';
import UserCard from './UserCard';

import { useSelector } from 'react-redux';
import './UserCard.css'

import setUserImage from '../../utils/setUserImage';

const UserCards = () => {
    const users = useSelector(selectUsers)
    const images = useSelector(selectImages)
    
    return users.map((userData) => {
        const user = setUserImage(userData, images);
        return <UserCard user={user}/>
    })
}

export default UserCards;



