// ModRoll Diagrams Component Export
window.ModRollDiagrams = {};

(function() {
  // Helper function to create React elements more easily
  function h(type, props = {}, ...children) {
    return React.createElement(type, props, ...children);
  }

  // ModRollArchitectureDiagram (Hero Diagram)
  window.ModRollDiagrams.ModRollArchitectureDiagram = function() {
    return h('div', { className: 'flex flex-col items-center w-full' },
      h('div', { className: 'relative w-full max-w-4xl bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 rounded-lg p-8 overflow-hidden' },
        // Background Elements
        h('div', { className: 'absolute inset-0 overflow-hidden' },
          h('div', { className: 'absolute top-0 left-0 w-full h-full opacity-10' },
            h('div', { className: 'absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-400 filter blur-xl' }),
            h('div', { className: 'absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-400 filter blur-xl' }),
            h('div', { className: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-400 filter blur-xl' })
          )
        ),

        // Main Visual
        h('div', { className: 'relative h-[480px] flex items-center justify-center' },
          h('div', { className: 'absolute inset-0 flex flex-col items-center justify-between py-4' },
            // Title
            h('div', { className: 'text-center mb-2' },
              h('h2', { className: 'text-xl font-bold text-white' }, 'ModRoll Architecture')
            ),

            // Architecture Layers
            h('div', { className: 'flex flex-col items-center w-full max-w-3xl space-y-5' },
              // Application Layer
              h('div', { className: 'w-full' },
                h('div', { className: 'flex justify-between items-center relative' },
                  h('div', { className: 'w-1/4 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg flex flex-col items-center justify-center' },
                    h('span', { className: 'text-white font-medium' }, 'Python')
                  ),
                  h('div', { className: 'w-1/4 h-16 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg shadow-lg flex flex-col items-center justify-center mx-2' },
                    h('span', { className: 'text-white font-medium' }, 'JavaScript')
                  ),
                  h('div', { className: 'w-1/4 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg shadow-lg flex flex-col items-center justify-center mx-2' },
                    h('span', { className: 'text-white font-medium' }, 'Rust')
                  ),
                  h('div', { className: 'w-1/4 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-lg shadow-lg flex flex-col items-center justify-center' },
                    h('span', { className: 'text-white font-medium' }, 'Go...')
                  ),
                  h('div', { className: 'absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full' },
                    'Any Language Support'
                  )
                )
              ),

              // Connection Lines
              h('div', { className: 'w-full flex justify-between px-8' },
                h('div', { className: 'w-0.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-600' }),
                h('div', { className: 'w-0.5 h-8 bg-gradient-to-b from-yellow-400 to-indigo-600' }),
                h('div', { className: 'w-0.5 h-8 bg-gradient-to-b from-purple-500 to-indigo-600' }),
                h('div', { className: 'w-0.5 h-8 bg-gradient-to-b from-green-500 to-indigo-600' })
              ),

              // ModRoll Middleware Layer
              h('div', { className: 'w-full' },
                h('div', { className: 'w-full h-32 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 rounded-lg shadow-xl flex items-center justify-center relative' },
                  h('div', { className: 'absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full' },
                    'ModRoll Middleware'
                  ),
                  h('div', { className: 'w-11/12 h-24 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-2' },
                    h('div', { className: 'grid grid-cols-4 gap-2 h-full' },
                      h('div', { className: 'bg-white bg-opacity-20 rounded-lg p-2 flex flex-col items-center justify-center' },
                        h('span', { className: 'text-white text-xs font-medium' }, 'Transaction'),
                        h('span', { className: 'text-white text-xs' }, 'Processing')
                      ),
                      h('div', { className: 'bg-white bg-opacity-20 rounded-lg p-2 flex flex-col items-center justify-center' },
                        h('span', { className: 'text-white text-xs font-medium' }, 'Chain'),
                        h('span', { className: 'text-white text-xs' }, 'Management')
                      ),
                      h('div', { className: 'bg-yellow-500 bg-opacity-30 rounded-lg p-2 flex flex-col items-center justify-center relative border border-yellow-400' },
                        h('span', { className: 'text-white text-xs font-medium' }, 'External Data'),
                        h('span', { className: 'text-white text-xs' }, 'Integration')
                      ),
                      h('div', { className: 'bg-white bg-opacity-20 rounded-lg p-2 flex flex-col items-center justify-center' },
                        h('span', { className: 'text-white text-xs font-medium' }, 'Error'),
                        h('span', { className: 'text-white text-xs' }, 'Handling')
                      )
                    )
                  )
                )
              ),

              // Blockchain Layer
              h('div', { className: 'w-full' },
                h('div', { className: 'w-full h-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center relative' },
                  h('div', { className: 'absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full' },
                    'Any Blockchain Network'
                  ),
                  h('div', { className: 'flex justify-between w-11/12' },
                    h('div', { className: 'flex flex-col items-center' },
                      h('div', { className: 'w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center shadow-lg' },
                        h('span', { className: 'text-white font-bold text-xs' }, 'SUI')
                      )
                    ),
                    h('div', { className: 'flex flex-col items-center' },
                      h('div', { className: 'w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg' },
                        h('span', { className: 'text-white font-bold text-xs' }, 'ETH')
                      )
                    ),
                    h('div', { className: 'flex flex-col items-center' },
                      h('div', { className: 'w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg' },
                        h('span', { className: 'text-white font-bold text-xs' }, 'SOL')
                      )
                    ),
                    h('div', { className: 'flex flex-col items-center' },
                      h('div', { className: 'w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center shadow-lg' },
                        h('span', { className: 'text-white font-bold text-xs' }, 'AVX')
                      )
                    ),
                    h('div', { className: 'flex flex-col items-center' },
                      h('div', { className: 'w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg' },
                        h('span', { className: 'text-white font-bold text-xs' }, 'DOT')
                      )
                    ),
                    h('div', { className: 'flex flex-col items-center' },
                      h('div', { className: 'w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg' },
                        h('span', { className: 'text-white font-bold text-xs' }, 'ATOM')
                      )
                    )
                  )
                )
              )
            ),

            // Key Benefits
            h('div', { className: 'flex justify-center space-x-8 mt-4 mb-2 bg-black bg-opacity-20 py-2 px-4 rounded-lg' },
              h('div', { className: 'flex items-center space-x-1' },
                h('div', { className: 'w-3 h-3 bg-green-400 rounded-full' }),
                h('span', { className: 'text-sm text-green-300 font-medium' }, '47% Faster Development')
              ),
              h('div', { className: 'flex items-center space-x-1' },
                h('div', { className: 'w-3 h-3 bg-blue-400 rounded-full' }),
                h('span', { className: 'text-sm text-blue-300 font-medium' }, '99.9% Reliability')
              ),
              h('div', { className: 'flex items-center space-x-1' },
                h('div', { className: 'w-3 h-3 bg-yellow-400 rounded-full' }),
                h('span', { className: 'text-sm text-yellow-300 font-medium' }, 'Real-world Data Access')
              )
            )
          )
        )
      )
    );
  };

  // MultiLanguageCodeExample (Workflow Step 1)
  window.ModRollDiagrams.MultiLanguageCodeExample = function() {
    return h('div', { className: 'w-full max-w-4xl mx-auto' },
      h('div', { className: 'bg-gray-800 rounded-lg shadow-xl overflow-hidden' },
        // Language Tabs
        h('div', { className: 'flex bg-gray-900 text-gray-400 text-sm' },
          h('div', { className: 'px-4 py-2 w-1/3 border-r border-gray-700 font-medium' }, 'Python'),
          h('div', { className: 'px-4 py-2 w-1/3 border-r border-gray-700 font-medium' }, 'JavaScript'),
          h('div', { className: 'px-4 py-2 w-1/3 font-medium' }, 'Move')
        ),
        
        h('div', { className: 'flex text-sm' },
          // Python Code
          h('div', { className: 'w-1/3 p-4 border-r border-gray-700 font-mono bg-gray-850 text-gray-200' },
            h('div', null, 
              h('span', { className: 'text-purple-400' }, 'from'), ' ',
              h('span', { className: 'text-blue-300' }, 'modroll'), ' ',
              h('span', { className: 'text-purple-400' }, 'import'), ' ModRollClient, Transaction'
            ),
            h('div', { className: 'mt-2' },
              h('span', { className: 'text-orange-300' }, '# Initialize client')
            ),
            h('div', null, 'client = ModRollClient('),
            h('div', { className: 'pl-4' },
              h('span', { className: 'text-green-300' }, 'connection_type'), '=',
              h('span', { className: 'text-yellow-300' }, '"sui"'), ','
            ),
            h('div', { className: 'pl-4' },
              h('span', { className: 'text-green-300' }, 'network'), '=',
              h('span', { className: 'text-yellow-300' }, '"testnet"')
            ),
            h('div', null, ')'),
            h('div', { className: 'mt-2' },
              h('span', { className: 'text-purple-400' }, 'def'),
              ' ',
              h('span', { className: 'text-blue-300' }, 'flight_insurance'),
              '(policy_id, flight):'
            ),
            h('div', { className: 'pl-4' },
              h('span', { className: 'text-orange-300' }, '# Get flight data')
            ),
            h('div', { className: 'pl-4' }, 'status = client.get_flight_status(flight)'),
            h('div', { className: 'mt-2 pl-4' },
              h('span', { className: 'text-orange-300' }, '# Calculate compensation')
            ),
            h('div', { className: 'pl-4' },
              h('span', { className: 'text-purple-400' }, 'if'),
              ' status.delay_minutes >= ',
              h('span', { className: 'text-blue-300' }, '60'),
              ':'
            ),
            h('div', { className: 'pl-8' }, 'compensation = ',
              h('span', { className: 'text-blue-300' }, '100')
            )
          ),
          
          // JavaScript Code
          h('div', { className: 'w-1/3 p-4 border-r border-gray-700 font-mono bg-gray-850 text-gray-200' },
            h('div', null,
              h('span', { className: 'text-purple-400' }, 'import'),
              ' ',
              h('span', { className: 'text-yellow-300' }, '{ ModRollClient }'),
              ' ',
              h('span', { className: 'text-purple-400' }, 'from'),
              ' ',
              h('span', { className: 'text-yellow-300' }, '\'modroll\''),
              ';'
            ),
            h('div', { className: 'mt-2' },
              h('span', { className: 'text-green-300' }, '// Initialize client')
            ),
            h('div', null,
              h('span', { className: 'text-purple-400' }, 'const'),
              ' client = ',
              h('span', { className: 'text-purple-400' }, 'new'),
              ' ModRollClient({'
            ),
            h('div', { className: 'pl-4' }, 'connectionType: ',
              h('span', { className: 'text-yellow-300' }, '"sui"'),
              ','
            ),
            h('div', { className: 'pl-4' }, 'network: ',
              h('span', { className: 'text-yellow-300' }, '"testnet"')
            ),
            h('div', null, '});'),
            h('div', { className: 'mt-2' },
              h('span', { className: 'text-purple-400' }, 'async function'),
              ' ',
              h('span', { className: 'text-blue-300' }, 'flightInsurance'),
              '(policyId, flight) {'
            ),
            h('div', { className: 'pl-4' },
              h('span', { className: 'text-green-300' }, '// Get flight data')
            ),
            h('div', { className: 'pl-4' },
              h('span', { className: 'text-purple-400' }, 'const'),
              ' status = ',
              h('span', { className: 'text-purple-400' }, 'await'),
              ' client.getFlightStatus(flight);'
            )
          ),
          
          // Move Code
          h('div', { className: 'w-1/3 p-4 font-mono bg-gray-850 text-gray-200' },
            h('div', null,
              h('span', { className: 'text-purple-400' }, 'module'),
              ' insurance::flight_payout {'
            ),
            h('div', { className: 'pl-4' },
              h('span', { className: 'text-purple-400' }, 'use'),
              ' sui::transfer;'
            ),
            h('div', { className: 'pl-4' },
              h('span', { className: 'text-purple-400' }, 'use'),
              ' sui::coin::Coin;'
            ),
            h('div', { className: 'pl-4' },
              h('span', { className: 'text-purple-400' }, 'use'),
              ' sui::sui::SUI;'
            ),
            h('div', { className: 'pl-4' },
              h('span', { className: 'text-purple-400' }, 'use'),
              ' std::string::String;'
            ),
            h('div', { className: 'mt-2 pl-4' },
              h('span', { className: 'text-purple-400' }, 'struct'),
              ' ',
              h('span', { className: 'text-blue-300' }, 'FlightStatus'),
              ' ',
              h('span', { className: 'text-purple-400' }, 'has'),
              ' drop {'
            ),
            h('div', { className: 'pl-8' }, 'delay_minutes: u64,'),
            h('div', { className: 'pl-8' }, 'is_cancelled: bool')
          )
        )
      )
    );
  };

  // ExternalDataAPI (Workflow Step 2)
  window.ModRollDiagrams.ExternalDataAPI = function() {
    return h('div', { className: 'w-full max-w-4xl mx-auto' },
      h('div', { className: 'bg-gray-800 rounded-lg shadow-xl overflow-hidden' },
        // Title
        h('div', { className: 'bg-gray-900 text-gray-200 px-4 py-3 text-lg font-medium' },
          'Connect External Data'
        ),
        
        h('div', { className: 'p-6' },
          // Data Sources Grid
          h('div', { className: 'grid grid-cols-3 gap-4 mb-6' },
            // Flight Data
            h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700' },
              h('div', { className: 'flex items-center mb-3' },
                h('div', { className: 'w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3' },
                  h('span', { className: 'text-white text-lg' }, '✈️')
                ),
                h('h4', { className: 'text-gray-200 font-medium' }, 'Flight Data')
              ),
              h('div', { className: 'space-y-2' },
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Real-time status'
                ),
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Delay tracking'
                ),
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Cancellation alerts'
                )
              )
            ),

            // Market Data
            h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700' },
              h('div', { className: 'flex items-center mb-3' },
                h('div', { className: 'w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3' },
                  h('span', { className: 'text-white text-lg' }, '📊')
                ),
                h('h4', { className: 'text-gray-200 font-medium' }, 'Market Data')
              ),
              h('div', { className: 'space-y-2' },
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Price feeds'
                ),
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Trading volume'
                ),
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Market trends'
                )
              )
            ),

            // Payment Data
            h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700' },
              h('div', { className: 'flex items-center mb-3' },
                h('div', { className: 'w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3' },
                  h('span', { className: 'text-white text-lg' }, '💳')
                ),
                h('h4', { className: 'text-gray-200 font-medium' }, 'Payment Data')
              ),
              h('div', { className: 'space-y-2' },
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Transaction status'
                ),
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Payment verification'
                ),
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Refund tracking'
                )
              )
            )
          ),

          // API Flexibility
          h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700' },
            h('div', { className: 'flex items-center mb-3' },
              h('div', { className: 'w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3' },
                h('span', { className: 'text-white text-lg' }, '🔌')
              ),
              h('h4', { className: 'text-gray-200 font-medium' }, 'Connect Any API')
            ),
            h('div', { className: 'space-y-2' },
              h('div', { className: 'flex items-center text-sm text-gray-400' },
                h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                'Support for any REST, GraphQL, or WebSocket API'
              ),
              h('div', { className: 'flex items-center text-sm text-gray-400' },
                h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                'Automatic data validation and normalization'
              )
            )
          )
        )
      )
    );
  };

  // OffChainExecution (Workflow Step 3)
  window.ModRollDiagrams.OffChainExecution = function() {
    return h('div', { className: 'w-full max-w-4xl mx-auto' },
      h('div', { className: 'bg-gray-800 rounded-lg shadow-xl overflow-hidden' },
        // Title
        h('div', { className: 'bg-gray-900 text-gray-200 px-4 py-3 text-lg font-medium' },
          'Execute Off-chain'
        ),
        
        h('div', { className: 'p-6' },
          // Process Overview
          h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700 mb-6' },
            h('div', { className: 'flex items-center mb-4' },
              h('div', { className: 'w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3' },
                h('span', { className: 'text-white text-lg' }, '⚡')
              ),
              h('h4', { className: 'text-gray-200 font-medium' }, 'Execution Flow')
            ),
            h('div', { className: 'space-y-3' },
              h('div', { className: 'flex items-center text-sm text-gray-400' },
                h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                'Receive transaction request'
              ),
              h('div', { className: 'flex items-center text-sm text-gray-400' },
                h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                'Process logic off-chain'
              ),
              h('div', { className: 'flex items-center text-sm text-gray-400' },
                h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                'Submit result to blockchain'
              )
            )
          ),

          // Processing Details
          h('div', { className: 'grid grid-cols-2 gap-4 mb-6' },
            h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700' },
              h('div', { className: 'flex items-center mb-3' },
                h('div', { className: 'w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3' },
                  h('span', { className: 'text-white text-lg' }, '🔍')
                ),
                h('h4', { className: 'text-gray-200 font-medium' }, 'Input Processing')
              ),
              h('div', { className: 'space-y-2' },
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Validate input data'
                ),
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Prepare execution context'
                )
              )
            ),

            h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700' },
              h('div', { className: 'flex items-center mb-3' },
                h('div', { className: 'w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3' },
                  h('span', { className: 'text-white text-lg' }, '⚙️')
                ),
                h('h4', { className: 'text-gray-200 font-medium' }, 'Execution')
              ),
              h('div', { className: 'space-y-2' },
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Run business logic'
                ),
                h('div', { className: 'flex items-center text-sm text-gray-400' },
                  h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                  'Generate result'
                )
              )
            )
        ),

        // Result Handling
        h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700' },
          h('div', { className: 'flex items-center mb-3' },
            h('div', { className: 'w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3' },
              h('span', { className: 'text-white text-lg' }, '📊')
            ),
            h('h4', { className: 'text-gray-200 font-medium' }, 'Result Handling')
          ),
          h('div', { className: 'space-y-2' },
            h('div', { className: 'text-sm text-gray-300' },
              h('span', { className: 'font-medium' }, 'Output Processing:')
            ),
            h('div', { className: 'text-sm text-gray-400' },
              '• Format result for blockchain'
            ),
            h('div', { className: 'text-sm text-gray-400' },
              '• Generate proof of execution'
            ),
            h('div', { className: 'text-sm text-gray-400' },
              '• Prepare on-chain submission'
            )
          )
        )
      )
    )
  );
};

