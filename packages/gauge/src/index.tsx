import React, { useEffect, useState, type CSSProperties, type SVGProps } from 'react'

import {
  calculatePrimaryOpacity,
  calculatePrimaryStroke,
  calculatePrimaryStrokeDasharray,
  calculatePrimaryTransform,
  calculateSecondaryOpacity,
  calculateSecondaryStroke,
  calculateSecondaryStrokeDasharray,
  calculateSecondaryTransform,
  sizeConfig
} from './lib/utils'
import type { GaugeProps, Size } from './index.types'

/**
 * Renders a circular gauge using SVG. Allows configuration of colors, stroke, and animations.
 * @param value - Current value of the gauge, expressed as a percentage.
 * @param size = Width and height of the gauge. Defaults to 'md'.
 * @param gapPercent -  Percentage of the total circumference that represents a gap in the gauge. Defaults to 5%.
 * @param strokeWidth - Stroke width of the gauge. Defaults to 10px.
 * @param variant - Direction of the gauge's animation. Defaults to 'ascending'.
 * @param showValue - Option to display the numeric value inside the gauge. Defaults to false.
 * @param showAnimation - Option to animate the gauge's progress. Defaults to false.
 * @param primary - Primary color or set of colors for the gauge, with optional threshold values to determine color changes.
 * @param secondary - Secondary color or set of colors for the gauge, similar to `primary`.
 * @param props Configuration and properties for the svg.
 */
export function Gauge({
  value,
  size = 'md',
  gapPercent = 5,
  strokeWidth = 10,
  variant = 'ascending',
  showValue = false,
  showAnimation = false,
  primary,
  secondary,
  ...props
}: GaugeProps) {
  const isAscendingVariant = variant === 'ascending'

  const [animatedValue, setAnimatedValue] = useState(
    showAnimation ? (isAscendingVariant ? 0 : 100) : value // Start value for animation
  )

  useEffect(() => {
    if (showAnimation) setAnimatedValue(value)
  }, [showAnimation, value])

  const strokePercent = showAnimation ? animatedValue : value // %

  const circleSize = 100 // px
  const radius = circleSize / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const isEqual = strokePercent > circleSize / 2 - 1 && strokePercent < circleSize / 2 + 1 // between 49 and 51
  const offsetFactor = isEqual ? 0.5 : 0
  const offsetFactorSecondary = 1 - offsetFactor

  // Stroke dasharrays
  const primaryStrokeDasharray = calculatePrimaryStrokeDasharray(strokePercent, offsetFactor, gapPercent, circumference)
  const secondaryStrokeDasharray = calculateSecondaryStrokeDasharray(
    strokePercent,
    offsetFactorSecondary,
    gapPercent,
    circumference
  )

  // Transforms
  const primaryTransform = calculatePrimaryTransform(strokePercent, offsetFactor, gapPercent, isAscendingVariant)
  const secondaryTransform = calculateSecondaryTransform(
    strokePercent,
    offsetFactorSecondary,
    gapPercent,
    isAscendingVariant
  )

  // Stroke colors
  const primaryStroke = calculatePrimaryStroke(primary, strokePercent)
  const secondaryStroke = calculateSecondaryStroke(secondary, strokePercent)

  // Opacities
  const primaryOpacity = calculatePrimaryOpacity(offsetFactor, strokePercent, gapPercent, offsetFactorSecondary)
  const secondaryOpacity = calculateSecondaryOpacity(offsetFactor, strokePercent, gapPercent, offsetFactorSecondary)

  const circleStyles: CSSProperties = {
    ...(showAnimation
      ? {
          transitionProperty: 'stroke-dasharray, transform, stroke, opacity',
          transitionDuration: '1000ms',
          transitionTimingFunction: `cubic-bezier(0.785, 0.135, 0.15, 0.86)`,
          transitionDelay: '0ms'
        }
      : {}),
    transformOrigin: '50% 50%'
  }

  const circleProps: SVGProps<SVGCircleElement> = {
    cx: circleSize / 2,
    cy: circleSize / 2,
    r: radius,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeDashoffset: 0,
    strokeWidth,
    shapeRendering: 'geometricPrecision'
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${circleSize} ${circleSize}`}
      width={sizeConfig[size]?.size || size}
      height={sizeConfig[size]?.size || size}
      fill="none"
      shapeRendering="crispEdges"
      style={{ userSelect: 'none' }}
      {...props}
    >
      {/*secondary*/}
      <circle
        {...circleProps}
        style={{
          ...circleStyles,
          strokeDasharray: secondaryStrokeDasharray,
          transform: secondaryTransform,
          stroke: secondaryStroke,
          opacity: secondaryOpacity
        }}
      />

      {/* primary */}
      <circle
        {...circleProps}
        style={{
          ...circleStyles,
          strokeDasharray: primaryStrokeDasharray,
          transform: primaryTransform,
          stroke: primaryStroke,
          opacity: primaryOpacity
        }}
      />
      {showValue && (
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          alignmentBaseline="central"
          fill="currentColor"
          fontSize={32}
        >
          {Math.round(value)}
        </text>
      )}
    </svg>
  )
}
