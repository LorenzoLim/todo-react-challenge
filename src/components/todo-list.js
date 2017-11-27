import React from 'react';
import '../App.css';


import { Badge, Alert } from 'reactstrap';

export default function TodoFunction (props) {
  return (
    <ul className='list-group'>
      <Heading />
      <Example />
      {props.tasks.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </ul>
  )
}

const ListItem = ({ item }) => (
  <li className='list-group-item'> { item.task } <AddBadge item={item} /></li>
)

const AddBadge = ({ item }) => (
  <Badge color="secondary">{ item.status === 'complete' ? 'Complete!' : ''}</Badge>
)

const Example = (props) => {
  return (
    <div>
      <Alert color="primary">
        Alert!
      </Alert>
    </div>
  )
}

function Heading () {
    return (
      <div className="heading">
        <h1>My Todo list: </h1>
        <h2>Things I need to get done</h2>
      </div>
    )
}
