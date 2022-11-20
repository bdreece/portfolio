import type { DragEventHandler, DragEvent, FC } from 'react';
import type { ChildrenProps } from 'types/children';
import type { WindowTitleProps } from './WindowTitle';

import { useEffect, useState, useRef } from 'react';

import WindowTitle from './WindowTitle';
import styles from '../../styles/Window.module.scss';

export type WindowProps = ChildrenProps &
  Omit<WindowTitleProps, 'onMinimize' | 'onMaximize' | 'onClose'> & {
    debug?: boolean;
  };

export type WindowCoords = {
  x: number;
  y: number;
};

type DragHandlers = {
  onDragEnd: DragEventHandler<HTMLInputElement>;
  onDragStart: DragEventHandler<HTMLInputElement>;
};

type WindowSize = 'max' | 'var' | 'min';

type WindowVarSize = {
  width?: string;
  height?: string;
};

const getCoords = (e: DragEvent<HTMLInputElement>): WindowCoords => ({
  x: e.clientX,
  y: e.clientY,
});

const Window: FC<WindowProps> = ({ children, title, debug = false }) => {
  const windowRef = useRef<HTMLElement>(null);
  const [{ x, y }, setCoords] = useState<WindowCoords>({ x: 100, y: 50 });
  const [size, setSize] = useState<WindowSize>('var');
  const [varSize, setVarSize] = useState<WindowVarSize>({});

  useEffect(() => {
    if (size === 'var') {
      const oldVarSize: WindowVarSize = JSON.parse(
        sessionStorage.getItem('varSize') ??
          '{ "width": "800px", "height": "400px" }',
      );
      setVarSize(oldVarSize);
    } else {
      if (windowRef.current) {
        sessionStorage.setItem(
          'varSize',
          JSON.stringify({
            width: windowRef.current.clientWidth,
            height: windowRef.current.clientHeight,
          }),
        );
      }
      setVarSize({});
    }
  }, [size]);

  const handlers: DragHandlers = {
    onDragEnd: e => {
      const { x: startX, y: startY }: WindowCoords = JSON.parse(
        e.dataTransfer.getData('application/json'),
      );
      const currentCoords = getCoords(e);
      const { x: currentX, y: currentY } = currentCoords;

      const diffX = startX - currentX;
      const diffY = startY - currentY;

      if (debug) {
        console.dir({ startX, startY });
        console.dir({ currentX, currentY });
        console.dir({ diffX, diffY });
      }

      setCoords(({ x, y }) => ({
        x: x - diffX,
        y: y - diffY,
      }));
    },
    onDragStart: e => {
      const startCoords = getCoords(e);
      setSize('var');
      if (debug) {
        console.dir(startCoords);
      }
      // store original mouse coords
      e.dataTransfer.setData('application/json', JSON.stringify(startCoords));
    },
  };

  const sizeClass =
    size === 'max' ? styles.max : size === 'min' ? styles.min : '';

  const windowTitle: WindowTitleProps = {
    title,
    onMaximize: _ => {
      setSize(size => (size === 'max' ? 'var' : 'max'));
      setCoords({ x: 0, y: 0 });
    },
    onMinimize: _ => setSize('min'),
  };

  return (
    <article
      ref={windowRef}
      className={`window ${styles.window} ${sizeClass}`}
      style={{
        top: `${y}px`,
        left: `${x}px`,
        ...varSize,
      }}
      draggable={true}
      {...handlers}
    >
      <WindowTitle {...windowTitle} />
      <section className={`window-body ${styles.windowBody}`}>
        {children}
      </section>
    </article>
  );
};

export default Window;
