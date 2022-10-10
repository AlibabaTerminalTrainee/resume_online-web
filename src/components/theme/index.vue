<template>
  <!-- 主题详情组件 -->

  <view class="theme">
    <form @submit="formSubmit" @reset="formReset" class="uni-form">
      <!-- 学校 -->
      <uni-section title="学校" type="line" padding>
        <uni-easyinput
          class="uni-mt-5"
          trim="all"
          v-model="school"
          placeholder="请输入学校名"
          @input="input"
        ></uni-easyinput>
      </uni-section>
      <!-- 学历 -->
      <uni-section title="学历" type="line">
        <view class="uni-form-item uni-column">
          <view
            ><uni-data-select
              class="uni-mt-5"
              v-model="value"
              :localdata="range"
              @change="change"
            ></uni-data-select
          ></view>
        </view>
      </uni-section>
      <!-- 学院 -->
      <uni-section title="学院" type="line" padding>
        <text class="uni-subtitle"></text>
        <uni-easyinput
          class="uni-mt-5"
          trim="all"
          v-model="college"
          placeholder="请输入学院名"
          @input="input"
        ></uni-easyinput>
      </uni-section>
      <!-- 专业 -->
      <uni-section title="专业" type="line" padding>
        <uni-easyinput
          class="uni-mt-5"
          trim="all"
          v-model="marjor"
          placeholder="请输入专业名"
          @input="input"
        ></uni-easyinput>
      </uni-section>
      <!-- 城市 -->
      <uni-section title="城市" type="line" padding>
        <uni-easyinput
          class="uni-mt-5"
          trim="all"
          v-model="city"
          placeholder="请输入城市名"
          @input="input"
        ></uni-easyinput>
      </uni-section>
      <!-- 提交，保存 -->
      <view class="buttons"
        ><button type="primary" @click="save(valiForm)">保存</button>
        <button type="primary" @click="submit(valiForm)">提交</button></view
      >
    </form>
  </view>
</template>
<script>
export default {
  data () {
    return {
      school: '',
      college: '',
      marjor: '',
      city: '',
      value: 0,
      range: [
        { value: 0, text: '本科' },
        { value: 1, text: '硕士' },
        { value: 2, text: '博士' }
      ]
    }
  },
  methods: {
    save (valiForm) {
      // 保存数据
    },
    submit (valiForm) {
      // 提交数据
    },
    input (e) {
      console.log('输入内容：', e)
    },
    change (e) {
      this.value = e.detail.value
      console.log('e:', e)
    }
  }
}
</script>

<style lang="scss">
.uni-mt-5 {
  margin-top: 15rpx;
  margin-bottom: 15rpx;
}
.buttons {
  display: flex;
}
button {
  margin: 0 20rpx;
  flex: 1;
}
.theme {
  margin: 15rpx;
}
</style>
