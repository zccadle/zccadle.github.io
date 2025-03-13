import React from 'react';

const TokenDistributionChart = () => {
  // Data for the pie chart
  const tokenDistribution = [
    { name: "Public Sale", percentage: 30, color: "#3A36E0" },
    { name: "Ecosystem Growth", percentage: 25, color: "#7B75FD" },
    { name: "Validator Incentives", percentage: 20, color: "#00C2FF" },
    { name: "Team & Advisors", percentage: 15, color: "#00D26A" },
    { name: "Reserve & Liquidity", percentage: 10, color: "#FFA500" }
  ];
  
  // Calculate the SVG coordinates for the pie chart
  const calculateCoordinates = () => {
    const centerX = 200;
    const centerY = 200;
    const radius = 150;
    let startAngle = 0;
    
    return tokenDistribution.map(segment => {
      // Convert percentage to angle
      const angle = (segment.percentage / 100) * 360;
      const angleInRadians = (startAngle + angle) * (Math.PI / 180);
      const startAngleInRadians = startAngle * (Math.PI / 180);
      
      // Calculate end point of the arc
      const endX = centerX + radius * Math.sin(angleInRadians);
      const endY = centerY - radius * Math.cos(angleInRadians);
      
      // Calculate start point of the arc
      const startX = centerX + radius * Math.sin(startAngleInRadians);
      const startY = centerY - radius * Math.cos(startAngleInRadians);
      
      // Determine if the arc should be drawn the long way around
      const largeArcFlag = angle > 180 ? 1 : 0;
      
      // Create the path for this segment
      const path = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
      
      // Calculate position for the label
      const labelAngleInRadians = (startAngle + angle/2) * (Math.PI / 180);
      const labelRadius = radius * 0.7; // 70% of the radius for labels
      const labelX = centerX + labelRadius * Math.sin(labelAngleInRadians);
      const labelY = centerY - labelRadius * Math.cos(labelAngleInRadians);
      
      // Update the start angle for the next segment
      startAngle += angle;
      
      return {
        ...segment,
        path,
        labelX,
        labelY
      };
    });
  };
  
  const segments = calculateCoordinates();
  
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-bold text-center text-indigo-800 mb-4">ModRoll Token Distribution</h3>
        
        <div className="relative">
          <svg width="400" height="400" viewBox="0 0 400 400">
            {/* Render pie chart segments */}
            {segments.map((segment, index) => (
              <path
                key={index}
                d={segment.path}
                fill={segment.color}
                stroke="white"
                strokeWidth="2"
              />
            ))}
            
            {/* Add labels */}
            {segments.map((segment, index) => (
              <text
                key={`label-${index}`}
                x={segment.labelX}
                y={segment.labelY}
                textAnchor="middle"
                fill="white"
                fontWeight="bold"
                fontSize="14"
              >
                {segment.percentage}%
              </text>
            ))}
          </svg>
        </div>
        
        {/* Legend */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {tokenDistribution.map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-4 h-4 mr-2 rounded-sm" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-700">
                {item.name} ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
        
        {/* Total Supply */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Total Supply: 1,000,000,000 MODL Tokens
        </div>
      </div>
    </div>
  );
};

export default TokenDistributionChart;