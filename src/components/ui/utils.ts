// utils/date.ts
import clsx, { type ClassValue } from "clsx";
import qs from "query-string";
import { twMerge } from "tailwind-merge";

export function formatDateTime(dateString: Date) {
  // ...
}

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}

// utils/string.ts
export function combineClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseStringify(value: any) {
  return JSON.parse(JSON.stringify(value));
}

export function removeSpecialCharacters(value: string) {
  return value.replace(/[^\w\s]/gi, "");
}

// utils/url.ts
interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

// utils/account.ts
export function getAccountTypeColors(type: AccountTypes) {
  // ...
}

// utils/transaction.ts
export function countTransactionCategories(transactions: Transaction[]) {
  const categoryCounts: { [category: string]: number } = {};

  transactions &&
    transactions.forEach((transaction) => {
      const category = transaction.category;

      if (categoryCounts.hasOwnProperty(category)) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    });

  const aggregatedCategories: CategoryCount[] = Object.keys(categoryCounts).map(
    (category) => ({
      name: category,
      count: categoryCounts[category],
    })
  );

  aggregatedCategories.sort((a, b) => b.count - a.count);

  return aggregatedCategories;
}

// utils/customer.ts
export function extractCustomerIdFromUrl(url: string) {
  const parts = url.split("/");
  const customerId = parts[parts.length - 1];

  return customerId;
}

export function encryptId(id: string) {
  return btoa(id);
}

export function decryptId(id: string) {
  return atob(id);
}

// utils/transaction-status.ts
export function getTransactionStatus(date: Date) {
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  return date > twoDaysAgo ? "Processing" : "Success";
}