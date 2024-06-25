
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function Age() {

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [isDate1Greater, setIsDate1Greater] = useState(null);
    const [daymain, setDaymain] = useState('')
    const [monthmain, setMonthmain] = useState('')
    const [yearmain, setYearmain] = useState('')
    const [incYear,setInrYear] =useState('');


    const handleDay = (e) => {
        setDay(e.target.value)
    }

    const handleMonth = (e) => {
        setMonth(e.target.value)
    }

    const handleYear = (e) => {
        setYear(e.target.value)
    }
    useEffect(() => {

        const date1 = new Date(`${year}-${month}-${day}`);


        const date2 = new Date();


        if (date1 > date2) {
            setIsDate1Greater(true);
        } else {
            setIsDate1Greater(false);
        }
    }, [day, month, year]);

    const calAge = () => {
        const currentDate = new Date();
        const curday = parseInt(currentDate.getDate(), 10);
        const curmonth = parseInt(currentDate.getMonth() + 1, 10);
        const curyear = parseInt(currentDate.getFullYear(), 10);
        

        let curYear = curyear - parseInt(year, 10);
        let curMonth;
        let curDay;
        if (curmonth < parseInt(month, 10)) {
            curYear--
            curMonth = curmonth + 12 - parseInt(month, 10);
        }
        else {
            curMonth = curmonth - parseInt(month, 10)
        }

        if (curday < parseInt(day, 10)) {
            curDay = curday + 31 - parseInt(day, 10)
            curMonth--;
            if (curMonth < 0) {
                curMonth += 12;
                curYear--;
            }
        }
        else {
            curDay = curday - parseInt(day, 10);
        }

        setDaymain(curDay)
        setMonthmain(curMonth)
        setYearmain(curYear)
        console.log(yearmain)
        countToYear()


    }
    const handleAge = () => {




        if (day === '') {
            document.getElementById('errorday2').classList.remove('hidden')
            document.getElementById('heading-day').classList.add('text-red-500')
            document.getElementById('input-day').classList.add('border-red-500')



        }
        else {
            document.getElementById('errorday2').classList.add('hidden')
            document.getElementById('heading-day').classList.remove('text-red-500')
            document.getElementById('input-day').classList.remove('border-red-500')
        }
        if (month === '') {
            document.getElementById('errormonth2').classList.remove('hidden')
            document.getElementById('heading-month').classList.add('text-red-500')
            document.getElementById('input-month').classList.add('border-red-500')
        }
        else {
            document.getElementById('errormonth2').classList.add('hidden')
            document.getElementById('heading-month').classList.remove('text-red-500')
            document.getElementById('input-month').classList.remove('border-red-500')
        }
        if (year === '') {
            document.getElementById('erroryear2').classList.remove('hidden')
            document.getElementById('heading-year').classList.add('text-red-500')
            document.getElementById('input-year').classList.add('border-red-500')
        }
        else {
            document.getElementById('erroryear2').classList.add('hidden')
            document.getElementById('heading-year').classList.remove('text-red-500')
            document.getElementById('input-year').classList.remove('border-red-500')
        }

        if (document.getElementById('heading-year').classList.contains('text-red-500') || document.getElementById('heading-month').classList.contains('text-red-500') || document.getElementById('heading-day').classList.contains('text-red-500')) {
            return
        }
        if (isDate1Greater) {
            document.getElementById('errorday1').classList.remove('hidden')
            document.getElementById('heading-day').classList.add('text-red-500')
            document.getElementById('input-day').classList.add('border-red-500')
            document.getElementById('errormonth1').classList.remove('hidden')
            document.getElementById('heading-month').classList.add('text-red-500')
            document.getElementById('input-month').classList.add('border-red-500')
            document.getElementById('erroryear1').classList.remove('hidden')
            document.getElementById('heading-year').classList.add('text-red-500')
            document.getElementById('input-year').classList.add('border-red-500')
            return
        }
        else {
            document.getElementById('erroryear1').classList.add('hidden')
            document.getElementById('heading-year').classList.remove('text-red-500')
            document.getElementById('input-year').classList.remove('border-red-500')
            document.getElementById('errormonth1').classList.add('hidden')
            document.getElementById('heading-month').classList.remove('text-red-500')
            document.getElementById('input-month').classList.remove('border-red-500')
            document.getElementById('errorday1').classList.add('hidden')
            document.getElementById('heading-day').classList.remove('text-red-500')
            document.getElementById('input-day').classList.remove('border-red-500')
        }


        if (parseInt(month, 10) < 1 || parseInt(month, 10) > '12') {
            document.getElementById('errormonth1').classList.remove('hidden')
            document.getElementById('heading-month').classList.add('text-red-500')
            document.getElementById('input-month').classList.add('border-red-500')
        }

        else {
            document.getElementById('errormonth1').classList.add('hidden')
            document.getElementById('heading-month').classList.remove('text-red-500')
            document.getElementById('input-month').classList.remove('border-red-500')

        }
        if (year < 1900) {
            document.getElementById('erroryear1').classList.remove('hidden')
            document.getElementById('heading-year').classList.add('text-red-500')
            document.getElementById('input-year').classList.add('border-red-500')
        }
        else {
            document.getElementById('erroryear1').classList.add('hidden')
            document.getElementById('heading-year').classList.remove('text-red-500')
            document.getElementById('input-year').classList.remove('border-red-500')
        }

        if (parseInt(month, 10) === 2 && parseInt(day, 10) > 28 ||
            parseInt(month, 10) === 4 && parseInt(day, 10) > 30 ||
            parseInt(month, 10) === 6 && parseInt(day, 10) > 30 ||
            parseInt(month, 10) === 9 && parseInt(day, 10) > 30 ||
            parseInt(month, 10) === 11 && parseInt(day, 10) > 30 ||
            parseInt(day, 10) > 31) {
            document.getElementById('errorday1').classList.remove('hidden')
            document.getElementById('heading-day').classList.add('text-red-500')
            document.getElementById('input-day').classList.add('border-red-500')



        }
        else {
            document.getElementById('errorday1').classList.add('hidden')
            document.getElementById('heading-day').classList.remove('text-red-500')
            document.getElementById('input-day').classList.remove('border-red-500')
        }

        calAge()

    }

    const countToYear = () => {
        let from = 1; // Start from 1
        const to = parseInt(yearmain, 10);
        const step = 1;
        const interval = 30; // 3 increments per second (1000 ms / 3)
    
        const counter = setInterval(() => {
          if (from >= to) {
            clearInterval(counter);
            return;
          }
          if(from===parseInt(yearmain,10)){
            clearInterval(counter);
            return;
          }
          from += step;
    
          // Ensure we don't exceed the target value
          if (from > to) {
            from = to;
          }
    
          setInrYear(from);
        }, interval);
      };
    
      



    return (
        <div className='flex justify-center items-center  bg-blue-100 w-full h-screen py-6'>
            <div className='w-5/6 shadow-xl bg-slate-50 rounded-xl rounded-br-[200px] flex flex-col h-auto md:h-full px-10 py-10 sm:w-5/6  md:w-3/6'>

                <div className='flex flex-row w-full md:w-5/6 justify-between mb-[70px]'>
                    <div className='flex flex-col gap-2 w-[140px]  items-center'>
                        <h2
                            id='heading-day'
                            className='text-gray-600 font-bold text-xl'>Day</h2>
                        <input
                            type='number'
                            min={1}
                            max={31}
                            id='input-day'
                            placeholder='DD'
                            value={day}
                            onChange={handleDay}
                            className='w-[100px] px-4 py-1 text-2xl border border-gray-300 rounded-lg outline-none h-[60px]'
                        ></input>
                        <p
                            id='errorday1'
                            className=' hidden text-red-500 text-sm'
                        >Must be a valid day</p>
                        <p
                            id='errorday2'
                            className=' hidden text-red-500 text-sm'
                        >This field is required
                        </p>
                    </div>
                    <div className=' flex flex-col gap-2 w-[140px] items-center'>
                        <h2
                            id='heading-month'
                            className='text-gray-600 font-bold text-xl'>Month</h2>
                        <input
                            type='number'
                            min={1}
                            max={12}
                            id='input-month'
                            placeholder='MM'
                            value={month}
                            onChange={handleMonth}
                            className='px-4 py-1 text-2xl border border-gray-300 rounded-lg outline-none w-[100px] h-[60px]'
                        ></input>
                        <p
                            id='errormonth1'
                            className=' hidden text-red-500 text-sm'
                        >Must be a valid month</p>
                        <p
                            id='errormonth2'
                            className=' hidden text-red-500 text-sm'
                        >This field is required
                        </p>
                    </div>
                    <div className='flex flex-col gap-2 w-[140px]  items-center'>
                        <h2
                            id='heading-year'
                            className='text-gray-600 font-bold text-xl'>Year</h2>
                        <input
                            type='number'
                            min={1900}
                            id='input-year'
                            placeholder='YYYY'
                            value={year}
                            onChange={handleYear}
                            className='w-[100px] px-4 py-1 text-2xl border border-gray-300 rounded-lg outline-none h-[60px]'
                        ></input>
                        <p
                            id='erroryear1'
                            className=' hidden text-red-500 text-sm'
                        >Must be a valid year</p>
                        <p
                            id='erroryear2'
                            className=' hidden text-red-500 text-sm'
                        >This field is required
                        </p>
                    </div>
                </div>

                <div className='w-full h-auto md:pr-[20px] mb-[60px] md:mb-0 '>

                    <div className='bg-gray-400 h-[2px] w-full justify-center md:justify-end items-center flex '>
                        <i className="fa-solid fa-circle-down text-7xl text-customGreen bg-slate-50 hover:text-8xl hover:text-cutomOrange transition-transform duration-0 ease-in-out transform hover:translate-x-3"
                            onClick={handleAge}
                        ></i>
                    </div>


                </div>

                <div className='flex flex-col justify-left'>
                    <div className='flex flex-row items-center '>
                        <p id='input-year' className='md:text-8xl text-5xl text-customGreen custom-input italic'>--</p>
                        <p id='input-year-main' className='md:text-8xl text-5xl text-customGreen custom-input italic'>{incYear}</p>
                        <p className=' md:text-8xl text-5xl text-black font-bold italic'> years</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p id='input-month' className='md:text-8xl text-5xl text-customGreen custom-input italic'>--</p>
                        <p className=' md:text-8xl text-5xl text-black font-bold italic'> months</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p id='input-month' className='md:text-8xl text-5xl text-customGreen custom-input italic'>--</p>
                        <p className=' md:text-8xl text-5xl text-black font-bold italic'> days</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Age