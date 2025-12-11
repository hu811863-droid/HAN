import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'th' | 'zh' | 'vi';

export interface ShapeNames {
  Almond: string;
  Round: string;
  Monolid: string;
  Hooded: string;
  Downturned: string;
  Upturned: string;
  "Wide-set": string;
  "Close-set": string;
  "Deep-set": string;
}

interface Translations {
  nav: {
    finder: string;
    shapes: string;
    faq: string;
  };
  hero: {
    title: string;
    subtitle: string;
    desc: string;
    upload: string;
    ready: string;
    analyze: string;
    analyzing: string;
    privacy: string;
    cameraTip: string;
    change: string;
    remove: string;
    error: string;
    tryAgain: string;
  };
  info: {
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
    whyMatters: string;
    whyDesc: string;
    features: {
      makeup: { title: string; desc: string; };
      frames: { title: string; desc: string; };
      confidence: { title: string; desc: string; };
    };
  };
  results: {
    analysisResult: string;
    confidence: string;
    scanAnother: string;
    why: string;
    features: string;
    frames: string;
    styling: string;
    noImage: string;
    match: string;
  };
  shapeNames: ShapeNames;
  shapesList: {
    title: string;
    subtitle: string;
    items: Record<string, { description: string; match: string }>;
  };
  faqSection: {
    title: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    rights: string;
    links: {
      home: string;
      shapes: string;
      faq: string;
      privacy: string;
    }
  };
  privacyPolicy: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    noRetentionTitle: string;
    noRetentionDesc: string;
    introTitle: string;
    introDesc: string;
    processingTitle: string;
    processingDesc: string;
    logsTitle: string;
    logsDesc: string;
    cookiesTitle: string;
    cookiesDesc: string;
    dartTitle: string;
    dartDesc: string;
    partnersTitle: string;
    partnersDesc: string;
    thirdPartyTitle: string;
    thirdPartyDesc: string;
    ccpaTitle: string;
    ccpaDesc: string;
    gdprTitle: string;
    gdprDesc: string;
    childrenTitle: string;
    childrenDesc: string;
    linksTitle: string;
    linksDesc: string;
    changesTitle: string;
    changesDesc: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: { finder: "Eye Shape Finder", shapes: "Eye Shapes", faq: "FAQ" },
    hero: {
      title: "AI Eye Shape Finder",
      subtitle: "What Is My Eye Shape?",
      desc: "Instantly identify your eye shape with AI. Get personalized makeup tips & eyewear recommendations.",
      upload: "Upload photo...",
      ready: "Ready to analyze",
      analyze: "Analyze",
      analyzing: "Analyzing...",
      privacy: "100% Private. Photos are never stored.",
      cameraTip: "Make sure your eyes are clearly visible",
      change: "Change Photo",
      remove: "Remove",
      error: "Please upload a valid image file.",
      tryAgain: "Try Again"
    },
    info: {
      ctaTitle: "Ready To Find Your Eye Shape?",
      ctaDesc: "Stop guessing. Instantly identify your eye shape in seconds with AI.",
      ctaButton: "Reveal My Shape",
      whyMatters: "Why It Matters",
      whyDesc: "Your eye shape is the blueprint for your style. Unlock personalized makeup and eyewear potential.",
      features: {
        makeup: { title: "Master Your Makeup", desc: "Learn the exact angles and techniques to make your specific eye shape pop." },
        frames: { title: "Find Your Frames", desc: "Discover glasses that balance your brow bone and highlight your best features." },
        confidence: { title: "Boost Confidence", desc: "Embrace your unique look with architectural styling tips designed just for you." }
      }
    },
    results: {
      analysisResult: "Analysis Result",
      confidence: "Confidence",
      scanAnother: "Scan Another",
      why: "Why This Shape?",
      features: "Key Features",
      frames: "Recommended Frames",
      styling: "Styling Strategy",
      noImage: "Image not saved",
      match: "Match"
    },
    shapeNames: {
      Almond: "Almond",
      Round: "Round",
      Monolid: "Monolid",
      Hooded: "Hooded",
      Downturned: "Downturned",
      Upturned: "Upturned",
      "Wide-set": "Wide-set",
      "Close-set": "Close-set",
      "Deep-set": "Deep-set"
    },
    shapesList: {
      title: "Eye Shape Library: Which One Am I?",
      subtitle: "Explore the traits that define different eye shapes. Find your unique look.",
      items: {
        Almond: { description: "The versatile shape. Oval with slightly pointed ends.", match: "Balanced & Classic" },
        Round: { description: "Large and open. Whites clearly visible around the iris.", match: "Bright & Youthful" },
        Upturned: { description: "Outer corners lift higher than inner corners.", match: "Feline & Lifted" },
        Downturned: { description: "Outer corners dip slightly lower than inner corners.", match: "Soulful & Vintage" },
        "Wide-set": { description: "Distance between eyes is greater than one eye width.", match: "Exotic & Broad" },
        "Close-set": { description: "Distance between eyes is less than one eye width.", match: "Intense & Focused" },
        Monolid: { description: "Smooth surface with no visible crease on the lid.", match: "Sleek & Modern" },
        Hooded: { description: "A skin fold obscures the crease, making the lid look smaller.", match: "Deep & Mysterious" },
        "Deep-set": { description: "Set deeper into the skull, creating a prominent brow bone.", match: "Defined & Strong" }
      }
    },
    faqSection: {
      title: "Frequently Asked Questions",
      items: [
        { question: 'How exactly does the AI determine my eye shape?', answer: "Our smart AI scans your photo for specific facial landmarks—like the visibility of your crease, the angle of your outer corners, and the amount of iris visible. It compares these measurements against expert definitions to pinpoint your unique shape instantly." },
        { question: 'What are the main eye shape categories?', answer: "We analyze for the major architectural types: Almond, Round, Monolid, Hooded, Upturned, Downturned, Wide-set, Close-set, and Deep-set. Keep in mind, many people are a beautiful blend of these traits (e.g., 'Hooded Almond')!" },
        { question: 'What is the difference between Hooded and Monolid eyes?', answer: "It comes down to the crease! Hooded eyes have a visible crease that is tucked away under a fold of skin when looking straight ahead. Monolid eyes typically have a flat, smooth lid with no visible crease line. Both offer unique canvases for stunning makeup looks." },
        { question: 'Why does shape matter for my makeup routine?', answer: "Geometry is the secret to professional-looking makeup. Knowing your shape tells you exactly where to place your wing to 'lift' your face, or where to apply shadow to create depth. It stops you from fighting your features and starts helping you enhance them." },
        { question: 'Can this result help me choose the perfect glasses?', answer: "100%. Frame shopping becomes effortless when you know the rule of opposites. Round eyes often look best in angular, geometric frames, while sharper shapes shine in softer, curved glasses. Your result gives you the blueprint to balance your overall look." },
        { question: 'Is my eye shape permanent?', answer: "Mostly, yes—it's part of your DNA! However, time plays a role. As we age, skin elasticity changes, often making eyes appear more hooded or downturned over time. Re-checking your shape every few years ensures your styling strategy evolves with you." }
      ]
    },
    footer: {
      rights: "All rights reserved.",
      links: {
        home: "Home",
        shapes: "Eye Shapes",
        faq: "FAQ",
        privacy: "Privacy Policy"
      }
    },
    privacyPolicy: {
      title: "Privacy Policy",
      subtitle: "We prioritize your trust. Our policy is transparent, compliant, and focused on protecting your digital rights.",
      lastUpdated: "Last Updated",
      noRetentionTitle: "Commitment to Data Non-Retention",
      noRetentionDesc: "We do not collect or permanently store your personal data or uploaded images. Your content is processed in real-time for the sole purpose of analysis and is automatically deleted immediately after the session ends. We prioritize your anonymity and safety above all else.",
      introTitle: "1. Introduction",
      introDesc: "By using EyeShapeAI, you consent to the data practices described in this policy. This document outlines how we collect, use, and safeguard your information in compliance with global standards, including GDPR and CCPA.",
      processingTitle: "2. Image Processing & Data Handling",
      processingDesc: "Images uploaded for eye shape analysis are processed in volatile memory (RAM) and are strictly not saved to any database or server storage. No biometric templates are created or stored.",
      logsTitle: "3. Log Files",
      logsDesc: "Like many other websites, we utilize log files. These files merely log visitors to the site - usually a standard procedure for hosting companies and a part of hosting services' analytics. The information collected includes IP addresses, browser type, ISP, date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends and administer the site.",
      cookiesTitle: "4. Cookies and Web Beacons",
      cookiesDesc: "We use 'cookies' to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
      dartTitle: "5. Google DoubleClick DART Cookie",
      dartDesc: "Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.",
      partnersTitle: "6. Advertising Partners",
      partnersDesc: "Some of advertisers on our site may use cookies and web beacons. Our advertising partners include Google. Each of our advertising partners has their own Privacy Policy for their policies on user data. We have no access to or control over these cookies that are used by third-party advertisers.",
      thirdPartyTitle: "7. Third Party Privacy Policies",
      thirdPartyDesc: "EyeShapeAI's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.",
      ccpaTitle: "8. CCPA Privacy Rights (Do Not Sell My Info)",
      ccpaDesc: "Under the CCPA, among other rights, California consumers have the right to: Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers; Request that a business delete any personal data about the consumer that a business has collected; Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
      gdprTitle: "9. GDPR Data Protection Rights",
      gdprDesc: "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access; The right to rectification; The right to erasure; The right to restrict processing; The right to object to processing; The right to data portability.",
      childrenTitle: "10. Children's Information",
      childrenDesc: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. We do not knowingly collect any Personal Identifiable Information from children under the age of 13.",
      linksTitle: "11. Links to Other Websites",
      linksDesc: "Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites.",
      changesTitle: "12. Changes to This Privacy Policy",
      changesDesc: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page."
    }
  },
  zh: {
    nav: { finder: "眼型测试", shapes: "眼型大全", faq: "常见问题" },
    hero: {
      title: "AI 眼型测试",
      subtitle: "我是什么眼型？",
      desc: "利用 AI 即刻识别您的眼型。获取个性化化妆技巧和眼镜推荐。",
      upload: "上传照片...",
      ready: "准备分析",
      analyze: "开始分析",
      analyzing: "分析中...",
      privacy: "100% 隐私保护。照片绝不存储。",
      cameraTip: "请确保您的眼睛清晰可见",
      change: "更换照片",
      remove: "删除",
      error: "请上传有效的图片文件。",
      tryAgain: "重试"
    },
    info: {
      ctaTitle: "准备好发现您的眼型了吗？",
      ctaDesc: "别再猜测了。用 AI 几秒钟内识别您的眼型。",
      ctaButton: "揭示我的眼型",
      whyMatters: "为什么这很重要",
      whyDesc: "眼型是您风格的蓝图。解锁个性化的化妆和眼镜搭配潜力。",
      features: {
        makeup: { title: "掌握化妆技巧", desc: "学习精确的角度和技巧，让您的独特眼型更加出彩。" },
        frames: { title: "寻找完美镜框", desc: "发现能够平衡眉骨并突显您最佳面部特征的眼镜。" },
        confidence: { title: "提升自信", desc: "通过为您量身定制的结构化造型建议，拥抱您的独特外观。" }
      }
    },
    results: {
      analysisResult: "分析结果",
      confidence: "置信度",
      scanAnother: "重新扫描",
      why: "为什么是这种眼型？",
      features: "主要特征",
      frames: "推荐镜框",
      styling: "造型策略",
      noImage: "图片未保存",
      match: "匹配度"
    },
    shapeNames: {
      Almond: "杏眼",
      Round: "圆眼",
      Monolid: "单眼皮",
      Hooded: "内双",
      Downturned: "下垂眼",
      Upturned: "上挑眼",
      "Wide-set": "眼距宽",
      "Close-set": "眼距窄",
      "Deep-set": "深邃眼"
    },
    shapesList: {
      title: "眼型图鉴：我是哪种眼型？",
      subtitle: "探索定义不同眼型的特征。找到属于你的独特外观。",
      items: {
        Almond: { description: "多变的眼型。椭圆形，两端略尖。", match: "平衡 & 经典" },
        Round: { description: "大而开阔。虹膜周围可见眼白。", match: "明亮 & 年轻" },
        Upturned: { description: "外眼角高于内眼角。", match: "猫系 & 上扬" },
        Downturned: { description: "外眼角略低于内眼角。", match: "深情 & 复古" },
        "Wide-set": { description: "两眼间距大于一只眼睛的宽度。", match: "异域 & 宽阔" },
        "Close-set": { description: "两眼间距小于一只眼睛的宽度。", match: "强烈 & 专注" },
        Monolid: { description: "眼睑平滑，无明显褶皱。", match: "时尚 & 现代" },
        Hooded: { description: "皮肤褶皱遮盖了双眼皮，使眼睑看起来较小。", match: "深邃 & 神秘" },
        "Deep-set": { description: "眼窝较深，眉骨突出。", match: "立体 & 强烈" }
      }
    },
    faqSection: {
      title: "常见问题",
      items: [
        { question: 'AI 到底是如何确定我的眼型的？', answer: "我们的智能 AI 会扫描您照片中的特定面部特征——例如眼褶的可见度、外眼角的角度以及虹膜的可见量。它将这些测量值与专家定义进行比较，从而立即确定您的独特眼型。" },
        { question: '主要的眼型类别有哪些？', answer: "我们分析主要的结构类型：杏眼、圆眼、单眼皮、内双、上挑眼、下垂眼、眼距宽、眼距窄和深邃眼。请记住，许多人是这些特征的美丽混合体！" },
        { question: '内双和单眼皮有什么区别？', answer: "关键在于眼褶！内双有明显的眼褶，但直视时会隐藏在皮肤褶皱下。单眼皮通常眼睑平滑，没有明显的眼褶线。两者都是绝美妆容的独特画布。" },
        { question: '为什么眼型对我的化妆程序很重要？', answer: "几何学是专业妆容的秘密。了解您的眼型可以确切地告诉您在哪里画眼线以“提升”脸部，或在哪里涂眼影以创造深度。它让您不再与自己的特征对抗，而是开始增强它们。" },
        { question: '这个结果能帮我选择完美的眼镜吗？', answer: "100%。当您知道互补法则时，选购镜框就变得毫不费力。圆眼通常最适合有棱角的几何镜框，而较尖锐的眼型则在柔和的弧形眼镜中大放异彩。您的结果为您平衡整体外观提供了蓝图。" },
        { question: '我的眼型是永久的吗？', answer: "大部分是，是的——它是您 DNA 的一部分！然而，时间会起作用。随着年龄增长，皮肤弹性发生变化，通常会使眼睛随着时间的推移看起来更加内双或下垂。每隔几年重新检查您的眼型，可确保您的造型策略与您同步发展。" }
      ]
    },
    footer: {
      rights: "版权所有。",
      links: {
        home: "首页",
        shapes: "眼型大全",
        faq: "常见问题",
        privacy: "隐私政策"
      }
    },
    privacyPolicy: {
      title: "隐私政策",
      subtitle: "您的隐私是我们的首要任务。我们的政策透明、合规，并专注于保护您的数字权利。",
      lastUpdated: "最后更新",
      noRetentionTitle: "数据不保留承诺",
      noRetentionDesc: "我们不会收集或永久存储您的个人数据或上传的图像。您的内容仅在会话期间进行实时处理，并在会话结束后立即自动删除。我们把您的匿名性和安全性放在首位。",
      introTitle: "1. 简介",
      introDesc: "使用 EyeShapeAI 即表示您同意本政策中描述的数据惯例。本文件概述了我们如何根据包括 GDPR 和 CCPA 在内的全球标准收集、使用和保护您的信息。",
      processingTitle: "2. 图像处理与数据处理",
      processingDesc: "上传用于眼型分析的图像在临时内存 (RAM) 中处理，严格不保存到任何数据库或服务器存储中。不会创建或存储生物特征模板。",
      logsTitle: "3. 日志文件",
      logsDesc: "与许多其他网站一样，我们使用日志文件。这些文件仅记录网站的访问者——通常是托管公司的标准程序和托管服务分析的一部分。收集的信息包括 IP 地址、浏览器类型、ISP、日期/时间戳、引用/退出页面以及可能的点击次数。此信息用于分析趋势和管理网站。",
      cookiesTitle: "4. Cookie 和网络信标",
      cookiesDesc: "我们使用“Cookie”来存储信息，包括访问者的偏好以及访问者访问或访问过的网站页面。该信息用于通过根据访问者的浏览器类型和/或其他信息定制我们的网页内容来优化用户体验。",
      dartTitle: "5. Google DoubleClick DART Cookie",
      dartDesc: "Google 是我们网站上的第三方供应商之一。它还使用称为 DART cookie 的 cookie，根据我们网站的访问者对我们网站和互联网上其他网站的访问情况向其投放广告。但是，访问者可以通过访问 Google 广告和内容网络隐私政策来选择拒绝使用 DART cookie。",
      partnersTitle: "6. 广告合作伙伴",
      partnersDesc: "我们网站上的一些广告商可能会使用 cookie 和网络信标。我们的广告合作伙伴包括 Google。我们的每个广告合作伙伴都有自己的用户数据隐私政策。我们无法访问或控制第三方广告商使用的这些 cookie。",
      thirdPartyTitle: "7. 第三方隐私政策",
      thirdPartyDesc: "EyeShapeAI 的隐私政策不适用于其他广告商或网站。因此，我们建议您咨询这些第三方广告服务器各自的隐私政策以获取更详细的信息。它可能包括他们的做法以及有关如何选择退出某些选项的说明。",
      ccpaTitle: "8. CCPA 隐私权（切勿出售我的信息）",
      ccpaDesc: "根据 CCPA，除其他权利外，加州消费者有权：要求收集消费者个人数据的企业披露企业收集的关于消费者的类别和具体个人数据；要求企业删除企业收集的关于消费者的任何个人数据；要求出售消费者个人数据的企业不出售消费者的个人数据。",
      gdprTitle: "9. GDPR 数据保护权",
      gdprDesc: "我们希望确保您完全了解您的所有数据保护权利。每个用户都有权享有以下权利：访问权；更正权；删除权；限制处理权；反对处理权；数据可移植权。",
      childrenTitle: "10. 儿童信息",
      childrenDesc: "我们优先事项的另一部分是在使用互联网时增加对儿童的保护。我们鼓励父母和监护人观察、参与和/或监控和指导他们的在线活动。我们不会有意收集 13 岁以下儿童的任何个人身份信息。",
      linksTitle: "11. 链接到其他网站",
      linksDesc: "我们的服务可能包含指向其他网站的链接。如果您点击第三方链接，您将被定向到该网站。请注意，这些外部网站并非由我们运营。因此，我们强烈建议您查看这些网站的隐私政策。",
      changesTitle: "12. 本隐私政策的变更",
      changesDesc: "我们可能会不时更新我们的隐私政策。因此，建议您定期查看此页面以了解任何更改。我们将通过在此页面上发布新的隐私政策来通知您任何更改。这些更改在此页面上发布后立即生效。"
    }
  },
  hi: {
    nav: { finder: "नेत्र आकार खोजक", shapes: "नेत्र आकार", faq: "सामान्य प्रश्न" },
    hero: {
      title: "AI नेत्र आकार खोजक",
      subtitle: "मेरी आंखों का आकार क्या है?",
      desc: "AI के साथ अपनी आंखों के आकार को तुरंत पहचानें। व्यक्तिगत मेकअप टिप्स और चश्मा सुझाव प्राप्त करें।",
      upload: "फोटो अपलोड करें...",
      ready: "विश्लेषण के लिए तैयार",
      analyze: "विश्लेषण करें",
      analyzing: "विश्लेषण हो रहा है...",
      privacy: "100% निजी। तस्वीरें कभी संग्रहीत नहीं की जाती हैं।",
      cameraTip: "सुनिश्चित करें कि आपकी आंखें स्पष्ट रूप से दिखाई दे रही हैं",
      change: "फोटो बदलें",
      remove: "हटाएं",
      error: "कृपया एक मान्य छवि फ़ाइल अपलोड करें।",
      tryAgain: "पुनः प्रयास करें"
    },
    info: {
      ctaTitle: "अपनी आंखों का आकार खोजने के लिए तैयार हैं?",
      ctaDesc: "अनुमान लगाना बंद करें। AI के साथ सेकंड में अपनी आंखों के आकार को पहचानें।",
      ctaButton: "मेरा आकार बताएं",
      whyMatters: "यह क्यों मायने रखता है",
      whyDesc: "आपकी आंखों का आकार आपकी शैली का खाका है। व्यक्तिगत मेकअप और चश्मे की क्षमता को अनलॉक करें।",
      features: {
        makeup: { title: "मेकअप में महारत हासिल करें", desc: "अपनी विशिष्ट आंखों के आकार को उभारने के लिए सटीक कोण और तकनीक सीखें।" },
        frames: { title: "अपना फ्रेम खोजें", desc: "ऐसे चश्मे खोजें जो आपकी भौंहों को संतुलित करें और आपकी सर्वोत्तम विशेषताओं को उजागर करें।" },
        confidence: { title: "आत्मविश्वास बढ़ाएं", desc: "सिर्फ आपके लिए डिज़ाइन किए गए आर्किटेक्चरल स्टाइलिंग टिप्स के साथ अपने अनोखे लुक को अपनाएं।" }
      }
    },
    results: {
      analysisResult: "विश्लेषण परिणाम",
      confidence: "विश्वास",
      scanAnother: "दूसरा स्कैन करें",
      why: "यह आकार क्यों?",
      features: "प्रमुख विशेषताएं",
      frames: "सुझाए गए फ्रेम",
      styling: "स्टाइलिंग रणनीति",
      noImage: "छवि सहेजी नहीं गई",
      match: "मैच"
    },
    shapeNames: {
      Almond: "बादाम जैसी",
      Round: "गोल",
      Monolid: "मोनोलिड",
      Hooded: "हुडेड",
      Downturned: "नीचे की ओर",
      Upturned: "ऊपर की ओर",
      "Wide-set": "चौड़ी",
      "Close-set": "पास",
      "Deep-set": "गहरी"
    },
    shapesList: {
      title: "नेत्र आकार पुस्तकालय: मैं कौन सा हूँ?",
      subtitle: "विभिन्न नेत्र आकारों को परिभाषित करने वाले लक्षणों का अन्वेषण करें। अपना अनूठा रूप खोजें।",
      items: {
        Almond: { description: "बहुमुखी आकार। अंडाकार जिसके सिरे थोड़े नुकीले होते हैं।", match: "संतुलित और क्लासिक" },
        Round: { description: "बड़ी और खुली। परितारिका (आइरिस) के चारों ओर सफेद भाग स्पष्ट रूप से दिखाई देता है।", match: "उज्ज्वल और युवा" },
        Upturned: { description: "बाहरी कोने भीतरी कोनों से ऊपर उठे हुए होते हैं।", match: "बिल्ली जैसी और उठी हुई" },
        Downturned: { description: "बाहरी कोने भीतरी कोनों से थोड़े नीचे झुके होते हैं।", match: "भावुक और विंटेज" },
        "Wide-set": { description: "आंखों के बीच की दूरी एक आंख की चौड़ाई से अधिक होती है।", match: "विदेशी और व्यापक" },
        "Close-set": { description: "आंखों के बीच की दूरी एक आंख की चौड़ाई से कम होती है।", match: "तीव्र और केंद्रित" },
        Monolid: { description: "पलक पर कोई दिखाई देने वाली क्रीज नहीं होती, सतह चिकनी होती है।", match: "स्लीक और आधुनिक" },
        Hooded: { description: "त्वचा की एक तह क्रीज को छिपा देती है, जिससे पलक छोटी दिखती है।", match: "गहरी और रहस्यमय" },
        "Deep-set": { description: "खोपड़ी में गहराई में स्थित, जिससे भौंह की हड्डी प्रमुख दिखती है।", match: "परिभाषित और मजबूत" }
      }
    },
    faqSection: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      items: [
        { question: 'AI मेरी आंखों का आकार कैसे निर्धारित करता है?', answer: "हमारा स्मार्ट AI विशिष्ट चेहरे के लैंडमार्क के लिए आपकी तस्वीर को स्कैन करता है—जैसे आपकी क्रीज की दृश्यता, आपके बाहरी कोनों का कोण, और दिखाई देने वाली परितारिका की मात्रा। यह आपके अद्वितीय आकार को तुरंत इंगित करने के लिए विशेषज्ञ परिभाषाओं के साथ इन मापों की तुलना करता है।" },
        { question: 'मुख्य नेत्र आकार श्रेणियां क्या हैं?', answer: "हम प्रमुख वास्तुशिल्प प्रकारों का विश्लेषण करते हैं: बादाम, गोल, मोनोलिड, हुडेड, ऊपर की ओर, नीचे की ओर, चौड़ी, पास, और गहरी। याद रखें, कई लोग इन लक्षणों का एक सुंदर मिश्रण होते हैं!" },
        { question: 'हुडेड और मोनोलिड आंखों में क्या अंतर है?', answer: "यह क्रीज पर निर्भर करता है! हुडेड आंखों में एक दिखाई देने वाली क्रीज होती है जो सीधे देखने पर त्वचा की एक तह के नीचे छिपी होती है। मोनोलिड आंखों में आमतौर पर एक सपाट, चिकनी पलक होती है जिसमें कोई दिखाई देने वाली क्रीज रेखा नहीं होती है।" },
        { question: 'मेरी मेकअप दिनचर्या के लिए आकार क्यों मायने रखता है?', answer: "ज्यामिति पेशेवर दिखने वाले मेकअप का रहस्य है। अपने आकार को जानने से आपको ठीक-ठीक पता चलता है कि अपने चेहरे को 'लिफ्ट' करने के लिए अपना विंग कहां रखना है, या गहराई बनाने के लिए छाया कहां लगानी है।" },
        { question: 'क्या यह परिणाम मुझे सही चश्मा चुनने में मदद कर सकता है?', answer: "100%। जब आप विरोध के नियम को जानते हैं तो फ्रेम की खरीदारी सरल हो जाती है। गोल आंखें अक्सर कोणीय, ज्यामितीय फ्रेम में सबसे अच्छी लगती हैं, जबकि तेज आकार नरम, घुमावदार चश्मे में चमकते हैं।" },
        { question: 'क्या मेरी आंखों का आकार स्थायी है?', answer: "ज्यादातर, हां—यह आपके डीएनए का हिस्सा है! हालांकि, समय एक भूमिका निभाता है। जैसे-जैसे हम उम्र में बढ़ते हैं, त्वचा की लोच बदलती है, जिससे अक्सर समय के साथ आंखें अधिक हुडेड या नीचे की ओर झुकी हुई दिखाई देती हैं।" }
      ]
    },
    footer: {
      rights: "सर्वाधिकार सुरक्षित।",
      links: {
        home: "होम",
        shapes: "नेत्र आकार",
        faq: "सामान्य प्रश्न",
        privacy: "गोपनीयता नीति"
      }
    },
    privacyPolicy: {
      title: "गोपनीयता नीति",
      subtitle: "आपकी गोपनीयता हमारी प्राथमिकता है। हमारी नीति पारदर्शी, अनुपालन और आपके डिजिटल अधिकारों की रक्षा पर केंद्रित है।",
      lastUpdated: "अंतिम अद्यतन",
      noRetentionTitle: "डेटा गैर-प्रतिधारण के प्रति प्रतिबद्धता",
      noRetentionDesc: "हम आपके व्यक्तिगत डेटा या अपलोड की गई छवियों को एकत्र या स्थायी रूप से संग्रहीत नहीं करते हैं। आपकी सामग्री को केवल विश्लेषण के उद्देश्य से वास्तविक समय में संसाधित किया जाता है और सत्र समाप्त होने के तुरंत बाद स्वचालित रूप से हटा दिया जाता है। हम आपकी गुमनामी और सुरक्षा को सबसे ऊपर प्राथमिकता देते हैं।",
      introTitle: "1. परिचय",
      introDesc: "EyeShapeAI का उपयोग करके, आप इस नीति में वर्णित डेटा प्रथाओं के लिए सहमति देते हैं। यह दस्तावेज़ रेखांकित करता है कि हम GDPR और CCPA सहित वैश्विक मानकों के अनुपालन में आपकी जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करते हैं।",
      processingTitle: "2. छवि प्रसंस्करण और डेटा हैंडलिंग",
      processingDesc: "नेत्र आकार विश्लेषण के लिए अपलोड की गई छवियों को अस्थिर मेमोरी (RAM) में संसाधित किया जाता है और किसी भी डेटाबेस या सर्वर स्टोरेज में सख्ती से सहेजा नहीं जाता है। कोई बायोमेट्रिक टेम्प्लेट नहीं बनाया या संग्रहीत किया जाता है।",
      logsTitle: "3. लॉग फ़ाइलें",
      logsDesc: "कई अन्य वेबसाइटों की तरह, हम लॉग फ़ाइलों का उपयोग करते हैं। ये फाइलें केवल साइट पर आने वाले आगंतुकों को लॉग करती हैं - आमतौर पर होस्टिंग कंपनियों के लिए एक मानक प्रक्रिया और होस्टिंग सेवाओं के विश्लेषण का एक हिस्सा। एकत्र की गई जानकारी में आईपी पते, ब्राउज़र प्रकार, आईएसपी, तिथि/समय टिकट, रेफ़रिंग/निकास पृष्ठ और संभवतः क्लिक की संख्या शामिल है। इस जानकारी का उपयोग रुझानों का विश्लेषण करने और साइट को प्रशासित करने के लिए किया जाता है।",
      cookiesTitle: "4. कुकीज़ और वेब बीकन",
      cookiesDesc: "हम आगंतुकों की प्राथमिकताओं और वेबसाइट के उन पृष्ठों सहित जानकारी संग्रहीत करने के लिए 'कुकीज़' का उपयोग करते हैं जिन्हें आगंतुक ने एक्सेस किया या देखा। जानकारी का उपयोग आगंतुकों के ब्राउज़र प्रकार और/या अन्य जानकारी के आधार पर हमारे वेब पेज सामग्री को अनुकूलित करके उपयोगकर्ताओं के अनुभव को अनुकूलित करने के लिए किया जाता है।",
      dartTitle: "5. Google डबलक्लिक डार्ट कुकी",
      dartDesc: "Google हमारी साइट पर तृतीय-पक्ष विक्रेता में से एक है। यह हमारी साइट और इंटरनेट पर अन्य साइटों पर उनकी यात्रा के आधार पर हमारी साइट के आगंतुकों को विज्ञापन देने के लिए डार्ट कुकीज़ के रूप में जानी जाने वाली कुकीज़ का भी उपयोग करता है। हालांकि, आगंतुक Google विज्ञापन और सामग्री नेटवर्क गोपनीयता नीति पर जाकर डार्ट कुकीज़ के उपयोग को अस्वीकार करना चुन सकते हैं।",
      partnersTitle: "6. विज्ञापन भागीदार",
      partnersDesc: "हमारी साइट पर कुछ विज्ञापनदाता कुकीज़ और वेब बीकन का उपयोग कर सकते हैं। हमारे विज्ञापन भागीदारों में Google शामिल है। हमारे प्रत्येक विज्ञापन भागीदार की उपयोगकर्ता डेटा पर अपनी नीतियों के लिए अपनी गोपनीयता नीति है। तृतीय-पक्ष विज्ञापनदाताओं द्वारा उपयोग की जाने वाली इन कुकीज़ पर हमारी कोई पहुंच या नियंत्रण नहीं है।",
      thirdPartyTitle: "7. तृतीय पक्ष गोपनीयता नीतियां",
      thirdPartyDesc: "EyeShapeAI की गोपनीयता नीति अन्य विज्ञापनदाताओं या वेबसाइटों पर लागू नहीं होती है। इस प्रकार, हम आपको अधिक विस्तृत जानकारी के लिए इन तृतीय-पक्ष विज्ञापन सर्वरों की संबंधित गोपनीयता नीतियों से परामर्श करने की सलाह देते हैं। इसमें उनके अभ्यास और कुछ विकल्पों से बाहर निकलने के तरीके के बारे में निर्देश शामिल हो सकते हैं।",
      ccpaTitle: "8. CCPA गोपनीयता अधिकार (मेरी जानकारी न बेचें)",
      ccpaDesc: "CCPA के तहत, अन्य अधिकारों के अलावा, कैलिफ़ोर्निया के उपभोक्ताओं को यह अधिकार है: अनुरोध करें कि एक व्यवसाय जो उपभोक्ता का व्यक्तिगत डेटा एकत्र करता है, वह उन श्रेणियों और व्यक्तिगत डेटा के विशिष्ट टुकड़ों का खुलासा करे जो एक व्यवसाय ने उपभोक्ताओं के बारे में एकत्र किया है; अनुरोध करें कि एक व्यवसाय उपभोक्ता के बारे में किसी भी व्यक्तिगत डेटा को हटा दे जिसे एक व्यवसाय ने एकत्र किया है; अनुरोध करें कि एक व्यवसाय जो उपभोक्ता का व्यक्तिगत डेटा बेचता है, वह उपभोक्ता का व्यक्तिगत डेटा न बेचे।",
      gdprTitle: "9. GDPR डेटा सुरक्षा अधिकार",
      gdprDesc: "हम यह सुनिश्चित करना चाहते हैं कि आप अपने सभी डेटा सुरक्षा अधिकारों से पूरी तरह अवगत हैं। प्रत्येक उपयोगकर्ता निम्नलिखित का हकदार है: पहुंच का अधिकार; सुधार का अधिकार; मिटाने का अधिकार; प्रसंस्करण को प्रतिबंधित करने का अधिकार; प्रसंस्करण पर आपत्ति करने का अधिकार; डेटा पोर्टेबिलिटी का अधिकार।",
      childrenTitle: "10. बच्चों की जानकारी",
      childrenDesc: "हमारी प्राथमिकता का एक और हिस्सा इंटरनेट का उपयोग करते समय बच्चों के लिए सुरक्षा जोड़ना है। हम माता-पिता और अभिभावकों को उनकी ऑनलाइन गतिविधि का निरीक्षण करने, भाग लेने और/या निगरानी करने और मार्गदर्शन करने के लिए प्रोत्साहित करते हैं। हम जानबूझकर 13 वर्ष से कम उम्र के बच्चों से कोई भी व्यक्तिगत पहचान योग्य जानकारी एकत्र नहीं करते हैं।",
      linksTitle: "11. अन्य वेबसाइटों के लिंक",
      linksDesc: "हमारी सेवा में अन्य साइटों के लिंक हो सकते हैं। यदि आप किसी तृतीय-पक्ष लिंक पर क्लिक करते हैं, तो आपको उस साइट पर निर्देशित किया जाएगा। ध्यान दें कि ये बाहरी साइटें हमारे द्वारा संचालित नहीं हैं। इसलिए, हम आपको इन वेबसाइटों की गोपनीयता नीति की समीक्षा करने की कड़ी सलाह देते हैं।",
      changesTitle: "12. इस गोपनीयता नीति में परिवर्तन",
      changesDesc: "हम समय-समय पर अपनी गोपनीयता नीति को अपडेट कर सकते हैं। इस प्रकार, आपको किसी भी बदलाव के लिए समय-समय पर इस पृष्ठ की समीक्षा करने की सलाह दी जाती है। हम इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके आपको किसी भी बदलाव के बारे में सूचित करेंगे। इस पृष्ठ पर पोस्ट किए जाने के तुरंत बाद ये परिवर्तन प्रभावी होते हैं।"
    }
  },
  th: {
    nav: { finder: "ค้นหารูปทรงตา", shapes: "รูปทรงตา", faq: "คำถามที่พบบ่อย" },
    hero: {
      title: "AI ค้นหารูปทรงตา",
      subtitle: "รูปทรงตาของฉันคืออะไร?",
      desc: "ระบุรูปทรงตาของคุณทันทีด้วย AI รับเคล็ดลับการแต่งหน้าและคำแนะนำแว่นตาเฉพาะบุคคล",
      upload: "อัปโหลดรูปภาพ...",
      ready: "พร้อมวิเคราะห์",
      analyze: "วิเคราะห์",
      analyzing: "กำลังวิเคราะห์...",
      privacy: "ส่วนตัว 100% รูปภาพจะไม่ถูกจัดเก็บ",
      cameraTip: "ตรวจสอบให้แน่ใจว่าดวงตาของคุณมองเห็นได้ชัดเจน",
      change: "เปลี่ยนรูปภาพ",
      remove: "ลบ",
      error: "โปรดอัปโหลดไฟล์รูปภาพที่ถูกต้อง",
      tryAgain: "ลองอีกครั้ง"
    },
    info: {
      ctaTitle: "พร้อมที่จะค้นหารูปทรงตาของคุณหรือยัง?",
      ctaDesc: "เลิกเดา ระบุรูปทรงตาของคุณในไม่กี่วินาทีด้วย AI",
      ctaButton: "เผยรูปทรงของฉัน",
      whyMatters: "ทำไมถึงสำคัญ",
      whyDesc: "รูปทรงตาของคุณคือแม่แบบสำหรับสไตล์ของคุณ ปลดล็อกศักยภาพการแต่งหน้าและแว่นตา",
      features: {
        makeup: { title: "เชี่ยวชาญการแต่งหน้า", desc: "เรียนรู้มุมและเทคนิคที่แน่นอนเพื่อทำให้ดวงตาของคุณโดดเด่น" },
        frames: { title: "ค้นหากรอบแว่นของคุณ", desc: "ค้นพบแว่นตาที่สมดุลกับกระดูกคิ้วและเน้นจุดเด่นของคุณ" },
        confidence: { title: "เพิ่มความมั่นใจ", desc: "โอบรับลุคที่เป็นเอกลักษณ์ของคุณด้วยเคล็ดลับการจัดสไตล์ที่ออกแบบมาเพื่อคุณโดยเฉพาะ" }
      }
    },
    results: {
      analysisResult: "ผลการวิเคราะห์",
      confidence: "ความมั่นใจ",
      scanAnother: "สแกนอีกครั้ง",
      why: "ทำไมต้องเป็นทรงนี้?",
      features: "คุณสมบัติหลัก",
      frames: "กรอบแว่นที่แนะนำ",
      styling: "กลยุทธ์การจัดสไตล์",
      noImage: "ไม่ได้บันทึกรูปภาพ",
      match: "ตรงกัน"
    },
    shapeNames: {
      Almond: "ตาอัลมอนด์",
      Round: "ตากลม",
      Monolid: "ตาชั้นเดียว",
      Hooded: "ตาหลบใน",
      Downturned: "ตาหางตก",
      Upturned: "ตาหางชี้",
      "Wide-set": "ตาห่าง",
      "Close-set": "ตาชิด",
      "Deep-set": "ตาลึก"
    },
    shapesList: {
      title: "คลังข้อมูลรูปทรงตา: ฉันเป็นแบบไหน?",
      subtitle: "สำรวจลักษณะที่กำหนดรูปทรงตาแบบต่างๆ ค้นหาลุคที่เป็นเอกลักษณ์ของคุณ",
      items: {
        Almond: { description: "รูปทรงอเนกประสงค์ รูปไข่ที่มีปลายแหลมเล็กน้อย", match: "สมดุล & คลาสสิก" },
        Round: { description: "ใหญ่และเปิดกว้าง เห็นตาขาวรอบม่านตาชัดเจน", match: "สดใส & อ่อนเยาว์" },
        Upturned: { description: "หางตายกสูงกว่าหัวตา", match: "เฉี่ยว & ยกกระชับ" },
        Downturned: { description: "หางตาตกลงต่ำกว่าหัวตาเล็กน้อย", match: "ซึ้ง & วินเทจ" },
        "Wide-set": { description: "ระยะห่างระหว่างดวงตามากกว่าความกว้างของดวงตาหนึ่งข้าง", match: "แปลกใหม่ & กว้าง" },
        "Close-set": { description: "ระยะห่างระหว่างดวงตาน้อยกว่าความกว้างของดวงตาหนึ่งข้าง", match: "เข้มข้น & จดจ่อ" },
        Monolid: { description: "ผิวเรียบเนียนไม่มีรอยพับที่มองเห็นได้บนเปลือกตา", match: "โฉบเฉี่ยว & ทันสมัย" },
        Hooded: { description: "ผิวหนังพับลงมาปิดชั้นตา ทำให้ชั้นตาดูเล็กลง", match: "ลึกซึ้ง & ลึกลับ" },
        "Deep-set": { description: "ดวงตาลึกเข้าไปในกะโหลกศีรษะ ทำให้กระดูกคิ้วเด่นชัด", match: "ชัดเจน & แข็งแกร่ง" }
      }
    },
    faqSection: {
      title: "คำถามที่พบบ่อย",
      items: [
        { question: 'AI ระบุรูปทรงตาของฉันได้อย่างไร?', answer: "AI อัจฉริยะของเราสแกนภาพถ่ายของคุณเพื่อหาจุดสังเกตบนใบหน้า เช่น ความชัดเจนของชั้นตา มุมของหางตา และปริมาณม่านตาที่มองเห็นได้ โดยจะเปรียบเทียบการวัดเหล่านี้กับคำจำกัดความของผู้เชี่ยวชาญเพื่อระบุรูปทรงที่เป็นเอกลักษณ์ของคุณทันที" },
        { question: 'หมวดหมู่รูปทรงตาหลักมีอะไรบ้าง?', answer: "เราวิเคราะห์ประเภทโครงสร้างหลัก: อัลมอนด์, กลม, ชั้นเดียว, หลบใน, หางชี้, หางตก, ตาห่าง, ตาชิด และตาลึก จำไว้ว่าหลายคนมีส่วนผสมที่สวยงามของลักษณะเหล่านี้!" },
        { question: 'ตาหลบในกับตาชั้นเดียวต่างกันอย่างไร?', answer: "มันอยู่ที่ชั้นตา! ตาหลบในมีชั้นตาที่มองเห็นได้แต่ถูกซ่อนอยู่ใต้ผิวหนังที่พับลงมาเมื่อมองตรง ตาชั้นเดียวมักจะมีเปลือกตาที่เรียบเนียนไม่มีเส้นชั้นตาที่มองเห็นได้ ทั้งสองแบบมีความงามที่เป็นเอกลักษณ์สำหรับการแต่งหน้า" },
        { question: 'ทำไมรูปทรงถึงสำคัญต่อการแต่งหน้า?', answer: "เรขาคณิตคือความลับของการแต่งหน้าที่ดูเป็นมืออาชีพ การรู้รูปทรงของคุณจะบอกคุณได้ว่าควรเขียนอายไลเนอร์ตรงไหนเพื่อ 'ยก' ใบหน้า หรือทาอายแชโดว์ตรงไหนเพื่อสร้างมิติ" },
        { question: 'ผลลัพธ์นี้ช่วยฉันเลือกแว่นตาที่สมบูรณ์แบบได้หรือไม่?', answer: "100% การเลือกซื้อกรอบแว่นจะง่ายขึ้นเมื่อคุณรู้กฎของสิ่งที่ตรงกันข้าม ตากลมมักจะดูดีที่สุดในกรอบเหลี่ยมหรือทรงเรขาคณิต ในขณะที่รูปทรงที่คมชัดจะโดดเด่นในแว่นตาที่นุ่มนวลและโค้งมน" },
        { question: 'รูปทรงตาของฉันถาวรหรือไม่?', answer: "ส่วนใหญ่ใช่—มันเป็นส่วนหนึ่งของ DNA ของคุณ! อย่างไรก็ตาม เวลาเป็นปัจจัย เมื่อเราอายุมากขึ้น ความยืดหยุ่นของผิวหนังจะเปลี่ยนไป มักจะทำให้ดวงตาดูหลบในหรือหางตกมากขึ้นเมื่อเวลาผ่านไป" }
      ]
    },
    footer: {
      rights: "สงวนลิขสิทธิ์",
      links: {
        home: "หน้าแรก",
        shapes: "รูปทรงตา",
        faq: "FAQ",
        privacy: "นโยบายความเป็นส่วนตัว"
      }
    },
    privacyPolicy: {
      title: "นโยบายความเป็นส่วนตัว",
      subtitle: "ความเป็นส่วนตัวของคุณคือสิ่งสำคัญของเรา นโยบายของเรามีความโปร่งใส ปฏิบัติตาม และมุ่งเน้นที่การปกป้องสิทธิ์ดิจิทัลของคุณ",
      lastUpdated: "อัปเดตล่าสุด",
      noRetentionTitle: "ความมุ่งมั่นในการไม่เก็บรักษาข้อมูล",
      noRetentionDesc: "เราไม่รวบรวมหรือจัดเก็บข้อมูลส่วนบุคคลหรือรูปภาพที่คุณอัปโหลดอย่างถาวร เนื้อหาของคุณจะถูกประมวลผลแบบเรียลไทม์เพื่อจุดประสงค์ในการวิเคราะห์เท่านั้นและจะถูกลบโดยอัตโนมัติทันทีหลังจากสิ้นสุดเซสชัน เราให้ความสำคัญกับการไม่เปิดเผยตัวตนและความปลอดภัยของคุณเหนือสิ่งอื่นใด",
      introTitle: "1. บทนำ",
      introDesc: "การใช้ EyeShapeAI แสดงว่าคุณยินยอมต่อแนวทางปฏิบัติด้านข้อมูลที่อธิบายไว้ในนโยบายนี้ เอกสารนี้สรุปวิธีการที่เรารวบรวม ใช้ และปกป้องข้อมูลของคุณตามมาตรฐานสากล รวมถึง GDPR และ CCPA",
      processingTitle: "2. การประมวลผลภาพและการจัดการข้อมูล",
      processingDesc: "รูปภาพที่อัปโหลดเพื่อการวิเคราะห์รูปทรงตาจะถูกประมวลผลในหน่วยความจำชั่วคราว (RAM) และจะไม่ถูกบันทึกลงในฐานข้อมูลหรือที่เก็บข้อมูลเซิร์ฟเวอร์ใดๆ อย่างเคร่งครัด ไม่มีการสร้างหรือจัดเก็บเทมเพลตไบโอเมตริกซ์",
      logsTitle: "3. ไฟล์บันทึก",
      logsDesc: "เช่นเดียวกับเว็บไซต์อื่นๆ เราใช้ไฟล์บันทึก ไฟล์เหล่านี้เพียงแค่บันทึกผู้เยี่ยมชมเว็บไซต์ ซึ่งโดยปกติจะเป็นขั้นตอนมาตรฐานสำหรับบริษัทโฮสติ้งและเป็นส่วนหนึ่งของการวิเคราะห์บริการโฮสติ้ง ข้อมูลที่รวบรวมได้แก่ ที่อยู่ IP ประเภทเบราว์เซอร์ ISP วันที่/เวลา หน้าที่อ้างอิง/ออก และอาจรวมถึงจำนวนคลิก ข้อมูลนี้ใช้เพื่อวิเคราะห์แนวโน้มและดูแลเว็บไซต์",
      cookiesTitle: "4. คุกกี้และเว็บบีคอน",
      cookiesDesc: "เราใช้ 'คุกกี้' เพื่อจัดเก็บข้อมูลรวมถึงการตั้งค่าของผู้เยี่ยมชม และหน้าเว็บบนเว็บไซต์ที่ผู้เยี่ยมชมเข้าถึงหรือเยี่ยมชม ข้อมูลนี้ใช้เพื่อเพิ่มประสิทธิภาพประสบการณ์ของผู้ใช้โดยปรับแต่งเนื้อหาหน้าเว็บของเราตามประเภทเบราว์เซอร์ของผู้เยี่ยมชมและ/หรือข้อมูลอื่นๆ",
      dartTitle: "5. คุกกี้ Google DoubleClick DART",
      dartDesc: "Google เป็นหนึ่งในผู้ขายบุคคลที่สามบนเว็บไซต์ของเรา นอกจากนี้ยังใช้คุกกี้ที่เรียกว่าคุกกี้ DART เพื่อแสดงโฆษณาต่อผู้เยี่ยมชมเว็บไซต์ของเราตามการเยี่ยมชมเว็บไซต์ของเราและเว็บไซต์อื่นๆ บนอินเทอร์เน็ต อย่างไรก็ตาม ผู้เยี่ยมชมอาจเลือกที่จะปฏิเสธการใช้คุกกี้ DART โดยไปที่นโยบายความเป็นส่วนตัวของเครือข่ายโฆษณาและเนื้อหาของ Google",
      partnersTitle: "6. พันธมิตรโฆษณา",
      partnersDesc: "ผู้ลงโฆษณาบางรายบนเว็บไซต์ของเราอาจใช้คุกกี้และเว็บบีคอน พันธมิตรโฆษณาของเรา ได้แก่ Google พันธมิตรโฆษณาของเราแต่ละรายมีนโยบายความเป็นส่วนตัวสำหรับนโยบายเกี่ยวกับข้อมูลผู้ใช้ เราไม่สามารถเข้าถึงหรือควบคุมคุกกี้เหล่านี้ที่ผู้ลงโฆษณาบุคคลที่สามใช้",
      thirdPartyTitle: "7. นโยบายความเป็นส่วนตัวของบุคคลที่สาม",
      thirdPartyDesc: "นโยบายความเป็นส่วนตัวของ EyeShapeAI ใช้ไม่ได้กับผู้ลงโฆษณาหรือเว็บไซต์อื่นๆ ดังนั้น เราขอแนะนำให้คุณศึกษานโยบายความเป็นส่วนตัวที่เกี่ยวข้องของเซิร์ฟเวอร์โฆษณาบุคคลที่สามเหล่านี้เพื่อดูข้อมูลโดยละเอียดเพิ่มเติม ซึ่งอาจรวมถึงแนวทางปฏิบัติและคำแนะนำเกี่ยวกับวิธีการเลือกไม่รับตัวเลือกบางอย่าง",
      ccpaTitle: "8. สิทธิ์ความเป็นส่วนตัว CCPA (ห้ามขายข้อมูลของฉัน)",
      ccpaDesc: "ภายใต้ CCPA ผู้บริโภคในแคลิฟอร์เนียมีสิทธิ์ที่จะ: ขอให้ธุรกิจที่รวบรวมข้อมูลส่วนบุคคลของผู้บริโภคเปิดเผยประเภทและข้อมูลส่วนบุคคลเฉพาะที่ธุรกิจได้รวบรวมเกี่ยวกับผู้บริโภค ขอให้ธุรกิจลบข้อมูลส่วนบุคคลใดๆ เกี่ยวกับผู้บริโภคที่ธุรกิจได้รวบรวมไว้ ขอให้ธุรกิจที่ขายข้อมูลส่วนบุคคลของผู้บริโภคไม่ขายข้อมูลส่วนบุคคลของผู้บริโภค",
      gdprTitle: "9. สิทธิ์ในการปกป้องข้อมูล GDPR",
      gdprDesc: "เราต้องการให้แน่ใจว่าคุณตระหนักถึงสิทธิ์ในการปกป้องข้อมูลทั้งหมดของคุณอย่างเต็มที่ ผู้ใช้ทุกคนมีสิทธิ์ดังต่อไปนี้: สิทธิ์ในการเข้าถึง; สิทธิ์ในการแก้ไข; สิทธิ์ในการลบ; สิทธิ์ในการจำกัดการประมวลผล; สิทธิ์ในการคัดค้านการประมวลผล; สิทธิ์ในการพกพาข้อมูล",
      childrenTitle: "10. ข้อมูลของเด็ก",
      childrenDesc: "ส่วนหนึ่งของความสำคัญของเราคือการเพิ่มการปกป้องสำหรับเด็กขณะใช้อินเทอร์เน็ต เราสนับสนุนให้ผู้ปกครองและผู้ปกครองสังเกต เข้าร่วม และ/หรือตรวจสอบและแนะนำกิจกรรมออนไลน์ของพวกเขา เราไม่รวบรวมข้อมูลส่วนบุคคลที่ระบุตัวตนได้จากเด็กอายุต่ำกว่า 13 ปีโดยเจตนา",
      linksTitle: "11. ลิงก์ไปยังเว็บไซต์อื่น",
      linksDesc: "บริการของเราอาจมีลิงก์ไปยังเว็บไซต์อื่น หากคุณคลิกลิงก์ของบุคคลที่สาม คุณจะถูกนำไปยังเว็บไซต์นั้น โปรดทราบว่าเว็บไซต์ภายนอกเหล่านี้ไม่ได้ดำเนินการโดยเรา ดังนั้น เราขอแนะนำให้คุณตรวจสอบนโยบายความเป็นส่วนตัวของเว็บไซต์เหล่านี้",
      changesTitle: "12. การเปลี่ยนแปลงนโยบายความเป็นส่วนตัวนี้",
      changesDesc: "เราอาจอัปเดตนโยบายความเป็นส่วนตัวของเราเป็นครั้งคราว ดังนั้น ขอแนะนำให้คุณตรวจสอบหน้านี้เป็นระยะเพื่อดูการเปลี่ยนแปลงใดๆ เราจะแจ้งให้คุณทราบถึงการเปลี่ยนแปลงใดๆ โดยโพสต์นโยบายความเป็นส่วนตัวใหม่ในหน้านี้ การเปลี่ยนแปลงเหล่านี้จะมีผลทันทีหลังจากโพสต์ในหน้านี้"
    }
  },
  vi: {
    nav: { finder: "Kiểm tra dáng mắt", shapes: "Các dáng mắt", faq: "Hỏi đáp" },
    hero: {
      title: "AI Tìm Dáng Mắt",
      subtitle: "Dáng mắt của tôi là gì?",
      desc: "Xác định dáng mắt của bạn ngay lập tức bằng AI. Nhận các mẹo trang điểm và gợi ý kính mắt cá nhân hóa.",
      upload: "Tải ảnh lên...",
      ready: "Sẵn sàng phân tích",
      analyze: "Phân tích",
      analyzing: "Đang phân tích...",
      privacy: "Riêng tư 100%. Ảnh không bao giờ được lưu trữ.",
      cameraTip: "Hãy chắc chắn rằng mắt của bạn nhìn rõ ràng",
      change: "Đổi ảnh",
      remove: "Xóa",
      error: "Vui lòng tải lên tệp hình ảnh hợp lệ.",
      tryAgain: "Thử lại"
    },
    info: {
      ctaTitle: "Sẵn sàng tìm dáng mắt của bạn?",
      ctaDesc: "Đừng đoán nữa. Xác định dáng mắt của bạn trong vài giây với AI.",
      ctaButton: "Tiết lộ dáng mắt",
      whyMatters: "Tại sao điều này quan trọng",
      whyDesc: "Dáng mắt là bản thiết kế cho phong cách của bạn. Khám phá tiềm năng trang điểm và kính mắt của bạn.",
      features: {
        makeup: { title: "Làm chủ trang điểm", desc: "Học các góc độ và kỹ thuật chính xác để làm nổi bật dáng mắt cụ thể của bạn." },
        frames: { title: "Tìm gọng kính của bạn", desc: "Khám phá các loại kính cân bằng xương mày và làm nổi bật các đặc điểm tốt nhất của bạn." },
        confidence: { title: "Tăng sự tự tin", desc: "Yêu lấy vẻ ngoài độc đáo của bạn với các mẹo tạo kiểu được thiết kế riêng cho bạn." }
      }
    },
    results: {
      analysisResult: "Kết quả phân tích",
      confidence: "Độ tin cậy",
      scanAnother: "Quét lại",
      why: "Tại sao lại là dáng này?",
      features: "Đặc điểm chính",
      frames: "Gọng kính gợi ý",
      styling: "Chiến lược phong cách",
      noImage: "Ảnh chưa lưu",
      match: "Khớp"
    },
    shapeNames: {
      Almond: "Mắt hạnh nhân",
      Round: "Mắt tròn",
      Monolid: "Mắt một mí",
      Hooded: "Mắt mí lót",
      Downturned: "Mắt đuôi cụp",
      Upturned: "Mắt đuôi xếch",
      "Wide-set": "Mắt xa nhau",
      "Close-set": "Mắt gần nhau",
      "Deep-set": "Mắt sâu"
    },
    shapesList: {
      title: "Thư viện dáng mắt: Tôi thuộc loại nào?",
      subtitle: "Khám phá các đặc điểm xác định các dáng mắt khác nhau. Tìm vẻ ngoài độc đáo của bạn.",
      items: {
        Almond: { description: "Dáng mắt linh hoạt. Hình bầu dục với các đầu hơi nhọn.", match: "Cân bằng & Cổ điển" },
        Round: { description: "To và mở. Lòng trắng nhìn rõ quanh mống mắt.", match: "Tươi sáng & Trẻ trung" },
        Upturned: { description: "Đuôi mắt xếch lên cao hơn đầu mắt.", match: "Sắc sảo & Nâng cao" },
        Downturned: { description: "Đuôi mắt hơi cụp xuống thấp hơn đầu mắt.", match: "Sâu sắc & Cổ điển" },
        "Wide-set": { description: "Khoảng cách giữa hai mắt lớn hơn chiều rộng của một mắt.", match: "Lạ & Rộng" },
        "Close-set": { description: "Khoảng cách giữa hai mắt nhỏ hơn chiều rộng của một mắt.", match: "Mạnh mẽ & Tập trung" },
        Monolid: { description: "Bề mặt mí mắt phẳng, không có nếp gấp rõ ràng.", match: "Hiện đại & Thời thượng" },
        Hooded: { description: "Nếp gấp da che khuất mí mắt, làm mí mắt trông nhỏ hơn.", match: "Sâu sắc & Bí ẩn" },
        "Deep-set": { description: "Mắt nằm sâu trong hốc mắt, xương mày nổi bật.", match: "Rõ nét & Mạnh mẽ" }
      }
    },
    faqSection: {
      title: "Câu hỏi thường gặp",
      items: [
        { question: 'AI xác định dáng mắt của tôi như thế nào?', answer: "AI thông minh của chúng tôi quét ảnh của bạn để tìm các đặc điểm khuôn mặt cụ thể—như độ rõ của nếp gấp mí, góc của đuôi mắt và lượng mống mắt nhìn thấy được. Nó so sánh các số liệu này với các định nghĩa của chuyên gia để xác định chính xác dáng mắt độc đáo của bạn ngay lập tức." },
        { question: 'Các loại dáng mắt chính là gì?', answer: "Chúng tôi phân tích các loại cấu trúc chính: Hạnh nhân, Tròn, Một mí, Mí lót, Đuôi xếch, Đuôi cụp, Xa nhau, Gần nhau và Mắt sâu. Hãy nhớ rằng, nhiều người là sự pha trộn tuyệt đẹp của các đặc điểm này!" },
        { question: 'Sự khác biệt giữa Mí lót và Một mí là gì?', answer: "Vấn đề nằm ở nếp gấp! Mắt mí lót có nếp gấp rõ ràng nhưng bị che khuất dưới lớp da khi nhìn thẳng. Mắt một mí thường có mí mắt phẳng, mịn mà không có đường nếp gấp rõ ràng. Cả hai đều mang lại vẻ đẹp độc đáo cho trang điểm." },
        { question: 'Tại sao dáng mắt quan trọng đối với việc trang điểm?', answer: "Hình học là bí mật của trang điểm chuyên nghiệp. Biết dáng mắt của bạn cho bạn biết chính xác nơi kẻ mắt để 'nâng' khuôn mặt, hoặc nơi đánh phấn mắt để tạo chiều sâu." },
        { question: 'Kết quả này có thể giúp tôi chọn kính phù hợp không?', answer: "100%. Việc chọn gọng kính trở nên dễ dàng khi bạn biết quy tắc đối lập. Mắt tròn thường đẹp nhất với gọng kính góc cạnh, hình học, trong khi các dáng mắt sắc sảo sẽ tỏa sáng với kính cong, mềm mại." },
        { question: 'Dáng mắt của tôi có vĩnh viễn không?', answer: "Hầu hết là có—nó là một phần của DNA của bạn! Tuy nhiên, thời gian đóng một vai trò. Khi chúng ta già đi, độ đàn hồi của da thay đổi, thường làm cho mắt trông có vẻ mí lót hơn hoặc cụp xuống theo thời gian." }
      ]
    },
    footer: {
      rights: "Đã đăng ký bản quyền.",
      links: {
        home: "Trang chủ",
        shapes: "Các dáng mắt",
        faq: "Hỏi đáp",
        privacy: "Chính sách quyền riêng tư"
      }
    },
    privacyPolicy: {
      title: "Chính sách quyền riêng tư",
      subtitle: "Quyền riêng tư của bạn là ưu tiên của chúng tôi. Chính sách của chúng tôi minh bạch, tuân thủ và tập trung vào việc bảo vệ các quyền kỹ thuật số của bạn.",
      lastUpdated: "Cập nhật lần cuối",
      noRetentionTitle: "Cam kết không lưu trữ dữ liệu",
      noRetentionDesc: "Chúng tôi không thu thập hoặc lưu trữ vĩnh viễn dữ liệu cá nhân hoặc hình ảnh bạn tải lên. Nội dung của bạn chỉ được xử lý trong thời gian thực cho mục đích phân tích và sẽ tự động bị xóa ngay sau khi phiên kết thúc. Chúng tôi ưu tiên sự ẩn danh và an toàn của bạn lên hàng đầu.",
      introTitle: "1. Giới thiệu",
      introDesc: "Bằng cách sử dụng EyeShapeAI, bạn đồng ý với các thực tiễn dữ liệu được mô tả trong chính sách này. Tài liệu này phác thảo cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn tuân thủ các tiêu chuẩn toàn cầu, bao gồm GDPR và CCPA.",
      processingTitle: "2. Xử lý hình ảnh & Dữ liệu",
      processingDesc: "Hình ảnh tải lên để phân tích dáng mắt được xử lý trong bộ nhớ tạm thời (RAM) và tuyệt đối không được lưu vào bất kỳ cơ sở dữ liệu hoặc bộ nhớ máy chủ nào. Không có mẫu sinh trắc học nào được tạo hoặc lưu trữ.",
      logsTitle: "3. Tệp nhật ký",
      logsDesc: "Giống như nhiều trang web khác, chúng tôi sử dụng tệp nhật ký. Các tệp này chỉ ghi lại khách truy cập vào trang web - thường là quy trình chuẩn cho các công ty lưu trữ và là một phần của phân tích dịch vụ lưu trữ. Thông tin được thu thập bao gồm địa chỉ IP, loại trình duyệt, ISP, dấu ngày/giờ, trang giới thiệu/thoát và có thể cả số lần nhấp. Thông tin này được sử dụng để phân tích xu hướng và quản trị trang web.",
      cookiesTitle: "4. Cookie và Web Beacons",
      cookiesDesc: "Chúng tôi sử dụng 'cookie' để lưu trữ thông tin bao gồm sở thích của khách truy cập và các trang trên trang web mà khách truy cập đã truy cập hoặc ghé thăm. Thông tin được sử dụng để tối ưu hóa trải nghiệm của người dùng bằng cách tùy chỉnh nội dung trang web của chúng tôi dựa trên loại trình duyệt của khách truy cập và/hoặc thông tin khác.",
      dartTitle: "5. Cookie Google DoubleClick DART",
      dartDesc: "Google là một trong những nhà cung cấp bên thứ ba trên trang web của chúng tôi. Google cũng sử dụng cookie, được gọi là cookie DART, để phân phối quảng cáo cho khách truy cập trang web của chúng tôi dựa trên lượt truy cập của họ vào trang web của chúng tôi và các trang web khác trên internet. Tuy nhiên, khách truy cập có thể chọn từ chối sử dụng cookie DART bằng cách truy cập Chính sách quyền riêng tư của mạng nội dung và quảng cáo Google.",
      partnersTitle: "6. Đối tác quảng cáo",
      partnersDesc: "Một số nhà quảng cáo trên trang web của chúng tôi có thể sử dụng cookie và web beacon. Các đối tác quảng cáo của chúng tôi bao gồm Google. Mỗi đối tác quảng cáo của chúng tôi đều có Chính sách quyền riêng tư riêng cho các chính sách của họ về dữ liệu người dùng. Chúng tôi không có quyền truy cập hoặc kiểm soát các cookie này được các nhà quảng cáo bên thứ ba sử dụng.",
      thirdPartyTitle: "7. Chính sách quyền riêng tư của bên thứ ba",
      thirdPartyDesc: "Chính sách quyền riêng tư của EyeShapeAI không áp dụng cho các nhà quảng cáo hoặc trang web khác. Do đó, chúng tôi khuyên bạn nên tham khảo Chính sách quyền riêng tư tương ứng của các máy chủ quảng cáo bên thứ ba này để biết thông tin chi tiết hơn. Nó có thể bao gồm các thực tiễn của họ và hướng dẫn về cách chọn không tham gia một số tùy chọn.",
      ccpaTitle: "8. Quyền riêng tư CCPA (Không bán thông tin của tôi)",
      ccpaDesc: "Theo CCPA, cùng với các quyền khác, người tiêu dùng California có quyền: Yêu cầu doanh nghiệp thu thập dữ liệu cá nhân của người tiêu dùng tiết lộ các danh mục và các phần dữ liệu cá nhân cụ thể mà doanh nghiệp đã thu thập về người tiêu dùng; Yêu cầu doanh nghiệp xóa mọi dữ liệu cá nhân về người tiêu dùng mà doanh nghiệp đã thu thập; Yêu cầu doanh nghiệp bán dữ liệu cá nhân của người tiêu dùng không bán dữ liệu cá nhân của người tiêu dùng.",
      gdprTitle: "9. Quyền bảo vệ dữ liệu GDPR",
      gdprDesc: "Chúng tôi muốn đảm bảo rằng bạn nhận thức đầy đủ về tất cả các quyền bảo vệ dữ liệu của mình. Mọi người dùng đều được hưởng các quyền sau: Quyền truy cập; Quyền chỉnh sửa; Quyền xóa; Quyền hạn chế xử lý; Quyền phản đối xử lý; Quyền di chuyển dữ liệu.",
      childrenTitle: "10. Thông tin trẻ em",
      childrenDesc: "Một phần khác trong ưu tiên của chúng tôi là tăng cường bảo vệ trẻ em khi sử dụng internet. Chúng tôi khuyến khích cha mẹ và người giám hộ quan sát, tham gia và/hoặc giám sát và hướng dẫn hoạt động trực tuyến của họ. Chúng tôi không cố ý thu thập bất kỳ Thông tin nhận dạng cá nhân nào từ trẻ em dưới 13 tuổi.",
      linksTitle: "11. Liên kết đến các trang web khác",
      linksDesc: "Dịch vụ của chúng tôi có thể chứa các liên kết đến các trang web khác. Nếu bạn nhấp vào liên kết của bên thứ ba, bạn sẽ được chuyển hướng đến trang web đó. Lưu ý rằng các trang web bên ngoài này không do chúng tôi vận hành. Do đó, chúng tôi thực sự khuyên bạn nên xem lại Chính sách quyền riêng tư của các trang web này.",
      changesTitle: "12. Thay đổi đối với Chính sách quyền riêng tư này",
      changesDesc: "Chúng tôi có thể cập nhật Chính sách quyền riêng tư của mình theo thời gian. Do đó, bạn nên xem lại trang này định kỳ để biết bất kỳ thay đổi nào. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng Chính sách quyền riêng tư mới trên trang này. Những thay đổi này có hiệu lực ngay lập tức sau khi chúng được đăng trên trang này."
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};