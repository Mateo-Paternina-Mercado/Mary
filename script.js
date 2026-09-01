// Variables globales mejoradas
let currentSlide = 0
let currentModalImage = 0
let isSlideshow = false
let slideshowInterval
let effectsEnabled = true
let musicEnabled = false
let timeSpent = 0
let visitCount = 1
let likedPhotos = new Set()
let currentMessageIndex = 0
let mobileEasterEggTaps = 0
let lastTapTime = 0

// Sistema de música mejorado
let currentSongIndex = 0
let currentAudio = null
let isPlaying = false
const audioContext = null
const analyser = null

// Sistema de notificaciones
let notificationId = 0

// PLAYLIST expandida
const playlist = [
  {
    id: "song0",
    title: {
      en: "Romantic Melody",
      es: "Melodía Romántica",
    },
    artist: {
      en: "For Mary",
      es: "Para Mary",
    },
    duration: "3:45",
  },
]

// Sistema de internacionalización expandido
const translations = {
  en: {
    loading: "Loading something special...",
    visit: "Visit #",
    subtitle: "A very special person",
    "scroll-down": "Scroll to see more",
    "gallery-title": "Gallery of Moments",
    "gallery-subtitle": "Each image tells a special story",
    "main-message":
      "Each photo tells a story, each smile brightens the day. You are someone incredibly special and these images are just a small reflection of how wonderful you are. Thank you for being you, Mary. ✨",
    caption1: "Natural Beauty ♡",
    caption2: "Infinite Sweetness ♡",
    caption3: "Perfect Smile ♡",
    caption4: "Pure Elegance ♡",
    caption5: "Unique Style ♡",
    caption6: "Unique Beauty ♡",
    "photo-title1": "Natural Beauty ♡",
    "photo-desc1": "A smile that lights up everything",
    perfect: "Perfect",
    "photo-title2": "Infinite Sweetness ♡",
    "photo-desc2": "Tenderness in every gesture",
    adorable: "Adorable",
    "photo-title3": "Perfect Smile ♡",
    "photo-desc3": "Pure happiness",
    radiant: "Radiant",
    "photo-title4": "Pure Elegance ♡",
    "photo-desc4": "Natural sophistication",
    queen: "Queen",
    "photo-title5": "Unique Style ♡",
    "photo-desc5": "Authentic personality",
    unique: "Unique",
    "photo-title6": "Unique Beauty ♡",
    "photo-desc6": "Her beauty is unique and special",
    special: "Special",
    "special-moments": "Special Moments",
    spring: "Spring",
    "spring-msg": "Like flowers that bloom, your beauty is natural and unique",
    shine: "You Shine",
    "shine-msg": "You are the brightest star wherever you are",
    valuable: "Valuable",
    "valuable-msg": "Your friendship is a treasure I value every day",
    "memory-timeline": "Memory Timeline",
    "first-meeting": "First meeting",
    "first-meeting-desc": "The day I met an incredible person",
    "special-moments-timeline": "Special moments",
    "special-moments-desc": "Every conversation, every shared laugh",
    today: "Today",
    "today-desc": "Celebrating how wonderful you are",
    "footer-message": "With much love and appreciation 💕",
    photos: "Photos:",
    "time-spent": "Time:",
    "love-level": "Love:",
    like: "Like",
    liked: "Liked",
    "current-song": "Now Playing",
    "music-paused": "Music Paused",
    "no-music": "No Music",
    "photo-liked": "Photo liked! 💕",
    "easter-egg-mobile": "🎉 Mobile secret activated! You are incredible, Mary! 🎉",
    "easter-egg-desktop": "🎉 Secret code activated! You are incredible, Mary! 🎉",
    "music-started": "🎵 Music started",
    "music-stopped": "🔇 Music stopped",
    "theme-changed": "🌙 Theme changed",
    "effects-enabled": "✨ Effects enabled",
    "effects-disabled": "💫 Effects disabled",
    "slideshow-started": "📸 Slideshow started",
    "slideshow-stopped": "📸 Slideshow stopped",
    "fullscreen-on": "⛶ Fullscreen mode",
    "fullscreen-off": "⛶ Normal mode",
  },
  es: {
    loading: "Cargando algo especial...",
    visit: "Visita #",
    subtitle: "Una persona muy especial",
    "scroll-down": "Desliza para ver más",
    "gallery-title": "Galería de Momentos",
    "gallery-subtitle": "Cada imagen cuenta una historia especial",
    "main-message":
      "Cada foto cuenta una historia, cada sonrisa ilumina el día. Eres alguien increíblemente especial y estas imágenes son solo un pequeño reflejo de lo maravillosa que eres. Gracias por ser tú, Mary. ✨",
    caption1: "Belleza Natural ♡",
    caption2: "Dulzura Infinita ♡",
    caption3: "Sonrisa Perfecta ♡",
    caption4: "Elegancia Pura ♡",
    caption5: "Estilo Único ♡",
    caption6: "Belleza Única ♡",
    "photo-title1": "Belleza Natural ♡",
    "photo-desc1": "Una sonrisa que ilumina todo",
    perfect: "Perfecta",
    "photo-title2": "Dulzura Infinita ♡",
    "photo-desc2": "Ternura en cada gesto",
    adorable: "Adorable",
    "photo-title3": "Sonrisa Perfecta ♡",
    "photo-desc3": "Felicidad pura",
    radiant: "Radiante",
    "photo-title4": "Elegancia Pura ♡",
    "photo-desc4": "Sofisticación natural",
    queen: "Reina",
    "photo-title5": "Estilo Único ♡",
    "photo-desc5": "Personalidad auténtica",
    unique: "Única",
    "photo-title6": "Belleza Única ♡",
    "photo-desc6": "Su belleza es única y especial",
    special: "Especial",
    "special-moments": "Momentos Especiales",
    spring: "Primavera",
    "spring-msg": "Como las flores que florecen, tu belleza es natural y única",
    shine: "Brillas",
    "shine-msg": "Eres la estrella más brillante en cualquier lugar donde estés",
    valuable: "Valiosa",
    "valuable-msg": "Tu amistad es un tesoro que valoro cada día",
    "memory-timeline": "Línea de Recuerdos",
    "first-meeting": "Primer encuentro",
    "first-meeting-desc": "El día que conocí a una persona increíble",
    "special-moments-timeline": "Momentos especiales",
    "special-moments-desc": "Cada conversación, cada risa compartida",
    today: "Hoy",
    "today-desc": "Celebrando lo maravillosa que eres",
    "footer-message": "Con mucho cariño y aprecio 💕",
    photos: "Fotos:",
    "time-spent": "Tiempo:",
    "love-level": "Cariño:",
    like: "Me gusta",
    liked: "Te gusta",
    "current-song": "Reproduciendo",
    "music-paused": "Música Pausada",
    "no-music": "Sin Música",
    "photo-liked": "¡Foto marcada como favorita! 💕",
    "easter-egg-mobile": "🎉 ¡Secreto móvil activado! Eres increíble, Mary! 🎉",
    "easter-egg-desktop": "🎉 ¡Código secreto activado! Eres increíble, Mary! 🎉",
    "music-started": "🎵 Música iniciada",
    "music-stopped": "🔇 Música detenida",
    "theme-changed": "🌙 Tema cambiado",
    "effects-enabled": "✨ Efectos activados",
    "effects-disabled": "💫 Efectos desactivados",
    "slideshow-started": "📸 Presentación iniciada",
    "slideshow-stopped": "📸 Presentación detenida",
    "fullscreen-on": "⛶ Modo pantalla completa",
    "fullscreen-off": "⛶ Modo normal",
  },
}

