import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { conditions, tasks } from "../constants";
import { useState } from "react";
import Select from 'react-select'

function intersect(array1, array2) {
    const filteredArray = array1.filter(value => array2.includes(value));
    return filteredArray.length > 0
}

export default function FilterBar(props) {
    const {items, callback} = props;

    const styles={ menuPortal: base => ({ ...base, zIndex: 4}) };
    const conditionOptions = conditions.map(c => {return {value: c, label: c}})
    const taskOptions = tasks.map(t => {return {value:t,label:t}})

    const [condition, setCondition] = useState([]);
    const [task, setTask] = useState([]);
    const [keywords, setKeywords] = useState("");
    const [verified, setVerified] = useState(false);
    const [requireGithub, setRequireGithub] = useState(false);
    
    const handleSearch =()=> {
        const conditionFilters = condition.map(o=>o.value);
        const taskFilters = task.map(o=>o.value);
        const keywordFilters = keywords.split(',').filter(s=>s.length).map(s => s.trim().toLowerCase());

        const filteredItems = items.filter(item => {
            if (conditionFilters.length && !conditionFilters.includes(item.domain)) {
                return false;
            } else if (taskFilters.length && !taskFilters.includes(item.model_task)) {
                return false;
            } else if (keywordFilters.length && !intersect(keywordFilters, item.keywords)) {
                return false;
            } else if (verified && !item.verified) {
                return false;
            } else if (requireGithub && !item.code_available) {
                return false;
            } else {
                return true;
            }

        })
        callback(filteredItems)
    }

    return(
        <div className="filter-bar">
        <Row>
        <Col>
        <Select menuPortalTarget={document.body} styles={styles} onChange={(e)=>setCondition(e)} placeholder="Select a condition" options={conditionOptions} isMulti/>
        </Col>
        <Col>
        <Select menuPortalTarget={document.body} styles={styles} onChange={(e)=>setTask(e)} placeholder="Select a task type" options={taskOptions} isMulti/>
        </Col>
        </Row>
        <Row>
        <Col>
        <Form.Control onChange={(e)=>setKeywords(e.target.value)} type="text" placeholder="Enter keywords separated by a comma..."/>
        </Col>   
        <Col md="auto">
        <Form.Check onClick={()=>setRequireGithub(!requireGithub)} type="checkbox" label="On Github"/>
        </Col>
        <Col md="auto">
        <Form.Check onClick={()=>setVerified(!verified)} type="checkbox" label="Verified"/>
        </Col>
        <Col md="auto"><Button onClick={handleSearch}>Search</Button></Col>  
        </Row>
        </div>
    );
}