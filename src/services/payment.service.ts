import { axiosWithAuth } from '@/src/api/interceptors'

import { API_URL } from '@/src/config/api.config'

import { IPayment } from '@/src/types/payment.types'

class PaymentService {
  async getAll() {
    const { data } = await axiosWithAuth.get<IPayment[]>(API_URL.payments(''))
    return data
  }

  async checkout(amount: number) {
    const { data } = await axiosWithAuth.post<{ url: string }>(
      API_URL.payments(''),
      {
        amount
      }
    )
    return data
  }

  async delete(id: string) {
    return axiosWithAuth.delete<string>(API_URL.payments(`/${id}`))
  }
}

export const paymentService = new PaymentService()
