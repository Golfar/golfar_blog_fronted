import {defineStore} from 'pinia'

export const definedUser = defineStore(
  {
    id: 'userPinia', //必须唯一
    state:()=>{ // state中用于定义数据
      return {
        email: "",
        id: -1,
        phoneNumber: "",
        userAvatar: "",
        userName: "",
        userProfile: "",
        userRole: "user",
        loginStatus: false,
      }
    },
    getters:{// 用于定义一些通过数据计算而得到结果的一些方法 一般在此处不做对数据的修改操作
      getId(){
        return this.id;
      }
    },
    actions:{ // 用于定义一些对数据修改的方法
      setUser(loginUser){
        this.email = loginUser.email
        this.id = loginUser.id
        this.phoneNumber = loginUser.phoneNumber
        this.userAvatar = loginUser.userAvatar
        this.userName = loginUser.userName
        this.userProfile = loginUser.userProfile
        this.userRole = loginUser.userRole
        this.loginStatus = true
      },
      setDefault(){
        this.id = -1
        this.userRole = "user"
        this.loginStatus = false
      }
    }
  }
)
