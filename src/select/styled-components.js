/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import {styled} from '../styles/index';
import {ICON, TYPE} from './constants';

import {SIZE} from '../input';
import {
  getInputStyles,
  getInputContainerStyles,
} from '../input/styled-components';

import {
  List as MenuList,
  ListItem as MenuListItem,
} from '../menu/styled-components';

export const Root = styled('div', props => {
  return {
    position: 'relative',
  };
});

export const FocusContainer = styled('div', props => {
  return {
    outline: 'none',
  };
});

export const Input = styled('input', props => {
  const {$theme} = props;
  const {
    sizing: {scale300},
  } = $theme;
  return {
    ...getInputStyles({...props, $size: SIZE.default}),
    cursor: 'pointer',
    width: 'auto',
    flexGrow: '1',
    paddingTop: scale300,
    paddingBottom: scale300,
  };
});

export const InputContainer = styled('div', props => {
  const {$theme, $isFocused, $error} = props;
  const {
    colors: {primary400, mono200, negative50},
    sizing: {scale300},
  } = $theme;

  const border = {
    borderColor: mono200,
  };

  if ($isFocused) {
    border.borderColor = primary400;
  } else if ($error) {
    border.borderColor = negative50;
  }

  return {
    ...getInputContainerStyles({...props, $size: SIZE.default}),
    flexWrap: 'wrap',
    paddingLeft: scale300,
    paddingRight: scale300,
    paddingTop: '0',
    paddingBottom: '0',
    alignItems: 'center',
    position: 'relative',
    ...border,
  };
});

export const SingleSelection = styled('span', props => {
  const {$theme, $disabled} = props;
  const {
    colors: {mono1000},
  } = $theme;
  return {
    ...getInputStyles({...props, $size: SIZE.default, $disabled: true}),
    cursor: $disabled ? 'not-allowed' : 'pointer',
    width: 'auto',
    flexGrow: '1',
    color: mono1000,
  };
});

export const SelectComponentIcon = styled('img', props => {
  const {$theme, $disabled} = props;
  const {
    sizing: {scale300, scale500},
  } = $theme;
  switch (props.$type) {
    case ICON.clearAll:
      return {
        marginLeft: 'auto',
        cursor: $disabled ? 'not-allowed' : 'pointer',
      };
    case ICON.select:
      return {
        marginRight: scale500,
      };
    case ICON.selected:
      return {
        paddingRight: scale300,
      };
    case ICON.loop:
      return {
        paddingLeft: scale300,
      };
    default:
      return {};
  }
});

export const DropDown = styled(MenuList, ({$theme, $isOpen, $type}) => ({
  overflowY: 'scroll',
  display: !$isOpen ? 'none' : null,
  top: $type === TYPE.select ? $theme.sizing.scale600 : $theme.sizing.scale1200,
  width: `calc(100% - ${$theme.sizing.scale600})`,
  left: $theme.sizing.scale300,
  position: 'absolute',
  listStyle: 'none',
  borderRadius: $theme.sizing.scale300,
  boxShadow: $theme.lighting.shadow600,
}));

export const DropDownItem = styled(MenuListItem, ({$theme}) => ({
  // TODO(#185): revisit after Menu gets condensed styles
  lineHeight: $theme.sizing.scale600,
}));

export const Option = styled('div', props => {
  const {$selected, disabled, $theme} = props;
  const {
    colors: {mono700, primary400},
  } = $theme;
  const padding = $selected
    ? {
        paddingRight: '0px',
        paddingLeft: '0px',
      }
    : {
        paddingRight: '18px',
        paddingLeft: '18px',
      };
  return {
    ':hover': {
      cursor: disabled ? 'not-allowed' : 'pointer',
    },
    color: disabled ? mono700 : $selected ? primary400 : null,
    ...padding,
  };
});

export const SelectSpinner = styled('div', () => {
  return {
    paddingLeft: '50%',
  };
});

export const SelectionContainer = styled('div', props => {
  return {
    lineHeight: '12px',
    display: 'flex',
    justifyContent: 'center',
  };
});