let currentLanguage = "es"

// Mensajes dinámicos expandidos
const dynamicMessages = {
  en: [
    "Each photo tells a story, each smile brightens the day. You are someone incredibly special and these images are just a small reflection of how wonderful you are. Thank you for being you, Mary. ✨",
    "Your smile is like a ray of sunshine that lights up even the grayest days. Every moment with you is a gift I treasure. 💕",
    "In a world full of ordinary people, you shine with a unique and special light. Your authenticity is inspiring. 🌟",
    "Each photograph captures not only your outer beauty, but also the warmth of your heart and the purity of your soul. 💖",
    "You have the rare gift of making everyone around you feel special and loved. That's your superpower. 🦋",
    "Like a beautiful melody that stays in your heart, your presence brings joy and harmony to life. 🎵",
  ],
  es: [
    "Cada foto cuenta una historia, cada sonrisa ilumina el día. Eres alguien increíblemente especial y estas imágenes son solo un pequeño reflejo de lo maravillosa que eres. Gracias por ser tú, Mary. ✨",
    "Tu sonrisa es como un rayo de sol que ilumina incluso los días más grises. Cada momento contigo es un regalo que atesoro. 💕",
    "En un mundo lleno de personas ordinarias, tú brillas con una luz única y especial. Tu autenticidad es inspiradora. 🌟",
    "Cada fotografía captura no solo tu belleza exterior, sino también la calidez de tu corazón y la pureza de tu alma. 💖",
    "Tienes el don especial de hacer que todos a tu alrededor se sientan especiales y queridos. Ese es tu superpoder. 🦋",
    "Como una hermosa melodía que se queda en el corazón, tu presencia trae alegría y armonía a la vida. 🎵",
  ],
}

// Datos de fotos expandidos
const photoData = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caro1.jpg-uST8HPlZHebkwz334OTiyrqkZ6aY7Y.jpeg",
    title: "Belleza Natural ♡",
    description: "Una sonrisa que ilumina todo",
    likes: 127,
    tags: ["natural", "sonrisa", "belleza"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caro2.jpg-CFLet9wGWy3gEoeamwY9InzTFngjci.jpeg",
    title: "Dulzura Infinita ♡",
    description: "Ternura en cada gesto",
    likes: 156,
    tags: ["dulzura", "ternura", "gesto"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caro3.jpg-0AYcJQDX0611oWhQhgGb9xAeRQGgVa.jpeg",
    title: "Sonrisa Perfecta ♡",
    description: "Felicidad pura",
    likes: 203,
    tags: ["sonrisa", "felicidad", "perfecta"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caro4.jpg-o9YRE2rArKJnyKjWN3QD6UVfKcEeje.jpeg",
    title: "Elegancia Pura ♡",
    description: "Sofisticación natural",
    likes: 189,
    tags: ["elegancia", "sofisticación", "natural"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caro5.jpg-QUAnkEKFoGw6atjyhbpEHEsINUL9nM.jpeg",
    title: "Estilo Único ♡",
    description: "Personalidad auténtica",
    likes: 174,
    tags: ["estilo", "único", "personalidad"],
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caro6.jpg-3u44sUPFibP1da1jRzBcM8WpcAkT1x.jpeg",
    title: "Belleza Única ♡",
    description: "Su belleza es única y especial",
    likes: 0,
    tags: ["belleza", "única", "especial"],
  },
]

// Sistema de notificaciones
function showNotification(message, type = "info", duration = 3000) {
  const container = document.getElementById("notifications")
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message
  notification.id = `notification-${notificationId++}`

  container.appendChild(notification)

  // Auto remove
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOutNotification 0.5s ease forwards"
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove()
        }
      }, 500)
    }
  }, duration)

  return notification
}

// Efectos de partículas mejorados
class ParticleSystem {
  constructor() {
    this.particles = []
    this.maxParticles = 50
  }

