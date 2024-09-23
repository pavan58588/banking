import BankCard from '@/components/BankCard'
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const TransactionHistory = () => {
  return (
    <section className='flex'>
      <div className='my-banks'>
        <HeaderBox 
          title='My Banks Accounts'
          subtext='Effortable manage your banking activities.'
        />
        <div className='space-y-4'>
          <h2 className='header-2'>
            Your cards
          </h2>
          <div className='flex flex-wrap gap-6'>
            {accounts && accounts.data.map((a: Account)
            => (
              <BankCard
                key={accounts.id}
                account={a}
                userName={loggedIn?.firstName}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default TransactionHistory