import React from 'react'
import Button from './Button/Button'
const c = React.createElement

export default function TabSection({active, onChange}) {
    return (c('section', {style: {marginBottom: '1rem'}},
            [c(Button,{isActive: active === 'main', onClick: () => onChange('main'), key: 1}, 'Главная'),
            c(Button, {isActive: active === 'feedback', onClick: () => onChange('feedback'), key: 2}, 'Обратная связь'),
            c(Button, {isActive: active === 'effect', onClick: () => onChange('effect'), key: 3}, 'Effect')]
        )
    )
}