<template lang="pug">
.editr(tabindex="0")
  .editr--toolbar
    Btn(v-for="(module,i) in modules",
      :module="module",
      :options="mergedOptions",
      :key="module.title + i",
      :ref="'btn-'+module.title",
      :title="module.description || ''")
  .editr--content(ref="content", contenteditable="true", tabindex="1", :placeholder="placeholder")
</template>

<script>
import bus from './bus.js';
import debounce from "debounce";
import Btn from "./Button.vue";
import bold from "./modules/bold.js";
import italic from "./modules/italic.js";
import underline from "./modules/underline.js";
import alignLeft from "./modules/alignLeft.js"
import alignCenter from "./modules/alignCenter.js"
import alignRight from "./modules/alignRight.js"
// import headings from "./modules/headings.vue";
// import hyperlink from "./modules/hyperlink.vue";
import code from "./modules/code.js";
import list_ordered from "./modules/list_ordered.js";
// import list_unordered from "./modules/list_unordered.js";
// import image from "./modules/image.vue";
// import table from "./modules/table.vue";
import removeFormat from "./modules/removeFormat.js";
import separator from "./modules/separator.js";
const modules = [
  bold, italic, underline, separator,
  alignLeft, alignCenter, alignRight, separator, code,
  list_ordered, separator,
  removeFormat
];
export default {
  name: "VmTextEditor",
  components: { Btn },
  model: {
    prop: "html",
    event: "html"
  },
  props: {
    html: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Enter text..."
    },
    options: Object
  },
  data () {
    return {
      selection: ""
    }
  },
  computed: {
    mergedOptions () {
      return { ...bus.options, ...this.options}
    },
    modules () {
      const customIcons = this.mergedOptions.iconOverrides;
      return modules
      .filter(
        m => this.mergedOptions.hideModules === undefined
        || !this.mergedOptions.hideModules[m.title]
      )
      .map(mod => {
        if (customIcons !== undefined && customIcons[mod.title] !== undefined) {
          mod.icon = customIcons[mod.title];
        }
        return mod;
      })
      .concat(this.mergedOptions.customModules);
    },
    btnsWithDashboards () {
      if (this.modules)
        return this.modules.filter(m => m.render);
      return [];
    },
    innerHTML: {
      get () {
        return this.$refs.content.innerHTML;
      },
      set (html) {
        if (this.$refs.content.innerHTML !== html) {
          this.$refs.content.innerHTML = html;
        }
      }
    }
  },
  beforeDestroy () {
    this.unwatch();
    document.removeEventListener("click", this.onDocumentClick);
    this.$refs.content.removeEventListener("blur", this.onContentBlur);
    this.$refs.content.removeEventListener("input", this.onInput);
    this.$refs.content.removeEventListener("focus", this.onFocus);
  },
  mounted () {
    this.unwatch = this.$watch("html", this.syncHTML, { immediate: true});
    document.addEventListener("click", this.onDocumentClick);
    this.$refs.content.addEventListener("focus", this.onFocus);
    this.$refs.content.addEventListener("input", this.onInput);
    this.$refs.content.addEventListener("blur", this.onContentBlur, { capture: true });
    if (this.mergedOptions.forcePlainTextOnPaste === true) {
      this.$refs.content.addEventListener("paste", this.onPaste);
    }

    this.$refs.content.style.maxHeight = this.mergedOptions.maxHeight;
  },
  methods: {
    saveSelection() {
      if (window.getSelection !== undefined) {
        this.selection = window.getSelection();
        if (this.selection.getRangeAt && this.selection.rangeCount) {
          return this.selection.getRangeAt(0);
        }
      } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
      }
      return null;
    },
    restoreSelection(range) {
      if (range) {
        if (window.getSelection !== undefined) {
          this.selection = window.getSelection();
          this.selection.removeAllRanges();
          this.selection.addRange(range);
        }
        else if (document.selection && range.select)
          range.select();
      }
    },
    clearSelection() {
      this.selection = null;
      const selection = window.getSelection();
      if (selection) {
        if (selection.empty !== undefined) {
          selection.empty();
        }
        if (selection.removeAllRanges !== undefined) {
          selection.removeAllRanges();
        }
      }
    },
    exec (cmd, arg, sel){
      sel !== false && this.selection && this.restoreSelection(this.selection);
      document.execCommand(cmd, false, arg||"");
      this.clearSelection();
      this.$nextTick(this.emit);
    },
    onDocumentClick (e) {
      for (let i = 0; i < this.btnsWithDashboards.length; i++) {
        const btn = this.$refs[`btn-${this.btnsWithDashboards[i].title}`][0];
        if (btn && btn.showDashboard && !btn.$el.contains(e.target))
          btn.closeDashboard();
      }
    },
    emit () {
      this.$emit("html", this.$refs.content.innerHTML);
      this.$emit("change", this.$refs.content.innerHTML);
    },
    onInput: debounce(function() {
      this.emit();
    }, 300),
    onFocus () {
      document.execCommand("defaultParagraphSeparator", false, this.mergedOptions.paragraphSeparator)
    },
    onContentBlur () {
      // save focus to restore it later
      this.selection = this.saveSelection();
    },
    onPaste(e) {
      e.preventDefault();
       // get a plain representation of the clipboard
      var text = e.clipboardData.getData("text/plain");
      // insert that plain text text manually
      document.execCommand("insertHTML", false, text);
    },
    syncHTML () {
      if (this.html !== this.$refs.content.innerHTML)
        this.innerHTML = this.html;
    }
  }
}
</script>
