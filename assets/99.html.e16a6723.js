import{_ as p,r as o,o as c,c as l,b as n,d as e,e as s,a as t}from"./app.2a439a8a.js";const i={},r=n("h1",{id:"\u3010q099\u3011hmr-\u539F\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q099\u3011hmr-\u539F\u7406","aria-hidden":"true"},"#"),s(" \u3010Q099\u3011HMR \u539F\u7406")],-1),u={class:"custom-container tip"},d=n("p",{class:"custom-container-title"},"Issue",-1),k=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),v={href:"https://github.com/kangyana/daily-question/issues/99",target:"_blank",rel:"noopener noreferrer"},m=s("Issue 99"),h={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"Author",-1),_=s("\u56DE\u7B54\u8005: "),y={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},g=s("kangyana"),f=n("h2",{id:"_1-hmr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-hmr","aria-hidden":"true"},"#"),s(" 1. HMR")],-1),w=n("p",null,"\u6A21\u5757\u70ED\u66FF\u6362(hot module replacement \u6216 HMR)\u662F webpack \u63D0\u4F9B\u7684\u6700\u6709\u7528\u7684\u529F\u80FD\u4E4B\u4E00\u3002 \u5B83\u5141\u8BB8\u5728\u8FD0\u884C\u65F6\u66F4\u65B0\u6240\u6709\u7C7B\u578B\u7684\u6A21\u5757\uFF0C\u800C\u65E0\u9700\u5B8C\u5168\u5237\u65B0\u3002",-1),H=n("p",null,[s("\u6CE8\u610F\uFF1AHMR \u4E0D\u9002\u7528\u4E8E "),n("strong",null,"\u751F\u4EA7\u73AF\u5883"),s("\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u5E94\u5F53\u7528\u4E8E "),n("strong",null,"\u5F00\u53D1\u73AF\u5883"),s("\u3002")],-1),M=n("h2",{id:"_2-\u542F\u7528-hmr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-\u542F\u7528-hmr","aria-hidden":"true"},"#"),s(" 2. \u542F\u7528 HMR")],-1),R=s("\u6B64\u529F\u80FD\u53EF\u4EE5\u5F88\u5927\u7A0B\u5EA6\u63D0\u9AD8\u751F\u4EA7\u6548\u7387\u3002\u6211\u4EEC\u8981\u505A\u7684\u5C31\u662F\u66F4\u65B0 "),j={href:"https://github.com/webpack/webpack-dev-server",target:"_blank",rel:"noopener noreferrer"},x=s("webpack-dev-server"),q=s(" \u914D\u7F6E\uFF0C \u7136\u540E\u4F7F\u7528 webpack \u5185\u7F6E\u7684 "),I=n("code",null,"HMR",-1),S=s(" \u63D2\u4EF6\u3002 \u6211\u4EEC\u8FD8\u8981\u5220\u9664\u6389 "),P=n("code",null,"print.js",-1),C=s(" \u7684\u5165\u53E3\u8D77\u70B9\uFF0C \u56E0\u4E3A\u73B0\u5728\u5DF2\u7ECF\u5728 "),E=n("code",null,"index.js",-1),N=s(" \u6A21\u5757\u4E2D\u5F15\u7528\u4E86\u5B83\u3002"),T=n("p",null,[s("\u4ECE "),n("code",null,"webpack-dev-server"),s(" v4.0.0 \u5F00\u59CB\uFF0C\u70ED\u6A21\u5757\u66FF\u6362\u662F\u9ED8\u8BA4\u5F00\u542F\u7684\u3002")],-1),L=s("\u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u5728\u6280\u672F\u9009\u578B\u4E2D\u4F7F\u7528\u4E86 "),V=n("code",null,"webpack-dev-middleware",-1),W=s(" \u800C\u6CA1\u6709\u4F7F\u7528 "),B=n("code",null,"webpack-dev-server",-1),D=s("\uFF0C \u8BF7\u4F7F\u7528 "),A={href:"https://github.com/webpack-contrib/webpack-hot-middleware",target:"_blank",rel:"noopener noreferrer"},J=s("webpack-hot-middleware"),G=s(" \u4F9D\u8D56\u5305\uFF0C\u4EE5\u5728\u4F60\u7684\u81EA\u5B9A\u4E49\u670D\u52A1\u5668\u6216\u5E94\u7528\u7A0B\u5E8F\u4E0A\u542F\u7528 "),O=n("code",null,"HMR",-1),Q=s("\u3002"),z=t(`<p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
       <span class="token comment">// print: &#39;./src/print.js&#39;, \u5220\u9664 print \u5165\u53E3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;inline-source-map&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">static</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u542F HMR</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hot Module Replacement&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].bundle.js&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u4E5F\u53EF\u4EE5\u4E3A <code>HMR</code> \u63D0\u4F9B\u5165\u53E3\uFF1A <strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// print: &#39;./src/print.js&#39;, // \u5220\u9664 print \u5165\u53E3</span>
      <span class="token comment">// \u6307\u5B9A HMR \u7684\u8FD0\u884C\u65F6</span>
      <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token string">&#39;webpack/hot/dev-server.js&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6307\u5B9A \u91CD\u65B0\u52A0\u8F7D \u65B9\u5F0F</span>
      <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token string">&#39;webpack-dev-server/client/index.js?hot=true&amp;live-reload=true&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;inline-source-map&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">static</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span>
     <span class="token comment">// \u6307\u5B9A \u91CD\u65B0\u52A0\u8F7D \u65B9\u5F0F</span>
     <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
     <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hot Module Replacement&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token comment">// HMR \u7684\u63D2\u4EF6</span>
     <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].bundle.js&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),F=s("\u6CE8\u610F\uFF1A\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u6765\u4FEE\u6539 "),K={href:"https://github.com/webpack/webpack-dev-server",target:"_blank",rel:"noopener noreferrer"},U=s("webpack-dev-server"),X=s(" \u7684\u914D\u7F6E\uFF1Awebpack serve --hot-only\u3002"),Y=t(`<p>\u73B0\u5728\uFF0C\u6211\u4EEC\u6765\u4FEE\u6539 <code>index.js</code> \u6587\u4EF6\uFF0C\u4EE5\u4FBF\u5F53 <code>print.js</code> \u5185\u90E8\u53D1\u751F\u53D8\u66F4\u65F6\u53EF\u4EE5\u544A\u8BC9 webpack \u63A5\u53D7\u66F4\u65B0\u7684\u6A21\u5757\u3002 <strong>index.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> printMe <span class="token keyword">from</span> <span class="token string">&#39;./print.js&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;webpack&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    btn<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;Click me and check the console!&#39;</span><span class="token punctuation">;</span>
    btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> printMe<span class="token punctuation">;</span>

    element<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>btn<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> element<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
 <span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&#39;./print.js&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u63A5\u53D7\u66F4\u65B0\u7684\u6A21\u5757&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token function">printMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Z={class:"custom-container tip"},$=n("p",{class:"custom-container-title"},"Author",-1),nn=s("\u56DE\u7B54\u8005: "),sn={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},an=s("kangyana"),en=t('<h2 id="_3-hmr-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-hmr-\u539F\u7406" aria-hidden="true">#</a> 3. HMR \u539F\u7406</h2><p>HMR \u529F\u80FD\u4F1A\u5728\u5E94\u7528\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u66FF\u6362\u3001\u6DFB\u52A0\u6216\u5220\u9664 <strong>\u6A21\u5757</strong>\uFF0C\u800C\u65E0\u9700\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u9875\u9762\u3002 \u4E3B\u8981\u662F\u901A\u8FC7\u4EE5\u4E0B\u51E0\u79CD\u65B9\u5F0F\uFF0C\u6765\u663E\u8457\u52A0\u5FEB\u5F00\u53D1\u901F\u5EA6\uFF1A</p><ul><li>\u4FDD\u7559\u5728\u5B8C\u5168\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u671F\u95F4\u4E22\u5931\u7684\u5E94\u7528\u7A0B\u5E8F\u72B6\u6001\u3002</li><li>\u53EA\u66F4\u65B0\u53D8\u66F4\u5185\u5BB9\uFF0C\u4EE5\u8282\u7701\u5B9D\u8D35\u7684\u5F00\u53D1\u65F6\u95F4\u3002</li><li>\u5728\u6E90\u4EE3\u7801\u4E2D CSS/JS \u4EA7\u751F\u4FEE\u6539\u65F6\uFF0C\u4F1A\u7ACB\u523B\u5728\u6D4F\u89C8\u5668\u4E2D\u8FDB\u884C\u66F4\u65B0\uFF0C\u8FD9\u51E0\u4E4E\u76F8\u5F53\u4E8E\u5728\u6D4F\u89C8\u5668 devtools \u76F4\u63A5\u66F4\u6539\u6837\u5F0F\u3002</li></ul><h3 id="\u8FD9\u4E00\u5207\u662F\u5982\u4F55\u8FD0\u884C\u7684" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u4E00\u5207\u662F\u5982\u4F55\u8FD0\u884C\u7684" aria-hidden="true">#</a> \u8FD9\u4E00\u5207\u662F\u5982\u4F55\u8FD0\u884C\u7684\uFF1F</h3><p>\u8BA9\u6211\u4EEC\u4ECE\u4E00\u4E9B\u4E0D\u540C\u7684\u89D2\u5EA6\u89C2\u5BDF\uFF0C\u4EE5\u4E86\u89E3 HMR \u7684\u5DE5\u4F5C\u539F\u7406\u3002</p><h3 id="\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D" aria-hidden="true">#</a> \u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\uFF0C\u53EF\u4EE5\u505A\u5230\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7F6E\u6362(swap in and out)\u6A21\u5757\uFF1A</p><ol><li>\u5E94\u7528\u7A0B\u5E8F\u8981\u6C42 HMR runtime \u68C0\u67E5\u66F4\u65B0\u3002</li><li>HMR runtime \u5F02\u6B65\u5730\u4E0B\u8F7D\u66F4\u65B0\uFF0C\u7136\u540E\u901A\u77E5\u5E94\u7528\u7A0B\u5E8F\u3002</li><li>\u5E94\u7528\u7A0B\u5E8F\u8981\u6C42 HMR runtime \u5E94\u7528\u66F4\u65B0\u3002</li><li>HMR runtime \u540C\u6B65\u5730\u5E94\u7528\u66F4\u65B0\u3002</li></ol><p>\u4F60\u53EF\u4EE5\u8BBE\u7F6E HMR\uFF0C\u4EE5\u4F7F\u6B64\u8FDB\u7A0B\u81EA\u52A8\u89E6\u53D1\u66F4\u65B0\uFF0C\u6216\u8005\u4F60\u53EF\u4EE5\u9009\u62E9\u8981\u6C42\u5728\u7528\u6237\u4EA4\u4E92\u65F6\u8FDB\u884C\u66F4\u65B0\u3002</p><h3 id="\u5728-compiler-\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5728-compiler-\u4E2D" aria-hidden="true">#</a> \u5728 compiler \u4E2D</h3><p>\u9664\u4E86\u666E\u901A\u8D44\u6E90\uFF0Ccompiler \u9700\u8981\u53D1\u51FA &quot;update&quot;\uFF0C\u5C06\u4E4B\u524D\u7684\u7248\u672C\u66F4\u65B0\u5230\u65B0\u7684\u7248\u672C\u3002 &quot;update&quot; \u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A</p><ol><li>\u66F4\u65B0\u540E\u7684 <code>manifest.json</code></li><li>\u4E00\u4E2A\u6216\u591A\u4E2A updated chunk</li></ol><p>manifest \u5305\u62EC\u65B0\u7684 compilation hash \u548C\u6240\u6709\u7684 updated chunk \u5217\u8868\u3002 \u6BCF\u4E2A chunk \u90FD\u5305\u542B\u7740\u5168\u90E8\u66F4\u65B0\u6A21\u5757\u7684\u6700\u65B0\u4EE3\u7801\uFF08\u6216\u4E00\u4E2A flag \u7528\u4E8E\u8868\u660E\u6B64\u6A21\u5757\u9700\u8981\u88AB\u79FB\u9664\uFF09\u3002</p><p>compiler \u4F1A\u786E\u4FDD\u5728\u8FD9\u4E9B\u6784\u5EFA\u4E4B\u95F4\u7684\u6A21\u5757 ID \u548C chunk ID \u4FDD\u6301\u4E00\u81F4\u3002 \u901A\u5E38\u5C06\u8FD9\u4E9B ID \u5B58\u50A8\u5728\u5185\u5B58\u4E2D\uFF08\u4F8B\u5982\u4F7F\u7528 <code>webpack-dev-server</code> \u65F6\uFF09\uFF0C\u4F46\u662F\u4E5F\u53EF\u80FD\u4F1A\u5C06\u5B83\u4EEC\u5B58\u50A8\u5728\u4E00\u4E2A JSON \u6587\u4EF6\u4E2D\u3002</p><h3 id="\u5728\u6A21\u5757\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5728\u6A21\u5757\u4E2D" aria-hidden="true">#</a> \u5728\u6A21\u5757\u4E2D</h3>',15),tn=s("HMR \u662F\u53EF\u9009\u529F\u80FD\uFF0C\u53EA\u4F1A\u5F71\u54CD\u5305\u542B HMR \u4EE3\u7801\u7684\u6A21\u5757\u3002 \u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u901A\u8FC7 "),pn={href:"https://github.com/webpack-contrib/style-loader",target:"_blank",rel:"noopener noreferrer"},on=s("style-loader"),cn=s(" \u4E3A style \u8FFD\u52A0\u8865\u4E01\u3002 \u4E3A\u4E86\u8FD0\u884C\u8FFD\u52A0\u8865\u4E01\uFF0Cstyle-loader \u5B9E\u73B0\u4E86 HMR \u63A5\u53E3\uFF1B\u5F53\u5B83\u901A\u8FC7 HMR \u63A5\u6536\u5230\u66F4\u65B0\uFF0C\u5B83\u4F1A\u4F7F\u7528\u65B0\u7684\u6837\u5F0F\u66FF\u6362\u65E7\u7684\u6837\u5F0F\u3002"),ln=t('<p>\u7C7B\u4F3C\u7684\uFF0C\u5F53\u5728\u4E00\u4E2A\u6A21\u5757\u4E2D\u5B9E\u73B0\u4E86 HMR \u63A5\u53E3\uFF0C\u4F60\u53EF\u4EE5\u63CF\u8FF0\u51FA\u5F53\u6A21\u5757\u88AB\u66F4\u65B0\u540E\u53D1\u751F\u4E86\u4EC0\u4E48\u3002 \u7136\u800C\u5728\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u9700\u8981\u5728\u6BCF\u4E2A\u6A21\u5757\u4E2D\u5F3A\u884C\u5199\u5165 HMR \u4EE3\u7801\u3002 \u5982\u679C\u4E00\u4E2A\u6A21\u5757\u6CA1\u6709 HMR \u5904\u7406\u51FD\u6570\uFF0C\u66F4\u65B0\u5C31\u4F1A\u5192\u6CE1(bubble up)\u3002 \u8FD9\u610F\u5473\u7740\u67D0\u4E2A\u5355\u72EC\u5904\u7406\u51FD\u6570\u80FD\u591F\u66F4\u65B0\u6574\u4E2A\u6A21\u5757\u6811\u3002 \u5982\u679C\u5728\u6A21\u5757\u6811\u7684\u4E00\u4E2A\u5355\u72EC\u6A21\u5757\u88AB\u66F4\u65B0\uFF0C\u90A3\u4E48\u6574\u7EC4\u4F9D\u8D56\u6A21\u5757\u90FD\u4F1A\u88AB\u91CD\u65B0\u52A0\u8F7D\u3002</p><h3 id="\u5728-runtime-\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5728-runtime-\u4E2D" aria-hidden="true">#</a> \u5728 runtime \u4E2D</h3><p>\u5BF9\u4E8E\u6A21\u5757\u7CFB\u7EDF\u8FD0\u884C\u65F6(module system runtime)\uFF0C\u4F1A\u53D1\u51FA\u989D\u5916\u4EE3\u7801\uFF0C\u6765\u8DDF\u8E2A\u6A21\u5757 <code>parents</code> \u548C <code>children</code> \u5173\u7CFB\u3002 \u5728\u7BA1\u7406\u65B9\u9762\uFF0Cruntime \u652F\u6301\u4E24\u4E2A\u65B9\u6CD5 <code>check</code> \u548C <code>apply</code>\u3002</p><p><code>check</code> \u65B9\u6CD5\uFF0C\u53D1\u9001\u4E00\u4E2A HTTP \u8BF7\u6C42\u6765\u66F4\u65B0 manifest\u3002 \u5982\u679C\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF4\u660E\u6CA1\u6709\u53EF\u7528\u66F4\u65B0\u3002 \u5982\u679C\u8BF7\u6C42\u6210\u529F\uFF0C\u4F1A\u5C06 updated chunk \u5217\u8868\u4E0E\u5F53\u524D\u7684 loaded chunk \u5217\u8868\u8FDB\u884C\u6BD4\u8F83\u3002 \u6BCF\u4E2A loaded chunk \u90FD\u4F1A\u4E0B\u8F7D\u76F8\u5E94\u7684 updated chunk\u3002 \u5F53\u6240\u6709\u66F4\u65B0 chunk \u5B8C\u6210\u4E0B\u8F7D\uFF0Cruntime \u5C31\u4F1A\u5207\u6362\u5230 <code>ready</code> \u72B6\u6001\u3002</p><p><code>apply</code> \u65B9\u6CD5\uFF0C\u5C06\u6240\u6709 updated module \u6807\u8BB0\u4E3A\u65E0\u6548\u3002 \u5BF9\u4E8E\u6BCF\u4E2A\u65E0\u6548 module\uFF0C\u90FD\u9700\u8981\u5728\u6A21\u5757\u4E2D\u6709\u4E00\u4E2A update handler\uFF0C\u6216\u8005\u5728\u6B64\u6A21\u5757\u7684\u7236\u7EA7\u6A21\u5757\u4E2D\u6709 update handler\u3002 \u5426\u5219\uFF0C\u4F1A\u8FDB\u884C\u65E0\u6548\u6807\u8BB0\u5192\u6CE1\uFF0C\u5E76\u4E14\u7236\u7EA7\u4E5F\u4F1A\u88AB\u6807\u8BB0\u4E3A\u65E0\u6548\u3002 \u7EE7\u7EED\u6BCF\u4E2A\u5192\u6CE1\uFF0C\u76F4\u5230\u5230\u8FBE\u5E94\u7528\u7A0B\u5E8F\u5165\u53E3\u8D77\u70B9\uFF0C\u6216\u8005\u5230\u8FBE\u5E26\u6709 update handler \u7684 module\uFF08\u4EE5\u6700\u5148\u5230\u8FBE\u4E3A\u51C6\uFF0C\u5192\u6CE1\u505C\u6B62\uFF09\u3002 \u5982\u679C\u5B83\u4ECE\u5165\u53E3\u8D77\u70B9\u5F00\u59CB\u5192\u6CE1\uFF0C\u5219\u6B64\u8FC7\u7A0B\u5931\u8D25\u3002</p><p>\u4E4B\u540E\uFF0C\u6240\u6709\u65E0\u6548 module \u90FD\u4F1A\u88AB\uFF08\u901A\u8FC7 dispose handler\uFF09\u5904\u7406\u548C\u89E3\u9664\u52A0\u8F7D\u3002 \u7136\u540E\u66F4\u65B0\u5F53\u524D hash\uFF0C\u5E76\u4E14\u8C03\u7528\u6240\u6709 <code>accept</code> handler\u3002 runtime \u5207\u6362\u56DE <code>idle</code> \u72B6\u6001\uFF0C\u4E00\u5207\u7167\u5E38\u7EE7\u7EED\u3002</p>',6);function rn(un,dn){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("div",u,[d,n("p",null,[k,n("a",v,[m,e(a)])])]),n("div",h,[b,n("p",null,[_,n("a",y,[g,e(a)])])]),f,w,H,M,n("p",null,[R,n("a",j,[x,e(a)]),q,I,S,P,C,E,N]),T,n("p",null,[L,V,W,B,D,n("a",A,[J,e(a)]),G,O,Q]),z,n("p",null,[F,n("a",K,[U,e(a)]),X]),Y,n("div",Z,[$,n("p",null,[nn,n("a",sn,[an,e(a)])])]),en,n("p",null,[tn,n("a",pn,[on,e(a)]),cn]),ln])}const vn=p(i,[["render",rn],["__file","99.html.vue"]]);export{vn as default};