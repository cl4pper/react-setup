import React from 'react';
import { Title } from '@components';
import * as Types from './types';

// STYLE
import './style.scss';

const Topbar = (props: Types.Props): JSX.Element => {
  const { id } = props;

  return (
    <div className="Topbar" id={id} data-testid={id}>
      <Title id={`${id}-title`} content="react-setup" classname="Topbar__title" size="sm" />
    </div>
  )
}

export default Topbar;