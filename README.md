# mutuus_member

mutuus member system vs mutuus teacher

## mutuus 会员系统数据说明



# 项目托管地址

> [项目托管地址](https://github.com/zqwai/mutuus_mem/)


# 全局参数 config.js

```js
const mutuusGlobleData = {
  // app地址
  baseURL: 'https://mutuus-men.firebaseapp.com',
  // api 地址
  apiUrl: 'https://mutuus-men.firebaseapp.com/api',
  //  项目名称
  appName: 'mutuus 体育运动公园',
  shareImageUrl: '../static/images/share/share.png',
  // app 密钥
  appId: '',
  // 数据库
  dataBaseName: '',
  dataBasePassword: '',
  // 待定
}
```

# mutuus小程序模版及data配置

## 主框架

> 模版路径：pages/index/index
> 模版名：index

```js
data: {

  /*  接口 apiUrl + param
  *   param: userInfo
  */
  userInfo: {
    // 用户 基本信息 没有可忽略
    id: '', //用户 id
    userName: '', //用户 姓名
    userBirthday: '', //用户 生日
    userPhone: '', //用户 手机  **判断是否做过身份绑定，若无则调用绑定页面
    userIdentityId: '', //用户 身份证
    children: [ //孩子 基本信息 可多个
      {
        id: '', //孩子 id
        identityId: '', //孩子 身份证
        name: '', //孩子 姓名
        birthday: '', //孩子 生日
        height: '', //孩子 身高
        qrcodeNum: '', //孩子 编码
        qrcodePic: '' //孩子 编码图
      },
    ],
  }
}
```

## 关联绑定 信息
> 模版路径：basics/bind/home/home
> 模版名：home

```js
  /*  接口 apiUrl + param
  *   param: userInfo
  *   : get, post
  *   流程是否修改
  */
data: {
  userInfo: {//  参数同上提取
    id: '', //用户 id
    userPhone: '', //用户 手机  **判断是否做过身份绑定，若无则调用绑定页面
    children: [ //孩子 基本信息 可多个
      {
        name: '', //孩子 姓名
        birthday: '', //孩子 生日
      },
    ],
  },
  // 图片验证码
  inputCode: '',
  inputImage: '',
}
```

## 关联绑定 手机验证
> 模版路径：basics/bind/home/home
> 模版名：home

```js
  /*  接口 apiUrl + param
  *   param: bannerList
  */
data: {
  // 手机验证码
  userPhone: '',
  captcha: '',
}
```

## 首页

> 模版路径：pages/basics/home/home
> 模版名：home

```js
data: {
  /*  接口 apiUrl + param
  *   param: bannerList
  */
  // 焦点图 有几组调几组
  bannerList: [
    {
      id: '0',
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
    },
  ],
}
```

## 体测数据展示

> 模版路径：pages/basics/bodylists/bodylists
> 模版名：bodylists

```js

// 页面调用data部分  旭日图与折线图 数据再定
data: {
  /*  接口 apiUrl + param
  *   param: posture, bodymeasurements, potentiality
  */

  // 体态综合分
  posture: {
    url: '',
    bg: '../../../static/images/home/posturebg.png',  //模块背景图
    num: '73.5',
  },
  // 身体素质综合评级
  bodymeasurements: {
    title: '身体素质综合评级',
    grade: 'B-',
    introduction: '',
    btnText:'点击查看完整评级',
    currentdetil: {
      title: '目前完成的测试总评数：',
      num: '29',
    },
    collectiondetil: {
      title: '采集数据被应用于综合评级的测试数为：',
      num: '21',
    },
  },
  // 当前潜力评估
  potentiality: {
    title: '当前潜力评估',
    introduction: '根据孩子的上课表现进行评测，主要从学习能力坚毅力两大维度进行当前的潜力评估。',
    btnText:'点击可查看详细评价',
    study: {
      num: '51',
      title: '学习能力',
    },
    tenacity: {
      num: '68',
      title: '坚韧力',
    }
  },
}
```

## 详细评级展示

> 模版路径：pages/basics/bodydetil/bodydetil
> 模版名：bodydetil

```js

// 页面调用data部分  旭日图与折线图 数据再定
data: {
  /*  接口 apiUrl + param
  *   param: physique, ability
  */

    // 各身体体质数据详细评级
    physique:{
      title: '各身体体质数据详细评级',
      updateTime: '2020.04.20',
      physiqueDetil: [
        {
          id: '0',
          title: '敏捷',
          grade: 'S-',
        },
        {
          id: '1',
          title: '协调',
          grade: 'B-',
        },
        {
          id: '2',
          title: '柔韧',
          grade: 'A-',
        },
        {
          id: '3',
          title: '力量',
          grade: 'C+',
        },
        {
          id: '4',
          title: '耐力',
          grade: 'D-',
        },
      ],
    },

    ability:[
        {
          id: '0',
          title: '肢体协调平衡能力',
          introduction: '肢体的协调和平衡是孩子极为关键的核心身体素质，任何动作的表现都离不开这项能力，而且这项能力越强的孩子，在学习运动技能（比如跳绳等）时，会有更高的学习效率。',
          grade: 'D-',
        },
        {
          id: '1',
          title: '肢体反应能力',
          introduction: '肢体的快速反应能力取决于神经反应速度、肢体协调性以及灵敏素质的综合评价，是体现孩子敏捷性的核心指标之一。大量的研究表明，通过提升肢体的快速应变，可以促进神经发育，促进思维发展。',
          grade: 'C-',
        },
        {
          id: '2',
          title: '跳跃潜力',
          introduction: '通过对孩子的下肢和核心的爆发力、肌力肌耐力、肢体协调性等能力的综合评测，评估孩子在跳跃类运动技能上的发展、成长潜力。该属性评价越高，未来在立定跳远、三级跳等考试项目上会有更强的运动表现。',
          grade: 'B+',
        },
        {
          id: '3',
          title: '投掷潜力',
          introduction: '通过对孩子的上肢和核心的力量、协调性进行综合评测，预估孩子在投掷类项目上的运动能力发展潜力。这项评测的结果越高，未来在投掷实心球、铅球、标枪等考试项目上会有更佳的运动表现和成绩。',
          grade: 'B-',
        },
        {
          id: '4',
          title: '攀爬潜力',
          introduction: '攀爬能力是一项重要的生存性技能，而且非常考验全身的运动能力和身体素质。我们通过对力量、耐力、协调的全面考评，判断孩子在攀爬方面的运动发展潜力。',
          grade: 'D-',
        },
        {
          id: '5',
          title: '短跑潜力',
          introduction: '短跑潜力取决于孩子的爆发力、爆发力产生的加速度，能达到的最大速度，以及维持最大速度的能力等因素决定。短跑能力是孩子综合运动能力的一个集中表现，同时也是一项极为重要的生存技能。',
          grade: 'E-',
        },
        {
          id: '6',
          title: '中长跑潜力',
          introduction: '根据孩子的心肺功能、耐力、协调性、速度等素质进行综合评价，评估孩子在中长跑项目上的潜力。中长跑项目在未来的体育考试中无疑会占据重要地位，这方面潜能的提升，会在未来的考试中占据优势，',
          grade: 'B-',
        },
        {
          id: '7',
          title: '心肺功能',
          introduction: '心肺功能是人体心脏泵血及肺部吸入氧气的能力，而这两者又直接影响全身器官及肌肉的活动，所以对身体的健康极其重要，是一切活动的关键生理基础。',
          grade: 'A+',
        },
        {
          id: '7',
          title: '肌肉能力',
          introduction: '通过对肌力、肌耐力、爆发力进行综合评估，全面评价孩子的肌肉能力。10岁以前并不建议进行专项力量训练，所以肌肉能力的评价会以年龄为分水岭，低年龄段主要评估肌肉能力的运动表现，高年龄段主要评估肌肉的力量表现。',
          grade: 'B+',
        },
        {
          id: '7',
          title: '抗疲劳能力',
          introduction: '通过心肺功能、肌耐力、速度耐力、肌肉抗疲劳能力等进行综合评估。抗疲劳能力越强，孩子会有更强的体能储备和精力来应对学习和生活，另外，抗疲劳能力也会间接影响神经系统的抗压、抗挫折能力，给予孩子更强的承受能力。',
          grade: 'B-',
        },
      ],
}
```

## 潜力评价展示

> 模版路径：pages/basics/potentialdetil/potentialdetil
> 模版名：potentialdetil

```js

// 页面调用data部分  旭日图与折线图 数据再定
data: {
  /*  接口 apiUrl + param
  *   param: potential
  */

    potential:{
      title: '当前潜力评价',
      updateTime: '2020.04.10',
      potentialCurrent: [
        {
          id: '0',
          title: '学习力',
          num: '51',
        },
        {
          id: '1',
          title: '协调',
          num: '32',
        },
      ],
      potentialExplanation: {
        title: '关于潜力评价的说明',
        introduction: `我们认为“潜力”并不是先天因素，而是可以在后天通过环境、行为的影响，进行动态改造的。在本页中的评价，我们仅仅<b>根据孩子在课程过程中表现出的客观特征为标准</b>，在量表工具下进行评测。如果孩子因情绪、日常习惯等原因没有表现出相应的特征，自然会影响到整体的评测，所以本页的数据仅做参考，但教练会根据孩子的评测进行针对性教学安排和设计。`,
      },
      potentialStudy: {
        title: '学习力维度',
        introduction: `学习力是指孩子在学习新知识、新技能时表现出的学习潜力，这个潜力关系到学习效率以及融会贯通的能力。下面的六维图是我们评估学习力的所有因素中最核心的六个素质。`,
      },
      potentialTenacity: {
        title: '坚韧力维度',
        introduction: `坚韧力是指孩子在学习和生活的过程中表现出的坚韧性，比如意志力、逆境商（挫折商）等等。学习力如果是发动机，坚韧力就是供能系统，是学习力持续输出的重要前提，是决定孩子未来成就的核心素质。`,
      },
      potentialAbility: [
        {
          id: '0',
          title: '自我驱动能力',
          introduction: `自我驱动是主动学习状态中最为重要的行为表征之一，我们通过观察孩子在有一定程度动机参与的前提下的自我驱使、不断尝试、克服困境、解决问题等方面的综合能力来评价自我驱动能力。`,
          grade: 'D-',
        },
        {
          id: '1',
          title: '抗挫折能力',
          introduction: `目前的孩子因为过度保护、过度表扬及奖励，往往缺乏应对逆境、挫折时应该保有的韧性。而抗压、抗挫折能力，是在应对未来不确定性时最为重要的能力，意志力、毅力等传统的品质，都属于抗挫折能力的子集。`,
          grade: 'c-',
        },
        {
          id: '2',
          title: '有效专注力',
          introduction: `影响学习效率的因素除了知识结构、领悟理解能力外，最重要的是有效专注力，因为只有在有效专注的时间内，才能获得最大的学习效能。我们评价有效专注，主要从观察孩子在专注过程中的状态和获得的结果这两大方面展开。`,
          grade: 'B+',
        },
        {
          id: '3',
          title: '思维表征',
          introduction: `授人予鱼不如授人予渔。所以相比单纯的知识和技能，我们更在意学习的方法和思维的模式。思维表征是用于描述孩子思维层次的一种方式，我们通过观察孩子表现出的高阶思维能力（归纳、抽象等），来对思维表征进行评测。`,
          grade: 'B-',
        },
      ]
    },

}
```

## 体态评估页

> 模版路径：pages/basics/posturedetil/posturedetil
> 模版名：posturedetil

```js

// 页面调用data部分  图表 数据再定
data: {
  /*  接口 apiUrl + param
  *   param: posture
  */
    posture: {
      title: '体态评测数据展示',
      updateTime: '2020.04.10',
      postureDetail: [
        {
          id: '0',
          title: '肩部',
          lists: [{
            id: '11',
            subTitle: '圆肩',
            text: '略微',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '12',
            subTitle: '高低肩',
            text: '略微',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '1',
          title: '颈部背部',
          lists: [{
            id: '21',
            subTitle: '颈前屈',
            text: '略微',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '22',
            subTitle: '驼背',
            text: '略微',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '2',
          title: '脊柱',
          lists: [{
            id: '31',
            subTitle: 'S型',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '32',
            subTitle: 'C型',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '3',
          title: '盆骨',
          lists: [{
            id: '41',
            subTitle: '盆骨前倾',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '42',
            subTitle: '盆骨后倾',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        },  
        {
          id: '4',
          title: '腿部',
          lists: [{
            id: '51',
            subTitle: 'O型腿',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '52',
            subTitle: 'X型腿',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '5',
          title: '腿部',
          lists: [{
            id: '61',
            subTitle: 'XO型腿',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '62',
            subTitle: '长短腿',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '6',
          title: '足部',
          lists: [{
            id: '71',
            subTitle: '平足',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '72',
            subTitle: '高弓足',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '7',
          title: '足部',
          lists: [{
            id: '81',
            subTitle: '内八字',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '82',
            subTitle: '外八字',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
      ],
    },

}
```