// BlockchainSequencing (Workflow Step 4)
window.ModRollDiagrams.BlockchainSequencing = function() {
  return h('div', { className: 'w-full max-w-4xl mx-auto' },
    h('div', { className: 'bg-gray-800 rounded-lg shadow-xl overflow-hidden' },
      // Title
      h('div', { className: 'bg-gray-900 text-gray-200 px-4 py-3 text-lg font-medium' },
        'Sequence On-chain'
      ),
      
      h('div', { className: 'p-6' },
        // Process Overview
        h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700 mb-6' },
          h('div', { className: 'flex items-center mb-4' },
            h('div', { className: 'w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3' },
              h('span', { className: 'text-white text-lg' }, '⚡')
            ),
            h('h4', { className: 'text-gray-200 font-medium' }, 'Transaction Flow')
          ),
          h('div', { className: 'space-y-3' },
            h('div', { className: 'flex items-center text-sm text-gray-400' },
              h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
              'Collect and order transactions'
            ),
            h('div', { className: 'flex items-center text-sm text-gray-400' },
              h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
              'Optimize batch size and timing'
            ),
            h('div', { className: 'flex items-center text-sm text-gray-400' },
              h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
              'Submit to selected blockchain'
            )
          )
        ),

        // Chain Selection & Management
        h('div', { className: 'grid grid-cols-2 gap-4 mb-6' },
          h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700' },
            h('div', { className: 'flex items-center mb-3' },
              h('div', { className: 'w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3' },
                h('span', { className: 'text-white text-lg' }, '🔍')
              ),
              h('h4', { className: 'text-gray-200 font-medium' }, 'Chain Selection')
            ),
            h('div', { className: 'space-y-2' },
              h('div', { className: 'flex items-center text-sm text-gray-400' },
                h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                'Monitor chain conditions'
              ),
              h('div', { className: 'flex items-center text-sm text-gray-400' },
                h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                'Select optimal chain'
              )
            )
          ),

          h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700' },
            h('div', { className: 'flex items-center mb-3' },
              h('div', { className: 'w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3' },
                h('span', { className: 'text-white text-lg' }, '🔄')
              ),
              h('h4', { className: 'text-gray-200 font-medium' }, 'Chain Management')
            ),
            h('div', { className: 'space-y-2' },
              h('div', { className: 'flex items-center text-sm text-gray-400' },
                h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                'Track transaction status'
              ),
              h('div', { className: 'flex items-center text-sm text-gray-400' },
                h('span', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }),
                'Manage chain transitions'
              )
            )
          )
        ),

        // Transaction Status
        h('div', { className: 'bg-gray-850 rounded-lg p-4 border border-gray-700' },
          h('div', { className: 'flex items-center mb-3' },
            h('div', { className: 'w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3' },
              h('span', { className: 'text-white text-lg' }, '📊')
            ),
            h('h4', { className: 'text-gray-200 font-medium' }, 'Transaction Status')
          ),
          h('div', { className: 'space-y-2' },
            h('div', { className: 'text-sm text-gray-300' },
              h('span', { className: 'font-medium' }, 'Status Tracking:')
            ),
            h('div', { className: 'text-sm text-gray-400' },
              '• Pending → Processing → Confirmed'
            ),
            h('div', { className: 'text-sm text-gray-400' },
              '• Real-time status updates'
            ),
            h('div', { className: 'text-sm text-gray-400' },
              '• Chain-specific confirmations'
            )
          )
        )
      )
    )
  );
};

