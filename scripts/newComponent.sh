NAME="$1"

MAYUS="$1"
# MAYUS=($MAYUS)
# MAYUS="${MAYUS[@]^}"

if [ -e "src/components/vm$MAYUS" ]
then
    echo "This component already exists in vuemerang or the name is the same"
else

# crear documento del componente nuevo

echo '---
API:
 - name: myProp
   type: String
   parameters: null
   description: My Description prop.
   default: null
---

# '$MAYUS' **- new**

<box header>

  Text and description

</box>

<box>

## Default

<vuecode md>
<div slot="demo">
  <Demos-'$MAYUS'-Default />
</div>
<div slot="code">

```html

```

</div>
</vuecode>
</box>' > docs/components/$1.md

# dir componentes

cd src/components

# crear la carpeta del nuevo componente

mkdir vm$MAYUS

cd -

# crear archivo .vue del nuevo componente

echo '<template lang="html">
  <div
    class="vm-component vm-'${NAME}'"
    v-bind="$attrs"
    v-on="$listeners">
    Component vm'$MAYUS'
  </div>
</template>

<script>
export default {
  name: "Vm'$MAYUS'",
  inheritAttrs:false,
  data:()=>({

  }),
}
</script>' > src/components/vm$MAYUS/vm$MAYUS.vue

# editar config.js para agregar el componente nuevo al menu

echo "import vmComponent from './vm$MAYUS'

export default Vue => {
  Vue.component(vmComponent.name, vmComponent)
}" > src/components/vm$MAYUS/index.js

# add Stylus archive

echo ".vm-${NAME}
  background: rgb(14, 142, 25)" > src/components/vm$MAYUS/main.styl


SRC="\'\/components\/$1\',\n          \/\*New Component\*\/"

sed -e "s/\/\*New Component\*\//$SRC/" docs/.vuepress/config.js > script_tmp
mv script_tmp docs/.vuepress/config.js

# agregar ejemplo para documentos del nuevo componente

cd docs/.vuepress/components/Demos

mkdir $MAYUS

cd -

echo '<template lang="html">
  <div>
    <vm-'$1' />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
</style>' > docs/.vuepress/components/Demos/$MAYUS/Default.vue


# agregar import

IMPORT="export { default as vm$MAYUS } from '.\/vm$MAYUS'\n\/\/New Component import"

sed -e "s/\/\/New Component import/$IMPORT/" src/components/index.js > script_tmp
mv script_tmp src/components/index.js

# agregar import Stylus

IMPORTSTYLUS="import './vm$MAYUS/main'\n\/\/New Component import"

sed -e "s/\/\/New Component import/$IMPORTSTYLUS/" src/components/components.styl > script_tmp
mv script_tmp src/components/components.styl

# # agregar Export
# EXPORT="vm$MAYUS,\n  \/\/New Component export"

# sed -e "s/\/\/New Component export/$EXPORT/" src/components/index.js > script_tmp
# mv script_tmp src/components/index.js

fi
