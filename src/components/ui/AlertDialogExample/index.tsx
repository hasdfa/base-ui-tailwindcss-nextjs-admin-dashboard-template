import * as React from 'react'
import { AlertDialog } from '@base-ui-components/react/alert-dialog'
import Button from '@/components/ui/Button' // Assuming Button is already in ui
import Typography from '@/components/ui/Typography' // Assuming Typography is already in ui
// twMerge is not directly used in this specific block's logic, Button might use it internally.

export default function AlertDialogExample() {
  return (
    <>
      {/* Alert Dialog Section */}
      <Typography
        id="alert-dialog"
        variant="h2"
        className="pt-6" // Preserving original class
        component="a"
        href="#alert-dialog"
      >
        Alert Dialog
      </Typography>
      <div className="p-4 border border-gray-200 rounded-lg">
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Button variant="outlined">Open Alert Dialog</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Backdrop className="fixed inset-0 bg-black/30 data-[starting-style]:animate-fade-in data-[ending-style]:animate-fade-out" />
            <AlertDialog.Popup className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-full max-w-sm data-[starting-style]:animate-slide-up-fade data-[ending-style]:animate-slide-down-fade">
              <AlertDialog.Title className="text-lg font-semibold text-gray-800">
                Confirm Action
              </AlertDialog.Title>
              <AlertDialog.Description className="text-sm text-gray-600 mt-2">
                Are you sure you want to proceed with this action? This cannot
                be undone.
              </AlertDialog.Description>
              <div className="mt-6 flex justify-end space-x-3">
                <AlertDialog.Close asChild>
                  <Button variant="text">Cancel</Button>
                </AlertDialog.Close>
                <AlertDialog.Close asChild>
                  <Button variant="contained" className="bg-red-500 hover:bg-red-600">Confirm</Button>
                </AlertDialog.Close>
              </div>
            </AlertDialog.Popup>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </>
  )
}
