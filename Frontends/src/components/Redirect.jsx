import { useNavigate } from 'react-router';

const Redirect = ({ where, message }) => {
 const navigate = useNavigate();

 const redirectTo = (path) => {
    navigate(path);
 };

 return (
    <button onClick={() => redirectTo(where)}>{message}</button>
 )
}

export default Redirect;