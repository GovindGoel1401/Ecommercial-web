import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Products from './components/Products/Products.jsx'
import TopProducts from './components/TopProducts/TopProducts.jsx'
import Banner from './components/Banner/Banner.jsx'
import Subscribe from './components/Subscribe/Subcribe.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Footer from './components/Footer/Footer.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
const App = () => {
   React.useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 1000,
      easing: 'ease-in-out',
      // once: true,
    });
    AOS.refresh();
  }
  , [])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'> 
      <NavBar/>
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default App