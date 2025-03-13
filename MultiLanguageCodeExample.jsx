import React from 'react';

const MultiLanguageCodeExample = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Language Tabs */}
        <div className="flex bg-gray-900 text-gray-400 text-sm">
          <div className="px-4 py-2 w-1/3 border-r border-gray-700 font-medium">Python</div>
          <div className="px-4 py-2 w-1/3 border-r border-gray-700 font-medium">JavaScript</div>
          <div className="px-4 py-2 w-1/3 font-medium">Move</div>
        </div>
        
        <div className="flex text-sm">
          {/* Python Code */}
          <div className="w-1/3 p-4 border-r border-gray-700 font-mono bg-gray-850 text-gray-200">
            <div><span className="text-purple-400">from</span> <span className="text-blue-300">modroll</span> <span className="text-purple-400">import</span> ModRollClient, Transaction</div>
            <div className="mt-2"><span className="text-orange-300"># Initialize client</span></div>
            <div>client = ModRollClient(</div>
            <div className="pl-4"><span className="text-green-300">connection_type</span>=<span className="text-yellow-300">"sui"</span>,</div>
            <div className="pl-4"><span className="text-green-300">network</span>=<span className="text-yellow-300">"testnet"</span></div>
            <div>)</div>
            <div className="mt-2"><span className="text-purple-400">def</span> <span className="text-blue-300">flight_insurance</span>(policy_id, flight):</div>
            <div className="pl-4"><span className="text-orange-300"># Get flight data</span></div>
            <div className="pl-4">status = client.get_flight_status(flight)</div>
            <div className="mt-2 pl-4"><span className="text-orange-300"># Calculate compensation</span></div>
            <div className="pl-4"><span className="text-purple-400">if</span> status.delay_minutes &gt;= <span className="text-blue-300">60</span>:</div>
            <div className="pl-8">compensation = <span className="text-blue-300">100</span></div>
            <div className="pl-4"><span className="text-purple-400">elif</span> status.delay_minutes &gt;= <span className="text-blue-300">30</span>:</div>
            <div className="pl-8">compensation = <span className="text-blue-300">50</span></div>
            <div className="pl-4"><span className="text-purple-400">else</span>:</div>
            <div className="pl-8">compensation = <span className="text-blue-300">0</span></div>
            <div className="mt-2 pl-4"><span className="text-purple-400">return</span> compensation</div>
          </div>
          
          {/* JavaScript Code */}
          <div className="w-1/3 p-4 border-r border-gray-700 font-mono bg-gray-850 text-gray-200">
            <div><span className="text-purple-400">import</span> <span className="text-yellow-300">&#123; ModRollClient &#125;</span> <span className="text-purple-400">from</span> <span className="text-yellow-300">'modroll'</span>;</div>
            <div className="mt-2"><span className="text-green-300">// Initialize client</span></div>
            <div><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> ModRollClient(&#123;</div>
            <div className="pl-4">connectionType: <span className="text-yellow-300">"sui"</span>,</div>
            <div className="pl-4">network: <span className="text-yellow-300">"testnet"</span></div>
            <div>&#125;);</div>
            <div className="mt-2"><span className="text-purple-400">async function</span> <span className="text-blue-300">flightInsurance</span>(policyId, flight) &#123;</div>
            <div className="pl-4"><span className="text-green-300">// Get flight data</span></div>
            <div className="pl-4"><span className="text-purple-400">const</span> status = <span className="text-purple-400">await</span> client.getFlightStatus(flight);</div>
            <div className="mt-2 pl-4"><span className="text-green-300">// Calculate compensation</span></div>
            <div className="pl-4"><span className="text-purple-400">let</span> compensation = <span className="text-blue-300">0</span>;</div>
            <div className="pl-4"><span className="text-purple-400">if</span> (status.delayMinutes &gt;= <span className="text-blue-300">60</span>) &#123;</div>
            <div className="pl-8">compensation = <span className="text-blue-300">100</span>;</div>
            <div className="pl-4">&#125; <span className="text-purple-400">else if</span> (status.delayMinutes &gt;= <span className="text-blue-300">30</span>) &#123;</div>
            <div className="pl-8">compensation = <span className="text-blue-300">50</span>;</div>
            <div className="pl-4">&#125;</div>
            <div className="mt-2 pl-4"><span className="text-purple-400">return</span> compensation;</div>
            <div>&#125;</div>
          </div>
          
          {/* Move Code */}
          <div className="w-1/3 p-4 font-mono bg-gray-850 text-gray-200">
            <div><span className="text-purple-400">module</span> insurance::flight_payout &#123;</div>
            <div className="pl-4"><span className="text-purple-400">use</span> sui::transfer;</div>
            <div className="pl-4"><span className="text-purple-400">use</span> sui::coin::Coin;</div>
            <div className="pl-4"><span className="text-purple-400">use</span> sui::sui::SUI;</div>
            <div className="pl-4"><span className="text-purple-400">use</span> std::string::String;</div>
            <div className="mt-2 pl-4"><span className="text-purple-400">struct</span> <span className="text-blue-300">FlightStatus</span> <span className="text-purple-400">has</span> drop &#123;</div>
            <div className="pl-8">delay_minutes: u64,</div>
            <div className="pl-8">is_cancelled: bool</div>
            <div className="pl-4">&#125;</div>
            <div className="mt-2 pl-4"><span className="text-purple-400">public fun</span> <span className="text-blue-300">calculate_payout</span>(</div>
            <div className="pl-8">status: &FlightStatus</div>
            <div className="pl-4">) -&gt; u64 &#123;</div>
            <div className="pl-8"><span className="text-green-300">// Calculate compensation</span></div>
            <div className="pl-8"><span className="text-purple-400">if</span> (status.delay_minutes &gt;= <span className="text-blue-300">60</span>) &#123;</div>
            <div className="pl-12"><span className="text-blue-300">100</span></div>
            <div className="pl-8">&#125; <span className="text-purple-400">else if</span> (status.delay_minutes &gt;= <span className="text-blue-300">30</span>) &#123;</div>
            <div className="pl-12"><span className="text-blue-300">50</span></div>
            <div className="pl-8">&#125; <span className="text-purple-400">else</span> &#123;</div>
            <div className="pl-12"><span className="text-blue-300">0</span></div>
            <div className="pl-8">&#125;</div>
            <div className="pl-4">&#125;</div>
            <div>&#125;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiLanguageCodeExample;