import { Currency } from '../../types/currency.types';
import { LocaleCode } from './../../types/locale.types';

export const getCurrencySymbol = (locale: LocaleCode, currency: Currency) =>
  (0)
    .toLocaleString(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .trim();
