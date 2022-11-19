import type { FC } from 'react';
import type { ChildrenProps } from 'types/children';

import styles from '../../styles/Desktop.module.scss';

export type DesktopProps = ChildrenProps;

const Desktop: FC<DesktopProps> = ({ children }) => (
  <main className={styles.desktop}>{children}</main>
);

export default Desktop;
