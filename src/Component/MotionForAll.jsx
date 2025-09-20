import React from 'react'
import { motion } from 'motion/react'


const MotionForAll = ({ children, delay = 0.5 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}       // neeche + transparent start
    whileInView={{ opacity: 1, y: 0 }}    // screen par aate hi fade-in + up
    viewport={{ once: false, amount: 0.2 }} // once = sirf ek bar chalega, amount=kitna visible hona chahiye
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
  )


export default MotionForAll



