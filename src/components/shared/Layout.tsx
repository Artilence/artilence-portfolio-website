const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col  bg-primary min-h-screen ">
      <div className="min-w-[90%] flex-1 flex flex-col">{children}</div>
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
