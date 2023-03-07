import Link from 'next/link';

interface IProps {
  navList: {
    name: string;
  }[];
}

const NavList = ({ navList }: IProps) => {
  return (
    <div>
      <ul className='flex flex-col'>
        {navList.map((nav) => (
          <div key={nav.name} className='mb-4'>
            <Link href={nav.name.toLowerCase()}>{nav.name}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
