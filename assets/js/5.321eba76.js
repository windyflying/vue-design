(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{81:function(e,t,r){"use strict";r.r(t);var v=r(0),a=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"写在前面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写在前面","aria-hidden":"true"}},[e._v("#")]),e._v(" 写在前面")]),r("h2",{attrs:{id:"文章特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文章特点","aria-hidden":"true"}},[e._v("#")]),e._v(" 文章特点")]),r("ul",[r("li",[e._v("超级详细 - 逐行级别的分析")])]),r("p",[e._v("所谓逐行并非一行接着一行，逐行指的是讲解的详细程度，这套文章将致力于覆盖所有核心代码，毕竟每一句代码都有他存在的意思，假如我们不讲明白任何一句代码的意义，那又怎么敢说是源码分析呢？")]),r("ul",[r("li",[e._v("实时更新 - 与 "),r("code",[e._v("Vue")]),e._v(" 源码 "),r("code",[e._v("dev")]),e._v(" 分支保持同步")])]),r("p",[e._v("这套文章的特点之一就是"),r("strong",[e._v("永远不会过时")]),e._v("，因为我们会跟随 "),r("code",[e._v("Vue")]),e._v(" 源码 "),r("code",[e._v("dev")]),e._v(" 分支的脚步更新文章的内容，这对于读者的好处是学习的总是最新的。（注：有的时候 "),r("code",[e._v("dev")]),e._v(" 分支的更新到文章的更新会有稍许延迟）。")]),r("p",[e._v("这里要解释一下，有的时候我们在讲解一个文件的代码时，你会发现，有些内容我们并没有进行讲解，那是因为这部分内容可能与本节的主题无关，但这些内容绝对不会被遗漏，它们会被放到合适的地方进行讲解")]),r("ul",[r("li",[e._v("深度分析 - 讲解issue")])]),r("p",[e._v("我们知道 "),r("code",[e._v("Vue")]),e._v(" 这个项目自诞生以来一直都在不断的更新完善，比如添加新的特性，修复已知bug等等。而在这个过程中源码也将越来越完善，这也意味着代码曾经并不完善，本套文章在分析源码时除了告诉你这段代码为什么这么写之外，还会根据相关 "),r("code",[e._v("issue")]),e._v(" 分析这段代码之前是怎么写的以及存在的问题。")]),r("h2",{attrs:{id:"为什么要阅读源码？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要阅读源码？","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么要阅读源码？")]),r("p",[e._v("如果你要问我这个问题，我会反问你：为什么要读书(技术书)？不知道你对这句话怎么看："),r("strong",[e._v("源码难道不是更精华的书吗？")])]),r("h2",{attrs:{id:"你应该了解的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#你应该了解的","aria-hidden":"true"}},[e._v("#")]),e._v(" 你应该了解的")]),r("p",[e._v("文章将会尽可能详细，且尽可能对基础的知识点进行讲解，但需要太多口舌的东西即使再基础也不会去讲，这里列出我希望你在阅读该系列文章前最好了解的东西：")]),r("ul",[r("li",[e._v("ES6+")]),r("li",[e._v("node & npm & package.json")]),r("li",[e._v("Rollup（这东西要比webpack容易上手的多）\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://rollupjs.org/guide/en",target:"_blank",rel:"noopener noreferrer"}},[e._v("英文文档")])]),r("li",[r("a",{attrs:{href:"https://rollupjs.org/guide/zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("中文文档")])])])]),r("li",[e._v("flow（类型检查）\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://flow.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("flow")])])])])]),r("p",[e._v("由于 Vue 的源码采用 ES6，所以你至少应该掌握 ES6 才能看得懂，其次你最好对 "),r("code",[e._v("package.json")]),e._v(" 中的字段的作用有所了解。由于 Vue 使用 "),r("code",[e._v("Rollup")]),e._v(" 构建，所以你不了解 "),r("code",[e._v("Rollup")]),e._v(" 的话，你就看不懂 Vue 的构建配置，最后 Vue 采用 "),r("code",[e._v("flow")]),e._v(" 做类型系统，最起码就应该知道 "),r("code",[e._v("flow")]),e._v(" 的简单语法，否则会影响你看源码。")]),r("h2",{attrs:{id:"推荐阅读这套文章的方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读这套文章的方式","aria-hidden":"true"}},[e._v("#")]),e._v(" 推荐阅读这套文章的方式")]),r("p",[e._v("既然是阅读源码，没有源码怎么读？所以你要使用你喜欢的方式拿到源码才行，最简单的方式是，clone 一份源码到你的本地。如果你不想这么做，你可以安装一个 "),r("code",[e._v("chrome")]),e._v(" 的扩展程序，使得你能够以在线资源管理器的方式阅读GitHub仓库的代码，我常用的 "),r("code",[e._v("chrome")]),e._v(" 扩展是："),r("a",{attrs:{href:"https://github.com/buunguyen/octotree",target:"_blank",rel:"noopener noreferrer"}},[e._v("octotree")]),e._v("，类似的扩展还有很多，你喜欢就好。")]),r("h2",{attrs:{id:"一点补充"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一点补充","aria-hidden":"true"}},[e._v("#")]),e._v(" 一点补充")]),r("p",[e._v("有的同学可能会有疑问，比如："),r("em",[e._v("你又不是作者本人，你怎么知道人家的代码为什么那么写")]),e._v("、"),r("em",[e._v("Vue.js又不是你写的，谁知道你分析的对不对")]),e._v(" 等等。")]),r("p",[e._v("对于第一个问题我想说的是，你们的怀疑是对的，毕竟最有权威分析 "),r("code",[e._v("Vue")]),e._v(" 源码的人必然是作者本身，但同学们要知道"),r("strong",[e._v("作者(小右)才没有时间来给大家写一套源码分析的文章")]),e._v("。对于第二个问题，"),r("code",[e._v("Vue")]),e._v(" 确实不是我写的，但为了证明这套文章还是稍微有点质量的，在这里我把看源码过程中提过的一些 "),r("code",[e._v("PR")]),e._v(" 贴在下面，也证明我确实对 "),r("code",[e._v("Vue")]),e._v(" 有些粗浅的理解。")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/pull/7981",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/7981")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/pull/6795",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/6795")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/pull/7875",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/7875")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/pull/6833",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/6833")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/pull/7308",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/7308")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/pull/7762",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/7762")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/pull/7510",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/7510")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue/pull/8734",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/8734")])])]),r("p",[e._v("说实话，上面的 "),r("code",[e._v("PR")]),e._v(" 都是些微不足道的，因为写文章需要大量的时间，随着这些文章的完成，我很希望抽出时间做一些实质性的贡献。")])])}],!1,null,null,null);t.default=a.exports}}]);