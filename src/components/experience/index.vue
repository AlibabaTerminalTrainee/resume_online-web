<template>
  <div class="wrapper">
    <topBack title="简历修改" rightText="确认">
      <theme
        :title="item1.title"
        :content="item1.content"
        :company="item1.company"
        :job="item1.job"
        :time="item1.time"
      />
      <theme
        :title="item2.title"
        :content="item2.content"
        :company="item2.company"
        :job="item2.job"
        :time="item2.time"
      />
      <theme
        :title="item3.title"
        :content="item3.content"
        :company="item3.company"
        :job="item3.job"
        :time="item3.time"
      />
      <theme
        :title="item4.title"
        :content="item4.content"
        :company="item4.company"
        :job="item4.job"
        :time="item4.time"
      />
    </topBack>
  </div>
</template>

<script>
import theme from '../theme/index.vue'
import topBack from '../topBack/index.vue'
export default {
  components: {
    theme,
    topBack
  },
  data () {
    return {
      //  教育经历
      item1: {
        title: '教育经历',
        content:
          '缺乏工作经验的学生，能在教育背景中显示自己的专业知识与学习能力',
        company: '某某公司',
        job: '前端开发工程师',
        time: '2022-05-07 - 2022-15-14'
      },
      // 实习经历
      item2: {
        title: '实习经历',
        content:
          '缺乏工作经验的学生，能在教育背景中显示自己的专业知识与学习能力',
        company: '某某公司',
        job: '前端开发工程师',
        time: '2022-05-07'
      },
      // 社团和组织经历
      item3: {
        title: '社团和组织经历',
        content:
          '缺乏工作经验的学生，能在教育背景中显示自己的专业知识与学习能力缺乏工作经验的学生，能在教育背景中显示自己的专业知识与学习能力',
        company: '某某公司',
        job: '前端开发工程师',
        time: '2022-05-07'
      },
      item4: {
        title: '技能/证书及其他',
        content:
          '缺乏工作经验的学生，能在教育背景中显示自己的专业知识与学习能力缺乏工作经验的学生，能在教育背景中显示自己的专业知识与学习能力',
        company: '某某公司',
        job: '前端开发工程师',
        time: '2022-05-07'
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
