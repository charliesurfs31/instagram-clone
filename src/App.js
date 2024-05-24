
import { useEffect } from 'react';
import './App.css';
import Homepage from './Homepage.tsx';
import Authentication from './authentication/Authentication.tsx';
import { useSelector } from 'react-redux';
import { loginUser, setLoading } from './features/userSlice.tsx';
import { useDispatch } from 'react-redux';
import { auth } from './firebase.tsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser){
        dispatch(
          loginUser({
        uid: authUser.uid,
        username: authUser.displayName,
        email: authUser.email,
        })
      );
      dispatch(setLoading(false));
      } else {
        console.log('User is logged out');
      }
    }) 
  }, []);

  const user = useSelector(state => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
    console.log(auth.currentUser);

    return (
      <div className="app">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader">
              <div className="spinner"></div>
            </div>
          </div>
        ) : (
          <>
            {user ? <Homepage /> : <Authentication />}
          </>
        )}
      </div>
    );
  }

export default App;
