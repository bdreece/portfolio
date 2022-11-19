import type { FC } from 'react';
import type { ChildrenProps } from 'types/children';

import Desktop from './Desktop';
import Taskbar from './Taskbar';
import Window from './Window';

export { default as Desktop } from './Desktop';
export { default as Taskbar } from './Taskbar';
export { default as Window } from './Window';
export { default as WindowTitle } from './WindowTitle';
export type LayoutProps = ChildrenProps;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Desktop>
      <>
        <Window title='bdreece.dev'>{children}</Window>
        <Taskbar />
      </>
    </Desktop>
  );
};

export default Layout;
