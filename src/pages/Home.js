import React  from 'react';
import PaginatedList from "../components/PaginatedList";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import Documentation from './Documentation';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

export default function Home() {
    const {path} = useParams();
    const validPaths = ["home", "docs", "team", "dashboard"];
    const articles = require('../data.json');

    
    return(
        <div>
        <Header/>
        <div className="page-content">
        {path === "home" && <PaginatedList items={articles}/>}
        {path === "docs" && <Documentation/>}
        {path === "dashboard" && <Dashboard/>}
        {!validPaths.includes(path) && <NotFound/>}
        </div>
        <Footer/>
        </div>
    )
}