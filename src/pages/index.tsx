import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly'

import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import CustomAvatar from '@site/src/components/CustomAvatar';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {setClipBoardText} from '@site/src/utils/functions';

import React, {JSX} from 'react';

import {message} from 'antd';

import styles from './index.module.css';

// @ts-ignore
import github from '@site/static/img/icons/github.png';
// @ts-ignore
import email from '@site/static/img/icons/mail.png';
// @ts-ignore
import qq from '@site/static/img/icons/qq.png';
// @ts-ignore
import bilibili from '@site/static/img/icons/bilibili.png';
// @ts-ignore
import favicon from '@site/static/img/favicon.png';

function HomepageHeader(HomepageHeaderProps) {
    const [messageApi, contextHolder] = message.useMessage();
    const {siteConfig} = useDocusaurusContext();

    const copySuccess = (message: string) => {
        messageApi.open({
            type: 'success',
            content: message,
        });
    };

    const mailCopySuccess = (): void => {
        copySuccess('邮箱已复制成功');
    }
    const qqCopySuccess = (): void => {
        copySuccess('QQ号已复制成功');
    }

    return (
        <header className={clsx(styles.heroBanner)}>
            {contextHolder}
            <div className={clsx(styles.heroTextContainer)}>
                <CustomAvatar
                    alt="qscbm187531"
                    src={favicon}
                    sx={{width: 166, height: 166, m: 2}}
                />

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
                    <ContactMeBtn
                        title="qq"
                        src={qq}
                        link="1309635304"
                        isCopyBtn
                        copySuccess={qqCopySuccess}
                    />
                    <ContactMeBtn
                        title="哔哩哔哩"
                        src={bilibili}
                        link="https://space.bilibili.com/65959464"
                    />
                </div>
            </div>
        </header>
    );
}

export default function Home() {

    const {siteConfig} = useDocusaurusContext();

    return (<BrowserOnly fallback={undefined}>
        {() => {
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