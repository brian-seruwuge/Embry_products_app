import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Table, Button, Grid } from 'semantic-ui-react'
import AddForm from './components/addForm';
import EditForm from './components/editForm'


const App = () => {
    const initialItems = [
        { id: 1, product: "paint", number: 10, size: "4litres" },
        { id: 2, product: "tiles", number: 1, size: "30*30" },
        { id: 3, product: "floor polish", number: 60, size: "small" },
    ]
    const [items, setItems] = useState(initialItems)
    const [editing, setEditing] = useState(false) // set state for edit mode
    const initialFormState = { id: "", product: '', number: '', size: "" }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    // add user
    const addItem = (item) => {
            // item.id = items.length+1
            // setItems([...items, item])
            setItems(prevState => [...prevState, item])

        }
        // delete items
    const deleteItem = (id) => {
        setEditing(false)
        setItems(items.filter((item) => item.id !== id))
    }

    // set edit mode
    const editRow = (item) => {
        setEditing(true) // set edit mode
        setCurrentUser({ id: item.id, product: item.product, number: item.number, size: item.size }) // set current user

    }

    //update user
    const updateItem = (id, updateditem) => {
        setEditing(false)
        setItems(items.map(item => (item.id === id ? updateditem : item)))
    }

    return ( <
        div >
        <
        Grid >
        <
        Grid.Column width = { 6 } >
        <
        h1 > Embry Hardware < /h1>  {
            editing ?
                ( < EditForm editing = { editing }
                    setEditing = { setEditing }
                    currentUser = { currentUser }
                    updateItem = { updateItem }
                    />) : ( <AddForm addItem = { addItem }/ > )
        } <
        /Grid.Column>  <
        Grid.Column width = { 10 }
        verticalAlign = "middle" >
        <
        h2 > View Products < /h2> <
        Table celled selectable >
        <
        Table.Header >
        <
        Table.Row >
        <
        Table.HeaderCell > ID < /Table.HeaderCell> <
        Table.HeaderCell > Product < /Table.HeaderCell>  <
        Table.HeaderCell > Number < /Table.HeaderCell>  <
        Table.HeaderCell > Size < /Table.HeaderCell>  <
        Table.HeaderCell > Actions < /Table.HeaderCell>  <
        /Table.Row>  <
        /Table.Header>  <
        Table.Body > {
            items.map((item) => ( < Table.Row key = { item.id } >
                <
                Table.Cell > { item.id } < /Table.Cell>  <
                Table.Cell > { item.product } < /Table.Cell>  <
                Table.Cell > { item.number } < /Table.Cell>  <
                Table.Cell > { item.size } < /Table.Cell> <
                Table.Cell > < Button type = 'submit'
                onClick = {
                    () => { editRow(item) } }
                color = "green" > Edit < /Button>  <
                Button type = 'submit'
                onClick = {
                    () => deleteItem(item.id) }
                color = "red" > Delete < /Button>  <
                /Table.Cell> </Table.Row >
            ))
        } <
        /Table.Body>  <
        /Table>   <
        /Grid.Column>    <
        /Grid>    <
        /div>
    );
}

export default App;