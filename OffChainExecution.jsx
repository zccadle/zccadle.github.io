import React from 'react';

const OffChainExecution = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Title */}
        <div className="bg-gray-900 text-gray-200 px-4 py-3 text-lg font-medium">
          Execute Off-chain
        </div>
        
        <div className="p-6">
          {/* Process Overview */}
          <div className="bg-gray-850 rounded-lg p-4 border border-gray-700 mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg">⚡</span>
              </div>
              <h4 className="text-gray-200 font-medium">Execution Flow</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Receive transaction request
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Process logic off-chain
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Submit result to blockchain
              </div>
            </div>
          </div>

          {/* Processing Details */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">🔍</span>
                </div>
                <h4 className="text-gray-200 font-medium">Input Processing</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Validate input data
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Prepare execution context
                </div>
              </div>
            </div>

            <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">⚙️</span>
                </div>
                <h4 className="text-gray-200 font-medium">Execution</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Run business logic
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Generate result
                </div>
              </div>
            </div>
          </div>

          {/* Result Handling */}
          <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg">📊</span>
              </div>
              <h4 className="text-gray-200 font-medium">Result Handling</h4>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-300">
                <span className="font-medium">Output Processing:</span>
              </div>
              <div className="text-sm text-gray-400">
                • Format result for blockchain
              </div>
              <div className="text-sm text-gray-400">
                • Generate proof of execution
              </div>
              <div className="text-sm text-gray-400">
                • Prepare on-chain submission
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffChainExecution;