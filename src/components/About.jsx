import Lottie from "react-lottie-player";
import adventureAnimation from "../assets/about.json"; 

const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div>
        <h2 className='font-bold text-3xl mb-3'>About our site</h2>
        <p className='font-semibold text-base mb-5'><span className="hidden md:flex">
        Discover the magic of cinema with the latest blockbusters, heartwarming stories, and adrenaline-pumping adventures. Explore detailed movie synopses, cast highlights, release dates, and stunning visuals. From thrilling sci-fi epics to charming animated features, there's something for everyone to enjoy. Immerse yourself in a world where every story takes you on an unforgettable journey!</span> Get ready to explore a wide range of genres, from pulse-pounding thrillers and epic fantasy sagas to laugh-out-loud comedies and heartwarming dramas. Stay updated on the latest in cinema, with comprehensive details about your favorite films, their cast, and captivating plotlines. Whether you're looking for the next box office hit or an indie gem, your cinematic adventure begins here!</p>
        <button className='btn bg-red-400 hover:bg-red-400 text-white'>Know more</button>
      </div>
      <div className="h-[400px]">
        <div className="w-full h-full">
        <Lottie
              loop
              animationData={adventureAnimation}
              play
              className="w-full h-full"
            />
        </div>
      </div>
    </div>
  );
};

export default About;