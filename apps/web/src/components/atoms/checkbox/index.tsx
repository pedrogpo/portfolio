import * as S from './styles'

import { useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { AnimatePresence, motion } from 'framer-motion'

interface CheckBoxProps {
  label: string
}

export default function CheckBoxInput({ label }: CheckBoxProps) {
  const [checked, setChecked] = useState(false)

  return (
    <S.CheckBoxContainer>
      <S.CheckBoxRoot
        checked={checked}
        onCheckedChange={() => {
          setChecked(!checked)
        }}
      >
        <S.CheckBoxIndicator>
          <AnimatePresence>
            {checked && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.1 }}
              >
                <BiCheck />
              </motion.div>
            )}
          </AnimatePresence>
        </S.CheckBoxIndicator>
      </S.CheckBoxRoot>
      <label>{label}</label>
    </S.CheckBoxContainer>
  )
}
