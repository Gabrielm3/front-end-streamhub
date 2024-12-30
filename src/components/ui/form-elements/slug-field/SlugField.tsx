import { FC } from 'react'

import Field from '../field/Field'
import { ISlugField } from '../form.interface'

import styles from './SlugField.module.scss'

const SlugField: FC<ISlugField> = ({ error, register, generate }) => {
	return (
		<div className='relative'>
			<Field
				{...register('slug', {
					required: 'Slug is required'
				})}
				placeholder='Slug'
				error={error}
			/>
			<div className={styles.badge} onClick={generate}>
				generate
			</div>
		</div>
	)
}

export default SlugField
