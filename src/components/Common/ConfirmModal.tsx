import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { Colors, Common, Fonts, Sizes } from '@/Styles'
import OutlineButton from './OutlineButton'
import ConfirmButton from './ConfirmButton'

import CrossIcon from '@/Assets/Icons/cross.svg'
import { useTranslation } from 'react-i18next'

interface Props {
  title: string
  description?: string
  isVisible: boolean
  closeModal: () => void
  onConfirm: () => void
  confirmButtonText?: string
  cancelButtonText?: string
}

const ConfirmModal: React.FC<Props> = ({
  title,
  isVisible,
  description,
  closeModal,
  onConfirm,
  confirmButtonText,
  cancelButtonText,
}) => {
  const { t } = useTranslation()
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => {
        closeModal()
      }}
      backdropTransitionOutTiming={0}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.text}>{title}</Text>
          <TouchableOpacity
            style={styles.cross}
            onPress={() => {
              closeModal()
            }}>
            <CrossIcon />
          </TouchableOpacity>
        </View>
        {description && <View style={Common.line} />}
        <View>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.buttonRow}>
          <OutlineButton
            fontSize={14}
            containerStyle={styles.clearButton}
            title={cancelButtonText ?? t('Common.cancel')}
            onPress={() => {
              closeModal()
            }}
          />
          <ConfirmButton
            containerStyle={styles.submitButton}
            title={confirmButtonText ?? t('Common.confirm')}
            onPress={() => {
              onConfirm()
            }}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 20,
  },

  headerRow: {
    flexDirection: 'row',
    paddingHorizontal: Sizes.paddingHorizontal,
    alignItems: 'center',
  },
  cross: {
    padding: 10,
    position: 'absolute',
    right: Sizes.paddingHorizontal,
  },
  text: {
    ...Fonts.size16,
    ...Fonts.semiBold,
    color: Colors.theme.blue,
    textAlign: 'center',
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  description: {
    ...Fonts.size14,
    ...Fonts.medium,
    color: Colors.text.font2,
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: Sizes.paddingHorizontal,
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Sizes.paddingHorizontal,
    marginTop: 20,
  },
  clearButton: {
    width: '48%',
  },
  submitButton: {
    width: '48%',
  },
})

export default ConfirmModal
