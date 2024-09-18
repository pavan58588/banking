import Link from "next/link";
import React, { ReactNode } from "react";
import { formatAmount } from "./ui/utils";
import Image from "next/image";

interface CreditCardProps {
  account: {
    mask: ReactNode;
    name: string;
    currentBalance: number;
  };
  userName: string;
  showBalance?: boolean;
}

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            {showBalance && (
              <p className="font-ibm-plex-serif font-black text-white">
                {formatAmount(account.currentBalance)}
              </p>
            )}
          </div> 
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
               <h1 className="text-12 font-semibold text-white">
                 {userName}
               </h1>
               <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
                 {userName}
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">●●●● ●●●● ●●●●
                <span className="text-16">{1432}</span>
            </p>
           </article>     
        </div>
         <div className="bank-card_icon">
            <Image
              src="/icon/Paypass.svg"
              width={20}
              height={24}
              alt="Paypal"
            />
            <Image
              src="icon/mastercard.svg"
              width={45}
              height={32}
              alt="mastercard"
              className="ml-5"
            />
        </div>
        <Image
           src="/icons/lines.png"
           width={316}
           height={190}
           alt="lines"
           className="absolute top-0 left-0"/>
      </Link> 

      {/* copy */}
    </div>
  )
}

export default BankCard