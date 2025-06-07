import { clsx } from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Player',
    Svg: require('@site/static/svg/player.svg').default,
    description: (
      <>
          一位游戏热爱者, 爱好游玩: Minecraft, CS2, 钢铁雄心, 王国风云, 群星, 维多利亚, 欧陆风云,
          监狱建筑师, 4399小游戏, 幻兽帕鲁, 荒野大镖客, GTA5 以及其他一系列游戏.
      </>
    ),
  },
  {
    title: 'Coder',
    Svg: require('@site/static/svg/coder.svg').default,
    description: (
      <>
          一位编程爱好者, 主要使用 Java 语言, 偶尔还使用 C/C++, JavaScript 等语言.
          不擅长前端开发, 主要研发 Minecraft Java 的相关内容, 涉猎领域较广.
          平时也喜欢捣鼓一些其他的数码产品.
      </>
    ),
  },
  {
    title: 'Student',
    Svg: require('@site/static/svg/student.svg').default,
    description: (
      <>
          一位学生, 成绩勉强说得过去, 喜欢钻研理科问题, 自认为是一位比较经典的理科生.
          在学习之外也喜欢了解历史知识, 经常在B站历史区冲浪.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
