import Hero from './Hero';
import Footer from './Footer'



const HomeView = () => {
  return(
    <div className="custombg text-white">
    <div >
      <Hero text='Welcome to my page!' />
      <div className='container customecontainer'>
        <div className='row  text-center '>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className='lead'>
This is a React project, where you can search about your desired movie and even learn some details you may didn't know before!</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>


    </div>
  )
}

export default HomeView;
