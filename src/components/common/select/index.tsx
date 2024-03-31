import React, { useId } from "react"

export interface IOptionSelectProps {
  value: any
  label: string
}
export interface ISelectProps {
  readonly options: IOptionSelectProps[]
  readonly label: string
}
export default function Select({
  options,
  label,
}: ISelectProps) {
  const id = useId()

  return (
    <div>
      <label
        htmlFor={`select-${id}`}
        className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={`select-${id}`}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
