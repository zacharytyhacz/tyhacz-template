import React, { useEffect, useMemo, useState } from 'react'
import { ContactType } from '../../../server/models/Contact'
import { getMessageContactList } from '../../requests/messages'

type Props = {
    selectedEmails: string[]
    onEmailSelected: (newEmail: string) => void
}

export const SelectContact: React.FC<Props> = ({
    selectedEmails,
    onEmailSelected
}) => {
    const [allContacts, setAllContacts] = useState<ContactType[]>([])

    const visibleContacts = useMemo(() => {
        return allContacts.filter((contact) => {
            return (
                contact.email &&
                !selectedEmails.includes(contact.email.trim())
            )
        })
    }, [allContacts, selectedEmails])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onEmailSelected(e.target.value)
    }

    useEffect(() => {
        const fetchContactOptions = async (): Promise<void> => {
            try {
                const res = await getMessageContactList()
                setAllContacts(res.data)
            } catch (err) {
                setAllContacts([])
            }
        }
        fetchContactOptions()
    }, [])

    // fetch all contacts
    // populate options

    return (
        <label htmlFor="search">
            Select Contacts
            <select
                name="search"
                onChange={handleChange}
                value=""
            >
                <option value="" disabled>Find Contact To Message...</option>
                {
                    visibleContacts.map((option) => (
                        <option
                            key={`${option.name}-${option.email}`}
                            value={option.email}
                        >
                            { option.name } ({option.email})
                        </option>

                    ))
                }
            </select>
        </label>
    )
}

