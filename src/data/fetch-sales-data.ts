import { dashboardSalesChartData } from '@/data/.mock/sales-data'

export interface SalesDataResponse {
  data: {
    volume: number
    label: string
  }[]
}

export default async function fetchSalesData(): Promise<SalesDataResponse> {
  // Fake loading from server
  await new Promise((resolve) => setTimeout(resolve, 750))

  return { data: dashboardSalesChartData }
}
