import React, {useState} from "react";

const PizzaForm = () => {
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [topping1, setTopping1] = useState(false)
    const [topping2, setTopping2] = useState(false)
    const [topping3, setTopping3] = useState(false)
    const [topping4, setTopping4] = useState(false)
    const [special, setSpecial] = useState('')

    const handleSubmit = () => {
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
    }
    return (
        <div>
            <h1>Pizza Order Form</h1>
            <form id="pizza-form">
                <label htmlFor="name-input">Name:</label>
                <input
                type="text"
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="size-dropdown">Size:</label>
                <select
                id="size-dropdown"
                value={size}
                onChange={(e) => setSize(e.target.value)}>
                    <option value={'small'}>Small</option>
                    <option value={'medium'}>Medium</option>
                    <option value={'large'}>Large</option>
                </select>
                <label>Toppings:</label>
                <div>
                    <input
                    type="checkbox"
                    id="topping1"
                    checked={topping1}
                    onChange={() => setTopping1(!topping1)}/>
                    <label htmlFor="topping1">Pepperoni</label>
                </div>
                <div>
                    <input
                    type="checkbox"
                    id="topping2"
                    checked={topping2}
                    onChange={() => setTopping2(!topping2)}/>
                    <label htmlFor="topping2">Sausage</label>
                </div>
                <div>
                    <input
                    type="checkbox"
                    id="topping3"
                    checked={topping3}
                    onChange={() => setTopping3(!topping3)}/>
                    <label htmlFor="topping3">Mushrooms</label>
                </div>
                <div>
                    <input
                    type="checkbox"
                    id="topping4"
                    checked={topping4}
                    onChange={() => setTopping4(!topping4)}/>
                    <label htmlFor="topping4">Onions</label>
                </div>
                <button type="button" id="order-button" onClick={handleSubmit}>
                    Add to Order
                </button>
            </form>
        </div>
    )
}

export default PizzaForm