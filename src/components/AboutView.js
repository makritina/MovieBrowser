import Hero from './Hero';
import Footer from './Footer';

const AboutView = () => {
  return (
    <div>
    <Hero text="About This movie Browser"/>
    <div className="container">
    <div className="row">
    <div className="col-lg-8 offset-lg-2 my-5">
    <p className="lead">
    Search your movie on the search tab so find out </p>
    </div>
    </div>

    </div>
    <Footer/>
    </div>
  )
}

export default AboutView;
