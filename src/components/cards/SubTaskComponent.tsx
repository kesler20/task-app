import * as React from 'react';
import { SubTask } from '../../types';

interface ISubTaskComponentProps {
  subTask : SubTask
}

const SubTaskComponent: React.FunctionComponent<ISubTaskComponentProps> = (props) => {
  return <div>
    <p>{props.subTask.title}</p>
    <p>{props.subTask.description}</p>
  </div>
};

export default SubTaskComponent;
