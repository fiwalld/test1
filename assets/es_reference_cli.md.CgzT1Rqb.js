import{_ as e,c as t,o as a,ab as i}from"./chunks/framework.D9SExukp.js";const k=JSON.parse('{"title":"Intefaz de Linea de Comando","description":"","frontmatter":{},"headers":[],"relativePath":"es/reference/cli.md","filePath":"es/reference/cli.md","lastUpdated":1724839260000}'),o={name:"es/reference/cli.md"},s=i('<h1 id="command-line-interface" tabindex="-1">Intefaz de Linea de Comando <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Intefaz de Linea de Comando {#command-line-interface}&quot;">​</a></h1><h2 id="vitepress-dev" tabindex="-1"><code>vitepress dev</code> <a class="header-anchor" href="#vitepress-dev" aria-label="Permalink to &quot;`vitepress dev`&quot;">​</a></h2><p>Inicia el servidor de desarrollo VitePress con el directorio designado como raíz. Por defecto, utiliza el director actual. el comando <code>dev</code> también se puede omitir cuando se ejecuta el directorio actual.</p><h3 id="uso" tabindex="-1">Uso <a class="header-anchor" href="#uso" aria-label="Permalink to &quot;Uso&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Comienza en el directorio actual, omite el `dev`</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># iniciar en un subdirectorio</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="options" tabindex="-1">Opciones <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Opciones {#options}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Opciones</th><th>Descripción</th></tr></thead><tbody><tr><td><code>--open [path]</code></td><td>Abre el navegador en el inicio (<code>boolean | string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>Especifica el puerto (<code>number</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>Ruta de base pública (por defecto: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--cors</code></td><td>Habilitar CORS</td></tr><tr><td><code>--strictPort</code></td><td>Salir si el puerto especificado ya esta en uso (<code>boolean</code>)</td></tr><tr><td><code>--force</code></td><td>Obligar al optimizador a ignorar el cache y volver a empaquetar (<code>boolean</code>)</td></tr></tbody></table><h2 id="vitepress-build" tabindex="-1"><code>vitepress build</code> <a class="header-anchor" href="#vitepress-build" aria-label="Permalink to &quot;`vitepress build`&quot;">​</a></h2><p>Compilar el sitio web de VitePress para producción.</p><h3 id="uso-1" tabindex="-1">Uso <a class="header-anchor" href="#uso-1" aria-label="Permalink to &quot;Uso&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="opciones" tabindex="-1">Opciones <a class="header-anchor" href="#opciones" aria-label="Permalink to &quot;Opciones&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Opción</th><th>Descripción</th></tr></thead><tbody><tr><td><code>--mpa</code> (experimental)</td><td>Compilar en <a href="./../guide/mpa-mode">Modo MPA</a> Sin hidratación del lado del cliente (<code>boolean</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>Ruta de base pública (por defecto: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--target &lt;target&gt;</code></td><td>Transpilar objetivo (por defecto: <code>&quot;modules&quot;</code>) (<code>string</code>)</td></tr><tr><td><code>--outDir &lt;dir&gt;</code></td><td>Directorio de salida relativo a <strong>cwd</strong> (por defecto: <code>&lt;root&gt;/.vitepress/dist</code>) (<code>string</code>)</td></tr><tr><td><code>--minify [minifier]</code></td><td>Habilitar/desabilitar la minificación, o especifica un minero para usar (por defecto: <code>&quot;esbuild&quot;</code>) (<code>boolean | &quot;terser&quot; | &quot;esbuild&quot;</code>)</td></tr><tr><td><code>--assetsInlineLimit &lt;number&gt;</code></td><td>Limitar los bytes para alinear los activos en base 64 (por defecto: <code>4096</code>) (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-preview" tabindex="-1"><code>vitepress preview</code> <a class="header-anchor" href="#vitepress-preview" aria-label="Permalink to &quot;`vitepress preview`&quot;">​</a></h2><p>Proporciona localmente la compilación de la producción.</p><h3 id="uso-2" tabindex="-1">Uso <a class="header-anchor" href="#uso-2" aria-label="Permalink to &quot;Uso&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preview</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="opciones-1" tabindex="-1">Opciones <a class="header-anchor" href="#opciones-1" aria-label="Permalink to &quot;Opciones&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Opción</th><th>Descripción</th></tr></thead><tbody><tr><td><code>--base &lt;path&gt;</code></td><td>Ruta de base pública (por defecto: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>Especifica el puerto (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-init" tabindex="-1"><code>vitepress init</code> <a class="header-anchor" href="#vitepress-init" aria-label="Permalink to &quot;`vitepress init`&quot;">​</a></h2><p>Inicia el <a href="./../guide/getting-started#setup-wizard">Asistente de Instalación</a> en el directorio actual.</p><h3 id="uso-3" tabindex="-1">Uso <a class="header-anchor" href="#uso-3" aria-label="Permalink to &quot;Uso&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div>',23),d=[s];function r(c,n,l,p,h,u){return a(),t("div",null,d)}const g=e(o,[["render",r]]);export{k as __pageData,g as default};
