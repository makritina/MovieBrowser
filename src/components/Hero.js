
const Hero = ({ text, backdrop }) => {
  return(
    <header className="text-white p-3 hero-container text-center herocustom">
    <h1 className="hero-text">{text} </h1>
    {backdrop &&

    <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
      }

    </header>
  )
}
export default Hero;
