import type { FC } from 'react';
import Navbar from '../components/layout/Navbar';

const Resume: FC = () => (
  <section>
    <Navbar title='Resume' />
    <iframe
      src='resume.pdf'
      width={600}
      height={800}
    />
  </section>
);

export default Resume;
