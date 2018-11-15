# Header Navigation Component

## Usage

### Basic usage

```javascript
import * as React from 'react';
import {HeaderNavigation} from 'baseui/header-navigation';
import {Button, KIND} from 'baseui/button';

export default () => <HeaderNavigation homeElement={<span>Uber</span>}>
  <a href="/a">Link One</a>
  <a href="/b">Link Two</a>
  <Button onClick={() => console.log('clicked')} kind={KIND.primary}>Get started</Button>
</HeaderNavigation>;
```

### Advanced usage

```javascript
import * as React from 'react';
import {HeaderNavigation} from 'baseui/header-navigation';
import {Button, KIND} from 'baseui/button';
import {StatefulMenu as Menu} from 'baseui/menu';
const ITEMS = [{label: 'menu item 1'}, {label: 'menu item 2'}];

export default () => <HeaderNavigation homeElement={<Menu items={ITEMS} />}
  overrides={{
   Root: {
     style: {
        justifyContent: 'space-between'
     }
   }
  }}>
  <a href="/a">Link One</a>
  <a href="/b">Link Two</a>
</HeaderNavigation>;
```

## Exports

* `HeaderNavigation`
* `StyledRoot`

## `HeaderNavigation` API

* `homeElement: React$Node` - Optional
  If present, is shown left docked by default styles.
* `children: React$Node` - Required.
  All the children (except `homeElement`) of header navigation. By default docked to the right side.

## Accessibility

Use `nav` tag for root element.
Use `role="navigation"`
