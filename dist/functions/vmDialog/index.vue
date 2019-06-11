<template lang="html">
  <transition name="dialog-t">
    <div
      v-if="active || vmActive"
      ref="con"
      :class="[`vm-dialog-${isPrompt?vmColor:color}`, !isPrompt?'vm-alert':'']"
      class="vm-component con-vm-dialog">
      <div
        class="vm-dialog-dark"
        @click="close($event,true)"/>
      <div
        ref="dialogx"
        :class="vmSize"
        class="vm-dialog">

        <!-- //header -->
        <header :style="styleHeader">
          <div class="con-title-after">
            <h4>{{ title || vmTitle }}</h4>
          </div>
          <vm-button
            v-if="type=='alert'"
            :color="vmCloseColor"
            :icon-pack="vmIconPack"
            :icon="vmCloseIcon"
            radius
            type="flat"
            class="vm-dialog-cancel vm-dialog-cancel--icon notranslate"
            @click.native="cancelClose">
          </vm-button>
        </header>

        <!-- // slots  -->
        <div class="vm-dialog-text">
          <slot/>
          {{ text }}
        </div>
        <!-- footer buttons -->
        <footer v-if="vmButtonsHidden?false:isPrompt||type=='confirm'">
          <vm-button
            :disabled="vmIsValid=='none'?false:!vmIsValid"
            :color="isPrompt?vmColor:color"
            :type="isPrompt?vmButtonAccept:buttonAccept"
            @click="acceptDialog">
            {{ isPrompt?vmAcceptText:acceptText }}
          </vm-button>
          <vm-button
            :color="isPrompt?vmColor:color"
            :type="isPrompt?vmButtonCancel:buttonCancel"
            @click="cancelClose">
            {{ isPrompt?vmCancelText:cancelText }}
          </vm-button>
        </footer>

        <footer v-if="type=='alert'&&!isPrompt" >
          <vm-button
            :color="isPrompt?vmColor:color"
            :type="buttonAccept"
            @click="acceptDialog">
            {{ isPrompt?vmAcceptText:acceptText }}
          </vm-button>
        </footer>

        <footer v-if="vmButtonsHidden?isPrompt&&vmAction:false">
          <vm-button
            :color="isPrompt?vmColor:color"
            :type="isPrompt?vmButtonAction:buttonAction"
            @click="actionDialog">
            {{ isPrompt?vmActionText:actionText }}
          </vm-button>
          <vm-button
            :disabled="vmIsValid=='none'?false:!vmIsValid"
            :color="isPrompt?vmColor:color"
            :type="isPrompt?vmButtonAccept:buttonAccept"
            @click="acceptDialog">
            {{ isPrompt?vmAcceptText:acceptText }}
          </vm-button>
          <vm-button
            :color="isPrompt?vmColor:color"
            :type="isPrompt?vmButtonCancel:buttonCancel"
            @click="cancelClose">
            {{ isPrompt?vmCancelText:cancelText }}
          </vm-button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import _color from '../../utils/color.js'
import vmButton from '../../components/vmButton/vmButton.vue'
export default {
  name:'VmPrompt',
  components: {
    vmButton
  },
  props:{
    vmColor:{
      default:'primary',
      type:String
    },
    vmActive:{
      default:false,
      type: Boolean
    },
    vmAction:{
      default:false,
      type: Boolean
    },
    vmTitle:{
      default:'Dialog',
      type:String
    },
    vmButtonAccept:{
      default:'filled',
      type:String,
    },
    vmButtonCancel:{
      default:'default',
      type:String,
    },
    vmButtonAction:{
      default:'default',
      type:String,
    },
    vmIsValid:{
      default:'none',
      type:[Boolean,String]
    },
    vmButtonsHidden:{
      default:false,
      type:Boolean
    },
    vmAcceptText:{
      default:'Accept',
      type:String
    },
    vmCancelText:{
      default:'Cancel',
      type:String
    },
    vmActionText:{
      default:'Action',
      type:String
    },
    vmIconPack:{
      default:'eva',
      type:String
    },
    vmCloseIcon:{
      default:'close',
      type:String
    },
    vmCloseColor:{
      default: 'gray',
      type:String
    },
    vmSize:{
      default:'small',
      type:String
    }
  },
  data:()=>({
    isPrompt:true,
    active:false,
    type:'alert',
    color:'primary',
    text:null,
    title:null,
    buttonAccept:'filled',
    buttonCancel:'default',
    buttonAction:'default',
    acceptText:'Accept',
    cancelText:'Cancel',
    actionText:'Action',
    closeIcon:'close',
  }),
  computed:{
    styleHeader(){
      return {
        color: _color.getColor(this.color,1),
      }
    }
  },
  watch:{
    vmActive() {
      this.$nextTick(() => {
        if (this.vmActive) {
          this.insertBody()
        }
      })
    }
  },
  mounted () {
    if (this.active && this.isPrompt) {
      this.insertBody()
    }
    document.addEventListener("keyup", this.escape)
  },
  beforeDestroy() {
    document.removeEventListener("keyup", this.escape)
  },
  methods:{
    giveColor(color){
      return _color.rColor(color)
    },
    acceptDialog(){
      if(!this.isPrompt){
        this.accept?this.accept():null
        this.active = false
        this.$emit('update:vmActive',false)
        this.$emit('vm-accept')
      } else {
        if (this.vmIsValid || this.vmIsValid == 'none') {
          this.accept?this.accept():null
          this.active = false
          this.$emit('update:vmActive',false)
          this.$emit('vm-accept')
        } else {
          this.rebound()
        }
      }
    },
    rebound(){
      this.$refs.dialogx.classList.add('locked')
      setTimeout( () => {
        this.$refs.dialogx.classList.remove('locked')
      }, 200);
    },
    close(event,con){
      if(con){
        if(event.target.className.indexOf('vm-dialog-dark')!=-1 && this.type == 'alert'){
          this.active = false
          this.$emit('update:vmActive',false)
        } else if (event.target.className.indexOf('vm-dialog-dark')!=-1) {
          this.rebound()
        }
      } else {
        if(event?event.target.className.indexOf('vm-dialog-cancel')!=-1:event?event.target.className.indexOf('vm-dialog-cancel--icon')!=-1:false ){
          this.active = false
          this.$emit('update:vmActive',false)
        }
      }
      this.$emit('vm-close')
    },
    cancelClose(){
      this.active = false
      this.$emit('update:vmActive',false)
      this.$emit('vm-cancel')
      this.cancel?this.cancel():null
    },
    actionDialog(){
      this.action?this.action():null
      this.active = false
      this.$emit('update:vmActive',false)
      this.$emit('vm-action')
    },
    insertBody(){
      let elx = this.$refs.con
      document.body.insertBefore(elx, document.body.firstChild)
    },
    escape(e){
      if (e.keyCode === 27) this.cancelClose()
    }
  }
}
</script>
