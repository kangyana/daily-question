import{_ as d,r as a,o as n,c as r,b as e,d as c,e as o,a as s}from"./app.2a439a8a.js";const i={},l=e("h1",{id:"\u3010q057\u3011react-\u751F\u547D\u5468\u671F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u3010q057\u3011react-\u751F\u547D\u5468\u671F","aria-hidden":"true"},"#"),o(" \u3010Q057\u3011React \u751F\u547D\u5468\u671F")],-1),p=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u66F4\u591A\u63CF\u8FF0"),e("p",null,"\u4E09\u4E2A\u5E9F\u5F03\u7684\u751F\u547D\u5468\u671F")],-1),h={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"Issue",-1),u=o("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),m={href:"https://github.com/kangyana/daily-question/issues/57",target:"_blank",rel:"noopener noreferrer"},g=o("Issue 57"),f={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"Author",-1),S=o("\u56DE\u7B54\u8005: "),x={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},b=o("kangyana"),D=s('<h2 id="_1-react-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_1-react-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 1. React \u751F\u547D\u5468\u671F</h2><p>React 16.8+\u7684\u751F\u547D\u5468\u671F\u5206\u4E3A\u4E09\u4E2A\u9636\u6BB5\uFF0C\u5206\u522B\u662F <code>\u6302\u8F7D\u9636\u6BB5</code>\u3001<code>\u66F4\u65B0\u9636\u6BB5</code>\u3001<code>\u5378\u8F7D\u9636\u6BB5</code>\u3002</p><p><img src="https://img-blog.csdnimg.cn/20210515113558981.png" alt="Alt"></p><p><img src="https://raw.githubusercontent.com/kangyana/img-storage/master/react_lifecycle.jpg" alt="Alt"></p><h2 id="_2-\u6302\u8F7D\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-\u6302\u8F7D\u9636\u6BB5" aria-hidden="true">#</a> 2. \u6302\u8F7D\u9636\u6BB5</h2><ul><li>constructor \u6784\u9020\u51FD\u6570\uFF0C\u6700\u5148\u88AB\u6267\u884C,\u6211\u4EEC\u901A\u5E38\u5728\u6784\u9020\u51FD\u6570\u91CC\u521D\u59CB\u5316 <code>state</code> \u5BF9\u8C61\u6216\u8005\u7ED9\u81EA\u5B9A\u4E49\u65B9\u6CD5\u7ED1\u5B9A <code>this</code>\u3002</li><li>getDerivedStateFromProps <code>static getDerivedStateFromProps(nextProps, prevState)</code>\uFF0C\u8FD9\u662F\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u5F53\u6211\u4EEC\u63A5\u6536\u5230\u65B0\u7684\u5C5E\u6027\u60F3\u53BB\u4FEE\u6539 <code>state</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>getDerivedStateFromProps</code>\u3002</li><li>render <code>render</code> \u662F\u7EAF\u51FD\u6570\uFF0C\u53EA\u8FD4\u56DE\u9700\u8981\u6E32\u67D3\u7684\u4E1C\u897F\uFF0C\u4E0D\u5E94\u8BE5\u5305\u542B\u5176\u5B83\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u53EF\u4EE5\u8FD4\u56DE\u539F\u751F\u7684DOM\u3001React\u7EC4\u4EF6\u3001Fragment\u3001Portals\u3001\u5B57\u7B26\u4E32\u548C\u6570\u5B57\u3001Boolean\u548Cnull\u7B49\u5185\u5BB9\u3002</li><li>componentDidMount \u7EC4\u4EF6\u88C5\u8F7D\u4E4B\u540E\u8C03\u7528\uFF0C\u6B64\u65F6\u53EF\u4EE5\u83B7\u53D6\u5230DOM\u8282\u70B9\u5E76\u64CD\u4F5C\uFF0C\u6BD4\u5982\u5BF9canvas\uFF0Csvg\u7684\u64CD\u4F5C\uFF0C\u670D\u52A1\u5668\u8BF7\u6C42\uFF0C\u8BA2\u9605\u90FD\u53EF\u4EE5\u5199\u5728\u8FD9\u4E2A\u91CC\u9762\u3002 \u4F46\u662F\u8BB0\u5F97\u5728<code>componentWillUnmount</code>\u4E2D\u53D6\u6D88\u8BA2\u9605\u3002</li></ul><h2 id="_3-\u66F4\u65B0\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_3-\u66F4\u65B0\u9636\u6BB5" aria-hidden="true">#</a> 3. \u66F4\u65B0\u9636\u6BB5</h2><ul><li>getDerivedStateFromProps \u6B64\u65B9\u6CD5\u5728\u66F4\u65B0\u4E2A\u6302\u8F7D\u9636\u6BB5\u90FD\u53EF\u80FD\u4F1A\u8C03\u7528\u3002</li><li>shouldComponentUpdate <code>shouldComponentUpdate(nextProps, nextState)</code>\uFF0C\u6709\u4E24\u4E2A\u53C2\u6570 <code>nextProps</code> \u548C <code>nextState</code>\uFF0C\u8868\u793A\u65B0\u7684\u5C5E\u6027\u548C\u53D8\u5316\u4E4B\u540E\u7684 <code>state</code>\u3002 \u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0Ctrue\u8868\u793A\u4F1A\u89E6\u53D1\u91CD\u65B0\u6E32\u67D3\uFF0Cfalse\u8868\u793A\u4E0D\u4F1A\u89E6\u53D1\u91CD\u65B0\u6E32\u67D3\uFF0C\u9ED8\u8BA4\u8FD4\u56DEtrue\u3002 \u6211\u4EEC\u901A\u5E38\u5229\u7528\u6B64\u751F\u547D\u5468\u671F\u6765\u4F18\u5316React\u7A0B\u5E8F\u6027\u80FD\u3002</li><li>render \u66F4\u65B0\u9636\u6BB5\u4E5F\u4F1A\u89E6\u53D1\u6B64\u751F\u547D\u5468\u671F\u3002</li><li>getSnapshotBeforeUpdate <code>getSnapshotBeforeUpdate(prevProps, prevState)</code>\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u5728 <code>render</code> \u4E4B\u540E\uFF0C<code>componentDidUpdate</code> \u4E4B\u524D\u8C03\u7528\u3002 \u6709\u4E24\u4E2A\u53C2\u6570 <code>prevProps</code> \u548C <code>prevState</code>\uFF0C\u8868\u793A\u4E4B\u524D\u7684\u5C5E\u6027\u548C\u4E4B\u524D\u7684 <code>state</code>\u3002 \u8FD9\u4E2A\u51FD\u6570\u6709\u4E00\u4E2A\u8FD4\u56DE\u503C\uFF0C\u4F1A\u4F5C\u4E3A\u7B2C\u4E09\u4E2A\u53C2\u6570\u4F20\u7ED9 <code>componentDidUpdate</code>\uFF0C\u5982\u679C\u4F60\u4E0D\u60F3\u8981\u8FD4\u56DE\u503C\uFF0C\u53EF\u4EE5\u8FD4\u56DE <code>null</code>\u3002 \u6B64\u751F\u547D\u5468\u671F\u5FC5\u987B\u4E0E <code>componentDidUpdate</code> \u642D\u914D\u4F7F\u7528\u3002</li><li>componentDidUpdate <code>componentDidUpdate(prevProps, prevState, snapshot)</code>\uFF0C\u8BE5\u65B9\u6CD5\u5728 <code>getSnapshotBeforeUpdate</code> \u65B9\u6CD5\u4E4B\u540E\u88AB\u8C03\u7528\u3002 \u6709\u4E09\u4E2A\u53C2\u6570 <code>prevProps</code>\uFF0C<code>prevState</code>\uFF0C<code>snapshot</code>\uFF0C\u8868\u793A\u4E4B\u524D\u7684 <code>props</code>\uFF0C\u4E4B\u524D\u7684 <code>state</code>\uFF0C\u548C <code>snapshot</code>\u3002 \u7B2C\u4E09\u4E2A\u53C2\u6570\u662F <code>getSnapshotBeforeUpdate</code> \u8FD4\u56DE\u7684\u3002 \u5982\u679C\u89E6\u53D1\u67D0\u4E9B\u56DE\u8C03\u51FD\u6570\u65F6\u9700\u8981\u7528\u5230 DOM \u5143\u7D20\u7684\u72B6\u6001\uFF0C\u5219\u5C06\u5BF9\u6BD4\u6216\u8BA1\u7B97\u7684\u8FC7\u7A0B\u8FC1\u79FB\u81F3 <code>getSnapshotBeforeUpdate</code>\uFF0C\u7136\u540E\u5728 <code>componentDidUpdate</code> \u4E2D\u7EDF\u4E00\u89E6\u53D1\u56DE\u8C03\u6216\u66F4\u65B0\u72B6\u6001\u3002</li></ul><h2 id="_4-\u5378\u8F7D\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_4-\u5378\u8F7D\u9636\u6BB5" aria-hidden="true">#</a> 4. \u5378\u8F7D\u9636\u6BB5</h2><ul><li>componentWillUnmount \u5F53\u7EC4\u4EF6\u88AB\u5378\u8F7D\u6216\u8005\u9500\u6BC1\u4E86\u5C31\u4F1A\u8C03\u7528\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u4E2A\u51FD\u6570\u91CC\u53BB\u6E05\u9664\u4E00\u4E9B\u5B9A\u65F6\u5668\uFF0C\u53D6\u6D88\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u6E05\u7406\u65E0\u6548\u7684DOM\u5143\u7D20\u7B49\u5783\u573E\u6E05\u7406\u5DE5\u4F5C\u3002</li></ul><h2 id="_5-\u4E09\u4E2A\u5E9F\u5F03\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_5-\u4E09\u4E2A\u5E9F\u5F03\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 5. \u4E09\u4E2A\u5E9F\u5F03\u7684\u751F\u547D\u5468\u671F</h2><p>React 16\u4E4B\u540E\u6709\u4E09\u4E2A\u751F\u547D\u5468\u671F\u88AB\u5E9F\u5F03\uFF1A</p><ul><li>componentWillMount</li><li>componentWillReceiveProps</li><li>componentWillUpdate</li></ul><p>\u56E0\u4E3A\u8FD9\u4E9B <code>\u751F\u547D\u5468\u671F</code> \u65B9\u6CD5\u5BB9\u6613\u88AB\u8BEF\u89E3\u548C\u6EE5\u7528\u3002</p><h3 id="\u4E3A\u4EC0\u4E48\u8981\u5E9F\u5F03\u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50-\u5B83\u4EEC\u6709\u54EA\u4E9B\u95EE\u9898\u5462-react-\u53C8\u662F\u5982\u4F55\u89E3\u51B3\u7684\u5462" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u5E9F\u5F03\u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50-\u5B83\u4EEC\u6709\u54EA\u4E9B\u95EE\u9898\u5462-react-\u53C8\u662F\u5982\u4F55\u89E3\u51B3\u7684\u5462" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u5E9F\u5F03\u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF1F\u5B83\u4EEC\u6709\u54EA\u4E9B\u95EE\u9898\u5462\uFF1FReact \u53C8\u662F\u5982\u4F55\u89E3\u51B3\u7684\u5462\uFF1F</h3><p>\u6211\u4EEC\u77E5\u9053 React \u7684\u66F4\u65B0\u6D41\u7A0B\u5206\u4E3A\uFF1A<code>render\u9636\u6BB5</code> \u548C <code>commit\u9636\u6BB5</code>\u3002 \u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u90FD\u662F\u5728 <code>render\u9636\u6BB5</code> \u6267\u884C\u7684\u3002</p><p>\u5728 <code>fiber</code> \u67B6\u6784\u88AB\u5E94\u7528\u4E4B\u540E\uFF0C\u4F4E\u4F18\u5148\u7EA7\u4EFB\u52A1\u7684 <code>render\u9636\u6BB5</code> \u53EF\u4EE5\u88AB\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u6253\u65AD\u3002 \u800C\u8FD9\u5BFC\u81F4\u7684\u95EE\u9898\u5C31\u662F\uFF1A\u5728 <code>render\u9636\u6BB5</code> \u6267\u884C\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u53EF\u80FD\u88AB\u6267\u884C\u591A\u6B21\uFF0C\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u4E5F\u4F1A\u88AB\u6267\u884C\u591A\u6B21\u3002</p><p>\u7528\u4E00\u4E2A\u9759\u6001\u51FD\u6570 <code>getDerivedStateFromProps</code> \u6765\u53D6\u4EE3\u88AB\u5E9F\u5F03\u7684\u51E0\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u8FD9\u6837\u5F00\u53D1\u8005\u5C31\u65E0\u6CD5\u901A\u8FC7 <code>this</code> \u83B7\u53D6\u5230\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF0C\u4E5F\u4E0D\u80FD\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u4EE5\u53CA\u8C03\u7528 <code>this.setState</code>\u3002 \u5B83\u5C31\u662F\u5F3A\u5236\u5F00\u53D1\u8005\u5728 <code>render</code> \u4E4B\u524D\u53EA\u505A\u65E0\u526F\u4F5C\u7528\u7684\u64CD\u4F5C\uFF0C\u95F4\u63A5\u5F3A\u5236\u6211\u4EEC\u65E0\u6CD5\u8FDB\u884C\u8FD9\u4E9B\u4E0D\u5408\u7406\u4E0D\u89C4\u8303\u7684\u64CD\u4F5C\uFF0C\u4ECE\u800C\u907F\u514D\u5BF9\u751F\u547D\u5468\u671F\u7684\u6EE5\u7528\u3002</p>',18);function U(P,k){const t=a("ExternalLinkIcon");return n(),r("div",null,[l,p,e("div",h,[_,e("p",null,[u,e("a",m,[g,c(t)])])]),e("div",f,[v,e("p",null,[S,e("a",x,[b,c(t)])])]),D])}const R=d(i,[["render",U],["__file","57.html.vue"]]);export{R as default};