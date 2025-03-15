import{_ as t,r as o,o as c,c as i,b as s,d as e,e as n,a as l}from"./app.2a439a8a.js";const p={},r=s("h1",{id:"\u3010q032\u3011sessionstorage\u3001localstorage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u3010q032\u3011sessionstorage\u3001localstorage","aria-hidden":"true"},"#"),n(" \u3010Q032\u3011sessionStorage\u3001localStorage")],-1),u={class:"custom-container tip"},d=s("p",{class:"custom-container-title"},"Issue",-1),k=n("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),g={href:"https://github.com/kangyana/daily-question/issues/32",target:"_blank",rel:"noopener noreferrer"},m=n("Issue 32"),v={class:"custom-container tip"},h=s("p",{class:"custom-container-title"},"Author",-1),_=n("\u56DE\u7B54\u8005: "),b={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},S=n("kangyana"),f=l(`<h2 id="_1-web-storage" tabindex="-1"><a class="header-anchor" href="#_1-web-storage" aria-hidden="true">#</a> 1. Web Storage</h2><p><code>Web Strorage</code> \u4F7F\u6D4F\u89C8\u5668\u80FD\u4EE5\u4E00\u79CD\u6BD4\u4F7F\u7528 Cookie \u66F4\u76F4\u89C2\u7684\u65B9\u5F0F\u5B58\u50A8\u952E/\u503C\u5BF9\u3002</p><p>Web Storage \u5305\u542B\u5982\u4E0B\u4E24\u79CD\u673A\u5236\uFF1A</p><ul><li><code>sessionStorage</code> \u4E3A\u6BCF\u4E00\u4E2A\u7ED9\u5B9A\u7684\u6E90\uFF08given origin\uFF09\u7EF4\u6301\u4E00\u4E2A\u72EC\u7ACB\u7684\u5B58\u50A8\u533A\u57DF\uFF0C\u8BE5\u5B58\u50A8\u533A\u57DF\u5728\u9875\u9762\u4F1A\u8BDD\u671F\u95F4\u53EF\u7528\uFF08\u5373\u53EA\u8981\u6D4F\u89C8\u5668\u5904\u4E8E\u6253\u5F00\u72B6\u6001\uFF0C\u5305\u62EC\u9875\u9762\u91CD\u65B0\u52A0\u8F7D\u548C\u6062\u590D\uFF09\u3002</li><li><code>localStorage</code> \u540C\u6837\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u5728\u6D4F\u89C8\u5668\u5173\u95ED\uFF0C\u7136\u540E\u91CD\u65B0\u6253\u5F00\u540E\u6570\u636E\u4ECD\u7136\u5B58\u5728\u3002</li></ul><h2 id="_2-sessionstorage" tabindex="-1"><a class="header-anchor" href="#_2-sessionstorage" aria-hidden="true">#</a> 2. sessionStorage</h2><p><code>sessionStorage</code> \u5C5E\u6027\u5141\u8BB8\u4F60\u8BBF\u95EE\u4E00\u4E2A\uFF0C\u5BF9\u5E94\u5F53\u524D\u6E90\u7684 <strong>\u6D4F\u89C8\u5668\u4F1A\u8BAE\u50A8\u5B58</strong> \u7684\u5BF9\u8C61\u3002 \u5B83\u7684\u751F\u547D\u5468\u671F\u662F \u4E00\u6B21\u6D4F\u89C8\u5668\u4F1A\u8BDD\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4FDD\u5B58\u6570\u636E\u5230 sessionStorage</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4ECE sessionStorage \u83B7\u53D6\u6570\u636E</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4ECE sessionStorage \u5220\u9664\u4FDD\u5B58\u7684\u6570\u636E</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4ECE sessionStorage \u5220\u9664\u6240\u6709\u4FDD\u5B58\u7684\u6570\u636E</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-localstorage" tabindex="-1"><a class="header-anchor" href="#_3-localstorage" aria-hidden="true">#</a> 3. localStorage</h2><p><code>localStorage</code> \u5C5E\u6027\u5141\u8BB8\u4F60\u8BBF\u95EE\u4E00\u4E2A\uFF0C<strong>Document\u6E90</strong> \u7684\u5BF9\u8C61\u3002 \u5B83\u7684\u751F\u547D\u5468\u671F\u662F\u957F\u671F\uFF0C\u76F4\u5230\u4F60\u624B\u52A8\u6E05\u9664\u3002</p><p>\u8BED\u6CD5\u540C sessionStorage\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4FDD\u5B58 localStorage \u9879</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;myCat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BFB\u53D6 localStorage \u9879</span>
<span class="token keyword">let</span> cat <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;myCat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u79FB\u9664 localStorage \u9879</span>
localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;myCat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u79FB\u9664\u6240\u6709\u7684 localStorage \u9879</span>
localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_4-\u533A\u522B" aria-hidden="true">#</a> 4. \u533A\u522B</h2><ul><li>\u751F\u547D\u5468\u671F\uFF1AlocalStorage \u662F\u957F\u4E45\u50A8\u5B58\uFF0CsessionStorage \u662F\u4E00\u6B21\u6D4F\u89C8\u5668\u4F1A\u8BDD\u3002</li><li>\u5E94\u7528\u573A\u666F\uFF1AlocalStorage \u9002\u5408\u50A8\u5B58\u4E2A\u6027\u8BBE\u7F6E\uFF0CsessionStorage \u9002\u5408\u50A8\u5B58\u654F\u611F\u4FE1\u606F\uFF08token\u7B49\uFF09\u3002</li></ul>`,13);function x(y,I){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,s("div",u,[d,s("p",null,[k,s("a",g,[m,e(a)])])]),s("div",v,[h,s("p",null,[_,s("a",b,[S,e(a)])])]),f])}const C=t(p,[["render",x],["__file","32.html.vue"]]);export{C as default};
