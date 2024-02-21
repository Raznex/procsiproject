import { TableConnect } from '@/components/Main/TableConnect/TableConnect.tsx';
import { NewConnection } from '../NewConnection/NewConnection';
      
export const Main = () => {
  return (
    <div className={'p-10'}>
      <NewConnection />
      <TableConnect />
    </div>
  );
};
