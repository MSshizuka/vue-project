<template>
  <div class="register">
    <div class="iconfont icon-fanhui" @click="backUp"></div>
    <h1 class="register-title">注册</h1>
    <div class="account-grounp">
      <div class="base-filed">
        <input type="text" class="base-field-core" placeholder="昵称" v-model="username" @focus="focus" @blur="blur"/>
      </div>
      <div class="tips" ref="nameInfo" :class="currentNameIndex !== 0 ? 'hide' : ''">
        <input type="text" class="tips-item username" disabled value="格式应为2~10位 支持数字字母下划线和汉字" />
      </div>
      <div class="base-filed">
        <input type="text" class="base-field-core" placeholder="邮箱" v-model="usermail" @focus="focus" @blur="blur" />
      </div>
      <div class="tips" ref="mailInfo" :class="currentMailIndex !== 0 ? 'hide' : ''">
        <input type="text" class="tips-item usermail" disabled value="格式不正确 应类似xxx@xx.xxx" />
      </div>
      <div class="base-filed">
        <input type="password" class="base-field-core" placeholder="密码" v-model="userpws" @focus="focus" @blur="blur"/>
      </div>
      <div class="tips hide" ref="pwsInfo">
        <input type="text" class="tips-item userpws" disabled value="密码应在6~20位之间 至少包含2种不同格式" />
      </div>
      <div class="tips" ref="totalInfo" :class="isShow ? '' : 'hide'">
        <input type="text" class="tips-item total-info" disabled value="请完成填写" />
      </div>
    </div>
    <div class="register-button" @click="register">注册</div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      usermail: "",
      userpws: "",
      currentNameIndex: -1,
      currentMailIndex: -1,
      isShow: false
    };
  },
  methods: {
    removeClass(ele, attr) {
      ele.className = ele.className.replace(attr, '');
    },
    addClass(ele, attr) {
      ele.className += ` ${attr}`;
    },
    backUp() {
      this.$router.back();
    },
    focus(e) {
      const name = e.target.placeholder;
      if (name === '昵称') {
        this.currentNameIndex = -1;
      } else if (name === '邮箱') {
        this.currentMailIndex = -1;
      }
    },
    blur(e) {
      const name = e.target.placeholder;
      if (name === '昵称') {
        console.log(e.target.value);
        if (/^[\w\u4E00-\u9FA5]{2,10}$/.test(e.target.value)) {
          this.currentNameIndex = -1;
        } else {
          this.currentNameIndex = 0;
        }
      } else if (name === '邮箱') {
        if (/^\w+@\w+(.\w+)+$/.test(e.target.value)){
          this.currentMailIndex = -1;
        } else {
          this.currentMailIndex = 0;
        }
      } else if (name === '密码') {
        
      }
      
    },
    register() {
      if (this.username && this.usermail && this.userpws) {
        this.$store.dispatch("register/register", 
        {
          username: this.username,
          usermail: this.usermail,
          userpws: this.userpws
        }).then(res => {
          this.$router.replace("/profile");
        }).catch(rea => {
          throw new Error("50line:", rea);
        });
      } else {
        this.isShow = true;
      }
    }
  }
};
</script>

<style lang="stylus">
.register {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 500;
  margin: 0 auto;
  padding-bottom: 1rem;
  text-align: center;

  .icon-fanhui {
    position: absolute;
    top: 18px;
    left: 18px;
    font-size: 22px;
    color: #555;
  }

  .register-title {
    margin: 90px 0 65px;
    font-size: 28px;
    font-weight: 500;
    color: #444;
    letter-spacing: 0.02rem;
  }

  .account-grounp {
    width: 70%;
    margin: 55px auto 30px;

    .base-filed {
      width: 100%;
      color: #333;
      font-size: 20px;
      padding: 10px 0;
      margin: 15px 0;
      border-bottom: 1px solid #ddd;

      .base-field-core {
        width: 100%;
        padding: 0 8px;
        outline: none;
      }

      span {
        position: absolute;
        font-size: 14px;
        right: 30px;
        top: 165px;
      }
    }

    .tips {
      .tips-item {
        background-color: #fff;
        width: 100%;
        font-size: 12px;
        color: red;
        margin-left: 8px;
      }
      .total-info {
        margin-top 30px
      }
    }

    .show {
      visibility: visible;
    }

    .hide {
      visibility: hidden;
    }
  }

  .register-button {
    font-size: 20px;
    background-color: #ff5777;
    margin: 0 40px;
    padding: 10px 0;
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
  }
}
</style>