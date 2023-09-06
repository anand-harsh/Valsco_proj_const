import'./Home.css';

import img1 from '../assets/construction.jpg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/genesisbgimg.png'
import img6 from '../assets/img6.png'

export const Home = () => {
  return (
    <>
    <div id="home">
    <section className="text-section">
        <div>
            <h1 className='main-h1 dark:text-white'>ABCD</h1>
            <h1 className="h1">COMPANY</h1>
        </div>
        <div className='home-btn-container'>
            <button className="btn1">&larr;</button>
            <button className="btn2">&rarr;</button>
        </div>
    </section>
    <section className="construction-img">
        <img src={img1} alt="rghnsrgh" />
        <button className="img-btn">read more &nbsp; &rarr;</button>
    </section>
</div>



    <div className="image-layout">
    <div className="image-containers">
        <section className="left-images">
        <img className="img2" src={img2} alt="Image 1" />
        <img className="img3" src={img4} alt="Image 3" />
        </section>
        <section className="right-image">
        <img className="img4" src={img3} alt="Image 2" />
        </section>
    </div>

      <div className="text-container">
        <h2 className='home-h2 dark:text-white'>About</h2>
        <p className='home-p '>{`Write your message.  .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}</p>
        {/* <h4>Read more</h4> */}
        {/* <button className='read'>   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &rarr;</button> */}
        <button className='read'>read more &nbsp;  &rarr; </button>
      </div>
      
    </div>


    <div className='info'>
    <h1 className='mission'>Mission Statement</h1>
    <div className='info-content'>
        <section className='info-item'>
            <h2 className='home-h2'>1</h2>
            <p className='home-p text-grey dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
        </section>
        <section className='info-item info-itemx'>
            <h2 className='home-h2'>2</h2>
            <p className='home-p text-grey dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor.</p>
        </section>
    </div>
</div>


<div className='our-project'>
    <h1 className='project-heading dark:text-white'>Our Projects</h1>
    <section className='project-container'>
        <div className="project-item-1">
            <div className="image-container">
                <img className='project-image-1' src={img5} alt="Project Genesis" />
                <div className="project-overlay">
                    <h2 className='home-h2'>Project <br /> Genesis</h2>
                    <button className='viewmore-btn'>View More &rarr;</button>
                </div>
            </div>
        </div>
        <div className="project-item-2">
            <div className="image-container">
                <img className='project-image-2' src={img6} alt="" />
            </div>
        </div>
    </section>
</div>







    </>
    
  )
}