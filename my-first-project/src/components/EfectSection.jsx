import Button from './Button/Button'
import Modal from './Model/Modal'
import useInput from './hooks/useinput'
import React, { useState, useEffect, useCallback } from 'react'

export default function EfectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])


    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    function openModal() {
        setModal(true)
    }

    return (
        <section>
            <h3>Effect</h3>
            <Button style={{ marginBottom: '1rem' }} onClick={openModal}>Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello from model</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus omnis nesciunt quis esse nihil doloribus nulla pariatur nemo obcaecati, dolorum totam, error itaque laboriosam consequatur beatae dolorem facilis ea vel?</p>
                <Button onClick={() => setModal(false)}>Закрыть информацию</Button>
            </Modal>

            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                <input type="text" className='control'{...input}/>
                    <ul>
                        {users.filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase())).map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}