  createStar() {
    if (!effectsEnabled) return

    const starsContainer = document.querySelector(".stars-layer")
    const star = document.createElement("div")
    star.className = "star"
    star.style.left = Math.random() * 100 + "%"
    star.style.top = Math.random() * 100 + "%"
    star.style.width = Math.random() * 3 + 1 + "px"
    star.style.height = star.style.width
    star.style.animationDelay = Math.random() * 3 + "s"
    starsContainer.appendChild(star)

    this.particles.push(star)
    this.cleanupParticles()
  }

  createHeart() {
    if (!effectsEnabled) return

    const heartsContainer = document.querySelector(".hearts-layer")
    const heart = document.createElement("div")
    heart.className = "heart"
    heart.innerHTML = "♡"
    heart.style.left = Math.random() * 100 + "%"
    heart.style.animationDuration = Math.random() * 3 + 3 + "s"
    heart.style.fontSize = Math.random() * 10 + 15 + "px"
    heart.style.color = `hsl(${Math.random() * 60 + 300}, 70%, 70%)`
    heartsContainer.appendChild(heart)

    setTimeout(() => heart.remove(), 6000)
  }

  createPetal() {
    if (!effectsEnabled) return

    const petalsContainer = document.querySelector(".petals-layer")
    const petal = document.createElement("div")
    petal.className = "petal"
    petal.style.left = Math.random() * 100 + "%"
    petal.style.animationDuration = Math.random() * 3 + 5 + "s"
    petal.style.animationDelay = Math.random() * 2 + "s"
    petalsContainer.appendChild(petal)

    setTimeout(() => petal.remove(), 8000)
  }

  createBubble() {
    if (!effectsEnabled) return

    const bubblesContainer = document.querySelector(".bubbles-layer")
    const bubble = document.createElement("div")
    bubble.className = "bubble"
    const size = Math.random() * 20 + 10
    bubble.style.width = size + "px"
    bubble.style.height = size + "px"
    bubble.style.left = Math.random() * 100 + "%"
    bubble.style.animationDuration = Math.random() * 5 + 5 + "s"
    bubblesContainer.appendChild(bubble)

    setTimeout(() => bubble.remove(), 10000)
  }

  createSparkle(x, y) {
    if (!effectsEnabled) return

    const sparklesContainer = document.querySelector(".sparkles-layer")
    const sparkle = document.createElement("div")
    sparkle.className = "sparkle"
    sparkle.innerHTML = "✨"
    sparkle.style.left = x + "px"
    sparkle.style.top = y + "px"
    sparkle.style.fontSize = Math.random() * 10 + 10 + "px"
    sparklesContainer.appendChild(sparkle)

    setTimeout(() => sparkle.remove(), 4000)
  }

  cleanupParticles() {
    if (this.particles.length > this.maxParticles) {
      const oldParticle = this.particles.shift()
      if (oldParticle.parentNode) {
        oldParticle.remove()
      }
    }
  }

  clearAll() {
    document.querySelector(".hearts-layer").innerHTML = ""
    document.querySelector(".petals-layer").innerHTML = ""
    document.querySelector(".bubbles-layer").innerHTML = ""
    document.querySelector(".sparkles-layer").innerHTML = ""
    this.particles = []
  }
}

const particleSystem = new ParticleSystem()

// Canvas de ondas mejorado
class WaveCanvas {
  constructor() {
    this.canvas = document.getElementById("waveCanvas")
    this.ctx = this.canvas.getContext("2d")
    this.time = 0
    this.waves = [
      { amplitude: 30, frequency: 0.01, speed: 2, color: "rgba(255, 105, 180, 0.1)" },
      { amplitude: 20, frequency: 0.015, speed: 1.5, color: "rgba(255, 179, 217, 0.2)" },
      { amplitude: 40, frequency: 0.008, speed: 2.5, color: "rgba(255, 20, 147, 0.1)" },
    ]

    this.resize()
    this.animate()

    window.addEventListener("resize", () => this.resize())
  }

  resize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.waves.forEach((wave, index) => {
      this.ctx.beginPath()
      this.ctx.strokeStyle = wave.color
      this.ctx.lineWidth = 2

      for (let x = 0; x < this.canvas.width; x++) {
        const y =
          this.canvas.height / 2 +
          Math.sin((x + this.time * wave.speed + index * 100) * wave.frequency) * wave.amplitude

        if (x === 0) {
          this.ctx.moveTo(x, y)
        } else {
          this.ctx.lineTo(x, y)
        }
      }

      this.ctx.stroke()
    })

    this.time += 1
    requestAnimationFrame(() => this.animate())
  }
}

// Inicialización mejorada y más rápida
function initializeApp() {
  console.log("🌸 Iniciando página especial para Mary...")

  // Ocultar loader más rápido (1.5 segundos en lugar de 3)
  setTimeout(hideLoader, 1500)

  // Inicializar sistemas inmediatamente
  try {
    initializeControls()
    initializeMusicSystem()
    initializeCounters()
    initializeAnimations()
    setupEventListeners()
    loadUserPreferences()

    // Inicializar canvas de ondas
    new WaveCanvas()

    // Cambiar mensaje dinámico cada 10 segundos
    setInterval(changeMessage, 10000)

    console.log("✅ Página cargada exitosamente")
  } catch (error) {
    console.error("Error al inicializar:", error)
    // Si hay error, forzar ocultar loader
    setTimeout(() => {
      const loader = document.getElementById("loader")
      if (loader) {
        loader.style.display = "none"
        document.body.style.overflow = "auto"
      }
    }, 100)
  }
}

// Función para cambiar idioma mejorada
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "es" : "en"
  updateLanguage()
  saveUserPreferences()
  showNotification(translations[currentLanguage]["theme-changed"], "info")
}

