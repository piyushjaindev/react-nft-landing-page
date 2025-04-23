import BrowseCategories from './components/BrowseCategories';
import Discover from './components/Discover';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import HowItWorks from './components/HowItWorks';
import Nav from './components/Nav';
import Newsletter from './components/Newsletter';
import TopCreators from './components/TopCreators';
import TrendingCollection from './components/TrendingCollection';

function App() {
 

  return (
    <>
     <Nav />
     <Hero />
     <TrendingCollection />
     <TopCreators />
     <BrowseCategories />
     <Discover />
     <Highlight />
     <HowItWorks />
     <Newsletter />
     <Footer />
    </>
  )
}

export default App
