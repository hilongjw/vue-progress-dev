<template>
    <div>
        
  <section class="page-header">
        <h1 class="project-name">Vue-progressbar</h1>
        <h2 class="project-tagline">A lightweight progress bar for vue</h2>
        <p>
          <button class="btn" @click="start">Start</button>
          <button class="btn" @click="increase(10)">Increase(10)</button>
          <button class="btn" @click="decrease(10)">Decrease(10)</button>
          <button class="btn" @click="finish">Finish</button>
          <button class="btn" @click="fail">Fail</button>
          <a href="https://github.com/hilongjw/vue-progressbar" class="btn">View on GitHub</a>
        </p>
    </section>

    <section class="main-content">
      <h1>
<a id="vue-progressbar" class="anchor" href="#vue-progressbar" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>vue-progressbar</h1>
<h1>
<a id="demo" class="anchor" href="#demo" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Demo</h1>

<p>The demo page is <a href="http://hilongjw.github.io/vue-progressbar/index.html">HERE</a>.</p>

<h1>
<a id="requirements" class="anchor" href="#requirements" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Requirements</h1>

<ul>
<li>
<a href="https://github.com/yyx990803/vue">Vue.js</a> <code>^1.0.0</code>
</li>
</ul>

<h1>
<a id="installation" class="anchor" href="#installation" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Installation</h1>

<h2>
<a id="npm" class="anchor" href="#npm" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>npm</h2>

<div class="highlight highlight-source-shell"><pre>$ npm install vue-progressbar</pre></div>

<h1>
<a id="usage" class="anchor" href="#usage" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Usage</h1>

<p>main.js</p>

<div class="highlight highlight-source-js"><pre>
<span class="pl-k">import</span> <span class="pl-smi">VueProgressBar</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>vue-progressbar<span class="pl-pds">'</span></span>

<span class="pl-smi">Vue</span>.<span class="pl-en">use</span>(VueProgressBar, {
  color<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>rgb(143, 255, 199)<span class="pl-pds">'</span></span>,
  failedColor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>red<span class="pl-pds">'</span></span>,
  height<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2px<span class="pl-pds">'</span></span>
})
</pre></div>

<p>Root App.vue</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">template</span>&gt;
    &lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>app<span class="pl-pds">"</span></span>&gt;
        <span class="pl-c">&lt;!-- for example router view --&gt;</span>
        &lt;<span class="pl-ent">router</span><span class="pl-e">-view</span>&gt;&lt;/<span class="pl-ent">router</span><span class="pl-e">-view</span>&gt;
        <span class="pl-c">&lt;!-- set progressbar --&gt;</span>
        &lt;<span class="pl-ent">vue</span><span class="pl-e">-progress-bar</span>&gt;&lt;/<span class="pl-ent">vue</span><span class="pl-e">-progress-bar</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">template</span>&gt;</pre></div>

<p>Any child </p>

<div class="highlight highlight-text-html-basic"><pre>
<span class="pl-s1">&lt;<span class="pl-ent">script</span>&gt;</span>
<span class="pl-s1"><span class="pl-k">export</span> <span class="pl-v">default</span> {</span>
<span class="pl-s1">  methods<span class="pl-k">:</span>{</span>
<span class="pl-s1">    <span class="pl-en">start</span> () {</span>
<span class="pl-s1">        <span class="pl-v">this</span>.<span class="pl-smi">$Progress</span>.<span class="pl-c1">start</span>()</span>
<span class="pl-s1">    },</span>
<span class="pl-s1">    <span class="pl-en">set</span> (<span class="pl-smi">num</span>) {</span>
<span class="pl-s1">        <span class="pl-v">this</span>.<span class="pl-smi">$Progress</span>.<span class="pl-en">set</span>(num)</span>
<span class="pl-s1">    },</span>
<span class="pl-s1">    <span class="pl-en">increase</span> (<span class="pl-smi">num</span>) {</span>
<span class="pl-s1">        <span class="pl-v">this</span>.<span class="pl-smi">$Progress</span>.<span class="pl-en">increase</span>(num)</span>
<span class="pl-s1">    },</span>
<span class="pl-s1">    <span class="pl-en">decrease</span> (<span class="pl-smi">num</span>) {</span>
<span class="pl-s1">        <span class="pl-v">this</span>.<span class="pl-smi">$Progress</span>.<span class="pl-en">decrease</span>(num)</span>
<span class="pl-s1">    },</span>
<span class="pl-s1">    <span class="pl-en">finish</span> () {</span>
<span class="pl-s1">        <span class="pl-v">this</span>.<span class="pl-smi">$Progress</span>.<span class="pl-en">finish</span>()</span>
<span class="pl-s1">    },</span>
<span class="pl-s1">    <span class="pl-en">fail</span> () {</span>
<span class="pl-s1">        <span class="pl-v">this</span>.<span class="pl-smi">$Progress</span>.<span class="pl-en">fail</span>()</span>
<span class="pl-s1">    },</span>
<span class="pl-s1">    <span class="pl-en">test</span>(){</span>
<span class="pl-s1">      <span class="pl-v">this</span>.<span class="pl-smi">$Progress</span>.<span class="pl-c1">start</span>()</span>
<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-v">this</span>.<span class="pl-smi">$http</span>.<span class="pl-en">jsonp</span>(<span class="pl-s"><span class="pl-pds">'</span>http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz<span class="pl-pds">'</span></span>)</span>
<span class="pl-s1">      .<span class="pl-en">then</span>((<span class="pl-smi">response</span>) <span class="pl-k">=&gt;</span> {</span>
<span class="pl-s1">          <span class="pl-v">this</span>.<span class="pl-smi">$Progress</span>.<span class="pl-en">finish</span>()</span>
<span class="pl-s1">      }, (<span class="pl-smi">response</span>) <span class="pl-k">=&gt;</span> {</span>
<span class="pl-s1">          <span class="pl-v">this</span>.<span class="pl-smi">$Progress</span>.<span class="pl-en">fail</span>()</span>
<span class="pl-s1">      })</span>
<span class="pl-s1">    }</span>
<span class="pl-s1">  }</span>
<span class="pl-s1">}</span>
<span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span>
</pre></div>

<h1>
<a id="license" class="anchor" href="#license" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>License</h1>

<p><a href="http://opensource.org/licenses/MIT">The MIT License</a></p>

      <footer class="site-footer">
        <span class="site-footer-owner"><a href="https://github.com/hilongjw/vue-progressbar">Vue-progressbar</a> is maintained by <a href="https://github.com/hilongjw">hilongjw</a>.</span>

        <span class="site-footer-credits">This page was generated by <a href="https://pages.github.com">GitHub Pages</a> using the <a href="https://github.com/jasonlong/cayman-theme">Cayman theme</a> by <a href="https://twitter.com/jasonlong">Jason Long</a>.</span>
      </footer>

    </section>
    </div>
</template>

<script>
export default {
    beforeCreated () {
        this.$Progress.start()
    },
    methods: {
        start () {
            this.$Progress.start()
        },
        set (num) {
            this.$Progress.set(num)
        },
        increase (num) {
            this.$Progress.increase(num)
        },
        decrease (num) {
            this.$Progress.decrease(num)
        },
        finish () {
            this.$Progress.finish()
        },
        fail () {
            this.$Progress.fail()
        }
    }
}
</script>
