import React  from 'react';
import { articleProperties } from '../constants';
import { Row, Col, Card, Image} from 'react-bootstrap';
import { useState } from 'react';
import {ChevronRight, ChevronDown } from 'react-bootstrap-icons';


export default function ArticleRow(props) {
    const [focus, setFocus] = useState(false);
    const {article} = props;

    return(
        <>
        <Row className="article-row">
        <Col xs={2}>
        {focus ? <ChevronDown onClick={() => setFocus(!focus)}/>:<ChevronRight onClick={() => setFocus(!focus)}/>}
        {article.paper_link &&
        <a target="_blank" href={article.paper_link} rel="noopener noreferrer">
        <Image src="pubmed.png" className="pubmed-icon" />
        </a>}
        {article.code_available &&
        <a target="_blank" href={article.code_link} rel="noopener noreferrer">
        <Image src="github-mark.png" className="github-icon" />
        </a>}
        </Col>
        {Object.keys(articleProperties).map(p => <Col key={article.id+p} xs={2}>{article[p]}</Col>)}
        </Row>
        {focus &&
        <Row>
        <Col>
        <Card className="article-card">
        <Card.Header>
        <Card.Title>{article.paper_title}</Card.Title>
        </Card.Header>
        <Card.Body>
        <Card.Text>{article.abstract}</Card.Text>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        }
        </>
    )
}