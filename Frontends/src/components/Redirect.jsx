import { useNavigate } from 'react-router';

const Redirect = () => {
 const navigate = useNavigate();

 const redirectTo = (path) => {
    navigate(path);
 };

 return (
    <button onClick={() => redirectTo('/home')}>Go</button>
 )
}

export default Redirect;