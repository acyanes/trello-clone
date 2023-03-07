import Link from 'next/link';
import NavList from './NavList';

const Sidebar = () => {
  const navList = [{ name: 'Boards' }, { name: 'Settings' }, { name: 'Help' }];
  return (
    <div className='flex bg-red-700 border-2 h-screen w-[15%] justify-center'>
      <NavList navList={navList} />
    </div>
  );
};

export default Sidebar;
