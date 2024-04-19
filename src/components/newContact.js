import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import api from '../contexts/api'
import Avatar from 'react-avatar';
import { InputMask } from '@react-input/mask';


import '../styles/_formContainer.scss';
import '../styles/_button.scss';

const NewContact = () => {

    const history = useHistory()

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
        const file = event.target.files[0];
        console.log('file ', event.target.files);
        setProfilePhoto(file)
    }

    const registerContact = (e) => {
        e.preventDefault();

        if (!name || !phone) {
            alert("Preencha todos os campos")
            return
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("contact", phone)

        if (profilePhoto) {
            formData.append("file", profilePhoto)
        } else {
            formData.append("file", "")
        }

        api.post('/api/contact', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((contact) => {
                console.log('contact ', contact)
                setName("")
                setPhone("")
                setProfilePhoto("")
                history.push("/")
            })
            .catch((e) => {
                console.log('error on add new contact ', e)
            })

    }

    return (
        <div className="formContainer">
            <h1>Cadastrar contato</h1>

            {
                profilePhoto && <div className='avatarContainer'>
                <Avatar
                        className='react-avatar'
                        src={profilePhoto}
                        round={true}
                        size={60}
                    />
                </div>
            }

            <form method='post' onSubmit={(event) => { registerContact(event) }}>

                <input type="text" placeholder="Nome" value={name} onChange={handleName} />

                <InputMask placeholder='Telefone' mask="(__) _ ____-____" replacement={{ _: /\d/ }} value={phone} onChange={handlePhone} />

                <input type='file' onChange={handleProfilePhoto} />

                <button className='button' type='submit'>
                    Cadastrar
                </button>

            </form>

        </div>
    )
}

export default NewContact;