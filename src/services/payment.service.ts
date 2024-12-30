import { axiosWithAuth } from '@/src/api/interceptors'

import { API_URL } from '@/src/config/api.config'

import { IPayment } from '@/src/types/payment.types'

// Atualize a interface da resposta do pagamento
export interface PaymentResponse {
  url: string // Ajustado para corresponder à resposta do backend
}

class PaymentService {
  async getAll() {
    const { data } = await axiosWithAuth.get<IPayment[]>(API_URL.payments(''))
    return data
  }

  async checkout(amount: number): Promise<PaymentResponse> {
    try {
      const { data } = await axiosWithAuth.post<PaymentResponse>(
        API_URL.payments(''),
        { amount }
      )
      return data
    } catch (error) {
      throw error
    }
  }

  async delete(id: string) {
    return axiosWithAuth.delete<string>(API_URL.payments(`/${id}`))
  }
}

export const paymentService = new PaymentService()
