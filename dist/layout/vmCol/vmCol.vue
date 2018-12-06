<template lang="html">
  <div
    :class="[
      'vm-xs-'+vmXs,
      'vm-sm-'+vmSm,
      'vm-lg-'+vmLg,
    ]"

    :style="{
      'order':vmOrder,
      'justify-content':vmJustify,
      'display':vmType,
      'align-items':vmAlign,
      'margin-left':vmOffset*100/12+'%',
      'width':vmW*100/12+'%'}"
    class="vm-col">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'VmCol',
    props: {
      vmW: {
        type: [Number, String],
        default: 12,
      },
      vmXs: {
        type: [Number, String],
        default: ''
      },
      vmSm: {
        type: [Number, String],
        default: ''
      },
      vmLg: {
        type: [Number, String],
        default: ''
      },
      vmOffset: {
        type: [Number, String],
        default: 0
      },
      vmType: {
        type: String,
        default: null,
      },
      vmJustify: {
        type: String,
        default: null,
      },
      vmAlign: {
        type: String,
        default: null,
      },
      vmOrder: {
        default: null,
        type: [String, Number]
      }
    }
  }
</script>

<style lang="css">
  .vm-col {
    float: left;
  }

  .vm-lg-12 {
    width: 100% !important;
  }

  .vm-lg-11 {
    width: 91.66666666666667% !important;
  }

  .vm-lg-10 {
    width: 83.33333333333333% !important;
  }

  .vm-lg-9 {
    width: 75% !important;
  }

  .vm-lg-8 {
    width: 66.66666666666667% !important;
  }

  .vm-lg-7 {
    width: 58.33333333333333% !important;
  }

  .vm-lg-6 {
    width: 50% !important;
  }

  .vm-lg-5 {
    width: 41.66666666666667% !important;
  }

  .vm-lg-4 {
    width: 33.33333333333333% !important;
  }

  .vm-lg-3 {
    width: 25% !important;
  }

  .vm-lg-2 {
    width: 16.66666666666667% !important;
  }

  .vm-lg-1 {
    width: 8.333333333333333% !important;
  }

  .vm-lg-0 {
    display: none !important;
  }
  
  .vm-lg-hidden {
    display: none !important;
  }

  @media only screen and (max-width: 900px) {
    .vm-sm-12 {
      width: 100% !important;
    }

    .vm-sm-11 {
      width: 91.66666666666667% !important;
    }

    .vm-sm-10 {
      width: 83.33333333333333% !important;
    }

    .vm-sm-9 {
      width: 75% !important;
    }

    .vm-sm-8 {
      width: 66.66666666666667% !important;
    }

    .vm-sm-7 {
      width: 58.33333333333333% !important;
    }

    .vm-sm-6 {
      width: 50% !important;
    }

    .vm-sm-5 {
      width: 41.66666666666667% !important;
    }

    .vm-sm-4 {
      width: 33.33333333333333% !important;
    }

    .vm-sm-3 {
      width: 25% !important;
    }

    .vm-sm-2 {
      width: 16.66666666666667% !important;
    }

    .vm-sm-1 {
      width: 8.333333333333333% !important;
    }

    .vm-sm-0 {
      display: none !important;
    }
    
    .vm-sm-hidden {
      display: none !important;
    }
  }

  @media only screen and (max-width: 600px) {
    .vm-xs-12 {
      width: 100% !important;
    }

    .vm-xs-11 {
      width: 91.66666666666667% !important;
    }

    .vm-xs-10 {
      width: 83.33333333333333% !important;
    }

    .vm-xs-9 {
      width: 75% !important;
    }

    .vm-xs-8 {
      width: 66.66666666666667% !important;
    }

    .vm-xs-7 {
      width: 58.33333333333333% !ixsmportant;
    }

    .vm-xs-6 {
      width: 50% !important;
    }

    .vm-xs-5 {
      width: 41.66666666666667% !important;
    }

    .vm-xs-4 {
      width: 33.33333333333333% !important;
    }

    .vm-xs-3 {
      width: 25% !important;
    }

    .vm-xs-2 {
      width: 16.66666666666667% !important;
    }

    .vm-xs-1 {
      width: 8.333333333333333% !important;
    }

    .vm-xs-0 {
      display: none !important;
    }
    
    .vm-xs-hidden {
      display: none !important;
    }
  }


</style>
