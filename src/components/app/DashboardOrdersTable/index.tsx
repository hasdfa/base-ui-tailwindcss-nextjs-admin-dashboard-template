'use client'

import { DataGrid, DataGridProps } from '@mui/x-data-grid'

import columns from './columns'
import rows from './rows'

export default function DashboardOrdersTable(
  props: Omit<DataGridProps, 'rows' | 'columns' | 'initialState'>
) {
  return (
    <DataGrid
      rows={rows}
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
