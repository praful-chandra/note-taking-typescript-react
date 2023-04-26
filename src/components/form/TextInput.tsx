import React, { type ReactElement } from 'react'

interface TextInputProps {
  label: string
  name: string
  placeholder: string
  id: string
  type: string
  value: any
}

const TextInput = ({
  id,
  label,
  name,
  placeholder,
  type = 'text',
  value
}: Partial<TextInputProps>): ReactElement => {
  return (
    <div className="mb-4">
      {Boolean(label) && (
        <label
          className="block text-gray-700 text-md font-semibold mb-2 ml-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className="shadow appearance-none border rounded-2xl w-full py-6 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:font-light"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

export default TextInput
