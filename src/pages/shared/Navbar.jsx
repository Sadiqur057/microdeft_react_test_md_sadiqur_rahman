import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='flex justify-center gap-10 my-4'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/add'>Add course</NavLink>
      <NavLink to='/my'>My course</NavLink>
    </nav>
  );
};

export default Navbar;