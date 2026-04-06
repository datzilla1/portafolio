# 🧑‍💻 Portfolio – César Roberto Pérez Ramírez

Portfolio personal construido con **Vue 3** + **Vuetify 3** + **Vite**.

---

## 🚀 Cómo agregar tus proyectos

Abre el archivo `src/data/projects.js` y agrega tus proyectos:

```js
{
  id: 4,
  title: 'Mi App de Inventario',
  type: 'desktop',              // "web" | "desktop" | "mobile"
  description: 'Descripción del proyecto.',
  tags: ['C#', 'SQL Server', 'Visual Studio'],
  image: 'projects/inventario.png', // imagen en /public/projects/
  link: '',                         // solo para tipo "web"
  repo: 'https://github.com/tu-usuario/inventario',
  featured: true,
}
```

### Tipos de proyecto

| Tipo | Descripción | Link en vivo |
|------|-------------|--------------|
| `web` | Sitio o app web | ✅ campo `link` |
| `desktop` | App C# / Visual Studio | ❌ no aplica |
| `mobile` | Ionic + Vue | ❌ no aplica |

### Agregar imágenes
1. Copia tus capturas en `public/projects/`
2. Referencia: `image: 'projects/nombre.png'`

---

## ⚙️ Desarrollo local

```bash
npm install
npm run dev
```

---

## 📦 Build

```bash
npm run build
# Archivos listos en /dist
```

---

## 🌐 Publicar en Vercel (recomendado)

1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com) → **New Project**
3. Importa tu repositorio
4. Vercel detecta Vite automáticamente → **Deploy** ✅

---

## 🐙 Publicar en GitHub Pages

1. Edita `vite.config.js`, cambia `base` por el nombre de tu repo:
   ```js
   base: '/nombre-de-tu-repo/',
   ```
2. Agrega en `package.json` → `scripts`:
   ```json
   "deploy": "npm run build && npx gh-pages -d dist"
   ```
3. Instala y despliega:
   ```bash
   npm install --save-dev gh-pages
   npm run deploy
   ```

---

## 📁 Estructura

```
portfolio-cesar/
├── public/
│   └── projects/        ← tus imágenes aquí
├── src/
│   ├── components/
│   │   ├── ProjectCard.vue
│   │   └── SectionHeader.vue
│   ├── data/
│   │   └── projects.js  ← AGREGA TUS PROYECTOS AQUÍ
│   ├── App.vue
│   └── main.js
├── index.html
└── vite.config.js
```
