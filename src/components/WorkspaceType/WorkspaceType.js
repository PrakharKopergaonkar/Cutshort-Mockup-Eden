import React, { useEffect, useState } from 'react'
import PageHeading from '../PageHeading/PageHeading'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/exports';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { incrementStep } from '../../actions/stepActions';
import cx from 'classnames';
import classes from './WorkspaceType.module.css';
import { setWorkspaceType } from '../../actions/workspaceTypeActions';
function WorkspaceType() {
    const [type, setType] = useState("myself")
    const dispatch = useDispatch();
    const workspaceType = useSelector((state) => state.workspaceType);

    useEffect(() => {
        setType(workspaceType.type);
    },[workspaceType])

    const handleSubmit = () => {
        dispatch(setWorkspaceType(type));
        dispatch(incrementStep());
    }

    return (
        <div>
            <PageHeading
                heading="How are you planning to use Eden?"
                subHeading="We'll streamline your setup experience accordingly."
            />
            <br />
            <Container className={classes.cardHolder}>
                <Row>
                    <Col xs={12} sm={6}>
                        <Card
                            className={
                                type === "myself" ?
                                    cx(classes.card, classes.cardActive) :
                                    classes.card
                            }
                            onClick={() => setType("myself")}
                        >
                            <Card.Img
                                variant="top"
                                src="./images/user1.svg"
                                className={
                                    type === "myself" ?
                                        cx(classes.img, classes.imgActive) :
                                        classes.img
                                }
                            />
                            <Card.Body>
                                <Card.Title>
                                    <strong>
                                        For myself
                                    </strong>
                                </Card.Title>
                                <Card.Text>
                                    Write better. Think more clearly. Stay organized
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Card
                            className={
                                type === "team" ?
                                    cx(classes.card, classes.cardActive) :
                                    classes.card
                            }
                            onClick={() => setType("team")}
                        >
                            <Card.Img
                                variant="top"
                                src="./images/user2.svg"
                                className={
                                    type === "team" ?
                                        cx(classes.img, classes.imgActive) :
                                        classes.img
                                }
                            />
                            <Card.Body>
                                <Card.Title>
                                    <strong>
                                        With my team
                                    </strong>
                                </Card.Title>
                                <Card.Text>
                                    Wikis, docs, tasks & project, all in one place.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
            <Button className="commonSubmitButton" onClick={handleSubmit}>
                Create Workspace
            </Button>
        </div>
    )
}

export default WorkspaceType
