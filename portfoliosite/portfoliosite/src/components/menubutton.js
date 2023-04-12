import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from "prop-types"

const MenuButton = ({
    isMobileOpen = false,
    width = 24,
    height = 24,
    strokeWidth = 5,
    transition = null,
    lineProps = null,
    ...props
  }) => {
    const variant = isMobileOpen ? "opened" : "closed";
    const top = {
      closed: {
        rotate: 0,
        translateY: 0
      },
      opened: {
        rotate: 45,
        translateY: 2
      }
    };
    const center = {
      closed: {
        opacity: 1,
      },
      opened: {
        opacity: 0,
      }
    };
    const bottom = {
      closed: {
        rotate: 0,
        translateY: 0
      },
      opened: {
        rotate: -45,
        translateY: -2
      }
    };
    lineProps = {
      strokeWidth: strokeWidth,
      strokeLinecap: 'round',
      vectorEffect: "non-scaling-stroke",
      initial: "closed",
      animate: variant,
      transition,
      ...lineProps
    };
    const unitHeight = 4;
    const unitWidth = (unitHeight * width) / height;

    const color = variant === 'closed'? '#D1D5DB' : '#53225a';
  
    return (
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0"
          y2="0"
          variants={top}
          stroke={color}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={center}
          stroke={color}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="4"
          y2="4"
          variants={bottom}
          stroke={color}
          {...lineProps}
        />
      </motion.svg>
    )
  }
  MenuButton.propTypes = {
    isMobileOpen: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    transition: PropTypes.object,
    lineProps: PropTypes.object,
  }
  
  export default MenuButton
