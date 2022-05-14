import React from 'react'
import Featured from '../../components/featured/featured'
import FeaturedProperties from '../../components/featuredproperty/featuredproperty'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import MailList from '../../components/mailList/mailList'
import Navbar from '../../components/navbar/navbar'
import PropertyList from '../../components/propertyList/propertylist'
import './home.css';


const Home = () => {
  return (
    <div>
     <Navbar/>
     <Header/>
     <div className="homeContainer">
      <Featured/> 
      <h2 className="homeTitle">Browse by property type</h2>
<PropertyList/>
<h2 className="homeTitle">Homes guests love</h2>
<FeaturedProperties/>
<MailList/>
<Footer/>
     </div>
    </div>
  )
}

export default Home


