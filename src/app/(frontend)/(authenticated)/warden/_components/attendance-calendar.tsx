'use client'

import * as React from 'react'
import { addDays, format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'

export default function AttendanceDatePickerWithPresets({ defaultDate }: { defaultDate: Date }) {
  const [date, setDate] = React.useState<Date | undefined>(defaultDate)
  const router = useRouter()

  function onChangeHandler(value: Date | undefined) {
    setDate(value)
    router.push(`/warden/attendance?date=${value}`)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal cursor-pointer',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="flex w-auto flex-col space-y-2 p-2">
        <Select onValueChange={(value) => onChangeHandler(addDays(new Date(), parseInt(value)))}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="-1">Yesterday</SelectItem>
            <SelectItem value="0">Today</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onChangeHandler}
            disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
