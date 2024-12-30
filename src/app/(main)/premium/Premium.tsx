'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { LuLoader } from 'react-icons/lu'
import { useMutation } from '@tanstack/react-query'

import Button from '@/components/ui/form-elements/button/Button'
import Heading from '@/components/ui/heading/Heading'

import { DASHBOARD_URL, PUBLIC_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'
import { paymentService } from '@/services/payment.service'

import { convertPrice } from '@/utils/string/convertPrice'

import styles from './Premium.module.scss'

const Premium: FC = () => {
	const { push } = useRouter()

	const { user, isLoading } = useProfile()

	const { mutate } = useMutation({
		mutationKey: ['create payment'],
		mutationFn: (amount: number) => paymentService.checkout(amount),
		onSuccess(response: PaymentResponse) {
			push(response.confirmation.confirmation_url)
		},
		onError() {
			push(DASHBOARD_URL.root())
		}
	})

	const handleClick = () => {
		mutate(5000)
	}

	return (
		<div className={styles.wrapper}>
			<Heading className={styles.heading}>Subscribe</Heading>
			<div className={styles.description}>
				By purchasing a premium subscription, you get access to thousands of hours
				of high-quality movie content.
			</div>

			<div className={styles.card_wrapper}>
				<div className={styles.plan}>
					<h1 className={styles.heading}>{convertPrice(5000)}</h1>

					<ul className={styles.features}>
						<li className={styles.feature}>
							<BsCheckCircle className={styles.icon} />
							Movie Downloads
						</li>
						<li className={styles.feature}>
							<BsCheckCircle className={styles.icon} />
							Ad-free Experience
						</li>
						<li className={styles.feature}>
							<BsCheckCircle className={styles.icon} />
							High Quality Streaming
						</li>
					</ul>

					<Button
						onClick={handleClick}
						className={styles.button}
					>
						{isLoading ? (
							<LuLoader className={styles.loader} />
						) : user?.isHasPremium ? (
							'Go to Dashboard'
						) : (
							`Pay ${convertPrice(5000)}`
						)}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Premium
