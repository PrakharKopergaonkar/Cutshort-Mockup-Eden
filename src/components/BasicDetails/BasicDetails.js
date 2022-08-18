import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import PageHeading from '../PageHeading/PageHeading';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { incrementStep } from '../../actions/stepActions';
function BasicDetails() {
    const [fullName, setFullName] = useState("");
    const [displayName, setDisplayName] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(incrementStep())
    }
    return (
        <div>
            <PageHeading
                heading="Welcome! First things first..."
                subHeading="You can always change them later"
            />
            <br />
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    placeholder="Steve Jobs"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDisplayName">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                    placeholder="Steve"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </Form.Group>
            <br />
            <Button className="commonSubmitButton" onClick={handleSubmit}>
                Create Workspace
            </Button>
        </div>
    )
}

export default BasicDetails;
