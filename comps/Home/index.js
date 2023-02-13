import ApplicationForm from "./ApplicationForm";
import Testimonial from "./Testimonial";
import Migration from "./Migration";
import Services from "./Services";
import Trusted from "./Trusted";
import Choose from "./Choose";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <Trusted />
      <Services />
      <Choose />
      <Migration />
      <Testimonial />
      <ApplicationForm />
    </>
  )
}

export default Home