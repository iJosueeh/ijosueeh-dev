# 🚀 IJosueeh Dev - Portfolio Personal

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Portfolio profesional de Josue Royer - Full-Stack Architect**

[🌐 Demo en Vivo](#) | [📧 Contacto](mailto:your-email@example.com)

</div>

---

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante con paleta de colores púrpura/violeta
- 🌊 **Animaciones Fluidas**: Fondo animado con Silk (WebGL) y efectos visuales impactantes
- 📱 **Totalmente Responsive**: Optimizado para móvil, tablet y desktop
- 🌍 **Multiidioma**: Soporte para Español e Inglés
- ⚡ **Alto Rendimiento**: Construido con Vite para carga ultra-rápida
- ♿ **Accesible**: Navegación con teclado y menú hamburguesa en móvil
- 📥 **Descarga de CV**: Funcionalidad integrada para descargar currículum
- 🎭 **Efectos Visuales**: Partículas flotantes, gradientes y glassmorphism

---

## 🛠️ Stack Tecnológico

### Frontend

- **React 18.3** - Biblioteca de UI
- **TypeScript 5.6** - Tipado estático
- **Vite 7.3** - Build tool y dev server
- **TailwindCSS 3.4** - Framework de CSS utility-first

### Componentes y Animaciones

- **@react-three/fiber** - Renderizado 3D con Three.js
- **GSAP** - Animaciones profesionales
- **React Bits** - Componentes UI avanzados (TextType, Silk)
- **shadcn/ui** - Sistema de componentes

### Herramientas de Desarrollo

- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **pnpm** - Gestor de paquetes rápido

---

## 📂 Estructura del Proyecto

```
ijosueeh-dev/
├── public/
│   └── CV - JOSUE ROYER TANTA CIEZA.pdf
├── src/
│   ├── components/
│   │   ├── features/
│   │   │   └── hero/
│   │   │       ├── components/
│   │   │       │   ├── HeroActions.tsx
│   │   │       │   ├── HeroBackground.tsx
│   │   │       │   ├── HeroBadge.tsx
│   │   │       │   ├── HeroCertifications.tsx
│   │   │       │   ├── HeroContent.tsx
│   │   │       │   ├── HeroScrollIndicator.tsx
│   │   │       │   ├── HeroSubtitle.tsx
│   │   │       │   └── HeroTitle.tsx
│   │   │       ├── types/
│   │   │       └── Hero.tsx
│   │   ├── layout/
│   │   │   └── Navbar.tsx
│   │   └── ui/
│   │       ├── DarkVeil.tsx
│   │       ├── FloatingParticles.tsx
│   │       ├── LanguageToggle.tsx
│   │       ├── Silk.tsx
│   │       └── TextType.tsx
│   ├── constants/
│   │   └── translations.ts
│   ├── context/
│   │   └── language/
│   │       ├── LanguageContext.ts
│   │       ├── LanguageProvider.tsx
│   │       └── useLanguage.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── IJosueehApp.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/iJosueeh/ijosueeh-dev.git

# Navegar al directorio
cd ijosueeh-dev

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo en http://localhost:5173

# Producción
pnpm build        # Construye la aplicación para producción
pnpm preview      # Previsualiza el build de producción

# Linting
pnpm lint         # Ejecuta ESLint para verificar el código
```

---

## 🎨 Paleta de Colores

| Color             | Hex       | Uso                               |
| ----------------- | --------- | --------------------------------- |
| Violeta Principal | `#480e58` | Fondo Silk, elementos principales |
| Violeta Claro     | `#7639c0` | Acentos, hover states             |
| Púrpura           | `#9333ea` | Gradientes, certificaciones       |
| Fucsia            | `#d946ef` | Certificaciones, acentos          |
| Blanco            | `#ffffff` | Textos principales                |
| Gris              | `#d1d5db` | Textos secundarios                |

---

## 📱 Responsive Design

El portfolio está optimizado para los siguientes breakpoints:

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

### Características Responsive

- ✅ Menú hamburguesa en móvil/tablet
- ✅ Botones apilados verticalmente en móvil
- ✅ Tipografía adaptativa
- ✅ Imágenes y componentes optimizados
- ✅ Navegación táctil mejorada

---

## 🌍 Internacionalización

El proyecto soporta dos idiomas:

- 🇪🇸 **Español** (por defecto)
- 🇬🇧 **Inglés**

Las traducciones se gestionan mediante Context API en `src/constants/translations.ts`.

---

## 🎯 Características Destacadas

### Hero Section

- Animación de texto con efecto typewriter
- Fondo animado con Silk (WebGL)
- Partículas flotantes
- Badges de certificaciones
- Botones de acción con descarga de CV

### Navbar

- Sticky navbar con efecto glassmorphism
- Menú hamburguesa responsive
- Toggle de idioma
- Animaciones suaves

### Componentes UI

- **Silk**: Fondo animado con WebGL
- **TextType**: Efecto de máquina de escribir
- **FloatingParticles**: Partículas animadas
- **LanguageToggle**: Cambio de idioma

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 👨‍💻 Autor

**Josue Royer Tanta Cieza**

- Full-Stack Architect
- 🌐 [Portfolio](https://ijosueeh.dev)
- 💼 [LinkedIn](www.linkedin.com/in/josue-tanta)
- 🐙 [GitHub](https://github.com/iJosueeh)

---

## 🙏 Agradecimientos

- [React Bits](https://react-bits.dev) - Componentes UI avanzados
- [shadcn/ui](https://ui.shadcn.com) - Sistema de componentes
- [TailwindCSS](https://tailwindcss.com) - Framework CSS
- [Three.js](https://threejs.org) - Gráficos 3D

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**

Hecho con ❤️ por [IJosueeh](https://github.com/iJosueeh)

</div>
