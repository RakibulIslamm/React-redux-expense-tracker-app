import React from 'react';

const AddExpense = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.transaction_name.value;
        const type = e.target.transaction_type.value;
        const amount = e.target.transaction_amount.value;
        console.log(name, type, amount);
    }

    return (
        <div className='w-full'>
            <h3 className='text-xl font-semibold'>Add new transaction</h3>
            <div className='h-[1px] bg-slate-300 my-2'></div>
            <form onSubmit={handleSubmit} className='space-y-3'>
                <div className=''>
                    <label className='font-semibold' htmlFor="transaction_name">Name</label>
                    <br />
                    <input
                        className='border px-3 py-2 w-full mt-2'
                        type="text"
                        name="transaction_name"
                        placeholder="My Salary"
                    />
                </div>

                <div className='flex items-center gap-5'>
                    <label className='font-semibold' htmlFor="transaction_type">Type</label>
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-1'>
                            <input
                                type="radio"
                                value="income"
                                name="transaction_type"
                            />
                            <label htmlFor="transaction_type">Income</label>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input
                                type="radio"
                                value="expense"
                                name="transaction_type"
                                placeholder="Expense"
                            />
                            <label htmlFor="transaction_type">Expense</label>
                        </div>
                    </div>
                </div>

                <div>
                    <label className='font-semibold' htmlFor="transaction_name">Amount</label>
                    <br />
                    <input
                        className='border px-3 py-2 w-full mt-2'
                        type="number"
                        name="transaction_amount"
                        placeholder="300"
                    />
                </div>

                <button type='submit' className="px-5 py-2 bg-blue-800 text-white mr-10">Add Transaction</button>
                <button className="btn cancel_edit">Cancel Edit</button>
            </form>
        </div>
    );
};

export default AddExpense;