/*
 *
 * FormItem
 *
 */

import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'

import { makeDebugger, hasValue } from 'utils'
import Maybe from 'components/Maybe'

import {
  FormItemWrapper,
  FormLable,
  FormInput,
  NodeWrapper,
  Inputer,
  TextAreaer,
} from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:FormItem:index')

const FormContent = ({
  type,
  contentType,
  value,
  onChange,
  onBlur,
  error,
  size,
  placeholder,
  node,
  att,
  disabled,
  dataCy,
}) => {
  switch (type) {
    case 'node':
      return <NodeWrapper>{node}</NodeWrapper>

    case 'textarea':
      return (
        <FormInput>
          <TextAreaer
            value={value}
            error={String(error)}
            placeholder={placeholder}
            autosize={{ minRows: 3, maxRows: 6 }}
            onChange={onChange}
            disabled={disabled}
            data-cy={dataCy}
          />
        </FormInput>
      )

    default:
      return (
        <FormInput>
          <Inputer
            data-cy={dataCy}
            type={contentType}
            size={size}
            error={String(error)}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
          />
          <Maybe test={!R.isEmpty(att)}>{att}</Maybe>
        </FormInput>
      )
  }
}

const FormItem = ({
  type,
  contentType,
  label,
  raw,
  ratKey,
  value,
  onChange,
  onBlur,
  size,
  placeholder,
  node,
  att,
  bottom,
  disabled,
  dataCy,
}) => (
  <FormItemWrapper className="normal-form" bottom={bottom}>
    <Maybe test={!R.isEmpty(label)}>
      <FormLable error={hasValue(raw) && raw === ratKey}>{label}</FormLable>
    </Maybe>

    <FormContent
      type={type}
      contentType={contentType}
      value={value}
      error={hasValue(raw) && raw === ratKey}
      size={size}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      node={node}
      att={att}
      disabled={disabled}
      dataCy={dataCy}
    />
  </FormItemWrapper>
)

FormItem.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  raw: PropTypes.string,
  ratKey: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['input', 'textarea', 'node']),
  contentType: PropTypes.oneOf(['text', 'password']),
  node: PropTypes.node,
  att: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  bottom: PropTypes.string,
  disabled: PropTypes.bool,
  dataCy: PropTypes.string,
}

FormItem.defaultProps = {
  value: '',
  label: '',
  raw: '',
  ratKey: '',
  size: 'default',
  placeholder: '',
  type: 'input',
  contentType: 'text',
  node: <div />,
  att: '',
  onBlur: debug,
  onChange: debug,
  bottom: '25px',
  disabled: false,
  dataCy: 'form-input',
}

export default FormItem
