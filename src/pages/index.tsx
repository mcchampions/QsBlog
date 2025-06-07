import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Notification from '@site/src/components/Notification';
import {setClipBoardText} from '@site/src/utils/functions';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, {JSX, useState} from 'react';

// @ts-ignore
import github from '@site/static/img/icons/github.png';
// @ts-ignore
import email from '@site/static/img/icons/mail.png';
// @ts-ignore
import favicon from '@site/static/img/favicon.png';

function HomepageHeader() {
    const [show, setShow] = useState<boolean>(false)
    const copySuccess = (): void => {
        setShow(true)
        if (!show) {
            setTimeout(() => {
                setShow(false)
            }, 4000)
        }
    }
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx(styles.heroBanner)}>
            <div className={clsx(styles.heroTextContainer)}>
                <div className={styles.avatarArea}>
                    <img
                        src={favicon}
                        alt="qscbm187531"
                    />
                </div>

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
                        copySuccess={copySuccess}
                    />
                </div>
                <Notification
                    show={show}
                    title="已复制到剪切板"
                    changeShow={setShow}
                />
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
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