"use client"

import { useSearchParams, useNavigate } from 'next/navigation';
import { cn, formUrlQuery } from '@/lib/utils';

export interface BankTabItemProps {
  account: {
    name: string;
    appwriteItemId: string;
  };
  appwriteItemId: string;
}

export const BankTabItem = ({ account, appwriteItemId }: BankTabItemProps) => {
  const searchParams = useSearchParams();
  const navigate = useNavigate();
  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'id',
      value: account?.appwriteItemId,
    });
    navigate(newUrl, { scroll: false });
  };

  return (
    <div
      onClick={handleBankChange}
      className={cn(`banktab-item`, {
        'border-blue-600': isActive,
      })}
    >
      <p
        className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
          'text-blue-600': isActive,
        })}
      >
        {account.name}
      </p>
    </div>
  );
};