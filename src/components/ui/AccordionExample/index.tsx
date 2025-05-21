import * as React from 'react'
import { Accordion } from '@base-ui-components/react/accordion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import Typography from '@/components/ui/Typography'
// twMerge is not used in this specific block, so it's not imported.

export default function AccordionExample() {
  return (
    <>
      {/* Accordion Section */}
      <Typography
        id="accordion"
        variant="h2"
        className="pt-6" // Preserving original class for now, can be adjusted
        component="a"
        href="#accordion"
      >
        Accordion
      </Typography>
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        <Accordion.Root
          className="space-y-2"
          defaultValue={['item-1']}
          openMultiple
        >
          <Accordion.Item value="item-1" className="border-b border-gray-200">
            <Accordion.Header>
              <Accordion.Trigger
                className="flex justify-between items-center w-full py-3 text-left text-gray-700 hover:text-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 rounded-md px-2"
              >
                <button>
                  <span>Accordion Item 1</span>
                  <FiMinus className="h-5 w-5" />
                </button>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className="px-2 py-3 text-gray-600 text-sm">
              Content for accordion item 1. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="item-2" className="border-b border-gray-200">
            <Accordion.Header>
              <Accordion.Trigger className="flex justify-between items-center w-full py-3 text-left text-gray-700 hover:text-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 rounded-md px-2">
                <button>
                  <span>Accordion Item 2</span>
                  <FiMinus className="h-5 w-5" />
                </button>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className="px-2 py-3 text-gray-600 text-sm">
              Content for accordion item 2. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </>
  )
}
