import React from 'react';
import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { TbCurrencyTaka } from 'react-icons/tb'

const History = () => {
    return (
        <div className='w-full'>
            <h3 className='text-xl font-semibold'>History</h3>
            <div className='h-[1px] bg-slate-300 my-2'></div>
            <div className='space-y-2 h-[300px] overflow-y-auto overflow-hidden'>
                <div className='px-5 py-3 flex justify-between items-center bg-white border-r-4 border-green-500'>
                    <span>Earned this month</span>
                    <div className='flex items-center gap-6'>
                        <p className='flex items-center'><TbCurrencyTaka /><span>1150</span></p>
                        <div className='flex items-center gap-3'>
                            <button><BsPencilSquare className='hover:text-yellow-500' /></button>
                            <button><BsTrash className='hover:text-red-500' /></button>
                        </div>
                    </div>
                </div>
                <div className='px-5 py-3 flex justify-between items-center bg-white border-r-4 border-red-500'>
                    <span>Expense this month</span>
                    <div className='flex items-center gap-6'>
                        <p className='flex items-center'><TbCurrencyTaka /><span>1150</span></p>
                        <div className='flex items-center gap-3'>
                            <button><BsPencilSquare className='hover:text-yellow-500' /></button>
                            <button><BsTrash className='hover:text-red-500' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;