import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux/es/exports';
import PageHeading from '../PageHeading/PageHeading'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { incrementStep } from '../../actions/stepActions';
import { setWorkspaceDetails } from '../../actions/workspaceDetailsActions';
function WorkplaceDetails() {
    const workspaceDetails = useSelector((state) => state.workspaceDetails)
    const dispatch = useDispatch();
    const [workspaceName, setWorkspaceName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [errorWorkspaceName, setErrorWorkspaceName] = useState(false)

    useEffect(() => {
        setWorkspaceName(workspaceDetails.workspaceName)
        setDisplayName(workspaceDetails.displayName)
    }, [workspaceDetails])



    const handleSubmit = () => {
        if (workspaceName.trim().length === 0) {
            setErrorWorkspaceName(true)
        } else {
            setErrorWorkspaceName(false);
            dispatch(setWorkspaceDetails(workspaceName, displayName))
            dispatch(incrementStep())
        }
    }
    return (
        <div>
            <PageHeading
                heading="Let's setup a home for all your work"
                subHeading="You can always create another workspace later"
            />
            <br />
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Workspace Name</Form.Label>
                <Form.Control
                    placeholder="Eden"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    style={{borderColor: errorWorkspaceName ? "red" : ""}}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDisplayName">
                <Form.Label>Display Name </Form.Label>
                <Form.Label style={{ color: "lightgrey" }}> &nbsp; (optional) </Form.Label>
                <div style={{ display: "flex" }}>
                    <Form.Control
                        placeholder='www.eden.com/'
                        disabled
                        style={{ width: "45%" }}
                    />
                    <Form.Control
                        placeholder="Example"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </div>
            </Form.Group>
            <br />
            <Button className="commonSubmitButton" onClick={handleSubmit}>
                Create Workspace
            </Button>
        </div>
    )
}

export default WorkplaceDetails;
