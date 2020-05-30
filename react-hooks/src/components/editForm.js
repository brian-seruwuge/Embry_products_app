import React, { Component, useState, useEffect } from 'react';
// import 'semantic-ui-css/semantic.min.css'
import { Button, Form } from 'semantic-ui-react'
import App from '../App'

const EditForm = (props) => {
        // const initialEditFormState={id:null, product:"", number:"", size:""}
        const [EditFormState, setEditFormState] = useState(props.currentUser)

        const handleChange = (event) => {
            const { name, value } = event.target
            setEditFormState({...EditFormState, [name]: value })

        }

        const handleSubmit = (event) => {
            // alert("form submitted successfully")
            event.preventDefault();
            console.log(EditFormState)
            props.updateItem(EditFormState.id, EditFormState)

        }

        useEffect(() => {
            setEditFormState(props.currentUser)
        }, [props])

        return ( < div >

            <
            h2 > Edit Product < /h2>  <
            Form onSubmit = { handleSubmit } >
            <
            Form.Field width = { 12 } >
            <
            label > ID < /label>  <
            input placeholder = 'ID'
            name = "id"
            value = { EditFormState.id }
            onChange = { handleChange }
            /> <
            /Form.Field>  <
            Form.Field width = { 12 } >
            <
            label > Product < /label>  <
            input placeholder = 'product'
            name = "product"
            value = { EditFormState.product }
            onChange = { handleChange }
            /> <
            /Form.Field> <Form.Field width = { 12 } > <
            label > Number < /label> <input placeholder = 'Number' name = "number" value = { EditFormState.number } onChange = { handleChange }/ >
            <
            /Form.Field> <Form.Field width = { 12 } > <
            label > Size < /label> <input placeholder = 'size' name = "size" value = {EditFormState.size} onChange = { handleChange }/ >
            <
            /Form.Field>  <
            Button type = 'submit'
            color = "blue" > update item < /Button>   <
            Button type = 'submit'
            onClick = {
                () => props.setEditing(false) }
            color = "black" > cancel < /Button> <
            /Form> <
            /div>) 
        }
        export default EditForm