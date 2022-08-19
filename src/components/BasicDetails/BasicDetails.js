import React, { useState, useEffect} from 'react'
import { Button, Form } from 'react-bootstrap';
import PageHeading from '../PageHeading/PageHeading';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { incrementStep } from '../../actions/stepActions';
import { useSelector } from 'react-redux';
import { setBasicDetails } from '../../actions/basicDetailsActions';
function BasicDetails() {
    const basicDetails = useSelector((state) => state.basicDetails)
    const [fullName, setFullName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [errorFullName, setErrorFullName] = useState(false);
    const [errorDisplayName, setErrorDisplayName] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setFullName(basicDetails.fullName);
        setDisplayName(basicDetails.displayName);
    }, [basicDetails])
    
    const handleSubmit = () => {
        let valid = true;
        if (fullName.trim().length === 0) {
            setErrorFullName(true);
            valid = false
        } else {
            setErrorFullName(false)
        }

        if (displayName.trim().length === 0) {
            setErrorDisplayName(true);
            valid = false
        } else {
            setErrorDisplayName(false)
        }

        if (valid) {
            dispatch(setBasicDetails(fullName, displayName))
            dispatch(incrementStep())
        }
    }
    return (
        <div>
            <PageHeading
                heading="Welcome! First things first..."
                subHeading="You can always change them later."
            />
            <br />
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    placeholder="Steve Jobs"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{borderColor: errorFullName ? "red" : ""}}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDisplayName">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                    placeholder="Steve"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    style={{borderColor: errorDisplayName ? "red" : ""}}
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
