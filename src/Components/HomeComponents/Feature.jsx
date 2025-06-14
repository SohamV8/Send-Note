import './Feature.css';
import feature from '../../assets/feature.png';
import tornlast from '../../assets/tornlast.png';
import SparklesCore from './SparklesCore';

function Feature() {
  return (
    <div className="FeatureContainer">
      <img src={tornlast} alt="torn paper" className="last-torn-feat" />
      <div className="featmain">
        <div className="SparklesPreview">
          <h1 className="F-Title glitch" data-text="WE GOT EVERYTHING COVER FOR YOU">
            WE GOT EVERYTHING COVER FOR YOU
          </h1>
          <h3 className="F-SubTitle glitch" data-text="Everything Everywhere All at Once">
            Everything Everywhere All at Once
          </h3>
          <div className="gradient-line" />
          <div className="sparkles-container">
            <SparklesCore
              background="transparent"
              minSize={0.6}
              maxSize={1}
              particleDensity={4000}
              particleColor="#FFFFFF"
              className="sparkles-text"
            />
          </div>
        </div>
        <div className="Feat">
          <img src={feature} alt="feature" className="Feat-img" />
        </div>
      </div>
    </div>
  );
}

export default Feature;