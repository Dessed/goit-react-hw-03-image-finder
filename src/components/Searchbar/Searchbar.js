import React, { Component } from "react";
import { Searchbar, Form, Button, Label, Input } from './Searchbar.styled';

export class SearchbarHeader extends Component {
  state = {
    name: '',
};

handleChange = e => {
  this.setState({name: e.target.value});
}; 

handleSubmit = e => {
  e.preventDefault();

  this.props.dataName(this.state.name);
  this.setState({ name: '' });
};

render () {
  const handleSubmit = this.handleSubmit;
  const handleChange = this.handleChange; 

    return(
      <Searchbar>
      <Form onSubmit={handleSubmit}>
      <Button type="submit" >
        <Label>Search</Label>
      </Button>

      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={handleChange}
      />
    </Form>
  </Searchbar>
    );
  };
};




