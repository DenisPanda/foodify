import { CartItem } from './cart.types';

export interface ITotalOrderPreviewProps {
  data: CartItem[];
  close: () => void;
  confirm: (data: CartItem[]) => void;
}