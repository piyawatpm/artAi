import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <div className=' w-full h-full bg'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
//
