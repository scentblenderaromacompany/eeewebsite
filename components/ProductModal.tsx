import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductModal = ({ show, onHide, product }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
