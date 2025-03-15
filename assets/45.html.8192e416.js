import{_ as p,r as e,o,c,b as n,d as t,e as s,a as l}from"./app.2a439a8a.js";const i={},u=n("h1",{id:"\u3010q045\u3011proxy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q045\u3011proxy","aria-hidden":"true"},"#"),s(" \u3010Q045\u3011proxy")],-1),r={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"Issue",-1),d=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),v={href:"https://github.com/kangyana/daily-question/issues/45",target:"_blank",rel:"noopener noreferrer"},m=s("Issue 45"),b={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"Author",-1),y=s("\u56DE\u7B54\u8005: "),h={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},f=s("kangyana"),w=l(`<h2 id="_1-proxy" tabindex="-1"><a class="header-anchor" href="#_1-proxy" aria-hidden="true">#</a> 1. Proxy</h2><p><code>Proxy</code> \u5BF9\u8C61\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u7684\u4EE3\u7406\uFF0C\u4ECE\u800C\u5B9E\u73B0\u57FA\u672C\u64CD\u4F5C\u7684\u62E6\u622A\u548C\u81EA\u5B9A\u4E49\uFF08\u5982\u5C5E\u6027\u67E5\u627E\u3001\u8D4B\u503C\u3001\u679A\u4E3E\u3001\u51FD\u6570\u8C03\u7528\u7B49\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> prop <span class="token keyword">in</span> obj <span class="token operator">?</span> obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>a<span class="token punctuation">,</span> p<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 1, undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span> <span class="token keyword">in</span> p<span class="token punctuation">,</span> p<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false, 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u7528\u6CD5" aria-hidden="true">#</a> 2. \u7528\u6CD5</h2><h3 id="\u65E0\u64CD\u4F5C\u8F6C\u53D1\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u65E0\u64CD\u4F5C\u8F6C\u53D1\u4EE3\u7406" aria-hidden="true">#</a> \u65E0\u64CD\u4F5C\u8F6C\u53D1\u4EE3\u7406</h3><p>\u5728\u4EE5\u4E0B\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u4E00\u4E2A\u539F\u751F JavaScript \u5BF9\u8C61\uFF0C\u4EE3\u7406\u4F1A\u5C06\u6240\u6709\u5E94\u7528\u5230\u5B83\u7684\u64CD\u4F5C\u8F6C\u53D1\u5230\u8FD9\u4E2A\u5BF9\u8C61\u4E0A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">37</span><span class="token punctuation">;</span>   <span class="token comment">// \u64CD\u4F5C\u8F6C\u53D1\u5230\u76EE\u6807</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 37. \u64CD\u4F5C\u5DF2\u7ECF\u88AB\u6B63\u786E\u5730\u8F6C\u53D1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a> \u9A8C\u8BC1</h3><p>\u901A\u8FC7\u4EE3\u7406\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u5730\u9A8C\u8BC1\u5411\u4E00\u4E2A\u5BF9\u8C61\u7684\u4F20\u503C\u3002\u4E0B\u9762\u7684\u4EE3\u7801\u501F\u6B64\u5C55\u793A\u4E86 <code>set handler</code> \u7684\u4F5C\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> validator <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token operator">===</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;The age is not an integer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RangeError</span><span class="token punctuation">(</span><span class="token string">&#39;The age seems invalid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// The default behavior to store the value</span>
    obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>

    <span class="token comment">// \u8868\u793A\u6210\u529F</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> validator<span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token string">&#39;young&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught TypeError: The age is not an integer</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught RangeError: The age seems invalid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6269\u5C55\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6269\u5C55\u6784\u9020\u51FD\u6570</h3><p>\u65B9\u6CD5\u4EE3\u7406\u53EF\u4EE5\u8F7B\u677E\u5730\u901A\u8FC7\u4E00\u4E2A\u65B0\u6784\u9020\u51FD\u6570\u6765\u6269\u5C55\u4E00\u4E2A\u5DF2\u6709\u7684\u6784\u9020\u51FD\u6570\u3002\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E86 <code>construct</code> \u548C <code>apply</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token parameter">sup<span class="token punctuation">,</span> base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> descriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>
    base<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&quot;constructor&quot;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  base<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>sup<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">construct</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>base<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">apply</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> that<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">sup</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">base</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  descriptor<span class="token punctuation">.</span>value <span class="token operator">=</span> proxy<span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>base<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&quot;constructor&quot;</span><span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> proxy<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> Boy <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Boy</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> Peter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boy</span><span class="token punctuation">(</span><span class="token string">&quot;Peter&quot;</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Peter<span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;M&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Peter<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Peter&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Peter<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E92\u6362-dom-\u8282\u70B9\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E92\u6362-dom-\u8282\u70B9\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u4E92\u6362 DOM \u8282\u70B9\u7684\u5C5E\u6027</h2><p>\u6709\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u4E92\u6362\u4E24\u4E2A\u4E0D\u540C\u7684\u5143\u7D20\u7684\u5C5E\u6027\u6216\u7C7B\u540D\u3002\u4E0B\u9762\u7684\u4EE3\u7801\u4EE5\u6B64\u4E3A\u76EE\u6807\uFF0C\u5C55\u793A\u4E86 <code>set handler</code> \u7684\u4F7F\u7528\u573A\u666F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> newval</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> oldval <span class="token operator">=</span> obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token operator">===</span> <span class="token string">&#39;selected&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        oldval<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-selected&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;false&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newval<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-selected&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u9ED8\u8BA4\u884C\u4E3A\u662F\u5B58\u50A8\u88AB\u4F20\u5165 setter \u51FD\u6570\u7684\u5C5E\u6027\u503C</span>
    obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> newval<span class="token punctuation">;</span>

    <span class="token comment">// \u8868\u793A\u64CD\u4F5C\u6210\u529F</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> i1 <span class="token operator">=</span> view<span class="token punctuation">.</span>selected <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;item-1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i1<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;true&#39;</span>

<span class="token keyword">let</span> i2 <span class="token operator">=</span> view<span class="token punctuation">.</span>selected <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;item-2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i1<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;false&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i2<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;true&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u503C\u4FEE\u6B63\u53CA\u9644\u52A0\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u503C\u4FEE\u6B63\u53CA\u9644\u52A0\u5C5E\u6027" aria-hidden="true">#</a> \u503C\u4FEE\u6B63\u53CA\u9644\u52A0\u5C5E\u6027</h3><p>\u4EE5\u4E0B <code>products</code> \u4EE3\u7406\u4F1A\u8BA1\u7B97\u4F20\u503C\u5E76\u6839\u636E\u9700\u8981\u8F6C\u6362\u4E3A\u6570\u7EC4\u3002\u8FD9\u4E2A\u4EE3\u7406\u5BF9\u8C61\u540C\u65F6\u652F\u6301\u4E00\u4E2A\u53EB\u505A <code>latestBrowser</code> \u7684\u9644\u52A0\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u53EF\u4EE5\u540C\u65F6\u4F5C\u4E3A getter \u548C setter\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> products <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">browsers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Internet Explorer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Netscape&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9644\u52A0\u4E00\u4E2A\u5C5E\u6027</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token operator">===</span> <span class="token string">&#39;latestBrowser&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> obj<span class="token punctuation">.</span>browsers<span class="token punctuation">[</span>obj<span class="token punctuation">.</span>browsers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u9ED8\u8BA4\u884C\u4E3A\u662F\u8FD4\u56DE\u5C5E\u6027\u503C</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9644\u52A0\u5C5E\u6027</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token operator">===</span> <span class="token string">&#39;latestBrowser&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      obj<span class="token punctuation">.</span>browsers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5982\u679C\u4E0D\u662F\u6570\u7EC4\uFF0C\u5219\u8FDB\u884C\u8F6C\u6362</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      value <span class="token operator">=</span> <span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u9ED8\u8BA4\u884C\u4E3A\u662F\u4FDD\u5B58\u5C5E\u6027\u503C</span>
    obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>

    <span class="token comment">// \u8868\u793A\u6210\u529F</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>products<span class="token punctuation">.</span>browsers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;Internet Explorer&#39;, &#39;Netscape&#39;]</span>
products<span class="token punctuation">.</span>browsers <span class="token operator">=</span> <span class="token string">&#39;Firefox&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// \u5982\u679C\u4E0D\u5C0F\u5FC3\u4F20\u5165\u4E86\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>products<span class="token punctuation">.</span>browsers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;Firefox&#39;] &lt;- \u4E5F\u6CA1\u95EE\u9898\uFF0C\u5F97\u5230\u7684\u4F9D\u65E7\u662F\u4E00\u4E2A\u6570\u7EC4</span>

products<span class="token punctuation">.</span>latestBrowser <span class="token operator">=</span> <span class="token string">&#39;Chrome&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>products<span class="token punctuation">.</span>browsers<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// [&#39;Firefox&#39;, &#39;Chrome&#39;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>products<span class="token punctuation">.</span>latestBrowser<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Chrome&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function x(_,j){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,n("div",r,[k,n("p",null,[d,n("a",v,[m,t(a)])])]),n("div",b,[g,n("p",null,[y,n("a",h,[f,t(a)])])]),w])}const q=p(i,[["render",x],["__file","45.html.vue"]]);export{q as default};
