import React from 'react';

function RegForm() {
    return (
        <div>
            <form>
            <fieldset>
                <legend>Registration</legend>
                <label htmlFor='fName'>
                    <input type='text' name='fName' id='fName' 
                    placeholder='First Name'/>
                </label>
                <label htmlFor='lName'>
                    <input type='text' name='lName' id='lName' 
                    placeholder='Last Name'/>
                </label>
                <label htmlFor='user'>
                    <input type='text' name='user' id='user' 
                    placeholder='User Name'/>
                </label>
                <label htmlFor='passwrd'>
                    <input type='password' name='passwrd' id='passwrd' 
                    placeholder='Account Password'/>
                </label>
            </fieldset>
            </form>
        </div>
    );
}
export default RegForm