import BrowseCategories from '../components/HomePage/BrowseCategories';
import Discover from '../components/HomePage/Discover';
import Hero from '../components/HomePage/Hero';
import Highlight from '../components/HomePage/Highlight';
import HowItWorks from '../components/HomePage/HowItWorks';
import Newsletter from '../components/HomePage/Newsletter';
import TopCreators from '../components/HomePage/TopCreators';
import TrendingCollection from '../components/HomePage/TrendingCollection';

function HomePage() {

  return (
    <>
     <Hero />
     <TrendingCollection />
     <TopCreators />
     <BrowseCategories />
     <Discover />
     <Highlight />
     <HowItWorks />
     <Newsletter />
    </>
  )
}

export default HomePage
