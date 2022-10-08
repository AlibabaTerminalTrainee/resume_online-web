<template>
  <view class="docker">formEditor</view>
</template>

<script>
import formEditor from '../../components/formEditor'
import descriptionPage from '../../components/descriptionPage'
import experience from '../../components/experience'
import theme from '../../components/theme'
export default {
  name: 'Home',
  components: {
    formEditor,
    descriptionPage,
    experience,
    theme
  }
}
</script>

<style lang="scss" scoped>
.docker {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  height: 4.734rpx;
  border-top: 0.604rpx solid $uni-primary;
}
</style>
