import React, {useRef, useState} from 'react';
import PopUp from "../components/PopUp";

const ContactPage = () => {
    const [name, setName] =useState('')
    const [phone, setPhone] =useState('')


    return (
        <div>
            <div className="contact-image">
                <h1>Свяжитесь с нами сейчас!</h1>
                <p>Оставив свои данные в форме</p>
            </div>
            <div className="service center">
                <h2 className="title">Запоните эту форму для того, чтобы связяться с нами</h2>
                <div className="form">
                    <input required placeholder="Имя" type="text" value={name} onChange={event => setName(event.target.value)}/>
                    <input required placeholder="Телефон" type="tel" value={phone} onChange={event => setPhone(event.target.value)}/>
                    <PopUp data = {[name, phone]} />
                </div>
                <p style={{color: "gray", margin: "40px 0"}}>*Мы всегда готовы ответить на ваши вопросы и помочь вам. Если у вас есть какие-либо вопросы, проблемы или предложения, пожалуйста, не стесняйтесь обращаться к нам. Мы ценим ваше мнение и готовы помочь вам в любое время.</p>
            </div>
        </div>
    );
};

export default ContactPage;