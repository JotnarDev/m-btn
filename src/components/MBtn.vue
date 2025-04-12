<script setup>
import { computed, useAttrs } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Button' },
  sm: Boolean,
  md: Boolean,
  lg: Boolean,
  color: {
    type: String,
    default: 'primary',
    validator: (v) =>
      [
        'primary',
        'secondary',
        'tertiary',
        'accent',
        'info',
        'success',
        'warning',
        'error',
      ].includes(v),
  },
  outline: Boolean,
  text: Boolean,
  tonal: Boolean,
  elevated: Boolean,
  rounded: Boolean,
  full: Boolean,
  icon: String,
  licon: String,
  ricon: String,
  onlyIcon: Boolean,
  link: String,
  autofocus: Boolean,
  disabled: Boolean,
  form: String,
  formaction: String,
  formenctype: {
    type: String,
    validator: (v) =>
      !v ||
      [
        'application/x-www-form-urlencoded',
        'multipart/form-data',
        'text/plain',
      ].includes(v),
  },
  formmethod: {
    type: String,
    validator: (v) => !v || ['get', 'post'].includes(v),
  },
  formnovalidate: Boolean,
  formtarget: {
    type: String,
    validator: (v) =>
      !v || ['_blank', '_self', '_parent', '_top'].includes(v) || true,
  },
  popovertarget: String,
  popovertargetaction: {
    type: String,
    validator: (v) => !v || ['hide', 'show', 'toggle'].includes(v),
  },
  name: String,
  type: {
    type: String,
    default: 'button',
    validator: (v) => ['button', 'reset', 'submit'].includes(v),
  },
  value: String,
  loading: Boolean,
})

const colorStyles = {
  primary: {
    base: 'btn-primary',
    outline: 'btn-outline-primary',
    text: 'btn-text-primary',
    tonal: 'btn-tonal-primary',
    elevated: 'btn-elevated-primary',
  },
  secondary: {
    base: 'btn-secondary',
    outline: 'btn-outline-secondary',
    text: 'btn-text-secondary',
    tonal: 'btn-tonal-secondary',
    elevated: 'btn-elevated-secondary',
  },
  tertiary: {
    base: 'btn-tertiary',
    outline: 'btn-outline-tertiary',
    text: 'btn-text-tertiary',
    tonal: 'btn-tonal-tertiary',
    elevated: 'btn-elevated-tertiary',
  },
  accent: {
    base: 'btn-accent',
    outline: 'btn-outline-accent',
    text: 'btn-text-accent',
    tonal: 'btn-tonal-accent',
    elevated: 'btn-elevated-accent',
  },
  info: {
    base: 'btn-info',
    outline: 'btn-outline-info',
    text: 'btn-text-info',
    tonal: 'btn-tonal-info',
    elevated: 'btn-elevated-info',
  },
  success: {
    base: 'btn-success',
    outline: 'btn-outline-success',
    text: 'btn-text-success',
    tonal: 'btn-tonal-success',
    elevated: 'btn-elevated-success',
  },
  warning: {
    base: 'btn-warning',
    outline: 'btn-outline-warning',
    text: 'btn-text-warning',
    tonal: 'btn-tonal-warning',
    elevated: 'btn-elevated-warning',
  },
  error: {
    base: 'btn-error',
    outline: 'btn-outline-error',
    text: 'btn-text-error',
    tonal: 'btn-tonal-error',
    elevated: 'btn-elevated-error',
  },
}

const attrs = useAttrs()
const hasCustomClass = computed(() => 'class' in attrs)

const colorVariant = computed(() => {
  if (hasCustomClass.value) return ''
  const styles = colorStyles[props.color] || colorStyles.primary
  if (props.outline) return styles.outline
  if (props.text) return styles.text
  if (props.tonal) return styles.tonal
  if (props.elevated) return styles.elevated
  return styles.base
})

const colorSkeleton = computed(() => {
  if (hasCustomClass.value) return 'btn-skeleton-default'
  const styles = colorStyles[props.color] || colorStyles.primary
  return props.skeleton ? styles.skeleton : styles.base
})

const buttonClasses = computed(() => [
  'btn',
  props.sm ? 'btn-sm' : props.lg ? 'btn-lg' : 'btn-md',
  colorVariant.value,
  props.rounded && 'btn-rounded',
  props.full && 'btn-full',
  props.onlyIcon ? onlyIconSizes.value : 'btn-wicon',
  props.disabled ? 'btn-disabled' : 'btn-abled',
])

const iconSizes = computed(() =>
  props.lg ? 'btn-text-lg' : props.md ? 'btn-text-md' : 'btn-text-sm'
)
const onlyIconSizes = computed(() =>
  props.lg ? 'btn-icon-lg' : props.md ? 'btn-icon-md' : 'btn-icon-sm'
)
const componentTag = computed(() => (props.link ? 'a' : 'button'))
</script>

<template>
  <component :aria-label="onlyIcon ? label : null" :title="onlyIcon ? label : null" :is="componentTag"
    :class="buttonClasses" :href="link" :target="link ? '_self' : null" :type="componentTag === 'button' ? type : null"
    :autofocus="autofocus || null" :disabled="disabled || null" :form="form" :formaction="formaction"
    :formenctype="formenctype" :formmethod="formmethod" :formnovalidate="formnovalidate || null"
    :formtarget="formtarget" :popovertarget="popovertarget" :popovertargetaction="popovertargetaction" :name="name"
    :value="value">
    <font-awesome-icon v-if="licon && !onlyIcon && !loading" :icon="licon" :class="iconSizes" />

    <font-awesome-icon v-if="icon && onlyIcon && !loading" :icon="icon" :class="iconSizes" />

    <span v-if="!onlyIcon && !skeleton && !loading">{{ label }}</span>

    <span v-if="loading" class="btn-loading">
      <font-awesome-icon icon="fas fa-spinner" spin :class="iconSizes" />
      <span v-if="!onlyIcon">{{ label }}</span>
    </span>

    <font-awesome-icon v-if="ricon && !onlyIcon && !loading" :icon="ricon" :class="iconSizes" />
  </component>
</template>

<style scoped>
@import '../styles/buttons.css';
</style>
