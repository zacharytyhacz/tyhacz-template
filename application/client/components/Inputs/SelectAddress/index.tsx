import React, { useEffect, useState } from 'react'
import { FormikContextType } from 'formik'
import PlacesAutocomplete, {
    geocodeByAddress
} from 'react-places-autocomplete'

type Props = {
    label: string
    name: string
    formik: FormikContextType<any>
    disabled?: boolean
}

export const SelectAddress: React.FC<Props> = ({
    label,
    name,
    formik,
    disabled
}) => {
    const handleSelect = async (inAddress: string) => {
        const results = await geocodeByAddress(inAddress)

        if (!results.length) {
            return
        }

        const address = results[0].formatted_address
        formik.setFieldValue(name, address)
    }

    return (
        <PlacesAutocomplete
            onSelect={handleSelect}
            onChange={(address) => formik.setFieldValue(name, address)}
            value={formik.values[name]}
            onError={console.error}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="address-input-container">
                    <label htmlFor={name}>
                        { label }
                        <input
                            {...getInputProps({
                                placeholder: 'Type in address...'
                            })}
                            type="text"
                            name={name}
                            onBlur={formik.handleBlur}
                            disabled={disabled}
                        />
                        <sub className="error">
                            {formik.touched[name] && formik.errors[name]
                                ? formik.errors[name].toString()
                                : ''
                            }
                        </sub>
                    </label>
                    { !loading && suggestions.length > 0 && (
                        <div className="address-options">
                            {suggestions.map((suggestion) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item'

                                    return (
                                        <button {...getSuggestionItemProps(suggestion, { className })} key={suggestion.id} className="suggestion">
                                            {suggestion.description}
                                        </button>
                                    )
                            })}
                        </div>
                    )}
                </div>
            )}
        </PlacesAutocomplete>
    )
}

