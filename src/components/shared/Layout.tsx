const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col  bg-primary">
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
