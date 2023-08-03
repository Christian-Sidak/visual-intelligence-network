
import {Stack, Pagination, Row, Col, Container} from 'react-bootstrap'
import React  from 'react';
import { useState } from 'react';
import ArticleRow from './ArticleRow';
import { articleProperties } from '../constants';
import FilterBar from './FilterBar';

/*
1. Fill in the team page
2. Fill in the dashboards
*/

export default function PaginatedList(props) {

    const {items} = props;

    const [index, setIndex] = useState(1);
    const [searchedItems, setSearchedItems] = useState(items);
    const pageSize = 10
    const totalPages = Math.ceil(searchedItems.length/pageSize)

    return(
        <Stack style={{padding: "5px"}} className="d-grid gap-3">
        <FilterBar callback={setSearchedItems} items={items}/>
        <Row className="justify-content-center align-items-center">
        <Col md="auto"><i>Showing {searchedItems.length} results...</i></Col>
        <Col md="auto">
        <Pagination>
        <Pagination.First disabled={index<3} onClick={() => setIndex(1)} />
        <Pagination.Prev disabled={index===1} onClick={() => setIndex(Math.max(1, index-1))}/>
        <Pagination.Item active>{index}</Pagination.Item>
        <Pagination.Next disabled={index===totalPages} onClick={() => setIndex(Math.min(totalPages, index+1))}/>
        <Pagination.Last disabled={index>(totalPages-2)} onClick={() => setIndex(totalPages)}/>
        </Pagination>
        </Col>
        </Row>
        <Container>
        <Row className='table-header'>
        <Col xs={2}/>
        {Object.values(articleProperties).map(p => <Col key={p} xs={2}><b>{p}</b></Col>)}
        </Row>
        {searchedItems && searchedItems.length > 0 && searchedItems.slice((index-1)*pageSize, (index*pageSize)).map(item => 
        <ArticleRow key={item.id} article={item}/>
        )}
        
        </Container>
        </Stack>
    )
}