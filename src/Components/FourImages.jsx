import "../style/fourImages.css";
import milk from '../images/image-gallery-milkbottles.jpg';
import orange from '../images/image-gallery-orange.jpg';
import cone from '../images/image-gallery-cone.jpg';
import sugarcubes from '../images/image-gallery-sugarcubes.jpg';

const FourImages = () => {
    return (
        <section className="images_container">
            <img src={milk} alt="milk" />
            <img src={orange} alt="orange" />
            <img src={cone} alt="cone" />
            <img src={sugarcubes} alt="cubes" />
        </section>
    )
}

export default FourImages
