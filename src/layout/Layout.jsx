import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Routers from '../routes/Routers';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
