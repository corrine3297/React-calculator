import { Button } from '@mui/material'
import React, { useState } from 'react'

function Calculator() {
    const [result, setResult] = useState('');
    const [input, setInput] = useState('');
    const getValue = (value) => {
        if (value != '') {
            setInput(input + value.toString())
        }
        if (value === '=') {
            console.log(eval(input).toString())
            setResult(eval(input).toString())
            // setInput('')
        }

    }

    return (
        <div className='d-flex flex-column' style={{ justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='text-center mt-5'>
                Calculator
            </h3>
            <div className='mt-5 border rounded p-3'  >
                <div className='p-3 border rounded'>
                    { result!=""? 
                    <input type="text" value={input} />
                    :
                    <input type="text" value={result} />
                    }
                </div>
                <div className='mt-2'>
                    <Button className='m-1' onClick={() => getValue('C')} variant="contained">C</Button>
                    <Button className='m-1' onClick={() => getValue('DEL')} variant="contained">DEL</Button>
                    <Button className='m-1' onClick={() => getValue('.')} variant="contained">.</Button>
                    <Button className='m-1' onClick={() => getValue('/')} variant="contained">/</Button>
                </div>
                <div className='mt-2'>
                    <Button className='m-1' onClick={() => getValue('7')} variant="contained">7</Button>
                    <Button className='m-1' onClick={() => getValue('8')} variant="contained">8</Button>
                    <Button className='m-1' onClick={() => getValue('9')} variant="contained">9</Button>
                    <Button className='m-1' onClick={() => getValue('*')} variant="contained">*</Button>
                </div>
                <div className='mt-2'>
                    <Button className='m-1' onClick={() => getValue('4')} variant="contained">4</Button>
                    <Button className='m-1' onClick={() => getValue('5')} variant="contained">5</Button>
                    <Button className='m-1' onClick={() => getValue('6')} variant="contained">6</Button>
                    <Button className='m-1' onClick={() => getValue('-')} variant="contained">-</Button>
                </div>
                <div className='mt-2'>
                    <Button className='m-1' onClick={() => getValue('1')} variant="contained">1</Button>
                    <Button className='m-1' onClick={() => getValue('2')} variant="contained">2</Button>
                    <Button className='m-1' onClick={() => getValue('3')} variant="contained">3</Button>
                    <Button className='m-1' onClick={() => getValue('+')} variant="contained">+</Button>
                </div>
                <div className='mt-2'>
                    <Button className='m-1' onClick={() => getValue('00')} variant="contained">00</Button>
                    <Button className='m-1' onClick={() => getValue('0')} variant="contained">0</Button>
                    <Button className='m-1' onClick={() => getValue('=')} style={{ width: '140px' }} variant="contained">=</Button>
                </div>
            </div>

        </div>
    )
}

export default Calculator