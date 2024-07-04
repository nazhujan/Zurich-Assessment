import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <Header />
     <div style={{flex:4}}> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;