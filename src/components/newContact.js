import { useState } from 'react';

import '../styles/_formContainer.scss';
import '../styles/_button.scss';

const NewContact = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [profilePhoto, setProfilePhoto] = useState("")

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleProfilePhoto = (event) => {
        setProfilePhoto(event.target.value)
    }

    return (
        <div className="formContainer">
            <h1>Cadastrar contato</h1>
            <form>
                <input type="text" placeholder="Nome" value={name} onChange={handleName} />
                <input type="tel" placeholder="Telefone" value={phone} onChange={handlePhone} />

                <button className='button'>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}

export default NewContact;