// Actualizar idioma mejorado
function updateLanguage() {
  // Actualizar elementos con data-i18n
  const elements = document.querySelectorAll("[data-i18n]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n")
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key]
    }
  })

  // Actualizar título principal
  const titleLetters = document.querySelectorAll(".letter")
  const newTitle = currentLanguage === "en" ? "For Mary ♡" : "Para Mary ♡"
  titleLetters.forEach((letter, index) => {
    if (index < newTitle.length) {
      letter.textContent = newTitle[index]
      letter.setAttribute("data-letter", newTitle[index])
    }
  })

  // Actualizar subtítulo con animación
  const typingText = document.querySelector(".typing-text")
  if (typingText) {
    const newText = translations[currentLanguage]["subtitle"]
    typingText.setAttribute("data-text", newText)
    restartTypingAnimation(typingText, newText)
  }

  // Actualizar slideshow backgrounds
  const slides = document.querySelectorAll(".slide")
  slides.forEach((slide, index) => {
    const bgImage = slide.getAttribute("data-bg")
    if (bgImage) {
      slide.style.backgroundImage = `url(${bgImage})`
    }
  })

  // Actualizar idioma del documento
  document.documentElement.lang = currentLanguage

  updateMusicDisplay()
}

// Animación de escritura mejorada
function restartTypingAnimation(element, text) {
  element.style.animation = "none"
  element.textContent = ""

  setTimeout(() => {
    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }
    typeWriter()
  }, 100)
}

// Loader mejorado con detección automática
function hideLoader() {
  const loader = document.getElementById("loader")
  if (!loader) return

  loader.style.opacity = "0"
  loader.style.transform = "scale(0.8)"

  setTimeout(() => {
    loader.style.display = "none"
    document.body.style.overflow = "auto"

    // Mostrar contenido principal
    const mainContainer = document.querySelector(".main-container")
    if (mainContainer) {
      mainContainer.style.opacity = "1"
      mainContainer.style.transform = "translateY(0)"
    }

    // Iniciar efectos después de cargar
    setTimeout(() => {
      if (effectsEnabled) {
        startBackgroundEffects()
      }
    }, 500)
  }, 500)
}

// Función para iniciar efectos de fondo
function startBackgroundEffects() {
  // Crear estrellas iniciales
  for (let i = 0; i < 50; i++) {
    setTimeout(() => particleSystem.createStar(), i * 20)
  }

  // Iniciar efectos periódicos
  setInterval(() => particleSystem.createHeart(), 2000)
  setInterval(() => particleSystem.createPetal(), 1500)
  setInterval(() => particleSystem.createBubble(), 3000)
}

// Modal mejorado
function openModal(src, index) {
  const modal = document.getElementById("imageModal")
  const modalImg = document.getElementById("modalImage")
  const modalTitle = document.getElementById("modalTitle")
  const modalDescription = document.getElementById("modalDescription")
  const modalLikes = document.getElementById("modalLikes")

  currentModalImage = index

  modal.style.display = "block"
  modal.classList.add("show")
  modalImg.src = src
  modalTitle.textContent = photoData[index].title
  modalDescription.textContent = photoData[index].description
  modalLikes.textContent = photoData[index].likes

  document.body.style.overflow = "hidden"

  // Actualizar botón de like
  updateLikeButton()

  // Precargar imágenes adyacentes
  preloadAdjacentImages(index)
}

function closeModal() {
  const modal = document.getElementById("imageModal")
  modal.classList.remove("show")
  setTimeout(() => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }, 300)
}

function navigateModal(direction) {
  currentModalImage += direction

  if (currentModalImage >= photoData.length) {
    currentModalImage = 0
  } else if (currentModalImage < 0) {
    currentModalImage = photoData.length - 1
  }

  const modalImg = document.getElementById("modalImage")
  const modalTitle = document.getElementById("modalTitle")
  const modalDescription = document.getElementById("modalDescription")
  const modalLikes = document.getElementById("modalLikes")

  // Animación de transición
  modalImg.style.opacity = "0"
  setTimeout(() => {
    modalImg.src = photoData[currentModalImage].src
    modalTitle.textContent = photoData[currentModalImage].title
    modalDescription.textContent = photoData[currentModalImage].description
    modalLikes.textContent = photoData[currentModalImage].likes
    modalImg.style.opacity = "1"
    updateLikeButton()
  }, 150)
}

function updateLikeButton() {
  const btn = document.querySelector(".like-btn")
  const heartIcon = document.querySelector(".heart-icon")
  const likeText = document.querySelector(".like-text")

  if (likedPhotos.has(currentModalImage)) {
    btn.classList.add("liked")
    heartIcon.innerHTML = "♥"
    likeText.textContent = translations[currentLanguage]["liked"]
  } else {
    btn.classList.remove("liked")
    heartIcon.innerHTML = "♡"
    likeText.textContent = translations[currentLanguage]["like"]
  }
}

function likePhoto() {
  const btn = document.querySelector(".like-btn")
  const heartIcon = document.querySelector(".heart-icon")
  const likeText = document.querySelector(".like-text")
  const modalLikes = document.getElementById("modalLikes")

  if (likedPhotos.has(currentModalImage)) {
    likedPhotos.delete(currentModalImage)
    btn.classList.remove("liked")
    heartIcon.innerHTML = "♡"
    likeText.textContent = translations[currentLanguage]["like"]
    photoData[currentModalImage].likes--
  } else {
    likedPhotos.add(currentModalImage)
    btn.classList.add("liked")
    heartIcon.innerHTML = "♥"
    likeText.textContent = translations[currentLanguage]["liked"]
    photoData[currentModalImage].likes++

    // Crear efecto de ripple
    createRippleEffect(btn)

    // Crear corazones de celebración
    createCelebrationHearts()

    // Mostrar notificación
    showNotification(translations[currentLanguage]["photo-liked"], "success")
  }

  modalLikes.textContent = photoData[currentModalImage].likes
  updateLikeCounts()
}

