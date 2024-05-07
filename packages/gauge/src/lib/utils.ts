import type { Size } from '../index.types'

export const calculatePrimaryStrokeDasharray = (
  strokePercent: number,
  offsetFactor: number,
  gapPercent: number,
  circumference: number
) => {
  const percentToPx = circumference / 100 // px

  if (offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor) {
    // Calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
    const subtract = -strokePercent + 100

    return `${Math.max(strokePercent * percentToPx - subtract * percentToPx, 0)} ${circumference}`
  } else {
    const subtract = gapPercent * 2 * offsetFactor

    return `${Math.max(strokePercent * percentToPx - subtract * percentToPx, 0)} ${circumference}`
  }
}

export const calculateSecondaryStrokeDasharray = (
  strokePercent: number,
  offsetFactorSecondary: number,
  gapPercent: number,
  circumference: number
) => {
  const percentToPx = circumference / 100 // px

  if (offsetFactorSecondary < 1 && strokePercent < gapPercent * 2 * offsetFactorSecondary) {
    // Calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
    const subtract = strokePercent

    return `${Math.max((100 - strokePercent) * percentToPx - subtract * percentToPx, 0)} ${circumference}`
  } else {
    const subtract = gapPercent * 2 * offsetFactorSecondary

    return `${Math.max((100 - strokePercent) * percentToPx - subtract * percentToPx, 0)} ${circumference}`
  }
}

export const calculatePrimaryTransform = (
  strokePercent: number,
  offsetFactor: number,
  gapPercent: number,
  isAscendingVariant: boolean
) => {
  const percentToDegree = 360 / 100 // deg

  if (offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor) {
    // Calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
    const add = 0.5 * (-strokePercent + 100)
    const rotateDegValue = -90 + add * percentToDegree

    return isAscendingVariant ? `rotate(${rotateDegValue}deg)` : `rotate(${-1 * rotateDegValue}deg) scaleX(-1)`
  } else {
    const add = gapPercent * offsetFactor
    const rotateDegValue = -90 + add * percentToDegree

    return isAscendingVariant ? `rotate(${rotateDegValue}deg)` : `rotate(${-1 * rotateDegValue}deg) scaleX(-1)`
  }
}

export const calculateSecondaryTransform = (
  strokePercent: number,
  offsetFactorSecondary: number,
  gapPercent: number,
  isAscendingVariant: boolean
) => {
  const percentToDegree = 360 / 100 // deg

  if (offsetFactorSecondary < 1 && strokePercent < gapPercent * 2 * offsetFactorSecondary) {
    // Calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
    const subtract = 0.5 * strokePercent
    const rotateDegValue = -90 + subtract * percentToDegree

    return isAscendingVariant
      ? `rotate(${rotateDegValue}deg) scaleY(-1)`
      : `rotate(${-1 * rotateDegValue}deg) scaleY(-1) scaleX(-1)`
  } else {
    const subtract = gapPercent * offsetFactorSecondary
    const rotateDegValue = 360 - 90 - subtract * percentToDegree

    return isAscendingVariant
      ? `rotate(${rotateDegValue}deg) scaleY(-1)`
      : `rotate(${-1 * rotateDegValue}deg) scaleY(-1) scaleX(-1)`
  }
}

const checkCustomColorRange = (color: Record<number, string>, strokePercent: number) => {
  const colorKeys = Object.keys(color).sort((a, b) => Number(a) - Number(b))
  let stroke = ''

  for (let i = 0; i < colorKeys.length; i++) {
    const currentKey = Number(colorKeys[i])
    const nextKey = Number(colorKeys[i + 1])

    if (strokePercent >= currentKey && (strokePercent < nextKey || !nextKey)) {
      stroke = color[currentKey]
      break
    }
  }

  return stroke
}

export const calculatePrimaryStroke = (primary: string | Record<number, string>, strokePercent: number) => {
  if (!primary) {
    // Default red --> amber --> blue --> green
    return strokePercent <= 25
      ? 'hsl(358 75% 59%)'
      : strokePercent <= 50
        ? 'hsl(39 100% 57%)'
        : strokePercent <= 75
          ? 'hsl(212 100% 48%)'
          : 'hsl(131 41% 46%)'
  } else if (typeof primary === 'string') {
    // Specific default color or custom color
    return primary
  } else if (typeof primary === 'object') {
    // Custom color range
    return checkCustomColorRange(primary, strokePercent)
  }
}

export const calculateSecondaryStroke = (secondary: string | Record<number, string>, strokePercent: number) => {
  if (!secondary) {
    // Default gray
    return 'hsl(0 0% 92%)'
  } else if (typeof secondary === 'string') {
    // Specific default color or custom color
    return secondary
  } else if (typeof secondary === 'object') {
    // Custom color range
    return checkCustomColorRange(secondary, 100 - strokePercent)
  }
}

export const calculatePrimaryOpacity = (
  offsetFactor: number,
  strokePercent: number,
  gapPercent: number,
  offsetFactorSecondary: number
) => {
  if (
    offsetFactor > 0 &&
    strokePercent < gapPercent * 2 * offsetFactor &&
    strokePercent < gapPercent * 2 * offsetFactorSecondary
  ) {
    return 0
  } else return 1
}

export const calculateSecondaryOpacity = (
  offsetFactor: number,
  strokePercent: number,
  gapPercent: number,
  offsetFactorSecondary: number
) => {
  if (
    (offsetFactor === 0 && strokePercent > 100 - gapPercent * 2) ||
    (offsetFactor > 0 &&
      strokePercent > 100 - gapPercent * 2 * offsetFactor &&
      strokePercent > 100 - gapPercent * 2 * offsetFactorSecondary)
  ) {
    return 0
  } else return 1
}

export const sizeConfig: Record<Size, { size: number }> = {
  xs: {
    size: 32
  },
  sm: {
    size: 48
  },
  md: {
    size: 72
  },
  lg: {
    size: 96
  },
  xl: {
    size: 120
  },
  '2xl': {
    size: 144
  }
}
