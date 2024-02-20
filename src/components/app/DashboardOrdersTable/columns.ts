import { GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', flex: 1.5, minWidth: 120 },
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 150,
    flex: 2,
  },
  {
    field: 'ship_to',
    headerName: 'Ship to',
    minWidth: 150,
    flex: 2,
  },
  {
    field: 'payment_method',
    headerName: 'Payment method',
    minWidth: 200,
    flex: 2,
  },
  {
    field: 'sale_amount',
    headerName: 'Sale amount',
    minWidth: 150,
    flex: 2,
  },
]

export default columns
