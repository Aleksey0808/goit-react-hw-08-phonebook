import { NavLink } from 'react-router-dom';
// import Contacts from '../Contacts/Contacts';
// import Loader from '../../components/Loader/Loader';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the phonebook</h2>
      <NavLink to="/register"> Do you a have account?</NavLink>
      <NavLink to="/login">Or registration?</NavLink>

      {/* <Contacts /> */}
    </div>
  );
};

export default Home;
