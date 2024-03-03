import React from 'react';
import { Clock, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx';
import '../../TableConnect.css';
import { IModem } from '@/components/assets/constants/constatns.ts';

interface IPModem {
  modemList: IModem[];
}

export const Modem: React.FC<IPModem> = ({ modemList }) => {
  return (
    <div>
      <Accordion type='single' collapsible className='w-full table-connect'>
        {modemList.map((modem, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className='table-connect__accordeon w-100 m-4 p-3'
          >
            <AccordionTrigger>
              <div className='flex justify-between items-center w-[60%] mx-3'>
                <p className='text-lg'>{modem.name}</p>
                <p className='text-base text-slate-500'>{modem.ip}</p>
                <div className='flex gap-2 items-center'>
                  <Clock className='h-[25px] w-[25px] shrink-0 transition-transform duration-200' />
                  <p>{modem.timer}</p>
                </div>
              </div>
              <ChevronDown className='h-[25px] w-[25px] shrink-0 transition-transform duration-200' />
            </AccordionTrigger>
            <AccordionContent className='flex flex-col mx-3 text-base'>
              <div className='table-connect__header my-[20px] mx-[20px]' />
              <p>
                Модель &mdash;{' '}
                <span className='font-medium'>{modem.model}</span>
              </p>
              <p>
                Оператор &mdash;{' '}
                <span className='font-medium'>{modem.operator}</span>
              </p>
              <p>
                Номер телефона &mdash;{' '}
                <span className='font-medium'>{modem.phoneNumber}</span>
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