function createRippleEffect(button) {
  const ripple = document.createElement("div")
  ripple.className = "btn-ripple"

  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  ripple.style.width = ripple.style.height = size + "px"
  ripple.style.left = rect.width / 2 - size / 2 + "px"
  ripple.style.top = rect.height / 2 - size / 2 + "px"

  button.appendChild(ripple)

  setTimeout(() => ripple.remove(), 600)
}

function sharePhoto() {
  if (navigator.share) {
    navigator.share({
      title: photoData[currentModalImage].title,
      text: photoData[currentModalImage].description,
      url: window.location.href,
    })
  } else {
    // Fallback: copiar URL al portapapeles
    navigator.clipboard.writeText(window.location.href).then(() => {
      showNotification("¡Enlace copiado al portapapeles!", "success")
    })
  }
}

function preloadAdjacentImages(currentIndex) {
  const prevIndex = currentIndex === 0 ? photoData.length - 1 : currentIndex - 1
  const nextIndex = currentIndex === photoData.length - 1 ? 0 : currentIndex + 1
  ;[prevIndex, nextIndex].forEach((index) => {
    const img = new Image()
    img.src = photoData[index].src
  })
}

function createCelebrationHearts() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement("div")
      heart.innerHTML = ["💖", "💕", "💝", "🌸", "⭐"][Math.floor(Math.random() * 5)]
      heart.style.position = "fixed"
      heart.style.left = Math.random() * window.innerWidth + "px"
      heart.style.top = "-50px"
      heart.style.fontSize = Math.random() * 1 + 1.5 + "rem"
      heart.style.pointerEvents = "none"
      heart.style.zIndex = "9999"
      heart.style.animation = "specialHeartFall 3s linear forwards"
      document.body.appendChild(heart)

      setTimeout(() => heart.remove(), 3000)
    }, i * 100)
  }
}

function updateLikeCounts() {
  const likeCounts = document.querySelectorAll(".like-count")
  likeCounts.forEach((count, index) => {
    if (photoData[index]) {
      count.textContent = photoData[index].likes
    }
  })
}

// Sistema de música mejorado
function initializeMusicSystem() {
  if (playlist.length > 0) {
    currentAudio = document.getElementById(playlist[currentSongIndex].id)
    updateMusicDisplay()

    // Event listeners
    document.getElementById("playPause").addEventListener("click", togglePlayPause)
    document.getElementById("prevSong").addEventListener("click", previousSong)
    document.getElementById("nextSong").addEventListener("click", nextSong)

    // Actualizar barra de progreso
    if (currentAudio) {
      currentAudio.addEventListener("timeupdate", updateProgress)
      currentAudio.addEventListener("ended", nextSong)
      currentAudio.addEventListener("loadstart", () => {
        console.log("Cargando música...")
      })
    }
  }
}

function togglePlayPause() {
  if (!currentAudio) return

  const playPauseBtn = document.getElementById("playPause")
  const musicToggle = document.getElementById("musicToggle")
  const vinylRecord = document.querySelector(".vinyl-record")

  if (isPlaying) {
    currentAudio.pause()
    isPlaying = false
    playPauseBtn.innerHTML = "▶️"
    musicToggle.classList.remove("active")
    vinylRecord.classList.add("paused")
    document.querySelector(".music-player").classList.remove("playing")
    showNotification(translations[currentLanguage]["music-stopped"], "info")
  } else {
    currentAudio.play().catch((e) => {
      console.log("No se pudo reproducir la música:", e)
      showNotification("Error al reproducir música", "warning")
    })
    isPlaying = true
    playPauseBtn.innerHTML = "⏸️"
    musicToggle.classList.add("active")
    vinylRecord.classList.remove("paused")
    document.querySelector(".music-player").classList.add("playing")
    showNotification(translations[currentLanguage]["music-started"], "success")
  }

  musicEnabled = isPlaying
  updateMusicDisplay()
  toggleMusicPlayer()
}

function previousSong() {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }

  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length
  changeSong()
}

function nextSong() {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }

  currentSongIndex = (currentSongIndex + 1) % playlist.length
  changeSong()
}

function changeSong() {
  if (playlist.length === 0) return

  currentAudio = document.getElementById(playlist[currentSongIndex].id)

  if (isPlaying && currentAudio) {
    currentAudio.play().catch((e) => console.log("Error al cambiar canción:", e))
  }

  updateMusicDisplay()
  createMusicChangeEffect()
}

function updateMusicDisplay() {
  const songNameElement = document.getElementById("songName")
  const musicTitleElement = document.getElementById("musicTitle")

  if (playlist.length > 0) {
    const currentSong = playlist[currentSongIndex]
    const title = currentSong.title[currentLanguage] || currentSong.title.en
    const artist = currentSong.artist[currentLanguage] || currentSong.artist.en

    songNameElement.textContent = `${title} - ${artist}`

    if (isPlaying) {
      musicTitleElement.textContent = translations[currentLanguage]["current-song"]
    } else {
      musicTitleElement.textContent = translations[currentLanguage]["music-paused"]
    }
  } else {
    songNameElement.textContent = translations[currentLanguage]["no-music"]
    musicTitleElement.textContent = ""
  }
}

function updateProgress() {
  if (currentAudio && currentAudio.duration) {
    const progress = (currentAudio.currentTime / currentAudio.duration) * 100
    const progressBar = document.getElementById("progressBar")
    const progressHandle = document.querySelector(".progress-handle")

    if (progressBar) {
      progressBar.style.width = progress + "%"
    }
    if (progressHandle) {
      progressHandle.style.left = progress + "%"
    }
  }
}

