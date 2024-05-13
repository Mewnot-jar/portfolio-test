import React from 'react'
import './form.css'

const Form = () => {
    return (
        <div className='form-main-container'>
            <form action="" className='form-container'>
                <div className='form-text-container'>
                    <div className='inputs-section-container'>
                        <label htmlFor="">Nombre:</label>
                        <input type="text" />
                    </div>
                    <div className='inputs-section-container'>
                        <label htmlFor="">Correo Electronico:</label>
                        <input type="email" />
                    </div>
                    <div className='inputs-section-container'>
                        <label htmlFor="">Numero telefonico:</label>
                        <input type="number" />
                    </div>
                    <div className='inputs-section-container'>
                        <label htmlFor="">Mensaje:</label>
                        <textarea name="" id=""></textarea>
                    </div>
                </div>
                <div className='button-container'>
                    <button>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form