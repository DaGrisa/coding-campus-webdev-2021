
import ReactDOM from 'react-dom';
import { Fragment, ReactElement } from "react";
import "./Modal.css";

interface ModalProps {
    children: ReactElement[];
    onHideCart: ()=>void;
}

interface BackdropProps {
    onHideCart: ()=>void;
}

interface ModalOverlayProps {
    children: ReactElement[];
}

function Backdrop(props: BackdropProps){
    return(
        <div className="backdrop" onClick={props.onHideCart}></div>
    );
}

function ModalOverlay(props: ModalOverlayProps){
    return(
        <div className="modal">
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlay') as HTMLElement;

export default function Modal(props: ModalProps){
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
}