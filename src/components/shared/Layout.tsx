const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col  bg-primary min-h-screen">
      <div className="flex-1 flex flex-col   min-w-[90%] mx-auto">
        {children}
      </div>
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
