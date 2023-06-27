import React from 'react';
import classnames from 'classnames';
import { Text } from '@components';
import * as Types from './types';
import './style.scss';

// STYLES

const Chip = (props: Types.Props): JSX.Element => {
  const { id, label, active, custom } = props;

  function customize(): { color: string, background: string } {
    const { color, background } = custom;
    return {
      color: color && active ? color : '#313131',
      background: background && active ? background : '#FFFFFF'
    }
  }

  return (
    <div id={id} data-testid={id} className={classnames('Chip', { 'Chip--active': active })} style={customize()}>
      <Text id={`${id}-label`} content={label} bold={active} />
    </div>
  )
}

export default Chip;