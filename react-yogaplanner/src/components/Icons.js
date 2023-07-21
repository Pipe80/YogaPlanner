import React, { Component } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsHeartFill, BsHeart } from "react-icons/bs";

class Like extends Component {
  render() {
    return (
    <div>
      <FaHeart /> <FaRegHeart /> <BsHeartFill /> <BsHeart />
    </div>
    ) 
  }
}

export default Like