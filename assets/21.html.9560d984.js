import{_ as e,r as o,o as c,c as i,b as n,d as t,e as s,a as p}from"./app.2a439a8a.js";const u={},l=n("h1",{id:"\u3010q021\u3011\u51FD\u6570\u67EF\u91CC\u5316",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q021\u3011\u51FD\u6570\u67EF\u91CC\u5316","aria-hidden":"true"},"#"),s(" \u3010Q021\u3011\u51FD\u6570\u67EF\u91CC\u5316")],-1),r={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"Issue",-1),d=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),m={href:"https://github.com/kangyana/daily-question/issues/21",target:"_blank",rel:"noopener noreferrer"},v=s("Issue 21"),g={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"Author",-1),_=s("\u56DE\u7B54\u8005: "),h={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},f=s("kangyana"),y=n("h2",{id:"_1-\u67EF\u91CC\u5316-currying",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u67EF\u91CC\u5316-currying","aria-hidden":"true"},"#"),s(" 1. \u67EF\u91CC\u5316\uFF08Currying\uFF09")],-1),w={href:"https://en.wikipedia.org/wiki/Currying",target:"_blank",rel:"noopener noreferrer"},j=s("\u67EF\u91CC\u5316\uFF08Currying\uFF09"),q=s("\u662F\u4E00\u79CD\u5173\u4E8E\u51FD\u6570\u7684\u9AD8\u9636\u6280\u672F\u3002\u5B83\u4E0D\u4EC5\u88AB\u7528\u4E8E JavaScript\uFF0C\u8FD8\u88AB\u7528\u4E8E\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u3002 "),x=n("code",null,"\u67EF\u91CC\u5316",-1),N=s(" \u662F\u4E00\u79CD\u51FD\u6570\u7684 "),B=n("strong",null,"\u8F6C\u6362",-1),D=s(" \uFF0C\u5B83\u662F\u6307\u5C06\u4E00\u4E2A\u51FD\u6570\u4ECE\u53EF\u8C03\u7528\u7684 f(a, b, c) \u8F6C\u6362\u4E3A\u53EF\u8C03\u7528\u7684 f(a)(b)(c)\u3002 "),E=n("code",null,"\u67EF\u91CC\u5316",-1),I=s(" \u4E0D\u4F1A\u8C03\u7528\u51FD\u6570\uFF0C\u5B83\u53EA\u662F\u5BF9\u51FD\u6570\u8FDB\u884C\u8F6C\u6362\u3002"),S=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u67EF\u91CC\u5316\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6C42\u548C\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curry</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B63\u5982\u4F60\u6240\u770B\u5230\u7684\uFF0C\u5B9E\u73B0\u975E\u5E38\u7B80\u5355\uFF1A\u53EA\u6709\u4E24\u4E2A\u5305\u88C5\u5668\uFF08wrapper\uFF09\u3002</p><ul><li>curry(func) \u7684\u7ED3\u679C\u5C31\u662F\u4E00\u4E2A\u5305\u88C5\u5668 function(a)\u3002</li><li>\u5F53\u5B83\u88AB\u50CF curriedSum(1) \u8FD9\u6837\u8C03\u7528\u65F6\uFF0C\u5B83\u7684\u53C2\u6570\u4F1A\u88AB\u4FDD\u5B58\u5728\u8BCD\u6CD5\u73AF\u5883\u4E2D\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5305\u88C5\u5668 function(b)\u3002</li><li>\u7136\u540E\u8FD9\u4E2A\u5305\u88C5\u5668\u88AB\u4EE5 2 \u4E3A\u53C2\u6570\u8C03\u7528\uFF0C\u5E76\u4E14\uFF0C\u5B83\u5C06\u8BE5\u8C03\u7528\u4F20\u9012\u7ED9\u539F\u59CB\u7684 sum \u51FD\u6570\u3002</li></ul>`,3),G=s("\u67EF\u91CC\u5316\u66F4\u9AD8\u7EA7\u7684\u5B9E\u73B0\uFF0C\u4F8B\u5982 lodash \u5E93\u7684 "),H={href:"https://lodash.com/docs#curry",target:"_blank",rel:"noopener noreferrer"},C=s("_.curry"),U=s("\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5305\u88C5\u5668\uFF0C\u8BE5\u5305\u88C5\u5668\u5141\u8BB8\u51FD\u6570\u88AB\u6B63\u5E38\u8C03\u7528\u6216\u8005\u4EE5\u504F\u51FD\u6570\uFF08partial\uFF09\u7684\u65B9\u5F0F\u8C03\u7528\uFF1A"),V=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> curriedSum <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">curry</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F7F\u7528\u6765\u81EA lodash \u5E93\u7684 _.curry</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curriedSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3\uFF0C\u4ECD\u53EF\u6B63\u5E38\u8C03\u7528</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curriedSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3\uFF0C\u4EE5\u504F\u51FD\u6570\u7684\u65B9\u5F0F\u8C03\u7528</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u67EF\u91CC\u5316\u7684\u76EE\u7684" tabindex="-1"><a class="header-anchor" href="#_2-\u67EF\u91CC\u5316\u7684\u76EE\u7684" aria-hidden="true">#</a> 2. \u67EF\u91CC\u5316\u7684\u76EE\u7684</h2><p>\u8981\u4E86\u89E3\u5B83\u7684\u597D\u5904\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u5B9E\u9645\u4E2D\u7684\u4F8B\u5B50\u3002</p><p>\u4F8B\u5982\uFF0C\u6211\u4EEC\u6709\u4E00\u4E2A\u7528\u4E8E\u683C\u5F0F\u5316\u548C\u8F93\u51FA\u4FE1\u606F\u7684\u65E5\u5FD7\uFF08logging\uFF09\u51FD\u6570 <code>log(date, importance, message)</code>\u3002 \u5728\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u6B64\u7C7B\u51FD\u6570\u5177\u6709\u5F88\u591A\u6709\u7528\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u901A\u8FC7\u7F51\u7EDC\u53D1\u9001\u65E5\u5FD7\uFF08log\uFF09\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">date<span class="token punctuation">,</span> importance<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">] [</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>importance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67EF\u91CC\u5316\u4E4B\u540E\uFF0Clog \u4ECD\u6B63\u5E38\u8FD0\u884C\uFF0C\u4E5F\u53EF\u4EE5\u4EE5\u67EF\u91CC\u5316\u5F62\u5F0F\u8FD0\u884C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>log <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">curry</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;DEBUG&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;some debug&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// log(a, b, c)</span>

<span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;DEBUG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;some debug&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// log(a)(b)(c)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u53EF\u4EE5\u8F7B\u677E\u5730\u4E3A\u5F53\u524D\u65E5\u5FD7\u521B\u5EFA\u4FBF\u6377\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// logNow \u4F1A\u662F\u5E26\u6709\u56FA\u5B9A\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u65E5\u5FD7\u7684\u504F\u51FD\u6570</span>
<span class="token keyword">var</span> logNow <span class="token operator">=</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528\u5B83</span>
<span class="token function">logNow</span><span class="token punctuation">(</span><span class="token string">&quot;INFO&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [HH:mm] INFO message</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0ClogNow \u662F\u5177\u6709\u56FA\u5B9A\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684 log\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5C31\u662F\u66F4\u7B80\u77ED\u7684\u201C\u504F\u5E94\u7528\u51FD\u6570\uFF08partially applied function\uFF09\u201D\u6216\u201C\u504F\u51FD\u6570\uFF08partial\uFF09\u201D\u3002</p><p>\u53EF\u4EE5\u66F4\u8FDB\u4E00\u6B65\uFF0C\u4E3A\u5F53\u524D\u7684\u8C03\u8BD5\u65E5\u5FD7\uFF08debug log\uFF09\u63D0\u4F9B\u4FBF\u6377\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> debugNow <span class="token operator">=</span> <span class="token function">logNow</span><span class="token punctuation">(</span><span class="token string">&quot;DEBUG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">debugNow</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [HH:mm] DEBUG message</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3\uFF1A</p><ul><li>\u67EF\u91CC\u5316\u4E4B\u540E\uFF0C\u6211\u4EEC\u6CA1\u6709\u4E22\u5931\u4EFB\u4F55\u4E1C\u897F\uFF1Alog \u4F9D\u7136\u53EF\u4EE5\u88AB\u6B63\u5E38\u8C03\u7528\u3002</li><li>\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u5730\u751F\u6210\u504F\u51FD\u6570\uFF0C\u4F8B\u5982\u7528\u4E8E\u751F\u6210\u4ECA\u5929\u7684\u65E5\u5FD7\u7684\u504F\u51FD\u6570\u3002</li></ul><h2 id="_3-\u67EF\u91CC\u5316\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-\u67EF\u91CC\u5316\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 3. \u67EF\u91CC\u5316\u7684\u5B9E\u73B0</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">curried</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> func<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">curried</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-\u603B\u7ED3" aria-hidden="true">#</a> 4. \u603B\u7ED3</h2><ul><li><code>\u67EF\u91CC\u5316</code> \u662F\u4E00\u79CD\u8F6C\u6362\uFF0C\u5C06 f(a,b,c) \u8F6C\u6362\u4E3A\u53EF\u4EE5\u88AB\u4EE5 f(a)(b)(c) \u7684\u5F62\u5F0F\u8FDB\u884C\u8C03\u7528\u3002JavaScript \u5B9E\u73B0\u901A\u5E38\u90FD\u4FDD\u6301\u8BE5\u51FD\u6570\u53EF\u4EE5\u88AB\u6B63\u5E38\u8C03\u7528\uFF0C\u5E76\u4E14\u5982\u679C\u53C2\u6570\u6570\u91CF\u4E0D\u8DB3\uFF0C\u5219\u8FD4\u56DE\u504F\u51FD\u6570\u3002</li><li><code>\u67EF\u91CC\u5316</code> \u8BA9\u6211\u4EEC\u80FD\u591F\u66F4\u5BB9\u6613\u5730\u83B7\u53D6\u504F\u51FD\u6570\u3002\u5C31\u50CF\u6211\u4EEC\u5728\u65E5\u5FD7\u8BB0\u5F55\u793A\u4F8B\u4E2D\u770B\u5230\u7684\u90A3\u6837\uFF0C\u666E\u901A\u51FD\u6570 log(date, importance, message) \u5728\u88AB\u67EF\u91CC\u5316\u4E4B\u540E\uFF0C\u5F53\u6211\u4EEC\u8C03\u7528\u5B83\u7684\u65F6\u5019\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\uFF08\u5982 log(date)\uFF09\u6216\u4E24\u4E2A\u53C2\u6570\uFF08log(date, importance)\uFF09\u65F6\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u504F\u51FD\u6570\u3002</li></ul>`,18);function $(F,J){const a=o("ExternalLinkIcon");return c(),i("div",null,[l,n("div",r,[k,n("p",null,[d,n("a",m,[v,t(a)])])]),n("div",g,[b,n("p",null,[_,n("a",h,[f,t(a)])])]),y,n("p",null,[n("a",w,[j,t(a)]),q,x,N,B,D,E,I]),S,n("p",null,[G,n("a",H,[C,t(a)]),U]),V])}const O=e(u,[["render",$],["__file","21.html.vue"]]);export{O as default};