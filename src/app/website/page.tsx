import Clients from "../components/Clients";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import MoreInfo from "../components/MoreInfo";
import Services from "../components/Services";
import Us from "../components/Us";

export default function Page() {
  return (
    <>
      <MainBanner/>
      <Us/>
      <Services/>
      <Clients/>
      <MoreInfo/>
      <ContactUs/>
      <Footer/>
    </>
  )
}