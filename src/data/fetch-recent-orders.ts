import recentOrdersList from '@/data/.mock/recent-orders'

export interface RecentOrdersDataResponse {
  data: {
    date: string
    name: string
    ship_to: string
    payment_method: string
    sale_amount: string
  }[]
}

export default async function fetchRecentOrders(): Promise<RecentOrdersDataResponse> {
  // Fake loading from server
  await new Promise((resolve) => setTimeout(resolve, 800))

  return { data: recentOrdersList }
}
