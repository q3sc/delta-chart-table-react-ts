
export type TableDataRowProps = [string, number, number, number];

export type TableDataProps = TableDataRowProps[];

export interface ChartTableProps {
  data: TableDataProps;
}