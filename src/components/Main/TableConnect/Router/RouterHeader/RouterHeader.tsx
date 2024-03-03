import { Activity, Globe, Signal } from 'lucide-react';
import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { IRouter } from '@/components/assets/constants/constatns.ts';

interface IRouterHeader {
  router: IRouter;
}

const RouterHeader: React.FC<IRouterHeader> = ({ router }) => {
  const handleHeaderClick = useCallback((event: any) => {
    event.stopPropagation(); // Предотвращаем распространение события
    // Ваши действия по клику на заголовок
  }, []);
  return (
    <div className='flex justify-between items-center w-[90%] router__header'>
      <p className='table-connect__title text-lg'>{router.ip}</p>
      <div
        className='table-connect__icons flex items-center gap-2'
        onClick={handleHeaderClick}
      >
        <div className='table-connect__state cursor-pointer'>
          <Activity strokeWidth={2.5} />
          <p className='text-xs font-normal table-connect__time-reboot'>
            Последняя активность {router.lastActive}
          </p>
        </div>
        <Button
          variant='ghost'
          className={`table-connect__button ${router.tunnel ? `table-connect__button text-active-green` : `text-black`}`}
        >
          WG
        </Button>
        <Button variant='ghost' className='table-connect__button'>
          <Signal
            strokeWidth={2.5}
            color={router.cellular ? '#5cbc6c' : '#000'}
          />
        </Button>
        <Button variant='ghost' className='table-connect__button'>
          <Globe
            color={router.internet ? '#5cbc6c' : '#000'}
            strokeWidth={2.5}
          />
        </Button>
      </div>
    </div>
  );
};

export default RouterHeader;
