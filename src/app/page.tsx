
import { Metadata } from 'next'
import { AppProps } from 'next/app';
import MarketplaceScreen from './screen/createMarketplace/MarketplaceScreen'
import NotableArticlesScreen from './screen/notableArticles/NotableArticlesScreen'
import Collections from './screen/collections/CollectionsScreen'
import SwiperSlider from './screen/swiperSlider /SwiperSliderScreen'
import Footer from './screen/Footer'
import Header from './screen/Header'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Rarible',
}
 
export default function Page(){
  return (
    <main className='mr-8  ml-8'>
  <Header /> 
<SwiperSlider />
<Collections />
<NotableArticlesScreen/>
<Footer />
    </main>
  )
}
