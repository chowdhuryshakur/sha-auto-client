import NotFoundImg from '../img/404.jpg'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const NotFound = () => {
  return (
    <div>
      <Header></Header>
      <main className="mx-auto w-75">
        <img src={NotFoundImg} alt="" />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;