import Hero from '../components/Hero';
import About from '../components/About';
import Header from '../components/Header';
export default function App() {
  return (
    <div className='wrapper'>
      <Hero />
      <Header order='003' title='about' />
      <About />
    </div>
  );
}
