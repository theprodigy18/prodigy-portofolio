import React from 'react'
import { cn } from '@/lib/utils'

function MaxWidthWrapper({ className, children }:
    {
        className?: string,
        children: React.ReactNode
    }) {
    return (
        <div className={cn("inset-x-0 px-4 md:px-16 lg:px-20 w-full", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper
