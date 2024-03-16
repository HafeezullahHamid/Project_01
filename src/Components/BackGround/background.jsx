import "./background.css";
import video1 from "../../assets/video1.mp4";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

function Background({ playStatus, heroCount }) {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={img1} className="background" alt="" />;
  } else if (heroCount === 1) {
    return <img src={img2} className="background" alt="" />;
  } else if (heroCount === 2) {
    return <img src={img3} className="background" alt="" />;
  }
}

export default Background;
