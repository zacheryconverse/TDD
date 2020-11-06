import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

class Gift extends Component {
  constructor() {
    super();
    this.state = {
      gift: "",
      present: "",
    };
  }

  render() {
    const { removeGift, gift } = this.props;
    return (
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              className="input-person"
              onChange={(e) => this.setState({ person: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl
              className="input-present"
              onChange={(e) => this.setState({ present: e.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className='btn-remove'
          onClick={() => removeGift(gift.id)}
        >Remove Gift</Button>
      </div>
    );
  }
}

export default Gift;
