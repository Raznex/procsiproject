import { useState } from 'react';
import { Link, Repeat2, Settings2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';

const EditButtons = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className='w-100 flex justify-end gap-2 px-4'>
      <div
        className={`flex items-center gap-2 table-connect__settings ${isEditing ? 'show' : ''}`}
      >
        <Button variant='ghost' className='table-connect__button'>
          <Link strokeWidth={2.25} />
        </Button>
        <Button variant='ghost' className='table-connect__button'>
          <p>IP</p>
        </Button>
        <Button variant='ghost' className='table-connect__button'>
          <Repeat2 strokeWidth={2.25} />
        </Button>
        <Button variant='ghost' className='table-connect__button'>
          <Trash2 strokeWidth={2.25} />
        </Button>
      </div>
      <Button variant={'ghost'} onClick={toggleEditing}>
        <Settings2 className='h-[25px] w-[25px] shrink-0 transition-transform duration-200' />
      </Button>
    </div>
  );
};

export default EditButtons;
