/**
 * Created by megan on 12/6/16.
 */
import React from 'react';
import { Button, Grid, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import moment from 'moment';
import ParserForm from './parser-form';

export default class Receiving extends React.Component {
    state = {
        defaultFormData: {},
        cases: [],
        message: '',
        posts: 0,
    }
    componentDidMount = () => {
        this.setState({
            defaultFormData: {
                containerCount: 1,
                receivedDate: moment().format(),
            },
        });
        this.fetchUserRecords();
    }
    componentWillUnmount = () => {
        this.setState({});
    }

    fetchUserRecords = () => {
        fetch('/api/cases/user', { credentials: 'same-origin' })
            .then(r => r.json())
            .then(data => this.setState({ cases: data }));
    }

    handleOnSubmit = (e) => { // TODO: this should use onPost and let parse handle fetch and auth
        this.setState({
            defaultFormData: {
                lineOfService: e.formData.lineOfService,
                receivedDate: moment().format(),
            },
        });

        fetch('/api/cases', {
            body: JSON.stringify(e.formData),
        })
            .then(r => r.json());
    }
}

