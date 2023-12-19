const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center bg-primary min-h-screen">
      <div className="min-w-[90%] p-6">{children}</div>
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
