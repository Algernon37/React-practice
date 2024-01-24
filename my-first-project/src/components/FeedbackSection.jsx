import React, { useState, useRef } from 'react'
import Button from './Button/Button'

function StateVsRef() {
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if (event.key === 'Enter')
            setShow(true)
    }

    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input
                ref={input}
                type="text"
                onKeyDown={handleKeyDown}
                className='control' />
        </div>
    )
}


export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })

    function handleNameChange(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            setHasError: event.target.value.trim().length === 0,
        }))
    }

    function handleReasonChange(event) {
        setForm(prev => ({ ...prev, reasen: event.target.value }))
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <form style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Ваше имя</label>
                <input
                    type="text"
                    className="control"
                    style={{ border: form.hasError ? '1px solid red' : null }}
                    id="name"
                    value={form.name}
                    onChange={handleNameChange}
                />
                <label htmlFor="reason">Причина обращения</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={handleReasonChange}
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>
                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>




            </form>
            <StateVsRef />
        </section>
    );
}