// ComprehensiveSystemArchitecture (Tech Architecture Diagram)
window.ModRollDiagrams.ComprehensiveSystemArchitecture = function() {
  return h('div', { className: 'flex flex-col items-center w-full' },
    h('div', { className: 'relative w-full max-w-4xl bg-gray-900 rounded-lg p-4 overflow-hidden' },
      h('div', { className: 'relative h-[600px] flex items-center justify-center' },
        h('div', { className: 'absolute inset-0 flex flex-col items-center justify-between py-2' },
          // Title
          h('div', { className: 'text-center mb-2' },
            h('h2', { className: 'text-lg font-bold text-white' }, 'ModRoll System Architecture'),
            h('p', { className: 'text-gray-400 text-xs' }, 'Modular Middleware for Data-Driven Blockchain Applications')
          ),

          // Main Architecture Diagram
          h('div', { className: 'w-full max-w-3xl' },
            // Client Applications Layer
            h('div', { className: 'mb-2' },
              h('div', { className: 'text-xs text-gray-400 mb-0.5 ml-2' }, 'CLIENT APPLICATIONS'),
              h('div', { className: 'flex justify-between gap-1' },
                h('div', { className: 'flex-1 border border-gray-700 bg-gray-800 rounded p-1 text-center' },
                  h('div', { className: 'text-white text-xs font-medium' }, 'dApps')
                ),
                h('div', { className: 'flex-1 border border-gray-700 bg-gray-800 rounded p-1 text-center' },
                  h('div', { className: 'text-white text-xs font-medium' }, 'Smart Contracts')
                ),
                h('div', { className: 'flex-1 border border-gray-700 bg-gray-800 rounded p-1 text-center' },
                  h('div', { className: 'text-white text-xs font-medium' }, 'Insurance Apps')
                ),
                h('div', { className: 'flex-1 border border-gray-700 bg-gray-800 rounded p-1 text-center' },
                  h('div', { className: 'text-white text-xs font-medium' }, 'Financial Services')
                )
              ),
              h('div', { className: 'flex justify-center mt-0.5' },
                h('div', { className: 'w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-600 border-r-[8px] border-r-transparent' })
              )
            ),

            // Transaction Handler Layer
            h('div', { className: 'mb-2' },
              h('div', { className: 'text-xs text-gray-400 mb-0.5 ml-2' }, 'TRANSACTION HANDLER'),
              h('div', { className: 'border border-blue-700 bg-blue-900 bg-opacity-30 rounded p-1' },
                h('div', { className: 'flex justify-between' },
                  h('div', { className: 'flex-1 text-center' },
                    h('div', { className: 'text-blue-300 text-xs font-medium' }, 'Validation')
                  ),
                  h('div', { className: 'flex-1 text-center' },
                    h('div', { className: 'text-blue-300 text-xs font-medium' }, 'Wrapping & Signing')
                  ),
                  h('div', { className: 'flex-1 text-center' },
                    h('div', { className: 'text-blue-300 text-xs font-medium' }, 'Registration')
                  )
                )
              ),
              h('div', { className: 'flex justify-center mt-0.5' },
                h('div', { className: 'w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-600 border-r-[8px] border-r-transparent' })
              )
            ),

            // Core Services - Two Columns
            h('div', { className: 'grid grid-cols-2 gap-2 mb-2' },
              // Left Column: Execution Manager & Languages
              h('div', null,
                // Execution Manager
                h('div', { className: 'mb-2' },
                  h('div', { className: 'text-xs text-gray-400 mb-0.5 ml-2' }, 'EXECUTION MANAGER'),
                  h('div', { className: 'border border-purple-700 bg-purple-900 bg-opacity-20 rounded p-1 text-center' },
                    h('div', { className: 'text-purple-300 text-xs font-medium' }, 'Execution Environment'),
                    h('div', { className: 'flex flex-wrap justify-center text-gray-400 text-xs mt-0.5' },
                      h('span', { className: 'mx-1' }, '• Custom Code'),
                      h('span', { className: 'mx-1' }, '• Conditional Logic'),
                      h('span', { className: 'mx-1' }, '• API Integration')
                    )
                  ),
                  h('div', { className: 'flex justify-center mt-0.5' },
                    h('div', { className: 'w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-600 border-r-[8px] border-r-transparent' })
                  )
                ),

                // Languages Module
                h('div', { className: 'mb-2' },
                  h('div', { className: 'text-xs text-gray-400 mb-0.5 ml-2' }, 'LANGUAGES MODULE'),
                  h('div', { className: 'grid grid-cols-3 gap-1' },
                    h('div', { className: 'border border-yellow-700 bg-yellow-900 bg-opacity-20 rounded p-1 text-center' },
                      h('div', { className: 'text-yellow-300 text-xs font-medium' }, 'JavaScript'),
                      h('div', { className: 'text-gray-400 text-xs' }, 'Boa Engine')
                    ),
                    h('div', { className: 'border border-blue-700 bg-blue-900 bg-opacity-20 rounded p-1 text-center' },
                      h('div', { className: 'text-blue-300 text-xs font-medium' }, 'Python'),
                      h('div', { className: 'text-gray-400 text-xs' }, 'PyO3')
                    ),
                    h('div', { className: 'border border-green-700 bg-green-900 bg-opacity-20 rounded p-1 text-center' },
                      h('div', { className: 'text-green-300 text-xs font-medium' }, 'Future'),
                      h('div', { className: 'text-gray-400 text-xs' }, 'Extensions')
                    )
                  )
                )
              ),

              // Right Column: Security & Metrics
              h('div', null,
                // Security Module
                h('div', { className: 'mb-2' },
                  h('div', { className: 'text-xs text-gray-400 mb-0.5 ml-2' }, 'SECURITY MODULE'),
                  h('div', { className: 'border border-red-700 bg-red-900 bg-opacity-20 rounded p-1' },
                    h('div', { className: 'grid grid-cols-3 gap-1' },
                      h('div', { className: 'text-center' },
                        h('div', { className: 'text-red-300 text-xs font-medium' }, 'Verification'),
                        h('div', { className: 'text-gray-400 text-xs' }, 'Manager')
                      ),
                      h('div', { className: 'text-center' },
                        h('div', { className: 'text-red-300 text-xs font-medium' }, 'Network'),
                        h('div', { className: 'text-gray-400 text-xs' }, 'Manager')
                      ),
                      h('div', { className: 'text-center' },
                        h('div', { className: 'text-red-300 text-xs font-medium' }, 'Audit'),
                        h('div', { className: 'text-gray-400 text-xs' }, 'Logger')
                      )
                    )
                  )
                ),

                // Metrics Module
                h('div', { className: 'mb-2' },
                  h('div', { className: 'text-xs text-gray-400 mb-0.5 ml-2' }, 'METRICS MODULE'),
                  h('div', { className: 'border border-indigo-700 bg-indigo-900 bg-opacity-20 rounded p-1' },
                    h('div', { className: 'grid grid-cols-2 gap-1' },
                      h('div', { className: 'text-center' },
                        h('div', { className: 'text-indigo-300 text-xs font-medium' }, 'Performance'),
                        h('div', { className: 'text-gray-400 text-xs' }, 'Metrics')
                      ),
                      h('div', { className: 'text-center' },
                        h('div', { className: 'text-indigo-300 text-xs font-medium' }, 'Storage &'),
                        h('div', { className: 'text-gray-400 text-xs' }, 'Visualization')
                      )
                    )
                  )
                )
              )
            ),

            // Sequencing Layer
            h('div', { className: 'mb-2' },
              h('div', { className: 'text-xs text-gray-400 mb-0.5 ml-2' }, 'SEQUENCING LAYER'),
              h('div', { className: 'border border-green-700 bg-green-900 bg-opacity-20 rounded p-1' },
                h('div', { className: 'flex justify-between' },
                  h('div', { className: 'flex-1 text-center' },
                    h('div', { className: 'text-green-300 text-xs font-medium' }, 'Transaction Polling')
                  ),
                  h('div', { className: 'flex-1 text-center' },
                    h('div', { className: 'text-green-300 text-xs font-medium' }, 'Order Maintenance')
                  ),
                  h('div', { className: 'flex-1 text-center' },
                    h('div', { className: 'text-green-300 text-xs font-medium' }, 'Transaction Tracking')
                  )
                )
              ),
              h('div', { className: 'flex justify-center mt-0.5' },
                h('div', { className: 'w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-600 border-r-[8px] border-r-transparent' })
              )
            ),

            // External Integration
            h('div', { className: 'mb-2' },
              h('div', { className: 'text-xs text-gray-400 mb-0.5 ml-2' }, 'EXTERNAL INTEGRATION'),
              h('div', { className: 'border border-yellow-700 bg-yellow-900 bg-opacity-20 rounded p-1' },
                h('div', { className: 'flex justify-between' },
                  h('div', { className: 'flex-1 text-center' },
                    h('div', { className: 'text-yellow-300 text-xs font-medium' }, 'REST APIs')
                  ),
                  h('div', { className: 'flex-1 text-center' },
                    h('div', { className: 'text-yellow-300 text-xs font-medium' }, 'WebSockets')
                  ),
                  h('div', { className: 'flex-1 text-center' },
                    h('div', { className: 'text-yellow-300 text-xs font-medium' }, 'Flight Status')
                  ),
                  h('div', { className: 'flex-1 text-center' },
                    h('div', { className: 'text-yellow-300 text-xs font-medium' }, 'Weather Data')
                  )
                )
              ),
              h('div', { className: 'flex justify-center mt-0.5' },
                h('div', { className: 'w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-gray-600 border-r-[8px] border-r-transparent' })
              )
            ),

            // Blockchain Networks
            h('div', null,
              h('div', { className: 'text-xs text-gray-400 mb-0.5 ml-2' }, 'BLOCKCHAIN NETWORKS'),
              h('div', { className: 'border border-blue-700 bg-blue-900 bg-opacity-20 rounded p-1' },
                h('div', { className: 'flex flex-col' },
                  h('div', { className: 'flex justify-center mb-1' },
                    h('div', { className: 'px-3 py-0.5 bg-blue-700 rounded text-white text-xs font-medium' },
                      'Primary: SUI Blockchain'
                    )
                  ),
                  h('div', { className: 'flex justify-between items-center' },
                    h('div', { className: 'text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded' }, 'APT'),
                    h('div', { className: 'text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded' }, 'SOL'),
                    h('div', { className: 'text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded' }, 'AVA'),
                    h('div', { className: 'text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded' }, 'NEAR'),
                    h('div', { className: 'text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded' }, 'COSMOS'),
                    h('div', { className: 'text-white text-xs px-1.5 py-0.5 bg-blue-800 rounded' }, 'DOT')
                  ),
                  h('div', { className: 'flex justify-center mt-1' },
                    h('div', { className: 'text-gray-400 text-xs' }, 'Chain Switching Capability')
                  )
                )
              )
            )
          ),

          // Transaction Flow Indicators
          h('div', { className: 'w-full border-t border-gray-700 pt-1 mt-2' },
            h('div', { className: 'flex justify-between items-center' },
              h('div', { className: 'flex items-center' },
                h('div', { className: 'w-2 h-2 bg-blue-500 rounded-full mr-1' }),
                h('div', { className: 'text-white text-xs font-medium' }, 'Transaction Flow')
              ),
              h('div', { className: 'flex items-center' },
                h('div', { className: 'w-2 h-2 bg-purple-500 rounded-full mr-1' }),
                h('div', { className: 'text-white text-xs font-medium' }, 'Execution Path')
              ),
              h('div', { className: 'flex items-center' },
                h('div', { className: 'w-2 h-2 bg-yellow-500 rounded-full mr-1' }),
                h('div', { className: 'text-white text-xs font-medium' }, 'External Data')
              ),
              h('div', { className: 'flex items-center' },
                h('div', { className: 'w-2 h-2 bg-red-500 rounded-full mr-1' }),
                h('div', { className: 'text-white text-xs font-medium' }, 'Security & Verification')
              ),
              h('div', { className: 'flex items-center' },
                h('div', { className: 'w-2 h-2 bg-green-500 rounded-full mr-1' }),
                h('div', { className: 'text-white text-xs font-medium' }, 'Chain Switching')
              )
            )
          )
        )
      )
    )
  );
};

