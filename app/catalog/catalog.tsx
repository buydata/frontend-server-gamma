"use client"

import React from 'react';
import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';

interface DataTableProps {
  data: Record<string, any>[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  
  const columns = React.useMemo<ColumnDef<Record<string, any>>[]>(
    () =>
      Object.keys(data[0]).map((key) => ({
        accessorKey: key,
        header: key.charAt(0).toUpperCase() + key.slice(1),
      })),
    [data]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (data.length === 0) return <div>Нет данных для отображения</div>;

  return (
      <Table>
        <TableHead className='h-12 px-4 text-left align-middle font-medium text-muted-foreground'>
          <TableRow>
            {table.getFlatHeaders().map(header => (
              <TableCell key={header.id}  className="h-12 px-4 text-left align-middle">
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
};

export default DataTable;