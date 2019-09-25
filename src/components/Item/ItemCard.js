import React from 'react';
import styled from 'styled-components';

// Add items to the list. Food, supplies, drink
//This is the card / form to fill out

const ItemBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #D9580D;
`;
const ItemForm = styled.form`
    display: flex;
    width: 40%;
    background-color: #F0F2F2;
    justify-content: center;
    align-content: center;
    text-align: left;
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 5px;
`;
const ItemLgd = styled.legend`
    font-size: 1.5rem;
`;
const ItemLabel = styled.label`
    display: inline;
    font-size: 1rem;
    padding: 0 .5rem;
`;
const ItemInput = styled.input`
    display: inline;
    margin-bottom: 1rem;
    font-size: 1rem;
`;
const ItemTxtArea = styled.textarea`
    display: inline;
    margin-bottom: 1rem;
    font-size: 1rem;
`;
const ItemBorder = styled.fieldset`
    border-radius: 5px;
    padding: 1rem 3rem;
`;
const ItemBtn = styled.button`
    display: flex;
    justify-content: center;
    margin: 0 20% 0 20%;
    order: 1;
    width: 10rem;
    height: 3rem;
    background-color: #30BF45;
    border: 1px solid #333333;
    border-radius: 5px;
    color: white;

    :hover{
        background-color: #C4F2D0;
        color: black;
    }
`;

function ItemCard() {

    return(
        <ItemBase>
            <ItemForm>
                <ItemBorder>
                    <ItemLgd>Add Items</ItemLgd>
                        <ItemLabel htmlFor="ItemName">Item Name<br />
                            <ItemInput type='text' id='ItemName' name='ItemName'
                            placeholder='Add Item' size='30' /><br />
                        </ItemLabel>
                        <ItemLabel htmlFor='Category'>Category<br />
                            <ItemInput type='text' id='Category' name='Category' size='30'
                            placeholder='Appetizer, Drinks, Main Dish, Dessert, Party Supply' /><br />
                        </ItemLabel>
                        <ItemLabel htmlFor='Qty'>Quantity<br />
                            <ItemInput type='text' id='Qty' name='Qty'
                            placeholder='How much' size="30" /><br />
                        </ItemLabel>
                        {/* <ItemLabel htmlFor='notes'>Notes<br />
                            <ItemTxtArea id='notes' rows='15' cols='32' 
                            placeholder='Notes' /><br />
                        </ItemLabel> */}
                        <ItemBtn>Add Item</ItemBtn>
                </ItemBorder>
            </ItemForm>
        </ItemBase>
    );
}
export default ItemCard