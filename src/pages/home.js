import Image1 from '../resources/pic1.jpg';
import Image2 from '../resources/pic2.jpg';
import Image3 from '../resources/pic3.jpg';
import Image4 from '../resources/pic4.jpg';

const Home = () => {
    return (
        <div className="home">
            <h2>Nissan GT-R</h2>
                <div class="row">
                    <div class="column">
                        <a href>
                            <img src = {Image1} alt="GTR-Picture-1" />
                        </a>
                    </div>
                    <div class="column">
                        <a href>
                            <img src = {Image2} alt="GTR-Picture-2" />
                        </a>
                    </div>
                    <div class="column">
                        <a href>
                            <img src = {Image3} alt="GTR-Picture-3" />
                        </a>
                    </div>
                    <div class="column">
                        <a href>
                            <img src = {Image4} alt="GTR-Picture-4" />
                        </a>
                    </div>
                </div>                                  
        </div>      
    );
}

export default Home;