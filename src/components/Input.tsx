'use client'

interface InputProps {
    type: any
    value: any
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    id: string
    placeholder?: string
    big?: boolean
}

export default function Input({ type, value, onChange, name, id, placeholder, big }: InputProps) {
    return (
        <input type="text" />
    )
}
