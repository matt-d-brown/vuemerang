<template>
    <div :class="[prefixCls + '-confirm']" @keydown.tab.capture="handleTab">
        <vm-button :class="timeClasses" type="flat" size="small" :disabled="timeDisabled" v-if="showTime" @click="handleToggleTime">
          {{labels.time}}
        </vm-button>
        <vm-button size="small" type="default" @click.native="handleClear" @keydown.enter.native="handleClear">
          {{labels.clear}}
        </vm-button>
        <vm-button size="small"  @click.native="handleSuccess" @keydown.enter.native="handleSuccess">
          {{labels.ok}}
        </vm-button>
    </div>
</template>
<script>
    import Locale from '../../../mixins/locale';
    import Emitter from '../../../mixins/emitter';

    const prefixCls = 'vm-datepicker';

    export default {
        mixins: [Locale, Emitter],
        props: {
            showTime: false,
            isTime: false,
            timeDisabled: false
        },
        data() {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            timeClasses () {
                return  `${prefixCls}-confirm-time`;
            },
            labels(){
                const labels = ['time', 'clear', 'ok'];
                const values = [(this.isTime ? 'selectDate' : 'selectTime'), 'clear', 'ok'];
                return labels.reduce((obj, key, i) => {
                    obj[key] = this.t('i.datepicker.' + values[i]);
                    return obj;
                }, {});
            }
        },
        methods: {
            handleClear () {
                this.$emit('on-pick-clear');
            },
            handleSuccess () {
                this.$emit('on-pick-success');
            },
            handleToggleTime () {
                if (this.timeDisabled) return;
                this.$emit('on-pick-toggle-time');
                this.dispatch('CalendarPicker', 'focus-input');
            },
            handleTab(e) {
                const tabbables = [...this.$el.children];
                const expectedFocus = tabbables[e.shiftKey ? 'shift' : 'pop']();

                if (document.activeElement === expectedFocus) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.dispatch('CalendarPicker', 'focus-input');
                }
            }
        }
    };
</script>
