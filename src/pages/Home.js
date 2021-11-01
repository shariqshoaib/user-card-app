import Spinner from '../components/Spinner';
import UserCard from '../components/UserCards/UserCard';

import * as usersActions from '../redux/users/actions';
import * as imagesActions from '../redux/images/actions';
import { useSelector, useDispatch } from 'react-redux';

import { selectUsers } from '../redux/users/selectors';
import { selectImages } from '../redux/images/selectors'
import { selectIsLoading as selectUsersIsLoading } from '../redux/users/selectors';
import { selectIsLoading as selectImagesIsLoading } from '../redux/users/selectors';

import React, { useEffect } from 'react';



const UserCards = () => {
    const users = useSelector(selectUsers)
    const images = useSelector(selectImages)
    const isUsersLoading = useSelector(selectUsersIsLoading)
    const isImagesLoading = useSelector(selectImagesIsLoading)

  const dispatch = useDispatch();

  useEffect(() => {
    const initData = () =>{
      dispatch(usersActions.fetchUsers());
      dispatch(imagesActions.fetchImages())
    }
    initData();
  },[dispatch])
  
  if(isUsersLoading || isImagesLoading) return <Spinner />
    
    return users.map((userData) => {
        return <UserCard user={userData} images={images}/>
    })
}

export default UserCards;



