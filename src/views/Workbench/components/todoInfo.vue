<template>
  <div>
    <el-card>
      <span class="header-msg">待办信息</span>
      <div class="fcc">
        <!-- 一 -->
        <div class="all f1" v-for="(item, index) in todoInofList" :key="index">
          <div class="first-box fsc">
            <div :class="`icon-msg ${onBgc(item.name)}`">
              <i :class="`iconfont ${onIcon(item.name)}`"></i>
            </div>
            <span>{{ item.name }}</span>
          </div>
          <div class="note-bottom">
            <span class="add">新增</span>
            <span class="number">{{ item.value1 }}</span>
            <span class="add">待审核</span>
            <span class="number number1">{{ item.value2 }}</span>
          </div>
        </div>
        <!-- 二 -->
        <!-- <div class="all f1">
          <div class="first-box fsc">
            <div class="icon-msg second">
              <i class="iconfont icon-a-zu2"></i>
            </div>
            <span>出库单</span>
          </div>
          <div class="note-bottom">
            <span class="add">新增</span>
            <span class="number">1</span>
            <span class="add">待审核</span>
            <span class="number number2">1</span>
          </div>
        </div> -->
        <!-- 三 -->
        <!-- <div class="all f1">
          <div class="first-box fsc">
            <div class="icon-msg thrid">
              <i class="iconfont icon-pandiandan"></i>
            </div>
            <span>盘点单</span>
          </div>
          <div class="note-bottom">
            <span class="add">新增</span>
            <span class="number">0</span>
            <span class="add">待审核</span>
            <span class="number number3">0</span>
          </div>
        </div> -->
      </div>
    </el-card>
  </div>
</template>

<script>
import { getTodoInfo } from "@/api/home";
export default {
  data() {
    return {
      // 代办信息参数
      data: "",
      todoInofList: [],
      todoColor: [],
    };
  },
  created() {
    this.onTodoInfo();
  },
  methods: {
    async onTodoInfo() {
      const { data } = await getTodoInfo();
      console.log(data, "99999999999999");
      this.todoInofList = data.data;
    },
    onBgc(name) {
      switch (name) {
        case "入库单":
          return "first";
        case "出库单":
          return "second";
        case "盘点单":
          return "thrid";
        default:
          break;
      }
    },
    onIcon(name) {
      switch (name) {
        case "入库单":
          return "icon-a-zu1";
        case "出库单":
          return "icon-a-zu2";
        case "盘点单":
          return "icon-pandiandan";
        default:
          break;
      }
    },
  },
};
</script>

<style scoped lang="less">
.header-msg {
  font-size: 16px;
  font-weight: 700;
}
.all {
  margin: 10px;
  font-size: 16px;
  background-color: #fbf7f7;
  padding: 20px;
  border-radius: 8px;
}
.all:hover {
  background: hsla(0, 0%, 100%, 0.8);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 6%);
  border-radius: 8px;
  border: 1px solid #f5efee;
}
.icon-msg {
  width: 49px;
  height: 49px;
  border-radius: 12px;
  margin-right: 20px;
  text-align: center;
  line-height: 49px;
  i {
    font-size: 28px;
    color: #f8f5f5;
  }
}
.first {
  background-color: rgb(0, 118, 255);
}
.second {
  background-color: rgb(255, 178, 0);
}
.thrid {
  background-color: rgb(255, 113, 0);
}
.note-bottom {
  margin-top: 40px;
  .add {
    margin-right: 10px;
    font-size: 16px;
    color: #887e7e;
    vertical-align: super;
  }
  .number {
    margin-right: 20px;
    font-size: 36px;
    color: #332929;
  }
  .number1 {
    color: rgb(0, 118, 255);
  }
  .number2 {
    color: rgb(255, 178, 0);
  }
  .number3 {
    color: rgb(255, 113, 0);
  }
}
</style>
