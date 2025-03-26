import React from 'react';
import './YT.css';

const VIDEO_IDS = [
  { id: 'djQqMFpjs_4', name: 'ENGINEERING' },
  { id: 'bvqDVjk56EI', name: 'Toyota' },
  { id: '34cXKlP39Pg', name: 'AR VR 3' },
  { id: 'Hok20xMZr5w', name: 'AR/VR' },
  { id: 'fNnFhzxamyY', name: 'ENG' },
];

function Youtube() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <header className="text-center w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Youtube Videos with VR
        </h1>
        <p className="text-gray-300 mt-2 text-base sm:text-lg md:text-xl font-light">
          Interactive 3D videos for engineering analysis
        </p>
      </header>
      <br></br><br></br>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {VIDEO_IDS.slice(0, 4).map((video) => ( // Limit to 4 videos
            <div
              key={video.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg 
                hover:border-purple-400 hover:shadow-2xl
                transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]
                flex flex-col items-center w-full max-w-[300px] flex-1 basis-[calc(25%-1.5rem)]"
            >
              {/* Video Frame */}
              <div className="relative w-full h-[180px]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0`}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Video Title */}
              <div className="py-4 text-center w-full bg-gray-800">
                <h3 className="text-lg font-semibold text-white hover:text-purple-400 transition-colors duration-300">
                  {video.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Youtube;