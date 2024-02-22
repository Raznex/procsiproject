'use client';

import { PlusSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';

const SHEET_SIDES = ['top'] as const;

type NewConnection = (typeof SHEET_SIDES)[number];

export const NewConnection = () => {
  return (
    <div className='align-flex-end mb-4'>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant='ghost'>
              <PlusSquare className='mr-3' />
              Добавить соединение
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className='w-[80%] mx-auto'>
            <SheetHeader>
              <SheetTitle className='text-center'>
                Создать соединение
              </SheetTitle>
            </SheetHeader>
            <div className='flex flex-col gap-5 py-4 justify-items-center w-'>
              <div className='flex items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  Название
                </Label>
                <Input id='name' className='col-span-3' />
              </div>
              <div className='flex items-center gap-4'>
                <Label htmlFor='username' className='text-right'>
                  Описание
                </Label>
                <Input id='username' className='w-[100%]' />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type='submit' className='justify-items-center'>
                  Добавить соединение
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};
