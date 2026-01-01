import React from 'react';
import { Link } from 'react-router-dom';

interface IsoButtonProps {
    to?: string;
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'outline' | 'solid' | 'dark';
    size?: 'sm' | 'md' | 'lg';
    showArrow?: boolean;
    className?: string;
    uppercase?: boolean;
}

const IsoButton: React.FC<IsoButtonProps> = ({
    to,
    href,
    onClick,
    children,
    variant = 'outline',
    size = 'md',
    showArrow = true,
    className = '',
    uppercase = true,
}) => {
    const sizeClasses = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    };

    const isGradient = className.includes('gradient');

    const variantClasses = {
        outline: isGradient ? '' : 'bg-transparent border border-gray-800 text-gray-800 hover:bg-gradient-to-r hover:from-mint-500 hover:to-mint-300 hover:text-white hover:border-transparent',
        solid: isGradient ? '' : 'bg-gray-800 border border-gray-800 text-white hover:bg-gradient-to-r hover:from-mint-500 hover:to-mint-300 hover:text-white hover:border-transparent',
        dark: 'bg-iso-dark border border-iso-dark text-white hover:bg-black',
    };

    const baseClasses = `
    inline-flex items-center justify-center gap-3
    font-iso font-medium tracking-wider
    rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
    ${uppercase ? 'uppercase' : ''}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

    const ArrowIcon = () => (
        <span className="flex items-center justify-center w-5 h-5 ml-1">
            <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </span>
    );

    const content = (
        <>
            <span>{children}</span>
            {showArrow && <ArrowIcon />}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={`group ${baseClasses}`}>
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${baseClasses}`}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`group ${baseClasses}`}>
            {content}
        </button>
    );
};

export default IsoButton;
