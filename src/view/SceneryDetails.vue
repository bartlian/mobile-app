<template>
  <div>
    <div class="overview">
      <div class="back-box">
        <span class="iconfont icon-back" @click="goBack"></span>
      </div>
      <img src="@/mock/imgs/tower.jpg"/>
      <div class="upload" @click="chooseFile">
        <input type="file" v-show="false" accept="image/*"  ref="file" @change="handleFile">
        <span class="iconfont icon-camera"></span>
        <span>上传图片</span>
      </div>
      <div class="more" @click="nav2Album">
        更多
        <span class="iconfont icon-right-arrow"></span>
      </div>
    </div>
    <div class="content">
      <h3 class="title">大雁塔</h3>
      <p>地址：陕西省西安市雁塔区的大慈恩寺</p>
      <div class="details">大雁塔，位于陕西省西安市雁塔区的大慈恩寺内，是一座7层方形佛塔。该塔是西安市内著名古迹及标志性建筑，同时也是西安市市徽当中的主要组成部分。该塔始建于唐朝永徽三年（652年），起初是玄奘为保存佛经而建造的塔，后曾因年久失修和战乱而多次遭到损毁，至五代后唐年间才成为现在的造型。清朝康熙年间时大雁塔开始出现倾斜，直至1996年时倾斜程度甚至达到1米左右，此后经过保护才有所恢复。中华人民共和国成立后，大雁塔得到了专门保护。1963年，大雁塔被列为全国重点文物保护单位，2013年时作为“丝绸之路：长安-天山廊道的路网”的组成部分被列入世界文化遗产中。</div>
    </div>
    <Dialog :showDialog="isShowDialog" content="上传成功，待审核" confirmTxt="知道了" @confirm="handleConfirm" />
  </div>
</template>

<script>
  import mixin from '@/mixin/index';
  import Dialog from '@/components/Dialog';

  export default {
    mixins: [mixin],
    components: {
      Dialog,
    },
    data() {
      return {
        // 最大2M
        MAX_FILE_SIZE: 2 * 1024 ** 2,
        file: null,
        isShowDialog: false,
      }
    },
    methods: {
      nav2Album() {
        this.$router.push('/scenery/sceneryAlbum');
      },
      chooseFile() {
        const fileInput = this.$refs.file;
        // 触发选择图片
        fileInput.click();
      },
      handleFile(e) {
        console.log(e);
        const file = e.target.files[0];

        if (!file) return;

        const { size } = file;

        if (size > this.MAX_FILE_SIZE) {
          this.$toast('图片不能超过2M');
          return;
        }

        this.file = file;
        // 上传
        this.upload();
      },
      upload() {
        this.isShowDialog = true;
      },
      handleConfirm() {
        this.isShowDialog = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .overview {
    width: 100%;
    height: px2vw(220);
    position: relative;
    .back-box {
      width: px2vw(30);
      height: px2vw(30);
      border-radius: 50%;
      text-align: center;
      line-height: px2vw(30);
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      left: px2vw(10);
      top: px2vw(5);
      font-size: px2vw(20);
      color: #fff;
    }


    img {
      width: 100%;
      height: px2vw(220);
    }

    .upload {
      position: absolute;
      left: px2vw(10);
      bottom: 0;
      font-size: px2vw(14);
      color: #fff;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: px2vw(20);
        margin-right: 2px;
      }
    }

    .more {
      position: absolute;
      right: px2vw(10);
      bottom: 3px;
      font-size: px2vw(14);
      color: #fff;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: px2vw(14);
        margin-left: 2px;
      }
    }
  }

  .content {
    padding: px2vw(10);
  }
  
  .title {
    color: #000;
  }

  p {
    color: #666;
  }

  .details {
    margin-top: px2vw(10);
    color: #666;
    word-break: break-all;
    word-wrap: break-word;
  }
</style>