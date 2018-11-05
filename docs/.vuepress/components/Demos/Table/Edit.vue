<template lang="html">
  <div>
    <vm-table :data="users">
      <template slot="thead">
        <vm-th>
          Email
        </vm-th>
        <vm-th>
          Name
        </vm-th>
        <vm-th>
          Nro1
        </vm-th>
        <vm-th>
          Nro2
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="tr.email">
            {{tr.email}}

            <template slot="edit">
              <vm-input v-model="tr.email" class="inputx" placeholder="Email"/>
            </template>
          </vm-td>

          <vm-td :data="tr.username">
            {{tr.username}}

            <template slot="edit">
              <vm-select
                label="Users"
                v-model="tr.username"
                >
                <vm-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in users" />
              </vm-select>
            </template>
          </vm-td>

          <vm-td :data="tr.id">
            {{tr.id}}

            <template slot="edit">
              <vm-input-number v-model="tr.id"/>
            </template>
          </vm-td>

          <vm-td :data="tr.id">
            {{tr.id}}

            <template slot="edit">
              <vm-slider :max="20" v-model="tr.id"/>
            </template>
          </vm-td>

        </vm-tr>
      </template>
    </vm-table>
  </div>
</template>

<script>
export default {
  data:()=>({

    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  }),
}
</script>
