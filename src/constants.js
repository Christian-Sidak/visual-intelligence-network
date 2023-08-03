export const data = require('./data.json').map(o=> {o.year=parseInt(o.publication_date.slice(0, 4)); return o});
export const articleProperties = {
    "domain":"Condition",
    "model_name":"Model Name",
    "publication_date":"Publication Date",
    "model_task":"Task",
    "model_type":"Model Type",
  }
export const conditions = [...new Set(data.map(o => o.domain))];
export const tasks = [...new Set(data.map(o => o.model_task))].filter(t => t);
export const years = [...new Set(data.map(o => o.year))].sort();