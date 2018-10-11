import React from 'react';

import Layout from '../../components/layout';
const img1 = require('../../images/xiamen/eat/1.jpg');
const img2 = require('../../images/xiamen/eat/2.jpg');
const img3 = require('../../images/xiamen/eat/3.jpg');
const img4 = require('../../images/xiamen/eat/4.jpg');
const img5 = require('../../images/xiamen/eat/5.jpg');
const img6 = require('../../images/xiamen/eat/6.jpg');
const img7 = require('../../images/xiamen/eat/7.jpg');
const img8 = require('../../images/xiamen/eat/8.jpg');
const img9 = require('../../images/xiamen/eat/9.jpg');
const img10 = require('../../images/xiamen/eat/10.jpg');

const EatPage = () => (
  <Layout
    seo={{
      title: '旅游-厦门',
      description: '旅游-厦门',
      keywords: '旅游 厦门',
    }}
    nav={{ title: '有关吃什么', back: '/xiamen/' }}
  >
    <div className="content">
      <nav
        style={{
          position: 'fixed',
          left: 0,
          width: '100%',
          top: '60px',
          lineHeight: 2,
          background: '#f2f2f2',
          borderBottom: '1px solid #ccc',
        }}
      >
        <ol style={{ margin: '0 16px', fontSize: '13px' }}>
          <li style={{ display: 'inline-block', margin: '0 8px' }}>
            <a href="#cnt_1">#沙茶面</a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 8px' }}>
            <a href="#cnt_2">#海鲜大餐</a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 8px' }}>
            <a href="#cnt_3">#海蛎煎</a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 8px' }}>
            <a href="#cnt_4">#土笋冻</a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 8px' }}>
            <a href="#cnt_5">#叶氏麻糍</a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 8px' }}>
            <a href="#cnt_6">#烧仙草</a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 8px' }}>
            <a href="#cnt_7">#花生汤</a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 8px' }}>
            <a href="#cnt_8">#炸五香</a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 8px' }}>
            <a href="#cnt_9">#烧肉粽</a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 8px' }}>
            <a href="#cnt_10">#鱼丸汤</a>
          </li>
        </ol>
      </nav>
      <ul>
        <li id="cnt_1" style={{ paddingTop: '56px' }}>
          <h4>沙茶面</h4>
          <img alt="img" style={{ display: 'block' }} src={img1} />
          <p>
            沙茶面，是厦门人最常见最平常的小吃了。无论清晨或黄昏，随处可见卖沙茶面的小店。沙茶面的妙处，是汤头，再加上自选加料：瘦肉、鱼丸、鱿鱼等琳琅满目二三十种，绝对内容丰富，风味独特，值得一试。在色泽金黄、味香鲜辣的沙茶面中大快朵颐的享受鹭岛美食，痛快淋漓的品味厦门生活。
          </p>
          <small>
            推荐
            <ol>
              <li>店名：乌糖沙茶面；地址：思明区民族路60号。</li>
              <li>店名：大中沙茶面；地址：思明区中山路49号(和凤街口)。</li>
            </ol>
          </small>
        </li>
        <li id="cnt_2" style={{ paddingTop: '56px' }}>
          <h4>海鲜大餐</h4>
          <img alt="img" style={{ display: 'block' }} src={img2} />
          <p>
            来厦门当然要吃海鲜，满街的海鲜大排档让人口水直流。海蟹、花蛤、鲍鱼、鱿鱼等，原汁原味的海鲜配上厦门独特的酱油水烹调工艺，那滋味真让人回味无穷。厦门吃海鲜的地方众多，但吃之前必须要问清楚价格，货比三家，切莫遇上宰客的商家。
          </p>
          <small>
            推荐
            <ol>
              <li>店名：小眼镜大排档；地址：思明区湖滨中路7号。</li>
              <li>店名：开元141大排档；地址：思明区开元路141-154号。</li>
            </ol>
          </small>
        </li>
        <li id="cnt_3" style={{ paddingTop: '56px' }}>
          <h4>海蛎煎</h4>
          <img alt="img" style={{ display: 'block' }} src={img3} />
          <p>
            用闽南话讲是“蚵仔煎”，是闽南地区特有的小吃。香鲜细腻、美味可口。海蛎味道有点腥，如何去腥并保持鲜味，海蛎的新鲜程度至关重要。通常，为了去除腥味，有些厨师会在海蛎里拌入鸡蛋。海蛎煎的做法是把蛋围在海蛎煎的周围，保持了海蛎的原味，味道甚是鲜美。
          </p>
          <small>
            推荐
            <ol>
              <li>店名：康家龙头海蛎煎；地址：思明区龙头路189号。</li>
              <li>店名：莲欢海蛎煎；地址：思明区中山路局口街局口横巷4号。</li>
            </ol>
          </small>
        </li>
        <li id="cnt_4" style={{ paddingTop: '56px' }}>
          <h4>土笋冻</h4>
          <img alt="img" style={{ display: 'block' }} src={img4} />
          <p>
            特色食品，是一种由特有产品加工而成的冻品，质地柔韧脆嫩，味道甘冽鲜美，有点Q,吃的时候浇上调味的酱油醋、芝麻酱、黄芥末和厦门的蒜茸辣酱，配以酸甜萝卜、香菜，就成了色香味俱佳的风味小吃，吃起来爽口有味。
          </p>
          <small>
            推荐
            <ol>
              <li>店名：天河西门土笋冻；地址：思明区斗西路33号。</li>
              <li>
                店名：老二市口土笋冻(幸福路店)；地址：思明区厦禾路386号之5店。
              </li>
            </ol>
          </small>
        </li>
        <li id="cnt_5" style={{ paddingTop: '56px' }}>
          <h4>叶氏麻糍</h4>
          <img alt="img" style={{ display: 'block' }} src={img5} />
          <p>
            叶氏麻糍是鼓浪屿很有名气的店，据说是“岛上唯一可以占道经营的小摊”。叶氏麻糍的馅有三种，甜而不腻，淡淡的香味，温润的味道。师傅在现场即卖即做，动作迅速，熟练的手法令人眼花缭乱。包麻糍的人手要保持干净，销售时收钱用筷子夹或由助手收找，以保食品卫生。
          </p>
          <small>
            推荐
            <ol>
              <li>店名：叶氏麻糍 　地址：鼓浪屿龙头路三优街街口流动摊车。</li>
              <li>
                店名：叶氏麻糍
                地址：中山路局口街入口对面的工商银行门口的流动摊车。
              </li>
            </ol>
          </small>
        </li>
        <li id="cnt_6" style={{ paddingTop: '56px' }}>
          <h4>烧仙草</h4>
          <img alt="img" style={{ display: 'block' }} src={img6} />
          <p>
            烧仙草绝对是夏日的美味冰品，同时有去干降火的功效，备受人们的青睐。切成小方块的仙草，加入已预先炒熟或煮熟之去皮花生、芋圆，红豆，薏米等材料，加糖搅拌后食用即可，是炎热消暑的圣品。炎炎夏日，来杯烧仙草吧。
          </p>
          <small>
            推荐
            <ol>
              <li>店名：八婆婆烧仙草地址：思明区龙头路144号。</li>
              <li>>店名：仙草南路地址：思明区思明南路158号安定广场152号之3</li>
            </ol>
          </small>
        </li>
        <li id="cnt_7" style={{ paddingTop: '56px' }}>
          <h4>花生汤</h4>
          <img alt="img" style={{ display: 'block' }} src={img7} />
          <p>
            花生汤是福建沿海地区风味独特的甜汤佳点，清甜爽口，滋补润肺。厦门的黄则和花生汤店顶着百年老字号的名气，能将花生汤弄得汤色乳白，清鲜甘甜；花生片酥烂而不碎，入口即化，让人觉得甜到心头。同时可以搭配咸点吃，味道很赞。
          </p>
          <small>
            推荐
            <ol>
              <li>
                店名：黄则和花生汤店(中山路店)；地址：思明区中山路22-24号。
              </li>
            </ol>
          </small>
        </li>
        <li id="cnt_8" style={{ paddingTop: '56px' }}>
          <h4>炸五香</h4>
          <img alt="img" style={{ display: 'block' }} src={img8} />
          <p>
            炸五香是有特殊风味的厦门名点，佐餐下酒均宜。炸五香既是小酌佳点，亦是佐餐食品下酒好菜。其味香酥可口，制作较为简便，在各大餐厅、酒楼或街头小摊也随处可见。食用时切成小块，蘸以各色调料，入口香、酥、脆，妙不可言。
          </p>
          <small>
            推荐
            <ol>
              <li>店名：好清香大酒楼；地址：思明区湖滨中路85号。</li>
              <li>店名：佳味再添小吃店；地址：思明区大同路49号。</li>
            </ol>
          </small>
        </li>
        <li id="cnt_9" style={{ paddingTop: '56px' }}>
          <h4>烧肉粽</h4>
          <img alt="img" style={{ display: 'block' }} src={img9} />
          <p>
            厦门的烧肉粽历史悠久，具有香甜嫩滑，油润不腻，精工细作等特点。色泽红黄闪亮，多以香菇、虾米、栗子、猪肉、糯米为原料，包好后的粽子要等开水煮沸时鲜粽才下锅烧，吃时配上沙酱、蒜蓉、红辣酱、调味酱油，味道可口非常。需提醒一点，肉粽要趁热吃，否则味道大减，因此烧肉粽，名副其实。
          </p>
          <small>
            推荐
            <ol>
              <li>店名：1980烧肉粽；地址：思明区中山路353号。</li>
              <li>
                店名：好清香大酒楼；地址：思明区中山路1号东海大厦酒店6楼。
              </li>
            </ol>
          </small>
        </li>
        <li id="cnt_10" style={{ paddingTop: '56px' }}>
          <h4>鱼丸汤</h4>
          <img alt="img" style={{ display: 'block' }} src={img10} />
          <p>
            厦门鱼丸汤以草鱼为主料，油菜、胡萝卜、芹菜为辅料，姜、盐、白糖、胡椒粉、淀粉、鸡精、香油为调料，色淡鲜香，值得推荐。
          </p>
          <small>
            推荐
            <ol>
              <li>店名：永丰鱼丸；地址：思明区开元路143号。</li>
              <li>店名：原巷口鱼丸店(龙头路店)；地址：思明区龙头路62号。</li>
            </ol>
          </small>
        </li>
      </ul>
    </div>
  </Layout>
);

export default EatPage;
