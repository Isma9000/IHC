import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import ProductRecommendations from "../components/ProductRecommendations/ProductRecommendations"
import CustomerReviews from "../components/CustomerReviews/CustomerReviews"
import VirtualAssistant from "../components/VirtualAssistant/VirtualAssistant"
import Footer from "../components/Footer/Footer"
import "../styles/globals.css"

function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ProductRecommendations />
      <CustomerReviews />
      <VirtualAssistant />
      <Footer />
    </div>
  )
}

export default Home;