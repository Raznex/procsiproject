'use client';

import * as React from 'react';
import { CaretSortIcon, ChevronDownIcon } from '@radix-ui/react-icons';
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

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
    status: 'offline',
    id: '1',
    ip: '10.30.20.40',
    externalIp: '10.10.0.1',
    routerModel: 'Meizu',
    location: 'М/C/D/6.1',
    phoneNumber: '79651234567',
    operator: 'MTS',
    serverConnectionType: 'WG/GRE/Local/',
    web_log: 'admin:password',
    ssh_log: 'admin:password',
    modemAmount: '1/2/3/4',
    modemModel: 'Huawei 3372-153h/Meiglink 838/',
    modemWebIp: '192.168.0.1/router_interface',
    clientPort: 'djuGSjnd:60001/adnrei:53292',
    rebootType: 'local/commander',
    modemSignal: '-63db/-12db',
    lifeTime: '5d16h32m',
  },
  {
    status: 'online',
    id: '2',
    ip: '10.20.30.40',
    externalIp: '10.10.0.1',
    routerModel: 'TP-Link',
    location: 'М/C/D/6.1 или Москва, Дубнинская, д.11',
    phoneNumber: '79651234567',
    operator: 'MTS',
    serverConnectionType: 'WG/GRE/Local/',
    web_log: 'admin:password',
    ssh_log: 'admin:password',
    modemAmount: '1/2/3/4',
    modemModel: 'Huawei 3372-153h/Meiglink 838/',
    modemWebIp: '192.168.0.1/router_interface',
    clientPort: 'djuGSjnd:60001/adnrei:53292',
    rebootType: 'local/commander',
    modemSignal: '-63db/-12db',
    lifeTime: '5d16h32m',
  },
];

export type Payment = {
  status: 'online' | 'offline' | 'disable' | 'reserved';
  id: string;
  ip: string;
  externalIp: string;
  routerModel: string;
  location: string;
  phoneNumber: string;
  operator: string;
  serverConnectionType: string;
  web_log: string;
  ssh_log: string;
  modemAmount: string;
  modemModel: string;
  modemWebIp: string;
  clientPort: string;
  rebootType: string;
  modemSignal: string;
  lifeTime: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status');
      if (status === 'online') {
        return <div className='w-[10px] h-[10px] rounded-full bg-green-500' />;
      } else if (status === 'offline') {
        return <div className='w-[10px] h-[10px] rounded-full bg-gray-500' />;
      } else if (status === 'reserved') {
        return <div className='w-[10px] h-[10px] rounded-full bg-blue-300' />;
      } else if (status === 'disabled ') {
        return <div className='w-[10px] h-[10px] rounded-full bg-red-500' />;
      }
    },
  },
  {
    accessorKey: 'ip',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          IP
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div className='lowercase'>{row.getValue('ip')}</div>,
  },
  {
    accessorKey: 'externalIp',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          external Ip
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('externalIp')}</div>
    ),
  },
  {
    accessorKey: 'routerModel',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Router Model
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('routerModel')}</div>
    ),
  },
  {
    accessorKey: 'location',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Location
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('location')}</div>
    ),
  },
  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Phone Number
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('phoneNumber')}</div>
    ),
  },
  {
    accessorKey: 'operator',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Operator
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('operator')}</div>
    ),
  },
  {
    accessorKey: 'serverConnectionType',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Server Connection Type
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('serverConnectionType')}</div>
    ),
  },
  {
    accessorKey: 'web_log',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          web__log
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('web_log')}</div>
    ),
  },
  {
    accessorKey: 'ssh_log',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ssh__log
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('ssh_log')}</div>
    ),
  },
  {
    accessorKey: 'modemAmount',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Modem Amount
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('modemAmount')}</div>
    ),
  },
  {
    accessorKey: 'modemModel',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Modem Model
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('modemModel')}</div>
    ),
  },
  {
    accessorKey: 'modemWebIp',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Modem WebIp
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('modemWebIp')}</div>
    ),
  },
  {
    accessorKey: 'clientPort',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Client Port
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('clientPort')}</div>
    ),
  },
  {
    accessorKey: 'rebootType',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Reboot Type
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('rebootType')}</div>
    ),
  },
  {
    accessorKey: 'modemSignal',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Modem Signal
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('modemSignal')}</div>
    ),
  },
  {
    accessorKey: 'lifeTime',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Life Time
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('lifeTime')}</div>
    ),
  },
];

export const TableRouter = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      id: false,
      ip: true,
      externalIp: false,
      routerModel: false,
      location: true,
      phoneNumber: false,
      operator: true,
      serverConnectionType: false,
      web_log: false,
      ssh_log: false,
      modemAmount: false,
      modemModel: false,
      modemWebIp: false,
      clientPort: false,
      rebootType: false,
      modemSignal: false,
      lifeTime: false,
    });
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
    <div className='w-full'>
      <div className='flex items-center py-4'>
        <Input
          placeholder='Filter emails...'
          value={(table.getColumn('ip')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('ip')?.setFilterValue(event.target.value)
          }
          className='max-w-sm'
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='ml-auto'>
              Columns <ChevronDownIcon className='ml-2 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    onSelect={(event) => event.preventDefault()}
                    key={column.id}
                    className='capitalize'
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='rounded-md border'>
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
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  onClick={() => console.log(row.original.id)}
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
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
