import Vue from "vue";
import Component from "vue-class-component";

import FontAwesome from 'font-awesome-webpack'
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(FontAwesome)

@Component({
  name: "app"
})
export default class App extends Vue {
}
