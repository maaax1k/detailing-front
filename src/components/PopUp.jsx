import React, {useState} from 'react';
import CusButton from "../UI/button/CusButton";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.css';

const PopUp = (props) => {
    const [show, setShow] = useState(false);
    const Close = () => setShow(false);
    const Open = () => {
        if(props.data[0] === ''){
            alert("Введите имя")
        }
        else if(props.data[1] === ''){
            alert("Введите телефон")
        }
        else{
            setShow(true);
        }
    }
    const CloseReload = () =>{
        window.location.reload()
    }
    return (
        <div>
            <CusButton onClick={Open}>Отправить</CusButton>

            <Modal show={show} onHide={Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Проверьте правильность введенных вами данных</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign: "center"}}>{props.data[0]}</h4>
                    <h4 style={{textAlign: "center"}}>{props.data[1]}</h4>
                    <CusButton onClick={Close}>Исправить</CusButton>
                    <CusButton onClick={CloseReload}>Отправить</CusButton>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PopUp;