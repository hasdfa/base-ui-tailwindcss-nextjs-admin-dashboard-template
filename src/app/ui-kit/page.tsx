'use client'

import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import Button from '@/components/ui/Button'
import Typography from '@/components/ui/Typography'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import TextField from '@/components/ui/TextField'
import Input from '@/components/ui/Input'
import AccordionExample from '@/components/ui/AccordionExample'; 
import AlertDialogExample from '@/components/ui/AlertDialogExample';
import AvatarExample from '@/components/ui/AvatarExample'; // Added
import { Checkbox } from '@base-ui-components/react/checkbox'
import { Collapsible } from '@base-ui-components/react/collapsible'
import { Dialog } from '@base-ui-components/react/dialog'
import { Field } from '@base-ui-components/react/field'
import { Fieldset } from '@base-ui-components/react/fieldset'
import { Form } from '@base-ui-components/react/form'
import { Meter } from '@base-ui-components/react/meter'
import { NumberField } from '@base-ui-components/react/number-field'
import { Popover } from '@base-ui-components/react/popover'
import { PreviewCard } from '@base-ui-components/react/preview-card'
import { Progress } from '@base-ui-components/react/progress'
import { Radio } from '@base-ui-components/react/radio'
import { RadioGroup } from '@base-ui-components/react/radio-group'
import { ScrollArea } from '@base-ui-components/react/scroll-area'
import { Select } from '@base-ui-components/react/select'
import { Separator } from '@base-ui-components/react/separator'
import { Slider } from '@base-ui-components/react/slider'
import { Switch } from '@base-ui-components/react/switch'
import { Tabs } from '@base-ui-components/react/tabs'
import { Toast } from '@base-ui-components/react/toast'
import { Toggle } from '@base-ui-components/react/toggle'
import { ToggleGroup } from '@base-ui-components/react/toggle-group'
import { Toolbar } from '@base-ui-components/react/toolbar'
import { Tooltip } from '@base-ui-components/react/tooltip'
import { FiCheck, FiPlus, FiMinus, FiChevronDown, FiX, FiMoreHorizontal, FiExternalLink, FiBold, FiItalic, FiUnderline, FiBell, FiPaperclip, FiLink, FiInfo } from 'react-icons/fi' // For icons

import styles from './page.module.css'

const buttons = {
  variants: ['contained', 'outlined', 'text'],
  sizes: ['sm', 'md', 'lg'],
}

const typographyVariants = [
  {
    variant: 'h1',
    label: 'Heading 1',
  },
  {
    variant: 'h2',
    label: 'Heading 2',
  },
  {
    variant: 'h3',
    label: 'Heading 3',
  },
  {
    variant: 'subtitle1',
    label: 'Subtitle 1',
  },
  {
    variant: 'subtitle2',
    label: 'Subtitle 2',
  },
  {
    variant: 'body',
    label: 'Body',
  },
]

const spinners = {
  sizes: ['sm', 'md', 'lg', 'xl'],
  colors: ['gray', 'white', 'brand', 'success', 'error', 'warning'],
}

function ParamLabel({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <span className={twMerge('font-normal text-gray-600 text-xs', className)}>
      {children[0].toUpperCase() + children.slice(1)}
    </span>
  )
}