// FallbackManager
window.ModRollDiagrams.FallbackManager = function() {
  return h('div', { className: 'w-full max-w-4xl mx-auto' },
    h('div', { className: 'bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 relative' },
      h('div', { className: 'relative h-[500px]' },
        // Container for all elements with fixed coordinates
        h('div', { className: 'absolute inset-0' },
          // Primary Chain (SUI)
          h('div', { className: 'absolute', style: { top: '60px', left: 'calc(50% - 40px)' } },
            h('div', { className: 'w-[80px] h-[80px] bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex flex-col items-center justify-center border-4 border-purple-500 shadow-lg' },
              h('div', { className: 'absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white' }),
              h('span', { className: 'text-white font-bold text-lg' }, 'SUI'),
              h('div', { className: 'text-xs text-purple-200 mt-1' }, '(Your Primary Chain)')
            )
          ),

          // Ethereum
          h('div', { className: 'absolute', style: { top: '240px', left: 'calc(25% - 30px)' } },
            h('div', { className: 'w-[60px] h-[60px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex flex-col items-center justify-center border-4 border-blue-500 shadow-lg' },
              h('span', { className: 'text-white font-bold' }, 'ETH')
            )
          ),

          // Solana
          h('div', { className: 'absolute', style: { top: '240px', left: 'calc(50% - 30px)' } },
            h('div', { className: 'w-[60px] h-[60px] bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex flex-col items-center justify-center border-4 border-purple-400 shadow-lg' },
              h('span', { className: 'text-white font-bold' }, 'SOL')
            )
          ),

          // Polygon
          h('div', { className: 'absolute', style: { top: '240px', left: 'calc(75% - 30px)' } },
            h('div', { className: 'w-[60px] h-[60px] bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex flex-col items-center justify-center border-4 border-indigo-500 shadow-lg' },
              h('span', { className: 'text-white font-bold' }, 'MATIC')
            )
          ),

          // "Or any other chains" text
          h('div', { className: 'absolute', style: { top: '310px', left: '50%', transform: 'translateX(-50%)' } },
            h('div', { className: 'text-xs text-gray-600 font-medium' }, 'or any other chains...')
          ),

          // SVG Arrows
          h('svg', { className: 'absolute inset-0 w-full h-full', viewBox: '0 0 400 500', preserveAspectRatio: 'xMidYMid meet', style: { zIndex: 10, pointerEvents: 'none' } },
            // Gradients for lines
            h('defs', null,
              h('linearGradient', { id: 'gradient1', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
                h('stop', { offset: '0%', stopColor: '#9333EA' }),
                h('stop', { offset: '100%', stopColor: '#3B82F6' })
              ),
              h('linearGradient', { id: 'gradient2', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
                h('stop', { offset: '0%', stopColor: '#9333EA' }),
                h('stop', { offset: '100%', stopColor: '#A855F7' })
              ),
              h('linearGradient', { id: 'gradient3', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
                h('stop', { offset: '0%', stopColor: '#9333EA' }),
                h('stop', { offset: '100%', stopColor: '#6366F1' })
              )
            ),
            
            // Arrow to ETH
            h('line', { 
              x1: '200', 
              y1: '140', 
              x2: '100', 
              y2: '240', 
              stroke: 'url(#gradient1)', 
              strokeWidth: '3', 
              strokeDasharray: '6,6'
            }),
            h('polygon', { 
              points: '100,230 94,240 106,240', 
              fill: '#3B82F6', 
              stroke: 'none'
            }),

            // Arrow to SOL
            h('line', { 
              x1: '200', 
              y1: '140', 
              x2: '200', 
              y2: '240', 
              stroke: '#A855F7', 
              strokeWidth: '3', 
              strokeDasharray: '6,6'
            }),
            h('polygon', { 
              points: '200,230 194,240 206,240', 
              fill: '#A855F7', 
              stroke: 'none'
            }),

            // Arrow to MATIC
            h('line', { 
              x1: '200', 
              y1: '140', 
              x2: '300', 
              y2: '240', 
              stroke: 'url(#gradient3)', 
              strokeWidth: '3', 
              strokeDasharray: '6,6'
            }),
            h('polygon', {points: '300,230 294,240 306,240', 
                fill: '#6366F1', 
                stroke: 'none'
              })
            ),

            // Status Text
            h('div', { className: 'absolute', style: { bottom: '40px', left: '50%', transform: 'translateX(-50%)' } },
              h('div', { className: 'bg-white rounded-lg shadow-lg px-6 py-3' },
                h('div', { className: 'text-sm text-gray-600' }, "Your primary chain having issues or can't be trusted anymore? Switch to any available alternative chain")
              )
            )
          )
        )
      )
    );
  };

  // TokenDistribution
  window.ModRollDiagrams.TokenDistribution = function() {
    return h('div', { className: 'w-full max-w-lg mx-auto' },
      h('div', { className: 'bg-white rounded-lg p-6 shadow-md' },
        h('h3', { className: 'text-lg font-bold text-center text-indigo-800 mb-4' }, 'ModRoll Token Distribution'),
        
        h('div', { className: 'relative' },
          h('svg', { width: '400', height: '400', viewBox: '0 0 400 400' },
            // Render pie chart segments with actual data
            h('path', {
              d: 'M 200 200 L 200 50 A 150 150 0 0 1 329.9 275 Z',
              fill: '#3A36E0',
              stroke: 'white',
              strokeWidth: '2'
            }),
            h('path', {
              d: 'M 200 200 L 329.9 275 A 150 150 0 0 1 141.22 350 Z',
              fill: '#7B75FD',
              stroke: 'white',
              strokeWidth: '2'
            }),
            h('path', {
              d: 'M 200 200 L 141.22 350 A 150 150 0 0 1 50 200 Z',
              fill: '#00C2FF',
              stroke: 'white',
              strokeWidth: '2'
            }),
            h('path', {
              d: 'M 200 200 L 50 200 A 150 150 0 0 1 117.6 75.98 Z',
              fill: '#00D26A',
              stroke: 'white',
              strokeWidth: '2'
            }),
            h('path', {
              d: 'M 200 200 L 117.6 75.98 A 150 150 0 0 1 200 50 Z',
              fill: '#FFA500',
              stroke: 'white',
              strokeWidth: '2'
            }),
            
            // Add percentage labels
            h('text', {
              x: '275',
              y: '140',
              textAnchor: 'middle',
              fill: 'white',
              fontWeight: 'bold',
              fontSize: '14'
            }, '30%'),
            
            h('text', {
              x: '290',
              y: '290',
              textAnchor: 'middle',
              fill: 'white',
              fontWeight: 'bold',
              fontSize: '14'
            }, '25%'),
            
            h('text', {
              x: '130',
              y: '290',
              textAnchor: 'middle',
              fill: 'white',
              fontWeight: 'bold',
              fontSize: '14'
            }, '20%'),
            
            h('text', {
              x: '100',
              y: '140',
              textAnchor: 'middle',
              fill: 'white',
              fontWeight: 'bold',
              fontSize: '14'
            }, '15%'),
            
            h('text', {
              x: '175',
              y: '90',
              textAnchor: 'middle',
              fill: 'white',
              fontWeight: 'bold',
              fontSize: '14'
            }, '10%')
          )
        ),
        
        // Legend
        h('div', { className: 'mt-4 grid grid-cols-2 gap-2' },
          h('div', { className: 'flex items-center' },
            h('div', { className: 'w-4 h-4 mr-2 rounded-sm', style: { backgroundColor: '#3A36E0' } }),
            h('span', { className: 'text-sm text-gray-700' }, 'Public Sale (30%)')
          ),
          h('div', { className: 'flex items-center' },
            h('div', { className: 'w-4 h-4 mr-2 rounded-sm', style: { backgroundColor: '#7B75FD' } }),
            h('span', { className: 'text-sm text-gray-700' }, 'Ecosystem Growth (25%)')
          ),
          h('div', { className: 'flex items-center' },
            h('div', { className: 'w-4 h-4 mr-2 rounded-sm', style: { backgroundColor: '#00C2FF' } }),
            h('span', { className: 'text-sm text-gray-700' }, 'Validator Incentives (20%)')
          ),
          h('div', { className: 'flex items-center' },
            h('div', { className: 'w-4 h-4 mr-2 rounded-sm', style: { backgroundColor: '#00D26A' } }),
            h('span', { className: 'text-sm text-gray-700' }, 'Team & Advisors (15%)')
          ),
          h('div', { className: 'flex items-center' },
            h('div', { className: 'w-4 h-4 mr-2 rounded-sm', style: { backgroundColor: '#FFA500' } }),
            h('span', { className: 'text-sm text-gray-700' }, 'Reserve & Liquidity (10%)')
          )
        ),
        
        // Total Supply
        h('div', { className: 'mt-4 text-center text-sm text-gray-600' },
          'Total Supply: 1,000,000,000 MODL Tokens'
        )
      )
    );
  };

  // Console log to confirm the components are loaded
  console.log('ModRoll Diagrams components initialized:', Object.keys(window.ModRollDiagrams));
})();