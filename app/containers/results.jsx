import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class Results extends Component {
    flattenObj(obj) {
        var result = {};
        function recurse (cur, prop) {
            if (Object(cur) !== cur) {
                result[prop] = cur;
            } else {
                var isEmpty = true;
                for (var p in cur) {
                    isEmpty = false;
                    recurse(cur[p], prop ? prop+"."+p : p);
                }
                if (isEmpty && prop)
                    result[prop] = {};
            }
        }
        recurse(obj, "");
        return result;
    }
    //Refactor
    generateHeaders(obj) {
        const headers = ['#'];
        const flattenedObj = this.flattenObj(obj);
        Object.keys(flattenedObj).forEach(key => {
            if (key.includes('.')) {
                headers.push(key.slice(key.indexOf('.')+1))
            }
            else {
                headers.push(key);
            }
        });
        return headers;
    }

    generateRow(num, obj) {
        const flattenedObj = this.flattenObj(obj);
        return (
            <tr>
                <td>{num}</td>
                {Object.keys(flattenedObj).map(key => <td>{flattenedObj[key]}</td>)}
            </tr>
        )
    }

    render() {
        const { elements } = this.props;
        return (
            <div className='results'>
                <h1>Results:</h1>
                {elements[0] && 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {this.generateHeaders(elements[0]).map(header => <th>{header}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {elements.map((item, ix) => this.generateRow(ix, item))}
                    </tbody>
                </Table>}
            </div>
        )
    }
}