import{_ as p,r as o,o as c,c as l,b as n,d as t,e as s,a as e}from"./app.2a439a8a.js";const i={},r=n("h1",{id:"\u3010q046\u3011object-defineproperty",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q046\u3011object-defineproperty","aria-hidden":"true"},"#"),s(" \u3010Q046\u3011Object.defineProperty")],-1),u={class:"custom-container tip"},d=n("p",{class:"custom-container-title"},"Issue",-1),k=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),b={href:"https://github.com/kangyana/daily-question/issues/46",target:"_blank",rel:"noopener noreferrer"},v=s("Issue 46"),m={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"Author",-1),_=s("\u56DE\u7B54\u8005: "),f={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},y=s("kangyana"),g=e(`<h2 id="_1-object-defineproperty" tabindex="-1"><a class="header-anchor" href="#_1-object-defineproperty" aria-hidden="true">#</a> 1. Object.defineProperty</h2><p><code>Object.defineProperty()</code> \u65B9\u6CD5\u4F1A\u76F4\u63A5\u5728\u4E00\u4E2A\u5BF9\u8C61\u4E0A\u5B9A\u4E49\u4E00\u4E2A\u65B0\u5C5E\u6027\uFF0C\u6216\u8005\u4FEE\u6539\u4E00\u4E2A\u5BF9\u8C61\u7684\u73B0\u6709\u5C5E\u6027\uFF0C\u5E76\u8FD4\u56DE\u6B64\u5BF9\u8C61\u3002</p><p>\u5907\u6CE8\uFF1A \u5E94\u5F53\u76F4\u63A5\u5728 <code>Object</code> \u6784\u9020\u5668\u5BF9\u8C61\u4E0A\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u800C\u4E0D\u662F\u5728\u4EFB\u610F\u4E00\u4E2A Object \u7C7B\u578B\u7684\u5B9E\u4F8B\u4E0A\u8C03\u7528\u3002</p><h3 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h3><ul><li>obj\uFF1A\u8981\u5B9A\u4E49\u5C5E\u6027\u7684\u5BF9\u8C61\u3002</li><li>prop\uFF1A\u8981\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u7684\u540D\u79F0 \u3002</li><li>descriptor\uFF1A\u8981\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> object1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>object1<span class="token punctuation">,</span> <span class="token string">&#39;property1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

object1<span class="token punctuation">.</span>property1 <span class="token operator">=</span> <span class="token number">77</span><span class="token punctuation">;</span> <span class="token comment">// \u4E25\u683C\u6A21\u5F0F\u4E0B\u62A5\u9519</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>object1<span class="token punctuation">.</span>property1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BE5\u65B9\u6CD5\u5141\u8BB8\u7CBE\u786E\u5730\u6DFB\u52A0\u6216\u4FEE\u6539\u5BF9\u8C61\u7684\u5C5E\u6027\u3002" tabindex="-1"><a class="header-anchor" href="#\u8BE5\u65B9\u6CD5\u5141\u8BB8\u7CBE\u786E\u5730\u6DFB\u52A0\u6216\u4FEE\u6539\u5BF9\u8C61\u7684\u5C5E\u6027\u3002" aria-hidden="true">#</a> \u8BE5\u65B9\u6CD5\u5141\u8BB8\u7CBE\u786E\u5730\u6DFB\u52A0\u6216\u4FEE\u6539\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</h3><p>\u901A\u8FC7\u8D4B\u503C\u64CD\u4F5C\u6DFB\u52A0\u7684\u666E\u901A\u5C5E\u6027\u662F\u53EF\u679A\u4E3E\u7684\uFF0C\u53EF\u4EE5\u6539\u53D8\u8FD9\u4E9B\u5C5E\u6027\u7684\u503C\uFF0C\u4E5F\u53EF\u4EE5 <code>delete</code> \u8FD9\u4E9B\u5C5E\u6027\u3002 \u8FD9\u4E2A\u65B9\u6CD5\u5141\u8BB8\u4FEE\u6539\u9ED8\u8BA4\u7684\u989D\u5916\u9009\u9879\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528 <code>Object.defineProperty()</code> \u6DFB\u52A0\u7684\u5C5E\u6027\u503C\u662F <strong>\u4E0D\u53EF\u4FEE\u6539\u7684</strong>\uFF08immutable\uFF09\u3002</p>`,8),j={class:"custom-container tip"},w=n("p",{class:"custom-container-title"},"Author",-1),O=s("\u56DE\u7B54\u8005: "),x={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},q=s("kangyana"),P=e(`<h2 id="_2-\u5C5E\u6027\u63CF\u8FF0\u7B26" tabindex="-1"><a class="header-anchor" href="#_2-\u5C5E\u6027\u63CF\u8FF0\u7B26" aria-hidden="true">#</a> 2. \u5C5E\u6027\u63CF\u8FF0\u7B26</h2><p>\u5BF9\u8C61\u91CC\u76EE\u524D\u5B58\u5728\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u6709\u4E24\u79CD\u4E3B\u8981\u5F62\u5F0F\uFF1A</p><ul><li>\u6570\u636E\u63CF\u8FF0\u7B26\uFF1A\u662F\u4E00\u4E2A\u5177\u6709\u503C\u7684\u5C5E\u6027\uFF0C\u8BE5\u503C\u53EF\u4EE5\u662F\u53EF\u5199\u7684\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E0D\u53EF\u5199\u7684\u3002</li><li>\u5B58\u53D6\u63CF\u8FF0\u7B26\uFF1A\u662F\u7531 getter \u51FD\u6570\u548C setter \u51FD\u6570\u6240\u63CF\u8FF0\u7684\u5C5E\u6027\u3002\u4E00\u4E2A\u63CF\u8FF0\u7B26\u53EA\u80FD\u662F\u8FD9\u4E24\u8005\u5176\u4E2D\u4E4B\u4E00\uFF1B\u4E0D\u80FD\u540C\u65F6\u662F\u4E24\u8005\u3002</li></ul><p>\u8FD9\u4E24\u79CD\u63CF\u8FF0\u7B26\u90FD\u662F\u5BF9\u8C61\u3002\u4EE5\u4E0B\u4E3A\u53EF\u9009\u952E\u503C\uFF1A</p><table><thead><tr><th>\u53EF\u9009\u952E</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>configurable</td><td>\u901A\u7528</td><td>\u5F53\u4E14\u4EC5\u5F53\u8BE5\u5C5E\u6027\u7684 configurable \u952E\u503C\u4E3A true \u65F6\uFF0C<br>\u8BE5\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\u624D\u80FD\u591F\u88AB\u6539\u53D8\uFF0C<br>\u540C\u65F6\u8BE5\u5C5E\u6027\u4E5F\u80FD\u4ECE\u5BF9\u5E94\u7684\u5BF9\u8C61\u4E0A\u88AB\u5220\u9664\u3002</td><td>false</td></tr><tr><td>enumerable</td><td>\u901A\u7528</td><td>\u5F53\u4E14\u4EC5\u5F53\u8BE5\u5C5E\u6027\u7684 configurable \u952E\u503C\u4E3A true \u65F6\uFF0C<br>\u8BE5\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\u624D\u80FD\u591F\u88AB\u6539\u53D8\uFF0C<br>\u540C\u65F6\u8BE5\u5C5E\u6027\u4E5F\u80FD\u4ECE\u5BF9\u5E94\u7684\u5BF9\u8C61\u4E0A\u88AB\u5220\u9664\u3002</td><td>false</td></tr><tr><td>value</td><td>\u6570\u636E\u63CF\u8FF0\u7B26</td><td>\u8BE5\u5C5E\u6027\u5BF9\u5E94\u7684\u503C\u3002\u53EF\u4EE5\u662F\u4EFB\u4F55\u6709\u6548\u7684 JS \u503C\uFF08\u6570\u503C\uFF0C\u5BF9\u8C61\uFF0C\u51FD\u6570\u7B49\uFF09\u3002</td><td>undefined</td></tr><tr><td>writable</td><td>\u6570\u636E\u63CF\u8FF0\u7B26</td><td>\u5F53\u4E14\u4EC5\u5F53\u8BE5\u5C5E\u6027\u7684 writable \u952E\u503C\u4E3A true \u65F6\uFF0C<br>\u5C5E\u6027\u7684\u503C\uFF08value\uFF09\u624D\u80FD\u88AB\u76F4\u63A5\u8D4B\u503C\u3002</td><td>false</td></tr><tr><td>get</td><td>\u5B58\u53D6\u63CF\u8FF0\u7B26</td><td>\u5C5E\u6027\u7684 getter \u51FD\u6570\uFF0C\u5982\u679C\u6CA1\u6709 getter\uFF0C\u5219\u4E3A undefined\u3002<br>\u5F53\u8BBF\u95EE\u8BE5\u5C5E\u6027\u65F6\uFF0C\u4F1A\u8C03\u7528\u6B64\u51FD\u6570\u3002\u6267\u884C\u65F6\u4F1A\u4F20\u5165 this \u5BF9\u8C61\u3002<br>\u8BE5\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u88AB\u7528\u4F5C\u5C5E\u6027\u7684\u503C\u3002</td><td>undefined</td></tr><tr><td>set</td><td>\u5B58\u53D6\u63CF\u8FF0\u7B26</td><td>\u5C5E\u6027\u7684 setter \u51FD\u6570\uFF0C\u5982\u679C\u6CA1\u6709 setter\uFF0C\u5219\u4E3A undefined\u3002<br>\u5F53\u5C5E\u6027\u503C\u88AB\u4FEE\u6539\u65F6\uFF0C\u4F1A\u8C03\u7528\u6B64\u51FD\u6570\u3002\u6267\u884C\u65F6\u4F1A\u4F20\u5165 this \u5BF9\u8C61\u3002</td><td>undefined</td></tr></tbody></table><p>\u8BB0\u4F4F\uFF0C\u8FD9\u4E9B\u9009\u9879\u4E0D\u4E00\u5B9A\u662F\u81EA\u8EAB\u5C5E\u6027\uFF0C\u4E5F\u8981\u8003\u8651\u7EE7\u627F\u6765\u7684\u5C5E\u6027\u3002 \u4E3A\u4E86\u786E\u8BA4\u4FDD\u7559\u8FD9\u4E9B\u9ED8\u8BA4\u503C\uFF0C\u5728\u8BBE\u7F6E\u4E4B\u524D\uFF0C\u53EF\u80FD\u8981\u51BB\u7ED3 <code>Object.prototype</code>\uFF0C\u660E\u786E\u6307\u5B9A\u6240\u6709\u7684\u9009\u9879\uFF0C\u6216\u8005\u901A\u8FC7 <code>Object.create(null)</code> \u5C06 <code>__proto__</code> \u5C5E\u6027\u6307\u5411 <code>null</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F7F\u7528 __proto__</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> descriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CA1\u6709\u7EE7\u627F\u7684\u5C5E\u6027</span>
<span class="token comment">// \u9ED8\u8BA4\u6CA1\u6709 enumerable\uFF0C\u6CA1\u6709 configurable\uFF0C\u6CA1\u6709 writable</span>
descriptor<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u663E\u5F0F</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;static&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5FAA\u73AF\u4F7F\u7528\u540C\u4E00\u5BF9\u8C61</span>
<span class="token keyword">function</span> <span class="token function">withValue</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> withValue<span class="token punctuation">.</span>d <span class="token operator">||</span> <span class="token punctuation">(</span>
    withValue<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  d<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token keyword">return</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// ... \u5E76\u4E14 ...</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token function">withValue</span><span class="token punctuation">(</span><span class="token string">&quot;static&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C freeze \u53EF\u7528\uFF0C\u9632\u6B62\u540E\u7EED\u4EE3\u7801\u6DFB\u52A0\u6216\u5220\u9664\u5BF9\u8C61\u539F\u578B\u7684\u5C5E\u6027</span>
<span class="token comment">// \uFF08value, get, set, enumerable, writable, configurable\uFF09</span>
<span class="token punctuation">(</span>Object<span class="token punctuation">.</span>freeze<span class="token operator">||</span>Object<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function V(I,N){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("div",u,[d,n("p",null,[k,n("a",b,[v,t(a)])])]),n("div",m,[h,n("p",null,[_,n("a",f,[y,t(a)])])]),g,n("div",j,[w,n("p",null,[O,n("a",x,[q,t(a)])])]),P])}const E=p(i,[["render",V],["__file","46.html.vue"]]);export{E as default};
