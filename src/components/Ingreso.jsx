import { useState } from 'react'
import './Ingreso.css'
const Ingreso = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [mail, setMail] = useState('')
    const [clave, setClave] = useState('')
    const [error, setError] = useState({})

    const validacionEmail = () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(String(mail).toLocaleLowerCase())
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        let formErrors={}
        if (!name) formErrors.name='El nombre es obligatorio'
        if(!user) {formErrors.user='EL USUARIO ES OBLIGATORIO'}
        if(!mail){formErrors.mail='EL CORREO ES OBLIGATORIO'}
        else if (!validacionEmail(mail)){formErrors.mail='EL CORREO ELECTRONICO NO ES VALIDO'}
        setError(formErrors)
        if (Object.keys(formErrors).length===0){
            alert(' Formulario enviado exitosamente')
            setName('')
            setUser('')
            setMail('')
            setClave('')

        }
    }
    return (
        <>
            <h1>FORMULARIO DE REGISTRO</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombres</label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Nombre"
                        onChange={((e) => setName(e.target.value))}
                    />
                    {error.name && <p style={{color:'red', fontSize:'10px'}}>{error.name}</p>}
                </div>
                <div>
                    <label>Usuario</label>
                    <input
                        type="text"
                        value={user}
                        placeholder="Usuario"
                        onChange={(e) => setUser(e.target.value)}
                    />
                    {error.user && <p style={{color:'red', fontSize:'10px'}}>{error.user}</p>}
                </div>
                <div>
                    <label>Correo</label>
                    <input
                        type="email"
                        name="correo"
                        placeholder="Correo"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />
                    {error.mail && <p style={{color:'red', fontSize:'10px'}}>{error.mail}</p>}

                </div>
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="contraseña"
                        placeholder="Contraseña"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                    />

                </div>
                <div>
                    <input type="submit" value="Enviar"></input>
                </div>
            </form>
        </>
    )
}

export default Ingreso