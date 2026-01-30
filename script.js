gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

// Animação Scroll
ScrollSmoother.create({
  smooth: 1.5,
  effects: true
})

function afterPreLoader() {
  // Animações Hero
  gsap.from(".hero", {
    opacity: 0,
    duration: 1
  })

  gsap.from("picture:nth-child(2)", {
    y: 200,
    duration: 1
  })

  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1
  })

  // Animações Cards

  gsap.from(".card", {
    opacity: 0,
    filter: "blur(15px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".cards",
      start: "0% 80%",
      end: "100% 70%",
      scrub: true
    }
  })

  // Animações Cidades

  gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".secaoObrigado ul",
      start: "0% 80%",
      end: "100% 50%",
      scrub: true
    }
  })

  // Animações Footer

  gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      end: "100% 100%",
      scrub: true,
      invalidateOnRefresh: true
    }
  })

  // Letras Animadas

  // Selecionar todos os elementos que tem a classe .textoSplit
  const textosSplit = document.querySelectorAll(".textoSplit")

  // Animar individual

  textosSplit.forEach((textoSplit) => {
    const split = SplitText.create(textoSplit, {
      type: "lines, words, chars",
      mask: "lines"
    })

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textoSplit,
      }
    })
  })
}

// Preloader
const tl = gsap.timeline({
  onComplete() {
    afterPreLoader()
    gsap.to("#preLoader", {
      opacity: 0,
      duration: 1,
      display: "none",
    })
  }
})

tl.to("#preLoader path", {
  strokeDashoffset: 0,
  duration: 1
})

tl.to("#preLoader path", {
  fill: "rgb(168, 16, 16)",
  duration: 0.5
})