import UserCards from './components/UserCards'
import Spinner from './components/spinner';

import * as usersActions from './redux/users/actions';
import * as imagesActions from './redux/images/actions';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsLoading as selectUsersIsLoading } from './redux/users/selectors';
import { selectIsLoading as selectImagesIsLoading } from './redux/users/selectors';

import { useEffect } from 'react';



const App = () => {
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
  return <UserCards />
}

export default App;
