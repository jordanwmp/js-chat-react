import { useState } from 'react'
import api from '../contexts/api'

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

    const registerContact = (e) => {

        e.preventDefault();

        if (!name || !phone) {
            alert("Preencha todos os campos")
            return
        }

        api.post('/api/contact', {
            name: name,
            phone: phone,
            avatar: "https://t3.ftcdn.net/jpg/01/97/11/64/360_F_197116416_hpfTtXSoJMvMqU99n6hGP4xX0ejYa4M7.jpg"
        })
            .then((contact) => {
                console.log('contact ', contact)
                setName("")
                setPhone("")
            })
            .catch((e) => {
                console.log('error on add new contact ', e)
            })

    }

    return (
        <div className="formContainer">
            <h1>Cadastrar contato</h1>
            <form>

                <input type="text" placeholder="Nome" value={name} onChange={handleName} />
                <input type="tel" placeholder="Telefone" value={phone} onChange={handlePhone} />

                <button className='button' onClick={()=>{ registerContact() }}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}

export default NewContact;