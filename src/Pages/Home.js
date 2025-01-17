import React from 'react';
import Main from '../Components/Main'
import PhotoGallery from '../Components/PhotoGallery';
import Abouthome from '../Components/Abouthome';
import ServiceHom from '../Components/ServiceHom';
import Footer from '../Components/Footer'
import Projects from './Projects';
import ProjectHom from '../Components/ProjectHom';



const Home = () => {
  return (
    <div>
        {/* hiii */}
<Main />
<PhotoGallery />
<Abouthome />
<ServiceHom />
<ProjectHom />
<Footer />

    </div>
  )
}

export default Home;
