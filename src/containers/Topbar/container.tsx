import React from 'react';
import { Title, Chip } from '@components';
import * as Types from './types';

// STYLE
import './style.scss';

const Topbar = (props: Types.Props): JSX.Element => {
  const { id } = props;

  return (
    <div className="Topbar" id={id} data-testid={id}>
      <div className="Topbar__content">
        <Title id={`${id}-title`} content="react-setup" classname="Topbar__title" size="sm" />
        <div className="Topbar__chips">
          <Chip id={`${id}-ts`} label="TS" active={true} />
          <Chip id={`${id}-ts`} label="JS" active={false} />
        </div>
      </div>
    </div>
  )
}

export default Topbar;