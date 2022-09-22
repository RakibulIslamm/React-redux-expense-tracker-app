import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb'

const Balance = () => {
    return (
        <>
            <div className='text-center'>
                <h3 className='text-lg font-semibold'>Your Balance</h3>
                <h1 className='text-3xl font-semibold flex items-center justify-center'><TbCurrencyTaka /><span>14310</span></h1>
            </div>
            <div className='py-5 w-[400px] flex justify-center mx-auto gap-5 border bg-white mt-3'>
                <div className='w-full flex flex-col items-end'>
                    <h3 className='text-normal font-semibold'>Income</h3>
                    <h3 className='text-lg font-semibold text-green-500 flex items-center'><TbCurrencyTaka /><span>15000</span></h3>
                </div>
                <div className=" bg-slate-300 w-[1px]"></div>
                <div className='w-full'>
                    <h3 className='text-normal font-semibold'>Expense</h3>
                    <h3 className='text-lg font-semibold text-red-500 flex items-center'><TbCurrencyTaka /><span>150000</span></h3>
                </div>
            </div>
        </>
    );
};

export default Balance;