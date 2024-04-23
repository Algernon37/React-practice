import React from 'react'

const c = React.createElement

export default function IntroSection() {
    return c
        ('section',
            null,
            [c('h1',
                { className: "centered", key: 1 },
                'Lorem ipsum dolor'),
            c('h3',
                { className: "centered", style: { color: '#666' }, key: 2},
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, autem?'),
            c('div',
            { className: "centeredBottom", style: { textTransform: 'uppercase' }, key: 3} ,
            'Lorem ipsum dolor sit amet.')]
        )
}