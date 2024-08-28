import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setValue] = useState(initialValues);

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setValue(
            {
                ...values,
                [name]: value,
            }
        );
    }

    const resetForm = (event) => {
        setValue(initialValues);
    }

    return [values, handleChange, resetForm];
}

export default useForm;