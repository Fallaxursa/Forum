import { useNavigate } from 'react-router';

const Redirect = ({ where, message }) => {
 const navigate = useNavigate();

 const redirectTo = (path) => {
    navigate(path);
 };

 return (
    <button onClick={() => redirectTo(where)} className='rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors duration-250 font-soul p-6 hover:bg-[#535bf2]'>{message}</button>
 )
}

export default Redirect;