<template lang="html">
  <div class="">
    <vm-tabs color="rgb(32, 201, 192)">
      <vm-tab vm-label="Top">
        <!-- top -->
        <vm-tabs color="rgb(201, 32, 178)">
          <vm-tab vm-label="Home">
            <div>
              Home
            </div>
          </vm-tab>
          <vm-tab vm-label="Service">
            <div>
              Service
            </div>
          </vm-tab>
          <vm-tab vm-label="login">
            <div>
              login
            </div>
          </vm-tab>
          <vm-tab disabled vm-label="Disabled">
            <div class="">
              Disabled
            </div>
          </vm-tab>
        </vm-tabs>

      </vm-tab>
      <vm-tab vm-label="Right">

        <!-- right -->
        <vm-tabs vm-position="right" color="rgb(29, 55, 194)">
          <vm-tab vm-label="Home">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus. Vestibulum hendrerit nibh at quam ullamcorper tempus id at nulla.
            </div>
          </vm-tab>
          <vm-tab vm-label="Service">
            <div>
              Service
            </div>
          </vm-tab>
          <vm-tab vm-label="login">
            <div>
              login
            </div>
          </vm-tab>
          <vm-tab disabled vm-label="Disabled">
            <div>
              Disabled
            </div>
          </vm-tab>
        </vm-tabs>

      </vm-tab>
      <vm-tab vm-label="Bottom">

        <!-- bottom -->
        <vm-tabs vm-position="bottom" color="rgb(29, 55, 194)">
          <vm-tab vm-label="Home">
            <div>
              Home
            </div>
          </vm-tab>
          <vm-tab vm-label="Service">
            <div class="">
              Service
            </div>
          </vm-tab>
          <vm-tab vm-label="login">
            <div>
              login
            </div>
          </vm-tab>
          <vm-tab :disabled="true" vm-label="Disabled">
            <div>
              Disabled
            </div>
          </vm-tab>
        </vm-tabs>

      </vm-tab>
      <vm-tab vm-label="Left">
        <!-- left -->
        <vm-tabs vm-position="left" color="danger">
          <vm-tab vm-label="Home">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus. Vestibulum hendrerit nibh at quam ullamcorper tempus id at nulla.
            </div>
          </vm-tab>
          <vm-tab vm-label="Service">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </vm-tab>
          <vm-tab vm-label="login">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus.
            </div>
          </vm-tab>
          <vm-tab :disabled="true" vm-label="Disabled">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo libero ac sapien pharetra finibus. Vestibulum hendrerit nibh at quam ullamcorper tempus id at nulla.
            </div>
          </vm-tab>
        </vm-tabs>

      </vm-tab>
    </vm-tabs>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
