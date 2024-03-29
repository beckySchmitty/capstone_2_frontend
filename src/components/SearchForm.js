import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, InputGroupAddon } from 'reactstrap';

// Search form for movies
// Searched by title 
// Query uses ILIKE so 
// MovieCards rendered after search will display any movie with the search term in title

const SearchForm = ({ search }) => {
  const [term, setTerm] = useState("");

  const handleChange = evt => {
    setTerm(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    search(term);
    setTerm("");
  }

  return (

    <div style={{width: `50%`, margin: `0 auto`}}>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="search"></Label>
          <InputGroupAddon addonType="prepend">
            <Button>SEARCH</Button>
            <Input type="text" value={term} onChange={handleChange} id="search" />
          </InputGroupAddon>
        </FormGroup>
    </Form>
  </div>

  );
};

export default SearchForm;
