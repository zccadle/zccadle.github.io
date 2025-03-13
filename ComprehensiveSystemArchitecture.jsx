import React from 'react';

const ComprehensiveSystemArchitecture = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-4xl bg-gray-900 rounded-lg p-4 overflow-hidden">
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-between py-2">
            {/* Title */}
            <div className="text-center mb-2">
              <h2 className="text-lg font-bold text-white">ModRoll System Architecture</h2>
              <p className="text-gray-400 text-xs">Modular Middleware for Data-Driven Blockchain Applications</p>
            </div>

            {/* Main Architecture Diagram */}
            <div className="w-full max-w-3xl">
              {/* Client Applications Layer */}
              <div className="mb-2">
                <div className="text-xs text-gray-400 mb-0.5 ml-2">CLIENT APPLICATIONS</div>
                <div className="flex justify-between gap-1">
                  <div className="flex-1 border border-gray-700 bg-gray-800 rounded p-1 text-center">
                    <div className="text-white text-xs font-medium">dApps</div>
                  </div>
                  <div className="flex-1 border border-gray-700 bg-gray-800 rounded p-1 text-center">
                    <div className="text-white text-xs font-medium">Smart Contracts</div>
                  </div>
                  <div className="flex-1 border border-gray-700 bg-gray-800 rounded p-1 text-center">
                    <div className="text-white text-xs font-medium">Insurance Apps</div>
                  </div>
                  <div className="flex-1 border border-gray-700 bg-gray-800 rounded p-1 text-center">
                    <div className="text-white text-xs font-medium">Financial Services</div>
                  </div>
                </div>
                <div className="flex justify-center mt-0.5">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-600 border-r-[8px] border-r-transparent"></div>
                </div>
              </div>

              {/* Transaction Handler Layer */}
              <div className="mb-2">
                <div className="text-xs text-gray-400 mb-0.5 ml-2">TRANSACTION HANDLER</div>
                <div className="border border-blue-700 bg-blue-900 bg-opacity-30 rounded p-1">
                  <div className="flex justify-between">
                    <div className="flex-1 text-center">
                      <div className="text-blue-300 text-xs font-medium">Validation</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-blue-300 text-xs font-medium">Wrapping & Signing</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-blue-300 text-xs font-medium">Registration</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-0.5">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-600 border-r-[8px] border-r-transparent"></div>
                </div>
              </div>

              {/* Core Services - Two Columns */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                {/* Left Column: Execution Manager & Languages */}
                <div>
                  {/* Execution Manager */}
                  <div className="mb-2">
                    <div className="text-xs text-gray-400 mb-0.5 ml-2">EXECUTION MANAGER</div>
                    <div className="border border-purple-700 bg-purple-900 bg-opacity-20 rounded p-1 text-center">
                      <div className="text-purple-300 text-xs font-medium">Execution Environment</div>
                      <div className="flex flex-wrap justify-center text-gray-400 text-xs mt-0.5">
                        <span className="mx-1">• Custom Code</span>
                        <span className="mx-1">• Conditional Logic</span>
                        <span className="mx-1">• API Integration</span>
                      </div>
                    </div>
                    <div className="flex justify-center mt-0.5">
                      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-600 border-r-[8px] border-r-transparent"></div>
                    </div>
                  </div>

                  {/* Languages Module */}
                  <div className="mb-2">
                    <div className="text-xs text-gray-400 mb-0.5 ml-2">LANGUAGES MODULE</div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="border border-yellow-700 bg-yellow-900 bg-opacity-20 rounded p-1 text-center">
                        <div className="text-yellow-300 text-xs font-medium">JavaScript</div>
                        <div className="text-gray-400 text-xs">Boa Engine</div>
                      </div>
                      <div className="border border-blue-700 bg-blue-900 bg-opacity-20 rounded p-1 text-center">
                        <div className="text-blue-300 text-xs font-medium">Python</div>
                        <div className="text-gray-400 text-xs">PyO3</div>
                      </div>
                      <div className="border border-green-700 bg-green-900 bg-opacity-20 rounded p-1 text-center">
                        <div className="text-green-300 text-xs font-medium">Future</div>
                        <div className="text-gray-400 text-xs">Extensions</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Security & Metrics */}
                <div>
                  {/* Security Module */}
                  <div className="mb-2">
                    <div className="text-xs text-gray-400 mb-0.5 ml-2">SECURITY MODULE</div>
                    <div className="border border-red-700 bg-red-900 bg-opacity-20 rounded p-1">
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-center">
                          <div className="text-red-300 text-xs font-medium">Verification</div>
                          <div className="text-gray-400 text-xs">Manager</div>
                        </div>
                        <div className="text-center">
                          <div className="text-red-300 text-xs font-medium">Network</div>
                          <div className="text-gray-400 text-xs">Manager</div>
                        </div>
                        <div className="text-center">
                          <div className="text-red-300 text-xs font-medium">Audit</div>
                          <div className="text-gray-400 text-xs">Logger</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Module */}
                  <div className="mb-2">
                    <div className="text-xs text-gray-400 mb-0.5 ml-2">METRICS MODULE</div>
                    <div className="border border-indigo-700 bg-indigo-900 bg-opacity-20 rounded p-1">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="text-center">
                          <div className="text-indigo-300 text-xs font-medium">Performance</div>
                          <div className="text-gray-400 text-xs">Metrics</div>
                        </div>
                        <div className="text-center">
                          <div className="text-indigo-300 text-xs font-medium">Storage &</div>
                          <div className="text-gray-400 text-xs">Visualization</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sequencing Layer */}
              <div className="mb-2">
                <div className="text-xs text-gray-400 mb-0.5 ml-2">SEQUENCING LAYER</div>
                <div className="border border-green-700 bg-green-900 bg-opacity-20 rounded p-1">
                  <div className="flex justify-between">
                    <div className="flex-1 text-center">
                      <div className="text-green-300 text-xs font-medium">Transaction Polling</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-green-300 text-xs font-medium">Order Maintenance</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-green-300 text-xs font-medium">Transaction Tracking</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-0.5">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-600 border-r-[8px] border-r-transparent"></div>
                </div>
              </div>

              {/* External Integration */}
              <div className="mb-2">
                <div className="text-xs text-gray-400 mb-0.5 ml-2">EXTERNAL INTEGRATION</div>
                <div className="border border-yellow-700 bg-yellow-900 bg-opacity-20 rounded p-1">
                  <div className="flex justify-between">
                    <div className="flex-1 text-center">
                      <div className="text-yellow-300 text-xs font-medium">REST APIs</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-yellow-300 text-xs font-medium">WebSockets</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-yellow-300 text-xs font-medium">Flight Status</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-yellow-300 text-xs font-medium">Weather Data</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-0.5">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-600 border-r-[8px] border-r-transparent"></div>
                </div>
              </div>

              {/* Blockchain Networks */}
              <div>
                <div className="text-xs text-gray-400 mb-0.5 ml-2">BLOCKCHAIN NETWORKS</div>
                <div className="border border-blue-700 bg-blue-900 bg-opacity-20 rounded p-1">
                  <div className="flex flex-col">
                    <div className="flex justify-center mb-1">
                      <div className="px-3 py-0.5 bg-blue-700 rounded text-white text-xs font-medium">
                        Primary: SUI Blockchain
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded">APT</div>
                      <div className="text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded">SOL</div>
                      <div className="text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded">AVA</div>
                      <div className="text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded">NEAR</div>
                      <div className="text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded">COSMOS</div>
                      <div className="text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded">DOT</div>
                    </div>
                    <div className="flex justify-center mt-1">
                      <div className="text-gray-400 text-xs">Chain Switching Capability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Flow Indicators */}
            <div className="w-full border-t border-gray-700 pt-1 mt-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                  <div className="text-white text-xs font-medium">Transaction Flow</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
                  <div className="text-white text-xs font-medium">Execution Path</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                  <div className="text-white text-xs font-medium">External Data</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                  <div className="text-white text-xs font-medium">Security & Verification</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  <div className="text-white text-xs font-medium">Chain Switching</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSystemArchitecture; 