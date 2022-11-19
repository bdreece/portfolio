import type { FC, MouseEventHandler } from 'react';

export type WindowTitleProps = {
  title: JSX.Element | string;
  onMinimize?: MouseEventHandler<HTMLButtonElement>;
  onMaximize?: MouseEventHandler<HTMLButtonElement>;
  onClose?: MouseEventHandler<HTMLButtonElement>;
};

const WindowTitle: FC<WindowTitleProps> = ({
  title,
  onMinimize,
  onMaximize,
  onClose,
}) => (
  <section className='title-bar'>
    <div className='title-bar-text'>{title}</div>
    <div className='title-bar-controls'>
      <button
        aria-label='Minimize'
        onClick={onMinimize}
      />
      <button
        aria-label='Maximize'
        onClick={onMaximize}
      />
      <button
        aria-label='Close'
        onClick={onClose}
      />
    </div>
  </section>
);

export default WindowTitle;