function createMusicChangeEffect() {
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const note = document.createElement("div")
      note.innerHTML = ["♪", "♫", "♬", "🎵", "🎶"][Math.floor(Math.random() * 5)]
      note.style.position = "fixed"
      note.style.left = Math.random() * window.innerWidth + "px"
      note.style.top = window.innerHeight + "px"
      note.style.fontSize = Math.random() * 1 + 1.5 + "rem"
      note.style.color = `hsl(${Math.random() * 60 + 300}, 70%, 70%)`
      note.style.pointerEvents = "none"
      note.style.zIndex = "9999"
      note.style.animation = "musicNoteRise 3s ease-out forwards"
      document.body.appendChild(note)

      setTimeout(() => note.remove(), 3000)
    }, i * 200)
  }
}

function toggleMusicPlayer() {
  const player = document.getElementById("musicPlayer")

  if (musicEnabled || isPlaying) {
    player.classList.add("show")
  } else {
    player.classList.remove("show")
  }
}

// Controles mejorados
function initializeControls() {
  const languageToggle = document.getElementById("languageToggle")
  const musicToggle = document.getElementById("musicToggle")
  const themeToggle = document.getElementById("themeToggle")
  const effectsToggle = document.getElementById("effectsToggle")
  const slideshowToggle = document.getElementById("slideshowToggle")
  const fullscreenToggle = document.getElementById("fullscreenToggle")
  const mobileEasterEgg = document.getElementById("mobileEasterEgg")

  languageToggle?.addEventListener("click", toggleLanguage)
  musicToggle?.addEventListener("click", toggleMusic)
  themeToggle?.addEventListener("click", toggleTheme)
  effectsToggle?.addEventListener("click", toggleEffects)
  slideshowToggle?.addEventListener("click", toggleSlideshow)
  fullscreenToggle?.addEventListener("click", toggleFullscreen)
  mobileEasterEgg?.addEventListener("click", handleMobileEasterEgg)
}

function toggleMusic() {
  const btn = document.getElementById("musicToggle")

  if (musicEnabled || isPlaying) {
    if (currentAudio) {
      currentAudio.pause()
    }
    isPlaying = false
    musicEnabled = false
    btn.classList.remove("active")
    btn.querySelector(".btn-icon").innerHTML = "🔇"
    document.getElementById("playPause").innerHTML = "▶️"
    document.querySelector(".music-player").classList.remove("playing")
    document.querySelector(".vinyl-record").classList.add("paused")
    toggleMusicPlayer()
    showNotification(translations[currentLanguage]["music-stopped"], "info")
  } else {
    if (currentAudio) {
      currentAudio.play().catch((e) => console.log("Error al reproducir música:", e))
    }
    isPlaying = true
    musicEnabled = true
    btn.classList.add("active")
    btn.querySelector(".btn-icon").innerHTML = "🎵"
    document.getElementById("playPause").innerHTML = "⏸️"
    document.querySelector(".music-player").classList.add("playing")
    document.querySelector(".vinyl-record").classList.remove("paused")
    toggleMusicPlayer()
    showNotification(translations[currentLanguage]["music-started"], "success")
  }

  updateMusicDisplay()
}

function toggleTheme() {
  const body = document.body
  const btn = document.getElementById("themeToggle")

  if (body.getAttribute("data-theme") === "light") {
    body.removeAttribute("data-theme")
    btn.querySelector(".btn-icon").innerHTML = "🌙"
  } else {
    body.setAttribute("data-theme", "light")
    btn.querySelector(".btn-icon").innerHTML = "☀️"
  }

  showNotification(translations[currentLanguage]["theme-changed"], "info")
  saveUserPreferences()
}

function toggleEffects() {
  const btn = document.getElementById("effectsToggle")

  effectsEnabled = !effectsEnabled

  if (effectsEnabled) {
    btn.classList.add("active")
    btn.querySelector(".btn-icon").innerHTML = "✨"
    showNotification(translations[currentLanguage]["effects-enabled"], "success")
  } else {
    btn.classList.remove("active")
    btn.querySelector(".btn-icon").innerHTML = "💫"
    particleSystem.clearAll()
    showNotification(translations[currentLanguage]["effects-disabled"], "info")
  }

  saveUserPreferences()
}

function toggleSlideshow() {
  const slideshowContainer = document.getElementById("slideshowContainer")
  const mainGallery = document.getElementById("mainGallery")
  const btn = document.getElementById("slideshowToggle")

  isSlideshow = !isSlideshow

  if (isSlideshow) {
    slideshowContainer.style.display = "block"
    mainGallery.style.display = "none"
    btn.classList.add("active")
    startSlideshow()
    showNotification(translations[currentLanguage]["slideshow-started"], "info")
  } else {
    slideshowContainer.style.display = "none"
    mainGallery.style.display = "block"
    btn.classList.remove("active")
    stopSlideshow()
    showNotification(translations[currentLanguage]["slideshow-stopped"], "info")
  }

  saveUserPreferences()
}

function toggleFullscreen() {
  const btn = document.getElementById("fullscreenToggle")

  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen()
      .then(() => {
        btn.classList.add("active")
        showNotification(translations[currentLanguage]["fullscreen-on"], "info")
      })
      .catch((err) => {
        console.log("Error al entrar en pantalla completa:", err)
      })
  } else {
    document.exitFullscreen().then(() => {
      btn.classList.remove("active")
      showNotification(translations[currentLanguage]["fullscreen-off"], "info")
    })
  }
}

// Easter Egg para móviles
function handleMobileEasterEgg() {
  const currentTime = Date.now()

  if (currentTime - lastTapTime < 500) {
    mobileEasterEggTaps++
  } else {
    mobileEasterEggTaps = 1
  }

  lastTapTime = currentTime

  if (mobileEasterEggTaps >= 10) {
    activateEasterEgg(true)
    mobileEasterEggTaps = 0
  }

  // Feedback visual
  const btn = document.getElementById("mobileEasterEgg")
  btn.style.transform = "scale(0.9)"
  setTimeout(() => {
    btn.style.transform = "scale(1)"
  }, 100)
}

