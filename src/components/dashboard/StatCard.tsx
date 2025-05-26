import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease' | 'neutral';
    period?: string;
  };
  className?: string;
};

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  change,
  className = '' 
}) => {
  // Determine trend icon and color based on change type
  const renderTrend = () => {
    if (!change) return null;

    const { value, type, period = 'since last month' } = change;
    
    let trendIcon;
    let colorClass;
    
    if (type === 'increase') {
      trendIcon = <TrendingUp size={16} />;
      colorClass = 'text-green-600';
    } else if (type === 'decrease') {
      trendIcon = <TrendingDown size={16} />;
      colorClass = 'text-red-600';
    } else {
      trendIcon = <Minus size={16} />;
      colorClass = 'text-gray-600';
    }

    return (
      <div className={`flex items-center mt-1 text-sm ${colorClass}`}>
        <span className="mr-1">{trendIcon}</span>
        <span>{Math.abs(value)}%</span>
        <span className="ml-1 text-gray-500">{period}</span>
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm p-5 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="p-2 rounded-full bg-blue-50 text-blue-600">
          {icon}
        </div>
      </div>
      <div className="mt-2">
        <div className="text-2xl font-semibold text-gray-800">{value}</div>
        {renderTrend()}
      </div>
    </div>
  );
};

export default StatCard;
