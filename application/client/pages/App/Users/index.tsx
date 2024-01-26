import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Page, Section, SectionActions } from '../../../components/Page'
import { UserType } from '../../../../server/models/User'
import { getUsers } from '../../../requests/users'
import { handleError } from '../../../errors/handleError'
import { AddUser } from './AddUser'

export const Users: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([])
    const [addingNewUser, setAddingNewUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await getUsers()
                setUsers(res.data)
            } catch (err) {
                handleError(err, 'Something went wrong loading your customers. Please come back later.')
            }
            setLoading(false)
        }

        fetchUsers()
    }, [])

    return (
        <>
            <h1>Users</h1>
            <AddUser
                show={addingNewUser}
                onClose={() => setAddingNewUser(false)}
                onUserAdded={(newUser) => setUsers([...users, newUser])}
            />
            <Page>
                <Section title="Manage Users">
                    <SectionActions>
                        <button className="primary" onClick={() => setAddingNewUser(true)}>
                            Add User
                        </button>
                    </SectionActions>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Last Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading && (<>
                                    <tr>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                    </tr>
                                    <tr>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                    </tr>
                                    <tr>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                    </tr>
                                </>)
                            }
                            {
                                users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.lastLogin
                                            ? new Date(user.lastLogin).toLocaleString()
                                            : 'Never'
                                        }</td>
                                    </tr>
                                ))
                            }
                       </tbody>
                    </table>
                </Section>
            </Page>
        </>
    )
}
