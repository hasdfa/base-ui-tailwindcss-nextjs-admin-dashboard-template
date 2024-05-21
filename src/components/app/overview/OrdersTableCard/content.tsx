import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import { RecentOrdersDataResponse } from '@/data/fetch-recent-orders'

import columns from './columns'

export default function OrdersTableContent(
  props: Omit<DataGridProps, 'rows' | 'columns' | 'initialState'> & {
    rows: RecentOrdersDataResponse['data']
  }
) {
  return (
    <DataGrid
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
        sorting: {
          sortModel: [{ field: 'date', sort: 'desc' }],
        },
      }}
      pageSizeOptions={[5, 10, 25]}
      disableRowSelectionOnClick
      sx={{
        '&.MuiDataGrid-root': {
          border: 'none',
        },
      }}
      {...props}
    />
  )
}
