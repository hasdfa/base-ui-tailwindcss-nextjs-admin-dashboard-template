import { GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', flex: 1.5 },
  {
    field: 'name',
    headerName: 'Name',
    flex: 2,
  },
  {
    field: 'ship_to',
    headerName: 'Ship to',
    flex: 2,
  },
  {
    field: 'payment_method',
    headerName: 'Payment method',
    flex: 2,
  },
  {
    field: 'sale_amount',
    headerName: 'Sale amount',
    flex: 2,
  },
]

export default columns
