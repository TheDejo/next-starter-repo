import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import constants from '@/config/constants';
import PageHead from '@/components/PageHead';

const { SCREEN_TEXTS } = constants;
export default function Home() {
    return (
        <>
            <PageHead title="Index" />
            <div>{SCREEN_TEXTS.test}</div>
        </>
    );
}
