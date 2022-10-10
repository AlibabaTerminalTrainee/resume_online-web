<template>
  <view>
    <experience></experience>
  </view>
</template>

<script>
import themeContainer from '../../components/themeContainer'
import topBack from '../../components/topBack'
import experience from '../../components/experience'

import theme from '../../components/theme'
import schoolTimePicker from '../../components/schoolTimePicker'
import description from '../../components/description'

import formEditor from '../../components/formEditor'
export default {
  name: 'Home',
  components: {
    formEditor,
    description,
    experience,
    theme,
    schoolTimePicker,
    topBack,
    themeContainer
  }
}
</script>

<style lang="scss" scoped></style>
