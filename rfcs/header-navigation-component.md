# Header Navigation Component

## Usage

### Basic usage

```javascript
import * as React from 'react';
import {HeaderNavigation, NavigationItem, NavigationList} from 'baseui/header-navigation';
import {Button, KIND} from 'baseui/button';

export default () => <HeaderNavigation>
  <NavigationList align="left">
    <NavigationItem><span>Uber</span></NavigationItem>
    <NavigationItem><a href="/a">Link One</a></NavigationItem>
    <NavigationItem><a href="/b">Link Two</a></NavigationItem>
  </NavigationList>
  <NavigationList align="right">
    <NavigationItem><Button onClick={() => console.log('clicked')} kind={KIND.primary}>Get started</Button></NavigationItem>
  </NavigationList>
</HeaderNavigation>;
```

### Advanced usage

```javascript
import * as React from 'react';
import {HeaderNavigation, NavigationItem, NavigationList} from 'baseui/header-navigation';
import {Button, KIND} from 'baseui/button';
import {StatefulMenu as Menu} from 'baseui/menu';
const ITEMS = [{label: 'menu item 1'}, {label: 'menu item 2'}];

export default (props) => <HeaderNavigation
  overrides={{
   Root: {
     style: {
        justifyContent: 'space-between'
     }
   }
  }}>
  <NavigationList align="left">
      <NavigationItem>
          <span>Menu</span>
          {props.isExpandMenu && <Menu items={ITEMS} />}
      </NavigationItem>
  </NavigationList>
  <NavigationList align="center">
    <NavigationItem><a href="/a">Link One</a></NavigationItem>
    <NavigationItem><a href="/b">Link Two</a></NavigationItem>
  </NavigationList>
</HeaderNavigation>;
```

## Exports

* `HeaderNavigation`
* `NavigationItem`
* `NavigationList`
* `StyledRoot`
* `ALIGN`

## `HeaderNavigation` API

* `children: React$Node` - Required.
  All the children of header navigation. It accepts any components, but it is useful to use `NavigationList` and `NavigationItem` to align and follow style guides.
  
## `NavigationList` API

* `align: ALIGN.right | ALIGN.left | ALIGN.center` - Optional.
  Alignment of elements inside of navigation list
* `children: React$Node` - Required.
  All the children of NavigationList.  
  
## `NavigationItem` API

* `children: React$Node` - Required.
  All the children of NavigationItem.

## Accessibility

Use `nav` tag for root element.
Use `role="navigation"`
