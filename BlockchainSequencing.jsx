import React from 'react';

const BlockchainSequencing = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Title */}
        <div className="bg-gray-900 text-gray-200 px-4 py-3 text-lg font-medium">
          Sequence On-chain
        </div>
        
        <div className="p-6">
          {/* Process Overview */}
          <div className="bg-gray-850 rounded-lg p-4 border border-gray-700 mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg">⚡</span>
              </div>
              <h4 className="text-gray-200 font-medium">Transaction Flow</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Collect and order transactions
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Optimize batch size and timing
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Submit to selected blockchain
              </div>
            </div>
          </div>

          {/* Chain Selection */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">🔍</span>
                </div>
                <h4 className="text-gray-200 font-medium">Chain Selection</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Monitor chain conditions
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Select optimal chain
                </div>
              </div>
            </div>

            <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">🔄</span>
                </div>
                <h4 className="text-gray-200 font-medium">Chain Management</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Track transaction status
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Manage chain transitions
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Status */}
          <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg">📊</span>
              </div>
              <h4 className="text-gray-200 font-medium">Transaction Status</h4>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-300">
                <span className="font-medium">Status Tracking:</span>
              </div>
              <div className="text-sm text-gray-400">
                • Pending → Processing → Confirmed
              </div>
              <div className="text-sm text-gray-400">
                • Real-time status updates
              </div>
              <div className="text-sm text-gray-400">
                • Chain-specific confirmations
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSequencing;