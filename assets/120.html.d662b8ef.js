import{_ as o,r as c,o as t,c as p,b as n,d as a,e as s,a as r}from"./app.2a439a8a.js";const l={},d=n("h1",{id:"\u3010q120\u3011\u4EC0\u4E48\u662F-semver-1-2-3-\u4E0E-1-2-3-\u7684\u7248\u672C\u53F7\u8303\u56F4\u662F\u591A\u5C11",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q120\u3011\u4EC0\u4E48\u662F-semver-1-2-3-\u4E0E-1-2-3-\u7684\u7248\u672C\u53F7\u8303\u56F4\u662F\u591A\u5C11","aria-hidden":"true"},"#"),s(" \u3010Q120\u3011\u4EC0\u4E48\u662F semver\uFF0C~1.2.3 \u4E0E ^1.2.3 \u7684\u7248\u672C\u53F7\u8303\u56F4\u662F\u591A\u5C11")],-1),i={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"Issue",-1),u=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),m={href:"https://github.com/kangyana/daily-question/issues/120",target:"_blank",rel:"noopener noreferrer"},_=s("Issue 120"),g={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"Author",-1),b=s("\u56DE\u7B54\u8005: "),v={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},j=s("kangyana"),w=n("code",null,"semver",-1),y=s("\uFF0C"),x=n("code",null,"Semantic Versioning",-1),f=s(" \u8BED\u4E49\u5316\u7248\u672C\u7684\u7F29\u5199\uFF0C\u6587\u6863\u53EF\u89C1 "),V={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},B=s("https://semver.org/ (opens new window)"),I=s("\uFF0C\u5B83\u7531 "),N=n("code",null,"[major, minor, patch]",-1),q=s(" \u4E09\u90E8\u5206\u7EC4\u6210\uFF0C\u5176\u4E2D"),C=r(`<ul><li><code>major</code>\uFF1A\u5F53\u4F60\u53D1\u4E86\u4E00\u4E2A\u542B\u6709 Breaking Change \u7684 API</li><li><code>minor</code>\uFF1A\u5F53\u4F60\u65B0\u589E\u4E86\u4E00\u4E2A\u5411\u540E\u517C\u5BB9\u7684\u529F\u80FD\u65F6</li><li><code>patch</code>\uFF1A\u5F53\u4F60\u4FEE\u590D\u4E86\u4E00\u4E2A\u5411\u540E\u517C\u5BB9\u7684 Bug \u65F6</li></ul><p>\u5047\u8BBE\u4F60\u7684\u7248\u672C\u5E93\u4E2D\u542B\u6709\u4E00\u4E2A\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5047\u8BBE\u539F\u51FD\u6570</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">number</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>

<span class="token comment">// Patch Version\uFF0C\u4FEE\u590D\u5C0F Bug</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">number</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>

<span class="token comment">// Minor Version\uFF0C\u5411\u540E\u517C\u5BB9</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>rest<span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">number</span> <span class="token operator">=&gt;</span>
  rest<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> s <span class="token operator">+</span> x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Marjor Version\uFF0C\u51FA\u73B0 Breaking Change</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sub</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E <code>~1.2.3</code> \u800C\u8A00\uFF0C\u5B83\u7684\u7248\u672C\u53F7\u8303\u56F4\u662F <code>&gt;=1.2.3 &lt;1.3.0</code></p><p>\u5BF9\u4E8E <code>^1.2.3</code> \u800C\u8A00\uFF0C\u5B83\u7684\u7248\u672C\u53F7\u8303\u56F4\u662F <code>&gt;=1.2.3 &lt;2.0.0</code></p><p>\u5F53\u6211\u4EEC <code>npm i</code> \u65F6\uFF0C\u9ED8\u8BA4\u7684\u7248\u672C\u53F7\u662F <code>^</code>\uFF0C\u53EF\u6700\u5927\u9650\u5EA6\u5730\u5728\u5411\u540E\u517C\u5BB9\u4E0E\u65B0\u7279\u6027\u4E4B\u95F4\u505A\u53D6\u820D\uFF0C\u4F46\u662F\u6709\u4E9B\u5E93\u6709\u53EF\u80FD\u4E0D\u9075\u5FAA\u8BE5\u89C4\u5219\uFF0C\u6211\u4EEC\u5728\u9879\u76EE\u65F6\u5E94\u5F53\u4F7F\u7528 <code>yarn.lock/package-lock.json</code> \u9501\u5B9A\u7248\u672C\u53F7\u3002</p><p>\u6211\u4EEC\u770B\u770B <code>package-lock</code> \u7684\u5DE5\u4F5C\u6D41\u7A0B\u3002</p><ul><li><code>npm i webpack</code>\uFF0C\u6B64\u65F6\u4E0B\u8F7D\u6700\u65B0 webpack \u7248\u672C <code>5.58.2</code>\uFF0C\u5728 <code>package.json</code> \u4E2D\u663E\u793A\u4E3A <code>webpack: ^5.58.2</code>\uFF0C\u7248\u672C\u53F7\u8303\u56F4\u662F <code>&gt;=5.58.2 &lt; 6.0.0</code></li><li>\u5728 <code>package-lock.json</code> \u4E2D\u5168\u5C40\u641C\u7D22 webpack\uFF0C\u53D1\u73B0 webpack \u7684\u7248\u672C\u662F\u88AB\u9501\u5B9A\u7684\uFF0C\u4E5F\u662F\u8BF4\u5B83\u662F\u786E\u5B9A\u7684 <code>webpack: 5.58.2</code></li><li>\u7ECF\u8FC7\u4E00\u4E2A\u6708\u540E\uFF0Cwebpack \u6700\u65B0\u7248\u672C\u4E3A <code>5.100.0</code>\uFF0C\u4F46\u7531\u4E8E webpack \u7248\u672C\u5728 <code>package-lock.json</code> \u4E2D\u9501\u6B7B\uFF0C\u6BCF\u6B21\u4E0A\u7EBF\u65F6\u4ECD\u7136\u4E0B\u8F7D <code>5.58.2</code> \u7248\u672C\u53F7</li><li>\u7ECF\u8FC7\u4E00\u5E74\u540E\uFF0Cwebpack \u6700\u65B0\u7248\u672C\u4E3A <code>6.0.0</code>\uFF0C\u4F46\u7531\u4E8E webpack \u7248\u672C\u5728 <code>package-lock.json</code> \u4E2D\u9501\u6B7B\uFF0C\u4E14 <code>package.json</code> \u4E2D webpack \u7248\u672C\u53F7\u4E3A <code>^5.58.2</code>\uFF0C\u4E0E <code>package-lock.json</code> \u4E2D\u4E3A\u4E00\u81F4\u7684\u7248\u672C\u8303\u56F4\u3002\u6BCF\u6B21\u4E0A\u7EBF\u65F6\u4ECD\u7136\u4E0B\u8F7D <code>5.58.2</code> \u7248\u672C\u53F7</li><li>\u652F\u7EBF\u5267\u60C5\uFF1A\u7ECF\u8FC7\u4E00\u5E74\u540E\uFF0Cwebpack \u6700\u65B0\u7248\u672C\u4E3A <code>6.0.0</code>\uFF0C\u9700\u8981\u8FDB\u884C\u5347\u7EA7\uFF0C\u6B64\u65F6\u624B\u52A8\u6539\u5199 <code>package.json</code> \u4E2D webpack \u7248\u672C\u53F7\u4E3A <code>^6.0.0</code>\uFF0C\u4E0E <code>package-lock.json</code> \u4E2D\u4E0D\u662F\u4E00\u81F4\u7684\u7248\u672C\u8303\u56F4\u3002 \u6B64\u65F6 <code>npm i</code> \u5C06\u4E0B\u8F7D <code>6.0.0</code> \u6700\u65B0\u7248\u672C\u53F7\uFF0C\u5E76\u91CD\u5199 <code>package-lock.json</code> \u4E2D\u9501\u5B9A\u7684\u7248\u672C\u53F7\u4E3A <code>6.0.0</code></li></ul><h2 id="\u7ECF\u5178\u516B\u80A1\u6587" tabindex="-1"><a class="header-anchor" href="#\u7ECF\u5178\u516B\u80A1\u6587" aria-hidden="true">#</a> \u7ECF\u5178\u516B\u80A1\u6587</h2><p><code>npm i</code> \u67D0\u4E2A package \u65F6\u4F1A\u4FEE\u6539 <code>package-lock.json</code> \u4E2D\u7684\u7248\u672C\u53F7\u5417\uFF1F</p><p>\u5F53 <code>package-lock.json</code> \u8BE5 package \u9501\u6B7B\u7684\u7248\u672C\u53F7\u7B26\u5408 <code>package.json </code>\u4E2D\u7684\u7248\u672C\u53F7\u8303\u56F4\u65F6\uFF0C\u5C06\u4EE5 <code>package-lock.json</code> \u9501\u6B7B\u7248\u672C\u53F7\u4E3A\u4E3B\u3002</p><p>\u5F53 <code>package-lock.json</code> \u8BE5 package \u9501\u6B7B\u7684\u7248\u672C\u53F7\u4E0D\u7B26\u5408 <code>package.json</code> \u4E2D\u7684\u7248\u672C\u53F7\u8303\u56F4\u65F6\uFF0C\u5C06\u4F1A\u5B89\u88C5\u8BE5 package \u7B26\u5408 <code>package.json</code> \u7248\u672C\u53F7\u8303\u56F4\u7684\u6700\u65B0\u7248\u672C\u53F7\uFF0C\u5E76\u91CD\u5199 <code>package-lock.json</code></p>`,12);function E(A,L){const e=c("ExternalLinkIcon");return t(),p("div",null,[d,n("div",i,[k,n("p",null,[u,n("a",m,[_,a(e)])])]),n("div",g,[h,n("p",null,[b,n("a",v,[j,a(e)])])]),n("p",null,[w,y,x,f,n("a",V,[B,a(e)]),I,N,q]),C])}const P=o(l,[["render",E],["__file","120.html.vue"]]);export{P as default};