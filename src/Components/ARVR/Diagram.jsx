import React, { useRef, useState } from 'react';
import { Maximize2, Minimize2, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import DiagramDisplay from './DiagramDisplay';

const diagrams = [
  {
    id: 1,
    name: 'Jet Engine Turbine',
    description: 'High-performance jet engine turbine with detailed blade geometry',
    modelPath: '/models/turbine.glb',
    thumbnail:
      'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    name: 'Hydraulic Cylinder',
    description: 'Industrial hydraulic cylinder with cross-section view',
    modelPath: '/models/cylinder.glb',
    thumbnail:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    name: 'PCB Layout',
    description: '3D visualization of a printed circuit board with components',
    modelPath: '/models/pcb.glb',
    thumbnail:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Robotic Arm Assembly',
    description: 'Multi-joint robotic arm with actuators and control mechanisms',
    modelPath: '/models/robot.glb',
    thumbnail:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
];

function Diagram() {
  const [selectedDiagram, setSelectedDiagram] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef(null);

  const handleSelectDiagram = (diagram) => {
    setSelectedDiagram(diagram);
    if (viewerRef.current) {
      viewerRef.current.reset();
    }
  };

  const handleCloseViewer = () => {
    setSelectedDiagram(null);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const handleZoomIn = () => {
    if (viewerRef.current) {
      viewerRef.current.dollyIn(1.1);
    }
  };

  const handleZoomOut = () => {
    if (viewerRef.current) {
      viewerRef.current.dollyOut(1.1);
    }
  };

  const handleResetRotation = () => {
    if (viewerRef.current) {
      viewerRef.current.reset();
    }
  };

  const ThumbnailCard = ({ diagram }) => (
    <div
      className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 backdrop-blur-sm border border-gray-700/50 flex-1 basis-[calc(25%-1.5rem)] max-w-[300px]"
      onClick={() => handleSelectDiagram(diagram)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={diagram.thumbnail}
          alt={diagram.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500 hover:opacity-80" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white tracking-wide">{diagram.name}</h2>
        <p className="text-gray-400 mt-2 text-sm line-clamp-2">{diagram.description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
      {/* Header */}
      <header className="py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            3D Engineering Diagrams
          </h1>
          <p className="text-gray-300 mt-3 text-lg md:text-xl font-light">
            Interactive 3D models for engineering analysis
          </p>
        </div>
      </header>
<br></br><br></br>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl px-4 py-12">
        {selectedDiagram ? (
          <div
            className={`relative transition-all duration-500 ease-in-out ${
              isFullscreen
                ? 'fixed inset-0 z-50'
                : 'w-[90vw] h-[90vh] mx-auto rounded-3xl shadow-2xl border border-gray-700/50'
            }`}
          >
            {/* Fullscreen and Close Buttons */}
            <div className="absolute top-4 right-4 z-30 flex gap-4">
              <button
                onClick={toggleFullscreen}
                className="bg-gray-800/80 p-3 rounded-full hover:bg-gray-700/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm border border-gray-600/50"
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              >
                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
              <button
                onClick={handleCloseViewer}
                className="bg-red-800/80 p-3 rounded-full hover:bg-red-700/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 backdrop-blur-sm border border-gray-600/50"
                aria-label="Close viewer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Diagram Viewer */}
            <DiagramDisplay ref={viewerRef} diagram={selectedDiagram} />

            {/* Zoom and Rotation Controls */}
            <div className="absolute bottom-4 right-4 z-30 bg-gray-800/80 p-3 rounded-lg flex gap-3 backdrop-blur-sm border border-gray-600/50">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-full bg-gray-700/80 hover:bg-gray-600/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="Zoom in"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-full bg-gray-700/80 hover:bg-gray-600/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="Zoom out"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={handleResetRotation}
                className="p-2 rounded-full bg-gray-700/80 hover:bg-gray-600/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="Reset rotation"
              >
                <RotateCcw size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {diagrams.map((diagram) => (
              <ThumbnailCard key={diagram.id} diagram={diagram} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Diagram;
export { diagrams };