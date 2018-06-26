import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ButtonGroup,
    Container, Row, Col
} from 'reactstrap';

const Quiz = props => (
    <div>
        <Container>
            <Row>
            <Col>
        <Card>
        <Row>
            <CardBody>
                <CardTitle>{props.quizTitle}</CardTitle>
                <CardSubtitle>{props.Q1}</CardSubtitle>
                <CardText>
                    <ButtonGroup>
                    <Button value={props.correctQ1A1}>{props.Q1A1}</Button>
                    <Button value={props.correctQ1A2}>{props.Q1A2}</Button>
                    <Button value={props.correctQ1A3}>{props.Q1A3}</Button>
                    <Button value={props.correctQ1A4}>{props.Q1A4}</Button>
                    </ButtonGroup>
                </CardText>
                <CardSubtitle>{props.Q2}</CardSubtitle>
                <CardText>
                    <ButtonGroup>
                    <Button value={props.correctQ2A1}>{props.Q2A1}</Button>
                    <Button value={props.correctQ2A2}>{props.Q2A2}</Button>
                    <Button value={props.correctQ2A3}>{props.Q2A3}</Button>
                    <Button value={props.correctQ2A4}>{props.Q2A4}</Button>
                    </ButtonGroup>
                </CardText>
                <CardSubtitle>{props.Q3}</CardSubtitle>
                <CardText>
                    <ButtonGroup>
                    <Button value={props.correctQ3A1}>{props.Q3A1}</Button>
                    <Button value={props.correctQ3A2}>{props.Q3A2}</Button>
                    <Button value={props.correctQ3A3}>{props.Q3A3}</Button>
                    <Button value={props.correctQ3A4}>{props.Q3A4}</Button>
                    </ButtonGroup>
                </CardText>
            </CardBody>
            </Row>
            <Row>
                <Col xs="6" sm="4">
            <Button onClick={props.handleSubmit}>Submit</Button>
            </Col>
            </Row>
            

        </Card>
        </Col>
        </Row>
            
        
        </Container>

    </div>

)

export default Quiz;