// Slideshow mejorado
function startSlideshow() {
  slideshowInterval = setInterval(() => {
    changeSlide(1)
  }, 5000)
}

function stopSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval)
  }
}

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide")
  const indicators = document.querySelectorAll(".indicator")

  slides[currentSlide].classList.remove("active")
  indicators[currentSlide].classList.remove("active")

  currentSlide += direction

  if (currentSlide >= slides.length) {
    currentSlide = 0
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1
  }

  slides[currentSlide].classList.add("active")
  indicators[currentSlide].classList.add("active")
}

function setCurrentSlide(n) {
  const slides = document.querySelectorAll(".slide")
  const indicators = document.querySelectorAll(".indicator")

  slides[currentSlide].classList.remove("active")
  indicators[currentSlide].classList.remove("active")

  currentSlide = n - 1

  slides[currentSlide].classList.add("active")
  indicators[currentSlide].classList.add("active")
}

// Contadores mejorados
function initializeCounters() {
  // Contador de visitas
  visitCount = localStorage.getItem("caroPageVisits") || 1
  localStorage.setItem("caroPageVisits", Number.parseInt(visitCount) + 1)
  const visitCountElement = document.getElementById("visitCount")
  if (visitCountElement) {
    visitCountElement.textContent = visitCount
  }

  // Contador de tiempo con formato mejorado
  setInterval(() => {
    timeSpent++
    const timeSpentElement = document.getElementById("timeSpent")
    if (timeSpentElement) {
      if (timeSpent < 60) {
        timeSpentElement.textContent = timeSpent
      } else {
        const minutes = Math.floor(timeSpent / 60)
        const seconds = timeSpent % 60
        timeSpentElement.textContent = `${minutes}m ${seconds}`
      }
    }
  }, 1000)
}

// Animaciones mejoradas
function initializeAnimations() {
  // Animación de letras del título
  const letters = document.querySelectorAll(".letter")
  letters.forEach((letter, index) => {
    letter.style.setProperty("--i", index)
    letter.style.animationDelay = index * 0.1 + "s"
  })

  // Efecto de escritura para el subtítulo
  const typingText = document.querySelector(".typing-text")
  if (typingText) {
    const text = typingText.getAttribute("data-text")
    typingText.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        typingText.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    setTimeout(typeWriter, 1000)
  }

  // Animación de scroll suave
  const scrollIndicator = document.querySelector(".scroll-indicator")
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const gallerySection = document.querySelector(".gallery-section")
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" })
      }
    })
  }
}

// Event listeners mejorados
function setupEventListeners() {
  // Parallax mejorado
  window.addEventListener("scroll", handleParallax)

  // Efectos del cursor
  document.addEventListener("mousemove", createCursorParticle)

  // Teclado
  document.addEventListener("keydown", handleKeyboard)

  // Redimensionar ventana
  window.addEventListener("resize", handleResize)

  // Visibilidad de la página
  document.addEventListener("visibilitychange", handleVisibilityChange)

  // Prevenir clic derecho en imágenes
  document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "IMG") {
      e.preventDefault()
    }
  })

  // Cerrar modal al hacer clic fuera
  document.addEventListener("click", (e) => {
    const modal = document.getElementById("imageModal")
    if (e.target === modal) {
      closeModal()
    }
  })
}

function createCursorParticle(e) {
  if (!effectsEnabled || Math.random() > 0.98) return

  particleSystem.createSparkle(e.clientX, e.clientY)
}

