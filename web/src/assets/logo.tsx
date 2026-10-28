/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { type SVGProps } from 'react'

import { cn } from '@/lib/utils'

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      id='daydream-logo'
      viewBox='0 0 204 140'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      className={cn('h-6 w-auto', className)}
      {...props}
    >
      <title>dd api</title>
      <path fillRule='evenodd' fill='#246BFD' d='M90 18 C85 18 82 22 82 27 L82 57 C75 49 65 45 54 45 C32 45 15 62 15 84 C15 106 32 123 55 123 C79 123 98 105 98 82 L98 26 C98 21 95 18 90 18 Z M55 65 C66 65 74 73 74 84 C74 95 66 103 55 103 C44 103 36 95 36 84 C36 73 44 65 55 65 Z' />
      <path fillRule='evenodd' fill='#246BFD' d='M181 18 C176 18 173 22 173 27 L173 57 C166 49 156 45 145 45 C123 45 106 62 106 84 C106 106 123 123 146 123 C170 123 189 105 189 82 L189 26 C189 21 186 18 181 18 Z M146 65 C157 65 165 73 165 84 C165 95 157 103 146 103 C135 103 127 95 127 84 C127 73 135 65 146 65 Z' />
    </svg>
  )
}
