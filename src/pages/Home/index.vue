<template>
  <view>
    <formEditor></formEditor>
  </view>
</template>

<script>
import formEditor from '../../components/formEditor'
import description from '../../components/description'
import experience from '../../components/experience'
import theme from '../../components/theme'
export default {
  name: 'Home',
  components: {
    formEditor,
    description,
    experience,
    theme
  }
}
</script>

<style lang="scss" scoped></style>