export default function ComponentsPage() {
  // Toast manager for programmatic toasts
  const toastManager = Toast.useToastManager();

  return (
    <div className="col-span-12 gap-4 flex flex-col items-start w-full">
      <Typography variant="h1">All components</Typography>

      <Typography id="button" variant="h2" component="a" href="#button">
        Button
      </Typography>
      <div className="max-w-full overflow-x-auto">
        <table className={styles.table}>
          <thead>
            <tr>
              <th />
              {buttons.variants.map((variant) => (
                <th key={variant} align="left">
                  <ParamLabel>{variant}</ParamLabel>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="gap-2">
            {buttons.sizes.map((size) => (
              <tr key={size}>
                <td>
                  <ParamLabel className="pr-2">{size}</ParamLabel>
                </td>
                {buttons.variants.map((variant) => (
                  <td key={`${variant}-${size}`}>
                    <Button variant={variant as any} size={size as any}>
                      Button
                    </Button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Typography
        id="input"
        variant="h2"
        className="pt-6"
        component="a"
        href="#input"
      >
        Input
      </Typography>
      <div className="max-w-full overflow-x-auto">
        <table className={styles.table}>
          <tbody className="gap-2">
            <tr>
              <td>
                <ParamLabel className="pr-2">Default</ParamLabel>
              </td>
              <td>
                <Input placeholder="Default input" />
              </td>
            </tr>
            <tr>
              <td>
                <ParamLabel className="pr-2">Disabled</ParamLabel>
              </td>
              <td>
                <Input placeholder="Disabled input" disabled />
              </td>
            </tr>
            <tr>
              <td>
                <ParamLabel className="pr-2">With error</ParamLabel>
              </td>
              <td>
                <Input value="Input with error" type="email" error />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Typography
        id="input"
        variant="h2"
        className="pt-6"
        component="a"
        href="#input"
      >
        TextField
      </Typography>
      <div className="max-w-full overflow-x-auto">
        <table className={styles.table}>
          <tbody className="gap-2">
            <tr>
              <td>
                <ParamLabel className="pr-2">Default</ParamLabel>
              </td>
              <td>
                <TextField
                  label="Default text field"
                  inputProps={{ placeholder: 'Default input' }}
                  helperText="Helper text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <ParamLabel className="pr-2">Disabled</ParamLabel>
              </td>
              <td>
                <TextField
                  label="Disabled text field"
                  inputProps={{ placeholder: 'Default input', disabled: true }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <ParamLabel className="pr-2">With error</ParamLabel>
              </td>
              <td>
                <TextField
                  label="Text field with error"
                  inputProps={{ placeholder: 'Default input' }}
                  helperText="Validation failed"
                  error
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Typography
        id="typography"
        variant="h2"
        className="pt-6"
        component="a"
        href="#typography"
      >
        Typography
      </Typography>
      <div className="max-w-full overflow-x-auto">
        <table className={styles.table}>
          <tbody className="gap-2">
            {typographyVariants.map(({ variant, label }) => (
              <tr key={variant}>
                <td>
                  <ParamLabel className="pr-2">{variant}</ParamLabel>
                </td>
                <td>
                  <Typography component="span" variant={variant as any}>
                    {label}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Typography
        id="loading-spinner"
        variant="h2"
        className="pt-6"
        component="a"
        href="#loading-spinner"
      >
        LoadingSpinner
      </Typography>
      <div className="max-w-full overflow-x-auto">
        <table className={styles.table}>
          <thead>
            <tr>
              <th />
              {spinners.colors.map((color) => (
                <th key={color} align="left">
                  <ParamLabel>{color}</ParamLabel>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="gap-2">
            {spinners.sizes.map((size) => (
              <tr key={size}>
                <td>
                  <ParamLabel className="pr-2">{size}</ParamLabel>
                </td>
                {spinners.colors.map((color) => (
                  <td key={`${color}-${size}`}>
                    <LoadingSpinner size={size as any} color={color as any} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AccordionExample />
      <AlertDialogExample />
      <AvatarExample />

      {/* Checkbox Section */}
      <Typography
        id="checkbox"
        variant="h2"
        className="pt-6"
        component="a"
        href="#checkbox"
      >
        Checkbox
      </Typography>
      <div className="p-4 border border-gray-200 rounded-lg space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <Checkbox.Root
            id="c1"
            className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded bg-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 data-[checked]:bg-brand-500 data-[checked]:border-brand-500 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
          >
            <Checkbox.Indicator className="text-white">
              <FiCheck className="w-4 h-4" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <span>Default Checkbox</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <Checkbox.Root
            id="c2"
            defaultChecked
            className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded bg-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 data-[checked]:bg-brand-500 data-[checked]:border-brand-500 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
          >
            <Checkbox.Indicator className="text-white">
              <FiCheck className="w-4 h-4" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <span>Checked Checkbox</span>
        </label>

        <label className="flex items-center space-x-2 cursor-not-allowed">
          <Checkbox.Root
            id="c3"
            disabled
            className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded bg-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 data-[checked]:bg-brand-500 data-[checked]:border-brand-500 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
          >
            <Checkbox.Indicator className="text-white">
              <FiCheck className="w-4 h-4" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <span className="text-gray-400">Disabled Checkbox</span>
        </label>
        
        <label className="flex items-center space-x-2 cursor-pointer">
          <Checkbox.Root
            id="c4"
            defaultChecked
            disabled
            className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded bg-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 data-[checked]:bg-brand-500 data-[checked]:border-brand-500 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
          >
            <Checkbox.Indicator className="text-white">
              <FiCheck className="w-4 h-4" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <span className="text-gray-400">Checked and Disabled</span>
        </label>
      </div>

      {/* Collapsible Section */}
      <Typography
        id="collapsible"
        variant="h2"
        className="pt-6"
        component="a"
        href="#collapsible"
      >
        Collapsible
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <Collapsible.Root className="space-y-2">
          <Collapsible.Trigger
            className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-500 rounded-md">
            <button>
              <span>Toggle Collapsible Panel</span>
              <FiChevronDown
                className={twMerge(
                  'h-5 w-5 transition-transform duration-200',
                  // props['data-panel-open'] && 'rotate-180'
                )}
              />
            </button>
          </Collapsible.Trigger>
          <Collapsible.Panel className="px-3 py-2 text-gray-600 text-sm border border-gray-200 rounded-md data-[starting-style]:animate-slide-down data-[ending-style]:animate-slide-up">
            This is the content of the collapsible panel. It can be hidden or
            shown by clicking the trigger. Lorem ipsum dolor sit amet.
          </Collapsible.Panel>
        </Collapsible.Root>
      </div>

      {/* Dialog Section */}
      <Typography
        id="dialog"
        variant="h2"
        className="pt-6"
        component="a"
        href="#dialog"
      >
        Dialog
      </Typography>
      <div className="p-4 border border-gray-200 rounded-lg">
        <Dialog.Root>
          <Dialog.Trigger render={<Button variant="outlined">Open Dialog</Button>} />
          <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 bg-black/40 data-[starting-style]:animate-fade-in data-[ending-style]:animate-fade-out" />
            <Dialog.Popup className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-full max-w-md data-[starting-style]:animate-slide-up-fade data-[ending-style]:animate-slide-down-fade">
              <Dialog.Title className="text-xl font-semibold text-gray-800">
                Standard Dialog
              </Dialog.Title>
              <Dialog.Description className="text-sm text-gray-600 mt-2 mb-4">
                This is a standard dialog component. You can put any content
                here, like forms, information, or actions.
              </Dialog.Description>
              {/* Example of content within dialog */}
              <Input placeholder="Example input inside dialog" className="mb-4" />
              <div className="mt-6 flex justify-end space-x-3">
                <Dialog.Close render={<Button variant="text">Close</Button>} />
                <Dialog.Close render={<Button variant="contained">Save Changes</Button>} />
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      {/* Field Section */}
      <Typography
        id="field"
        variant="h2"
        className="pt-6"
        component="a"
        href="#field"
      >
        Field
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg space-y-6">
        <Field.Root name="username" className="space-y-1">
          <Field.Label className="text-sm font-medium text-gray-700">
            Username
          </Field.Label>
          <Field.Control render={<Input placeholder="Enter your username" />} />
          <Field.Description className="text-xs text-gray-500">
            This will be your public display name.
          </Field.Description>
        </Field.Root>

        <Field.Root name="email" className="space-y-1" invalid>
          <Field.Label className="text-sm font-medium text-gray-700 data-[invalid]:text-red-600">
            Email Address
          </Field.Label>
          <Field.Control render={<Input type="email" placeholder="you@example.com" defaultValue="invalid-email" />} />
          <Field.Error className="text-xs text-red-500" match="valueMissing">
            Email is required.
          </Field.Error>
           <Field.Error className="text-xs text-red-500" match="typeMismatch">
            Please enter a valid email address.
          </Field.Error>
          {/* Generic error for other cases or server-side validation */}
          <Field.Error className="text-xs text-red-500" forceShow={true}> 
            This email address is already taken.
          </Field.Error>
        </Field.Root>
      </div>

      {/* Form Section */}
      <Typography
        id="form"
        variant="h2"
        className="pt-6"
        component="a"
        href="#form"
      >
        Form
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <Form
          className="space-y-6"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            alert('Form submitted! Check console for data.');
            const formData = new FormData(e.currentTarget);
            console.log(Object.fromEntries(formData.entries()));
          }}
        >
          <Field.Root name="fullName" className="space-y-1">
            <Field.Label className="text-sm font-medium text-gray-700">
              Full Name
            </Field.Label>
            <Field.Control render={<Input required placeholder="Enter your full name" />} />
            <Field.Error className="text-xs text-red-500" match="valueMissing">
              Full name is required.
            </Field.Error>
          </Field.Root>

          <Field.Root name="feedback" className="space-y-1">
            <Field.Label className="text-sm font-medium text-gray-700">
              Feedback
            </Field.Label>
            <Field.Control
              render={({ className, ...props }) => (
                <textarea {...props} className={twMerge(className, 'min-h-[80px]')} />
              )}
              required
              placeholder="Your valuable feedback"
            />
            <Field.Error className="text-xs text-red-500" match="valueMissing">
              Feedback cannot be empty.
            </Field.Error>
          </Field.Root>
          
          <Button type="submit" variant="contained" className="w-full">
            Submit Form
          </Button>
        </Form>
      </div>

      {/* Fieldset Section */}
      <Typography
        id="fieldset"
        variant="h2"
        className="pt-6"
        component="a"
        href="#fieldset"
      >
        Fieldset
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <Fieldset.Root className="border border-gray-300 p-4 rounded-md space-y-4">
          <Fieldset.Legend className="text-lg font-semibold text-gray-700 px-1">
            Login Credentials
          </Fieldset.Legend>
          <Field.Root name="usernameSet" className="space-y-1">
            <Field.Label className="text-sm font-medium text-gray-700">
              Username
            </Field.Label>
            <Field.Control render={<Input placeholder="Enter username" />} />
          </Field.Root>
          <Field.Root name="passwordSet" className="space-y-1">
            <Field.Label className="text-sm font-medium text-gray-700">
              Password
            </Field.Label>
            <Field.Control render={<Input type="password" placeholder="Enter password" />} />
          </Field.Root>
        </Fieldset.Root>
      </div>

      {/* Meter Section */}
      <Typography
        id="meter"
        variant="h2"
        className="pt-6"
        component="a"
        href="#meter"
      >
        Meter
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg space-y-6">
        <div>
          <Meter.Root value={25} className="space-y-1">
            <div className="flex justify-between">
              <Meter.Label className="text-sm text-gray-700">
                Storage Used (Low)
              </Meter.Label>
              <Meter.Value className="text-sm text-gray-500" />
            </div>
            <Meter.Track className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <Meter.Indicator className="h-full bg-red-500 rounded-full" />
            </Meter.Track>
          </Meter.Root>
        </div>
        <div>
          <Meter.Root value={60} className="space-y-1">
            <div className="flex justify-between">
              <Meter.Label className="text-sm text-gray-700">
                Task Completion (Optimum)
              </Meter.Label>
              <Meter.Value className="text-sm text-gray-500" />
            </div>
            <Meter.Track className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <Meter.Indicator className="h-full bg-green-500 rounded-full" />
            </Meter.Track>
          </Meter.Root>
        </div>
        <div>
          <Meter.Root value={85} className="space-y-1">
            <div className="flex justify-between">
              <Meter.Label className="text-sm text-gray-700">
                CPU Load (High)
              </Meter.Label>
              <Meter.Value className="text-sm text-gray-500" />
            </div>
            <Meter.Track className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <Meter.Indicator className="h-full bg-yellow-500 rounded-full" />
            </Meter.Track>
          </Meter.Root>
        </div>
      </div>

      {/* Number Field Section */}
      <Typography
        id="number-field"
        variant="h2"
        className="pt-6"
        component="a"
        href="#number-field"
      >
        Number Field
      </Typography>
      <div className="w-full max-w-xs p-4 border border-gray-200 rounded-lg">
        <Field.Root name="quantity" className="space-y-1">
          <Field.Label className="text-sm font-medium text-gray-700">
            Quantity
          </Field.Label>
          <NumberField.Root defaultValue={1} min={0} max={10} step={1}>
            <NumberField.Group className="flex items-center border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-brand-500 focus-within:border-brand-500">
              <NumberField.Decrement className="p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 rounded-l-md focus:outline-none">
                <FiMinus className="w-4 h-4" />
              </NumberField.Decrement>
              <NumberField.Input className="w-full text-center border-l border-r border-gray-300 focus:outline-none py-1.5" />
              <NumberField.Increment className="p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 rounded-r-md focus:outline-none">
                <FiPlus className="w-4 h-4" />
              </NumberField.Increment>
            </NumberField.Group>
          </NumberField.Root>
          <Field.Description className="text-xs text-gray-500">
            Enter a value between 0 and 10.
          </Field.Description>
        </Field.Root>
      </div>

      {/* Popover Section */}
      <Typography
        id="popover"
        variant="h2"
        className="pt-6"
        component="a"
        href="#popover"
      >
        Popover
      </Typography>
      <div className="p-4 border border-gray-200 rounded-lg">
        <Popover.Root>
          <Popover.Trigger render={<Button variant="outlined" size="sm">
            <FiMoreHorizontal className="w-5 h-5 mr-1" />
            Open Popover
          </Button>} />
          <Popover.Portal>
            <Popover.Positioner
              side="bottom"
              align="center"
              sideOffset={6}
              className="z-50"
            >
              <Popover.Popup className="bg-white p-4 rounded-lg shadow-xl border border-gray-200 w-64 data-[starting-style]:animate-fade-in data-[ending-style]:animate-fade-out">
                <Popover.Arrow className="fill-white stroke-gray-300 stroke-1" />
                <div className="flex justify-between items-center mb-2">
                  <Popover.Title className="text-md font-semibold text-gray-800">
                    Popover Title
                  </Popover.Title>
                  <Popover.Close className="p-1 rounded-full hover:bg-gray-100 text-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-500">
                    <FiX className="w-4 h-4" />
                  </Popover.Close>
                </div>
                <Popover.Description className="text-sm text-gray-600">
                  This is the content of the popover. You can put any
                  information or controls here.
                </Popover.Description>
                <Button size="sm" className="mt-4 w-full">Action inside popover</Button>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      </div>

      {/* Preview Card Section */}
      <Typography
        id="preview-card"
        variant="h2"
        className="pt-6"
        component="a"
        href="#preview-card"
      >
        Preview Card
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <PreviewCard.Root>
          <p className="text-gray-700">
            Hover over this link to see a preview: {' '}
            <PreviewCard.Trigger
              href="https://example.com"
              target="_blank"
              className="inline-flex items-center text-brand-500 hover:text-brand-600 underline focus:outline-none focus:ring-1 focus:ring-brand-500 rounded"
            >
              Example Website <FiExternalLink className="ml-1 h-4 w-4" />
            </PreviewCard.Trigger>
          </p>
          <PreviewCard.Portal>
            <PreviewCard.Positioner sideOffset={8} className="z-50">
              <PreviewCard.Popup className="bg-white p-3 rounded-lg shadow-xl border border-gray-200 w-80 data-[starting-style]:animate-fade-in data-[ending-style]:animate-fade-out">
                <PreviewCard.Arrow className="fill-white stroke-gray-300 stroke-1" />
                <img
                  src="https://via.placeholder.com/300x150/E0E0E0/B0B0B0?text=Website+Preview"
                  alt="Preview of example.com"
                  className="w-full h-auto rounded-md mb-2"
                />
                <h3 className="text-md font-semibold text-gray-800">Example.com</h3>
                <p className="text-sm text-gray-600">
                  This is a placeholder preview for an example website.
                </p>
              </PreviewCard.Popup>
            </PreviewCard.Positioner>
          </PreviewCard.Portal>
        </PreviewCard.Root>
      </div>

      {/* Progress Section */}
      <Typography
        id="progress"
        variant="h2"
        className="pt-6"
        component="a"
        href="#progress"
      >
        Progress
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg space-y-6">
        <div>
          <Progress.Root value={30} className="space-y-1">
            <div className="flex justify-between">
              <Progress.Label className="text-sm text-gray-700">Uploading files</Progress.Label>
              <Progress.Value className="text-sm text-gray-500" />
            </div>
            <Progress.Track className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
              <Progress.Indicator className="h-full bg-brand-500 rounded-full transition-all duration-300 ease-out" />
            </Progress.Track>
          </Progress.Root>
        </div>
        <div>
          <Progress.Root value={75} className="space-y-1">
             <div className="flex justify-between">
              <Progress.Label className="text-sm text-gray-700">Processing data</Progress.Label>
              <Progress.Value className="text-sm text-gray-500" />
            </div>
            <Progress.Track className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
              <Progress.Indicator className="h-full bg-green-500 rounded-full transition-all duration-300 ease-out" />
            </Progress.Track>
          </Progress.Root>
        </div>
        <div>
          <Progress.Root value={null} className="space-y-1"> {/* Indeterminate */}
            <div className="flex justify-between">
              <Progress.Label className="text-sm text-gray-700">Loading...</Progress.Label>
            </div>
            <Progress.Track className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
              <Progress.Indicator className="h-full w-1/2 bg-brand-500 rounded-full animate-indeterminate-progress" />
            </Progress.Track>
          </Progress.Root>
        </div>
      </div>

      {/* Radio Group Section */}
      <Typography
        id="radio-group"
        variant="h2"
        className="pt-6"
        component="a"
        href="#radio-group"
      >
        Radio Group
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <Field.Root name="exampleOptions">
          <RadioGroup defaultValue="option1" name="exampleOptions" className="space-y-2">
            <Field.Label className="text-sm font-medium text-gray-700 mb-1 block">Choose an option:</Field.Label>
            {[
              { value: 'option1', label: 'Option One' },
              { value: 'option2', label: 'Option Two' },
              { value: 'option3', label: 'Option Three (Disabled)', disabled: true },
            ].map((item) => (
              <label
                key={item.value}
                className={twMerge(
                  "flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50",
                  item.disabled ? "cursor-not-allowed text-gray-400" : "cursor-pointer"
                )}
              >
                <Radio.Root
                  value={item.value}
                  id={`r-${item.value}`}
                  disabled={item.disabled}
                  className="flex items-center justify-center w-5 h-5 border-2 border-gray-400 rounded-full focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 data-[checked]:border-brand-500 data-[disabled]:border-gray-300 data-[disabled]:bg-gray-100"
                >
                  <Radio.Indicator className="w-2.5 h-2.5 bg-brand-500 rounded-full data-[disabled]:bg-gray-400" />
                </Radio.Root>
                <span>{item.label}</span>
              </label>
            ))}
          </RadioGroup>
        </Field.Root>
      </div>
      
      {/* Scroll Area Section */}
      <Typography
        id="scroll-area"
        variant="h2"
        className="pt-6"
        component="a"
        href="#scroll-area"
      >
        Scroll Area
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <ScrollArea.Root className="w-full h-48 rounded-md border border-gray-300 bg-white overflow-hidden">
          <ScrollArea.Viewport className="w-full h-full">
            <ScrollArea.Content className="p-4">
              <p className="text-sm text-gray-700 mb-2">
                This is a scrollable area. It can contain a lot of content that
                might overflow its container.
              </p>
              {Array.from({ length: 20 }).map((_, index) => (
                <div
                  key={index}
                  className="py-2 px-3 my-1 bg-gray-50 rounded-md text-xs text-gray-600"
                >
                  Item {index + 1} in the scrollable content.
                </div>
              ))}
              <p className="text-sm text-gray-700 mt-2">
                End of scrollable content.
              </p>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            orientation="vertical"
            className="flex select-none touch-none p-0.5 bg-gray-100 transition-colors duration-150 ease-out data-[hovering]:bg-gray-200 w-2.5"
          >
            <ScrollArea.Thumb className="flex-1 bg-gray-400 rounded-full relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="bg-gray-100" />
        </ScrollArea.Root>
      </div>

      {/* Select Section */}
      <Typography
        id="select"
        variant="h2"
        className="pt-6"
        component="a"
        href="#select"
      >
        Select
      </Typography>
      <div className="w-full max-w-xs p-4 border border-gray-200 rounded-lg">
        <Select.Root defaultValue="item2">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Choose an item:</label>
          <Select.Trigger className="flex items-center justify-between w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm hover:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 data-[popup-open]:ring-1 data-[popup-open]:ring-brand-500">
            <Select.Value placeholder="Select an item..." className="text-sm text-gray-700" />
            <Select.Icon className="text-gray-500">
              <FiChevronDown className="h-4 w-4" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Positioner className="z-50 w-[--trigger-width] mt-1">
              <Select.Popup className="bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden data-[starting-style]:animate-fade-in data-[ending-style]:animate-fade-out">
                {['item1', 'item2', 'item3', 'item4-disabled'].map(
                  (value, index) => (
                    <Select.Item
                      key={value}
                      value={value}
                      disabled={value === 'item4-disabled'}
                      className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 data-[highlighted]:bg-brand-50 data-[highlighted]:text-brand-600 data-[selected]:font-semibold data-[disabled]:opacity-50 data-[disabled]:pointer-events-none cursor-pointer focus:outline-none"
                    >
                      <Select.ItemText>
                        Item {index + 1} {value === 'item4-disabled' ? '(Disabled)' : ''}
                      </Select.ItemText>
                      <Select.ItemIndicator className="text-brand-600">
                        <FiCheck className="h-4 w-4" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  )
                )}
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>
      </div>

      {/* Separator Section */}
      <Typography
        id="separator"
        variant="h2"
        className="pt-6"
        component="a"
        href="#separator"
      >
        Separator
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg space-y-4">
        <div>
          <p className="text-sm text-gray-700">Horizontal Separator:</p>
          <div className="flex flex-col space-y-2 mt-1">
            <span>Above</span>
            <Separator className="h-px bg-gray-300 my-2" />
            <span>Below</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-700">Vertical Separator:</p>
          <div className="flex items-center space-x-2 mt-1 h-10">
            <span>Left</span>
            <Separator
              orientation="vertical"
              className="w-px bg-gray-300 mx-2 self-stretch"
            />
            <span>Right</span>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <Typography
        id="slider"
        variant="h2"
        className="pt-6"
        component="a"
        href="#slider"
      >
        Slider
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg space-y-8">
        <div>
          <Slider.Root defaultValue={50} min={0} max={100} step={1} className="relative flex items-center select-none touch-none w-full h-5">
            <Slider.Value className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-xs text-gray-600">
              {(formattedValues) => `${formattedValues[0]}`}
            </Slider.Value>
            <Slider.Control className="relative flex-grow rounded-full h-1.5 bg-gray-200">
              <Slider.Track className="absolute h-full rounded-full bg-gray-200">
                <Slider.Indicator className="absolute bg-brand-500 h-full rounded-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-brand-500 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-1" />
            </Slider.Control>
          </Slider.Root>
          <p className="text-xs text-center text-gray-500 mt-2">Single Value Slider</p>
        </div>
        <div>
          <Slider.Root defaultValue={[25, 75]} min={0} max={100} step={1} className="relative flex items-center select-none touch-none w-full h-5">
             <Slider.Value className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-xs text-gray-600">
              {(formattedValues) => `${formattedValues[0]} - ${formattedValues[1]}`}
            </Slider.Value>
            <Slider.Control className="relative flex-grow rounded-full h-1.5 bg-gray-200">
              <Slider.Track className="absolute h-full rounded-full bg-gray-200">
                <Slider.Indicator className="absolute bg-brand-500 h-full rounded-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-brand-500 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-1" />
              <Slider.Thumb className="block w-5 h-5 bg-brand-500 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-1" />
            </Slider.Control>
          </Slider.Root>
          <p className="text-xs text-center text-gray-500 mt-2">Range Slider</p>
        </div>
      </div>
      
      {/* Switch Section */}
      <Typography
        id="switch"
        variant="h2"
        className="pt-6"
        component="a"
        href="#switch"
      >
        Switch
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg flex flex-col space-y-3">
        <label className="flex items-center space-x-3 cursor-pointer">
          <Switch.Root
            id="s1"
            className="group relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute h-full w-full rounded-md bg-gray-200 group-data-[checked]:bg-brand-500 transition-colors ease-in-out duration-200"
            />
            <Switch.Thumb className="pointer-events-none absolute left-0 inline-block h-4 w-4 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-4" />
          </Switch.Root>
          <span>Default Switch (Off)</span>
        </label>

        <label className="flex items-center space-x-3 cursor-pointer">
          <Switch.Root
            id="s2"
            defaultChecked
            className="group relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute h-full w-full rounded-md bg-gray-200 group-data-[checked]:bg-brand-500 transition-colors ease-in-out duration-200"
            />
            <Switch.Thumb className="pointer-events-none absolute left-0 inline-block h-4 w-4 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-4" />
          </Switch.Root>
          <span>Checked Switch (On)</span>
        </label>

        <label className="flex items-center space-x-3 cursor-not-allowed">
          <Switch.Root
            id="s3"
            disabled
            className="group relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute h-full w-full rounded-md bg-gray-200 group-data-[checked]:bg-brand-500 transition-colors ease-in-out duration-200"
            />
            <Switch.Thumb className="pointer-events-none absolute left-0 inline-block h-4 w-4 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-4" />
          </Switch.Root>
          <span className="text-gray-400">Disabled Switch (Off)</span>
        </label>

         <label className="flex items-center space-x-3 cursor-not-allowed">
          <Switch.Root
            id="s4"
            defaultChecked
            disabled
            className="group relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute h-full w-full rounded-md bg-gray-200 group-data-[checked]:bg-brand-500 transition-colors ease-in-out duration-200"
            />
            <Switch.Thumb className="pointer-events-none absolute left-0 inline-block h-4 w-4 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-4" />
          </Switch.Root>
          <span className="text-gray-400">Disabled Switch (On)</span>
        </label>
      </div>

      {/* Tabs Section */}
      <Typography id="tabs" variant="h2" className="pt-6" component="a" href="#tabs">
        Tabs
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <Tabs.Root defaultValue="tab1" className="flex flex-col w-full">
          <Tabs.List className="flex border-b border-gray-200 relative">
            <Tabs.Tab
              value="tab1"
              className="px-4 py-2 text-sm font-medium text-gray-600 data-[selected]:text-brand-600 data-[selected]:font-semibold focus:outline-none focus:ring-1 focus:ring-brand-500 data-[disabled]:opacity-50"
            >
              Details
            </Tabs.Tab>
            <Tabs.Tab
              value="tab2"
              className="px-4 py-2 text-sm font-medium text-gray-600 data-[selected]:text-brand-600 data-[selected]:font-semibold focus:outline-none focus:ring-1 focus:ring-brand-500 data-[disabled]:opacity-50"
            >
              Settings
            </Tabs.Tab>
            <Tabs.Tab
              value="tab3"
              disabled
              className="px-4 py-2 text-sm font-medium text-gray-600 data-[selected]:text-brand-600 data-[selected]:font-semibold focus:outline-none focus:ring-1 focus:ring-brand-500 data-[disabled]:opacity-50"
            >
              Disabled
            </Tabs.Tab>
            <Tabs.Indicator className="absolute bottom-[-1px] h-0.5 bg-brand-600 transition-all duration-200 ease-out" />
          </Tabs.List>
          <Tabs.Panel value="tab1" className="p-4 text-sm text-gray-700">
            Content for Details tab. Lorem ipsum dolor sit amet.
          </Tabs.Panel>
          <Tabs.Panel value="tab2" className="p-4 text-sm text-gray-700">
            Content for Settings tab. Configure your preferences here.
          </Tabs.Panel>
          <Tabs.Panel value="tab3" className="p-4 text-sm text-gray-700">
            This content will not be shown as the tab is disabled.
          </Tabs.Panel>
        </Tabs.Root>
      </div>
      
      {/* Toast Section */}
      <Typography id="toast" variant="h2" className="pt-6" component="a" href="#toast">
        Toast
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <Toast.Provider>
          <Button
            variant="outlined"
            onClick={() => {
              toastManager.add({
                title: 'Success!',
                description: 'Your changes have been saved successfully.',
                type: 'success',
                timeout: 3000,
              });
            }}
          >
            Show Success Toast
          </Button>
          <Button
            variant="outlined"
            className="ml-2"
            onClick={() => {
              toastManager.add({
                title: 'Error Occurred',
                description: 'Failed to update settings. Please try again.',
                type: 'error',
                timeout: 5000,
              });
            }}
          >
            Show Error Toast
          </Button>
          <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2 w-80 z-50" />
        </Toast.Provider>
      </div>

      {/* Toggle Section */}
      <Typography id="toggle" variant="h2" className="pt-6" component="a" href="#toggle">
        Toggle
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg flex space-x-2">
        <Toggle
          aria-label="Toggle bold"
          className="p-2 border border-gray-300 rounded-md data-[pressed]:bg-brand-100 data-[pressed]:text-brand-600 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-brand-500"
        >
          <FiBold className="w-5 h-5" />
        </Toggle>
        <Toggle
          aria-label="Toggle italic"
          defaultPressed
          className="p-2 border border-gray-300 rounded-md data-[pressed]:bg-brand-100 data-[pressed]:text-brand-600 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-brand-500"
        >
          <FiItalic className="w-5 h-5" />
        </Toggle>
        <Toggle
          aria-label="Toggle underline"
          disabled
          className="p-2 border border-gray-300 rounded-md data-[pressed]:bg-brand-100 data-[pressed]:text-brand-600 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-brand-500 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
        >
          <FiUnderline className="w-5 h-5" />
        </Toggle>
      </div>

      {/* Toggle Group Section */}
      <Typography id="toggle-group" variant="h2" className="pt-6" component="a" href="#toggle-group">
        Toggle Group
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <ToggleGroup defaultValue={['center']} aria-label="Text alignment" className="flex space-x-1 p-1 bg-gray-100 rounded-md">
          <Toggle value="left" aria-label="Align left" className="px-3 py-1.5 rounded data-[state=on]:bg-brand-500 data-[state=on]:text-white hover:bg-gray-200 data-[state=off]:text-gray-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-brand-500">
            Left
          </Toggle>
          <Toggle value="center" aria-label="Align center" className="px-3 py-1.5 rounded data-[state=on]:bg-brand-500 data-[state=on]:text-white hover:bg-gray-200 data-[state=off]:text-gray-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-brand-500">
            Center
          </Toggle>
          <Toggle value="right" aria-label="Align right" className="px-3 py-1.5 rounded data-[state=on]:bg-brand-500 data-[state=on]:text-white hover:bg-gray-200 data-[state=off]:text-gray-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-brand-500">
            Right
          </Toggle>
        </ToggleGroup>
        <ToggleGroup toggleMultiple={true} defaultValue={['bold']} aria-label="Font style" className="flex space-x-1 mt-4 p-1 bg-gray-100 rounded-md">
          <Toggle value="bold" aria-label="Bold" className="p-2 rounded data-[state=on]:bg-brand-500 data-[state=on]:text-white hover:bg-gray-200 data-[state=off]:text-gray-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-brand-500">
            <FiBold className="w-5 h-5" />
          </Toggle>
          <Toggle value="italic" aria-label="Italic" className="p-2 rounded data-[state=on]:bg-brand-500 data-[state=on]:text-white hover:bg-gray-200 data-[state=off]:text-gray-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-brand-500">
            <FiItalic className="w-5 h-5" />
          </Toggle>
          <Toggle value="underline" aria-label="Underline" className="p-2 rounded data-[state=on]:bg-brand-500 data-[state=on]:text-white hover:bg-gray-200 data-[state=off]:text-gray-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-brand-500">
            <FiUnderline className="w-5 h-5" />
          </Toggle>
        </ToggleGroup>
      </div>

      {/* Toolbar Section */}
      <Typography id="toolbar" variant="h2" className="pt-6" component="a" href="#toolbar">
        Toolbar
      </Typography>
      <div className="w-full max-w-lg p-4 border border-gray-200 rounded-lg">
        <Toolbar.Root aria-label="Editing options" className="flex items-center space-x-1 p-2 bg-gray-50 rounded-md border border-gray-200">
          <Toolbar.Button className="p-1.5 rounded hover:bg-gray-200 text-gray-700 focus:outline-none focus:ring-1 focus:ring-brand-500 data-[disabled]:opacity-50">
            <FiPaperclip className="w-5 h-5" />
          </Toolbar.Button>
          <Toolbar.Button className="p-1.5 rounded hover:bg-gray-200 text-gray-700 focus:outline-none focus:ring-1 focus:ring-brand-500">
            <FiLink className="w-5 h-5" />
          </Toolbar.Button>
          <Toolbar.Separator className="w-px h-5 bg-gray-300 mx-1" />
          <Toolbar.Link href="#" className="px-2 py-1.5 text-sm text-brand-600 hover:underline rounded focus:outline-none focus:ring-1 focus:ring-brand-500">
            Share
          </Toolbar.Link>
          <Toolbar.Button className="p-1.5 rounded hover:bg-gray-200 text-gray-700 focus:outline-none focus:ring-1 focus:ring-brand-500 ml-auto data-[disabled]:opacity-50" disabled>
            <FiBell className="w-5 h-5" />
          </Toolbar.Button>
        </Toolbar.Root>
      </div>

      {/* Tooltip Section */}
      <Typography id="tooltip" variant="h2" className="pt-6" component="a" href="#tooltip">
        Tooltip
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger render={<Button variant="outlined" className="mr-2">
              <FiInfo className="w-4 h-4 mr-1" /> Hover for Tooltip
            </Button>} />
            <Tooltip.Portal>
              <Tooltip.Positioner side="top" align="center" sideOffset={5} className="z-50">
                <Tooltip.Popup className="bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md shadow-lg data-[starting-style]:animate-fade-in data-[ending-style]:animate-fade-out">
                  <Tooltip.Arrow className="fill-gray-800" />
                  This is a helpful tooltip!
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger render={<span className="text-brand-500 underline cursor-pointer">
              Another trigger
            </span>} />
            <Tooltip.Portal>
              <Tooltip.Positioner side="bottom" align="start" sideOffset={5} className="z-50">
                <Tooltip.Popup className="bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md shadow-lg">
                  <Tooltip.Arrow className="fill-gray-800" />
                  Tooltip for a span element.
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  )
}
