<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.catUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">WHO POSTED</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">          
          <input id="username" v-model="describe" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">DESCRIBE THE PLACE</label>
        </div>
        <div class="actions">
          <a @click.prevent="postPlace" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST YOUR PLACE
          </a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
  import parse from 'xml-parser'
  export default {
    data () {
      return {
        'catUrl': '',
        'title': '',
        'describe': ''
      }
    },
    computed: {
      isCatLoaded: function () {
        return this.catUrl !== ''
      }
    },
    mounted () {
      this.$http.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
        this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
      })
    },
    methods: {
      postPlace () {
        this.$root.$firebaseRefs.place.push(
          {
            'url': this.catUrl,
            'who': this.title,
            'describe': this.describe,
            'info': 'Posted by Andrzej on Monday',
            'created_at': -1 * new Date().getTime()
          }
        ).then(
          this.$router.push('/')
        )
      }
    }
  }
</script>
<style scoped>
  img {
    width: 100%;
  }
  .mdl-spinner {
    position: relative;
    top: 50%;
    left: 50%;
  }
</style>
