import { ChangeEnum } from '@src/types/upbit';

export function changePrefix(change: ChangeEnum) {
  switch (change) {
    case 'RISE':
      return '+';
    case 'FALL':
      return '-';
    case 'EVEN':
      return '';
    default:
      return '';
  }
}
