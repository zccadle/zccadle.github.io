import React from 'react';

const ExternalDataAPI = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Title */}
        <div className="bg-gray-900 text-gray-200 px-4 py-3 text-lg font-medium">
          Connect External Data
        </div>
        
        <div className="p-6">
          {/* Data Sources Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Flight Data */}
            <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">✈️</span>
                </div>
                <h4 className="text-gray-200 font-medium">Flight Data</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Real-time status
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Delay tracking
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Cancellation alerts
                </div>
              </div>
            </div>

            {/* Market Data */}
            <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">📊</span>
                </div>
                <h4 className="text-gray-200 font-medium">Market Data</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Price feeds
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Trading volume
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Market trends
                </div>
              </div>
            </div>

            {/* Payment Data */}
            <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">💳</span>
                </div>
                <h4 className="text-gray-200 font-medium">Payment Data</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Transaction status
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Payment verification
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Refund tracking
                </div>
              </div>
            </div>
          </div>

          {/* API Flexibility */}
          <div className="bg-gray-850 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg">🔌</span>
              </div>
              <h4 className="text-gray-200 font-medium">Connect Any API</h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Support for any REST, GraphQL, or WebSocket API
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Automatic data validation and normalization
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Real-time data synchronization
              </div>
            </div>
          </div>

          {/* Example API Connection */}
          <div className="bg-gray-850 rounded-lg p-4 border border-gray-700 mt-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg">⚡</span>
              </div>
              <h4 className="text-gray-200 font-medium">Quick Integration</h4>
            </div>
            <div className="font-mono text-sm text-gray-300">
              <div>client.connectAPI(</div>
              <div className="pl-4">url: "https://api.example.com",</div>
              <div className="pl-4">type: "rest",</div>
              <div className="pl-4">headers: &#123; "Authorization": "Bearer ..." &#125;</div>
              <div>)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalDataAPI;