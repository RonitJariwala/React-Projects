import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className="hero">
      {/* Hero Text Section */}
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      {/* Explore Features Section */}
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="Arrow button" />
      </div>

      {/* Dots and Play Section */}
      <div className="hero-dot-play">
        {/* Navigation Dots */}
        <ul className="hero-dots">
          {Array(3)
            .fill()
            .map((_, index) => (
              <li
                key={index}
                onClick={() => setHeroCount(index)}
                className={heroCount === index ? 'hero-dot orange' : 'hero-dot'}
              ></li>
            ))}
        </ul>

        {/* Play Button */}
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt={playStatus ? 'Pause Icon' : 'Play Icon'}
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
