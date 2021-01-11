import React, { FunctionComponent } from 'react'
import {
  Text,
  StyleSheet,
  ViewPropTypes,
  TextPropTypes
} from 'react-native'
import PropTypes from 'prop-types';
const CustomText =({children,style,...otherProps} ) => {

  return (
    <Text {...otherProps} style={{...styles.def,...style}}>
      {children}
    </Text>
  )
}
const styles = StyleSheet.create({
  def:{
  fontFamily:'Estedad-Medium',
  }
})
export default CustomText

CustomText.propTypes = {
  // ...prop type definitions
  style: TextPropTypes,
};