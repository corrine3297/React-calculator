import { Button } from '@mui/material'
import React, { useState } from 'react'

function Calculator() {
    const [result, setResult] = useState('');
    const [input, setInput] = useState('');
    const operators = ['.', '+', '-', '/', '*']
    const getValue = (value) => {
        try {
            if (value != '' || value != 'DEL') {
                const inputArray = input.split('')
                console.log(inputArray)
                if (!(inputArray.includes(value) && operators.includes(value)) && value != input.slice(0, -1)) {
                    setInput(input + value.toString())
                }

                if (operators.includes(value) && result != '') {
                    setInput(result + value.toString())
                    setResult('')
                }
            }
            if (value === '=') {
                // console.log(eval(input).toString())
                setResult(eval(input).toString())
                // setInput('')
            }
            else if (value === 'C') {
                setInput('')
                setResult('')
            }
            else if (value === 'DEL') {

                setInput(input.slice(0, -1))
                setResult('')

            }
            if (result != '' && (value === '0' || value === '00')) {
                setInput('')
                setResult('')
            }
        } catch {
            setInput('')
            setResult('Invaild expression')
        }

    }

    return (
        <div className='d-flex flex-column' style={{ justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='text-center mt-5'>
                Calculator
            </h3>
            <div className='mt-5 border bg-dark rounded p-3' style={{color:'white'}}  >
                <div className='p-3 border rounded'>
                    <span className='p-2'>
                        {input}
                    </span>
                    {result != '' && <span>{result}
                    </span>}
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