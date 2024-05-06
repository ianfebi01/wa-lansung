import React, { FunctionComponent, ReactNode } from 'react'
import Spinner from '@/components/Icons/Spinner'
import { cn } from '@/lib/utils'

interface Props {
  disabled?: boolean | undefined
  children: ReactNode
  onClick?: () => void
  type: 'submit' | 'button' | 'reset'
  className?: string
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'icon' | 'iconOnly' | 'link' | 'error'
}

const Button: FunctionComponent<Props> = ( props ) => {
	const {
		disabled,
		children,
		onClick,
		type,
		className,
		loading,
		variant = 'primary',
	} = props

	return (
		<button
			className={cn(
				'py-2 px-4 text-xs flex items-center gap-2 rounded-lg border border-transparent transition-default w-fit',
				' hover:border-gray-800/50 dark:hover:border-white/25',
				// variant
				[
					variant === 'primary' && [
						'bg-primary text-gray-800 dark:bg-dark dark:text-white',
					],
					variant === 'error' && [
						'text-gray-800 dark:text-white border hover:border-red-400 border-red-500 bg-transparent',
					],
					variant === 'secondary' && [
						'bg-secondary text-white dark:bg-dark-secondary dark:text-white',
					],
					variant === 'icon' && [
						'w-8 aspect-square p-2',
						'flex items-center justify-center',
						'text-gray-800 hover:border-gray-800 dark:text-white border dark:hover:border-white/25 border-transparent bg-transparent',
					],
					variant === 'iconOnly' && [
						'w-fit p-0',
						'hover:opacity-75 focus:opacity-75',
						'text-gray-800 dark:text-white border-none',
					],
				],
				disabled && 'text-gray-800/50 dark:bg-dark/50 dark:text-white/50',
				className
			)}
			onClick={onClick}
			type={type}
			disabled={disabled || loading}
		>
			{loading ? <Spinner /> : ''}

			{variant === 'iconOnly' && loading ? '' : children}
		</button>
	)
}

export default Button
