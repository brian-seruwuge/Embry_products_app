import React, { Component, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Form } from 'semantic-ui-react'
import App from '../App'

const AddForm = (props) => {
        const initialFormState = { id: "", product: "", number: "", size: "" }
        const [formState, setformState] = useState(initialFormState)

        const handleChange = (event) => {
            const { name, value } = event.target
            setformState({...formState, [name]: value })

        }

        const handleSubmit = (event) => {
            alert("form submitted successfully")
            event.preventDefault();
            console.log(formState)
            if (formState.id && formState.product && formState.number && formState.size) {
                props.addItem(formState)
            } else { setformState(initialFormState) }
        }
        return ( < div >

            <
            h2 > Add Product < /h2>  <
            Form onSubmit = { handleSubmit } >
            <
            Form.Field width = { 12 } >
            <
            label > ID < /label>  <
            input placeholder = 'ID'
            name = "id"
            value = { formState.id }
            onChange = { handleChange }
            /> <
            /Form.Field>  <
            Form.Field width = { 12 } >
            <
            label > Product < /label>  <
            input placeholder = 'Product'
            name = "product"
            value = { formState.product }
            onChange = { handleChange }
            /> <
            /Form.Field>  <
            Form.Field width = { 12 } >
            <
            label > Number < /label> <input placeholder = 'Number' name = "number" value = { formState.number } onChange = { handleChange }/ >
            <
            /Form.Field>  <
            Form.Field width = { 12 } >
            <
            label > Size < /label> <input placeholder = 'size' name = "size"value = { formState.size } onChange = { handleChange }/ >
            <
            /Form.Field>  <
            Button type = 'submit'
            color = "blue" > Submit < /Button>   <
            /Form> <
            /div>)
        }
        export default AddForm