import { axiosWithAuth } from '@/src/api/interceptors'

import { API_URL } from '@/src/config/api.config'

import { IPayment } from '@/src/types/payment.types'

interface PaymentResponse {
  confirmation: {
    confirmation_url: string
  }
}

class PaymentService {
  async getAll() {
    const { data } = await axiosWithAuth.get<IPayment[]>(API_URL.payments(''))
    return data
  }

  async checkout(amount: number) {
    try {
      const response = await axiosWithAuth.post<PaymentResponse>(
        API_URL.payments(''),
        {
          amount
        }
      )
      return response
    } catch (error) {
      return undefined
    }
  }

  async delete(id: string) {
    return axiosWithAuth.delete<string>(API_URL.payments(`/${id}`))
  }
}

export const paymentService = new PaymentService()
