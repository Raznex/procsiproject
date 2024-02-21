'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    ipType: 316,
    status: 'success',
    connectionName: 'Подключение 1',
  },
  {
    id: '3u1reuv4',
    ipType: 242,
    status: 'success',
    connectionName: 'Мое подключение',
  },
  {
    id: 'derv1ws0',
    ipType: 837,
    status: 'processing',
    connectionName: 'Абв',
  },
  {
    id: '5kma53ae',
    ipType: 874,
    status: 'success',
    connectionName: 'Туда сюда америка',
  },
  {
    id: 'bhqecj4p',
    ipType: 721,
    status: 'failed',
    connectionName: 'новое подключение',
  },
];

export type Payment = {
  id: string;
  ipType: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  connectionName: string;
};

export const columns: ColumnDef<Payment>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && 'indeterminate')
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label='Select all'
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label='Select row'
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'connectionName',
    header: ({ column }) => {
      return (
        <Button
          className={'p-0'}
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Название подключения
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('connectionName')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          className={'p-0'}
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Статус
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'ipType',
    header: () => <div className='text-left'>Тип IP</div>,
    cell: ({ row }) => (
      <div className='text-left font-medium'>{row.getValue('ipType')}</div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <Settings className='h-5 w-5' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            {/*<DropdownMenuSeparator />*/}
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function TableConnect() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className='w-full bg-sky p-6 rounded-lg'>
      <div className='flex items-center py-4'>
        <Input
          placeholder='Поиск подключения...'
          value={
            (table.getColumn('connectionName')?.getFilterValue() as string) ??
            ''
          }
          onChange={(event) =>
            table
              .getColumn('connectionName')
              ?.setFilterValue(event.target.value)
          }
          className='max-w-sm'
        />
        {/*<DropdownMenu>*/}
        {/*  <DropdownMenuTrigger asChild>*/}
        {/*    <Button variant='outline' className='ml-auto'>*/}
        {/*      Columns <ChevronDown className='ml-2 h-4 w-4' />*/}
        {/*    </Button>*/}
        {/*  </DropdownMenuTrigger>*/}
        {/*  <DropdownMenuContent align='end'>*/}
        {/*    {table*/}
        {/*      .getAllColumns()*/}
        {/*      .filter((column) => column.getCanHide())*/}
        {/*      .map((column) => {*/}
        {/*        return (*/}
        {/*          <DropdownMenuCheckboxItem*/}
        {/*            key={column.id}*/}
        {/*            className='capitalize'*/}
        {/*            checked={column.getIsVisible()}*/}
        {/*            onCheckedChange={(value) =>*/}
        {/*              column.toggleVisibility(!!value)*/}
        {/*            }*/}
        {/*          >*/}
        {/*            {column.id}*/}
        {/*          </DropdownMenuCheckboxItem>*/}
        {/*        );*/}
        {/*      })}*/}
        {/*  </DropdownMenuContent>*/}
        {/*</DropdownMenu>*/}
      </div>
      <div className='rounded-md'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className='border-gray-300'
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        {/*<div className='flex-1 text-sm text-muted-foreground'>*/}
        {/*  {table.getFilteredSelectedRowModel().rows.length} of{' '}*/}
        {/*  {table.getFilteredRowModel().rows.length} row(s) selected.*/}
        {/*</div>*/}
        {/*<div className='space-x-2'>*/}
        {/*  <Button*/}
        {/*    variant='outline'*/}
        {/*    size='sm'*/}
        {/*    onClick={() => table.previousPage()}*/}
        {/*    disabled={!table.getCanPreviousPage()}*/}
        {/*  >*/}
        {/*    Previous*/}
        {/*  </Button>*/}
        {/*  <Button*/}
        {/*    variant='outline'*/}
        {/*    size='sm'*/}
        {/*    onClick={() => table.nextPage()}*/}
        {/*    disabled={!table.getCanNextPage()}*/}
        {/*  >*/}
        {/*    Next*/}
        {/*  </Button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
