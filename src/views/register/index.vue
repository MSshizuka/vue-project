<template>
  <div class="register">
    <div class="iconfont icon-fanhui" @click="backUp"></div>
    <h1 class="register-title">注册</h1>
    <div class="account-grounp">
      <div class="base-filed">
        <input
          type="text"
          class="base-field-core"
          placeholder="昵称"
          v-model="username"
          @focus="focus"
          @blur="blur"
        />
      </div>
      <div class="tips" ref="nameInfo" :class="currentNameIndex !== 0 ? 'hide' : ''">
        <input type="text" class="tips-item username" disabled :value="errorNameMessage" />
      </div>
      <div class="base-filed">
        <input
          type="text"
          class="base-field-core"
          placeholder="邮箱"
          v-model="usermail"
          @focus="focus"
          @blur="blur"
        />
      </div>
      <div class="tips" ref="mailInfo" :class="currentMailIndex !== 0 ? 'hide' : ''">
        <input type="text" class="tips-item usermail" disabled :value="errorMailMessage" />
      </div>
      <div class="base-filed">
        <input
          type="password"
          class="base-field-core"
          placeholder="密码"
          v-model="userpws"
          @focus="focus"
          @blur="blur"
        />
      </div>
      <div class="tips" ref="pwsInfo" :class="currentPwsIndex !== 0 ? 'hide' : ''">
        <input type="text" class="tips-item userpws" disabled value="8~20位 支持数字字母下划线或点" />
      </div>
      <div class="tips" ref="totalInfo" :class="isShow ? '' : 'hide'">
        <input type="text" class="tips-item total-info" disabled value="请完成填写" />
      </div>
    </div>
    <div class="register-button" @click="register">注册</div>
  </div>
</template>

<script>
import crypto from "crypto";
import { registerCheck } from "@/network/register";
import { Toast } from "cube-ui";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      usermail: "",
      userpws: "",
      currentNameIndex: -1,
      currentMailIndex: -1,
      currentPwsIndex: -1,
      errorNameMessage: "",
      errorMailMessage: "",
      isShow: false
    };
  },
  methods: {
    removeClass(ele, attr) {
      ele.className = ele.className.replace(attr, "");
    },
    addClass(ele, attr) {
      ele.className += ` ${attr}`;
    },
    backUp() {
      this.$router.back();
    },
    focus(e) {
      const name = e.target.placeholder;
      if (name === "昵称") {
        this.currentNameIndex = -1;
      } else if (name === "邮箱") {
        this.currentMailIndex = -1;
      } else if (name === "密码") {
        this.currentPwsIndex = -1;
      }
      this.isShow = false;
    },
    async blur(e) {
      const name = e.target.placeholder;
      if (name === "昵称") {
        if (/^[\w\u4E00-\u9FA5]{2,10}$/.test(e.target.value)) {
          let result = await registerCheck({ username: this.username });
          if (result.code === 1) {
            this.errorNameMessage = result.message;
            this.currentNameIndex = 0;
          } else {
            // this.errorMessage = '格式应为2~10位 支持数字字母下划线和汉字';
            this.currentNameIndex = -1;
          }
        } else {
          this.errorNameMessage = "格式应为2~10位 支持数字字母下划线和汉字";
          this.currentNameIndex = 0;
        }
      } else if (name === "邮箱") {
        if (
          /^(\w|-){3,}@(\w|-){2,}(.(\w|-))?(.com|.org|.net|.edu|.cn|.us|.uk)$/.test(
            e.target.value
          )
        ) {
          let result = await registerCheck({ usermail: this.usermail });
          if (result.code === 1) {
            this.errorMailMessage = result.message;
            this.currentMailIndex = 0;
          } else {
            // this.errorMessage = '格式不正确 应为xxx@xx.xxx类似格式';
            this.currentMailIndex = -1;
          }
        } else {
          this.errorMailMessage = "格式不正确 应为xxx@xx.xxx类似格式";
          this.currentMailIndex = 0;
        }
      } else if (name === "密码") {
        if (/^[\w.]{8,20}$/.test(e.target.value)) {
          this.currentPwsIndex = -1;
        } else {
          this.currentPwsIndex = 0;
        }
      }
    },
    async register() {
      console.log(this.username,
        this.usermail ,
        this.userpws ,
        this.currentNameIndex !== 0 ,
        this.currentMailIndex !== 0 ,
        this.currentPwsIndex !== 0 ,
        this.isShow === false);
      
      if (
        this.username &&
        this.usermail &&
        this.userpws &&
        this.currentNameIndex !== 0 &&
        this.currentMailIndex !== 0 &&
        this.currentPwsIndex !== 0 &&
        this.isShow === false
      ) {
        console.log('jinlaile');
        
        let result = await registerCheck({
          username: this.username,
          usermail: this.usermail
        });
        if (result.code === 1) {
          if (result.message.indexOf("邮箱") > -1) {
            this.errorMailMessage = result.message;
            this.currentMailIndex = 0;
          } else {
            this.errorNameMessage = result.message;
            this.currentNameIndex = 0;
          }
          return;
        };
        this.$store
          .dispatch("register/register", {
            username: this.username,
            usermail: this.usermail,
            userpws: crypto
              .createHmac("sha1", "wangbowen")
              .update(this.userpws)
              .digest("hex")
          })
          .then(res => {
            this.toast = Toast.$create({
              txt: "注册成功！",
              type: "txt",
              time: 1000
            });
            this.toast.show();
            this.$router.replace("/");
          })
          .catch(rea => {
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
        margin-top: 30px;
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