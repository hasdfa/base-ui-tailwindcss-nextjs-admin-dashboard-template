import * as React from 'react'
import { Avatar } from '@base-ui-components/react/avatar'
import Typography from '@/components/ui/Typography'

export default function AvatarExample() {
  return (
    <>
      {/* Avatar Section */}
      <Typography
        id="avatar"
        variant="h2"
        className="pt-6" // Preserving original class
        component="a"
        href="#avatar"
      >
        Avatar
      </Typography>
      <div className="p-4 border border-gray-200 rounded-lg flex items-center space-x-4">
        <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-10 h-10 rounded-full bg-gray-200 text-gray-700">
          <Avatar.Image
            src="https://via.placeholder.com/128"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
          <Avatar.Fallback delay={600}>JD</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-12 h-12 rounded-full bg-brand-500 text-white">
          <Avatar.Fallback>UI</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-16 h-16 rounded-full bg-green-500 text-white text-xl">
          <Avatar.Image
            src="invalid-image-src" // To demonstrate fallback
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
          <Avatar.Fallback delay={0}>AB</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </>
  )
}
