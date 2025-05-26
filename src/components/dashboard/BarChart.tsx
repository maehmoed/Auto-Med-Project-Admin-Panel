import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

type BarChartProps = {
  data: Array<any>;
  title: string;
  dataKeys: Array<{
    key: string;
    color: string;
    name: string;
  }>;
  xAxisKey: string;
  xAxisFormatter?: (value: any) => string;
  tooltipFormatter?: (value: any) => string;
  className?: string;
  timeRanges?: Array<{
    label: string;
    value: string;
  }>;
};

const BarChart: React.FC<BarChartProps> = ({
  data,
  title,
  dataKeys,
  xAxisKey,
  xAxisFormatter,
  tooltipFormatter,
  className = '',
  timeRanges
}) => {
  const [selectedRange, setSelectedRange] = useState(timeRanges ? timeRanges[0].value : null);

  // Format data for tooltip display
  const formatTooltip = (value: any) => {
    if (tooltipFormatter) {
      return tooltipFormatter(value);
    }
    return value;
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm p-5 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        
        {timeRanges && (
          <div className="flex items-center space-x-2">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedRange === range.value
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedRange(range.value)}
              >
                {range.label}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
            barGap={2}
            barSize={16}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
            <XAxis 
              dataKey={xAxisKey} 
              tickLine={false}
              axisLine={false}
              tickFormatter={xAxisFormatter}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              dy={10}
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              dx={-10}
            />
            <Tooltip 
              formatter={formatTooltip}
              contentStyle={{ 
                borderRadius: '0.375rem', 
                border: 'none', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem'
              }} 
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              wrapperStyle={{ paddingTop: '0.5rem' }}
            />
            
            {dataKeys.map((dataKey, index) => (
              <Bar
                key={dataKey.key}
                dataKey={dataKey.key}
                name={dataKey.name}
                fill={dataKey.color}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;
