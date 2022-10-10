<template>
  <uni-row class="home-uni-row">
    <uni-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
      <view class="home-uni-col">
        <button class="test-button" @click="goThemeContainer">
          {{ themeContainer }}
        </button>
        <button class="test-button" @click="goTopBack">
          {{ topBack }}
        </button>
      </view>
    </uni-col>
    <uni-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
      <view class="home-uni-col">
        <button class="test-button" @click="goExperience">
          {{ experience }}
        </button>
        <button class="test-button" @click="goTheme">
          {{ theme }}
        </button>
      </view>
    </uni-col>
    <uni-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
      <view class="home-uni-col">
        <button class="test-button" @click="goSchoolTimePicker">
          {{ schoolTimePicker }}
        </button>
        <button class="test-button" @click="goDescription">
          {{ description }}
        </button>
      </view>
    </uni-col>
    <uni-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
      <view class="home-uni-col">
        <button class="test-button" @click="goFormEditor">
          {{ formEditor }}
        </button>
      </view>
    </uni-col>
  </uni-row>
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
  },
  data () {
    return {
      themeContainer: 'themeContainer Test',
      topBack: 'topBack Test',
      experience: 'experience Test',
      theme: 'theme Test',
      schoolTimePicker: 'schoolTimePicker Test',
      description: 'description Test',
      formEditor: 'topBack Test'
    }
  },
  methods: {
    goThemeContainer () {
      uni.navigateTo({
        url: '/components/themeContainer/index'
      })
    },

    goTopBack () {
      uni.navigateTo({
        url: '/components/topBack/index'
      })
    },

    goExperience () {
      uni.navigateTo({
        url: '/components/experience/index'
      })
    },

    goTheme () {
      uni.navigateTo({
        url: '/components/theme/index'
      })
    },

    goSchoolTimePicker () {
      uni.navigateTo({
        url: '/components/schoolTimePicker/index'
      })
    },

    goDescription () {
      uni.navigateTo({
        url: '/components/description/index'
      })
    },

    goFormEditor () {
      uni.navigateTo({
        url: '/components/formEditor/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-uni-row {
  margin-top: 12.077rpx;
  display: block;
  /* #endif */
}

.uni-row {
  margin-bottom: 6.039rpx;
}
/* #endif */

.home-uni-col {
  height: 21.739rpx;
  border-radius: 2.415rpx;
  padding: 6.039rpx 6.039rpx;
}

.test-button {
  margin-top: 18.116rpx;
  background-color: $uni-primary;
}
</style>
