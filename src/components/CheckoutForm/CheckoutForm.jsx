import { useState } from "react";
import "./CheckoutFormStyles.css";
const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [address, setAddress] = useState("");

    const validateEmails = () => {
        if (email !== confirmEmail) {
            return false;
        }
        return true;
    };

    const handleConfirm = (event) => {
        event.preventDefault();

        const emailsAreEqual = validateEmails();

        if (!emailsAreEqual) {
            alert("Los correos electrónicos no coinciden");
            return;
        }

        const userData = {
            name,
            phone,
            email,
            address,
        };

        onConfirm(userData);
    };

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre completo
                    <input
                        className="Input"
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        required
                    />
                </label>
                <label className="Label">
                    Teléfono
                    <input
                        type="text"
                        className="Input"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        required
                    />
                </label>
                <label className="Label">
                    Email
                    <input
                        type="email"
                        className="Input"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        required
                    />
                </label>
                <label className="Label">
                    Confirmar Email
                    <input
                        type="email"
                        className="Input"
                        value={confirmEmail}
                        onChange={({ target }) => setConfirmEmail(target.value)}
                        required
                    />
                </label>
                <label className="Label">
                    Dirección
                    <input
                        type="text"
                        className="Input"
                        value={address}
                        onChange={({ target }) => setAddress(target.value)}
                        required
                    />
                </label>

                <div className="Label">
                    <button type="submit" className="Button">
                        Crear Orden
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
