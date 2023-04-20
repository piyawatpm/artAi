import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: any) {
  return (
    <div className=" w-full flex flex-col min-h-screen bg ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
//
