import { format, parseISO } from 'date-fns';

export const format_one = (date: string) => format(parseISO(date), 'dd MMM yyyy');