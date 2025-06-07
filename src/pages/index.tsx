import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly'

import Layout from '@theme/Layout';
import Heading from '@theme/Heading';


import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Notification from '@site/src/components/Notification';
import {isMobile, setClipBoardText} from '@site/src/utils/functions';

import React, {JSX, useState} from 'react';

import styles from './index.module.css';

// @ts-ignore
import github from '@site/static/img/icons/github.png';
// @ts-ignore
import email from '@site/static/img/icons/mail.png';
// @ts-ignore
import favicon from '@site/static/img/favicon.png';

type HomepageHeaderProps = {
    isMobileDevice: boolean
}

function HomepageHeader({isMobileDevice}: HomepageHeaderProps) {
    const [mailShow, setMailShow] = useState<boolean>(false)
    const mailCopySuccess = (): void => {
        setMailShow(true)
        if (!mailShow) {
            setTimeout(() => {
                setMailShow(false)
            }, 4000)
        }
    }
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx(styles.heroBanner)}>
            <div className={clsx(styles.heroTextContainer)}>
                <Box sx={{ display: 'flex' }}>
                    <Box m="auto">
                        <Avatar
                            alt="qscbm187531"
                            src={favicon}
                            sx={{ width: 150, height: 150, m: 2 }}
                        />
                    </Box>
                </Box>

                <div className={styles.heroTextArea}>
                    <Heading as="h1" className="hero__title">
                        {siteConfig.title}
                    </Heading>
                    <p className="hero__subtitle" style={{margin: "0"}}>{siteConfig.tagline}</p>
                    <p className="hero__subtitle" style={{fontSize: "18px", margin: "0"}}>A postive person</p>
                </div>
                <div className={styles.navLinkIconArea}>
                    <ContactMeBtn
                        title="github"
                        src={github}
                        link="https://github.com/mcchampions"
                    />
                    <ContactMeBtn
                        title="emial"
                        src={email}
                        link="qscbm187531@outlook.com"
                        isCopyBtn
                        copySuccess={mailCopySuccess}
                    />
                </div>
                <Notification
                    show={mailShow}
                    title="邮箱已复制到剪切板"
                    changeShow={setMailShow}
                />
            </div>
        </header>
    );
}

export default function Home() {

    const {siteConfig} = useDocusaurusContext();

    return (<BrowserOnly fallback={undefined}>
        {() => {
            const isMobileDevice: boolean = isMobile()
            return (
                <Layout
                    title={`Hello from ${siteConfig.title}`}
                    description="Description will go into a meta tag in <head />">
                    <HomepageHeader isMobileDevice={isMobileDevice}/>
                    <main>
                        <HomepageFeatures/>
                    </main>
                </Layout>
            );
        }}
    </BrowserOnly>)
}

function ContactMeBtn({
                          title,
                          src,
                          link,
                          isCopyBtn = false,
                          copySuccess
                      }: ContactMeBtnProps): JSX.Element {
    if (isCopyBtn && typeof link !== 'undefined') {
        return (
            <div
                className={styles.navLink}
                onClick={() => {
                    setClipBoardText(link)
                    if (copySuccess) {
                        copySuccess()
                    }
                }}
            >
                <div className={styles.imageWrapper}>
                    <img
                        src={src}
                        alt={title}
                        title={title}
                    />
                </div>
            </div>
        )
    }
    return (
        <Link
            className={styles.navLink}
            to={link}
            href="_blank"
        >
            <div className={styles.imageWrapper}>
                <img
                    src={src}
                    alt={title}
                    title={title}
                />
            </div>
        </Link>
    )
}

type ContactMeBtnProps = {
    readonly title?: string
    readonly src: any
    link?: string
    isCopyBtn?: boolean
    copySuccess?: () => void
}