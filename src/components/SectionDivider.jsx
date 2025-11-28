import React from 'react';

// Composant de séparation de sections
export const SectionDivider = ({ variant = 'default' }) => {
    const variants = {
        default: (
            <div className="relative w-full h-px my-4">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent blur-sm" />
            </div>
        ),

    };

    return variants[variant] || variants.default;
};