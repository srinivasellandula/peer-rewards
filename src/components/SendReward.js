import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../styles/SendRewardModal.css";

const SendReward = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    to: "",
    amount: "",
    reason: "",
  });
  const [errors, setErrors] = useState({});

  const toggle = () => setModal(!modal);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    setErrors({});
    let hasError = false;
    if (!formData.to) {
      hasError = true;
      setErrors((errors) => ({ ...errors, to: "To field is required." }));
    }
    if (!formData.amount) {
      hasError = true;
      setErrors((errors) => ({
        ...errors,
        amount: "Amount field is required.",
      }));
    }
    if (!formData.reason) {
      hasError = true;
      setErrors((errors) => ({
        ...errors,
        reason: "Reason field is required.",
      }));
    }
    if (hasError) {
      return;
    }

    console.log(formData);
    setFormData({
      to: "",
      amount: "",
      reason: "",
    });
    toggle();
  };

  return (
    <div className="container mt-5">
      <Button color="primary" onClick={toggle}>
        Send
      </Button>
      {
        modal ?
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggle}>&times;</span>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="to">To</Label>
                <Input
                  type="text"
                  name="to"
                  id="to"
                  placeholder="Enter username here"
                  value={formData.to}
                  onChange={handleChange}
                />
                {errors.to && <div className="text-danger">{errors.to}</div>}
              </FormGroup>
              <FormGroup>
                <Label for="amount">Reward</Label>
                <Input
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="How much you want to reward?"
                  value={formData.amount}
                  onChange={handleChange}
                />
                {errors.amount && (
                  <div className="text-danger">{errors.amount}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="reason">Why?</Label>
                <Input
                  type="textarea"
                  name="reason"
                  id="reason"
                  placeholder="Why you want to reward?"
                  value={formData.reason}
                  onChange={handleChange}
                />
                {errors.reason && (
                  <div className="text-danger">{errors.reason}</div>
                )}
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </div>
      </div>
      : ''
      }
  
    </div>
  );
};

export default SendReward;
