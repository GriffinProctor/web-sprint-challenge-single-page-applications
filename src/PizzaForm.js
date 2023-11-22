import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup"

const schema = yup.object().shape({
    name: yup
    .string()
    .min(2, 'name must be at least 2 characters')
    .required('Name is required')
})

const PizzaForm = () => {
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [topping1, setTopping1] = useState(false)
    const [topping2, setTopping2] = useState(false)
    const [topping3, setTopping3] = useState(false)
    const [topping4, setTopping4] = useState(false)
    const [special, setSpecial] = useState('')
    const [nameError, setNameError] = useState('')






    const handleSubmit = async () => {
        try {
            await schema.validate({name},{ abortEarly: false})
        
        

        const formData = {
            name,
            size,
            topping1,
            topping2,
            topping3,
            topping4,
            special,
        }
        console.log(formData)
        } catch (validationErrors) {
            const newErrors = {}
            validationErrors.inner.forEach((error) => {
                newErrors[error.path] = error.message
            })
            setNameError(newErrors.name)
        }
    }
    return (
        <div style={{ margin: '20px' }}>
            <h1>Pizza Order Form</h1>
            <form id="pizza-form">
                <div style={{ marginBottom: '10px' }}>
                    <Link to='/' id='homepage'>
                        Homepage
                    </Link>
                </div>
                <label htmlFor="name-input" >Name:</label>&nbsp;
                <input
                    style={{ marginBottom: '10px' }}
                    type="text"
                    id="name-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />&nbsp;
                {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
                <label htmlFor="size-dropdown">Size:</label>&nbsp;
                <select
                    id="size-dropdown"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}>
                    <option value={'small'}>Small</option>
                    <option value={'medium'}>Medium</option>
                    <option value={'large'}>Large</option>
                </select>
                <div>
                    <div style={{ marginBottom: '5px' }}>
                        <label>Toppings:</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="topping1"
                            checked={topping1}
                            onChange={() => setTopping1(!topping1)} />
                        <label htmlFor="topping1">Pepperoni</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="topping2"
                            checked={topping2}
                            onChange={() => setTopping2(!topping2)} />
                        <label htmlFor="topping2">Sausage</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="topping3"
                            checked={topping3}
                            onChange={() => setTopping3(!topping3)} />
                        <label htmlFor="topping3">Mushrooms</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="topping4"
                            checked={topping4}
                            onChange={() => setTopping4(!topping4)} />
                        <label htmlFor="topping4">Onions</label>
                    </div>
                </div>
                <label htmlFor="special-text">Special Instructions:</label>&nbsp;
                <textarea
                    id="special-text"
                    value={special}
                    onChange={(e) => setSpecial(e.target.value)}>
                </textarea>
                <div style={{ marginTop: '10px' }}>
                <button type="button" id="order-button" onClick={handleSubmit}>
                    Add to Order
                </button>
                </div>
            </form>
        </div>
    )
}

export default PizzaForm