import React from 'react';

const FallbackManager = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 relative">
        <div className="relative h-[500px]">
          {/* Container for all elements with fixed coordinates */}
          <div className="absolute inset-0">
            {/* Primary Chain (SUI) */}
            <div className="absolute" style={{ top: '60px', left: 'calc(50% - 40px)' }}>
              <div className="w-[80px] h-[80px] bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex flex-col items-center justify-center border-4 border-purple-500 shadow-lg">
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                <span className="text-white font-bold text-lg">SUI</span>
                <div className="text-xs text-purple-200 mt-1">(Your Primary Chain)</div>
              </div>
            </div>

            {/* Ethereum */}
            <div className="absolute" style={{ top: '240px', left: 'calc(25% - 30px)' }}>
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex flex-col items-center justify-center border-4 border-blue-500 shadow-lg">
                <span className="text-white font-bold">ETH</span>
              </div>
            </div>

            {/* Solana */}
            <div className="absolute" style={{ top: '240px', left: 'calc(50% - 30px)' }}>
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex flex-col items-center justify-center border-4 border-purple-400 shadow-lg">
                <span className="text-white font-bold">SOL</span>
              </div>
            </div>

            {/* Polygon */}
            <div className="absolute" style={{ top: '240px', left: 'calc(75% - 30px)' }}>
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex flex-col items-center justify-center border-4 border-indigo-500 shadow-lg">
                <span className="text-white font-bold">MATIC</span>
              </div>
            </div>

            {/* "Or any other chains" text */}
            <div className="absolute" style={{ top: '310px', left: '50%', transform: 'translateX(-50%)' }}>
              <div className="text-xs text-gray-600 font-medium">or any other chains...</div>
            </div>

            {/* SVG Arrows - Using viewBox to ensure proper scaling */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet" style={{ zIndex: 10, pointerEvents: 'none' }}>
              {/* Gradients for lines */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
              
              {/* Arrow to ETH */}
              <line 
                x1="200" 
                y1="140" 
                x2="100" 
                y2="240" 
                stroke="url(#gradient1)" 
                strokeWidth="3" 
                strokeDasharray="6,6"
              />
              <polygon 
                points="100,230 94,240 106,240" 
                fill="#3B82F6" 
                stroke="none"
              />

              {/* Arrow to SOL */}
              <line 
                x1="200" 
                y1="140" 
                x2="200" 
                y2="240" 
                stroke="#A855F7" 
                strokeWidth="3" 
                strokeDasharray="6,6"
              />
              <polygon 
                points="200,230 194,240 206,240" 
                fill="#A855F7" 
                stroke="none"
              />

              {/* Arrow to MATIC */}
              <line 
                x1="200" 
                y1="140" 
                x2="300" 
                y2="240" 
                stroke="url(#gradient3)" 
                strokeWidth="3" 
                strokeDasharray="6,6"
              />
              <polygon 
                points="300,230 294,240 306,240" 
                fill="#6366F1" 
                stroke="none"
              />
            </svg>

            {/* Status Text */}
            <div className="absolute" style={{ bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}>
              <div className="bg-white rounded-lg shadow-lg px-6 py-3">
                <div className="text-sm text-gray-600">Your primary chain having issues or can't be trusted anymore? Switch to any available alternative chain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FallbackManager;