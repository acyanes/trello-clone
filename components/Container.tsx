interface IProps {
  children: React.ReactNode[];
}

const Container = ({ children }: IProps) => {
  return <div className='flex bg-slate-500'>{children}</div>;
};
export default Container;
