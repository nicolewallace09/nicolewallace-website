import Head from 'next/head';
import ContainerBlock from '../components/ContainerBlock';
// import Homepage from '../components/Homepage';
// css for page
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <ContainerBlock
    title="Manu Arora - Developer, Writer, Creator"
    description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    > 
    {/* <Homepage/> */}
    </ContainerBlock>
  )
}
