// TODO: should be comingfrom ?? y?
export const comingFromTop = (delay?: number) => {
  return {
    viewport: { once: true },
    initial: { opacity: 0, y: -50 },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    transition: {
      type: 'spring',
      stiffness: 100,
      delay,
    },
  }
}

interface SideProps {
  offset: number
  delay: number
}

export function comingFromSide({ delay = 0, offset = -50 }: SideProps) {
  return {
    viewport: { once: true },
    initial: { opacity: 0, x: offset },
    whileInView: {
      opacity: 1,
      x: 0,
    },
    transition: {
      type: 'spring',
      stiffness: 100,
      delay,
    },
  }
}
