import cn from 'clsx'
import { FC } from 'react'
import * as Icons from 'react-icons/lu'

export type TypeIconName = keyof typeof Icons

interface IconProps {
	name: TypeIconName
	className?: string
}

export const Icon: FC<IconProps> = ({ name, className }) => {
	const IconComponent = Icons[name]

	if (!IconComponent) {
		console.error(`Icon "${name}" not found in react-icons/lu`)
		return null
	}

	return <IconComponent className={cn('size-4', className)} />
}
