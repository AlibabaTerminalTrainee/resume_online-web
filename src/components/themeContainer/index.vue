<template>
  <view class="wrapper1">
    <uni-card>
      <template v-slot:title>
        <uni-section :title="title">
          <template v-slot:right>
            <uni-icons type="plus-filled" size="30"></uni-icons>
          </template>
        </uni-section>
      </template>
      <uni-list :border="false">
        <uni-list-item :title="company" :border="false" />
        <uni-list-item :title="job" showArrow :border="false" />
        <uni-list-item :title="time" :border="false" />
        <text class="uni-body">{{ content }}</text>
      </uni-list>
    </uni-card>
  </view>
</template>

<script>
export default {
  props: {
    content: {
      type: String
    },
    title: {
      type: String
    },
    // 公司
    company: {
      type: String
    },
    time: {
      type: String
    },
    job: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.wrapper1 >>> .uni-list-item__container {
  padding: 4px 0px;
}
.wrapper1 >>> .uni-card__content {
  padding-top: 0px !important;
}

.wrapper1 >>> .uni-section .uni-section-header {
  padding-bottom: 0px;
}
</style>