function handleParallax() {
  const scrolled = window.pageYOffset
  const rate = scrolled * -0.5

  // Parallax para orbs
  const orbs = document.querySelectorAll(".orb")
  orbs.forEach((orb, index) => {
    const speed = 0.1 + index * 0.05
    const yPos = scrolled * speed
    orb.style.transform = `translateY(${yPos}px)`
  })

  // Parallax para tarjetas de fotos
  const cards = document.querySelectorAll(".photo-card")
  cards.forEach((card, index) => {
    const speed = 0.05 + index * 0.02
    const yPos = -(scrolled * speed)
    card.style.transform = `translateY(${yPos}px)`
  })

  // Efecto parallax en el hero
  const heroContent = document.querySelector(".hero-content")
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`
  }
}

function handleKeyboard(event) {
  switch (event.key) {
    case "Escape":
      closeModal()
      break
    case "ArrowLeft":
      if (document.getElementById("imageModal").style.display === "block") {
        navigateModal(-1)
      } else if (isSlideshow) {
        changeSlide(-1)
      }
      break
    case "ArrowRight":
      if (document.getElementById("imageModal").style.display === "block") {
        navigateModal(1)
      } else if (isSlideshow) {
        changeSlide(1)
      }
      break
    case " ":
      event.preventDefault()
      toggleSlideshow()
      break
    case "m":
    case "M":
      toggleMusic()
      break
    case "f":
    case "F":
      toggleFullscreen()
      break
    case "l":
    case "L":
      toggleLanguage()
      break
    case "t":
    case "T":
      toggleTheme()
      break
    case "e":
    case "E":
      toggleEffects()
      break
  }
}

function handleResize() {
  // Reajustar elementos responsivos
  const nav = document.querySelector(".floating-nav")
  if (window.innerWidth <= 768) {
    nav?.classList.add("mobile")
  } else {
    nav?.classList.remove("mobile")
  }
}

function handleVisibilityChange() {
  if (document.hidden) {
    if (musicEnabled && currentAudio) {
      currentAudio.pause()
    }
  } else {
    if (musicEnabled && currentAudio) {
      currentAudio.play().catch((e) => {})
    }
  }
}

// Mensajes dinámicos mejorados
function changeMessage() {
  const messageElement = document.getElementById("dynamicMessage")
  if (!messageElement) return

  messageElement.style.opacity = "0"
  messageElement.style.transform = "translateY(20px)"

  setTimeout(() => {
    currentMessageIndex = (currentMessageIndex + 1) % dynamicMessages[currentLanguage].length
    messageElement.textContent = dynamicMessages[currentLanguage][currentMessageIndex]
    messageElement.style.opacity = "1"
    messageElement.style.transform = "translateY(0)"
  }, 500)
}

// Sistema de preferencias mejorado
function saveUserPreferences() {
  const preferences = {
    musicEnabled,
    effectsEnabled,
    theme: document.body.getAttribute("data-theme") || "dark",
    visitCount: Number.parseInt(localStorage.getItem("caroPageVisits") || 1),
    language: currentLanguage,
    likedPhotos: Array.from(likedPhotos),
    isSlideshow,
  }

  localStorage.setItem("caroPagePreferences", JSON.stringify(preferences))
}

function loadUserPreferences() {
  const saved = localStorage.getItem("caroPagePreferences")
  if (saved) {
    try {
      const preferences = JSON.parse(saved)

      if (preferences.theme === "light") {
        document.body.setAttribute("data-theme", "light")
        const themeToggle = document.getElementById("themeToggle")
        if (themeToggle) {
          themeToggle.querySelector(".btn-icon").innerHTML = "☀️"
        }
      }

      effectsEnabled = preferences.effectsEnabled !== false
      const effectsToggle = document.getElementById("effectsToggle")
      if (effectsToggle) {
        if (effectsEnabled) {
          effectsToggle.classList.add("active")
          effectsToggle.querySelector(".btn-icon").innerHTML = "✨"
        } else {
          effectsToggle.classList.remove("active")
          effectsToggle.querySelector(".btn-icon").innerHTML = "💫"
        }
      }

      if (preferences.language) {
        currentLanguage = preferences.language
        updateLanguage()
      }

      if (preferences.likedPhotos) {
        likedPhotos = new Set(preferences.likedPhotos)
      }
    } catch (e) {
      console.log("Error al cargar preferencias:", e)
    }
  }
}

// Easter egg mejorado
let konamiCode = []
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code)
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift()
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    activateEasterEgg(false)
    konamiCode = []
  }
})

function activateEasterEgg(isMobile = false) {
  // Crear lluvia de corazones especial
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      createSpecialHeart()
    }, i * 50)
  }

  // Mostrar mensaje especial
  const specialMessage = document.createElement("div")
  const easterEggText = isMobile
    ? translations[currentLanguage]["easter-egg-mobile"]
    : translations[currentLanguage]["easter-egg-desktop"]

  specialMessage.innerHTML = easterEggText
  specialMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff69b4, #ff1493);
        color: white;
        padding: 2rem 3rem;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 9999;
        text-align: center;
        box-shadow: 0 10px 40px rgba(255, 105, 180, 0.5);
        animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `

  document.body.appendChild(specialMessage)

  // Efectos de sonido (si la música está habilitada)
  if (musicEnabled && currentAudio) {
    const originalVolume = currentAudio.volume
    currentAudio.volume = 0.3
    setTimeout(() => {
      currentAudio.volume = originalVolume
    }, 3000)
  }

  setTimeout(() => {
    specialMessage.style.animation = "bounceOut 0.5s ease-in forwards"
    setTimeout(() => {
      specialMessage.remove()
    }, 500)
  }, 4000)

  showNotification("🎉 ¡Easter Egg activado!", "success", 5000)
}

function createSpecialHeart() {
  const heart = document.createElement("div")
  const hearts = ["💖", "💕", "💝", "🌸", "⭐", "✨", "💫", "🦋"]
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)]
  heart.style.cssText = `
        position: fixed;
        left: ${Math.random() * window.innerWidth}px;
        top: -50px;
        font-size: ${Math.random() * 1 + 1.5}rem;
        pointer-events: none;
        z-index: 9999;
        animation: specialHeartFall ${Math.random() * 2 + 3}s linear forwards;
    `
  document.body.appendChild(heart)

  setTimeout(() => heart.remove(), 5000)
}

// Detectar dispositivos móviles
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

// Optimizaciones para móviles
if (isMobile) {
  // Reducir efectos para mejor rendimiento
  document.addEventListener("DOMContentLoaded", () => {
    const effectsToggle = document.getElementById("effectsToggle")
    if (effectsToggle && !localStorage.getItem("caroPagePreferences")) {
      effectsEnabled = false
      effectsToggle.classList.remove("active")
      effectsToggle.querySelector(".btn-icon").innerHTML = "💫"
    }
  })

  // Optimizar animaciones
  document.documentElement.style.setProperty("--transition-smooth", "0.3s ease")
  document.documentElement.style.setProperty("--transition-bounce", "0.4s ease")
}

// Estilos dinámicos adicionales
const additionalStyles = document.createElement("style")
additionalStyles.textContent = `
    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05);
        }
        70% {
            transform: translate(-50%, -50%) scale(0.9);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes bounceOut {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
        }
    }
    
    @keyframes slideOutNotification {
        to {
            transform: translateY(-100px);
            opacity: 0;
        }
    }
    
    .mobile .nav-container {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .mobile .nav-controls {
        width: 100%;
        justify-content: center;
        margin-top: 1rem;
    }
    
    .main-container {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.8s ease;
    }
    
    .loader {
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
`
document.head.appendChild(additionalStyles)

// Inicialización principal
document.addEventListener("DOMContentLoaded", initializeApp)

// Guardar preferencias al salir
window.addEventListener("beforeunload", saveUserPreferences)

// Manejo de errores global
window.addEventListener("error", (e) => {
  console.error("Error en la aplicación:", e.error)
})

// Service Worker para PWA (opcional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registrado:", registration)
      })
      .catch((registrationError) => {
        console.log("SW falló:", registrationError)
      })
  })
}
