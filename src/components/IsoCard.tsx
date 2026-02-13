import React from 'react';

interface IsoCardProps {
    label?: string;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    gradientBorder?: boolean;
}

const IsoCard: React.FC<IsoCardProps> = ({
    label,
    title,
    description,
    children,
    className = '',
    onClick,
    gradientBorder = false,
}) => {
    return (
        <div
            className={`
        bg-white border border-iso-border rounded-lg p-6 sm:p-8
        transition-all duration-300 ease-out
        ${gradientBorder ? 'gradient-border' : 'hover:shadow-lg hover:border-gray-300'}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
            onClick={onClick}
        >
            {label && (
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
                    <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                        {label}
                    </span>
                </div>
            )}

            {title && (
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-gray-900 mb-3 leading-tight">
                    {title}
                </h3>
            )}

            {description && (
                <p className="text-gray-600 font-iso text-sm sm:text-base leading-relaxed mb-4">
                    {description}
                </p>
            )}

            {children}
        </div>
    );
};

export default IsoCard;
