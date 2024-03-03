import '../TableConnect.tsx';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx';
import { Modem } from '@/components/Main/TableConnect/Router/Modem/Modem.tsx';
import RouterHeader from '@/components/Main/TableConnect/Router/RouterHeader/RouterHeader.tsx';
import EditButtons from '@/components/Main/TableConnect/Router/EditButtons/EditButtons.tsx';
import { baseData } from '@/components/assets/constants/constatns.ts';
export const Router = () => {
  return (
    <div>
      <Accordion type='single' collapsible className='w-full table-connect'>
        {baseData.map((router) => (
          <AccordionItem
            key={router.id}
            value={`item-${router.id}`}
            className='table-connect__accordeon w-100 m-4 py-3'
          >
            <AccordionTrigger className='table-connect__trigger'>
              <div className='w-100 flex items-center justify-between px-4'>
                <RouterHeader router={router} />
                <ChevronDown className='h-5 w-5 shrink-0 transition-transform duration-200' />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='table-connect__header my-[20px] mx-[40px]' />
              <Modem modemList={router.modem} />
              <EditButtons />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
