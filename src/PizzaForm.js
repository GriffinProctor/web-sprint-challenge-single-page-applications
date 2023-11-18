import React, {useState} from "react";

const PizzaForm = () => {
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [topping1, setTopping1] = useState(false)
    const [topping2, setTopping2] = useState(false)
    const [special, setSpecial] = useState('')

    const handleSubmit = () => {
        const formData = {
            name,
            size,
            topping1,
            topping2,
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
                {/* add size dropdown, toppings checklist, special instructions */}
                <button type="button" id="order-button" onClick={handleSubmit}>
                    Add to Order
                </button>
            </form>
        </div>
    )
}

export default PizzaForm