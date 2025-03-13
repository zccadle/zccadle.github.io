import React from 'react';
import TechnicalArchitectureDiagram from './TechnicalArchitectureDiagram';

const ModrollArchitectureDiagram = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-4xl bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 rounded-lg p-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-400 filter blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-400 filter blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-400 filter blur-xl"></div>
          </div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        {/* Main Visual - Adjusted height and spacing */}
        <div className="relative h-[480px] flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-between py-4">
            {/* Title - Reduced margin */}
            <div className="text-center mb-2">
              <h2 className="text-xl font-bold text-white">ModRoll Architecture</h2>
            </div>

            {/* Architecture Layers - Adjusted spacing */}
            <div className="flex flex-col items-center w-full max-w-3xl space-y-5">
              {/* Application Layer */}
              <div className="w-full">
                <div className="flex justify-between items-center relative">
                  <div className="w-1/4 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg flex flex-col items-center justify-center">
                    <span className="text-white font-medium">Python</span>
                  </div>
                  <div className="w-1/4 h-16 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg shadow-lg flex flex-col items-center justify-center mx-2">
                    <span className="text-white font-medium">JavaScript</span>
                  </div>
                  <div className="w-1/4 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg shadow-lg flex flex-col items-center justify-center mx-2">
                    <span className="text-white font-medium">Rust</span>
                  </div>
                  <div className="w-1/4 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-lg shadow-lg flex flex-col items-center justify-center">
                    <span className="text-white font-medium">Go...</span>
                  </div>
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Any Language Support
                  </div>
                </div>
              </div>

              {/* Connection Lines */}
              <div className="w-full flex justify-between px-8">
                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                <div className="w-0.5 h-8 bg-gradient-to-b from-yellow-400 to-indigo-600"></div>
                <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-indigo-600"></div>
                <div className="w-0.5 h-8 bg-gradient-to-b from-green-500 to-indigo-600"></div>
              </div>

              {/* ModRoll Middleware Layer */}
              <div className="w-full">
                <div className="w-full h-32 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 rounded-lg shadow-xl flex items-center justify-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ModRoll Middleware
                  </div>
                  <div className="w-11/12 h-24 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-2">
                    <div className="grid grid-cols-4 gap-2 h-full">
                      <div className="bg-white bg-opacity-20 rounded-lg p-2 flex flex-col items-center justify-center">
                        <span className="text-white text-xs font-medium">Transaction</span>
                        <span className="text-white text-xs">Processing</span>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-2 flex flex-col items-center justify-center">
                        <span className="text-white text-xs font-medium">Chain</span>
                        <span className="text-white text-xs">Management</span>
                      </div>
                      {/* External Data Integration - Different color */}
                      <div className="bg-yellow-500 bg-opacity-30 rounded-lg p-2 flex flex-col items-center justify-center relative border border-yellow-400">
                        <span className="text-white text-xs font-medium">External Data</span>
                        <span className="text-white text-xs">Integration</span>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-2 flex flex-col items-center justify-center">
                        <span className="text-white text-xs font-medium">Error</span>
                        <span className="text-white text-xs">Handling</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* External Data Sources - Moved to right side */}
              <div className="w-full relative">
                <div className="absolute -top-16 right-0">
                  <div className="flex items-center">
                    <div className="w-20 h-1 bg-yellow-400"></div>
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg shadow-lg px-3 py-2 flex items-center">
                      <span className="text-white text-xs font-medium">APIs • Oracles • Real-world Data</span>
                    </div>
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-600 to-blue-500 mx-auto"></div>
              </div>

              {/* Blockchain Layer */}
              <div className="w-full">
                <div className="w-full h-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Any Blockchain Network
                  </div>
                  <div className="flex justify-between w-11/12">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xs">SUI</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xs">ETH</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xs">SOL</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xs">AVX</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xs">DOT</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xs">ATOM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits - Moved up and made more visible */}
            <div className="flex justify-center space-x-8 mt-4 mb-2 bg-black bg-opacity-20 py-2 px-4 rounded-lg">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-green-300 font-medium">47% Faster Development</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-blue-300 font-medium">99.9% Reliability</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-yellow-300 font-medium">Real-world Data Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Static Particles (no animation) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-indigo-400 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ModrollArchitectureDiagram;