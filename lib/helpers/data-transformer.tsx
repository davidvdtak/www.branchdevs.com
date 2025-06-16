import { parseDate, getLocalTimeZone } from "@internationalized/date";

export function toUSD(
  value?: string | number | null,
  precision = 2,
  notation = "standard" as Intl.NumberFormatOptions["notation"],
) {
  if (!value) return `$${(0).toFixed(precision)}`;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    roundingMode: "floor",
    notation: notation,
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });

  return formatter.format(Number(value));
}

export function toCommaSeparated(value?: string | number | null) {
  if (!value) return "0";
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(Number(value));
}

export function numberFormatter(value?: string | number | null, opts?: Intl.NumberFormatOptions) {
  if (!value) return "0";
  const formatter = new Intl.NumberFormat("en-US", opts);
  return formatter.format(Number(value));
}

// clear default, in case default options are not desired or they would cause error, like how timeStyle and month can not both be used.
export function dateFormatter(date?: string | Date | number | null, options?: Intl.DateTimeFormatOptions, clearDefault = false) {
  if (!date) return "";
  const defaultOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };
  const formatOptions = Object.assign(defaultOptions, options);
  const dateObj = new Date(date);
  const formatter = clearDefault ? new Intl.DateTimeFormat("en-US", options) : new Intl.DateTimeFormat("en-US", formatOptions);
  return formatter.format(dateObj);
}

export function relativeTime(date?: string | Date | number | null, options?: Intl.RelativeTimeFormatOptions) {
  if (!date) return "";
  const defaultOptions: Intl.RelativeTimeFormatOptions = {
    localeMatcher: "best fit",
    numeric: "always",
    style: "long",
  };
  const currentDate = new Date();
  const dateObj = new Date(date);
  const second = Math.floor((currentDate.getTime() - dateObj.getTime()) / 1000);
  const hour = Math.floor((currentDate.getTime() - dateObj.getTime()) / (1000 * 60 * 60));
  const minute = Math.floor((currentDate.getTime() - dateObj.getTime()) / (1000 * 60));
  const day = Math.floor((currentDate.getTime() - dateObj.getTime()) / (1000 * 60 * 60 * 24));
  const month = Math.floor(day / 30);
  const year = Math.floor(month / 12);

  const timeValues = { hour, minute, day, month, year, second };

  const unit = year > 0 ? "year" : month > 0 ? "month" : day > 0 ? "day" : hour > 0 ? "hour" : minute > 0 ? "minute" : "second";

  const formatter = new Intl.RelativeTimeFormat("en-US", defaultOptions);
  return formatter.format(-timeValues[unit], unit);
}

export function parseDateFromDateRange(
  dateRange: string[] | string,
  formatOptions?: Intl.DateTimeFormatOptions,
  clearDefault?: boolean,
) {
  try {
    const dates = Array.isArray(dateRange) ? dateRange : dateRange.split(",");
    const dateObjs = dates.map((date) => {
      const isYYYYMMDD = /^\d{4}-\d{2}-\d{2}$/.test(date);

      if (isYYYYMMDD) return parseDate(date).toDate(getLocalTimeZone());
      return new Date(date);
    });

    const defaultFormatOptions: Intl.DateTimeFormatOptions = {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    };

    return dateObjs.map((date) =>
      dateFormatter(date, formatOptions ? formatOptions : defaultFormatOptions, clearDefault ?? true),
    );
  } catch {
    return null;
  }
}
