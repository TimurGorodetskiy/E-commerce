import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';
import { ArrowDownUp } from 'lucide-react';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div
        className={cn(
          'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
          className
        )}
      >
        <Popover>
          <PopoverTrigger className='inline-flex items-center gap-1'>
            <ArrowDownUp size={16} />
            <b>Сортировка:</b>
            <b className='text-primary'>популярное</b>
          </PopoverTrigger>
          <PopoverContent>Popover Content</PopoverContent>
        </Popover>
      </div>
    </>
  );
};
